---
title: "绑定和解绑私有网络"
descriptipn: NAT 网关如何绑定私有网络。
draft: true
weight: 10
keyword: QingCloud, 云计算, 青云, NAT网关, NAT
---

## 前提条件

已创建 VPC 网络及私有网络。具体操作，请参见[创建 VPC 网络](/network/vpc/manual/vpcnet/10_create_vpc/)。

## 背景信息

在创建 NAT 网关时，系统会在该 NAT 网关所属 VPC 的关联路由表中自动下发一条自定义类型的路由（目标网络0.0.0.0/0，下一跳指向当前创建的 NAT 网关），用户可以修改、删除、启用/禁用该路由条目。

> **注意**
>
> 若删除，SNAT 规则配置后不会生效。

##  操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，在控制台导航栏中，选择**产品与服务** > **网络服务** > **NAT 网关**，进入 **NAT 网关**页面。

2. 点击**创建**，进入**创建 NAT 网关**页面。
3. 按照下表说明，配置 NAT 网关信息。
4. 



