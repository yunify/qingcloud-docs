---
title: "在Windows客户端中配置OpenVPN"
description: test
draft: false
weight: 20
---

## 需求背景

客户希望自己在办公或者家庭网络能拨入到青云vpc的私有网络，以实现内网访问云上部署的业务，因为vpn隧道是加密通讯的，安全性比较可靠，另外使用起来比较方便；以下介绍的是如何在windows云服务器部署openvpn客户端。

### 1、下载openvpn客户端windows版本

<a href="https://myftp-server.pek3b.qingstor.com/openvpn-install-2.4.7-I603.exe" target="_blank">点击下载到本地</a>

### 2、安装openvpn步骤

缺省情况下，OpenVPN 将被安装到 `C:\Program Files\OpenVPN` 目录中，按照默认选项安装即可，安装时选择”OpenVPN GUI”模块即可安装客户端，以下是完整的安装过程截图。

<img src="../homer/openvpn_building_01.png" width="60%" height="40%">

<img src="../homer/openvpn_building_02.png" width="60%" height="40%">

<img src="../homer/openvpn_building_03.png" width="60%" height="40%">

<img src="../homer/openvpn_building_04.png" width="60%" height="40%">

<img src="../homer/openvpn_building_05.png" width="60%" height="40%">

<img src="../homer/openvpn_building_06.png" width="60%" height="40%">

<img src="../homer/openvpn_building_07.png" width="60%" height="40%">

<img src="../homer/openvpn_building_08.png" width="60%" height="40%">

### 3、配置openvpn服务端

默认采用的是udp协议1194端口，推荐使用tcp协议1194端口，会比较稳定；采用默认证书的验证方式即可。

<img src="../homer/openvpn_building_09.png" width="60%" height="40%">

配置提交以后需要更新vpc才能生效

<img src="../homer/openvpn_building_10.png" width="60%" height="40%">

以上配置完成以后，需要配置安全组的策略，在vpc详情界面找到安全组

<img src="../homer/openvpn_building_11.png" width="60%" height="40%">

<img src="../homer/openvpn_building_12.png" width="60%" height="40%">

添加下行1194端口协议，并更新安全组。

<img src="../homer/openvpn_building_13.png" width="60%" height="40%">

<img src="../homer/openvpn_building_14.png" width="60%" height="40%">

### 4、配置openvpn客户端

下载openvpn客户端证书配置文件，并保存在默认的`C:\Program Files\OpenVPN` 目录；

<img src="../homer/openvpn_building_15.png" width="60%" height="40%">

解压即可

<img src="../homer/openvpn_building_16.png" width="60%" height="40%">

<img src="../homer/openvpn_building_17.png" width="60%" height="40%">

<img src="../homer/openvpn_building_18.png" width="60%" height="40%">

<img src="../homer/openvpn_building_19.png" width="60%" height="40%">

<img src="../homer/openvpn_building_20.png" width="60%" height="40%">

### 5、验证网络是否正常

#### 首先检查openvpn的网卡是否正常获取到ip地址，一般为10.255.x.x

```
以太网适配器 以太网:

   连接特定的 DNS 后缀 . . . . . . . :
   描述. . . . . . . . . . . . . . . : TAP-Windows Adapter V9
   物理地址. . . . . . . . . . . . . : 00-FF-18-31-F0-75
   DHCP 已启用 . . . . . . . . . . . : 是
   自动配置已启用. . . . . . . . . . : 是
   本地链接 IPv6 地址. . . . . . . . : fe80::3461:44e1:d1f9:ece3%39(首选)
   IPv4 地址 . . . . . . . . . . . . : 10.255.1.6(首选)
   子网掩码  . . . . . . . . . . . . : 255.255.255.252
   获得租约的时间  . . . . . . . . . : 2021年2月16日 23:42:22
   租约过期的时间  . . . . . . . . . : 2022年2月16日 23:42:22
   默认网关. . . . . . . . . . . . . :
   DHCP 服务器 . . . . . . . . . . . : 10.255.1.5
   DHCPv6 IAID . . . . . . . . . . . : 654376728
   DHCPv6 客户端 DUID  . . . . . . . : 00-01-00-01-26-78-97-2B-00-0C-29-27-F1-0C
   DNS 服务器  . . . . . . . . . . . : fec0:0:0:ffff::1%1
                                       fec0:0:0:ffff::2%1
                                       fec0:0:0:ffff::3%1
   TCPIP 上的 NetBIOS  . . . . . . . : 已启用

C:\Users\admin>

C:\Users\admin>ping 10.255.1.6

正在 Ping 10.255.1.6 具有 32 字节的数据:
来自 10.255.1.6 的回复: 字节=32 时间<1ms TTL=128
来自 10.255.1.6 的回复: 字节=32 时间<1ms TTL=128
来自 10.255.1.6 的回复: 字节=32 时间<1ms TTL=128
来自 10.255.1.6 的回复: 字节=32 时间<1ms TTL=128

10.255.1.6 的 Ping 统计信息:
    数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
往返行程的估计时间(以毫秒为单位):
    最短 = 0ms，最长 = 0ms，平均 = 0ms
    

```

#### 验证vpc私有网络下的vm，看是否能正常联通

<img src="../homer/openvpn_building_21.png" width="60%" height="40%">

```
C:\Users\admin>ping 172.25.10.2

正在 Ping 172.25.10.2 具有 32 字节的数据:
来自 172.25.10.2 的回复: 字节=32 时间=73ms TTL=62
来自 172.25.10.2 的回复: 字节=32 时间=36ms TTL=62
来自 172.25.10.2 的回复: 字节=32 时间=33ms TTL=62
来自 172.25.10.2 的回复: 字节=32 时间=32ms TTL=62

172.25.10.2 的 Ping 统计信息:
    数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
往返行程的估计时间(以毫秒为单位):
    最短 = 32ms，最长 = 73ms，平均 = 43ms

C:\Users\admin>
```

