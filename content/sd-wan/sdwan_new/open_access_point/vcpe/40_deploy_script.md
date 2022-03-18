---
title: "部署软件 VCPE"
draft: false
collapsible: false
weight: 40
---

在创建云服务器后，您需要通过 SD-WAN（新版）提供了 VCPE 虚拟机、VCPE 容器两种部署方式。您可以根据需要选择合适方式部署 VCPE。

- VCPE 虚拟机
  
  在青云QingCloud 创建云服务器时，选择自有镜像的方式，部署云服务器并绑定 License，即可成功部署 VCPE。

- VCPE 容器

  在虚拟机中运行脚本，脚本会帮助您完成容器创建的一系列操作，并完成在容器中部署 VCPE。

## 前提条件

- 已获取控制台的账号和密码。
- 已创建 VCPE 接入点。
- 请确保宿主机满足环境要求，更多信息请参见[环境要求](../10_vcpe_overview/#环境要求)。

## VCPE 虚拟机部署

VCPE 以镜像的模式提供给用户。您需要在云平台上基于 **SD-WAN vCPE** 镜像创建云服务器。镜像在云平台的选择路径为**镜像** > **市场** > **SD-WAN VCPE**。

创建成功后，登录到创建的云服务器绑定 License，即可激活 VCPE。

操作步骤，如下所示。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **镜像**，进入**镜像**页面。

   <img src="/sd-wan/sdwan_new/_images/um_vcpe_image_list.png" style="zoom:50%;" />

3. 点击**市场**，进入**市场**页面。

   <img src="/sd-wan/sdwan_new/_images/um_vcpe_image_market.png" style="zoom:50%;" />

4. 勾选 **SD-WAN VCPE** 镜像，并点击**基于镜像创建云服务器**，进入**购买云服务器**页面。

5. 根据提示信息配置云服务器参数。

   <img src="/sd-wan/sdwan_new/_images/um_vcpe_image_display.png" style="zoom:50%;" />

   参数说明，如下表所示。

   | 参数        | 参数说明                                                     |
   | ----------- | ------------------------------------------------------------ |
   | 镜像        | SD-WAN VCPE                                                  |
   | 网络        | 部署 VCPE 的云服务器与业务所在云服务器在同一 VPC、同一 Vxnet。 |
   | 弹性公网 IP | 部署 VCPE 的云服务器需要访问公网。请根据实际需要为该云服务器或者云服务器所在 VPC 绑定公网 IP。 |
   | 其他参数    | 请根据实际情况配置。                                         |

7. 点击**立即购买**，根据提示完成云服务器购买。

8. <span id ="jump"></span>在 VCPE 接入点详情页面，获取 VCPE 虚拟机接入点的序列号。

   <img src="/sd-wan/sdwan_new/_images/vm_vcpe_copy_license.png" style="zoom:50%;" />
   
8. 登录已购买的基于 **SD-WAN VCPE 镜像**的云服务器。

   > **说明**
   >
   > 关于如何登录云服务器，请参见[连接 Linux 云服务器](/compute/vm/manual/vm/20_connect_instance/10_third_party/)。

8. 执行以下命令，绑定 License。

   > **说明**
   >
   > License 为步骤 <a href ="#jump">7</a> 获取的 VCPE 接入点的序列号。

   ```
   wagent join -l License
   ```
   
   若回显信息如下所示，则说明绑定 License 成功。
   
   <img src="../../../_images/um_bind_image_license.png" style="zoom:50%;" />

## VCPE 容器部署

### 脚本参数说明

VCPE 镜像的部署脚本提供如下可执行参数，如下所示。

```
Usage: deploy.sh [command] [options]

VCPE install tool 2022.02
Options:
    -l          use license to activate device
```

| 参数 | 参数说明               |
| ---- | ---------------------- |
| -l   | VCPE 设备的 License 。 |

### 操作步骤

用户需要登录宿主机，根据提示信息下载 VCPE 脚本并安装 VCPE。

1. 登录宿主机。

   > **说明：**
   >
   > 关于如何登录宿主机，请参考[连接 Linux 云服务器](/compute/vm/manual/vm/20_connect_instance/10_third_party/)。

1. 执行以下命令，安装 docker。

   如下命令**以 Ubuntu 操作系统**为例，其他操作系统安装 docker 的命令请参考[官网](https://docs.docker.com/engine/install/
   )。
   
   ```
   sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   sudo apt update
   sudo apt install docker-ce docker-ce-cli containerd.io
   ```
   
1. 执行以下命令，将脚本下载至宿主机的 `/root `目录下。

   ```
   wget -O /root/deploy.sh https://sd-wan.pek3b.qingstor.com/deploy.sh
   ```

2. 执行以下命令，为脚本赋予可执行权限。

   ```
   chmod +x /root/deploy.sh
   ```

5. 执行以下命令，安装脚本。

   > **说明**
   >
   > License 为 VCPE 接入点的序列号。

   ```
   /root/deploy.sh -l License
   ```

5. 查看部署结果。

   部署完成后，若回显信息如下所示，则说明 VCPE 部署成功。若部署失败，请提交工单至 SD-WAN 团队进行处理。

   <img src="../../../_images/um_deploy_vcpe_success.png" style="zoom:30%;" />



