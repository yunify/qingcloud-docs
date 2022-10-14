---
title: "IPsec 隧道应用示例"
description: 介绍 IPSEC 隧道的使用操作。
keyword: VPC, VPC 网络, IPSEC 隧道
draft: false
weight: 30
---


本文介绍了使用 IPsec 隧道实现 VPC 对等连接以及 VPC 与本地数据中心连接的配置方法。其他更高级的连接场景和 GRE 隧道类似，可参见 [GRE 隧道应用示例](../gre)，本文不再赘述。

## VPC 与 VPC 互联

如下图所示，假设您在云平台中有两个 VPC 网络 ，位于同一区域，分别为 router1 和 router2，这两个 VPC 网络各连接有两个私有网络。您可以通过 IPsec 隧道将他们连接在一起。

![](../../../_images/ipsec-tunnel.png)

### 步骤1：在 VPC1 上配置隧道规则

1. 登录管理控制台，选择**产品与服务** > **网络服务** > **VPC 网络**，进入 VPC 列表页面。

2. 点击 VPC1 网络名称（本例中为 router1），进入详情页。

3. 在 VPC 详情页的**管理配置**页签，选择**隧道服务**。

   ![](/network/vpc/_images/tunnel_service.png)

4. 点击**添加隧道规则**，弹出**添加隧道规则**窗口。

5. 配置以下参数，添加一条到 router2 的 IPsec 隧道。

   <img src="../../../_images/ipsec-r1-r2.png" alt="IPsec隧道规则-2" style="zoom:50%;" />

   参数详细说明，请参见 [IPsec 隧道参数说明](../mge_tunnel_rule/#ipsec-隧道参数)。以下为本场景中的配置示例。

   * 名称：为该隧道起个名字，比如 “router1 to router2”。
   * 远端路由器： 因为是内网互连，在本例中填入远端路由器（router2）的 ID 即可。如果是公网互连，则需要填入远端路由器的公网 IP 或是域名。
   * 协议：选择 `IPsec`。
   * 密钥：隧道两端共同约定的密钥，填写任意字符串。本例中为 “passw0rd”。
   * 本地网络：至少包括一个路由器已有的私有网络。在本例中为当前 VPC 的两个私有网络 192.168.1.0/24、192.168.2.0/24。
   * 目标网络：在本例中为对端 VPC（ router2 ）的两个私有网络 192.168.3.0/24、192.168.4.0/24。
   * 其他配置使用默认选项。

5. 确认无误后，点击**提交**，返回**隧道服务**界面。

5. 点击页面上方的**应用修改**，完成路由器的配置更新。

8. 前往 VPC 网络使用的安全组规则中打开 IPsec 协议需要的端口/协议，分别为 UDP/500、UDP/ 4500、AH 协议 和 ESP 协议，添加规则后点击**应用修改**使之生效。

   ![](/network/vpc/_images/ipsec_sg_rule.png)

### 步骤2：在 VPC2 上配置隧道规则

由于隧道的对称性，在 VPC 网络 router2 上也需要有对应的配置。

1. 在 VPC 列表页，点击 VPC2 网络名称（本例中为 router1），进入详情页。

1. 在**管理配置**页签，点击**隧道服务** > **添加隧道规则**。

2. 在隧道配置对话框里，填写以下参数，添加一条到 router1 的 IPsec 隧道。

   <img src="../../../_images/ipsec-r2-r1.png" alt="IPsec隧道规则-2" style="zoom:50%;" />

   * 名称：为该隧道起个名字，比如 “router2 to router1”。
   * 协议：选择 `IPsec`。
   * 远端路由器：因为是内网互连，在本例中填入对端  VPC （router2）的 ID 即可。如果是公网互连，则需要填入远端路由器的公网 IP 或是域名。
   * 密钥：隧道两端共同约定的密钥。本例中为 “passw0rd”，与 router1 上配置的密钥保持一致。
   * 本地网络：在本例中为当前 VPC 的两个私有网络 192.168.3.0/24、192.168.4.0/24。
   * 目标网络：在本例中为对端 VPC（ router1 ） 的两个私有网络 192.168.1.0/24、192.168.2.0/24。
   * 其他配置使用默认选项。

3. 确认无误后，点击**提交**，返回**隧道服务**界面。

5. 点击页面上方的**应用修改**，完成路由器的配置更新。

6. 前往 VPC 网络使用的安全组规则中打开 IPsec 协议需要的端口/协议，分别为 UDP/500、UDP/ 4500、AH 协议 和 ESP 协议，添加规则后点击**应用修改**使之生效。

   ![](/network/vpc/_images/ipsec_sg_rule.png)

### 步骤3：测试 VPC 之间的连通性

完成两个 VPC 网络的隧道配置之后，可以通过这两个 VPC 网络下的云服务器进行连通性测试。

1. 登录到 VPC2 内的一台无公网 IP 的云服务器。

2. 执行 **ping** 命令，访问 VPC1 内的一台服务器，验证通信是否正常。

   如果能够收到回复报文，则证明通信正常。

   ![](../../../_images/ipsec-r1-r2-ping.png)

## VPC 与本地数据中心互联

除 VPC 之间可以通过 IPsec 互联外，VPC 也可以和具有 IPsec 功能的物理设备（路由器、防火墙等）做互联。

假设本地数据中心的路由器公网地址为 88.88.88.88，私有网络为 192.168.1.0/24，云平台 VPC 公网地址为 99.99.99.99， VPC 私有网络为 192.168.100.0/24，现需要在本地数据中心的路由器中配置 IPsec 隧道实现与 VPC 通信。

### 步骤1：在 VPC 上配置隧道规则

请参照 [VPC 互联](#vpc-与-vpc-互联)场景中的 [步骤1](#步骤1在-vpc1-上配置隧道规则) 完成 VPC 端到本地数据中心的隧道配置。

1. 登录管理控制台，选择**产品与服务** > **网络服务** > **VPC 网络**，进入 VPC 列表页面。

2. 点击 VPC 网络名称，进入详情页。

3. 在 VPC 详情页的**管理配置**页签，选择**隧道服务**。

4. 点击**添加隧道规则**，弹出**添加隧道规则**窗口。

5. 配置以下参数，添加一条到本地数据中心的 IPsec 隧道。

   <img src="../../../_images/ipsec_vpc_idc.png" />

   参数详细说明，请参见 [IPsec 隧道参数说明](../mge_tunnel_rule/#ipsec-隧道参数)。以下为本场景中的配置示例。

   * 名称：为该隧道起个名字，比如 “vpc to idc”。
   * 远端路由器：在本例中填入数据中心的公网 IP 88.88.88.88。
   * 协议：选择 `IPsec`。
   * 密钥：隧道两端共同约定的密钥，填写任意字符串。
   * 本地网络：本端私有网络。在本例中为 VPC 的私有网络 192.168.100.0/24。
   * 目标网络：对端私有网络。在本例中为本地数据中心的私有网络 192.168.1.0/24。
   * 其他配置使用默认选项。

6. 确认无误后，点击**提交**，返回**隧道服务**界面。

7. 点击页面上方的**应用修改**，完成路由器的配置更新。

8. 前往 VPC 网络使用的安全组规则中打开 IPsec 协议需要的端口/协议，分别为 UDP/500、UDP/ 4500、AH 协议 和 ESP 协议，添加规则后点击**应用修改**使之生效。

   ![](/network/vpc/_images/ipsec_sg_rule.png)

### 步骤2：在数据中心配置隧道规则

#### 配置说明

以下是现阶段云平台 VPC IPsec 的支持参数，支持参数自动匹配、自动协商。

```
MODE:               main[主模式]/aggrmode[野蛮模式]
TYPE:               tunnel
IKE:                ikev1(默认)/ikev2
IKE encrypt:        AES(默认)/3DES
ESP encrypt:        AES（默认）/3DES/DES/CAST/BLOWFISH/CAMELLIA/SERPENT/TWOFISH
IKE SA lifetime:    3600s
IPsec SA lifetime:  28800s
HASH:               MD5/SHA1(默认)/SHA2
DH-GROUP:           2/5/14（默认）/15/16/17/18/22/23/24
PFS:                up
NAT-Traversal:      up
AUTH:               PSK
DPDDelay:           15s
```

- 通常在物理设备上需要显式地定义 IPsec 的加密集（encryption 和 HASH）、DH group、lifetime、access-list、路由、NAT 豁免等信息。

- 如果对接的物理设备在内网，需要在基于 IPsec 的隧道规则中配置**对端设备 ID**，通常填写所对接内网的网关 IP。

#### 配置示例

根据物理设备的品牌和型号，IPsec 的配置方法会存在差异性，详细配置方法请参阅设备的用户手册。以下以 Cisco ASA 及 H3C Router 为例。

 以下为 **Cisco ASA** 设备使用 cli 进行配置的示例，主要包含了 crypto-map、access-list、psk、tunnel 的配置文本。

```
ASA(config)# access-list my_nat extended permit ip 192.168.1.0 255.255.255.0 192.168.100.0 255.255.255.0
ASA(config)# access-list cisco-to-qingcloud extended permit ip 192.168.1.0 255.255.255.0 192.168.100.0 255.255.255.0
ASA(config)# nat (inside) 0 access-list my_nat

ASA(config)# crypto ipsec transform-set ESP-3DES-MD5 esp-3des esp-md5-hmac
ASA(config)# crypto ipsec security-association lifetime seconds 28800
ASA(config)# crypto ipsec security-association lifetime kilobytes 4608000

ASA(config)# crypto map my_map 1 match address cisco-to-qingcloud
ASA(config)# crypto map my_map 1 set pfs
ASA(config)# crypto map my_map 1 set peer 99.99.99.99
ASA(config)# crypto map my_map 1 set transform-set ESP-3DES-MD5
ASA(config)# crypto map my_map interface outside
ASA(config)# crypto isakmp enable outside
ASA(config)# crypto isakmp policy 10
ASA(config-isakmp)# authentication pre-share
ASA(config-isakmp)# encryption 3des
ASA(config-isakmp)# hash md5
ASA(config-isakmp)# group 2
ASA(config-isakmp)# lifetime 3600
ASA(config)# crypto isakmp nat-traversal 60

ASA(config)# tunnel-group 99.99.99.99 type ipsec-l2l
ASA(config)# tunnel-group 99.99.99.99 ipsec-attributes
ASA(config-tunnel-ipsec)# pre-shared-key *****
```



以下为 **H3C Router** 设备使用 cli 进行配置的示例，主要包含了 transform-set、policy、profile、proposal、psk、acl 的配置文本。

```
#
acl number 3100
 rule 10 permit ip source 192.168.1.0 0.0.0.255 destination 192.168.100.0 0.0.0.255

#
ipsec transform-set tran1
 esp encryption-algorithm aes-cbc-128
 esp authentication-algorithm sha1
 pfs dh-group14

#
ipsec policy map1 10 isakmp
 transform-set tran1
 security acl 3100
 remote-address 99.99.99.99
 ike-profile profile1
 sa duration time-based 28800

#
ike profile profile1
 keychain keychain1
 local-identity address 88.88.88.88
 match remote identity address 99.99.99.99 255.255.255.255
 proposal 1

#
ike proposal 1
 encryption-algorithm 3des-cbc
 dh group14
 sa duration 3600
#
ike keychain keychain1
 pre-shared-key address 99.99.99.99 255.255.255.255 key cipher *****
```

