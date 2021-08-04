---
title: "多网卡默认路由配置"
description: test
draft: false
---

## 操作场景

当主机添加多张网卡时，默认路由将具有不确定性。尤其在主机重启后，默认路由可能会指向一个非预期的网卡。

此时，可以通过配置网卡的 Metric 值来指定路由优先级。Metric 默认值为 0，值越小优先级越高。

> **说明**：
>
> **Metric** 是为路由指定所需跃点数的整数值，它用来在路由表里的多个路由中选择与转发包中的目标地址最为匹配的路由。所选的路由具有最少的跃点数。

<!--如果两张网卡的 Metric 值相同，就会出现抢占优先级继而网卡冲突，导致其中一张网卡无法连接。-->

## 配置办法

以下以 Ubuntu 系统和 CentOS 系统为例，介绍如何配置网卡。

### Ubuntu 系统

1. 登录云服务器，打开网卡配置文件`/etc/network/interfaces` 。

   ```
   vim /etc/network/interfaces
   ```

2. 按下键盘`i`键进入编辑模式，配置网卡 Metric 值。

   示例如下：

   ```
   allow-hotplug eth0
   iface eth0 inet dhcp
    
   allow-hotplug eth1
   iface eth1 inet dhcp
     metric 1
   ```

3. 配置完成后，切换命令模式执行`:wq`保存并退出。

4. 执行 `reboot` 命令重启服务器。

5. 执行 `ip route` 命令查看路由信息。

   可以看到配置完成后，生成如下路由。

   ```
   default via 192.168.x.x dev eth0
   default via 10.170.x.x dev eth1 metric 1
   ```

   此时，eth0 的 Metric 值默认为 0，eth1 的 Metric 值为 1， 所以优先使用第一条默认路由。

### CentOS 系统

> **说明**：
>
> 对于 CentOS 系统，可先登录服务器执行`ifconfig -a`命令查看全部网卡是否处于“running”状态。若新增的网卡没有自动启动，才需要进行以下配置。

1. 登录云服务器，打开网卡配置文件`/etc/sysconfig/network-scripts/ifcfg-eth1` 。

   ```
   vim /etc/sysconfig/network-scripts/ifcfg-eth1
   ```

   此处 `eth1`表示新添加的网卡，请根据实际情况修改。

2. 按下键盘`i`键进入编辑模式，加入以下配置信息。

   ```
   DEVICE=eth1   # 表示新配置的网卡接口。
   BOOTPROTO=dhcp
   ONBOOT=yes
   TYPE=Ethernet
   USERCTL=yes
   PEERDNS=no
   IPV6INIT=no
   PERSISTENT_DHCLIENT=yes
   HWADDR=00:16:3e:12:e7:**    # 此处需将“00:16:3e:12:e7:**”替换为您新添加的网卡对应的MAC地址
   DEFROUTE=no    # 设置为“no”，表示当前网卡接口不是默认路由。为避免在启动（ifup）弹性网卡时改变主机实例活动的默认路由，不要将 eth1 设置为默认路由。
   IPV4_ROUTE_METRIC=XXX   #配置网卡 metric 值，将“XXX”替换为 metric 值。
   ```

3. 配置完成后，切换命令模式执行`:wq`保存并退出。

4. 查看网卡配置文件并确认修改。

   ```
   cat /etc/sysconfig/network-scripts/ifcfg-eth1
   ```

5. 执行以下命令重启网络服务。

   ```
   service network restart
   ```

