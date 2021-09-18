---
title: "配置 Docker 镜像加速"
date: 2021-07-31T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---

## 背景

国内从 DockerHub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。

## 配置方式

1. 修改 ```/etc/docker/daemon.json``` 文件，在文件添加 registry-mirrors 。如下所示

   ```
   root@qke-client:~# cp /etc/docker/daemon.json /etc/docker/daemon.json.bak
   root@qke-client:~# cat /etc/docker/daemon.json 
   {
   	"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn/"] 
   }
   ```

常用的加速地址有：**Docker 中国区官方镜像：https://registry.docker-cn.com**；**网易：http://hub-mirror.c.163.com**；**ustc：https://docker.mirrors.ustc.edu.cn**；**中国科技大学：https://docker.mirrors.ustc.edu.cn**

2. 重启 Docker 。 

   ```
   root@qke-client:~# systemctl restart docker
   ```

3. 检查是否配置成功。

   ```
   root@qke-client:~# docker info |grep -A 1  Mirrors 
    Registry Mirrors:
     https://docker.mirrors.ustc.edu.cn/
   ```

   
