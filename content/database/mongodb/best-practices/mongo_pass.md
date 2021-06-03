---
title: "MongoDB Paas 文档"
description: 本小节主要介绍 QingCloud MongoDB 使用简介。 
keywords: mongodb 使用简介, 
data: 2021-05-14T00:38:25+09:00
weight: 1
collapsible: false
draft: false
---

QingCloud Mongo 服务即 MongoDB replica set 集群， 默认情况下包括两个 replica set 节点(replica 和 priority0)，在此基础上， 你也可以添加多个 replica set 节点以满足更个性化的使用场景和业务需求。 同时，我们还提供了在线扩容、自动备份、灵活配置和监控告警等功能来帮助你更好地管理集群。 QingCloud Mongo 服务亦运行于你专属的私有网络下，最大限度地保证了你的数据安全。

## 新建

在控制台导航中点击 MongoDB 进入列表页面，然后点击『创建』按钮开始创建。

**私有网络**

建议将 Mongo 服务放入独立的私有网络中，并确保该网络的 DHCP 处于『打开』状态； 使用一个 Mongo 独享的私有网络的好处是方便您对其做『过滤控制』，同时又不影响其它网络的设置。

![](../../_images/mongo-vxnet.png)

**资源设置**

在资源设置页中可以选择 Mongo 的配置、存储磁盘大小以自动备份时间； Mongo 的配置决定了默认的最大连接数； 存储磁盘大小则决定了 MongoDB 的最大容量，您的数据和日志共享这块磁盘； 最后，请谨慎选择是否关闭自动备份功能。

![](../../_images/create-mongo-step0.png)

**网络设置**

选择将 Mongo 放入一个私有网络，如果有特殊需要，也可以手工指定 Mongo 各节点的 IP 地址。

![](../../_images/create-mongo-step1.png)

**账号设置**

在账号设置页中输入 Mongo 服务的名称（可以为空）、用户名和密码； 我们会为你创建一个拥有 readWriteAnyDatabase 权限的普通账号，和一个拥有 root 权限的特权账号。

![](../../_images/create-mongo-step2.png)

点击『提交』按钮后就会开始创建您独享的 Mongo 服务了， 如果之后需要对其做任何修改和调整，都可以在 Mongo 详情页中进行相应的操作。

**Mongo 角色状态**

您创建的 Mongo 集群中包含 replica 和 priority0 两种命名的节点：

- mongod 主节点会在 replica 命名节点中选出

- priority0 命名的节点仅作为备份节点使用，其 mongod 角色一直为 Secondary，不会发生变化

## 扩容

可以对一个运行中的 Mongo 服务进行在线扩容，右键点击您需要扩容的 Mongo 集群并选择『扩容』即可。

![](../../_images/resize-mongo-step0.png)

>警告
需要注意的是，如果你的集群只有默认的两个节点，那么在扩容期间，Mongo 服务会有一段时间处于只读状态；如果多于两个节点，扩容期间 MongoDB 集群会自动选主，因此 Primary 节点的 IP 地址可能会发生变化。

## 备份

**自动备份**

如果您打开了『自动备份』功能，那么 Mongo 服务会在你指定的时间段进行每日的自动备份； 这些自动备份会连同您的手动备份一起至多保留20天； 您可以从这些备份创建出全新的 Mongo 服务；

**手动备份**

如果您关闭了自动备份，那么在添加 replica set 节点前需要先执行一次手动备份； 可以在 Mongo 服务列表右键某个集群后点击『创建备份』选项， 或者在 Mongo 详情页的『备份』标签下点击『创建备份』按钮。

![](../../_images/create-mongo-snap-step0.png)

**创建新 Mongo**

如果需要从备份创建出一个独立于原有 Mongo 服务的新 Mongo 服务， 可以在 Mongo 详情页的『备份』标签下右键相应的备份点，再选择『新建 Mongo 服务』即可。

## 监控

目前提供的监控项包括：

*   CPU 使用率
*   内存使用率
*   硬盘使用率
*   MongoDB 各项操作数量
*   MongoDB 复制操作数量
*   MongoDB 连接数

## 操作

**连接 Mongo 服务**

> 注解
连接 MongoDB 的客户端版本需要在 3.0 以上。

Mongo 服务创建成功之后，就可以通过提供的 IP 地址来访问。

![](../../_images/mongo-list-0.png)

比如针对上图中的 Mongo 服务，就可以通过 replica set 的 primary 节点 IP 192.168.166.4 来访问。

>注解
连接时需要指定验证数据库为 admin

![](../../_images/mongo-list-1.png)

如果使用代码进行连接, 那么 MongoDB 连接字符串为 mongodb://USER:PASSWORD@IP/DB?replicaSet=foba&authSource=admin

其中:


*   USER 是你所创建的用户名
*   PASSWORD 是你设置的密码
*   IP 是 replica set 中的节点 IP, 使用逗号分隔, 比如 192.168.100.2,192.168.100.3
*   DB 是你需要进行连接的数据库
*   replicaSet=foba 是青云默认的 replicaSet 配置, 值为 foba
*   authSource=admin 是指定验证数据库为 admin
*   更多参数可以参考: [https://docs.mongodb.com/manual/reference/connection-string/](https://docs.mongodb.com/manual/reference/connection-string/)


**创建新账号**

可以使用 root 账号连接到 MongoDB 后，执行 db.createUser 命令创建新账号。

![](../../_images/create-mongo-user-0.png)

**导入数据**

可以使用 mongoimport 工具向 MongoDB 导入已有数据，关于 mongoimport 的使用可以参考官方文档 [http://docs.mongodb.org/manual/reference/program/mongoimport/](http://docs.mongodb.org/manual/reference/program/mongoimport/)

## 基准测试

我们用 [Yahoo! Cloud Serving Benchmark](https://github.com/brianfrankcooper/YCSB) 工具套件进行了基准测试，下面分别是各配置的测试结果截图和详细的数据准备报告和测试结果报告。

**1核2G**

Throughput(ops/sec): 521 [数据准备](../../_images/ycsb_mongo_c1m2_1.load) [测试结果](../../_images/ycsb_mongo_c1m2_1.run)

![](../../_images/ycsb_mongo_c1m2.png)

**2核4G**

Throughput(ops/sec): 1193 [数据准备](../../_images/ycsb_mongo_c2m4_1.load) [测试结果](../../_images/ycsb_mongo_c2m4_1.run)

![](../../_images/ycsb_mongo_c2m4.png)

**4核8G**

Throughput(ops/sec): 1968 [数据准备](../../_images/ycsb_mongo_c4m8_1.load) [测试结果](../../_images/ycsb_mongo_c4m8_1.run)

![](../../_images/ycsb_mongo_c4m8.png)

下面同时运行了两个 YCSB 实例来对8核16G和8核32G配置的 Mongo 进行基准测试， 需要注意的是两个 YCSB 实例实际上也并不能压满 MongoDB 的性能，所以 OPS 仅供参考之用。

**8核16G** Throughput(ops/sec): 2087/1890 [数据准备](../../_images/ycsb_mongo_c8m16_1.load) [测试结果 A](../../_images/ycsb_mongo_c8m16_1.run) [测试结果 B](../../_images/ycsb_mongo_c8m16_2.run)

![](../../_images/ycsb_mongo_c8m16.png)

**8核32G** Throughput(ops/sec): 2304/2074 [数据准备](../../_images/ycsb_mongo_c8m32_1.load) [测试结果 A](../../_images/ycsb_mongo_c8m32_1.run) [测试结果 B](../../_images/ycsb_mongo_c8m32_2.run)

![](../../_images/ycsb_mongo_c8m32.png)
