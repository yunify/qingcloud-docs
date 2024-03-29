---
title: "签名认证"
description: 介绍 API 签名方法。 
keyword: 公网 IP API, API 签名, API 密钥
draft: false
weight: 30
---

本小节主要介绍 API 请求中签名 ( signature ) 的生成方法。

## 1. 获取 Access Key

青云云点播通过使用 Access Key 对称加密的方法来验证请求者的身份。 如果用户想以个人身份请求云点播服务，首先需要拥有一对 Access key，包括 `Access Key ID` 和 `Secret Access Key`，其中 `Secret Access Key` 在签名的时候会用到，需要保密。Access Key 申请方法如下：

1. 登录管理控制台，在顶部右上角菜单栏中，将鼠标移到用户名上，选择**API密钥**，进入 API 密钥主页面。

   ![](../../../_images/api_get_1.png)

2. 点击**创建**，输入 API 名称，点击**提交**，弹出 API 密钥的私钥下载窗口。

   > **说明**
   >
   > API 密钥下载链接，自创建 10 分钟后失效。请及时下载并保存。

3. 点击**下载**。

4. 打开下载的文件，便可以获取到 `Access Key ID` 和 `Secret Access Key`。

## 2. 构建签名串

**构建 String To Sign：**

```
string_to_sign = Verb + "\n"
              + Content-MD5 + "\n"
              + Content-Type + "\n"
              + Date + "\n"
              + Canonicalized Resource
```

- Verb：HTTP 请求方法，包括 POST、GET、PUT、DELETE 等。
- `Content-MD5`：请求内容数据的 MD5 值，和请求头里的字段值保持一致，若请求头没有这个参数，保留空白行。
- `Content-Type`：请求内容的类型，和请求头里的字段值保持一致，若请求头没有这个参数，保留空白行。
- `Date`：此次请求的时间，需要符合 HTTP 规定的 GMT 格式。
- `Canonicalized Resource`：请求访问的资源。构建方式参考[构建 Canonicalized Resource](/storage/object-storage/api/practices/signature/#构建-canonicalized-resource)。

**签名串示例：**

```
POST
4gJE4saaMU4BqNR0kLY+lw==
application/json Wed, 10 Dec 2014 17:20:31 GMT /api/v1/media/12345678 
```

## 3. 计算签名 Signature

假设经过前文步骤得到的签名串为 `string_to_sign`，接下来的步骤是对签名串进行签名。

1. 将 API 密钥的私钥 (secret_access_key) 作为 key，使用 Hmac sha256 算法给签名串生成签名：。

   ```
   import hmac
   from hashlib import sha256
   
   h = hmac.new(secret_access_key, digestmod=sha256)
   h.update(string_to_sign)
   ```

2. 将签名进行 Base64 编码。

   ```
   import base64
      
   sign = base64.b64encode(h.digest()).strip()
   ```

## 4. 添加签名 Authorization

**添加 HTTP 请求头：**

```
Authorization: QVOD <access_key_id>:<signature>
```

**请求头示例：**

```
Authorization: QVOD PLLZOBTTZXGBNOWUFHZZ:tuXu/KcggHWPAfEmraUHDwEUdiIPSXVRsO+T2rxomBQ=
```
