---
title: "开启云服务器 IPv6 自动化配置"
date: 2021-05-26T17:08:56+09:00
description: test
weight: 40
draft: false
---

## 操作场景

对于使用不支持 IPv6 自动化配置的镜像所启动的云服务器，通过对云服务器进行手动配置， 也可以开启 IPv6 自动化配置 。

青云的网络采用了 DHCPv6，用户云服务器需要以 DHCPv6 的方式获取到 IPv6 地址，并通过[Network Discovery Protocol](https://tools.ietf.org/html/rfc4861)里的 **Router Advertisement** 机制来自动路由寻址。

## 操作要点

云服务器内要配置支持 DHCPv6，主要包括三个要点：

1. 需要配置 [DUID](https://en.wikipedia.org/wiki/DHCPv6#DHCP_Unique_Identifier)的类型为 [DUID-LLT](https://tools.ietf.org/html/rfc3315#section-9.2)。
2. 需要在关闭网络时，及时清理 lease 文件，确保切换网络时 duid 不会缓存在 lease 文件里。
3. 配置 sysctl `accept_dad` 为 0。[DAD](https://tools.ietf.org/html/rfc4429)功能会避免 IPv6 地址重复分配。在青云，会通过 DHCP 机制避免地址重复分配；且底层实现有对 IPv6 实现地址代答功能，可能会导致云服务器内 IPv6
   地址变为 'duplicated'，所以需要关闭 DAD。
4. 配置完成后，需要重启云服务器，以确保您的配置生效。

此外，不同操作系统、不同发行版的配置方法是不同的，需要根据您的操作系统版本和网络管理工具，并查阅相关文档，进行合理正确配置。

## 操作示例

本文列出了 `CentOS 7.5` / `Ubuntu 18.04` / `Ubuntu 16.04` 的配置方法。如有其它发行版的需求，您可以通过提工单来与我们的技术人员交流。

### Centos 7.5

以下操作基于镜像ID: `centos75x64a`。

1.升级 NetworkManager 至 1.12 版本以后，才支持 `dhcp-duid` 配置。

```
[root@ipv6-12 ~]# NetworkManager --version
1.10.2-13.el7
[root@ipv6-12 ~]# yum update NetworkManager
[root@ipv6-12 ~]#
```

2.配置 `/etc/NetworkManager/NetworkManager.conf`，增加 `ipv6.dhcp-duid` 配置。

```
[root@ipv6-12 ~]# vi /etc/NetworkManager/NetworkManager.conf
[main]
plugins=ifcfg-rh,keyfile

[connection]
ipv6.dhcp-duid=llt
[root@ipv6-12 ~]#
```

3.配置 `ifcfg-eth0`。

```
[root@ipv6-12 ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth0
TYPE=Ethernet
NAME=eth0
DEVICE=eth0
BOOTPROTO=dhcp
ONBOOT=yes
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6_FAILURE_FATAL=no
DHCPV6C=yes
[root@ipv6-12 ~]#
```

4.配置 down hook，清理 dhcp6 的 lease，避免切换网络时，DUID 还包含老的 MAC 信息。

```
[root@ipv6-12 ~]# vi /etc/NetworkManager/dispatcher.d/dhclient-down-hooks.sh
#!/bin/sh
RUN="yes"
if [ "${RUN}" != "yes" ]; then
exit 0
fi

if [ "${NM_DISPATCHER_ACTION}" != "down" ]; then
        exit 0
fi

interface=${DEVICE_IFACE}

f_leases="/var/lib/NetworkManager/dhclient*-${interface}.lease"

rm -f ${f_leases};
[root@ipv6-12 ~]# chmod u+x /etc/NetworkManager/dispatcher.d/dhclient-down-hooks.sh
[root@ipv6-12 ~]#
```

5.关闭 DAD，在`/etc/sysctl.conf`里配置。

```
[root@ipv6-12 ~]# vi /etc/sysctl.conf
net.ipv6.conf.eth0.accept_dad = 0
net.ipv6.conf.eth0.accept_ra = 1
net.ipv6.conf.eth0.accept_ra_defrtr = 1
net.ipv6.conf.eth0.accept_ra_rtr_pref = 1
net.ipv6.conf.eth0.accept_ra_rt_info_max_plen = 1
[root@ipv6-12 ~]#
```

### Ubuntu 18.04

以下操作基于镜像 ID: `bionic1x64a`。

1.安装 `ifupdown`，使用 `networking` 来管理网络。

```
[root@ipv6-02 ~]# apt-get update
[root@ipv6-02 ~]# apt-get install ifupdown -y
[root@ipv6-02 ~]#
```

2.禁用 `netplan` / `systemd-networkd` / `networkd-dispatcher`。

```
[root@ipv6-02:~]# echo > /etc/netplan/50-cloud-init.yaml
[root@ipv6-02:~]# systemctl disable systemd-networkd
[root@ipv6-02:~]# systemctl disable networkd-dispatcher
```

3.修改 `interfaces` 配置文件， `allow-hotplug`。

```
[root@ipv6-02:~]# mkdir -p /etc/network/interfaces.d/
[root@ipv6-02:~]# vi /etc/network/interfaces
source /etc/network/interfaces.d/*.cfg

auto lo
iface lo inet loopback

[root@ipv6-02:~]# vi /etc/network/interfaces.d/50-cloud-init.cfg
allow-hotplug eth0
iface eth0 inet dhcp

[root@ipv6-02:~]# vi /etc/network/interfaces.d/60-default-with-ipv6.cfg
iface eth0 inet6 dhcp
   autoconf 0
[root@ipv6-02 ~]#
```

4.配置 `down hook`
dhclient 会把 v4/v6的配置互做 backup 来确保使用相同的 duid ，所以两个 leases 都需要删除。

```
[root@ipv6-02:~]# vi /etc/network/if-post-down.d/lease_clean
#!/bin/sh

f6_leases="/var/lib/dhcp/dhclient6.${IFACE}.leases"
f4_leases="/var/lib/dhcp/dhclient.${IFACE}.leases"

if [ -e ${f6_leases} ]; then
		rm -f ${f6_leases};
fi

if [ -e ${f4_leases} ]; then
		rm -f ${f4_leases};
fi
[root@ipv6-02:~]# chmod u+x /etc/network/if-post-down.d/lease_clean
[root@ipv6-02:~]#
```

5.关闭DAD，在`/etc/sysctl.conf`里加一行：

```
[root@ipv6-02 ~]# vi /etc/sysctl.conf
net.ipv6.conf.eth0.accept_dad = 0
[root@ipv6-02 ~]#
```

### Ubuntu 16.04

以下操作基于镜像ID: `xenial5x64a`。

1.修改`interfaces` 配置文件，`allow-hotplug`：

```
[root@ipv6-02:~]# mkdir -p /etc/network/interfaces.d/
[root@ipv6-02:~]# vi /etc/network/interfaces
source /etc/network/interfaces.d/*.cfg

auto lo
iface lo inet loopback

[root@ipv6-02:~]# vi /etc/network/interfaces.d/50-cloud-init.cfg
allow-hotplug eth0
iface eth0 inet dhcp

[root@ipv6-02:~]# vi /etc/network/interfaces.d/60-default-with-ipv6.cfg
iface eth0 inet6 dhcp
	autoconf 0
[root@ipv6-02:~]#
```

2.配置down hook。
dhclient 会把 v4/v6的配置互做 backup 来确保使用相同的 duid，所以两个 leases 都需要删除。

```
[root@ipv6-02:~]# vi /etc/network/if-post-down.d/lease_clean
#!/bin/sh

f6_leases="/var/lib/dhcp/dhclient6.${IFACE}.leases"
f4_leases="/var/lib/dhcp/dhclient.${IFACE}.leases"

if [ -e ${f6_leases} ]; then
	rm -f ${f6_leases};
fi

if [ -e ${f4_leases} ]; then
	rm -f ${f4_leases};
fi
[root@ipv6-02:~]# chmod u+x /etc/network/if-post-down.d/lease_clean
```

3. 关闭DAD。

```
[root@ipv6-02 ~]# vi /etc/sysctl.conf
net.ipv6.conf.eth0.accept_dad = 0
[root@ipv6-02 ~]#
```

### Windows Server 2008/2012/2016

Windows Server 默认开启 IPv6 协议与 DHCPv6，但 DHCPv6 的相关配置也需要与上述[操作要点](#操作要点)所述保持一致。

1.禁用 IPv6 随机标识

云服务器网卡默认都会有一个链路本地（Link Local）IPv6 地址，Windows Server 默认的 Link Local IPv6地址生成方式是随机生成的，这与基于 MAC-48 的 [EUI-64](https://tools.ietf.org/html/rfc4291#appendix-A) 方式不同。

所以需要禁用 Link Local IPv6 地址随机生成。通过 cmd.exe 启动命令提示符窗口，命令与结果如下：

```
C:\Users\Administrator>netsh
netsh>interface ipv6
netsh interface ipv6>set global randomizeidentifiers=disabled
确定。

```


2.双栈接口 dadtransmits 修改成 0

Windows Server 在命令行窗口下通过 netsh.exe 的 `show interfaces` 命令查看接口列表，和双栈接口的 ID。然后，通过`set interface 双栈接口的 ID`来修改接口的配置，详细命令的使用说明可以在 netsh.exe 通过 `set interface` 查看，详见[Windows 官方文档](https://docs.microsoft.com/en-us/windows-server/networking/technologies/netsh/netsh)。

```
C:\Users\Administrator>netsh
netsh>interface ipv6
netsh interface ipv6>show interfaces

Idx     Met         MTU          状态                名称
---  ----------  ----------  ------------  ---------------------------
  1          75  4294967295  connected     Loopback Pseudo-Interface 1
  9          75        1280  disconnected  isatap.{2B8B139B-418D-4593-A2DC-4F43D31A1833}
  6          75        1280  connected     Teredo Tunneling Pseudo-Interface
  5           5        1500  disconnected  以太网 2

netsh interface ipv6>set interface 5 dadtransmits=0
确定。

```

![](/network/eip/_images/IPv6_dualstack_ip_windows_0.png)

3.修改注册表 TCPip6/parameters 下的 dhcpv6-duid

部分 Windows Server 中的 dhcpv6-duid 为固定值，会导致 Windows Server DHCP冲突。所以需要修改 dhcpv6-duid 为独特值，最方便的方式就是把最后 48 位修改为云服务器的 MAC 地址。

在开始菜单或者命令行界面，通过 `regedit` 命令打开`注册表编辑器`,打开注册表目录 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\TCPIP6\Parameters

![](/network/eip/_images/IPv6_dualstack_ip_windows_1.png)

右键点击 DHcpv6DUID ，修改 DHcpv6DUID 最后的 12 个字符修改为接口的 MAC 地址

![](/network/eip/_images/IPv6_dualstack_ip_windows_2.png)

4.重启网络适配器获取 IPv6 地址

选择接口，点击禁用此网络设备，禁用成功后再点击启用此网络设备。

![](/network/eip/_images/IPv6_dualstack_ip_windows_3.png)

云服务器获取 IPv6 地址后，即可与 VPC 内其他云服务器通过 IPv6 地址进行内网通信。
