---
title: "不同 VPC 下 Vxnet 通信（1 对 1）"
draft: false
collapsible: false
weight: 10
---

您可以通过建立 SD-WAN 核心网络的方式，并在 VPC 内的每个 Vxnet 中部署一个 vCPE，通过 vCPE 打通不同云平台不同 VPC 内 Vxnet 的一对一网络通信。

> **说明：**
>
> - VPC 可以是同一个云平台或者不同云平台的 VPC。
>
> - CPE 设备和镜像 vCPE 软件是两种不同的服务形态，实际作用无差异。

如下操作步骤**以 QingCloud 上创建的 VPC、私有网络、云服务器为例**进行说明。

### 网络规划

<img src="../../_images/qs_connect_2_vpc.png" style="zoom:48%;" />

### 准备工作

- 已获取 QingCloud 管理控制台的账号和密码。
- 已创建 VPC 01、VPC 02、Vxnet 01、Vxnet 02、VM 01 和 VM 02。
- 已部署 vCPE 01 和 vCPE 02，部署 vCPE 的详细操作请参见[部署 vCPE](../../vcpe/30_deploy_script)。

### 步骤一：创建连接云网

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN** > **SD-WAN**，进入 **SD-WAN** 的**概览**页面。

   <img src="../../_images/qs_overview_entrance.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**连接云网**，进入**连接云网**页面。

   <img src="../../_images/qs_cloud_network.png" style="zoom:50%;" />

4. 点击**创建连接云网**，弹出**创建连接云网**窗口。

   <img src="../../_images/qs_create_cloud_network.png" style="zoom:50%;" />

5. 输入企业云网的**名称**和描述信息，并点击**创建连接云网**。

   连接云网创建完成后，在连接云网列表中，您可以查看的连接云网的名称、状态、类型、关联接入点、描述和创建时间。

   当连接云网的状态为**活跃**时，说明连接云网创建成功。

### 步骤二：创建接入点

1. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../_images/qs_light_access.png" style="zoom:50%;" />

2. 点击**创建接入点**，弹出**创建接入点**窗口。

   <img src="../../_images/qs_light_access_config.png" style="zoom:50%;" />

3. 配置**基本信息**，参数说明如下表所示。

   <table class="table table-bordered table-striped table-condensed">
     <tr>
   		<th>参数</th>
   		<th>参数说明</th>
   		<th>示例</th>
   	</tr>
     <tr>
   		<td>接入点名称</td>
   		<td>输入接入点的名称。</td>
       <td>vCPE 01</td>
   	</tr>
     <tr>
   		<td>接入点类型</td>
       <td>接入点类型为<b>光盒 II 号<b>和 <b>vCPE<b>。<br></br></td>
   		<td>vCPE</td>
   	</tr>
     <tr>
   		<td>部署方式</td>
       <td>双机部署方式，默认支持主备设备高可用方式运行。</br><b>注意:</b></br>接入点可根据业务需要绑定一个设备或者两个设备。若绑定一个设备，则不支持高可用运行方式。</td>
   		<td>双机</td>
   	</tr>
     <tr>
   		<td>关联连接云网</td>
       <td>选择关联的连接云网，若您没有创建连接云网，系统将自动为您创建默认连接云网。您也可以点击<b>新建连接云网</b>，新建连接云网。</td>
       <td>sdwan</td>
   	</tr>
     <tr>
   		<td>高级设置</td>
       <td>勾选<b> LAN 配置、目录树</b>，可配置 LAN 和目录树。<br /><b>网段</b>：设置 vCPE 的私有 IP 地址段。</br><b>网关</b>：设置网关。若不设置，系统自动选择网段的第一个或者最后一个 IP 地址作为网关地址。</br><b>DHCP 服务</b>：勾选后，开启自动分配 IP 网络地址协议。</br><b>DHCP 起始地址</b>：自动分配的 IP 的起始地址。</br><b>DHCP 结束地址</b>：自动分配的 IP 的结束地址。</br><b>所在目录</b>：可根据需要将接入点划分到不同目录，进行分类管理。</br></td>
   <td>勾选<b> LAN 配置、目录树</b></br><b>网段</b>：192.168.128.0/24</br><b>网关</b>：192.168.128.2</br><b>DHCP 服务</b>：开启 DHCP。</br><b>DHCP 起始地址</b>：192.168.128.1</br><b>DHCP 结束地址</b>：192.168.128.100</td>
   	</tr>
   </table>

4. 配置**购买信息**，参数说明如下表所示。

   <table class="table table-bordered table-striped table-condensed">
     <tr>
   		<th>参数</td>
   		<th>参数说明</td>
   	</tr>
     <tr>
   		<td>计费方式</td>
       <td>您可以根据需要选择<b>包年包月</b>或者<b>按需计费</b>。包月包月相对按需计费更加优惠，适合中长期稳定需求。</td>
   	</tr>
     <tr>
   		<td>带宽上限</td>
   		<td>设置带宽上限。</td>
   	</tr>
     <tr>
   		<td>购买时长</td>
       <td>选择购买的时长。可选择<b>一个月</b>、<b>三个月</b>、<b>六个月</b>、<b>一年</b>、<b>两年</b>或者<b>三年</b>。</td>
   	</tr>
     <tr>
   		<td>自动续费</td>
   		<td>勾选自动续费后，账号余额足够时，设备到期自动续费。</td>
   	</tr>
     <tr>
   		<td>接入点数量</td>
   		<td>设置接入点的数量，若需创建多个同等配置的接入点，可直接增加接入点的数量。</td>
   	</tr>
   </table>
   
5. 点击**立即创建**，弹出**接入点创建成功**提示窗口。

   <img src="../../_images/qs_vcpe_access_success.png" style="zoom:50%;" />

6. 您需要根据提示信息，完成相应配置工作。

7. 获取后续配置信息后，点击**知道了**，完成接入点创建。

   接入点创建完成后，在接入点列表中，您可以查看的接入点的**名称/ID**、**接入点状态**、**设备状态**、**类型**、**序列号**、**带宽**等信息。

8. 参照**步骤2**～**步骤7**，完成 **vCPE 02** 接入点的创建。

### （可选）步骤三：配置 vCPE

若在创建 **vCPE 01** 和 **vCPE 02** 接入点时，已经配置光盒的 LAN 网段、网关地址，并启动 DHCP 服务，则该步骤可跳过。

1. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

2. 在配置的接入点所在行的操作列中，点击**设备管理**，进入**设备管理**页面。

3. 选择**设备管理** > **LAN 配置**，进入 **LAN 配置**页面。

   <img src="../../_images/qs_light_lan.png" style="zoom:50%;" />

4. 点击**修改**，配置光盒的 LAN 网段、网关地址，并启动 DHCP 服务。

5. 点击**确定修改**。

### 步骤四：配置云服务器静态路由

为私有网络中的云服务器 **VM 01** 和 **VM 02** 配置静态路由。

如下以青云的云服务器为例进行说明。

1. 选择**网络** > **VPC 网络**，进入 **VPC 网络**页面。

   <img src="../../_images/qs_vcpe_vpc_list.png" style="zoom:50%;" />

2. 点击 **VPC 01** 的名称，进入 **VPC 01** 的私有网络页面。

3. 选择**管理配置** > **路由推送**，进入**路由推送**页面。

   <img src="../../_images/qs_vcpe_vm_route.png" style="zoom:50%;" />

4. 点击**添加云服务器路由**，弹出**添加云服务器路由**窗口。

   <img src="../../_images/qs_config_ecs_route.png" style="zoom:50%;" />

   参数说明，如下表所示。

   <table class="table table-bordered table-striped table-condensed">
     <tr>
       <th>参数</th>
       <th>参数说明</th>
     </tr>
     <tr>
       <td>名称</td>
       <td>输入云服务器路由的名称。</td>
     </tr>
     <tr>
       <td>私有网络</td>
       <td>选择云服务器所在的私有网络。</td>
     </tr>
       <tr>
       <td>实例 ID</td>
       <td>选择要添加路由规则的云服务器 ID。</td>
     </tr>
     <tr>
       <td>默认路由</td>
       <td>云服务器的默认路由 IP。您可以根据自己的需要指定云服务器的默认路由 IP。</td>
     </tr>
       <tr>
       <td>静态路由</td>
         <td>点击<b>添加静态路由</b>，<b>目标网络</b>填写 <b>VM 02</b> 的 IP 地址；路由 IP 填写 <b>vCPE 01</b>的 IP 地址。</td>
     </tr>
   </table>

5. 填写完成后，点击 <img src="../../_images/icon_right.png" style="zoom:40%;" />，然后点击**提交**，完成 **VM 01** 静态路由的配置。

6. 点击右上角的**应用修改**，使配置生效。

7. 请参照**步骤1** ～**步骤6**，完成 **VM 02** 静态路由的配置。

   配置 **VM 02** 静态路由参数：

   **目标网络**填写 **Vxnet 01** 的 IP 网段地址，例如：192.168.128.0/24。

   **路由 IP** 填写 **vCPE 02** 的 IP 地址，例如：172.17.0.2。

### 步骤五：通过 BGP 将私有网络通告

1. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

2. 点击接入点名称，进入接入点详情页面。

3. 选择**网络管理** > **静态路由**，进入**静态路由**页面。

   <img src="../../_images/qs_vcpe_bgp_list.png" style="zoom:50%;" />

4. 点击**添加静态路由**，弹出**添加静态路由**窗口。

   <img src="../../_images/qs_vxnet_bgp.png" style="zoom:50%;" />

   参数说明，如下表所示。

   <table class="table table-bordered table-striped table-condensed">
     <tr>
       <th>参数</th>
       <th>参数说明</th>
     </tr>
     <tr>
       <td>名称</td>
       <td>设置静态路由的名称。</td>
     </tr>
     <tr>
       <td>目标网络</td>
       <td>设置需要通过静态路由通告出去的<b> vCPE 01</b>的私有网络，例如：<b>vCPE 01</b>通告的目标网络为<b> 192.168.128.0/24</b>。</td>
     </tr>
       <tr>
       <td>下一跳</td>
       <td>您可以根据自己的实际环境是否设置下一跳地址。若您的 vCPE 连接了路由器，可设置下一跳地址。</td>
     </tr>
     <tr>
       <td>是否通告</td>
       <td>勾选通告后，将私有网络通告出去。若不勾选，则 vCPE 之间无法建立网络通信。</td>
     </tr>
   </table>

5. 点击**添加**，完成静态路由的添加操作。

6. 点击**应用修改**，使配置生效。

7. 参照**步骤 1**～**步骤 6**，完成 **vCPE 02** 静态路由的添加。

   **目标网络**设置为 **172.17.0.0/24**，勾选**是否通告**。

### 步骤六：验证网络连通性

1. 在控制台上方菜单栏中，选择**产品与服务** > **计算** > **云服务器**，进入**云服务器**页面。

   <img src="../../_images/qs_vcpe_vm_list.png" style="zoom:50%;" />

2. 在云服务器 **VM 01**所在行，点击 **Web 终端**，输入用户名和密码，登录到云服务器 VM 01。

3. 登录成功后，执行以下命令，ping VM 02 的 IP 地址，查看是否能 ping 通。

   **ping 172.17.0.3**

   若回显信息如下所示，则说明能 ping 通，**VM 01** 与 **VM 02** 成功打通，那么 **vxnet 01** 和 **vxnet 02** 互通。

   <img src="../../_images/qs_vcpe_ping_access.png" style="zoom:50%;" />
