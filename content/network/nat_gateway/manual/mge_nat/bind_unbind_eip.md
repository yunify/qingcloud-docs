---
title: "绑定和解绑公网 IP"
descriptipn: NAT 网关如何绑定公网 IP。
draft: false
weight: 5
keyword: QingCloud, 云计算, 青云, NAT网关, NAT, 公网
---

您可以在创建 NAT 网关时绑定公网 IP，也可以在创建 NAT 网关后绑定或解绑公网 IP。

## 背景信息

每个 NAT 网关最多可绑定 **10** 个公网 IP，其中最多绑定 **2** 个按流量计费的公网 IP。

## 绑定公网 IP

### NAT 网关页面

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，在控制台导航栏中，选择**产品与服务** > **网络服务** > **NAT 网关**，进入 **NAT 网关**页面。

2. 您可以通过以下几种方式进行绑定公网 IP 操作：
   
   - 在 NAT 网关页面，找到目标 NAT 网关，右键点击，然后选择**绑定公网 IP**。
   
     ![](../../../_images/bind_eip_1.png)
   
   - 在 NAT 网关页面，点击目标 NAT 网关 ID，进入 NAT 详情页，在基本信息区域右上方，点击**绑定公网 IP**。
   
     ![](../../../_images/bind_eip_2.png)
   
   - 在 NAT 网关页面，点击目标 NAT 网关 ID，进入 NAT 详情页，在**绑定公网 IP** 页签，点击**绑定公网 IP**。
   
     ![](../../../_images/bind_eip_3.png)
   
3. 选择需要绑定的公网 IP，点击**提交**。

### 公网 IP 页面

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，在控制台导航栏中，选择**产品与服务** > **网络服务** > **公网IP**，进入 **NAT 网关**页面。

2. 右键点击公网 IP 条目，选择**关联 NAT 网关**。

   ​	<img src="../../../_images/bind_eip_4.png" style="zoom:50%;" />

3. 选择需要关联的 NAT 网关，点击**提交**。

## 解绑公网 IP

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，在控制台导航栏中，选择 **VPC 网络** > **NAT 网关**，进入**NAT 网关**页面。

2. 在 NAT 网关页面，点击目标 NAT 网关 ID，进入 NAT 详情页。

3. 点击**绑定公网 IP** 页签，找到需要解绑的公网 IP，点击对应**操作**列的**解绑**或**强制解绑**。

   > **说明**
   >
   > 当公网 IP 已关联 SNAT/DNAT 规则时，需要点击**强制解绑**。
   >
   > 强制解绑后，系统将会删除该公网 IP 关联的 SNAT 规则或 DNAT 规则。但如果该公网 IP 对应的 SNAT 规则绑定了多个公网 IP，则 SNAT 规则中将移除该公网 IP，SNAT 规则不会被删除。

   ![](../../../_images/unbind_eip.png)

4. 在提示确认框中，点击**解绑**或**强制解绑**。



