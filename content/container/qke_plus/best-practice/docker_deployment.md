---
title: "云服务器部署 Docker"
description: 介绍如何在 Linux 云服务器上部署 Docker。
draft: false
weight: 10
keyword: 青云, QingCloud, 云计算, QKE, 云服务器, Docker
---

本文介绍了如何在 Linux 云服务器实例中部署 Docker。

## 背景信息

部署 Docker 前，可提前了解 Docker 相关基本术语，如下：

- **Docker 镜像**

  Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。

- **Docker 容器**

  镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的 类 和 实例 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。

  容器的实质是进程，但与直接在宿云服务器执行的进程不同，容器进程运行于属于自己的独立的 命名空间。因此容器可以拥有自己的 root 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间。容器内的进程是运行在一个隔离的环境里，使用起来，就好像是在一个独立于宿主的系统下操作一样。

- **Docker 仓库**

  镜像构建完成后，可以很容易的在当前宿云服务器上运行，但是，如果需要在其它服务器上使用这个镜像，我们就需要一个集中的存储、分发镜像的服务，Docker Registry 就是这样的服务。
  一个 Docker Registry 中可以包含多个 仓库（Repository）；每个仓库可以包含多个 标签（Tag）；每个标签对应一个镜像。

> **说明**
>
> 更多关于镜像、容器、仓库的基础知识，请参见 [Docker Documentation](https://docs.docker.com/)。



## 前提条件

Docker 支持 64 位版本 CentOS 7/8，并且要求内核版本不低于 3.10。

> **注意**
>
> CentOS 7 满足最低内核的要求，但由于内核版本比较低，部分功能（如 `overlay2` 存储层驱动）无法使用，并且部分功能可能不太稳定。

## 操作步骤

本文操作以 CentOS7.9 为例。

1. 添加 yum 源。

   ```
   yum install epel-release -y
   
   yum clean all
   ```

2. 安装 yum-util。

   ```
   yum install -y yum-utils device-mapper-persistent-data lvm2
   ```

3. 设置 docker yum源。

   ```
   yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
   ```

4. 更新、安装并运行 Docker。

   ```
   yum makecache fast
   yum -y install docker-ce
   systemctl enable docker
   systemctl start docker
   ```

6. 检查安装结果。

   ```
   docker --version
   ```

   回显类似信息，表示 Docker 安装成功。

   ```
   Docker version 20.10.5, build 55c4c88
   ```

