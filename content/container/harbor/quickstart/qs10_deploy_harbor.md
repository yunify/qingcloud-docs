---
title: "部署 Harbor 镜像仓库"
draft: false
enableToc: false
keyword: Harbor, 私有镜像仓库，镜像仓库，容器
weight: 10

---

## 操作场景

在使用 Harbor 镜像仓库服务前，您需要在 AppCenter  中 通过部署 **Harbor 镜像仓库** APP 创建您的私有镜像仓库。 **Harbor 镜像仓库**将 Harbor 制作成了 APP，能直接在 AppCenter 进行一键部署。

## 操作前准备

在部署 Harbor App 之前，您需要创建一个 VPC 网络和一个负载均衡器。另外，若您需要使用 [QingStor 对象存储](/storage/object-storage/intro/object-storage/) 做后端存储，则还需要创建一个 QingStor 对象存储的 Bucket 。

1. 创建一个 VPC 网络和关联一个 Vxnet 私有网络。

   创建 VPC 网络请参见[创建 VPC 网络](/network/vpc/manual/vpcnet/10_create_vpc/)，关联私有网络请参见[连接私有网络](/network/vpc/manual/vpcnet/15_bind_vxnet/)。

   > **注意**：
   >
   > Harbor 采用 Docker Compose 部署，用来部署 Harbor 的 VPC 网络请不要使用 `172.17.0.0/16` 和 `172.18.0.0/16` 这两个网段。

2. 创建负载均衡器。

   创建一个负载均衡器，然后创建一个监听器，用于 Harbor Web 界面的访问入口。

   创建负载均衡器及监听器的详细操作，请参见[创建负载均衡器](/network/loadbalancer/quickstart/quick_start/) 。

   > **说明**：
   >
   > - 可创建私有或公有负载均衡器，若是公有，需要先申请公网IP；若是私有则只能用于内网访问。
   > - 监听器的监听协议可选 **HTTP** 或 **HTTPS** 。
   >
   > - 若选择 **HTTPS** 协议，则需要在配置监听器时[添加服务器证书](/container/harbor/faq/faq05_use_ssl_certifcate/)，并在 **高级选项** > **附加HTTP头字段** 勾选**负载均衡器监听协议**（通过 X-Forwarded-Proto 头字段获取负载均衡器的监听协议）。

   <img src="/container/harbor/_images/qs_10_create_monitor.png" alt="monitor" style="zoom:50%;" />

3. 配置防火墙规则

   针对上一步负载均衡器的设置，在负载均衡器使用的安全组中添加允许下行规则 80/TCP (HTTP) 或 443/TCP (HTTPS) 端口。

   <img src="/container/harbor/_images/qs_10_add_rules.png" alt="rule" style="zoom:50%;" />

4. 创建 Bucket（仅针对使用 QingStor 对象存储的用户，使用本地存储的用户请略过此步骤）

   对象存储桶（Bucket）是用户用于存储对象的容器，所有的对象都必须隶属于某个存储空间。

   创建对象存储桶（Bucket）的详细操作，请参见[创建 Bucket](/storage/object-storage/manual/bucket_manage/#创建-bucket)。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。
2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **Harbor 镜像仓库**，进入 Harbor 镜像仓库部署页面。
3. 点击**立即部署**开始部署。

### 第1步：基本设置

1. 在顶部**区域**下拉框中，选择部署区域。

2. 设置 Harbor 服务的基本信息，包括 Harbor 服务的名称、描述、版本、快速配置（存储空间）、计费方式 和可用区。

     > **说明**：
     >
     > * 推荐使用 QingStor 对象存储来保证高可用和无限容量。（QingStor 对象存储是 QingCloud 提供的通用海量非结构化数据存储服务，具有安全可靠、简单易用、高性能、低成本等特点。）
     > * 本地存储不支持高可用，且受单磁盘容量限制，仅建议测试使用。

     ![basic-info](/container/harbor/_images/harbor-create-basic-setting.png)

### 第2步：主服务节点设置

1. 点击 **+ 添加负载均衡器（后端端口 80）**，选择已创建好的负载均衡器及监听器，点击**添加**。

    ![add-lb](/container/harbor/_images/harbor-create-add-lb.png)

2. 填写主服务节点 CPU、内存，配置节点数量（默认为 2 个）及实例类型。

### 第3步：网络设置

![network-setting](/container/harbor/_images/harbor-create-vxnet-set.png)

选择已创建好的私有网络，并设置节点 IP 地址。

> **说明**：
>
> ▪︎ 若此前未创建VPC 网络及私有网络，可按照界面提示进行创建。
>
> ▪︎ Harbor 采用 Docker Compose 部署，请不要使用 172.17.0.0/16 或 172.18.0.0/16 这两个网段的网络，这两个网段会与 Harbor 所在的 Docker 网络产生冲突从而导致创建失败。

### 第4步：服务环境参数设置

![para-setting](/container/harbor/_images/harbor-create-service-para-set.png)

设置以下参数：

* **Harbor 地址**:

  Harbor 服务地址，用于访问 Harbor Web 界面，进行 docker login/push/pull 等操作，可以是 IP 地址或 Domain 域名。

  > **说明**：
  >
  > Harbor 地址必须与负载均衡器的 IP 地址及协议保持一致，如 HTTP 协议地址：`http://192.168.2.2`；如果为 HTTPs 协议，则对应访问地址：`https://192.168.2.2` ，注意最后不要以`/` 结束。

* 对象存储设置：使用 QingStor 对象存储服务来存储镜像文件的用户需要设置。

  > **说明**：
  >
  > 使用本地存储的用户请跳过以下关于对象存储相关的设置项。

  - **Access_Key_ID** 和 **Secret_Access_Ke**y ：青云提供给用户的授权密钥，可以在 **个人中心** > **API密钥** 中创建，然后点击**下载**，获取 access_key_id 和 secret_access_key。

  - <b>对象存储区（Region）</b>：QingStor 存储空间 (Bucket) 的所在区域。
  - <b>对象存储桶（Bucket）</b>：Bucket 名称。
  - **存储根目录**：存储桶里用于存储镜像的根目录名称，默认为空，表示使用整个桶；Harbor 集群创建后将无法更改根目录。
  - **对象存储 URL**：对象存储的 URL 地址，如`https://qingstor.com`，默认会自动转换成兼容 S3 的地址`qingstor.com`。

* **使用 S3 地址**：是否把对象存储 URL 转换成 QingStor 兼容 S3 的地址。**true** 表示对象存储 URL 是 S3 兼容 URL，格式为：http(s)://s3.<region>.your.domain，**false** 表示对象存储 URL 不是 S3 兼容 URL， 格式为：http(s)://your.domain，后台会自动转换成兼容 S3 格式 URL。

* **加载 trivy plugin**：是否加载 trivy plugin 来支持漏洞扫描。 **true** 表示开启加载，**false** 表示不开启。

* **开启文件查看器**：是否允许通过浏览器查看或者下载日志等文件，默认为 **true** 表示开启（允许）。

* **文件查看器用户名**及**文件查看器密码**：文件查看所需的登录用户名及密码。

### 第5步：用户协议

阅读[《云平台 AppCenter 用户协议》](https://pek3a.qingstor.com/appcenter-docs/terms/qingcloud-appcenter-user-terms.pdf)并勾选确认接受该协议。

点击**提交**，开始创建 Harbor 集群所需资源。

### 完成部署

待所有节点的**服务状态**显示为**正常**时， 表示节点已启动正常， Harbor 集群创建完成。

Habor 集群包含了：主服务节点、缓存节点、数据库节点、任务节点、日志节点及存储节点。

![harbor-use-console-cluster-info](/container/harbor/_images/harbor-use-console-cluster-info.png)

