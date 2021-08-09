---
title: "Linux云服务器配置多网卡"
description: test
draft: false
weight: 10
---

### 多网卡说明

对于物理服务器来说，网卡就是服务器的网络设备，用于接入以太网络，和其它计算机进行通信。QingCloud 网卡是基于虚拟化技术模拟的网卡设备，此设备是基于虚拟机所在的物理设备。QingCloud 云平台可以将集群内的虚拟网络统一起来，进行再分配。用户毋需关心具体的网卡在什么位置，有需要申请、挂接即可。

### 网卡使用限制

每个云服务器最多可以绑定 64 张网卡（其中主网卡 1 张，从网卡 63 张），而每个网络最多可以有 252 张网卡。

### 配置方法:

**1、申请网卡**

<span style="color:red">注意事项</span>：申请网卡前需有vpc和私有网络，通过控制台---计算---网卡---申请网卡

![](../../_images/ipwhiz/ipwhiz1.png)

**2、网卡绑定到云服务器**

右键网卡，分配到云服务器，选择云服务器。

![](../../_images/ipwhiz/ipwhiz2.png)

**3、登录云服务器查看网卡**

登录到云服务器，查看网卡信息，并检查无法ping通其他网卡。

![](../../_images/ipwhiz/ipwhiz3.png)

![](../../_images/ipwhiz/ipwhiz4.png)

**4、配置策略路由**

增加路由表：

```
[root@i-6i895da2 ~]# echo "200 table0" >> /etc/iproute2/rt_tables
[root@i-6i895da2 ~]# echo "201 table1" >> /etc/iproute2/rt_tables
[root@i-6i895da2 ~]# echo "202 table2" >> /etc/iproute2/rt_tables
```

查看路由表：

```
[root@i-6i895da2 ~]# cat /etc/iproute2/rt_tables
```

![](../../_images/ipwhiz/ipwhiz5.png)

<span style="color:red">注：此处数值越小，优先级越高。</span>

增加网卡路由策略：

清空路由表200的路由规则。

```[root@i-6i895da2 ~]# ip route flush table 200```

 

添加默认路由到路由表200，这条规则是table0这个路由表中数据包默认使用IP 192.168.0.2 通过 eth0 走网关 192.168.0.1。

```[root@i-6i895da2 ~]# ip route add default via 192.168.0.1 dev eth0 src 192.168.0.2 table 200```

 

添加路由规则，凡是到192.168.0.2这个地址的ip就走路由表200。

```[root@i-6i895da2 ~]# ip rule add from 192.168.0.2 lookup 200```

 

清空路由表201的路由规则。

```[root@i-6i895da2 ~]# ip route flush table 201```

 

添加默认路由到路由表201，这条规则是table1这个路由表中数据包默认使用IP 192.168.0.10 通过 eth1 走网关 192.168.0.1。

```[root@i-6i895da2 ~]# ip route add default via 192.168.0.1 dev eth1 src 192.168.0.10 table 201```

 

添加路由规则，凡是到192.168.0.2这个地址的ip就走路由表201。

```[root@i-6i895da2 ~]# ip rule add from 192.168.0.10 lookup 201```

 

清空路由表202的路由规则。

```[root@i-6i895da2 ~]# ip route flush table 202```

 

添加默认路由到路由表202，这条规则是table2这个路由表中数据包默认使用IP 192.168.0.100 通过 eth2 走网关 192.168.0.1。

```[root@i-6i895da2 ~]#ip route add default via 192.168.0.1 dev eth2 src 192.168.0.100 table 202```

 

添加路由规则，凡是到192.168.0.2这个地址的ip就走路由表202。

```[root@i-6i895da2 ~]# ip rule add from 192.168.0.100 lookup 202```

**5、测试网卡是否通**

![](../../_images/ipwhiz/ipwhiz6.png)

**6、配置路由策略永久生效**

这些路由规则只是临时添加了，重启网络会失效。

在/ect/rc.local文件中添加上述配置即可。

```
[root@i-6i895da2 ~]# echo "ip route add default via 192.168.0.1 dev eth0 src 192.168.0.2 table 200" >> /etc/rc.local
[root@i-6i895da2 ~]# echo "ip rule add from 192.168.0.2 lookup 200" >> /etc/rc.local
[root@i-6i895da2 ~]# echo "ip route flush table 201" >> /etc/rc.local
[root@i-6i895da2 ~]# echo "ip route add default via 192.168.0.1 dev eth1 src 192.168.0.10 table 201" >> /etc/rc.local
[root@i-6i895da2 ~]# echo "ip rule add from 192.168.0.10 lookup 201" >> /etc/rc.local
[root@i-6i895da2 ~]# echo "ip route flush table 202" >> /etc/rc.local
[root@i-6i895da2 ~]# echo "ip route add default via 192.168.0.1 dev eth2 src 192.168.0.100 table 202" >> /etc/rc.local
[root@i-6i895da2 ~]# echo "ip rule add from 192.168.0.100 lookup 202" >> /etc/rc.local```
```