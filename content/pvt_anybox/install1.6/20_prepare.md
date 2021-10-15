---
title: "准备工作"
description: 准备工作
keyword: 青云,anybox,安装准备工作
weight: 20
draft: false
---

- 为了更好地方便您使用 ANYBOX 内容协作平台，需要准备一个已备案的域名。  如果您的域名还未备案，请参考 [ICP 备案](https://beian.qingcloud.com/icp) 申请备案。

- 为了保障数据安全，ANYBOX  内容协作平台需要运行在受管私有网络中。

  在创建 ANYBOX 内容协作平台之前，需要创建一个 VPC 和一个受管私有网络。

  受管私有网络需要加入VPC，并开启 DHCP 服务（默认开启）。

## 创建 VPC

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **网络服务** > **VPC 网络**，进入 **VPC 网络**页面。

3. 点击**创建 VPC 网络**，进入创建 VPC 网络页面。

   <img src="../../_images/install_create_vpc.png" style="zoom:50%;" />

4. 请根据实际情况配置 VPC 网络的参数。

5. 点击**立即创建**，创建 VPC 网络。

## 创建私有网络

创建 VPC 时会自动创建一个初始私有网络。

若您需要创建私有网络，详细的操作步骤如下所示。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **网络服务** > **私有网络**，进入 **私有网络**页面。

3. 点击**创建**，进入创建私有网络页面。

   <img src="../../_images/install_create_privatenet.png" style="zoom:50%;" />

4. 请根据实际情况配置私有网络的参数。

5. 点击**提交**，创建私有网络。

## 创建 API 密钥

1. 点击右上角的账号名，弹出账户相关的功能。

   <img src="../../_images/install_account_list.png" style="zoom:50%;" />

2. 点击 **API 密钥**，进入 **API 密钥**页面。

   <img src="../../_images/install_api_page.png" style="zoom:50%;" />

3. 点击**创建**，弹出**创建 API 密钥**窗口。

   <img src="../../_images/install_create_api.png" style="zoom:50%;" />

4. 配置相关参数后，点击**提交**，弹出下载 API 密钥的私钥窗口。

5. 点击**下载**，将私钥保存在本地。

   > **注意：**
   >
   > 为了保障您的安全，这是获取API私钥的唯一途径，请及时下载并妥善保管您的私钥。

