---
title: "Docker 基本操作"
description: 介绍 Docker 的基本用法。
weight: 15
draft: false
keyword: 青云, QingCloud, 云计算, QKE, 云服务器, Docker
---

本文介绍 Docker 的一些基本用法。

## 进程管理

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

## 镜像管理

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

## 容器创建

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

   <img src="../../_images/docker_deployment4.png" width="70%" height="50%">

