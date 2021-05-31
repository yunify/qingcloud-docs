---
title: "快速创建 PostgreSQL 集群"
description: 本小节主要介绍如何快速创建 PostgreSQL 集群。 
keywords: PostgreSQL, QingCloud, 实例创建
data: 2021-05-14T00:38:25+09:00
weight: 1
collapsible: false
draft: false
---




本小节主要以 `PG11-高可用版-V1.0.6` 为例介绍快速部署 PostgreSQL 集群。

## 基本设置  

![基本设置](../../_images/basic_config.png)
根据自己的需求填写 `应用名称` 和 `应用描述`，选择 `版本` 为 `PG11-高可用版-V1.0.6` ，可以选择不同的资源配置类型和计费方式。

## 网络设置

![网络设置](../../_images/vxnet_config.png)

出于安全考虑，所有的集群都需要部署在私有网络中，选择自己创建的网络中。

## 参数设置

![服务环境参数设置](../../_images/pg_param_config.png)
界面提供的参数大部分和 PostgreSQL 性能相关，如果需要调整相关参数，可以按照自己的实际需求配置和调整相关参数，修改部分参数会导致 PostgreSQL 服务重启，具体可以参考参数说明。

在配置高可用版本参数时，会比单节点版本的设置多出如下一个参数。
该参数用于设置主从复制模式是同步流复制还是异步流复制，默认是同步流复制。
![服务环境参数设置](../../_images/pg_param2more_config.png)

 >注意：
 >`PostgreSQL on QingCloud AppCenter` 在初始化的时候，会根据服务器参数中用户输入的数据库名称，数据库用户，和数据库密码创建数据库账户。同时，为了方便用户维护，会自动创建数据库超级用户 (superuser) root，密码和用户在服务器参数中设置的数据库密码相同。

## 用户协议确认  

阅读并同意青云 AppCenter 用户协议，即可开始部署应用。

![用户协议确认](../../_images/pg_userprotocol_config.png)

## 访问 PostgreSQL

通过 psql 命令行客户端 ，用新建集群步骤中定义的数据库用户名和密码，连接到新创建的自定义的 PostgreSQL 应用。

输入命令：`psql -U qingcloud -h 192.168.100.246 -d qingcloud`

>-U 参数值是上图的服务器参数：数据库用户名，  
>-h 参数值是postgresql节点的IP或者是双节点集群的VIP，  
>-d 参数值可以是上图服务器参数:数据库名称。    
>输入的密码是上图服务器参数：数据库密码。  

输入命令：`\l`， 可以查看当前 PostgreSQL server 上的数据库信息。  
  ![登录PG database](../../_images/pglogin.png)  

除了用 psql 命令行客户端连接数据库之外，还可以使用自己熟悉的其他图形化的数据库客户端连接到 PostgreSQL DB 上，方便做数据库操作以及数据库开发等工作。  
例如：pgAdmin 、DbVisualizer 、DBeaver 等。
