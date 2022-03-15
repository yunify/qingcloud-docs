---
title: "企业快速上云"
draft: false
collapsible: false
weight: 10
---

您可以通过建立 SD-WAN 核心网络的方式，在客户处部署光盒 CPE，并在 VPC 的 Vxnet 中部署一个软件 vCPE，通过光盒 CPE 打通云平台 VPC 的 Vxnet 的网络通信。

> **说明：**
>
> 光盒 CPE 设备和软件 vCPE 是两种不同的服务形态，实际作用无差异。

如下操作步骤**以 QingCloud 上创建的 VPC、Vxnet、云服务器、光盒 CPE 、软件 vCPE 为例**进行说明。

## 网络规划

![](../../_images/qs_connect_2_vpc.png)

## 准备工作

- 已获取 QingCloud 管理控制台的账号和密码。
- 光盒 2 号 WAN 口接入 DHCP 方式可以上网。

## 步骤1：创建连接云网

1. 登录 QingCloud 管理控制台。

3. 选择**产品与服务** > **SD-WAN（新版）** > **SD-WAN（新版）**，进入**连接云网**页面。

3. 点击**创建连接云网**，弹出**创建连接云网**窗口。

   <img src="/sd-wan/sdwan_new/_images/qs_wan_multiple.png" style="zoom:50%;" />

5. 输入企业云网的**名称**和**描述**信息，并点击**创建连接云网**。

   连接云网创建完成后，当连接云网的状态为**活跃**时，说明连接云网创建成功。
   
   <img src="../../_images/qs_cloud_network.png" style="zoom:50%;" />

## 步骤2：创建接入点

#### 光盒 CPE 接入点 （CPE02）

请参照如下操作步骤，创建一个光盒 CPE 接入点 **CPE 02（172.17.0.2/24）**，用于 **PC 02（172.17.0.3）** 的接入。

1. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../_images/qs_light_access.png" style="zoom:50%;" />

2. 点击**创建接入点**，弹出**创建接入点**窗口。

   <img src="../../_images/qs_light_access_buy.png" style="zoom:50%;" />

4. 配置接入点信息，如下表所示。

   | 参数         | 示例                                                         |
   | ------------ | ------------------------------------------------------------ |
   | 接入点名称   | CPE 02                                                       |
   | 接入点类型   | 光盒 2 号                                                    |
   | 部署方式     | 双机                                                         |
   | 序列号       | 输入光盒 CPE 的序列号                                        |
   | 关联连接云网 | sdwan                                                        |
   | 高级设置     | 勾选 LAN 配置<br />网段：</b>172.17.0.0/24<br />网关：172.17.0.2<br />DHCP 服务：开启 DHCP<br />DHCP 起始地址：172.17.0.3<br />DHCP 结束地址：172.17.0.252 |
   
4. 配置购买信息。

   <img src="/sd-wan/sdwan_new/_images/qs_light_buy_detail.png" style="zoom:50%;" />

5. 点击**立即创建**，根据提示信息完成硬件光盒 CPE 接入点（CPE 01）的创建操作。

#### 软件 vCPE 接入点（vCPE01）

请参照如下操作步骤，创建一个软件 vCPE 接入点。

vCPE01 网关 IP：192.168.200.200

1. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

   <img src="../../_images/qs_light_access.png" style="zoom:50%;" />

2. 点击**创建接入点**，弹出**创建接入点**窗口。

   <img src="../../_images/qs_vcpe_access_buy.png" style="zoom:50%;" />

3. 配置接入点信息，如下表所示。

   | 参数         | 示例                                                         |
   | ------------ | ------------------------------------------------------------ |
   | 接入点名称   | vCPE 01                                                      |
   | 接入点类型   | vCPE 虚拟机或者 vCPE 容器                                    |
   | 部署方式     | 双机                                                         |
   | 关联连接云网 | sdwan                                                        |
   | 高级设置     | 勾选网关配置<ul><li>网段：192.168.200.0/24</li><li>网关：192.168.200.200</li><li>DHCP 服务：开启 DHCP。</li><li>DHCP 起始地址：192.168.200.2</li><li>DHCP 结束地址：192.168.128.252</li></ul> |

4. 配置购买信息。

   <img src="/sd-wan/sdwan_new/_images/qs_light_buy_detail.png" style="zoom:50%;" />

5. 点击**立即创建**，根据提示信息完成软件 vCPE 接入点（vCPE 01）的创建操作。

## 步骤3：创建VPC、Vxnet和VM

请确保 VPC 01、Vxnet 01 和 VM 01 在同一个区域。

#### 创建VPC01及Vxnet01

1. 选择**产品与服务** > **网络服务** > **VPC 网络**，进入**VPC 网络**页面。

2. 点击**创建 VPC**，进入**创建 VPC 网络**页面。

   <img src="/sd-wan/sdwan_new/_images/vm_vpc_create_entrance.png" style="zoom:50%;" />

3. 在**基本信息**区域，选择 **IPv4 地址范围**为 `192.168.0.0/16`。

4. 在**初始化私有网络**区域，将 **IPv4 地址范围**设置为 `192.168.200.0/24`。

   <img src="/sd-wan/sdwan_new/_images/vm_vpc_create.png" style="zoom:30%;" />

5. 其他参数请根据需要进行配置。

6. 点击**立即创建**，根据提示信息完成 **VPC01（192.168.0.0/16）** 及 **Vxnet01（192.168.200.0/24）** 的创建操作。

#### 创建VM01

创建 VM 01（192.168.200.3） ，通过 VM 01 访问 PC 02。

1. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器**页面。

2. 点击**创建**，进入**购买云服务器**页面。

   <img src="/sd-wan/sdwan_new/_images/vm_buy_info.png" style="zoom:50%;" />

3. 在**网络**区域，选择已创建的 **VPC 01** 和 **Vxnet 01**，手动分配 VM01 的 IP 地址 `192.168.200.3`。

   <img src="/sd-wan/sdwan_new/_images/vm_vpc_vxnet.png" style="zoom:50%;" />

4. 其他参数的配置说明，请参见[配置云服务器信息](/compute/vm/quickstart/create_vm/#步骤一进入购买页面)。

5. 点击**立即购买**，根据提示信息完成云服务器 **VM01（192.168.200.3）** 的购买操作。

## 步骤4：激活光盒CPE/软件vCPE 

#### 激活光盒 CPE 

请确保光盒设备已上电且接 WAN 口。

若需要启用高可用，添加备用设备，请绑定序列号激活设备，详细操作请参见[添加备设备](../../open_access_point/lightbox/60_bind_serial_no/)。

若硬件光盒 CPE 已激活，则在 SD-WAN 接入点列表中，可查看接入点状态处于**已激活**，设备状态处于**在线**。

<img src="/sd-wan/sdwan_new/_images/qs_equip_active.png" style="zoom:50%;" />

#### 激活软件 vCPE

部署软件 vCPE，详细操作请参见[部署软件 vCPE](../../open_access_point/vcpe/40_deploy_script/)。

若需要启用高可用，添加备用设备，请参照[部署软件 vCPE](../../open_access_point/vcpe/40_deploy_script/)，将软件 vCPE 部署在备用设备上，并绑定 vCPE 01 接入点的 License。

关于部署 vCPE 的云服务器的网络配置，如下图所示。

<img src="/sd-wan/sdwan_new/_images/um_vcpe_display.png" style="zoom:50%;" />

网络相关配置，如下表所示。

| 参数        | 参数说明                                                     |
| ----------- | ------------------------------------------------------------ |
| 网络        | 部署 vCPE 的云服务器（vCPE 01）与业务所在云服务器（VM 01）在同一 VPC、同一 Vxnet。<ul><li><b>VPC</b>：192.168.0.0/16</li><li><b>Vxnet</b>：192.168.200.0</li><li><b>虚拟机 IP 地址</b>：手动分配 IP 地址 192.168.200.2</li></ul> |
| 弹性公网 IP | 部署 vCPE 的云服务器需要访问公网。请根据实际需要为该云服务器或者云服务器所在 VPC 绑定公网 IP。 |

若软件 vCPE 已激活，则在 SD-WAN 接入点列表中，可查看接入点状态处于**已激活**，设备状态处于**在线**。

<img src="/sd-wan/sdwan_new/_images/qs_equip_active.png" style="zoom:50%;" />

## 步骤5：配置 VM 静态路由

为云服务器 **VM 01** 配置静态路由。

如下**以青云QingCloud 的云服务器为例**进行说明。

1. 选择**产品与服务** > **计算** > **云服务器**，进入 **云服务器**页面。

   <img src="/sd-wan/sdwan_new/_images/vm_login_entrance.png" style="zoom:50%;" />

2. 点击 Web 终端，登录云服务器 VM 01。

3. 执行如下命令，配置静态路由。

   ```
   ip  route  add  172.17.0.0/24  via  192.168.200.200
   ```

4. 执行如下命令，查看静态路由信息。

   ```
   ip route
   ```

   若回显信息如下所示，则说明添加静态路由成功。

   <img src="/sd-wan/sdwan_new/_images/vm_login_route.png" style="zoom:40%;" />

## 步骤6：配置 vCPE 路由通告

配置 vCPE01 路由通告，使 vCPE01 业务网段与 CPE 02 互通。

> **注意**
>
> 硬件光盒 CPE 默认通告，可不配置 CPE 02 路由通告。

1. 在左侧导航栏中，点击**接入点**，进入**接入点**页面。

2. 点击接入点名称，进入接入点详情页面。

3. 选择**网络管理** > **静态路由**，进入**静态路由**页面。

   <img src="../../_images/qs_vcpe_bgp_list.png" style="zoom:50%;" />

4. 点击**添加静态路由**，弹出**添加静态路由**窗口。

   <img src="../../_images/qs_vxnet_bgp.png" style="zoom:50%;" />

   参数说明，如下表所示。

   | 参数     | 示例                                                         |
   | -------- | ------------------------------------------------------------ |
   | 名称     | vCPE01                                                       |
   | 目标网络 | 192.168.200.0/24                                             |
   | 下一跳   | 可选，若您的 vCPE 连接了路由器，可设置下一跳地址。           |
   | 路由通告 | 开启，若不开启路由通告，则 vCPE 与 CPE 之间无法建立网络通信。 |

5. 点击**添加**，完成静态路由的添加操作。

6. 点击**应用修改**，使配置生效。

## 步骤7：验证网络连通性

1. 在控制台上方菜单栏中，选择**产品与服务** > **计算** > **云服务器**，进入**云服务器**页面。

   <img src="../../_images/qs_vcpe_vm_list.png" style="zoom:50%;" />

2. 在云服务器 **VM 01**所在行，点击 **Web 终端**，输入登录云服务器的用户名和密码，登录到云服务器 VM 01。

3. 登录成功后，执行以下命令，ping PC 02 的 IP 地址（172.17.0.3），查看是否能 ping 通。

   > **注意**
   >
   > 请保持 PC02 电脑防火墙已关闭，并且 PC02 没有连接 WiFi 和 VPN。

   **ping 172.17.0.3**
   
   若回显信息如下所示，则说明能 ping 通，**VM 01** 与 **PC 02** 成功打通。
   
   <img src="../../_images/qs_vcpe_ping_access.png" style="zoom:50%;" />
