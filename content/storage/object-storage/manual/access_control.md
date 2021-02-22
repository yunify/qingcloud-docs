---
title: "访问控制"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 5
---

QingStor 通过请求中的[签名串](../../api/signature/) 来验证用户身份, 签名串中的 access key (API key) 需要用户事先从控制台申请并配置到应用程序中。如果没有经过签名的请求我们称做匿名用户。本章主要描述判断了用户身份之后如何进行权限的控制。

QingStor 的访问控制方式有三种：

- Bucket Policy (存储空间策略)
- Bucket ACL (存储空间访问控制列表)
- Bucket CORS (存储空间的跨域资源共享策略)

## 存储空间策略(Bucket Policy)

通过 Bucket Policy，可以向其他青云 QingCloud 用户赋予相应存储空间及其对象的访问权限, 其语义覆盖 API ACL, 及 Resource ACL。
Bucket Policy 对于 QingStor 资源的访问控制粒度介于 Bucket ACL 和 Object ACL(对象访问控制列表，尚未推出) 的一种访问控制方式。Bucket Policy 可以通过细致地指定 API 级别的控制, 实现Bucket ACL 和 Object ACL 所不能实现的一些功能，比如防盗链。

一般情况下通过 Qingstor Console 界面进行[配置](/storage/object-storage/manual/bucket_manage/) 即可, 也支持通过以下 API 来设置。

### 相关API

设置 Bucket Policy [PUT Bucket Policy](/storage/object-storage/api/bucket/policy/put_policy)

获取 Bucket Policy [GET Bucket Policy](/storage/object-storage/api/bucket/policy/get_policy)

删除 Bucket Policy [DELETE Bucket Policy](/storage/object-storage/api/bucket/policy/delete_policy)

## 存储空间访问控制列表(Bucket ACL)

Bucket ACL 对于 QingStor 资源的访问控制粒度比起 Bucket Policy 和 Object ACL 要更大一些，使用起来也更加简单。其所授予被授权者的权限列表仅可为 “READ” (可读), “WRITE” (可写), 或 “FULL_CONTROL” (可读写)。
Bucket 拥有者默认就有所有权限, 另外可配置公开读或公开写(即不附带认证信息的匿名访问), 也可以针对特定青云用户来配置读写权限.

一般情况下通过 Qingstor Console 界面进行[配置](https://docs.qingcloud.com/qingstor/guide/bucket_manage.html#%E4%BF%AE%E6%94%B9-bucket-%E6%9D%83%E9%99%90) 即可, 也支持通过以下 API 来设置.

### 相关API

设置 Bucket ACL [PUT Bucket ACL](/storage/object-storage/api/bucket/acl/put_acl)

获取 Bucket ACL [GET Bucket ACL](/storage/object-storage/api/bucket/acl/get_acl)


## 权限控制匹配顺序和特殊情况

针对每个请求, Bucket Policy 的匹配顺序优先于 Bucket ACL。也就是当 Policy 规则匹配了允许或者拒绝规则就立刻生效, 只有 Policy 中未匹配到规则时, 才检查 ACL 的设置

为了安全考虑, Bucket 创建, 删除, 监控信息等 API 不允许匿名访问. 删除 Bucket, ACL, Policy 等设置类 API 只允许 Bucket 拥有者自己调用。
获取 object 列表默认情况下不允许匿名调用 (无论是否设置公开可读), 需要显式配置 Bucket Policy 指定后才可匿名调用。


## 存储空间的跨域资源共享策略(Bucket CORS)

当您利用 JavaScript AJAX 向 QingStor 发起的请求属于跨源请求时, 默认情况下浏览器为了安全考虑, 不允许调用不同域名下的资源 (因为您的网站域名跟 Qingstor的域名不一样), 这种情况下需要为 Bucket 配置 CORS 规则.

Bucket CORS 可以对请求来源的域名和请求头进行控制. 一般情况下通过 Qingstor Console 界面进行[配置](https://docs.qingcloud.com/qingstor/guide/bucket_manage.html#%E8%AE%BE%E7%BD%AE-cors) 即可, 也支持通过 API 来设置.

### 相关API

获取 Bucket CORS [GET Bucket CORS](/storage/object-storage/api/bucket/cors/get_cors) 。

删除 Bucket CORS [DELETE Bucket CORS](/storage/object-storage/api/bucket/cors/delete_cors) 。

浏览器如何发起 OPTIONS 请求 [OPTIONS Object](/storage/object-storage/api/object/options) 。

## 如何授权存储空间或对象操作的请求

Bucket Policy 的优先级高于 Bucket ACL。当某个请求被 Bucket Policy 允许(“allow”) 或拒绝(“deny”)时 ，Bucket ACL 将被忽略; 当该请求未被 Bucket Policy 匹配时， 服务端将继续检查 Bucket ACL 以确定该请求是否该被执行。

假设 Bucket “mybucket” 需要共享给另一个用户, 可以是另一个青云的用户, 也可以用户自己创建的子帐号 (子帐号除了计费归属到主帐号之外, 访问资源的权限会独立于主帐号).

假定被共享访问的用户为 “user-henry”,  设置的 Bucket ACL 和 Bucket Policy 如下:

```json
"ACL"：{"user-henry": "FULL_CONTROL"}
```

```json
"bucket_policy": {
    "statement": [
        {
            "id": "deny user-henry deleting object from this bucket",
            "user": "user-henry",
            "action": "delete_object",
            "effect": "deny",
            "resource": ["mybucket/*"]
        }
    ],
}
```

即使用户 user-henry 拥有对 “mubucket” 的可读写权，但因为 Bucket Policy 禁止其 删除 “mybucket” 下的所有 Object, 所以 user-henry 对 “mybucket” 发起的 Object 删除操作都将被拒绝。

## Bucket Policy的应用

可以利用 Bucket Policy 中的 condition 实现一些条件访问控制，比如防盗链。

condition的详细介绍请参见 [Bucket Policy Condition](/storage/object-storage/api/bucket/policy/policy_condition)

### 防盗链白名单示例


> 此防盗链规则生效的前提为 Bucket ACL 中未设置公开的读权限。

```json
"bucket_policy": {
    "statement": [
        {
            "id": "allow example1.com to get object from this bucket",
            "user": "*",
            "action": "get_object",
            "effect": "allow",
            "resource": ["mybucket/*"],
            "condition": {
                "string_like": {"Referer": "*.example1.com"},
                "string_not_like": {"Referer": "*.service.example1.com"}
            }
        }
    ]
}
```

其中 `*.example1.com` 为域名白名单。

### 防盗链黑名单示例

```json
"bucket_policy": {
    "statement": [
        {
            "id": "deny example2.com getting object",
            "user": "*",
            "action": "get_object",
            "effect": "deny",
            "resource": ["mybucket/*"],
            "condition": {
                "string_like": {"Referer": "*.example2.com"}
            }
        }
    ]
}
```

其中 `"*.example2.com` 为域名黑名单。


