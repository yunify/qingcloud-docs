---
title: "云服务器快速创建流程"
description: test
draft: false
weight: 10
---

青云支持快速创建并购买云服务器，详情请参考[云服务器创建指南](../../manual/vm_instance/)。

## 前提条件

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **计算** > **云服务器**，进入**云服务器**页签。
2. 在**云服务器**页签中，点击**创建**进入购买界面。

<img src="../../quickstart/_images/vm_1.png" style="zoom: 33%;" />

## 购买信息

### 选择计费方式

<img src="../../quickstart/_images/billing.png" alt="billing" style="zoom:40%;" />

### 选择区域及可用区

<img src="../../quickstart/_images/area.png" alt="area" style="zoom: 30%;" />

## 基础配置信息

### 选择镜像

<img src="../../quickstart/_images/mirror.png" style="zoom:33%;" />

### 选择配置规格信息

<img src="../../quickstart/_images/type.png" alt="type" style="zoom: 25%;" />  

### 选择硬盘类型

<img src="../../quickstart/_images/storage.png" alt="storage" style="zoom: 33%;" />

青云 QingCloud 平台为云服务器提供硬盘作为块存储设备，支持多种规格和类型，并可弹性扩展，可满足不同场景的业务需求，并且支持对云服务器和硬盘进行备份。

硬盘可以用作系统盘和数据盘，更多信息，请参见[硬盘简介](/storage/disk/intro/introduction/)。

## 网络和安全组配置

### 选择网络

用户可以选择基础网络和VPC网络两种类型的网络。

<img src="../../quickstart/_images/net.png" alt="net" style="zoom:50%;" />

### 选择安全组

<img src="../../quickstart/_images/safety.png" alt="safety" style="zoom:33%;" />

如果用户需要创建一个新的安全组，点击**新建安全组**，进入安全组页面。详情请参考[创建安全组文档](/security/security_group/manual/sg_create/)。

<img src="../../quickstart/_images/safety_1.png" alt="safety" style="zoom:30%;" />

如果需要配置云服务器端口，请参考 [配置安全组文档](/security/security_group/manual/sg_setting/)。

### 选择弹性公网 IP

a. 绑定已有公网 IP

<img src="../../quickstart/_images/eip.png" alt="eip" style="zoom:33%;" />

<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">
   <b>说明</b>：当用户为云服务器分配已有弹性公网IP时，不能批量创建云服务器。

</span>

b. 新建公网 IP

当用户需要新建公网IP时，有两种计费方式可以选择，如下表所示。

<img src="../../quickstart/_images/byte.png" alt="byte" style="zoom:33%;" />主机信息

系统配置包括主机名称、登录凭证、自动续费等，用于定制云服务器在控制台和操作系统内显示的信息或使用方式。

<img src="../../quickstart/_images/host.png" alt="host" style="zoom: 33%;" />

### 配置主机名称

创建多台云服务器时，设置有序的云服务器名称和主机名称便于从名称了解云服务器的信息。

### 配置登录方式

设置密码或SSH密钥两种方式登录，详情如下表所示。

| <span style="display:inline-block;width:100px">登录方式</span> | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| SSH密钥                                                      | 新建一个密钥对，并下载私钥，私钥用于远程登录身份认证，为保证云服务器安全， QingCloud 不会保存用户的私钥。如何使用私钥登录云服务器请参考[密钥文档](/compute/ssh/manual/ssh/)。 |
| 密码                                                         | 自主设定root密码。                                           |

<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">
   <b>说明</b>：Linux 操作系统建议选择更为安全的 SSH 密钥登录，Windows 操作系统只能选择密码登录。

</span>

### 可选：配置自动续费

当账号余额充足时，云服务器到期后自动续费。可选范围为1-36个月。

### 可选：配置高级设置

可以选择配置HostName、自定义数据、网卡多队列、备份、标签、项目、安置策略组。

<img src="../../quickstart/_images/senior_host.png" alt="senior_host" style="zoom: 33%;" />

## 确认配置（可选）

当计费模式选择包年包月时，点击**立即购买**后会二次确认配置，如下图所示。

<img src="../../quickstart/_images/config.png" alt="config" style="zoom:33%;" />

## 完成创建

<img src="../../quickstart/_images/create.png" alt="create" style="zoom:25%;" />
