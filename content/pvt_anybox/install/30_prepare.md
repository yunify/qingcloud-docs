---
title: "准备工作"
description: 准备工作
weight: 30
draft: false
---

在青云QingCloud 公有云上，您可以便捷、快速地创建和管理一个 ANYBOX 内容协作平台。平台将运行于您的私有网络内，结合青云QingCloud 对象存储，在保障高性能的同时兼顾您的数据安全。

在创建 ANYBOX 内容协作平台之前，需要您做好如下准备工作：

为了保障数据安全，ANYBOX  内容协作平台需要运行在受管私有网络中。在创建 ANYBOX 内容协作平台之前，您需要创建一个 VPC 和一个受管私有网络， 若还未创建请参考 [创建 VPC](https://docs.qingcloud.com/product/network/vpc) 和 [创建私有网络](https://docs.qingcloud.com/product/network/appcenter_network_config/create_vxnet)。受管私有网络需要加入VPC，并开启 DHCP 服务（默认开启）：

**创建 VPC，如下图：**  

![](https://anybox-docs.pek3b.qingstor.com/installation/images/images01.jpg)

**创建私有网络，如下图：**  
![](https://anybox-docs.pek3b.qingstor.com/installation/images/images02.jpg)

**申请公网 IP**  
首先需申请公网 IP 地址，网络与 CDN ‣ 公网 IP ‣ 申请 ‣ 填入公网 IP 名称 ‣ 提交，见下图步骤：  
![](https://anybox-docs.pek3b.qingstor.com/installation/images/images05.jpg)

绑定公网 IP 到 VPC，网络与 CDN ‣ 公网 IP ‣ 选中公网 IP ‣ 绑定到 VPC 网络 ‣ 提交，见下图步骤：  
![](https://anybox-docs.pek3b.qingstor.com/installation/images/images06.jpg)

**预先创建 API 密钥，如下图：**  
![](https://anybox-docs.pek3b.qingstor.com/installation/images/images09.jpg)

从如上图的菜单中进入创建API密钥页面
![](https://anybox-docs.pek3b.qingstor.com/installation/images/images10.jpg)

选择创建即可新建API密钥

**为了更好地方便您使用 ANYBOX 内容协作平台，需要准备一个已备案的域名。**  
如果您的域名还未备案，请参考 [ICP 备案](https://beian.qingcloud.com/icp) 申请备案。

