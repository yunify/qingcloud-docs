---
title: "RocketMQ CLI命令示例"
description: test
weight: 16
draft: false
---

用户可使用`ubuntu/p12cHANgepwD`通过网页VNC登录客户端节点进行操作。

下面列举几个常见操作，详情可参见[官方使用文档](http://rocketmq.apache.org/docs/cli-admin-tool/)。

> **注意**：通过此客户端可以对集群中的实际数据进行增删改，请谨慎操作。

## 发送测试消息

```
$ /opt/apache-rocketmq/current/bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
```

> **注意**：
>
> - `RocketMQ 4.3.1 - QingCloud 1.0.0`版本节点的环境变量已经内置了name server的地址列表以方便用户使用。
> - 如果在用户使用过程中，管理员对name server节点进行了调整（增删节点），可以退出重新登录以使环境变量生效，或者通过命令重新加载环境变量：`source /etc/profile.d/rocketmq-path.sh` 。
> - `RocketMQ 4.7.1 - QingCloud 1.1.0`版本需要设定环境变量，`export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64`； `export NAMESRV_ADDR=namesrv_node_ip:9876` ，同时所有脚本位于 `/opt/rocketmq/current/bin/*` 。

## 接收消息

```
$ /opt/apache-rocketmq/current/bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer
```

> **注意**：
>
> - `RocketMQ 4.3.1 - QingCloud 1.0.0`版本节点的环境变量已经内置了name server的地址列表以方便用户使用。
> - 如果在用户使用过程中，管理员对name server节点进行了调整（增删节点），可以退出重新登录以使环境变量生效，或者通过命令重新加载环境变量：`source /etc/profile.d/rocketmq-path.sh` 。
> - `RocketMQ 4.7.1 - QingCloud 1.1.0`版本需要设定环境变量，`export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64`；`export NAMESRV_ADDR=namesrv_node_ip:9876` ，同时所有脚本位于 `/opt/rocketmq/current/bin/*` 。

## 创建Topic

```
$ /opt/apache-rocketmq/current/bin/mqadmin updateTopic -c DefaultCluster -b 192.168.2.26:10911 -n 192.168.2.29:9876 -t qingcloud
```

> **提示**：
>
> - `-c`参数后面指定集群名称（在集群“配置参数”选项卡里设置，如未设置则默认为DefaultCluster）。
> - `-b`参数后面指定broker地址。
> - `-n`参数后面指定name server地址。

## 删除Topic

```
$ /opt/apache-rocketmq/current/bin/mqadmin deleteTopic -c DefaultCluster -n 192.168.2.29:9876 -t qingcloud
```

> **提示**：
>
> - `-c`参数后面指定集群名称（在集群“配置参数”选项卡里设置，如未设置则默认为DefaultCluster）。
> - `-n`参数后面指定name server地址。