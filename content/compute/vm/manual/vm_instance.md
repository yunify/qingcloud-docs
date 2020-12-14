---
title: "虚拟主机"
description: test
draft: false
---

# 虚拟主机操作指南

## 创建主机

登录青云[终端控制台](https://console.qingcloud.com/)

### 步骤一，选择映像

![](/compute/vm/manual/_images/create_instance_1.png)

### 步骤二，选择合适的配置

![](/compute/vm/manual/_images/create_instance_2.png)

### 步骤三，网络配置

![](/compute/vm/manual/_images/create_instance_3.png)

### 步骤四，其它配置

![](/compute/vm/manual/_images/create_instance_4.png)

### 创建成功，开始运行

![](/compute/vm/manual/_images/create_instance_5.png)

## 克隆主机

### 克隆主机功能简介

克隆主机功能可以让主机在运行的状态下，创建出一份具有相同配置、内网网段、系统盘数据、挂载数据盘数据的主机，有助于业务不中断服务时方便地进行环境复制。该功能还支持批量操作，您可以一次性的批量克隆出多台主机，解决集群架构下的快速环境复制问题。

### 操作指南

1、登录青云[终端控制台](https://console.qingcloud.com/)，切换至“计算”--“主机”。在要克隆的主机上点击鼠标右键，在弹出的菜单中选择“克隆主机”。

![](/compute/vm/manual/_images/clone-01.png)

或者勾选要克隆的主机，点击“更多操作”，在下拉菜单中点击“克隆主机”。

![](/compute/vm/manual/_images/clone-02.png)

2、在弹出的提示框中，您可选择克隆主机的目标网络，之后点击“确定”，触发克隆主机任务。

![](/compute/vm/manual/_images/clone-03.png)

默认目标网络是原主机的网络，点击“编辑”可以选择新主机要加入的网络。

![](/compute/vm/manual/_images/clone-04.png)

>注解
克隆原主机需要原主机使用的镜像是可用状态。如果原主机启动的镜像被删除了的话，克隆会失败。

### 批量克隆主机

克隆主机支持批量操作，您可以一次性的批量克隆出多台主机，解决集群架构下的快速环境复制问题。下面以一个场景来讲解批量克隆主机的方法。

假设现有系统的架构如下：

![](/compute/vm/manual/_images/batch_clone_instances_01-ori-arch.png)

现要将 web01 - 03 这三台主机批量克隆到“测试子网”中。在主机列表中复选要克隆的主机，点击“更多操作”，在下拉菜单中点击“克隆主机”。

![](/compute/vm/manual/_images/batch_clone_instances_02-choose-instances.png)

在“批量设置”处，选择“指定其他网络”，点击“[选择要加入的私有网络]"，在弹窗中选择“测试子网”。

![](/compute/vm/manual/_images/batch_clone_instances_03-choose-net.png)

如需为克隆后的主机指定 IP，点击“[指定主机内网 IP]”为要指定 IP 的主机指定克隆后的 IP 地址。

![](/compute/vm/manual/_images/batch_clone_instances_04-set-IP.png)

点击“提交”即可发起批量克隆主机任务。

![](/compute/vm/manual/_images/batch_clone_instances_05-target-arch.png)

通过比较，克隆后的主机与源主机具有相同的名称、配置、挂载盘、数据、SSH 密钥、防火墙等。

![](/compute/vm/manual/_images/batch_clone_instances_06-check.png)