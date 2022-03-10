---
title: "部署软件 vCPE"
draft: false
collapsible: false
weight: 40
---

在创建云服务器后，您需要通过 SD-WAN（新版）提供了 vCPE 虚拟机、vCPE 容器两种部署方式。您可以根据需要选择合适方式部署 vCPE。

- vCPE 虚拟机
  
  在青云QingCloud 创建云服务器时，选择自有镜像的方式，部署云服务器并绑定 License，即可成功部署 vCPE。

- vCPE 容器

  在虚拟机中运行脚本，脚本会帮助您完成容器创建的一系列操作，并完成在容器中部署 vCPE。

## 前提条件

- 已获取控制台的账号和密码。
- 已创建 vCPE 接入点并获取接入点 License。
- 请确保宿主机满足环境要求，更多信息请参见[环境要求](../10_vcpe_overview/#环境要求)。

## vCPE 虚拟机部署

vCPE 以自有镜像的模式提供给用户。

在云平台上选择镜像，基于镜像创建云服务器。镜像选择为**镜像** > **市场** > **SD-WAN vCPE** ，创建镜像为 vCPE 镜像 的云服务器作为 vCPE。

创建成功后，登录到创建的云服务器绑定 License，即可激活 vCPE。

操作步骤，如下所示。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **镜像**，进入**镜像**页面。

   <img src="/sd-wan/sdwan_new/_images/um_vcpe_image_list.png" style="zoom:50%;" />

3. 点击**市场**，进入**市场**页面。

   <img src="/sd-wan/sdwan_new/_images/um_vcpe_image_market.png" style="zoom:50%;" />

4. 勾选 **SD-WAN vCPE** 镜像，并点击**基于镜像创建云服务器**，进入**购买云服务器**页面。

5. 根据提示信息配置云服务器参数。

   可查看到镜像为 **SD-WAN vCPE**。

   <img src="/sd-wan/sdwan_new/_images/um_vcpe_image_display.png" style="zoom:50%;" />

7. 点击**立即购买**，根据提示完成云服务器购买后，登录已创建的云服务器。

8. 执行以下命令，绑定 License。

   ```
   wagent join -l License
   ```

   若回显信息如下所示，则说明绑定 License 成功。您只需要登录设备控制台绑定 License，即可激活设备。

   <img src="../../../_images/um_bind_image_license.png" style="zoom:50%;" />

## vCPE 容器部署

### 脚本参数说明

vCPE 镜像的部署脚本提供如下可执行参数，如下所示。

```
Usage: deploy.sh [command] [options]

VCPE install tool 2022.02
Options:
    -l          use license to activate device
```

| 参数 | 参数说明               |
| ---- | ---------------------- |
| -l   | vCPE 设备的 License 。 |

### 操作步骤

用户需要登录宿主机，根据提示信息下载 vCPE 脚本并安装 vCPE。

1. 登录宿主机。

   > **说明：**
   >
   > 关于如何登录宿主机，请参考[连接 Linux 云服务器](/compute/vm/manual/vm/20_connect_instance/10_third_party/)。

1. 执行以下命令，安装 docker。

   如下命令**以 Ubuntu 操作系统**为例，其他操作系统安装 docker 的命令请参考[官网](https://docs.docker.com/engine/install/
   )。
   
   ```
   apt-get install docker-ce docker-ce-cli containerd.io
   ```
   
1. 执行以下命令，将脚本下载至宿主机的`/root`目录下。

   ```
   wget -O /root/deploy.sh https://sd-wan.pek3b.qingstor.com/deploy.sh
   ```

2. 执行以下命令，为脚本赋予可执行权限。

   ```
   chmod +x /root/deploy.sh
   ```

3. 执行以下命令，安装脚本。

   ```
   /root/deploy.sh -l License
   ```

4. 安装脚本时，系统会自动检测部署环境是否满足要求。

   若部署环境相关的组件不完整，系统会出现如下提示信息。请输入：yes，系统将自动为您安装相关组件。

   <img src="../../../_images/um_deploy_vcpe_misscomponent.png" style="zoom:50%;" />

   若部署环境满足要求，则会直接开始部署 vCPE 镜像。镜像部署完成后，系统会出现如下提示信息。

   <img src="../../../_images/um_deploy_vcpe_complet.png" style="zoom:50%;" />

5. 查看部署结果。

   部署完成后，若回显信息如下所示，则说明 vCPE 部署成功。若部署失败，请提交工单至 SD-WAN 团队进行处理。

   <img src="../../../_images/um_deploy_vcpe_success.png" style="zoom:50%;" />



