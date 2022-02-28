---
title: "配置 Docker 镜像加速"
description: 介绍如何配置配置 Docker 镜像加速。
weight: 40
draft: false
keyword: 青云, QingCloud, 云计算, QKE, 云服务器, Docker
---

## 操作场景

国内从 DockerHub 拉取镜像有时会遇到困难，此时通过配置镜像加速器来解决该问题。

## 操作步骤

1. 修改 `/etc/docker/daemon.json` 文件，在文件添加 `registry-mirrors` 。如下所示

   ```
   {
   	"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn/"] 
   }
   ```

   > **说明**
   >
   > 常用的加速地址有：
   >
   > - Docker 中国区官方镜像：https://registry.docker-cn.com
   > - 网易：http://hub-mirror.c.163.com
   > - ustc：https://docker.mirrors.ustc.edu.cn
   > - 中国科技大学：https://docker.mirrors.ustc.edu.cn

 2. 重启 Docker。 

    ```
    systemctl restart docker
    ```

3. 检查是否配置成功。

   ```
   docker info |grep -A 1  Mirrors 
   ```

   预期显示：

   ```
    Registry Mirrors:
     https://docker.mirrors.ustc.edu.cn/
   ```

