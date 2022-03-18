---
title: "企业分支互联"
draft: false
collapsible: false
weight: 20
---

您可以通过建立 SD-WAN 核心网络的方式，在客户处部署光盒CPE，通过 光盒CPE 打通客户总部机房和IDC机房的网络通信。

> **说明：**
>
> 光盒CPE 设备和镜像 VCPE 软件是两种不同的服务形态，实际作用无差异。

## 网络规划

![](../../_images/qs_vcpe_multiple.png)

## 准备工作

- 已获取 QingCloud 管理控制台的账号和密码。
- 光盒 CPE 01、CPE 02 已上电并接 WAN 口。
- 已准备 PC 01、PC 02 计算机。

## 步骤1：创建连接云网

创建连接云网，连接云网名称以 **sdwan** 为例。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

3. 点击**创建连接云网**，弹出**创建连接云网**窗口。

   <img src="/sd-wan/sdwan_new/_images/qs_wan_multiple.png" style="zoom:50%;" />

4. 输入企业云网的**名称**和描述信息，并点击**创建连接云网**。

   当连接云网的状态为**活跃**时，说明连接云网创建成功。

   <img src="../../_images/qs_cloud_network.png" style="zoom:50%;" />

## 步骤2：创建接入点

请参照如下操作步骤，创建两个光盒 CPE 接入点，分别为 **CPE 01** 和 **CPE 02**。

1. <span id="jump01"></span>在左侧导航栏中，点击<b>接入点</b>，进入<b>接入点</b>页面。

   <img src="../../_images/qs_light_access.png" style="zoom:50%;" />

2. 点击**创建接入点**，弹出**创建接入点**窗口。

3. 配置光盒接入点 CPE 01 信息。

   <img src="/sd-wan/sdwan_new/_images/qs_light_cpe01.png" style="zoom:50%;" />
   
   参数配置，如下表所示。
   
   | 参数         | 示例                                                         |
   | ------------ | ------------------------------------------------------------ |
   | 接入点名称   | CPE 01                                                       |
   | 接入点类型   | 光盒 2 号                                                    |
   | 部署方式     | 双机                                                         |
   | 序列号       | 输入光盒 CPE 的序列号                                        |
   | 关联连接云网 | sdwan                                                        |
   | 高级设置     | 勾选 LAN 配置<br />网段：</b>192.168.128.0/24<br />网关：192.168.128.2<br />DHCP 服务：开启 DHCP<br />DHCP 起始地址：192.168.128.3<br />DHCP 结束地址：192.168.128.252 |
   
4. <span id="jump02">点击**立即创建**，根据提示信息完成接入点的创建。

5. 请参照如上步骤 <a href="#jump01">1</a>～ <a href="#jump02">4</a>，创建光盒接入点 **CPE 02**，配置信息如下表所示。

   <img src="/sd-wan/sdwan_new/_images/qs_light_cpe02.png" style="zoom:50%;" />

   参数配置，如下表所示。

   | 参数         | 示例                                                         |
   | ------------ | ------------------------------------------------------------ |
   | 接入点名称   | CPE 02                                                       |
   | 接入点类型   | 光盒 2 号                                                    |
   | 部署方式     | 双机                                                         |
   | 序列号       | 输入光盒 CPE 的序列号                                        |
   | 关联连接云网 | sdwan                                                        |
   | 高级设置     | 勾选 LAN 配置<br />网段：</b>172.17.0.0/16<br />网关：172.17.0.2<br />DHCP 服务：开启 DHCP<br />DHCP 起始地址：172.17.0.3<br />DHCP 结束地址：172.17.0.252 |

## 步骤3：激活光盒 CPE

若光盒 2 号已上电且接 WAN 口，接入点创建成功后即可立即激活。

在 SD-WAN 接入点列表中，可查看接入点状态处于**已激活**，设备状态处于**在线**。

<img src="/sd-wan/sdwan_new/_images/qs_equip_active.png" style="zoom:50%;" />

## 步骤4：查看是否学习到对端路由

查看 CPE 01 和 CPE 02 是否学习到对端路由。

1. 在 CPE01 上查看路由信息，若学习到 CPE 02，则显示 CPE02 LAN 网段 172.17.0.0/24 信息。

   > **说明**
   >
   > 光盒上线需要几分钟时间，请耐心等待。

   <img src="/sd-wan/sdwan_new/_images/qs_cpe_display01.png" style="zoom:50%;" />

2. 在 CPE02 上查看路由信息，若学习到 CPE 01，则显示 CPE01 LAN 网段 192.168.200.0/24 信息。

   <img src="/sd-wan/sdwan_new/_images/qs_cpe_display02.png" style="zoom:50%;" />

## 步骤5：验证网络连通性

使用 PC 01 ping PC 02 的 IP 地址，查看是否能 ping 通。

> **说明**
>
> 请确保两台电脑防火墙已关闭，并且都没有连接 WiFi 和 VPN。

```
ping 172.17.0.3
```

若回显信息如下所示，则说明能 ping 通， **PC 01** 和 **PC 02** 成功打通。

<img src="../../_images/qs_vcpe_ping_access.png" style="zoom:50%;" />
