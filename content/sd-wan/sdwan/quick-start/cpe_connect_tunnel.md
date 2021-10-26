---
title: "光盒经 VPC 访问第三方网络"
linkTitle: "光盒经 VPC 访问第三方网络"
description:
draft: false
weight: 40
---

本篇指南旨在帮助用户使用光格 SD-WAN 服务实现光盒经过 VPC 访问第三方网络。 

## 总览

下图展示了本指南所要构建的网络拓扑：

![](../../_images/cpe_connect_tunnel_topology.jpg)

## 操作

第一步： VPC 和 第三方网络通过 GRE 隧道建立连接。


创建 VPC 并配置 GRE 隧道， 配置 GRE 时需要设置 **目标网络** 为第三方网络。

![](../../_images/intranet_router_gre.jpg)

第三方网络配置 GRE 时需要配置目的网络为光盒网络，光盒网络即为第四步 “配置光盒” 中的 LAN 网段。

隧道配置详见[GRE隧道](/network/vpc/manual/tunnel/gre)和[IPSEC隧道](/network/vpc/manual/tunnel/ipsec)。

    注意：本指南中以 GRE 隧道为例子，同时也可以使用其他隧道比如 ipsec。

第二步：创建 WAN 网。


登陆WEB 控制台，在顶部的导航栏里搜索**企业云网**，接着在右边区域点击**创建企业云网**按钮，输入名称即可创建专属 WAN 网。

![](../../_images/create_wan_net.png)

    注意：此步骤只针对首次使用光格 SD-WAN 服务的用户。

第三步：创建光盒接入点。


用户把光盒插入电源，并将 Internet 链路插入光盒WAN口，然后登录 WEB 控制台，点击左边导航栏中的**光盒**，接着在右边区域点击**创建接入点**，选择光盒类型并填入相应的信息即可。

![](../../_images/create_wan_cpe.png)

    注意：光盒序列号在光盒背面可以找到, 格式类似: 1c2c997dfb81。

第四步：配置光盒。

点击创建好的接入点, 进入详情页即可配置光盒。 
![](../../_images/describe_wan_cpe.png)   

通常, 配置 LAN 口, 设置好光盒的 LAN 网段、网关地址并启动 DHCP 即可。 
![](../../_images/lan_config.png)

    注意：配置之后需要点击"应用修改"以生效。

第五步：创建边界路由器。


登陆WEB 控制台，在顶部的导航栏里搜索**边界路由器**，进入详情页面后，点击**创建**即可创建边界路由器。详细操作可参考[边界路由器操作指南](../../../../../network/border_router/manual/border_user_guide)。


第六步：将边界路由器绑定 VPC 网络。


点击创建好的边界路由器进入边界路由器详情页，然后点击**绑定 VPC 网络**，选择 即将与第三方网络建立隧道的 VPC 。

![](../../_images/intranet_router_vpc.jpg)

![](../../_images/intranet_router_vpc_detail.jpg)

第七步：配置边界路由器的静态路由。


在边界路由器详情页，点击**添加路由**，目标网络指定为第三方网络，下一跳是绑定的 VPC ，提交配置。

![](../../_images/intranet_router_static_route.jpg)

    注意：配置之后需要点击"应用修改"以生效。

完成以上步骤后，光盒客户端即可和第三方网络建立连接。
