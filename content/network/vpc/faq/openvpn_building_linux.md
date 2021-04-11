---
title: "在Linux客户端中配置OpenVPN"
description: test
draft: false
weight: 20
---

## 需求背景

客户希望自己在办公或者家庭网络能拨入到青云vpc的私有网络，以实现内网访问云上部署的业务，因为vpn隧道是加密通讯的，安全性比较可靠，另外使用起来比较方便。以下介绍的是如何在Linux云服务器部署OpenVPN客户端，以Cent OS镜像为例。

## 操作步骤

### 1. 安装OpenVPN

Cent OS 7.9 安装OpenVPN

```shell
yum install epel-release
yum -y install OpenVPN
```

其他发行版本，如 Ubuntu 16.04 安装OpenVPN

```shell
apt-get install OpenVPN
```

### 2. 配置OpenVPN服务端

默认采用的是udp协议1194端口，推荐使用tcp协议1194端口，会比较稳定，采用默认证书的验证方式即可。

![](../openvpn_building_linux/openvpn_building_linux_1.png)

配置提交以后需要更新vpc才能生效，点击应用修改。

![](../openvpn_building_linux/openvpn_building_linux_2.png)

以上配置完成以后，需要配置安全组的策略，在vpc详情界面找到安全组，添加下行TCP 1194端口协议，并更新安全组。

![](../openvpn_building_linux/openvpn_building_linux_3.png)

![](../openvpn_building_linux/openvpn_building_linux_4.png)

### 3. 配置OpenVPN客户端

下载OpenVPN客户端证书配置文件，可以存放在/etc/openvpn 目录下。

![](../openvpn_building_linux/openvpn_building_linux_5.png)

解压文件到当前目录。

```shell
yum -y install unzip
unzip rtr-bs82amzk-certs.zip
```

然后需要将 conf 文件中的 user 和 group 字段设置为本地用户和组。本文设置为 root/root，其余参数均保持不变。

```shell
cat rtr-bs82amzk.conf 

# openvpn client linux configuration sample
client
dev tun
proto tcp
remote <x.x.x.x> 1194 #<x.x.x.x>为vpc绑定的公网ip
resolv-retry infinite
nobind
user root
group root
persist-key
persist-tun
ca yunify-ca.crt
cert rtr-bs82amzk.crt
key rtr-bs82amzk.key
tls-auth rtr-bs82amzk.takey 1
#auth-user-pass
cipher AES-256-CBC
comp-lzo
mssfix 1400
```

然后通过配置文件启动OpenVPN，下面为正常启动的日志.

```shell
openvpn rtr-bs82amzk.conf
```

![](../openvpn_building_linux/openvpn_building_linux_6.png)
### 4. 验证网络是否正常

通过ip命令可以看到网卡已正常获取到，也能正常ping通vpc下的主机。

![](../openvpn_building_linux/openvpn_building_linux_7.png)