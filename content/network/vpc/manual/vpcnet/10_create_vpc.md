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

本章节用于指导您创建一个新的 VPC 网络。

## 操作步骤

1. 登录[管理控制台](https://console.qingcloud.com/pek3)。
2. 在控制台导航栏中，选择**产品与服务** > **网络服务** > **VPC 网络**，进入**VPC 网络**页面。

2. 点击**创建VPC网络**，弹出**创建VPC网络**页面。

   <img src="/network/vpc/_images/501010_创建VPC1.0.png" alt="501010_创建VPC1.0" style="zoom:70%;" />

3. 配置 VPC 网络信息。

<table>
  <tr>
  	<th style="width: 120px">参数项目</th>
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
  	<td>IPv6 网络地址</td>
  	<td>选择是否为 VPC 网络分配 IPv6 网段。<li><b>关闭 IPv6</b>：默认选项，即不分配 IPv6 网段</li><li><b>系统自动分配</b>：开启 IPv6 功能，并自动为子网分配 IPv6 网段。</li></td>
  </tr>
   <tr>
  	<td colspan="2">管理路由器属性</td>
  </tr>
  <tr>
  	<td>类型</td>
  	<td>支持小型、中型、大型及超大型，不同类型可支持的管理流量转发能力不同。</td>
  </tr>
  <tr>
  	<td>安全组</td>
    <td>选择安全组。若未创建安全组，可选择默认安全组，可以根据需要自行创建，具体操作参见<a  href="/security/security_group/manual/sg_create">创建安全组</a>。</td>
  </tr>
</table>




4. 点击**创建**，等待创建成功。

