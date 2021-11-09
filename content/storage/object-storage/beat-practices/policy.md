---
title: "Bucket Policy 白名单和黑名单使用实例"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 10
---

ACL 提供了 Bucket 级别的读写权限设置，包括可读、可写和可读写。用户可以将不同的访问权限分别授予不同的青云用户，也可以选择所有用户整体设置。Bucket Policy 允许用户更细粒度的控制 Bucket 的访问。其语义主要由用户、 资源、动作及条件运算符组合定义。例如仅允许指定用户以指定站点为 Referer 以下载 Bucket 中的某单个 Object，或者防止外链等。

ACL 过于广域，对于一些更细粒度的控制无法实现，需要用 Policy 来实现访问控制。

以下是 Policy 规则分别使用白名单和黑名单实现相同结果的两个案例，从案例中熟悉 Policy 黑白名单的使用。最终实现的效果都是一样，即头字段里的 `referer` 必须匹配 `*.baidu.com`，才能允许访问。详细操作如下：

## 案例一：ACL无任何规则

1. 进入 **访问控制** 设置页面，清除所有 ACL 规则，详细操作可参考 [Bucket ACL](/storage/object-storage/manual/console/bucket_manage/access_control/#存储空间访问控制列表bucket-acl)：

![](/storage/object-storage/_images/policy1.png)

2. 进入 **存储空间策略** 设置页面，创建规则，设置 Referer 匹配 `*.baidu.com` 访问，也就是设置访问白名单。详细操作可参考 [Bucket Policy](/storage/object-storage/manual/console/bucket_manage/access_control/#存储空间策略bucket-policy)：

![](/storage/object-storage/_images/policy2.png)

3. 测试结果如下，直接 curl 访问提示无权限，添加 `--referer` 参数，指定 `www.baidu.com` 之后可以正常访问:

![](/storage/object-storage/_images/policy3.png)



可见，ACL 不做任何规则限制，此时默认都无权访问，但是由于 Policy 优先级更高，可以直接越过 ACL 的限制。



## 案例二：ACL限制所有人可读

1. 进入 **访问控制** 设置页面，添加所有用户可读的 ACL 规则，详细操作可参考 [Bucket ACL](/storage/object-storage/manual/console/bucket_manage/access_control/#存储空间访问控制列表bucket-acl)：

![](/storage/object-storage/_images/policy4.png)

2. 进入 **存储空间策略** 设置页面，创建规则，设置 Referer 不匹配 `*.baidu.com` 访问，也就是添加访问黑名单。详细操作可参考 [Bucket Policy](/storage/object-storage/manual/console/bucket_manage/access_control/#存储空间策略bucket-policy)：

![](/storage/object-storage/_images/policy5.png)

3. 测试结果如下，直接 curl 访问提示无权限，添加 `--referer` 参数，指定 `www.baidu.com` 之后可以正常访问:

![](/storage/object-storage/_images/policy6.png)


可见，实现的结果和 **案例一** 是一致的。

