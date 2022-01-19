---
title: "部署 vCPE"
draft: false
collapsible: false
weight: 40
---

在创建云服务器后，您需要通过 SD-WAN 提供的脚本在宿主机中部署 vCPE 镜像。

本章节为您介绍如何在宿主机中部署 vCPE镜像。

## 前提条件

- 已获取控制台的账号和密码。
- 已创建 vCPE 接入点并获取接入点 License。
- 请确保宿主机满足环境要求，更多信息请参见[环境要求](../10_vcpe_overview/#环境要求)。

## 脚本方式

### 脚本参数说明

vCPE 镜像的部署脚本提供如下可执行参数，如下所示。

```
Usage: install.sh [command] [options]

VCPE install tool 2021.06
Options:
    -u          run uninstall process
    -h          print this help message and exit
    -p          update an existing installation
    -c          run service state check
    -l          license, get license from user console platform

Commands:
    ping        the standard ping command
    mtr         the standard mtr command
    check       display main information
```

| 参数  | 参数说明                                                     |
| ----- | ------------------------------------------------------------ |
| -u    | 卸载 vCPE 镜像。                                             |
| -h    | 查看脚本的帮助信息。                                         |
| -p    | 升级 vCPE 镜像。                                             |
| -c    | 检测宿主机的运行状态。                                       |
| -l    | vCPE 设备的 License 。                                       |
| ping  | 网络连通性测试命令。                                         |
| mtr   | 结合**ping**和**traceroute**的特性，提供诊断网络连通性的功能。 |
| check | 获取当前宿主机的部署状态、宿主机的系统信息、vCPE 镜像的版本等信息。 |

### 操作步骤

用户需要登录宿主机，根据提示信息下载 vCPE 脚本并安装 vCPE。

1. 登录宿主机，将脚本下载至宿主机的`/root`目录下。

   > **说明：**
   >
   > 关于如何登录宿主机，请咨询您的宿主机提供商。

   ```
   wget -O /root/vcpe_deploy.sh https://wan-dev-sw.pek3b.qingstor.com/vcpe_deploy.sh
   ```

2. 执行以下命令，为脚本赋予可执行权限。

   ```
   chmod +x /root/vcpe_deploy.sh
   ```

3. 执行脚本。

   您可以通过以下两种方式执行脚本。

   - **一键式**

     当您在命令行输入命令行并制定参数时，系统会帮您一键执行部署命令，示例如下所示。

     ```
     /root/vcpe_deploy.sh -l License        
     ```

   - **交互式**

     当您在命令行只输入命令`/root/vcpe_deploy.sh`而不指定参数时，系统默认您使用交互方式执行命令。

     命令执行过程中，需要您根据终端提示信息自行输入参数。

     <img src="../../../_images/um_deploy_vcpe_Interactive.png" style="zoom:50%;" />

4. 执行脚本时，系统会自动检测部署环境是否满足要求。

   若部署环境相关的组件不完整，系统会出现如下提示信息。请输入：yes，系统将自动为您安装相关组件。

   <img src="../../../_images/um_deploy_vcpe_misscomponent.png" style="zoom:50%;" />

   若部署环境满足要求，则会直接开始部署 vCPE 镜像。镜像部署完成后，系统会出现如下提示信息。

   <img src="../../../_images/um_deploy_vcpe_complet.png" style="zoom:50%;" />

5. 查看部署结果。

   部署成功后，请执行命令`docker ps`，查看系统中是否已包含 `vsag-core` 和 `manager-base` 两个容器。

   若系统已包含如下两个容器，则证明部署成功。

   若系统未包含如下两个容器，则说明部署失败，请提交工单至 SD-WAN 团队进行处理。

   <img src="../../../_images/um_deploy_vcpe_success.png" style="zoom:50%;" />

## 自有镜像方式

vCPE 以自有镜像的模式提供给用户。

用户通过青云QingCloud 管理控制台创建云服务器时，镜像选择为**自有镜像** > **vCPE**，创建镜像为 vCPE 的云服务器作为 vCPE。

创建成功后，用户需要到 SD-WAN 管理控制台将 vCPE 激活，即可使用 vCPE。

操作步骤，如下所示。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **云服务器**，进入**云服务器**页面。

   ![](../../../_images/um_vcpe_ecs_list.png)

3. 点击**创建云服务器**，弹出**创建云服务器**窗口。

   <img src="../../../_images/um_vcpe_ecs_win.png" style="zoom:50%;" />

4. 在**选择镜像**页面，**镜像提供方**选择**自有**，**镜像**选择为 `wan-base-1231`。

5. 根据实际需要配置服务器、网络以及基本信息。

6. 点击**创建**，完成服务器的创建。

7. 登录已创建的云服务器。

8. 执行以下命令，绑定 License。

   ```
   wagent join -l License
   ```

   若回显信息如下所示，则说明绑定 License 成功。您只需要登录设备控制台绑定 License，即可激活设备。
   
   <img src="../../../_images/um_bind_image_license.png" style="zoom:50%;" />

## 后续操作

创建 vCPE 接入点并部署 vCPE 后，软件 vCPE 则被激活。

若您还需要启用**高可用**添加备用设备，或者**更换设备**，则需要激活设备，更多详细操作请参见[激活设备](../40_bind_license)。 

