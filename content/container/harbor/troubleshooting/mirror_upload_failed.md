---
title: "大容量镜像上传失败"
draft: false
description: 本文介绍大容量镜像上传失败的解决办法。
keyword: Harbor,镜像仓库,镜像上传失败
weight: 5
---

本文介绍大容量镜像上传失败的解决办法。

## 适用范围

适用版本：Harbor 2.2.1 - QingCloud 1.6.0

## 问题描述

上传超过 2G 的镜像，出现不断重试现象且最终上传失败。

![](/container/harbor/_images/troubel_mirror_upload_failed.png)

## 原因分析

该问题为 docker 的 registry 库 bug 导致，使用 s3 存储会出现此错误。具体的错误原因请参考 [docker-registry-bug](https://github.com/distribution/distribution/issues/2814)。

## 解决办法

### 方案一：升级版本

1. 将 Harbor 版本升级到 Harbor 2.2.1 - QingCloud 1.6.2。

   导入 Harbor APP 版本 `appv-ii6oovmv`，在集群信息页面关闭集群，然后选择集群升级。

   ![](/container/harbor/_images/troubel_mirror_upload_failed_1.png)

2. 升级成功后，观察节点状态是否健康。

3. 在集群参数配置页面，查看是否有 ChunkSize 参数。

   ![](/container/harbor/_images/troubel_mirror_upload_failed_2.png)

4. 重新 push 镜像，测试是否成功上传。

### 方案二：临时方案

> **注意**
>
> 临时修改方案在集群重启后将失效，建议使用升级的方式进行解决。

以下操作需要在所有的 web_node 节点和 job_node 节点依次执行，节点之间没有先后顺序。

1. 登录节点。

2. 备份待修改文件。

   ```
   cd /opt/app/current/conf
   cp docker-compose.yml docker-compose.yml.back
   ```

3. 修改`docker-compose.yml`文件。

   ```
   vim docker-compose.yml
   ```

   修改 images 字段，替换 `$HARBOR_VERSION` 为 v2.2.1 版本。

4. 修改 config.yml。

   ```
   vim registry/config.yml
   ```

   新增如下配置：

   ```
   s3:
     accesskey
     secretkey
      chunksize:67108864 # 字段越大能都上传的镜像越大，注意需要是1024的整数倍, 建议使用67108864
   ```

5. 重启容器。

   ```
   docker-compose restart
   ```

7. 查看容器是否健康。

   ```
   docker-compose ps
   ```

8. 重复以上步骤，完成所有节点的修改操作。

9. 所有节点执行完成后，重新 push 镜像，测试是否成功上传。

