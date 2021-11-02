---
title: "不同 VPC 下 Vxnet 通信（多对多 ）"
draft: false
collapsible: false
weight: 10
---

本章节指导您如何通过 vCPE 实现不同 VPC 下的私有网络多对多通信。

> **说明：**
>
> VPC 可以是同一个云平台或者不同云平台的 VPC。

如下**以 QingCloud 上创建的 VPC、私有网络、云服务器为例**进行说明。

### 网络规划

如下多对多网络通信的网络规划是基于[不同 VPC 下 Vxnet 通信（1对1）](../10_qs_2vxnet_access)的网络规划新增新网段网卡，并将网卡分配给同一个 VPC 下的 vCPE。网卡分配完成后，配置相关路由通告和默认路由，从而实现不同 VPC 下 Vxnet 的多对多通信。

网络规划，如下图所示。

<img src="../../_images/qs_vcpe_multiple.png" style="zoom:48%;" />

### 准备工作

- 已获取 QingCloud 管理控制台的账号和密码。
- 已创建 VPC 01、VPC 02、VPC 03、Vxnet 01、Vxnet 02、Vxnet 03、VM 01、VM 02 和 VM 03。
- 已部署 vCPE 01 和 vCPE 02，部署 vCPE 的详细操作请参见[部署 vCPE](../../vcpe/30_deploy_script)。

### 步骤一：基于 1 对 1 通信完成配置

详细操作步骤，请参见[不同 VPC 下Vxnet 通信（1对1）](../10_qs_2vxnet_access)。

### 步骤二：申请网卡并分配到主机

申请 Vxnet 03 网段的网卡，并将申请的网卡分配给 vCPE 01。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入云服务器列表页面。

   <img src="../../_images/qs_vxnet03_server.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**网卡**，进入**网卡**页面。

   <img src="../../_images/qs_vxnet03_netcard.png" style="zoom:50%;" />

4. 点击**申请**，弹出**申请网卡**窗口。

   <img src="../../_images/qs_vcpe_network_card.png" style="zoom:50%;" />

5. 配置相关参数。 

   名称：输入网卡的名称。

   数量：输入网卡的数量。

   网络：选择 **Vxnet 03 私有网络**。

   内网 IP：输入内网 IP，例如：192.168.129.5。

   网卡：选择**普通网卡**。

6. 点击**提交**。

   在网卡列表中可以查看到新申请的网卡，网卡**状态**为**可用**。

7. 勾选新申请的网卡，选择**更多操作**，点击**分配给云服务器**，弹出**选择要绑定网卡的云服务器**窗口。

   <img src="../../_images/qs_vcpe_assign_card.png" style="zoom:50%;" />

8. 选择绑定网卡的 **vCPE 01**。

   <img src="../../_images/qs_vcpe_assign_server.png" style="zoom:50%;" />

9. 点击**提交**，完成网卡的分配。

   在网卡列表中，可以查看到绑定的云服务器和内网 IP 地址。

   <img src="../../_images/qs_vcpe_bind_server.png" style="zoom:50%;" />

### 步骤三：配置云服务器静态路由

为 **VM 02** 和 **VM 03** 配置默认路由。

如下**以青云的云服务器为例**进行说明。

1. 选择**网络** > **VPC 网络**，进入 **VPC 网络**页面。

   <img src="../../_images/qs_vcpe_vpc_list.png" style="zoom:50%;" />

2. 点击 **VPC 02** 的名称，进入 **VPC 02** 的私有网络页面。

3. 选择**管理配置** > **路由推送**，进入**路由推送**页面。

   <img src="../../_images/qs_vcpe_add_route.png" style="zoom:50%;" />

4. 点击**添加静态路由**，弹出**添加静态路由**窗口。

   <img src="../../_images/qs_vcpe_add_vm03route.png" style="zoom:50%;" />

5. 点击**添加静态路由**，静态路由所在行变更为可编辑状态。

   配置 **VM 02** 的参数

   **目标网络**填写 **Vxnet 03** 私有网络的 IP 网段地址，例如：192.169.129.0/24。

   **路由 IP** 填写 **vCPE 02** 的 IP 地址，例如：172.17.0.2。

   <img src="../../_images/qs_vcpe_add_netcard_route.png" style="zoom:50%;" />

6. 填写完成后，点击 <img src="../../_images/icon_right.png" style="zoom:40%;" />，然后点击**提交**，完成 **VM 02** 中新网段静态路由的添加。

7. 点击右上角的**应用修改**，使配置生效。

8. 请参照[不同 VPC 下Vxnet 通信（1对1）](../10_qs_2vxnet_access#步骤四配置云服务器静态路由)**步骤1** ～**步骤6**，完成 **VM 03** 静态路由的配置。

   配置 **VM 03** 静态路由参数：

   **目标网络**填写 **Vxnet 02** 的私有网络的 IP 网段，例如：172.17.0.0/24。

   **路由 IP** 填写 **网卡** 的 IP 地址，例如：192.168.129.5。

### 步骤四：通过 BGP 将私有网络通告

将 **Vxnet 03** 的私有网络进行路由通告。

1. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

2. 点击接入点名称，进入接入点详情页面。

3. 选择**网络管理** > **静态路由**，进入**静态路由**页面。

   <img src="../../_images/qs_vcpe_bgp_list.png" style="zoom:50%;" />

4. 点击**添加静态路由**，弹出**添加静态路由**窗口。

   添加 Vxnet 03 网络的路由通告，例如：192.168.129.0/24。

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
       <td>添加需要通过静态路由通告出去的<b> 网卡 </b>的私有网络，例如：<b>网卡</b>通告的目标网络为<b> 192.168.129.0/24</b>。</td>
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

### 步骤六：验证网络连通性

1. 在控制台上方菜单栏中，选择**产品与服务** > **计算** > **云服务器**，进入**云服务器**页面。

   <img src="../../_images/qs_vcpe_vm_list.png" style="zoom:50%;" />

2. 在云服务器 **VM 03** 所在行，点击 **Web 终端**，输入用户名和密码，登录到云服务器 VM 03。

3. 登录成功后，执行以下命令，ping VM 02 的 IP 地址，查看是否能 ping 通。

   **ping 172.17.0.3**

   若回显信息如下所示，则说明能 ping 通，**VM 03** 与 **VM 02** 成功打通，那么 **vxnet 03** 和 **vxnet 02** 互通。

   <img src="../../_images/qs_vcpe_ping_access.png" style="zoom:50%;" />
