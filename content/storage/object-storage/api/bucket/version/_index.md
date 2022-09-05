---
title: "版本管理（Versioning）"
description: 本小节主要介绍版本管理接口相关内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor, Bucket
---

该 API 接口用于对象存储的版本管理相关操作。

## Bucket 相关操作

- [PUT Bucket Version](put_version/)
- [GET Bucket Version](get_version/)
- [List Object Version](list_object_version/)

## Object 相关操作


### GET Object

若用户需要获取指定版本号的 Object 的元数据以及其数据实体，可以使用 [GET Object](../../object/basic_opt/get/) 接口，并在 URL 中携带如下参数：

| 参数 |  说明 |
| --- | --- |
| version_id | Object 的版本号 |

此操作要求调用者对 Bucket 拥有可读权限。若指定的版本已删除，则返回 404 或 405。

除 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header) 外，QingStor 对象存储服务端还会返回如下头字段：

| 头字段 | 类型 | 说明 |
| --- | --- | --- |
| x-qs-version-id | String | 开启版本管理功能后，QingStor 对象存储为每一个上传成功的 Object 生成并返回的唯一 `Version ID`。|
| x-qs-delete-marker | String | 获取的 Object 版本是否携带删除标记。当为 `false` 时，不返回该字段。|


### PUT Object

用户上传 Object 时，可以使用 [PUT Object](../../object/basic_opt/put/) 接口。

除 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header) 外，QingStor 对象存储服务端还会返回如下头字段：

| 头字段 | 类型 | 说明 |
| --- | --- | --- |
| x-qs-version-id | String | 开启版本管理功能后，QingStor 对象存储为每一个上传成功的 Object 生成并返回的唯一 `Version ID`。|

### PUT Object - Copy

Bucket 开启版本管理功能后，存储于该 Bucket 中的 Object 的所有版本都将被保留。用户可以通过 [PUT Object - Copy](../../object/basic_opt/copy/) 接口恢复 Object 的内容至指定的任一历史版本，使其成为当前版本。

调用该接口时，需在 `x-qs-copy-source` 头字段中，追加 `?version_id=xxx` 指定待恢复的具体版本。

**请求示例：**

```http
PUT /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
x-qs-copy-source: /mybucket/myphoto.jpg?version_id=xxx 
Authorization: authorization string


```



### HEAD Object

用户如需获取指定版本号的 Object 的元数据，可使用 [HEAD Object](../../object/basic_opt/head/) 接口，并在 URL 中携带如下参数：

| 参数 |  说明 |
| --- | --- |
| version_id | Object 的版本号 |

若指定的版本已删除，则返回 404 或 405。此操作要求调用者对 Bucket 拥有可读权限。

### DELETE Object

用户如需删除指定版本的 Object，可使用 [DELETE Object](../../object/basic_opt/delete/) 接口，并在 URL 中携带如下参数：

| 参数 |  说明 |
| --- | --- |
| version_id | Object 的版本号 |

被删除的历史数据将永久删除。



