---
title: "创建 ANYBOX"
description: 创建 ANYBOX
keyword: 青云,anybox,创建 ANYBOX
weight: 30
draft: false
---

## 步骤一：部署 ANYBOX

1. 进入 [ANYBOX 内容协作平台](https://appcenter.qingcloud.com/apps/app-m2cz7dcs/ANYBOX%20%E5%86%85%E5%AE%B9%E5%8D%8F%E4%BD%9C%E5%B9%B3%E5%8F%B0)。

2. 点击**立即部署**，弹出 **ANYBOX 内容协作平台**窗口。

   <img src="../../_images/install_depoy_area.png" style="zoom:50%;" />

3. 选择待部署的区域，进入 **AppCenter 控制台** > **应用中心** > **应用部署**页面。

   创建 ANYBOX 时，您需要选择平台部署所在的区域（就近选择即可）。

   <img src="../../_images/install_app_deploy.png" style="zoom:50%;" />

## 步骤二：基本设置

在创建界面中，需要填写名称 (可选)，以及选择计费方式，推荐选择按月计费。

<img src="../../_images/install_basic_set.png" style="zoom:50%;" />

## 步骤三：主节点设置

您可根据自身需求（企业中使用人数）选择配置主节点，请根据需要选择 ANYBOX 主节点的 CPU、内存、主机资源类型和磁盘资源类型、磁盘空间。

资源配置推荐：

- 默认最低配置推荐：100人及以下 4核8G，100以上选用 8核16G 。
- 主机资源类型推荐：基础型
- 磁盘资源类型推荐：基础型
- 磁盘空间：50GB

<img src="../../_images/install_main_set.png" style="zoom:50%;" />

## 步骤四：网络设置

选择集群主机所在的私有网络，私有网络需要在创建集群前准备好。

<img src="../../_images/install_network_set.png" style="zoom:50%;" />

## 步骤五：服务环境参数设置

1. 为了更好地方便您使用 ANYBOX 内容协作平台，需要您填写 ANYBOX 访问的相关域名。

   主域名：访问 ANYBOX 的入口域名（例如： `anybox.com`）

   Account 服务域名：登陆时使用的域名（例如： `account.anybox.com`）

   控制台域名：进入管理控制台的域名（例如： `admin.anybox.com`）

   API 服务域名：内部及 APP 使用（例如：`api.anybox.com`）

2. 因为通过公网访问 ANYBOX 服务，因国家法规规定需要使用已备案的域名，也可以使用二级/三级子域名（是在主域名的前面添加自定义名称）。

   示例说明：

   例如域名：`dns-example.com`。

   `dns-example.com` 是主域名（也可称托管一级域名），主要指企页名。

   `example.dns-example.com` 是子域名（也可称为托管二级域名）。

   `www.example.dns-example.com` 是子域名的子域（也可称为托管三级域名）。

3. 将准备好的备案域名解析到申请好的公网 IP 地址上。 以上4个域名用户可以定制，但是主域名必须一致，域名确定后无法修改。

   <img src="../../_images/install_env_set.png" style="zoom:50%;" />

4. ANYBOX 需要 API 密钥来调用 QingCloud 对象存储 API，请在控制台生成 API 密钥。

5. 前置负载均衡器协议，此选项是为使用https访问准备。

   若您想使用 HTTPS 访问部署好的 ANYBOX，这个选项可以设置为 HT TPS。

   在控制台增加一个负载均衡器, 并且配置好 HTTPS 证书，做好443–80端口的转发。具体负载均衡器的配置请参考相关文档。

   如无以上需求, 保持默认值 HTTP 即可。

## 步骤六：用户协议

请阅读并勾选用户协议。

<img src="../../_images/install_user_set.png" style="zoom:50%;" />

## 步骤七：提交

点击**提交**，完成ANYBOX部署。

当 ANYBOX 创建完成之后，您可以查看每个节点的运行状态。当节点的服务状态显示为**正常**状态，表示该节点启动正常。 

当每个节点都启动正常后 ANYBOX 主节点显示为**活跃**状态，表示您已经可以正常使用 ANYBOX 服务了。

<img src="../../_images/install_user_success.png" style="zoom:50%;" />

