---
title: "数据访问权限"
date: 2021-07-14T10:08:56+09:00
description: 本小节主要介绍数据访问权限相关内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
draft: false
weight: 2
---

QingStor 对象存储通过请求中的 `签名串` 来验证用户身份。签名串中的 Access Key 需要用户事先从 [青云控制台](https://console.qingcloud.com/login) 申请并配置到应用程序中。如果用户发送没有经过签名的请求至 QingStor 对象存储，我们称之为匿名用户。

本文主要介绍，通过了用户身份验证后的请求，该如何对其进行访问权限的控制。QingStor 对象存储的数据访问权限控制方式有三种：

- Bucket Policy (存储空间策略)
- Bucket ACL (存储空间访问控制)
- CORS (跨源资源共享)

## 使用说明
 - 针对每个请求，Bucket Policy 的匹配顺序优先于 Bucket ACL。即：当 Policy 规则匹配了允许或者拒绝后，该 Policy 规则就立刻生效；只有当 Policy 中未匹配到相应规则时，才会继续检查 ACL 的设置。
 - 为了安全考虑，Bucket 创建，删除，监控信息等 API 不允许匿名访问。
 - 删除 Bucket 的 ACL、Policy 等设置类 API 只允许 Bucket 拥有者自己调用。
 - 获取 Object 列表默认情况下不允许匿名调用 (无论是否设置公开可读)，需要显式配置 Bucket Policy 指定后才可匿名调用。

## 存储空间策略(Bucket Policy)

### 功能介绍

Bucket Policy 对于储存于 QingStor 对象存储的资源的访问权限控制粒度介于 Bucket ACL 和 Object ACL (对象访问控制，尚未推出) 之间。Bucket Policy 可以通过指定 API 级别的控制，从而实现 Bucket ACL 和 Object ACL 所不能实现的一些功能，比如防盗链。
通过设置 Bucket Policy，可以向其他青云 QingCloud 用户赋予相应 Bucket 及其对象的访问权限。

详细操作步骤如下：

### 操作步骤
1. 进入 QingStor 对象存储的主页面，选择待设置 Policy 的 Bucket，点击 **右键** > **设置**：

 ![](/storage/object-storage/_images/set_bucket_policy1.png)

2. 进入 Bucket 设置页面，点击 **存储空间策略** > **添加规则**：

 ![](/storage/object-storage/_images/set_bucket_policy2.png)

3. 在弹出的对话框内，根据页面提示信息，填写相关参数后，点击 **保存** 按钮：

 ![](/storage/object-storage/_images/set_bucket_policy3.png)

 **说明：**
   - **操作：** 指定该 Bucket 策略支持的 API 操作。
   - **资源：** 指定该 Bucket 策略生效的资源范围。
      - 缺省时，说明该规则对 Bucket 列表页的所有 Bucket 生效；
      - 以 `<bucket-name>/` 为前缀，说明该规则仅对 `<bucket-name>/` 所指定的 Bucket 内相应资源生效；
      - 若需针对指定 Bucket 内所有资源生效，需填写 `<bucket-name>/*`。
   - **响应动作：** 当策略成功匹配用户的请求时，是允许还是拒绝该请求。
   - **Referer：** 指定请求的 `Referer` 头中，是否匹配该设置。也可指定请求的 `Referer` 头是否为空。
   - **IP：** 指定请求来源的 IP 地址是否在此 IP 地址范围内。详细设置可参考：[CIDR 的 IP 地址](/storage/object-storage/faq/cidr_ip/)

4. 成功创建的存储空间策略，列表显示：

 ![](/storage/object-storage/_images/set_bucket_policy4.png)

### 相关API

|操作|API|说明|
|--|--|--|
|设置 Bucket Policy|[PUT Bucket Policy](/storage/object-storage/api/bucket/policy/put_policy)|用于设置存储空间策略|
|获取 Bucket Policy|[GET Bucket Policy](/storage/object-storage/api/bucket/policy/get_policy)|用于获取已有的存储空间策略|
|删除 Bucket Policy|[DELETE Bucket Policy](/storage/object-storage/api/bucket/policy/delete_policy)|用于删除已经设置的存储空间策略|
 

## 存储空间访问控制(Bucket ACL)

### 功能介绍

相较于 Bucket Policy 和 Object ACL，Bucket ACL 对 QingStor 对象存储的资源访问权限控制粒度要更大一些，是基于存储空间的访问权限设置。被授权者的权限列表仅可为 `可读`，`可写`，或 `可读写`。使用起来也更加简单。

Bucket 拥有者默认拥有所有权限，另外用户可将该存储空间配置为公开可读或公开可写（即不附带认证信息的匿名访问），也可以针对特定青云用户来配置读写权限。

### 操作步骤
1. 进入 QingStor 对象存储的主页面，选择待设置访问控制的 Bucket，点击 **右键** > **设置**：

 ![](/storage/object-storage/_images/set_bucket_acl1.png)

2. 进入 Bucket 设置页面，点击 **访问控制** > **添加用户**：

 ![](/storage/object-storage/_images/set_bucket_acl2.png)

3. 在弹出的对话框内，根据需求，填写相关参数后，点击 **提交** 按钮：

 ![](/storage/object-storage/_images/set_bucket_acl3.png)

 **说明：**
   - 若需将相应的权限开放给所有人，即允许匿名访问，可以选择 **所有用户** 。
   - 若需将相应的权限开放给指定的用户，则在用户输入框输入指定的青云 QingCloud 用户 ID 或用户邮箱。


### 相关API
|操作|API|说明|
|--|--|--|
|设置 Bucket ACL|[PUT Bucket ACL](/storage/object-storage/api/bucket/acl/put_acl)|用于设置存储空间访问控制|
|获取 Bucket ACL|[GET Bucket ACL](/storage/object-storage/api/bucket/acl/get_acl)|用于获取已有的存储空间访问控制|


## 跨源资源共享(CORS)

### 功能介绍

当您利用 JavaScript AJAX 向 QingStor 对象存储发起的请求属于跨源请求时，默认情况下浏览器为了安全考虑，会拒绝该请求。因为浏览器默认不允许调用不同域名下的资源 (因为您的网站域名跟 Qingstor 对象存储的域名不一样)。这种情况下需要为 Bucket 配置 CORS 规则.

CORS 可以对请求来源的域名和请求头进行控制。详细操作如下：

### 操作步骤
1. 进入 QingStor 对象存储的主页面，选择待设置 CORS 的 Bucket，点击 **右键** > **设置**：

 ![](/storage/object-storage/_images/set_bucket_cors1.png)

2. 进入 Bucket 设置页面，点击 **CORS** > **添加请求源**：

 ![](/storage/object-storage/_images/set_bucket_cors2.png)

3. 在弹出的对话框内，根据页面提示，填写相关参数后，点击 **提交** 按钮：

 ![](/storage/object-storage/_images/set_bucket_cors3.png)

4. 用户也可通过点击 **导入请求源**，将其他 Bucket 已设置的 CORS 源，导入当前 Bucket 中：

 ![](/storage/object-storage/_images/set_bucket_cors4.png)

5. 在弹出的对话框内，选择源 Bucket 与源冲突时的解决方式后，点击 **提交** 按钮：

 ![](/storage/object-storage/_images/set_bucket_cors5.png)

6. 当成功创建 CORS 规则后，用户可根据需求，选择是否 **开启 Vary：Origin** 参数：

 ![](/storage/object-storage/_images/set_bucket_cors6.png)

7. 在弹出的对话框内，确认操作无误后，点击 **确认** 按钮：

 ![](/storage/object-storage/_images/set_bucket_cors7.png)


### 相关API

|操作|API|说明|
|--|--|--|
|获取 CORS|[GET CORS](/storage/object-storage/api/bucket/cors/get_cors)|用于获取已设置的 CORS|
|设置 CORS|[PUT CORS](/storage/object-storage/api/bucket/cors/put_cors)|用于设置 CORS|
|删除 CORS|[DELETE CORS](/storage/object-storage/api/bucket/cors/delete_cors)|用于删除已设置的 CORS|
