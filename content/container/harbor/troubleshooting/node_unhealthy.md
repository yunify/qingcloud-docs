---
title: "修改集群参数导致节点不健康"
draft: false
description: 本文介绍修改集群参数后，部分节点不健康的处理办法。
keyword: Harbor,镜像仓库,节点异常,不健康
weight: 10
---

本文介绍修改集群参数后，部分节点不健康的处理办法。

## 适用范围

适用版本：Harbor 2.2.1 - QingCloud 1.6.0

## 问题描述

修改集群参数，重启集群后，部分节点不健康。

## 原因分析

版本的 patch（patch_id：appp_rui3k0nk） 没有打上，导致 `docker-compose.yml` 文件渲染错误。

## 解决办法

### 方案一：集群打补丁

> **说明**
>
> patch 功能不能针对已经创建好的集群，因此打上 patch 后需要重新创建集群。

1. 联系技术支持，对已有集群打 patch。
2. 打上 patch 后重新创建集群，测试集群是否正常。

### 方案二：临时方案

> **注意**
>
> 临时修改方案在集群重启后将失效，建议使用打补丁的方式进行解决。

以下操作需要在所有的异常节点上依次执行，节点之间没有先后顺序。

1. 登录不健康节点。

2. 备份待修改文件。

   ```
   cd /opt/app/current/conf
   cp docker-compose.yml docker-compose.yml.back
   ```

3. 修改`docker-compose.yml`文件。

   ```
   vim docker-compose.yml
   ```

   修改 images 字段，替换 `$HARBOR_VERSION` 为 v2.2.1 版本，并根据错误提示去掉重读的 DNS IP 字段。

   ![](/container/harbor/_images/troubel_node_unhealthy_1.png)

4. 重启容器。

   ```
   docker-compose restart
   ```

7. 查看容器是否健康。

   ```
   docker-compose ps
   ```

8. 重复以上步骤，完成所有异常节点的修改操作。

9. 所有节点执行完成后，观察 console 页面节点是否健康以及 Harbor 是否正常。

