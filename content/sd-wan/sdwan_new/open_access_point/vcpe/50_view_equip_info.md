---
title: "查看 VCPE 设备信息"
draft: false
collapsible: false
weight: 50
---

创建 VCPE 接入点并部署完成软件 VCPE 后，即可激活软件 VCPE 设备。软件 VCPE 激活后，接入点下的设备信息页面会识别并展示已部署的 VCPE 设备信息。

本章节介绍如何查看已部署的软件 VCPE 设备。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已获取设备管理控制台的账号和密码。
- 已创建连接云网。
- 已创建 VCPE 接入点。
- 已部署软件 VCPE。

## 查看 VCPE 设备在线

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

   <img src="../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="/sd-wan/sdwan_new/_images/qs_equip_active.png" style="zoom:50%;" />

4. 可查看接入点状态为**已激活**、设备状态为**在线**以及连接状态。


## 查看 VCPE 设备信息

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

   <img src="../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../../_images/qs_light_access.png" style="zoom:50%;" />

4. 点击已创建的 VCPE 接入点的名称，进入接入点详细信息页面。

5. 查看**设备管理** > **设备信息**页面，当前接入点下已部署的软件 VCPE。

   ![](../../../_images/um_vcpe_license.png)

## 查看 VCPE 设备控制台

1. 在宿主机的安全组规则下放行 9099 端口。

   <img src="/sd-wan/sdwan_new/_images/um_rule_9099.png" style="zoom:50%;" />

2. 可选：如果公网 IP 地址并非直接与宿主机绑定，而是绑定宿主机所在 VPC，需要在 VPC 里添加端口转发规则，将访问流量转发到节点的网关。

   <img src="/sd-wan/sdwan_new/_images/um_add_forward_rule.png"  />

   网关信息查看：

   <img src="/sd-wan/sdwan_new/_images/um_add_forward_rule_2.png"  />

3. 在浏览器中输入访问地址：`http://公网 IP:9099`，按 **Enter**，进入设备控制台登录页面。

4. 输入用户名及密码进行登录。

   默认用户名：**admin**，默认密码：**sdwan**。

5. 您可以查看设备 ID、类型、序列号、版本、管控状态、隧道状态、位置以及端口信息。

   <img src="/sd-wan/sdwan_new/_images/um_equip_mgmt_details.png" style="zoom:50%;" />

