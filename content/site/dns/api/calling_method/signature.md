---
title: "签名方法"
weight: 10
draft: false
enableToc: false
keyword: QingCloud，DNS API，Access Key，密钥，签名方法
---

本文介绍 API 请求中签名（署名）的生成方法。

## 1. 获取 Access Key

QingDNS 通过使用 Access Key 对称加密的方法来验证请求者的身份。
如果用户想以个人身份请求 QingDNS 服务，首先需要拥有一对 Access key，包括 Access Key ID 和 Secret Access Key，其中 Secret Access Key 在签名的时候会用到，需要保密。

Access Key 申请在青云控制台右上角用户中心菜单栏中，选择 **API 密钥** > **创建**。

## 2. 构建签名串

**构建 String To Sign：**


    string_to_sign = Verb + "\n"
                  + Date + "\n"
                  + Canonicalized Resource

* Verb 是 HTTP Method，包括 GET PUT DELETE OPTIONS 等
* Date 表示此次请求的时间，需要是 HTTP 规范的 GMT 格式
* Canonicalized Resource 是请求访问的资源

**签名串示例：**


    GET\n
    Wed, 10 Dec 2014 17:20:31 GMT\n
    /v1/user/zones

**构建 Canonicalized Resource：**

 - 默认为请求的资源，如 /v1/user/zones 。
 - 如果请求包含查询字符串（query string）则将查询参数 key 按照字母顺序排列，并用 & 连接，拼接到字符串的最后。

## 3. 计算签名 Signature

1. 将API密钥的私钥 (secret_access_key) 作为 key，生成被签名串的 HMAC-SHA256 签名。

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

    Authorization: QC-HMAC-SHA256 <access_key_id>:<signature>

**请求头示例：**

    Authorization: QC-HMAC-SHA256 PLLZOBTTZXGBNOWUFHZZ:tuXu/KcggHWPAfEmraUHDwEUdiIPSXVRsO+T2rxomBQ=

