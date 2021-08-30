---
title: "光盒接入 VPC"
draft: false
collapsible: false
weight: 10
---

本文档指导您如何快速使用 RTN 服务。

## 准备工作

- 已购买或者租用光盒。

- 光盒已上电。

## 步骤一：创建企业云网

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN** > **RTN**，进入 **SD-WAN** 的**概览**页面。

   <img src="../../_images/qs_overview_entrance.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**企业云网**，进入**企业云网**页面。

   <img src="../../_images/qs_cloud_network.png" style="zoom:50%;" />

4. 点击**创建企业云网**，弹出**创建企业云网**窗口。

   <img src="../../_images/qs_create_cloud_network.png" style="zoom:50%;" />

5. 输入企业云网的名称，并点击**创建企业云网**。

   企业云网创建完成后，在企业云网列表中，您可以查看的企业云网的名称、状态、关联接入点、描述和创建时间。

   企业云网的状态为**活跃**时，表示企业云网创建成功。

## 步骤二：创建光盒接入点

1. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../_images/qs_light_access.png" style="zoom:50%;" />

2. 点击**创建接入点**，弹出**创建接入点**窗口。

   <img src="../../_images/qs_light_access_config.png" style="zoom:50%;" />

3. 配置**基本信息**，参数说明如下表所示。

   <table class="table table-bordered table-striped table-condensed">
     <tr>
   		<th>参数</td>
   		<th>参数说明</td>
       <th>示例</td>
   	</tr>
     <tr>
   		<td>接入点名称</td>
   		<td>输入接入点的名称。</td>
       <td>test</td>
   	</tr>
     <tr>
   		<td>接入点类型</td>
       <td>接入点类型为光盒 II 号和软件。<br></br></td>
       <td></td>
   	</tr>
     <tr>
   		<td>部署方式</td>
   		<td></td>
       <td></td>
   	</tr>
     <tr>
   		<td>关联企业云网</td>
   		<td></td>
       <td></td>
   	</tr>
     <tr>
   		<td>高级设置</td>
       <td>勾选 LAN 配置、目录树，可配置 LAN 和目录树。</br>网段：</br>网关：</br>DHCP 服务：</br>DHCP 起始地址：</br>DHCP 结束地址：</br>所在目录：</br></td>
       <td></td>
   	</tr>
   </table>

4. 配置**购买信息**，参数说明如下表所示。

   <table class="table table-bordered table-striped table-condensed">
     <tr>
   		<th>参数</td>
   		<th>参数说明</td>
       <th>示例</td>
   	</tr>
     <tr>
   		<td>计费方式</td>
   		<td></td>
       <td></td>
   	</tr>
     <tr>
   		<td>带宽上限</td>
   		<td></td>
       <td></td>
   	</tr>
     <tr>
   		<td>购买时长</td>
   		<td></td>
       <td></td>
   	</tr>
     <tr>
   		<td>自动续费</td>
   		<td></td>
       <td></td>
   	</tr>
     <tr>
   		<td>接入点数量</td>
   		<td></td>
       <td></td>
   	</tr>
   </table>

5. 点击**立即创建**，弹出**接入点创建成功**提示窗口。

6. 您需要根据提示信息，完成相应配置工作。

7. 获取后续配置信息后，点击**知道了**，完成接入点创建。

   接入点创建完成后，在接入点列表中，您可以查看的接入点的名称/ID、状态、类型、双机、WAN端口 IP、LAN 端口 IP、License、带宽、计费方式、连接状态等。

## （可选）步骤三：配置光盒

若在创建光盒接入点时，已经配置光盒的 LAN 网段、网关地址，并启动 DHCP 服务，则该步骤可跳过。

1. 在**接入点**页面，点击创建的光盒接入点，进入接入点详情页面。

2. 选择**设备管理** > **LAN 配置**，进入 LAN 配置页面。

   <img src="../../_images/qs_light_lan.png" style="zoom:50%;" />

3. 点击**修改**，配置光盒的 LAN 网段、网关地址，并启动 DHCP 服务。

4. 点击**确定修改**。

## 步骤四：创建与配置边界路由器

1. 选择**产品与服务** > **网络服务** > **边界路由器**，进入**边界路由器**页面。

2. 点击**创建**，弹出**创建边界路由器**窗口。

   <img src="../../_images/qs_light_border_route.png" style="zoom:50%;" />

3. 点击**确认**，完成边界路由器创建操作。

   边界路由状态为**活跃**，表示创建边界路由器成功。

4. 点击创建的边界路由器的 ID，进入边界路由器详情页面。

5. 点击**关联 VPC 私有网络**，弹出**关联 VPC 私有网络**窗口。

   <img src="../../_images/qs_light_link_irt.png" style="zoom:50%;" />

6. 选择云服务器所在私有网络以关联边界路由器。

7. 点击**确认**，完成 **VPC 01**的私有网络关联。

   <img src="../../_images/qs_light_route_set.png" style="zoom:50%;" />

8. 点击**路由设置**，进入 VPC 01 的内网路由策略页面。

   <img src="../../_images/qs_light_intranet_route.png" style="zoom:50%;" />

9. 点击**添加规则**，弹出**添加内网路由策略**窗口。

   **边界路由器类型**：物理边界路由器。 

   **目标网络**：光盒的 LAN 网段。

   <img src="../../_images/qs_light_route_set_window.png" style="zoom:50%;" />

10. 点击**提交**，完成内网路由策略添加。

11. 配置完成后，点击**应用修改**，使配置生效。

12. 参照**步骤1** ～ **步骤 11**完成 **VPC 02** 内网路由策略的配置。

## 步骤五：配置云服务器 BGP

为私有网络中的云服务器配置静态路由。

如下以青云的云服务器为例进行说明。

1. 选择**网络** > **VPC 网络**，进入 **VPC 网络**页面。

2. 点击 vpc 01 的名称，进入vpc01的私有网络页面。

3. 选择**管理配置** > **路由推送**，进入**路由推送**页面。

4. 点击**添加云服务器路由**，弹出**添加云服务器路由**窗口。

   **名称**：输入云服务器路由的名称。

   **私有网络**：选择云服务器所在的私有网络。

   **实例 ID**：选择要添加路由规则的云服务器 ID。

   **默认路由**：云服务器的默认路由 IP。

   **静态路由**：点击**添加静态路由**，**目标网络**填写 **VM 02** 的 IP 地址；路由 IP 填写 **cpe 01**的 IP 地址。

   <img src="../../_images/qs_config_ecs_route.png" style="zoom:50%;" />

5. 填写完成后，点击☑️，然后点击**提交**，完成 **VM 01**静态路由的配置。

6. 参照**步骤1** ～**步骤5**，完成 VM 02 静态路由的配置。

   VM 02 静态路由参数配置时，目标网络填写 **VM 01** 的IP地址；路由 IP 填写 **cpe 02** 的 IP 地址。

## 步骤六：CPE 将私有网络的网络通告出去



## 步骤六：验证网络连通性

1. 登录 QingCloud 管理控制台。
