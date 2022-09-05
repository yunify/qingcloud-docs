---
title: "Etcd 单个节点宕机后无法自动恢复"
description: 本文主要介绍 Etcd 单个节点宕机后无法自动恢复的解决方案。 
keyword: 云计算,大数据,消息队列,中间件,Etcd,单个节点宕机
weight: 01
collapsible: false
draft: false
aliases: 
---

本文主要介绍 Etcd 单个节点宕机后无法自动恢复的解决方案。该方案操作期间集群正常提供服务，不影响用户业务。

## 适用范围

Etcd 版本为 etcd 3.4.16 - 2.0.1 及以上版本。

## 问题现象

3 节点或 5 节点的 Etcd 集群，其中一个节点所在物理机发生宕机，节点迁移后，该节点上的 Etcd 程序未能启动，导致单节点监控异常（此时 Etcd 集群服务正常）。

## 解决方案

移除异常的 etcd 节点，再重新添加节点，即可将节点到恢复`活跃`状态。

### 步骤一：停止进程

> **说明**
> 
> AppCenter 中健康检查机制会定时触发，如果检测到不健康，会调用相应的 cmd 脚本，APP 内部可以在 cmd 脚本里面启动这个服务。为了避免 Appcenter 一直不停地启动这个服务，需要执行以下步骤停止异常节点上的进程，否则可能导致无法正常恢复 Etcd 节点。


1. 登录异常的 etcd 节点。例如 192.168.0.101 异常。

2. 执行以下命令，复制 etcd.service 文件并命名为 etcd1.service。

   ```
   mv /etc/systemd/system/etcd.service /etc/systemd/system/etcd1.service
   ```

2. 执行以下命令，停止进程。

   ```
   systemctl daemon-reload
   systemctl stop etcd
   ```

### 步骤二：重新添加节点

1. 登录任一正常的 etcd 节点。例如 192.168.0.102。

2. 执行以下命令，查看集群节点列表，获取异常节点的 member id。

   ```
   /opt/etcd/current/etcdctl member list --endpoints=http://192.168.0.102:2379
   ```

   如下回显信息中，异常节点 192.168.0.101 的 member ID 为 `ac2f188e97f50eb7`。

   ```
   1ce6d6d01109192, started, etcd03, http://192.168.0.102:2380, http://192.168.0.102:2379
   9b534175b46ea789, started, etcd01, http://192.168.0.100:2380, http://192.168.0.100:2379
   ac2f188e97f50eb7, started, etcd02, http://192.168.0.101:2380, http://192.168.0.101:2379
   ```

3. 执行以下命令，移除异常节点。

   ```
   /opt/etcd/current/etcdctl member remove ac2f188e97f50eb7 --endpoints=http://192.168.0.102:2379
   ```

   `ac2f188e97f50eb7` 为上一步获取的异常节点的 member ID。

4. 执行以下命令，重新加入节点。

   ```
   /opt/etcd/current/etcdctl member add etcd02 --peer-urls="http://192.168.0.101:2380" --endpoints=http://192.168.0.102:2379
   ```

​		`etcd02` 为异常节点的 node ID。

### 步骤三：修改配置文件

1. 登录异常的 etcd 节点。

2. 执行以下命令，删除异常节点的数据。

   >  **注意**
   > 
   > 节点删除后，集群中的成员信息会更新，新节点加入集群是作为一个全新的节点加入，如果 data-dir 有数据，etcd 启动时会读取己经存在的数据，启动时仍然用旧的 member ID，也会造成集群无法加入，所以一定要清空节点的 data-dir。

   ```
   rm -rf /var/lib/etcd/default.etcd
   ```

3. 执行以下命令，复制 etcd.env 并命名为 etcd1.env。

   ```
   cp /opt/app/conf/etcd.env /opt/app/conf/etcd1.env 
   ```

4. 执行以下命令，修改 etcd1.env 配置文件。

   ```
   vi /opt/app/conf/etcd1.env
   ```

   修改 ETCD_INITIAL_CLUSTER_STATE 的值为 `existing`。

   ```
   ETCD_INITIAL_CLUSTER_STATE=existing
   ```

   > **注意**
   >
   > 如果配置为 `new` 则会自动生成一个新的 member ID，和前面添加节点时生成的 ID 不一致，从而导致节点 ID 不匹配（可以通过日志查看错误信息）。

5. 执行以下命令，修改 etcd1.service 文件。

   ```
   vi /etc/systemd/system/etcd1.service
   ```

   修改 EnvironmentFile 的值为 etcd1.env。

   ```
   EnvironmentFile=/opt/app/conf/etcd1.env
   ```

6. 执行以下命令，重启 etcd 节点。

   ```
   systemctl daemon-reload
   systemctl start etcd1.service
   ```

   等待一会，这时候会同步数据，稍等再查看节点状态。

### 步骤四：查看状态

1. 登录任一 etcd 节点。

1. 执行以下命令，查看节点健康状态。

   ```
   /opt/etcd/current/etcdctl endpoint health --endpoints=http://192.168.0.101:2379
   ```

   正常显示如下：
   
   ```
   http://172.22.2.43:2379 is healthy: successfully committed proposal: took = 4.480088ms
   ```
   
2. 执行以下命令，查看集群节点列表。

   ```
   /opt/etcd/current/etcdctl member list  --endpoints=http://192.168.0.102:2379
   ```

   回显信息如下：

   ```
   1ce6d6d01109192, started, etcd03, http://192.168.0.102:2380, http://192.168.0.102:2379
   41c2a7b938a5e387, started, etcd02, http://192.168.0.101:2380, http://192.168.0.101:2379
   9b534175b46ea789, started, etcd01, http://192.168.0.100:2380, http://192.168.0.100:2379
   ```

3. 执行以下命令，查看集群的健康状态。

   ```
   ETCDCTL_API=3 /opt/etcd/current/etcdctl endpoint health --endpoints=http://192.168.0.102:2379,http://192.168.0.100:2379,http://192.168.0.101:2379
   ```

   都是健康，表示集群已恢复。

### 步骤五：环境恢复

1. 登录之前异常的 etcd 节点。
2. 执行以下命令，删除 etcd1.service 和 etcd1.env。

   ```
   mv /etc/systemd/system/etcd1.service /etc/systemd/system/etcd.service
   rm -rf /opt/app/conf/etcd1.env 
   ```

3. 执行以下命令，将 etcd.service 中 EnvironmentFile 的引用恢复为原来的状态。

   ```
   vi /etc/systemd/system/etcd.service
   ```

   修改 EnvironmentFile 的值为 etcd.env。

   ```
   EnvironmentFile=/opt/app/conf/etcd.env
   ```

2. 执行以下命令，重启 etcd 节点。

   ```
   systemctl daemon-reload
   systemctl stop etcd1
   systemctl start etcd
   ```

### 步骤六：结果验证

进入 Etcd 集群的详情页面，若集群和节点的状态均为`活跃中`，表示恢复成功。
