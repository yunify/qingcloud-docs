---
title: "数据库操作"
description: test
weight: 10
draft: false
---



## PolonDB 日常操作

### 启动

![image-ZhiLing](../../_images/image-ZhiLing.png)

* 点击 `启动` 按钮

### 关闭

![image-ZhiLing](../../_images/image-ZhiLing.png)

* 点击 `关闭` 按钮

### 重启

![image-ZhiLing](../../_images/image-ZhiLing.png)

* 点击 `重启` 按钮

### 切换私有网络

![image-ZhiLing](../../_images/image-ZhiLing.png)

* 点击 `切换私有网络` 按钮，根据提示进行

  > 切换私有网络会重启集群

## 节点角色

![image-NodeRole](../../_images/image-NodeRole.png)

* 点击 `节点角色` 即可查看，通过 `node` 列可以查看到集群的从属关系，通过 `role` 列可以查看到角色状态。

* 角色状态

  -  `primary` ：主节点
  -  `standby` ：备节点
  -  `unknown` ：获取节点状态失败

> 带有 `副本` 标识的节点并不代表 PolonDB 集群的备节点，仅代表节点是一个组

![image-NodeRoleNode](../../_images/image-NodeRoleNode.png)

## 备份恢复

### 自动备份集群

* 在集群创建的时候指定自动备份策略。

* 在集群创建后，点击 `修改自动备份策略` 后，选择合适的时间即可。

![image-backupRestore](../../_images/image-backupRestore.png)

### 手动备份集群

查看上图，点击 `创建备份` ，即可弹出备份窗口

> 当集群节点变化，或是增量备份链达到 30 个后，会自动进行全量备份（创建新备份链），增量备份可以节省很多磁盘
>
> PolonDB 在备份的时候，可能会对业务的写入产生短暂的阻塞影响，建议在业务低峰期进行

![image-manualBackup](../../_images/image-manualBackup.png)

### 恢复集群

选择所需恢复的备份，点击 `从备份创建集群` 即可

![image-manualRestore](../../_images/image-manualRestore.png)



## 数据库用户

* 初始化用户

  创建集群时默认创建 `qingcloud` 用户（配置参数 `user_name` 可以配置用户），该用户具有 `create user ` 权限，没有 `DBA` 权限（ 在分布式数据库中 `DBA` 权限可以修改集群间的关系，导致集群不能自动进行云服务化）。

* 新建数据库用户

  可以通过初始化用户创建新的用户。

  > 在协调器创建用户的同时，注意使用 run_command_on_workers 为 Worker 创建用户

## 创建数据库

![image-ZhiLing](../../_images/image-ZhiLing.png)

* 点击 `创建数据库` 按钮，根据提示输入数据库的所有者和要创建的数据库名即可
  - 数据库所有者必须在所有节点已经存在
  - 所需创建的数据库在任何节点均不存在

## 删除数据库

![image-ZhiLing](../../_images/image-ZhiLing.png)

* 点击 `删除数据库` 按钮，输入需要删除的数据库即可


## 查看数据库日志

PolonDB 提供最近 7 天的数据库日志

* 连接所要查看节点的 `postgres` 库，通过查询表的方式即可。

```sql
postgres=> \d
                 List of relations
 Schema |      Name      |
--------+----------------+
 public | postgresql_fri
 public | postgresql_mon
 public | postgresql_sat
 public | postgresql_sun
 public | postgresql_thu
 public | postgresql_tue 
 public | postgresql_wed 

```