---
title: "SSH端口不通的排查思路"
date: 2021-02-17T10:15:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false

---

### 故障现象

ssh远程登入连接不上，提示连接拒绝相关提示，初步定位是由于sshd端口不通导致，以下是故障定位流程，请参考。

###  1.排查SSH服务状态

登录主机查看ssh服务是否正常，服务端口是否监听,可以执行以下命令。

```shell
 systemctl status sshd  
```
   ![ssh_](../_images/ssh1.png)

如查看服务没有正常启动，则启动ssh服务，参考以下命令。

```
systemctl start sshd 
```

 启动sshd服务以后，再次检查服务是否正常监听，参考以下命令

 ```shell
 netstat -anp|grep sshd 
 ```
 ![ssh_](../_images/ssh2.png)
###  2.检查主机内部iptables规则是否禁用sshd端口。

#### 1.使用WEB vnc登入到主机中，执行下面命令，查看防火墙规则。

```shell
iptables -nvL  
```
![ssh_](../_images/ssh3.png)

#### 2.若之前已设置过规则策略，执行如下命令，将原有的iptables文件保存一份，避免之前设置策略丢失。

```shell
cp -a /etc/sysconfig/iptables /etc/sysconfig/iptables.bak
```
#### 3.再执行如下命令，清空服务器上所有的规则。

```shell
iptables  -F     
```

##  3.检查云平台安全组是否放行sshd端口 

- 检查主机绑定安全组是否放行sshd端口规则


- 若通过VPC端口转发的SSH服务，则需要检查端口转发中设置源端口，是否在VPC绑定的安全组下行规则中有添加放行，另外是否配置了源ip，如果配置了，可以取消源ip限制测试。


-  检查绑定公网ip方式，如绑定为内网绑定模式，则需要删除该ip，重新申请外部绑定模式公网ip。无特殊需求建议使用外部绑定模式，内部绑定模式需主机内自行设置网卡配置。





### 4.检查本地终端是否异常

以排查完平台各项配置，但还是无法远程连接，可以先排查本地终端是否设置了防火墙规则，比如限制了公网访问；可以测试本地网络是否正常，如测试本地网络不正常，则需向运营商报备排查。

以上排除仍无法解决问题，可以提交工单联系我们。