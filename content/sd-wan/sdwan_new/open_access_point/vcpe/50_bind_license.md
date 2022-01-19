---
title: "激活 vCPE 设备"
draft: false
collapsible: false
weight: 50
---

创建 vCPE 接入点并部署完成 vCPE 后，即可激活软件 vCPE 设备。

若您需要启用**高可用**添加备用设备，或者**更换设备**，则需要通过绑定 License 的方式激活设备。

本章节介绍如何通过绑定 License 的方式激活软件 vCPE 备用设备。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已获取设备管理控制台的账号和密码。
- 已创建连接云网。
- 已创建 vCPE 接入点。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN** > **SD-WAN**，进入**连接云网**页面。

   <img src="../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../../_images/qs_light_access.png" style="zoom:50%;" />

4. 点击已创建的 vCPE 接入点的名称，进入接入点详细信息页面。

   ![](../../../_images/um_vcpe_license.png)

5. <span id="jump">点击复制按钮，获取 License。</span>

6. 选择**设备管理** > **设备信息**，进入**设备信息**页面。

   ![](../../../_images/um_equip_info.png)

7. 获取设备**登录密码**。

   > 说明：
   >
   > 默认账号为 <code>admin</code>。

8. 选择**更多操作** > **登录设备控制台**，进入设备控制台登录页面。

9. 输入账号和密码，点击**登录**，登录到设备控制台。

   ![](../../../_images/um_equip_license.png)

10. 点击**绑定序列号**，输入步骤 <a href="#jummp">5</a> 获取的 License。

11. 点击**确定**，完成 License 绑定，激活设备。

