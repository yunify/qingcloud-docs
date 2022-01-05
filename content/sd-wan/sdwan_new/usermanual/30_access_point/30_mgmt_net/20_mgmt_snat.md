---
title: "配置 SNAT"
draft: false
collapsible: false
weight: 20
---

SNAT 可以解决私网地址冲突问题。

SNAT 将内部网络地址转换为指定内网 IP 地址，内部网络可以通过转换后的内网 IP 地址访问内部网络。

## 注意事项

可以添加多条 SNAT 规则。

## 前提条件

- 已获取 QingCloud 管理控制台账号和密码。
- 已创建连接云网。
- 已创建接入点。

## 添加 SNAT 规则

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN** > **SD-WAN**，进入**概览**页面。

   <img src="../../../../_images/qs_cloud_network.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../../../_images/qs_light_access.png" style="zoom:50%;" />

4. 点击接入点名称，进入接入点详情页面。

5. 选择**网络管理** > **SNAT**，进入**SNAT**页面。

   <img src="../../../../_images/um_snat_list.png" style="zoom:50%;" />

6. 点击**添加规则**，弹出**添加SNAT规则**窗口。

   <img src="../../../../_images/um_snat_win.png" style="zoom:50%;" />

   参数说明，如下表所示。

   | 参数    | 参数说明                                                     |
   | ------- | ------------------------------------------------------------ |
   | 名称    | 设置 SNAT 的名称。                                           |
   | 类型    | 默认为私网 SNAT。私网 SNAT 是指从 LAN 口进来的流量全部转换成<b>光盒</b>或者 <b>vCPE</b> 所在私有网络中某一个有内网 IP 的云服务器。 |
   | 内网 IP | 内网的 IP 地址。                                             |
   
7. 点击**添加**，完成 SNAT 规则的添加操作。

   若页面弹出**新增成功**提示信息，则说明新增 SNAT 规则成功。

8. 点击**应用修改**，使配置生效。

   添加 SNAT 规则后默认为**启用**状态。

## 相关操作

### 禁用 SNAT 规则

1. 进入**网络管理** > **SNAT** 页面。

   <img src="../../../../_images/um_snat_list.png" style="zoom:50%;" />

2. 在已添加的静态路由所在行的**操作**列中，点击**禁用**。

   若页面 SNAT 规则的状态变成为**禁用**，则说明禁用成功。

### 修改 SNAT 规则

1. 进入**网络管理** > **SNAT** 页面。

   <img src="../../../../_images/qs_vcpe_bgp_list.png" style="zoom:50%;" />

2. 在已添加的静态路由所在行的**操作**列中，点击**修改**，弹出**修改 SNAT 规则**窗口。

   <img src="../../../../_images/um_modify_snat.png" style="zoom:50%;" />

3. 修改完成后，点击**确定修改**，完成 SNAT 规则的修改。

   若页面弹出**编辑成功**提示信息，则说明修改 SNAT 规则成功。

### 删除 SNAT 规则

1. 进入**网络管理** > **SNAT** 页面。

   <img src="../../../../_images/qs_vcpe_bgp_list.png" style="zoom:50%;" />

2. 在已添加的静态路由所在行的**操作**列中，点击**删除**，弹出**删除 SNAT 规则**窗口。

   <img src="../../../../_images/um_del_bgp.png" style="zoom:50%;" />

3. 点击**确定**，完成 SNAT 规则的删除操作。

   若页面弹出**删除成功**提示信息，则说明删除 SNAT 规则成功。

