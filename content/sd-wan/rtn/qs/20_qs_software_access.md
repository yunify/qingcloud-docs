---
title: "软件接入 VPC"
draft: false
collapsible: false
weight: 20
---

本文档指导您如何快速使用 RTN 服务。

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
   		<td></td>
       <td></td>
   	</tr>
     <tr>
   		<td>接入点类型</td>
   		<td></td>
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
   		<td></td>
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

   <img src="../../_images/qs_light_access_success.png" style="zoom:50%;" />

6. 您需要根据提示信息，完成相应配置工作。

7. 获取后续配置信息后，点击**知道了**，完成接入点创建。

   接入点创建完成后，在接入点列表中，您可以查看的接入点的名称/ID、状态、类型、双机、WAN端口 IP、LAN 端口 IP、License、带宽、计费方式、连接状态等。

## 步骤三：准备外网通信的云服务器

绑定公网 IP，并选择专有镜像。



## 步骤四：配置云服务器

拷贝 License，并将 License 配置到服务器。（命令行界面）

1. 登录云服务器。
2. 执行以下命令，配置 License。

## 步骤五：验证网络连通性

怎么验证网络连通性？

