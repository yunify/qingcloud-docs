---
title: "Windows云服务器内部绑定公网IP"
description: test
draft: false
weight: 20
---

#### 内部绑定方式与外部绑定方式的差异

公网 IP 的绑定模式分为两类： 外部绑定 与 内部绑定 ；外部绑定是在云服务器外部通过网络地址转换 (NAT) 的方式将公网 IP 地址转换成用户私有网络地址或基础网络地址；内部绑定是通过在云服务器内部添加一块连接到公网网关的网卡的方式来绑定公网 IP ，该方式需要用户手动为这块网卡配置 IP 地址及相关路由。

### 第一种调整方式

#### 准备事项

这里仍然假设绑定的公网 IP 地址为 139.198.1.188 ，网关为 139.198.1.1 ； 云服务器在基础网络中的 IP 地址为 10.140.84.3 ，网关为 10.140.84.1 ；内部绑定eip以后，会自动增加一个网卡，以 Windows Server 2012 为例来说明网络配置的步骤。

<img src="../../_images/homer/window_nic01.png" width="60%" height="60%">

通过控制面板–》网络和Internet–》网络连接–》以太网3–》点击属性–》再双击Internet 协议版本4（TCP/IPv4）–》高级，并填写ip地址等信息，如图所示

<img src="../../_images/homer/window_nic02.png" width="60%" height="60%">

#### 路由配置

打开 Windows 命令行终端进行路由配置。首先使用 route 命令查看网卡的编号：
route print -4

输出结果如下图所示，其中第一行与第二行分别为公网的网络连接与基础网络的网络连接，每行的第一个数字为网卡的编号。在本示例中，基础网络的网卡编号为 12 ，公网的网卡编号为 17 。

<img src="../../_images/homer/window_nic03.png" width="60%" height="60%">


从截图上看，已经存在一条公网ip的默认路由，将此条路由的优先级调整为1，使用以下命令调整,调整后如截图所示

```
route -p change 0.0.0.0 mask 0.0.0.0 139.198.1.1 metric 1 if 17
```

<img src="../../_images/homer/window_nic04.png" width="60%" height="40%">

增加一条基础网络的路由，将此条路由的优先级调整为100，使用以下命令调整，调整后如截图所示

```
route -p add 0.0.0.0 mask 0.0.0.0 10.140.84.1 metric 100 if 12
```
<img src="../../_images/homer/window_nic05.png" width="80%" height="60%">

调整完以上步骤，就可以测试网络了，备注：-p是增加用久路由。

#### 测试网络

可以测试ping一下www.baidu.com是否正常
<img src="../../_images/homer/window_nic06.png" width="80%" height="60%">



### 另外一种方式如下

为了方便测试，我将之前的路由全部删除，如截图所示

<img src="../../_images/homer/window_nic07.png" width="60%" height="60%">

#### 调整基础网络的路由优先级

通过控制面板--》网络和Internet--》网络连接--》以太网--》点击属性--》再双击Internet 协议版本4（TCP/IPv4）–》高级，如下图所示。

<img src="../../_images/homer/window_nic08.png" width="60%" height="60%">

<img src="../../_images/homer/window_nic09.png" width="60%" height="60%">

填写默认网关和路由跃点数（取消自动跃点）

<img src="../../_images/homer/window_nic10.png" width="60%" height="60%">

<img src="../../_images/homer/window_nic11.png" width="60%" height="60%">

#### 调整公网网卡的路由优先级

通过控制面板--》网络和Internet--》网络连接--》以太网3--》点击属性--》再双击Internet 协议版本4（TCP/IPv4）–》高级，并填写IP地址等信息，如下图所示。

<img src="../../_images/homer/window_nic12.png" width="60%" height="60%">

进入tcp/ip 高级设置，配置默认路由和跃点数

<img src="../../_images/homer/window_nic13.png" width="60%" height="60%">

<img src="../../_images/homer/window_nic14.png" width="60%" height="60%">

<img src=".../../_images/homer/window_nic15.png" width="60%" height="60%">

#### 查看路由表及网络情况如下

<img src="../../_images/homer/window_nic16.png" width="60%" height="60%">