---
title: "快速入门"
description: test
draft: false
---

## 创建步骤

本节以创建高可用版本为例。

### 基本设置

这里可以填写集群的描述等信息并选择应用系列，应用版本，数据库内核以及计费方式。

![基本设置](C:/Original_qingcloud_doc/qingcloud-iaas-docs-master/database_cache/app_mysql_plus/_images/base_step_1.png)

若开启自动备份，则在每天指定时间段都会创建一次备份。

多可用区域将节点分散部署在不同区，可用性高。单可用区域将节点部署在同一个区，网络延迟最低。

**注解**：只有选择部署在『region』（比如北京三区）时，才可以选择部署方式。如果您选择『多可用区部署』，则集群所有节点将分散部署在当前 region 中的所 有zone，反之，如果选择『单可用区部署』，则集群所有节点将部署在当前region中的某一个 zone 中。

### 主实例设置

可以选择数据库的硬件配置，磁盘大小。磁盘大小决定了数据库最大容量以及 IOPS 能力，您的数据和日志会共享这块磁盘。

![主实例设置](C:/Original_qingcloud_doc/qingcloud-iaas-docs-master/database_cache/app_mysql_plus/_images/base_step_2.png)

### 网络设置

数据库集群服务只能加入已连接路由器的私有网络，并确保该私有网络的 DHCP 处于『打开』状态。 使用一个数据库独享的私有网络的好处是方便您对其做『过滤控制』，同时也不影响其它私有网络的设置。

**注解**：此处展示的私有网络，其部署方式与[基本设置](#基本设置)中选择的部署方式是一致的。也就是说，如果您选择的集群部署方式是多可用区部署，则只能看到多可用区的私有网络。关于如何在region创建VPC、私有网络，请参考[区域(region)与可用区(zone)](https://docs.qingcloud.com/product/region)。

![网络设置](C:/Original_qingcloud_doc/qingcloud-iaas-docs-master/database_cache/app_mysql_plus/_images/base_step_3.png)


### 服务环境参数设置

设置数据库服务的配置参数。

![参数设置](C:/Original_qingcloud_doc/qingcloud-iaas-docs-master/database_cache/app_mysql_plus/_images/base_step_4.png)

### 用户协议

阅读并同意青云AppCenter用户协议之后即可开始部署应用。