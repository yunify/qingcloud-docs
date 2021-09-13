---
title: "登录镜像仓库"
draft: false
enableToc: false
weight: 8
---

您可以通过 Docker Cli登录到 QingCloud Docker Hub。

## 背景信息

QingCloud Docker 镜像仓库 (QingCloud Docker Hub) 的访问域名是 `dockerhub.qingcloud.com`。

## 前提条件

- 已创建Docker 镜像仓库。
- 已获取登录用户名及密码。
- 已下载及安装 Docker，具体操作请参见 [Docker 官方文档](https://docs.docker.com/get-docker/)。

## 操作步骤

安装 Docker 后，在本地终端命令行，执行以下命令便可登录到镜像仓库。

```
docker login -u <username> -p <password> dockerhub.qingcloud.com
```

> **说明**：
>
> `<username>` 及 `<password>` 表示 Docker 的登录用户名及密码。

