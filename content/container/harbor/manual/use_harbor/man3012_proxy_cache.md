---
title: "配置代理缓存"
draft: false
enableToc: false
weight: 12
---

## 操作场景

Harbor 提供的代理缓存功能允许您使用 Harbor 来代理和缓存来自公共或私有仓库的镜像。

在互联网访问受限或无法访问的环境中，您可以使用代理缓存从 Harbor 或非 Harbor 仓库中拉取镜像；您还可以使用代理缓存来限制对公共仓库发出的请求数量，避免消耗过多带宽或被仓库服务器限制。

> **说明**：
>
> 从 Harbor v2.1.1 开始，代理缓存功能已更新，以与 [Docker Hub 的速率限制策略](https://www.docker.com/blog/scaling-docker-to-serve-millions-more-developers-network-egress/)保持一致。如果您打算在 Harbor 实例中使用代理缓存，强烈建议您使用 v2.1.1 或更高版，以免避免受到速率限制。

## 操作步骤

详细操作说明，请参见 [Harbor 官方文档](https://goharbor.io/docs/2.2.0/administration/configure-proxy-cache/)，以下为步骤要点。

> **说明**：
>
> 本操作中截图以 Harbor v2.2.1 为例，仅供参考，请以您部署的 Harbor 实际版本为准。

1. [登录 Harbor Web界面](http://localhost:1313/container/harbor/quickstart/qs18_access_harbor/#浏览器登录)。

2. 创建目标仓库。

   进入**仓库管理**页面，点击**新建目标**，创建您需要被代理和缓存的目标镜像仓库。

   <img src="/container/harbor/_images/man3008_new_dest.png" alt="new_dest" style="zoom:50%;" />

3. 创建代理缓存项目。

   进入**项目**页面，点击新建项目，创建镜像代理项目。

   <img src="/container/harbor/_images/man3012_new_project.png" alt="new_project" style="zoom:50%;" />

   > **说明**：
   >
   > - 请务必单击**镜像代理**后的滑块，开启镜像代理功能并选择需要被代理的目标镜像仓库。
   > - 代理缓存项目能够使用与普通 Harbor 项目相同的功能，区别在于您不能将镜像推送到代理缓存项目。

   代理缓存项目创建后，用户只要有该项目的访问权限便可通过代理缓存项目拉取镜像。

4. 使用代理缓存。

   使用代理缓存时需在 docker pull 或 Pod 清单中将 `<harbor_servername>/<proxy_project_name>/`作为前缀添加到镜像标签以引用代理缓存项目，例如:
   ```
   docker pull <harbor_server_name>/<proxy_project_name>/library/hello-world:latest
   ```

   

