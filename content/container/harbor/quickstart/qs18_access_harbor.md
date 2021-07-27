---
title: "登录 Harbor 镜像仓库"
draft: false
enableToc: false
weight: 18

---

介绍如何登录到您创建的 Harbor 镜像仓库。

## 前提条件

- 已完成 [Harbor 镜像仓库部署](../qs10_deploy_harbor/)。

- 已获取 Harbor 镜像仓库的登录用户名及密码。 

> **说明**：
>
> - Harbor 登录的初始用户名：**admin**，密码：**Harbor12345**。
>
> - 为保障数据安全，请在首次登录后立即修改密码。

##  浏览器登录

1. 打开浏览器，在地址栏输入 Harbor 地址，按下 **Enter** 键，出现 Harbor 登录界面。

   > **说明**：
   >
   > Harbor 地址即在部署 Harbor 镜像仓库时，填写的 Harbor 地址，在Habor 集群详情页面的**配置参数**页签中可查看，请根据您的实际情况输入。

   <img src="/container/harbor/_images/qs18_harbor_url.png" alt="harbor_url" style="zoom:50%;" />

2. 输入用户名及密码，点击**登录**。

   <img src="/container/harbor/_images/qs18-harbor-web-signin.png" alt="harbor-web-signin" style="zoom:50%;" />

   登录成功后，可看到如下界面。

   <img src="/container/harbor/_images/qs18_harbor-web-logined.png" alt="harbor-web" style="zoom:50%;" />

## Docker 登录

#### 安装 Docker

使用 Docker 前，请先下载及安装 Docker，具体操作请参见 [安装 Docker](https://docs.docker.com/get-docker/)。

#### 访问配置

若您使用的是 HTTP 协议或自签名证书来连接访问 Harbor，您需要修改 Docker 的 --insecure-registry 配置，用于支持 Self-signed Certificate 或 HTTP 协议。详细配置操作，请参见 [Docker 文档](https://docs.docker.com/registry/insecure/)。

配置好后需要重启 Docker，如：在较新版本的 Linux 下执行命令 `systemctl restart docker`。

#### 登录

安装 Docker 后，在本地终端命令行，执行以下命令便可登录到镜像仓库。

```
docker login -u username -p password yourhub.domain.com
```

- `username` 及 `password` 表示 Harbor 的登录用户名及密码。

- `yourhub.domain.com` 表示 Harbor 的 IP 地址或 Domain 域名，必须与您在[参数配置页面](/container/harbor/manual/man08_mdy_para/)中的 **Harbor 地址**保持一致。







