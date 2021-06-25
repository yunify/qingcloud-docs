---
title: "配置镜像复制"
draft: false
enableToc: false
weight: 8
---

## 操作场景

Harbor 提供镜像复制功能，允许用户以推送和拉取方式在不同 Harbor 仓库之间，以及Harbor 与非 Harbor 仓库间（如Alibaba ACR、Artifact Hub、Aws ECR、Docker Hub等）复制 image、chart等资源。 

以 Harbor 系统管理员身份设置好复制规则后，当满足触发条件时，所有与规则匹配的资源都会被复制到目标仓库中。每个被复制的资源都会启动一个复制任务。如果目标仓库中不存在命名空间，则会自动创建一个新的命名空间。

## 操作须知

- 由于 API 变化，不支持不同版本 Harbor 之间的复制。
- 确保复制策略中配置的帐户对目标仓库具有写入权限，否则将无法成功复制。
- 根据网络状况，复制期间可能会有一些延迟。如果复制任务失败，几分钟后将尝试重新复制。

## 操作步骤

详细操作说明，请参见 [Harbor 官方文档](https://goharbor.io/docs/2.2.0/administration/configuring-replication/)，以下为步骤要点。

>**说明**：
>
>本操作中截图以 Harbor v2.2.1 为例，仅供参考，请以您部署的 Harbor 实际版本为准。

1. [登录资源所在的 Harbor Web界面](/container/harbor/quickstart/qs18_access_harbor/#浏览器登录)。 

2. 创建目标仓库。

   进入**仓库管理**页面，点击**新建目标**，创建复制目标。

   <img src="/container/harbor/_images/man3008_new_dest.png" alt="new_dest" style="zoom:50%;" />

3. 创建复制规则。

   进入**复制管理**页面，点击**新建规则**，进行复制规则配置。

   <img src="/container/harbor/_images/man3008_new_rule.png" alt="new_rule" style="zoom:50%;" />

4. 手动运行复制任务。

   在**复制管理**页面，勾选复制规则，点击**复制**，创建复制任务。

   单击执行的 **ID** 可以查看复制的详细信息和任务列表。

   

