---
title: "云服务器部署 Docker"
description: 介绍如何在 Linux 云服务器上部署 Docker。
draft: true
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

## 部署 Docker

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

## 使用 Docker

### 进程管理

* 运行 Docker

  ```
  systemctl start docker
  ```

  

* 停止 Docker

  ```
  systemctl stop docker
  ```

  

* 重启 Docker

  ```
  systemctl restart docker
  ```

### 制作镜像

以下通过制作一个简单的 Nginx 镜像为例来介绍如何制作 Dcoker 镜像。

1. 创建一个名为 Dockerfile 的文件。

   ```
   mkdir test
   cd test
   touch Dockerfil
   ```

2. 编辑 Dockerfile 文件。

   ```
   vim Dockerfile
   ```

   添加如下内容：

   ```
   FROM nginx
   RUN echo '<h1>Test Page</h1>' > /usr/share/nginx/html/index.html
   ```

   > **说明**
   >
   > - FROM语句：表示使用 nginx 镜像作为基础镜像，一个Dockerfile 中 FROM 是必备的指令，并且必须是第一条指令。
   >
   > - RUN语句：格式为 `RUN <command>`。本例中表示执行 echo 命令，修改 NGINX 默认首页内容。
   >
   >   关于指令的更多介绍，请参见[官网说明](https://hub.docker.com/)。

3. 构建镜像

   ```
   docker build -t nginx:v1  .  
   ```

   参数说明：

   * `-t nginx:v1`：指定镜像的名称和版本。
   * `.`：指定路径，镜像构建命令将该路径下所有的内容打包给 Docker 引擎帮助构建镜像。

4. 查看已构建的 nginx 镜像，可看到版本号为 v1。

   ```
   docker images
   ```

   <img src="/container/qke_plus/_images/docker_deployment6.png" width="100%" height="40%">

5. 通过构建的镜像创建并运行容器。

   ```
   docker run -it -d -p 80:80 --name nginx nginx:v1
   ```

6. 在浏览器输入云服务器所绑定的弹性公网 IP，访问测试容器运行情况。

   如按照本例中操作，页面出现 **Test Page** 字样表示容器运行成功。

### 镜像管理

* 拉取镜像

  此处以 Nginx 和 CentOS 官方镜像为例。

  ```
  docker pull  nginx
  
  docker pull centos
  ```

* 查看已有镜像

  ```
  docker images
  ```

* 强制删除镜像

  ```
  docker rmi centos
  ```

### 容器创建

1. 创建一个容器并运行。

   使用镜像 Nginx，以交互模式启动一个容器，将容器的 80 端口映射到云服务器的 80 端口，并返回容器 ID。

   ```
   docker run -it -d -p 80:80 --name nginx nginx			
   ```

   参数说明如下：

   | 参数         | 说明                                                         |
   | ------------ | ------------------------------------------------------------ |
   | **-i**       | 以交互模式运行容器，通常与`-t`同时使用                       |
   | **-t**       | 为容器重新分配一个伪输入终端，通常与`-i`同时使用             |
   | **-d**       | 后台运行容器                                                 |
   | **-p**       | 端口映射，格式为`云服务器端口:容器端口`                      |
   | **\-\-name** | 为容器指定一个名称                                           |
   | **-v**       | 把云服务器的一个目录挂载到容器里，格式为`云服务器目录:容器内挂载的路径`，必须为绝对路径 |

1. 查看容器启动情况。

   ```
   docker ps -a
   ```

1. 在浏览器输入云服务器所绑定的弹性公网 IP，访问测试容器运行情况。出现以下内容表示运行成功。

   <img src="/container/qke_plus/_images/docker_deployment4.png" width="70%" height="50%">





