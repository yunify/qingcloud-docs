---
title: "ssh连接基本问题排查"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

## 背景信息

ssh远程登入连接不上，提示连接拒绝相关提示，初步定位是由于 sshd 端口不通导致，以下是故障定位流程，请参考。

## 操作步骤

###  排查SSH服务状态

1. 登录云服务器，执行  `systemctl status sshd` 命令查看ssh服务是否正常启动。

    ![ssh_](../../../_images/ssh1.png)

2. 如果服务正常启动，则直接执行 `netstat -anp|grep sshd` 命令查看 ssh 监听的端口。

    ![ssh_](../../../_images/ssh2.png)

3. 如果服务没有正常启动，先执行 `systemctl start sshd` 命令启动 ssh 服务，再查看 ssh 监听的端口。

###  检查iptables配置是否异常

1. 使用 WEB vnc 登入到云服务器中，执行 `iptables -nvL` 命令，查看防火墙规则。

   ![ssh_](../../../_images/ssh3.png)

2. 若之前已设置过规则策略，执行 `cp -a /etc/sysconfig/iptables /etc/sysconfig/iptables.bak` 命令，将原有的 iptables 文件保存一份，避免之前设置策略丢失。

3. 再执行 `iptables  -F`  命令，清空服务器上所有的规则。 

###  检查云平台防火墙规则是否异常

1. 检查云服务器绑定防火墙中下行规则ICMP协议是否启动添加，ssh服务端口是否添加放行。

2. 若通过 VPC 端口转发的 SSH 服务，则需要检查端口转发中设置源端口，是否在 VPC 绑定的安全组下行规则中有添加放行，另外是否配置了源 IP，如果配置了，可以取消源 IP 限制测试。

3. 检查绑定公网 IP 方式，如绑定为内网绑定模式，则需要删除该 IP，重新申请外部绑定模式公网 IP。无特殊需求建议使用外部绑定模式，内部绑定模式需云服务器内自行设置网卡配置。

### 检查本地终端是否异常

1. 先排查本地终端是否设置了防火墙规则，比如限制了公网访问；
2. 再测试本地网络是否正常，如测试本地网络不正常，则需向运营商报备排查。

**以上排除仍无法解决问题，可以提交工单联系我们。**