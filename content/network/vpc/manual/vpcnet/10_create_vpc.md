---
title: "创建 VPC 网络"
linkTitle: "创建 VPC 网络"
date: 2021-05-19T10:08:56+09:00
description:
draft: false
weight: 10
---

## 操作场景

在 VPC 网络中使用云资源前，您必须先创建一个 VPC 网络和初始私有网络。

本章节用于指导您创建一个新的VPC网络。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **网络服务** > **VPC 网络**，进入**VPC 网络**页面。

2. 点击**创建 VPC 网络**，弹出**创建 VPC 网络**页面。

   <img src="../../../_images/501010_create_vpc.png" alt="create_vpc" style="zoom:50%;" />

4. 配置 VPC 网络基本信息及初始私有网络信息。

> **说明**：
>
> 创建 VPC 网络时，应至少创建一个初始私有网络，此外，您还可以单击**添加私有网络**创建多个私有网络，一次最多可添加3个私有网络（包含初始私有网络）。



<table>
  <tr>
  	<th style="width: 120px">参数项目</th>
 		<th>参数说明</th>
  </tr>
  <tr>
  <td colspan="2">基本信息</td>
  </tr>
  <tr>
  	<td>区域</td>
  	<td>要创建 VPC 网络的区域。</td>
  </tr>
  <tr>
  	<td>名称</td>
  	<td>VPC 网络的名称。<br>支持自动填充及自定义。名称长度为1~64个字符，须由中文、英文字母、数字、下划线（_）、中划线（-）和点（.）组成。</td>
  </tr>
  <tr>
  	<td>IPv4 地址范围</td>
  	<td>VPC 的 IPv4 网段。<br>VPC 网络创建后，IPv4 网段不可修改。<br></td>
  </tr>
  <tr>
  	<td>IPv6 地址范围</td>
  	<td>选择是否为 VPC 网络分配 IPv6 网段。<li><b>关闭 IPv6</b>：默认选项，即不分配 IPv6 网段。</li><li><b>系统自动分配</b>：开启 IPv6 功能，并自动分配 IPv6 网段。</li></td>
  </tr>
   <tr>
  	<td>类型</td>
  	<td>支持免费型、小型、中型、大型及超大型，不同类型可支持的管理流量转发能力不同。 <br>
     <div style="background-color: #D8ECDE;padding: 10px 24px; margin: 10px 0;border-left:3px solid #00a971;"><b>说明</b>：<br>免费型 VPC 仅具备内网通信功能，不支持绑定公网 IP 和转发公网流量，且暂不支持在免费型 VPC 中创建弹性容器实例(QCI)、AppCenter 集群和边界路由器。<br>若您的云服务器需要上网，需要给私有网络内的云服务器单独绑定公网 IP。</li>
      </div>
   	</td>
  </tr>
 <tr>
  	<td>公网 IP</td>
    <td>选择是否立即为 VPC 绑定公网 IP。免费型 VPC 不支持此项。
      <li>购买并绑定：购买一个新的公网 IP 并绑定到此 VPC 网络。选择后需要设置公网 IP 的计费模式、带宽上限及 IP 组。 </li>
      <li>使用已有：若已购买有公网 IP，可选择绑定已有的公网 IP。</li>
      <li>暂不绑定：此处暂不绑定，可在创建 VPC 网络后根据需要进行绑定。具体操作请参见<a href="/network/vpc/manual/vpcnet/26_bind_eip/">绑定公网 IP</a></li>
   </td>
  </tr>
 <tr>
  	<td>安全组</td>
    <td>选择安全组。若未创建安全组，可选择默认安全组，也可在下方提示信息中点击<b>新建安全组</b>进行创建，具体操作说明参见<a  href="/security/security_group/manual/sg_create">创建安全组</a>。</td>
  </tr>
   <tr>
  	<td colspan="2">初始私有网络</td>
  </tr>
   <tr>
  	<td>名称</td>
  	<td>私有网络名称。<br>支持自动填充及自定义。</td>
  </tr>
  <tr>
  		<td>部署方式</td>
  	<td><li>多可用区部署：表示网络中的云服务器可部署在多个可用区。</li>
      <li>单可用区部署：表示网络中的云服务器部署在一个可用区中，但与其它可用区之间的网络互通。</li>
    </td>
  </tr>
 <tr>
  	<td>IPv4 地址范围</td>
  	<td>私有网络的地址范围，需要在 VPC 网络的地址范围内，且私有网络间的 IPv4 网段不可重叠。</td>
  </tr>
	<tr>
  	<td>IPv6 地址范围</td>
  	<td>仅当所属 VPC 网络开启 IPv6 功能，其私有网络才支持开启 IPv6。<li><b>关闭 IPv6</b>：默认选项，即不分配 IPv6 网段。</li><li><b>系统自动分配</b>：开启 IPv6 功能，并自动为子网分配 IPv6 网段。</li>  
      <div style="background-color: #D8ECDE;padding: 10px 24px; margin: 10px 0;border-left:3px solid #00a971;"><b>说明</b>：<br>如需自定义私有网络的 IPv6 网段，可以在创建完成后先关闭 IPv6，再启用 IPv6 并选择手动指定 IPv6。
      </div></td>
  </tr>
	<tr>
  </tr>
	<tr>
  	<td>网络 ACL</td>
  	<td>网络访问控制规则。您可以自定义设置网络 ACL 规则，然后绑定私有网络。</td>
  </tr>
  <tr>
  	<td>高级选项</td>
  	<td>点击<b>高级选项</b>，可以设置私有网络的管理地址、边界路由器地址、DHCP 起始地址 及 DHCP 结束地址。一般使用默认设置即可。
    </td>
  </tr>
</table>




4. 可选：若需添加多个私有网络，则点击**添加私有网络**，并设置其信息。

   <img src="../../../_images/501010_create_vpc_2.png" alt="create_vpc" style="zoom:50%;" />

5. 点击**立即创建**，待创建成功，返回 **VPC 网络**页面。

