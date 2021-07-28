---
title: "用户管理"
description: 
draft: true
weight: 40
---

### 用户

IAM用户是一个身份实体，它通常代表您的组织中需要访问云资源的人员或应用程序。

通过用户您可以设定访问 QingCloud 资源的访问方式，可以通过控制台或者编程进行访问。

如何创建和使用用户，请参阅：IAM 用户

您可以通过 IAM 用户设定访问方式。

> 注：
>
> 策略评估时**多条策略叠加取并集**，并**默认拒绝**未定义任何权限的操作；
>
> 若叠加的策略中针对同一操作定义了不同结论，则**拒绝优先**。

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

### 控制台密码修改

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **访问鉴权管理** > **用户**，进入域名列表页。

2. 在列表页选择需要修改密码的用户，点击该用户。

   <img src="../../_images/user11.png" style="zoom:25%;" />

3. 进入访问方式管理页面，点击**修改**。

   <img src="../../_images/user16.png" style="zoom:25%;" />

   
