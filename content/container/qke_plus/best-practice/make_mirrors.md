---
title: "制作 Docker 镜像"
description: 介绍如何制作 Docker 镜像。
weight: 20
draft: false
keyword: 青云, QingCloud, 云计算, QKE, 云服务器, Docker
---

## 操作场景

本文通过制作一个简单的 Nginx 镜像为例来介绍如何制作 Dcoker 镜像。

## 操作步骤

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
   >

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

   <img src="../../_images/docker_deployment6.png" width="100%" height="40%">

5. 通过构建的镜像创建并运行容器。

   ```
   docker run -it -d -p 80:80 --name nginx nginx:v1
   ```

6. 在浏览器输入云服务器所绑定的弹性公网 IP，访问测试容器运行情况。

   如按照本例中操作，页面出现**Test Page** 字样表示容器运行成功。

