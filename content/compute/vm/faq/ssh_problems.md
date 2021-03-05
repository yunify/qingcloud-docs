---
title: "SSH连接基本问题排查"
date: 2021-02-17T10:15:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false

---


##  1、排查SSH服务状态

**故障现象**：ssh远程登入连接不上，提示连接拒绝相关提示。

**解决方法**：登录主机查看ssh服务是否正常，服务端口是否监听，如查看服务没有正常启动，则启动ssh服务，然后再查看端口监听状态。

```shell
 systemctl status sshd    (检查ssh 服务状态，如未启动状态，则执行下面命令
 
 systemctl start sshd     (启动shh服务
```
 ![ssh_](../_images/ssh1.png)
 ```shell
 netstat -anp|grep sshd   ( 查看ssh监听的端口
 ```
 ![ssh_](../_images/ssh2.png)
##  2、检查iptables配置是否异常

**故障现象**：SSH无法连接，关闭iptables后连接恢复。

**解决方法**：

1）使用WEB vnc登入到主机中，执行下面命令，查看防火墙规则。

```shell
iptables -nvL  
```
![ssh_](../_images/ssh3.png)
2）若之前已设置过规则策略，执行如下命令，将原有的iptables文件保存一份，避免之前设置策略丢失。
```shell
cp -a /etc/sysconfig/iptables /etc/sysconfig/iptables.bak
```
3)再执行如下命令，清空服务器上所有的规则。
```shell
iptables  -F      (清理所以规则
```

##  3、检查平台防火墙规则是否异常 

**故障现象**：本地连接终端网络正常，但无法ping通主机绑定公网ip，telnet端口ssh 端口不通。

**解决方法**：

检查主机绑定防火墙中下行规则ICMP协议是否启动添加，ssh服务端口是否添加放行。

 

若通过VPC端口转发的SSH服务，则需要检查端口转发中设置源端口，是否在VPC绑定的防火墙下行规则中有添加放行。

 

检查绑定公网ip方式，如绑定为内网绑定模式，则需要删除该ip，重新申请外部绑定模式公网ip。无特殊需求建议使用外部绑定模式，内部绑定模式需主机内自行设置网卡配置。
![ssh_](../_images/ssh4.png)


## 4.检查本地终端是否异常

**故障现象**：以排查完平台各项配置，但还是无法远程连接。



**解决办法**：先排查本地终端是否设置了防火墙规则，限制了公网访问。然后测试网络是否正常，可ping 公网域名判断网络是否异常，如测试本地网络不正常，则需向运营商报备排查。
