---
title: "云服务器"
description: test
draft: false
---

# 云服务器操作指南

## 创建云服务器

登录青云[终端控制台](https://console.qingcloud.com/)

### 步骤一，选择镜像

![](../../_images/create_instance__1.png)

### 步骤二，选择合适的配置

![](../../_images/create_instance__2.png)

### 步骤三，网络配置

![](../../_images/create_instance__3.png)

### 步骤四，其它配置

![](../../_images/create_instance__4.png)

### 创建成功，开始运行

![](../../_images/create_instance__5.png)

## 克隆云服务器

### 克隆云服务器功能简介

克隆云服务器功能可以让云服务器在运行的状态下，创建出一份具有相同配置、内网网段、系统盘数据、挂载数据盘数据的云服务器，有助于业务不中断服务时方便地进行环境复制。该功能还支持批量操作，您可以一次性的批量克隆出多台云服务器，解决集群架构下的快速环境复制问题。

### 操作指南

1、登录青云[终端控制台](https://console.qingcloud.com/)，切换至“计算”--“云服务器”。在要克隆的云服务器上点击鼠标右键，在弹出的菜单中选择“克隆云服务器”。

![](../../_images/clone-01.png)

或者勾选要克隆的云服务器，点击“更多操作”，在下拉菜单中点击“克隆云服务器”。

![](../../_images/clone-02.png)

2、在弹出的提示框中，您可选择克隆云服务器的目标网络，之后点击“确定”，触发克隆云服务器任务。

![](../../_images/clone-03.png)

默认目标网络是原云服务器的网络，点击“编辑”可以选择新云服务器要加入的网络。

![](../../_images/clone-04.png)

>注解
克隆原云服务器需要原云服务器使用的镜像是可用状态。如果原云服务器启动的镜像被删除了的话，克隆会失败。

### 批量克隆云服务器

克隆云服务器支持批量操作，您可以一次性的批量克隆出多台云服务器，解决集群架构下的快速环境复制问题。下面以一个场景来讲解批量克隆云服务器的方法。

假设现有系统的架构如下：

![](/compute/vm/manual/_images/batch_clone_instances_01-ori-arch.png)

现要将 web01 - 03 这三台云服务器批量克隆到“测试子网”中。在云服务器列表中复选要克隆的云服务器，点击“更多操作”，在下拉菜单中点击“克隆云服务器”。

![](/compute/vm/manual/_images/batch_clone_instances_02-choose-instances.png)

在“批量设置”处，选择“指定其他网络”，点击“[选择要加入的私有网络]"，在弹窗中选择“测试子网”。

![](/compute/vm/manual/_images/batch_clone_instances_03-choose-net.png)

如需为克隆后的云服务器指定 IP，点击“[指定云服务器内网 IP]”为要指定 IP 的云服务器指定克隆后的 IP 地址。

![](/compute/vm/manual/_images/batch_clone_instances_04-set-IP.png)

点击“提交”即可发起批量克隆云服务器任务。

![](/compute/vm/manual/_images/batch_clone_instances_05-target-arch.png)

通过比较，克隆后的云服务器与源云服务器具有相同的名称、配置、挂载盘、数据、SSH 密钥、防火墙等。

![](/compute/vm/manual/_images/batch_clone_instances_06-check.png)