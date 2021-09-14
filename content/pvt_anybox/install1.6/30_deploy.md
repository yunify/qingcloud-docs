---
title: "创建 ANYBOX"
description: 创建 ANYBOX
keyword: 青云,anybox,创建ANYBOX
weight: 20
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

1. 选择已创建的 API 密钥。

   ANYBOX 需要 API 密钥来调用 QingCloud 对象存储 API。请在控制台生成 API 密钥。

2. 选择前置负载均衡器协议。

   前置负载均衡器协议，此选项是为使用https访问准备的。

   如果您想使用https访问部署好的anybox，这个选项可以设置为https。然后在控制台增加一个负载均衡器，并且配置好https证书，做好443–80端口的转发。

   如无以上需求, 保持默认值http即可。

3. 配置对象存储域名。

<img src="../../_images/install_env_set.png" style="zoom:50%;" />

## 步骤六：用户协议

请阅读并勾选用户协议。

<img src="../../_images/install_user_set.png" style="zoom:50%;" />

## 步骤七：提交

点击**提交**，完成ANYBOX部署。
