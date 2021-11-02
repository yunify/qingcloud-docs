---
title: "部署 vCPE"
draft: false
collapsible: false
weight: 10
---

在创建云服务器后，您需要通过 SD-WAN 提供的脚本在宿主机中部署 vCPE 镜像。

本章节为您介绍如何在宿主机中部署 vCPE镜像。

## 前提条件

- 已获取控制台的账号和密码。
- 已创建 vCPE 接入点并获取接入点序列号。
- 请确保宿主机满足环境要求，更多信息请参见[环境要求](../10_vcpe_overview/#环境要求)。

## 脚本参数说明

vCPE 镜像的部署脚本提供如下可执行参数，如下图所示。

<img src="../../_images/um_vcpe_script.png" style="zoom:50%;" />

| 参数           | 参数说明                                                     |
| -------------- | ------------------------------------------------------------ |
| **-n**（必选） | SAG vCPE设备的序列号。                                       |
| **-k**（必选） | SAG vCPE设备的密钥。                                         |
| **-t**（必选） | 安装SAG vCPE镜像的宿主机所在的平台。取值如下所示：<br />**qingcloud**（默认值）：表示 vCPE 镜像部署在青云的云服务器中。<br />**aws**：表示 vCPE 镜像部署在AWS EC2中。<br />**azure**：表示 vCPE 镜像部署在Microsoft Azure平台的虚拟机中。<br />如果您的 vCPE 镜像部署在本地网络的服务器中，则本参数的取值可为**qingcloud**、**ens**、**aws**、**azure**之外的任意英文字符。 |
| -w             | WAN口的网卡名称。默认值为eth0。<br />您可以通过 `ifconfig` 或者 `ip -br address` 命令查看宿主机网卡的名称。 |
| -u             | 卸载 vCPE 镜像。                                             |
| -h             | 查看脚本的帮助信息。                                         |
| -p             | 升级 vCPE 镜像。                                             |
| -c             | 检测宿主机的运行状态。                                       |
| check          | 获取当前宿主机的部署状态、宿主机的系统信息、vCPE 镜像的版本等信息。 |
| ping           | 网络连通性测试命令。                                         |
| traceroute     | 路由跟踪命令，用于确定数据包访问目标时所经过的路径。         |
| mar            | 结合**ping**和**traceroute**的特性，提供诊断网络连通性的功能。 |

## 操作步骤

1. 登录宿主机，将脚本下载至宿主机的`/root`目录下。

   > **说明：**
   >
   > 关于如何登录宿主机，请咨询您的宿主机提供商。

   ```
   wget -O /root/sag_vcpe_v2.3.0_deployment.sh https://sdwan-oss-shanghai.oss-cn-shanghai.aliyuncs.com/vcpe_vm/sag_vcpe_v2.3.0_deployment.sh
   ```

2. 执行以下命令，为脚本赋予可执行权限。

   ```
   chmod +x /root/sag_vcpe_v2.3.0_deployment.sh
   ```

3. 执行脚本。

   您可以通过以下两种方式执行脚本。

   **一键式**

   当您在命令行输入命令行并制定参数时，系统会帮您一键执行部署命令，示例如下所示。

   ```
   /root/sag_vcpe_v2.3.0_deployment.sh -n 序列号 -k 密钥 -t 平台  -w WAN口网卡名称                
   ```

   **交互式**

   当您在命令行只输入命令`/root/sag_vcpe_v2.3.0_deployment.sh`而不指定参数时，系统默认您使用交互方式执行命令。

   命令执行过程中，需要您根据终端提示信息自行输入参数。

   <img src="../../_images/um_deploy_vcpe_Interactive.png" style="zoom:50%;" />

4. 执行脚本时，系统会自动检测部署环境是否满足要求。

   若部署环境相关的组件不完整，系统会出现如下提示信息。请输入：yes，系统将自动为您安装相关组件。

   <img src="../../_images/um_deploy_vcpe_misscomponent.png" style="zoom:50%;" />

   若部署环境满足要求，则会直接开始部署 vCPE 镜像。镜像部署完成后，系统会出现如下提示信息。

   <img src="../../_images/um_deploy_vcpe_complet.png" style="zoom:50%;" />

5. 查看部署结果。

   部署成功后，请执行命令`docker ps`，查看系统中是否已包含 `vsag-core` 和 `manager-base` 两个容器。

   若系统已包含如下两个容器，则证明部署成功。

   若系统未包含如下两个容器，则说明部署失败，请提交工单至 SD-WAN 团队进行处理。

   <img src="../../_images/um_deploy_vcpe_success.png" style="zoom:50%;" />
