---
title: "用户管理"
description: 
draft: true
weight: 40
---

您可以通过 IAM 用户设定访问方式。

## 创建用户

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **访问鉴权管理** > **用户**，进入域名列表页。

2. 在列表页点击**创建用户**，创建新的IAM 用户。

    <img src="../../_images/user1.png" alt="图片" style="zoom:20%;" />

3. 输入用户名称，选择访问方式等信息。

    <img src="../../_images/user2.png" alt="图片" style="zoom:30%;" />

4. 创建完成。

    <img src="../../_images/user3.png" alt="图片" style="zoom:25%;" />

## 编辑用户

您可以对创建成功的用户进行编辑。

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **访问鉴权管理** > **用户**，进入域名列表页。

2. 在列表页选择需要编辑的用户，点击**编辑**。

   <img src="../../_images/user4.png" alt="图片" style="zoom:20%;" />	

3. 输入需要修改的用户名称。

   <img src="../../_images/user5.png" style="zoom:45%;" />

## 删除用户

您可以删除不需要的用户。

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **访问鉴权管理** > **用户**，进入域名列表页。

2. 在列表页选择需要删除的用户，点击**删除**。

   <img src="../../_images/user6.png" style="zoom:20%;" />

3. 确认删除的用户。

   <img src="../../_images/user7.png" style="zoom:45%;" />

## 关联策略

您可以将用户与策略进行关联，当 IAM 用户关联了某条策略，则代表该用户具备此策略所定义的权限，并将会在用户使用时根据权限定义启动策略评估。

**方式一：**

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **访问鉴权管理** > **用户**，进入域名列表页。

2. 在列表页选择需要添加策略的用户，点击**策略**。

   <img src="../../_images/user8.png" style="zoom:28%;" />

3. 选择需要关联的策略。

   <img src="../../_images/user9.png" style="zoom:22%;" />

4. 关联成功，查看用户关联的策略。

   <img src="../../_images/user10.png" style="zoom:25%;" />

**方式二：**

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **访问鉴权管理** > **用户**，进入域名列表页。

2. 在列表页选择需要添加策略的用户，点击该用户。

   <img src="../../_images/user11.png" style="zoom:25%;" />

3. 进入用户页面，点击**附加策略**。

   <img src="../../_images/user12.png" style="zoom:25%;" />

4. 选择需要关联的策略。

   <img src="../../_images/user9.png" style="zoom:22%;" />

5. 关联成功，查看用户关联的策略。

   <img src="../../_images/user10.png" style="zoom:25%;" />

## 删除策略

您可以将用户与关联的策略进行删除，删除后用户不再受到策略权限的限制。

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **访问鉴权管理** > **用户**，进入域名列表页。

2. 在列表页选择需要删除策略的用户，点击该用户。

   <img src="../../_images/user11.png" style="zoom:25%;" />

3. 选择需要删除的策略，点击**移除策略**。

   <img src="../../_images/user13.png" style="zoom:25%;" />

4. 确定删除策略。

   <img src="../../_images/user14.png" style="zoom:50%;" />

5. 删除成功。

   <img src="../../_images/user15.png" style="zoom:25%;" />

## 访问方式管理

您可以管理用户的访问方式，进行密码修改，创建新的 access key 等。

### 控制台登陆设置

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **访问鉴权管理** > **用户**，进入域名列表页。

2. 在列表页选择需要修改密码的用户，点击该用户。

   <img src="../../_images/user11.png" style="zoom:20%;" />

3. 进入访问方式管理页面，点击**修改**。

   <img src="../../_images/user16.png" style="zoom:20%;" />

4. 修改控制台信息，可以选择修改用户名称，是否通过控制台访问及控制台密码设置。

   <img src="../../_images/user17.png" style="zoom:40%;" />

### 编程访问设置

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **访问鉴权管理** > **用户**，进入域名列表页。

2. 在列表页选择需要修改密码的用户，点击该用户。

   <img src="../../_images/user11.png" style="zoom:20%;" />

3. 进入编程访问页面，创建新的 Access Key。

   <img src="../../_images/user18.png" style="zoom:20%;" />

4. 点击**创建Access Key**，则新的 Access Key 创建成功。

   <img src="../../_images/user19.png" style="zoom:40%;" />
> 说明：
>如果需要删除Access Key，则直接在该页面点击**删除**即可。
>
> 如果需要禁用某一Access key，则在该页面直接点击**禁用**即可。

