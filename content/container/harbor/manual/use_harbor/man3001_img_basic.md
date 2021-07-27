---
title: "推送拉取镜像"
draft: false
enableToc: false
weight: 1
---

本文介绍如何使用 Docker 推送（push）及拉取（pull）镜像。

## 前提条件

- 已安装 Docker。具体操作，请参见[安装Docker](https://docs.docker.com/get-docker/)。

> 说明：
>
> Docker 支持 Mac OS、Windows及Linux多个平台上安装，请根据您的实际需求下载匹配的安装包进行安装。

- 已登录镜像仓库。具体操作请参见 [Docker 登录](/container/harbor/quickstart/qs18_access_harbor/#docker-登录)。

## 拉取镜像

执行以下命令可将仓库中的镜像拉取到本地。

```
docker pull Harbor_address/ProjectName/Repsitory[:Tag]
```

其中：

- `Harbor_address` 表示您的 Harbor 镜像仓库地址，需要与[参数配置页面](/container/harbor/manual/man08_mdy_para/)中的 **Harbor 地址**保持一致。
- `ProjectName` 表示项目名称。
- `Repsitory` 表示镜像仓库名称。
- `Tag` 表示镜像标签，通常表示镜像版本。

## 推送镜像 

1. 执行以下命令在项目中标记镜像。

   ```
   docker tag SourceImage[:Tag] Harbor_address/ProjectName/Repsitory[:Tag]
   ```

   ​	其中：`SourceImage` 表示您本地的镜像。

2. 执行以下命令将镜像上传到 Harbor 镜像仓库。

   ```
   docker push Harbor_address/ProjectName/Repsitory[:Tag]
   ```

   

