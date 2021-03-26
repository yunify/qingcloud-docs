---
title: "IPv6快速使用指南"
description: test
draft: false
---

IPv6 是英文“Internet Protocol Version 6”（互联网协议第6版）的缩写，是互联网工程任务组（IETF）设计的用于替代IPv4的下一代IP协议。按照早前工信部关于贯彻落实《推进互联网协议第六版（IPv6）规模部署行动计划》通知中要求，各大云服务厂商在
2018 年末完成 50% 云产品的 IPv6 改造。青云 QingCloud 已经完成云服务器、 VPC网络、防火墙和公网 IP 和负载均衡器等产品的改造，支持 IPv6 网络协议。

IPv6 与 IPv4 相比，优势主要体现在两个大的方面，一个是地址空间数量可以达到 2 的 128
次方，满足未来更多网络设备的需要，另一个则是更高的网络安全保证， IPv6 可通过对地址的管理和路由机制，使得IP层的溯源与可信验证成为可能。

>说明
目前北京 3-A 区，北京 3 区，广东 2 区和上海 1 区支持 IPv6

## 创建支持 IPv4/ IPv6 双栈的网络

IPv4 过渡到 IPv6 的[方案](https://tools.ietf.org/html/rfc6180)，大体分为三类：双栈，隧道和转换。简单地说，[双栈](https://tools.ietf.org/html/rfc4241)指IPv4和IPv6同时在设备和网络中存在的方案。[隧道](https://tools.ietf.org/html/rfc3053)指将 IPv6 的数据包封装在现有协议（IPv4）里面，通过隧道封装实现互通。[转换](https://tools.ietf.org/html/rfc2529)指在 IPv6 的网络和 IPv4 的网络之间建立转换机制，以实现两张网络的设备之间的互通。

青云QingCloud主要提供 IPv4 / IPv6 双栈的产品和服务。无论是普通用户还是应用程序，双栈是最简单最便捷的，客户端和服务端可以选择自己倾向的网络。


### 创建启用 IPv6 的 VPC

您只需要在创建专有网络 VPC 时，在 IPv6 网络地址选择“系统自动分配”即可创建支持 IPv4/IPv6 双栈的 VPC 。创建后可查看 IPv6 管理地址范围的详细信息。专有网络VPC会默认分配掩码为 /56 的IPv6地址段。

![](../../_images/log-ipv6-create-vpc.png)

### 创建启用 IPv6 的私有网络

为专有网络 VPC 添加私有网络, 在 IPv6 网络地址处选择“系统自动分配”或者“手动指定”，即可创建出启用 IPv6 的私有网络。

![](../../_images/log-ipv6-create-vxnet.png)

创建完成后，即可查看私有网络的管理 IPv6 属性。私有网络的 IPv6 网络地址默认为掩码为 /64 的 IPv6 地址。

![](../../_images/log-ipv6-vxnet-detail.png)

### 防火墙开通 IPv6 协议

为了保证您的云服务器安全，在云服务器 IPv6 接入公网时自动加载防火墙以保证您的访问安全。因此接入公网之后，您需要在云服务器的防火墙上开通 IPv6
的相关访问协议。

>注解
在启用 IPv6 后，除 IPv6 ICMP(ping6)需额外配置，其他在您防火墙里的策略规则会同时应用到 IPv6 地址。
"IP/端口集合"功能同样适用于 IPv6 ，您也可以用此功能实现对 IPv6 地址/端口的批量管理。

![](../../_images/log-ipv6-opensg.png)


## 升级现有网络资源支持 IPv4 / IPv6 双栈

除创建新 VPC 和私有网络支持 IPv6 外，您也可升级您现有的仅支持 IPv4 的 VPC 和私有网络来支持 IPv6 。

### 升级 VPC 支持 IPv6
在 VPC 页面上点击“更多操作”，选择“启用 IPv6 ”，在弹出的提示框中点击“确认”，即可完成 VPC 支持 IPv6 的升级。

![](../../_images/upgrade-ipv6.png)

升级后即可看到 VPC 的 IPv6 地址范围。

### 升级私有网络支持 IPv6

原有的 VPC 升级为 IPv6 以后，私有网络也可以一键升级为 IPv6 。具体方法为：在 VPC 的私有网络列表上，右键点击要升级的私有网络，在弹出的右键菜单中点击“启用 IPv6 ”。

![](../../_images/upgrade-vxnet-ipv6.png)

在弹出的窗口中，选择“系统自动分配”或“手动指定”，点击“提交”即可。

![](../../_images/open-vxnet-ipv6.png)

## 创建云服务器并加入到启用 IPv6 的私有网络

在私有网络中，点击“创建资源”按钮，选择“云服务器”，按照向导选择支持 IPv6 DHCP 自动化配置的镜像完成创建云服务器后，可查看云服务器的 IPv6 地址信息。

>注解
目前仅部分操作系统镜像支持 IPv6 自动化配置：`centos75x64b`，`bionic1x64c`，`xenial5x64b`（及相关操作系统以后的版本）。
若从其他的镜像启动的云服务器， 则未针对 DHCPv6 进行配置， 也即该云服务器的网络接口无法自动获取/识别 IPv6 相关网络配置，
需手动配置该云服务器，参考[云服务器 IPv6 自动化配置 ](#enable_instance_ipv6)。

![](../../_images/log-ipv6-instance.png)

### <span id="enable_ipv6_public">开通云服务器 IPv6 公网访问</span>

针对获取到私有网络 IPv6 地址的云服务器，如果想要接入到公网，只需开通 IPv6 的公网访问即可。方法是在云服务器上点击右键，在弹出菜单中依次选择：“公网 IPv6
” -- “ IPv6 接入公网”，在弹出的对话框中，为 IPv6 公网 IP 选择计费模式，点击“确定”即可。

![](../../_images/log-ipv6-connect.png)

接入公网以后，在公网 IP 页面，可查看接入公网的 IPv6 地址详情，以及计费和监控的具体信息：[_IPv6公网 IP_](../../manual/ipv6/ipv6_other_operation/)。

![](../../_images/log-ipv6-eip.png)

与 IPv4 公网 IP 一样， IPv6 的公网 IP 支持“带宽计费”和“流量计费”两种模式。

我们秉持 IPv6 协议本身“地址无限”的理念， IPv6 地址免费，只对使用流量和带宽收费。


### <span id="enable_instance_ipv6">云服务器 IPv6 自动化配置 </span>

对于使用不支持 IPv6 自动化配置的镜像所启动的云服务器，通过对云服务器进行手动配置， 也可以开启 IPv6 自动化配置 。

青云的网络采用了`DHCPv6`，用户云服务器需要以`DHCPv6`的方式获取到 IPv6 地址，并通过[Network Discovery Protocol](https://tools.ietf.org/html/rfc4861)里的`Router Advertisement`机制来自动路由寻址。

云服务器内要配置支持 DHCPv6，主要包括三个要点：

1. 需要配置 [DUID](https://en.wikipedia.org/wiki/DHCPv6#DHCP_Unique_Identifier)
 的类型为 [DUID-LLT](https://tools.ietf.org/html/rfc3315#section-9.2)。
2. 需要在关闭网络时，及时清理 lease 文件，确保切换网络时 duid 不会缓存在 lease 文件里。
3. 配置 sysctl `accept_dad` 为 0。[DAD](https://tools.ietf.org/html/rfc4429)
功能会避免 IPv6 地址重复分配。在青云，会通过 DHCP 机制避免地址重复分配；且底层实现有对 IPv6 实现地址代答功能，可能会导致云服务器内 IPv6
地址变为 'duplicated'，所以需要关闭 DAD。

此外，不同操作系统、不同发行版的配置方法是不同的，需要根据您的操作系统版本和网络管理工具，并查阅相关文档，进行合理正确配置。

操作系统开启 IPv6 自动化配置文档列出了 `CentOS 7.5` / `Ubuntu 18.04` / `Ubuntu 16.04` 的配置方法。点击[查看详情](https://docs.qingcloud.com/product/network/IPv6_config#%E4%B8%BB%E6%9C%BA-ipv6-%E8%87%AA%E5%8A%A8%E5%8C%96%E9%85%8D%E7%BD%AE-)，如有其它发行版的需求，您可以通过提工单来与我们的技术人员交流。

配置完成后，需要重启云服务器，以确保您的配置生效。

至此，您就可以轻松的体验 IPv6 带来的种种好处了。


## 申请 IPv6 弹性 IP 并绑定资源

青云QingCloud支持两种 IPv6 连接公网的方案，第一种是上文中通过 VPC 的双栈网络 DHCP 获取到 IPv6 地址，然后通过控制台为 IPv6 分配公网带宽的方式。第二种您可以申请一个 IPv6 弹性IP，并绑定到虚拟机或者负载均衡器上。

两种 IPv6 最大的区别，通过 VPC DHCP 获取的 IPv6 地址，在接入公网后，同时具备公网和 VPC 内网的访问能力。手动申请的 IPv6 地址只具有公网能力，无法与VPC内部的 IPv6 互通，类似于内网的 IPv4 是无法访问公网IPv4。
两种方案都可以提供 IPv6 的公网访问，您可以根据自己的网络需求和偏好进行选择。

![](../../_images/IPv6_inbind_ip_create.png)

手动申请的 IPv6 弹性 IP 的使用与[内部绑定](https://docs.qingcloud.com/product/network/eip#%E4%BD%BF%E7%94%A8%E5%86%85%E9%83%A8%E7%BB%91%E5%AE%9A%E5%85%AC%E7%BD%91-ip)的公网 IP 类似，
将 IPv6 分配到云服务器后可以看到云服务器内多出一块还未分配 IP 地址的公网网卡。以镜像 centos75x64b 为例，如下图所示

[![](../../_images/IPv6_inbind_nic.png)](../../_images/IPv6_inbind_nic.png)

在绑定 IPv6 弹性 IP 后，您还需要手动为云服务器内的公网网卡进行网络配置，主要包括对网卡 IPv6 地址配置及路由配置，详情请见[IPv6网络配置指南](https://docs.qingcloud.com/product/network/IPv6_config)。

## 负载均衡器支持 IPv6

在创建新的负载均衡器时，您可以选择已经申请的 IPv6 弹性 IP,这样负载均衡器在创建完成后就绑定了选择的 IPv6 弹性 IP。

![](../../_images/IPv6_lb_create.png)


对于现有的负载均衡器，也可以将申请到的 IPv6 弹性 IP 绑定到负载均衡器上

![](../../_images/IPv6_inbind_ip_associate.png)

绑定完成后，用户的服务端就可以通过负载均衡器的 IPv6 地址对外提供服务了。

