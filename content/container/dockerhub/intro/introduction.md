---
title: "Docker 镜像仓库"
draft: false
enableToc: false
keyword: QingCloud, 青云，镜像仓库，Docker，容器
weight: 10
---

## 产品概述

QingCloud Docker 镜像仓库 (QingCloud Docker Hub) 基于 Docker 官方开源的 Docker Distribution 为用户提供 Docker 镜像的集中存储和分发服务。

Docker Distribution 对镜像仓库的管理共分为3个层级，依次是命名空间 (namespace) 、镜像仓库 (repository) 和 标签 (tag)：

- 命名空间以名称作为标识，一个命名空间可管理多个镜像仓库；
- 镜像仓库通过名称标识，一个镜像仓库中可保存一个镜像（image）的多个版本；
- 镜像版本通过标签进行区分。

基于以上层级关系，一个完整的镜像路径 `{namespace}/{repository}:{tag}` 可以唯一确定一个镜像。

## 产品特点

在 Docker Distribution 的基础上，QingCloud Docker Hub 提供了更灵活的镜像仓库管理方式。

#### 独立的镜像仓库用户体系

Docker 开发者通过 Docker CLI 等工具下载或推送镜像时，需要用 Docker user 账号登录到对应的 Docker Registry。 在 QingCloud Docker Hub 的设计中， Docker user 是 QingCloud 用户的资源：每个用户可以创建多个 Docker user；用户可以将 Docker user 给予其它开发者使用。

#### 基于命名空间的权限管理

用户可以在创建命名空间时，指定命名空间的访问权限；也可以在之后更改命名空间的访问权限；还可以在命令空间的详情页添加新的 Docker user 授权，或对已有的授权进行修改或移除。



