---
title: "错误信息"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 4
---


在请求返回的结果中，消息头中的 HTTP 状态码：Status Code，会表明请求处理完成后的状态，它符合 HTTP 规范所规定的语义。当错误发生时，请求返回的消息体会以 json 格式返回具体的错误信息。

## 错误码列表

| 错误代码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| invalid_access_key_id | 请求中的 Access Key 不正确或不存在 |401 |
| invalid_range |  请求头中的 `Range` 不符合规则。具体规则可参考公共字段中 [Range](../common_header/#range) 的定义 |416 |
| request_expired |  请求头中 `Date` 或 `x-qs-date` 与服务端本地时间差大于 15 分钟|403 |
| signature_not_matched | 请求中的签名不匹配 | 401 |
| invalid_argument | 请求中存在非法的参数值 | 400 |
| bad_digest | 请求头中携带的 `Content-MD5` 与服务端根据实际接收到的数据所计算出的 `MD5` 值不匹配 | 400 |
| permission_denied | 没有权限执行此次请求 | 403 |
| bucket_already_exists | 创建 Bucket时，Bucket 已存在| 409 |
| bucket_not_exists | 访问的 Bucket 不存在 | 404 |
| object_not_exists | 访问的 Object 不存在 | 404 |
| invalid_bucket_name | 创建 Bucket 时，指定的 Bucket 名称不符合规则 | 400 |
| too_many_buckets | 创建 Bucket 时，超出限额。可通过工单提高额度 | 403 |
| bucket_not_empty | 删除非空的 Bucket  | 409 |
| bucket_not_active | 访问的 Bucket 状态不为活跃状态 | 403 |
| lease_not_ready |  Bucket 租赁信息未准备好 | 403 |
| method_not_allowed | 请求中指定的 `method` 不被允许 | 405 |
| invalid_request | 请求中的消息体不符合规定 | 400 |
| invalid_location | 请求头中携带的区域信息不存在 | 400 |
| max_requests_exceeded | 创建和删除 Bucket 的请求过于频繁 | 400 |
| precondition_failed | 请求的 Header 中某些先决条件不满足 | 412 |
| invalid_object_state | 当前 Object 状态不支持此次操作 | 400 |
| invalid_object_name | Object 名称不符合规则 | 400 |
| entity_too_small | 分段上传时，Object 的分段大小小于 4M | 400 |
| entity_too_large | 单个 Object 上传和使用分段上传时，Object 的大小或一个分段的大小大于 5G | 400 |
| max_parts_exceeded | 分段上传时，分段数量超过最大分段量数 1000 | 400 |
| upload_not_exists | 分段上传时，请求中携带的 `upload id` 不存在 | 400 |
| account_problem | 账号异常| 403 |
| delinquent_account | 账号欠费 | 402 |
| invalid_json | 请求消息体的 json 格式错误 | 400 |
| access_denied | 请求被拒绝 | 400 |
| incomplete_body | 请求消息体不完整 | 400 |
| form_policy_violated | 表单内容与策略不相符 | 400 |
| cname_error | CNAME 设置错误 | 400 |
| too_many_objects | 操作包含的 Object 数量过多 | 400 |
| fetch_in_process |调用 Fetch Object API 时，有相同源链接的 Fetch 请求正在进行中，或被动触发的外部镜像功能正在抓取该源链接对应的文件 | 409 |
| metadata_too_large | 自定义元数据总大小超过限制 2 KB 或键的长度，不含前缀 `x-qs-meta-`，超过 512 字节| 400 |
| fetch_throttled | 服务端正在处理过多的抓取请求。包括 Fetch 请求从源链接抓取或外部镜像从源站抓取 | 429 |
| internal_error | QingStor 对象存储系统内部错误，请稍后重试 | 500 |
| service_unavailable | QingStor 对象存储系统临时不可用，请稍后重试 | 503 |
| upstream_failed | 无法与 Fetch 请求的源链接或者外部镜像的源站建立链接，或源站服务器返回 200，3xx，404 范围之外的错误代码，或链接中断| 503 |

**说明**
- 分段上传时，QingStor 对象存储对 Object 的一个分段大小做出了限制。最小为 4M，最大为 5G。
- 单个 Object 上传时，QingStor 对象存储对其上限做出了限制，最大为 5G。
- 自定义元数据是指所有前缀为 `x-qs-meta-` 的键值对。计算自定义元数据大小时，不含前缀 `x-qs-meta-`。


## 错误返回格式

当错误发生时，请求返回的消息体会以 json 格式返回具体的错误信息。如下所示：

```json
{
  "code": "bad_request",
  "message": "Invalid argument(s) or invalid argument value(s)",
  "request_id": "aa08cf7a43f611e5",
  "url": "http://docs.qingcloud.com/qingstor/api/error_code.html"
}
```

**各字段说明**
| 参数名 | 解释 |
| --- | --- |
| code | 错误码 |
| message | 详细错误信息 |
| request_id | 服务端为该次错误请求生成的唯一标示。QingStor 对象存储研发通过该 ID，能更快定位问题。 |
| url | 指向相关帮助文档 |


