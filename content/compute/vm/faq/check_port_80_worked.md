---
title: "80端口无法访问的排查思路"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## 概述

本文主要介绍在不同操作系统中检查TCP 80端口是否正常工作的方法。

>以下文档是基于用户已经在青云完成备案操作，关于未完成备案导致80端口无法访问，可以查看文档[为什么80端口被禁用？](https://docsv3.qingcloud.com/compute/vm/faq/port_80_disabled/)

## 排查思路
如果云服务器无法对外提供HTTP服务，可以按以下思路检查Web服务的端口（默认为80端口）是否正常工作。

1. 在控制台—产品与服务—安全服务—安全组，确认云服务器绑定的安全组已经放行该端口。（如云服务器是通过vpc网络进行访问，则修改vpc绑定的安全组，并添加端口转发规则）
2. 远程连接进入云服务器，确认Web服务已经开启。
3. 确认端口正常被监听。如没有，请修改监听地址。
4. 确认云服务器内部防火墙已经放行服务或端口。
5. 若仍无法解决，可提交工单协助解决。


## 排查步骤示例
以下介绍Windows和Linux排查端口是否正常工作的方法，示例环境分别为：
* Windows Server 2008
* CentOS7.2

### Windows Server 2008
>示例以iis服务为例

#### 1.确认已在云服务器绑定的安全组添加80端口下行规则，并应用修改。

![](../../_images/check_port_worked1.png)

> **<span style="color:red">如云服务器是通过vpc网络进行访问，则修改vpc绑定的安全组，并添加端口转发规则</span>**
> ![](../../_images/check_port_worked11.png)

#### 2.查看IIS服务是否已启动。

查看管理服务器是否启动，如未启动，请启动
![](../../_images/check_port_worked2.png)

查看网站服务是否启动，如未启动，请启动
![](../../_images/check_port_worked3.png)

#### 3.查看端口是否已监听

打开cmd命令提示符，执行以下命令

```
netstat -ano | findstr :80
```
如果返回TCP 0.0.0.0:80 0.0.0.0:0 LISTENING 4，则说明80端口正常监听。

#### 4.查看云服务器内部防火墙端口是否已放行

进入云服务器内的控制面板—所有控制面板项—Windows 防火墙，如果防火墙是开启状态，则需要在防火墙—高级设置—入站规则—新建规则，添加80端口的规则。
![](../../_images/check_port_worked4.png)
![](../../_images/check_port_worked5.png)
![](../../_images/check_port_worked6.png)
![](../../_images/check_port_worked7.png)

#### 5.如上述操作都已检查仍无法连接，可以[提交工单](https://console.qingcloud.com/tickets/)咨询。

### CentOS7.2
>示例以nginx服务为例

#### 1.确认已在安全组添加80端口下行规则，并应用修改。

![](../../_images/check_port_worked1.png)

> **<span style="color:red">如云服务器是通过vpc网络进行访问，则修改vpc绑定的安全组，并添加端口转发规则</span>**
> ![](../../_images/check_port_worked11.png)

#### 2.查看nginx服务是否已启动。

在云服务器上执行命令：

```
systemctl status nginx
```
查看显示为 Active: active (running) 表示服务正常。
![](../../_images/check_port_worked9.png)

#### 3.查看端口是否已监听

打开cmd命令提示符，执行以下命令

```
netstat -tlnp|grep 80
```
如果返回tcp 0 0 0.0.0.0:80 0.0.0.0:* LISTEN，则说明80端口正常监听。

#### 4.查看云服务器内部防火墙端口是否已放行

首先查看云服务器上firewalld服务是否运行：

```
systemctl status firewalld
```
查看显示为 Active: active (running) 表示云服务器防火墙为开启状态
![](../../_images/check_port_worked10.png)
如果是开启状态，则执行命令开放80端口并生效：
```
firewall-cmd --zone=public --add-port=80/tcp --permanent  #添加80端口规则

firewall-cmd --reload  #重载生效
```
#### 5.如上述操作都已检查仍无法连接，可以[提交工单](https://console.qingcloud.com/tickets/)咨询。