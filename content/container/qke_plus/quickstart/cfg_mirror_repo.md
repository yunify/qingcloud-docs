---
title: "配置镜像仓库"
description: 介绍如何登录 QKE 集群节点
draft: false
weight: 20
keyword: 青云, QingCloud, 云计算, QKE, 容器, 镜像仓库
---

镜像仓库用于托管及分发容器镜像，本文介绍如何部署及配置应用所需的镜像仓库。

## 前提条件

已创建 QKE 集群。

## 操作步骤

### 步骤一：部署镜像仓库

推荐您使用青云提供的 [Harbor 镜像仓库](/container/harbor/intro/introduction/) 或 [Docker 镜像仓库](/container/dockerhub/intro/introduction/) 进行仓库部署。您也可以使用已部署好的自有镜像仓库。

- Harbor 镜像仓库

  QingCloud Harbor 镜像仓库将 Harbor 制作成了 APP，能直接在 AppCenter 进行一键部署。

  部署仓库的具体操作方法，请参[部署 Harbor 镜像仓库](/container/harbor/quickstart/qs10_deploy_harbor/  )。

  > **说明**
  >
  > 建议镜像仓库与 QKE 集群使用同一个 VPC 网络，以保证更好的访问速度。  

- Docker 镜像仓库

  QingCloud Docker 镜像仓库基于 Docker 官方开源的 Docker Distribution 为用户提供了更灵活的 Docker 镜像的集中存储和分发服务。

  部署仓库的具体操作方法，请参见[创建 Docker 镜像仓库](/container/dockerhub/quickstart/create_repo/)。

### 步骤二：配置镜像仓库信息

1. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群管理页面。

2. 点击所需配置的集群名称，进入**集群概览**页面。

3. 在**集群信息**页面的**环境参数**区域，配置**镜像参数**。

   所需配置的参数如下：

   - **registry-mirrors**
   
     填写完整的 Docker 镜像服务地址。
   
     填写示例：`https://mirror.harbor.local`。如果有多个地址，使用使用逗号（,）进行分隔。
   
   - **insecure-registries**
   
     若需要通过非安全的 HTTP 或不受信任的 HTTPS 访问的 Docker 仓库，则在此处填写仓库地址。
   
     填写示例：`mirror.harbor.local`或`139.198.xx.xx`。如果有多个地址，使用使用逗号（,）进行分隔。
   
   - **docker-auths**
   
     填写镜像仓库的认证信息，以获得访问、拉取、推送镜像的权限。目前仅支持“用户名 + 密码”的认证方式。
   
     docker_auth 配置必须为正确的 json 格式，填写示例：
   
     ```
     {
     	"dockerhub.qingcloud.com":{                # "dockerhub.qingcloud.com"为仓库地址
     		"auth":"YWRtaW46SGFyYm9yMTIzNDU="   # "YWRtaW46SGFyYm9yMTIzNDU=" 为 “用户名:密码” 进行 base64 编码后的字符串,用户名及密码不能有中文字符
     		},
     		"index.docker.io":{                 #可配置多个仓库的认证信息
     		"auth":"YWRtaW46MTIzNDU2="
     		}
     }
     ```
   
     


4. 配置完成后，点击**确认修改**进行保存。
