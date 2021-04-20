---
title: "快速入门"
description: test
draft: false
---

## 创建 MongoDB

在青云上，您可以很方便的创建和管理一个 MongoDB 集群。青云的 MongoDB 集群支持横向与纵向在线伸缩，同时具有自我诊断与自我修复功能，即当系统发现某节点坏死时会自我修复，无需人为干预。 另外我们还提供了监控告警等功能来帮助您更好的管理集群。集群将运行于私有网络内，结合青云提供的高性能硬盘，在保障高性能的同时兼顾您的数据安全。

> 为了保障数据安全，MongoDB 集群需要运行在受管私有网络中。所以在创建一个 MongoDB 集群之前，需要创建一个 VPC 和一个受管私有网络，受管私有网络需要加入 VPC，并开启 DHCP 服务（默认开启）。

### 步骤一：创建集群

在创建的对话框中，您需要填写名称 (可选)，选择 MongoDB 版本号、CPU、节点配置和数量、私有网络等。

> 目前集群节点数支持1、3、5、7，其中1个节点的 MongoDB 仅供测试使用。

> 用户默认创建在admin数据库下，连接时需要指定认证数据库为admin。

![](../../_images/step1.png)

### 步骤二：磁盘选择

_MongoDB 4.0.3 - QingCloud 1.2.0_ 添加了企业级分布式 SAN（NeonSAN），最高可支持 50000G 的磁盘扩展，可满足您大容量的数据存储需求，该功能目前仅在 `北京 3B` 、 `上海1A` 和 `广东 2 区` 支持。

![](../../_images/step2.png)

### 步骤三：网络设置

选择服务部署的私有网络，可以选择之前创建的任意网络。

![](../../_images/step3.png)

### 步骤四：服务环境参数设置

配置 MongoDB 权限账户，以及更多参数配置。

![](../../_images/step4.png)

### 步骤五：确认用户协议

阅读并同意青云 AppCenter 用户协议后，即可马上部署应用。

![](../../_images/step5.png)

### 步骤六：创建成功

当 MongoDB 创建完成之后，您可以查看每个节点的运行状态。当节点的服务状态显示为“正常”状态，表示该节点启动正常。 当每个节点都启动正常后 MongoDB 集群显示为“活跃”状态，表示您已经可以正常使用 MongoDB 服务了。

![](../../_images/step6.png)

## 测试 MongoDB

### 使用 mongo 客户端进行连接

MongoDB 创建完成之后可以进行连接测试。参考文档 https://docs.mongodb.com/manual/administration/install-on-linux/ 下载并安装 `mongodb-org-shell`，您可以在 MongoDB 同一私有网络或跨网络的客户端上测试。现假设客户端和 MongoDB 在同一私有网络，MongoDB 集群有三个节点，IP 地址分别为`192.168.0.23,192.168.0.24,192.168.0.27`， 您创建的用户名为`qc_test`，密码为`Pwd00000`，可以通过如下命令连接 MongoDB：

```shell
mongo mongodb://qc_test:Pwd00000@192.168.0.23,192.168.0.24,192.168.0.27/admin?replicaSet=foobar
```

连接成功后将出现下面的命令行：

```text
foobar:PRIMARY>
```

### 创建用户

> 创建集群时输入的用户名对应的是 readWriteAnyDatabase 权限的普通账号，无法创建用户。如果需要创建用户，请使用 root 账号，密码与你输入的密码相同。连接时请使用与集群版本相同或者偏上的版本。

下面演示如何在 `db1` 中，创建一个用户名`test_user1`，密码为`Pwd00001`，具有`readWrite`权限的用户。首先，使用 root 账号进行连接：

```shell
mongo mongodb://root:Pwd00001@192.168.0.23,192.168.0.24,192.168.0.27/admin?replicaSet=foobar
```

连接成功后执行如下的命令：

```javascript
use db1;
db.createUser({ user: "test_user1", pwd: "Pwd00001", roles: [ "readWrite" ]});
```

创建成功后可以`Ctrl+C`退回到 shell 中，使用如下命令以`test_user1`身份连接到`db1`。

```shell
mongo mongodb://test_user1:Pwd00001@192.168.0.23,192.168.0.24,192.168.0.27/db1?replicaSet=foobar
```

更多权限管理可以参考: https://docs.mongodb.com/manual/tutorial/enable-authentication/

### 使用代码进行连接

如果使用代码进行连接，那么 MongoDB 连接字符串为 mongodb://USER:PASSWORD@IP/DB?replicaSet=foobar&authSource=admin

其中:

- USER 是你所创建的用户名
- PASSWORD 是你设置的密码
- IP 是 replica set 中的节点 IP，使用逗号分隔，比如 192.168.0.23,192.168.0.24,192.168.0.27
- DB 是你需要进行连接的数据库
- replicaSet=foobar 是青云默认的 replicaSet 配置，值为 foobar
- authSource=admin 是指定验证数据库为 admin
- 更多参数可以参考: https://docs.mongodb.com/manual/reference/connection-string/