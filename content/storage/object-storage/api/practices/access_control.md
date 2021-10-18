---
title: "访问控制"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 1
---

QingStor 对象存储通过请求中的 [签名验证](../signature) 信息来验证用户身份。签名验证中的 Access Key，需要用户事先从 [控制台申请](/storage/object-storage/api/practices/signature/#获取-access-key) 并配置到应用程序中。没有经过签名的请求 QingStor 对象存储称之为匿名用户。本章主要介绍经过 QingStor 对象存储验证用户身份之后如何进行权限的控制。

QingStor 对象存储的访问控制方式有三种：

- Bucket Policy (Bucket 策略)
- Bucket ACL (Bucket 访问控制列表)
- Bucket CORS (Bucket 的跨域资源共享策略)

## 存储空间策略(Bucket Policy)

通过 Bucket Policy，用户可以向其他青云 QingCloud 用户赋予 QingStor 对象存储相应 Bucket 及其 Object 的访问权限，其语义覆盖 API ACL，Resource ACL。

Bucket Policy 作为一种访问控制方式，其对 QingStor 对象存储资源的访问控制粒度是介于 Bucket ACL 和 Object ACL (尚未推出) 之间的。Bucket Policy 可以细致地指定 API 级别的控制，从而实现 Bucket ACL 和 Object ACL 所不能实现的一些功能，如：[防盗链](/storage/object-storage/beat-practices/policy/)。

一般情况下通过 Qingstor 对象存储的 [Console 界面](/storage/object-storage/manual/console/bucket_manage/access_control/#存储空间策略bucket-policy) 进行配置即可，也支持通过 [API](/storage/object-storage/api/bucket/policy/) 来设置。

用户可以使用 Bucket Policy 中的 Condition 实现一些条件访问控制，比如防盗链。Condition 的详细介绍请参见 [Bucket Policy Condition](../../bucket/policy/put_policy/#condition-说明)


## 存储空间访问控制列表(Bucket ACL)

Bucket ACL 对于 QingStor 对象存储的资源访问控制粒度比起 Bucket Policy 和 Object ACL 要更大一些，使用起来也更加简单。其所授予被授权者的权限列表仅可为 READ (可读)，WRITE (可写)，或 FULL_CONTROL (可读写)。


Bucket 拥有者默认就拥有该 Bucket 的所有权限。当然，用户可以另外配置 Bucket 的公开读或公开写，即不附带认证信息的匿名访问，也可以针对特定青云用户来配置该 Bucket 的读写权限。

一般情况下通过 Qingstor 对象存储的 [Console 界面](../../../manual/console/bucket_manage/access_control/#存储空间访问控制列表bucket-acl) 进行配置即可，也支持通过 [API](../../bucket/acl/) 来设置。


## 权限控制匹配规则

针对每个请求，Bucket Policy 的优先级高于 Bucket ACL。当某个请求被 Bucket Policy 允许或拒绝时，Bucket ACL 将被忽略；当该请求未被 Bucket Policy 匹配时，QingStor 对象存储服务端将继续检查 Bucket ACL 以确定该请求是否该被执行。

为了安全考虑，QingStor 对象存储做出如下规定：
- Bucket 创建，删除，监控信息等 API 不允许匿名访问。
- 删除 Bucket，ACL 以及 Policy 等设置类 API 只允许 Bucket 拥有者自己调用。
- 获取 Object 列表默认情况下不允许匿名调用 (无论是否设置公开可读)，需要显式配置 Bucket Policy 指定后才可匿名调用。


## 存储空间的跨域资源共享策略(Bucket CORS)

当用户使用 JavaScript AJAX 向 QingStor 对象存储发起的请求属于跨源请求时，默认情况下浏览器为了安全考虑，不允许调用不同域名下的资源。因为用户的网站域名跟 Qingstor 对象存储的域名不一致，这种情况下需要为 Bucket 配置 CORS 规则.

Bucket CORS 可以对请求来源的域名和请求头进行控制。

一般情况下通过 Qingstor 对象存储的 [Console 界面](../../../manual/console/bucket_manage/access_control/#存储空间的跨域资源共享策略bucket-cors) 进行配置即可，也支持通过 [API](../../bucket/cors/) 来设置。


## 示例
### 匹配规则示例
假设用户需将 Bucket 共享给另一个用户，这个用户可以是另一个青云 QingCloud 用户，也可以是当前用户创建的子帐号。现对该 Bucket 设置的 Bucket ACL 和 Bucket Policy 规则如下:


- 设置 ACL 为：用户拥有可读写权限
```json
"ACL"：{"user-henry": "FULL_CONTROL"}
```

- 设置 Policy 为：拒绝用户执行删除 Object 的操作
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

如上所示，即使用户 `user-henry` 拥有对 `mybucket` 的可读写权限，但是因为 Bucket Policy 禁止该用户删除 `mybucket` 下的所有 Object，所以 `user-henry` 对 `mybucket` 发起的 Object 删除操作都将被拒绝。

### 防盗链白名单示例

此防盗链规则生效的前提为 Bucket ACL 中未设置公开的读权限。

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

其中 `*.example2.com` 为域名黑名单。


