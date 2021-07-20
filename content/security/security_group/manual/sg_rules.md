---
title: "添加安全组规则"
description: manual
draft: false
weight: 40
draft: true
---

您可以通过添加安全组规则，允许或禁止安全组内的云服务器实例对公网或私网的访问。

## 背景信息

安全组负责管理是否放行来自公网或者内网的访问请求。为安全起见，从云资源访问外部时，大多拒绝访问。如果您使用的是默认安全组，则系统会给部分通信端口自动添加安全组规则。

## 前提条件

安全组在未添加任何安全组规则之前，从云资源访问外部允许所有访问，从外部访问云资源拒绝所有访问。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **安全服务** > **安全组**，进入**安全组**页签。

2. 在**云服务器**页签中，点击需要添加规则的安全组。

   <img src="../../_images/firstpage.png" style="zoom:20%;" />

3. 进入**安全组规则**页面，点击**添加规则**。

   <img src="../../_images/rules_page.png" style="zoom:24%;" />

4. 输入安全组规则的相关信息，如优先级，协议类型，规则方向等，如下表所示。

| 名称     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| 名称     | 安全组规则的名称。                                           |
| 优先级   | 优先级数值越小，优先级越高，取值范围为1~100。                |
| 方向     | 上行规则：</br>指的是从云资源访问外部。上行规则和端口默认放行。为保证安全，对于 Windows 云服务器系统判定了一些高危端口，默认将其加入了安全组并禁止。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"> <b>说明</b>:</br>对于 Windows 云服务器，系统默认限制了几个“上行安全组”规则：  <li>协议 TCP：端口3389/1433/445/135/139</li>  <li>协议 UDP：端口1434/445/135/137/138</li><li>Windows 云服务器向外发起 远程桌面连接，您需要在安全组中放行规则 tcp 上行 3389 端口</li><li>Windows 云服务器向外发起 SQL Server 连接，您需要在安全组中放行规则 tcp 上行 1433 端口</li></span> 下行规则：</br>指从外部访问云资源。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"> <b>说明</b>:</br>未配置的下行规则和端口默认拒绝访问。TCP 端口 445 / 5554 / 9996 是病毒“震荡波”所使用的端口，可能会被 IDC 屏蔽，为保证资源正常访问，建议使用其他端口。</span> |
| 行为     | <li>**允许**：放行该端口相应的访问请求。</li><li> **拒绝**：直接丢弃数据包，不会返回任何回应信息。</li>  <div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>：<br/>如果两个安全组规则其他都相同只有行为不同，则**拒绝**生效，**允许**不生效。</div> |
| 协议     | 协议类型包括：<li>ALL：支持全部协议类型。</li><li>TCP：支持 TCP 协议。</li><li>UDP：支持 UDP 协议。</li><li>ICMP：支持 ICMP 协议。</li><li>GRE：支持 GRE 协议。</li><li>ESP：支持 ESP 协议。</li><li>AH：支持 AH 协议。</li><li>IPIP：支持 IPIP 协议。</li><li>VRRP：支持 VRRP 协议。</li><li>IPV6：支持 ICP6 协议。</li><li>IPV6-ICMP：仅支持 ICMP（IPV6） 协议。</li><li>IPENCAP：支持 IPENCAP 协议。</li> |
| 起始端口 |                                                              |
| 结束端口 |                                                              |
| 源IP     |                                                              |

