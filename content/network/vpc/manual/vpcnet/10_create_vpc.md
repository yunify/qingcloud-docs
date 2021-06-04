---
title: "创建 VPC 网络"
linkTitle: "创建 VPC 网络"
date: 2021-05-19T10:08:56+09:00
description:
draft: false
weight: 10
---

## 操作场景

在 VPC 网络中使用云资源前，您必须先创建一个 VPC 网络和私有网络。VPC 网络具有地域属性，私有网络具有可用区属性，一个 VPC 网络内至少包含一个私有网络，您也可以在一个 VPC 网络中创建多个私有网络来划分子网，同一个 VPC 内的子网默认私网互通。

本章节用于指导您创建一个新的VPC网络。

## 操作步骤

1. 登录[QingCloud 管理控制台](hhttps://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **网络服务** > **VPC网络**，进入**VPC网络**页面。

3. 点击**创建VPC网络**，弹出**创建VPC网络**页面。

   <img src="/network/vpc_2.0/_images/501010_create_vpc.png" alt="create_vpc" style="zoom:50%;" />

3. 配置 VPC 网络信息。

<table>
  <tr>
  	<th style="text-align: center; width: 120px">参数项目</th>
 		<th style="text-align: center">参数说明</th>
  </tr>
  <tr>
  	<td>名称</td>
  	<td>VPC 网络的名称。</td>
  </tr>
  <tr>
  	<td>IPv4 地址范围</td>
  	<td>选择 VPC 的 IPv4 网段。为 VPC 网络划分子网时，子网必须在该地址范围内。<br>目前支持网段范围：192.168.0.0/16、172.16.0.0/16-172.31.0.0/16。</td>
  </tr>
  <tr>
  	<td>IPv6网络地址</td>
  	<td>选择是否为 VPC 网络分配 IPv6 网段。<li><b>关闭IPv6</b>：默认选项，即不分配IPv6网段</li><li><b>系统自动分配</b>：开启 IPv6 功能，并自动为子网分配 IPv6 网段。</li></td>
  </tr>
   <tr>
  	<td colspan="2">管理路由器属性</td>
  </tr>
  <tr>
  	<td>类型</td>
  	<td>支持免费型、小型、中型、大型及超大型，不同类型可支持的管理流量转发能力不同。 <br>
     <div style="background-color: #D8ECDE;padding: 10px 24px; margin: 10px 0;border-left:3px solid #00a971;"><b>说明</b>：<br>
       若需要 VPC 具备访问公网能力，请勿选择<b>免费型</b>。免费型 VPC 仅具有内网通信功能，不支持绑定公网 IP 和转发公网流量，且暂不支持在免费型 VPC 中创建弹性容器实例(QCI)、AppCenter 集群和边界路由器。
      </div>
   	</td>
  </tr>
  <tr>
  	<td>安全组</td>
    <td>选择安全组。若未创建安全组，可选择默认安全组，可以根据需要自行创建，具体操作参见<a  href="/security/security_group/manual/sg_create">创建安全组</a>。</td>
  </tr>
</table>


4. 点击**创建**，等待创建成功。

