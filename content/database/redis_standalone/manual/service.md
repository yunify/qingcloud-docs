---
title: "服务功能"
description: test
weight: 4
draft: false
---

## 切换私有网络

> 切换私有网络会重启集群，请在集群压力较小时操作。

- 步骤一

在 `基本属性` 中选择「切换私有网络」

![切换私网](../../_images/switch_vxnet1.png)

- 步骤二

选择要切换的 VPC 网络和私有网络，点击提交即可

![切换私网](../../_images/switch_vxnet2.png)


## 扩容集群

如果集群的配置不满足现在的需求，可以对集群进行扩容/缩容。

> 该操作会重启集群，请在集群压力较小时操作。

> 单独扩容磁盘大小不会重启集群


- 步骤一

![扩容集群](../../_images/increase_cluster_1.png)
​

- 步骤二

操作完上面的步骤，就会出现下面的选项，按照自己的需求选择相应的内存和磁盘大小，确认无误后点击提交即可
​
​![扩容集群](../../_images/increase_cluster_2.png)



## 同步日志

`Redis 5.0.3 - QingCloud 1.2.2` 添加了「同步日志」的功能，您可以打开「同步日志」，下载 redis-server.log，也可以通过浏览器来查看日志信息，默认的用户名为 caddy，密码为 caddy，您可以在「配置参数」中修改为您自己的用户名和密码。

![](../../_images/copy_log.png)

![](../../_images/copy_log_1.png)



## 禁用命令的执行

为了您的数据安全，我们禁用了部分命令，并在前端开启了常用的命令操作：

![](../../_images/run_command_1.png)

![](../../_images/run_command_2.png)

- 清空数据

  - 您可以根据需求来选择不同的执行命令

    - FLUSHALL: 清空所有的数据

    - FLUSHDB: 清空指定数据库的数据

- RDB 文件下载

  - 先执行 BGSAVE 命令，该命令会在主节点生成最新的 RDB 文件

  - 根据 [文件下载](../cluster_info/#文件下载) 的说明下载主节点的 RDB 文件使用

## 升级版本

> 如果在您集群的基本属性中存在如下图所示的『有新版本可用，关闭集群后升级』，便可升级版本。

![升级版本](../../_images/upgrade_version_1.png)

操作步骤：

- 步骤一，先关闭集群，点击如图所示的『升级』，就会出现步骤二中的界面
  ![升级版本](../../_images/upgrade_version_2.png)

- 步骤二，选择需要升级的版本，点击升级即可

![升级版本](../../_images/upgrade_version_3.png)

## 其他

为了更好的管理 Redis 服务，我们默认禁用一些 Redis 的命令，禁用的命令列表如下：

- **BGREWRITEAOF**
- **BGSAVE**
- **DEBUG**
- **CONFIG**
- **SAVE**
- **SHUTDOWN**
- **SLAVEOF**
- **REPLICAOF**
- **KEYS**

为兼容 Redis 5.0.3 - QingCloud 1.2.2 之前的版本，该版本默认开启了如下命令，升级集群的用户依旧保持开启该命令，我们强烈建议新建集群的用户禁用掉该命令，该命令的误操作，会对数据造成不可恢复的丢失：

- **FLUSHDB**
- **FLUSHALL**

您可以通过参数配置页打开 _CONFIG_ 、 _SAVE_ 、 _KEYS_ 命令，但我们强烈不推荐您这么做。错误地使用 _CONFIG_ 命令可能会导致服务的不可用，我们建议您在生产环境上使用默认设置来禁用这三个命令。 当您需要打开命令时，在配置参数页取消勾选 DISABLE_ALL 选项，并勾选您需要打开的命令，保存配置，服务会自动重启以生效。

![enable_commands](../../_images/set_commands.png)

## 测试服务

集群创建完成后，可以使用 redis-cli 来测试服务是否正常运行。

在同一私网下创建一台 Linux 主机，下载与集群 redis 版本相同的 redis，这里以 [redis 5.0.7](http://download.redis.io/releases/redis-5.0.7.tar.gz) 版本为例，编译，进入 src 目录执行下面的命令

- 查询主节点的角色

```shell
$~: ./redis-cli -h 192.168.2.247 info replication
# Replication
role:master
connected_slaves:2
slave0:ip=192.168.2.47,port=6379,state=online,offset=436236,lag=1
slave1:ip=192.168.2.46,port=6379,state=online,offset=436236,lag=1
master_replid:9582e5f0afd04a972fc5c01014a4767bc1efb225
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:436373
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:436373

```

- 插入一个 key value 对

```shell
$~: ./redis-cli -h 192.168.2.247 set a b
OK
```

- 获取 key 的 value

```shell
$~: ./redis-cli -h 192.168.2.247 get a
"b"
```

