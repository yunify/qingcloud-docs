---
title: "错误信息"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 1
---

# 错误信息

在请求返回的结果中，HTTP 状态码(status code)会表明处理完成后的状态，它符合 HTTP 规范所规定的语义。除此以外，当错误发生时，消息体以 json 格式返回具体的错误信息。

## 错误码

### 错误码列表

| 错误代码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| invalid_access_key_id | 当 access key 不正确或不存在时，返回此错误 | 401 |
| invalid_range | 当请求头 `Range` 不符合规则时，返回此错误，具体规则可参考 [请求头字段 (Request Header)](common_header.html#请求头字段-request-header) 中 `Range` 的定义 | 416 |
| request_expired | 当请求头中 `Date` 或 `x-qs-date` 与服务端本地时间相差大于 15 分钟时，返回此错误 | 403 |
| signature_not_matched | 当请求的签名不匹配时，返回此错误 | 401 |
| invalid_argument | 当请求中的参数值非法时，返回此错误 | 400 |
| bad_digest | 当发送的 `Content-MD5` 请求头与服务端实际接收到的数据所计算出的 `MD5` 值不匹配时，返回此错误 | 400 |
| permission_denied | 当没有权限执行此次请求时，返回此错误 | 403 |
| bucket_already_exists | 当创建的 bucket 已存在时，返回此错误 | 409 |
| bucket_not_exists | 当访问的 bucket 不存在时，返回此错误 | 404 |
| object_not_exists | 当访问的 object 不存在时，返回此错误 | 404 |
| invalid_bucket_name | 当创建的 bucket 名称非法时，返回此错误 | 400 |
| too_many_buckets | 当你创建的 bucket 超出限额时，返回此错误，可通过工单提高额度 | 403 |
| bucket_not_empty | 当删除一个非空的 bucket 时，返回此错误 | 409 |
| bucket_not_active | 当访问的 bucket 不是活跃状态时，返回此错误 | 403 |
| lease_not_ready | 当 bucket 租赁信息未准备好时，返回此错误 | 403 |
| method_not_allowed | 当请求的 method 不被允许时，返回此错误 | 405 |
| invalid_request | 当请求中的消息体不符合规定时，返回此错误 | 400 |
| invalid_location | 请求的区域不存在时，返回此错误 | 400 |
| max_requests_exceeded | 当请求创建和删除 bucket 过于频繁时，返回该错误 | 400 |
| precondition_failed | 当请求的 Header 中某些先决条件不满足时，返回此错误 | 412 |
| invalid_object_state | 当 object 目前的状态不能接收此次操作时，返回此错误 | 400 |
| invalid_object_name | 当 object 名称不符合规定时，返回此错误 | 400 |
| entity_too_small | 当分块上传 object 时分块的大小低于『最小块限制』时，返回此错误。目前最小块限制是 4M | 400 |
| entity_too_large | 当 object 数据超出最大限制时，返回此错误。目前最大限制是 5G | 400 |
| max_parts_exceeded | 当分块上传 object 时，分块数量过多超出系统最大分块数量，则返回此错误 目前最大分块数量是 1000 | 400 |
| upload_not_exists | 当 upload id 不存在时，返回此错误 | 400 |
| account_problem | 当账号异常时返回此错误，如有疑问请提工单与我们联系 | 403 |
| delinquent_account | 当账号欠费时返回此错误 | 402 |
| invalid_json | 请求消息体的 json 格式错误 | 400 |
| access_denied | 请求被拒绝 | 400 |
| incomplete_body | 请求消息体不完整 | 400 |
| form_policy_violated | 表单内容与策略不相符 | 400 |
| cname_error | CNAME 设置错误 | 400 |
| too_many_objects | 操作包含的 object 数量太大 | 400 |
| fetch_in_process | 调用fetch object API 时，有相同源链接的 fetch 请求正在进行，或者被动触发的外部镜像功能正在抓取该源链接对应的文件 | 409 |
| metadata_too_large | 自定义元数据总大小（所有前缀为 x-qs-meta- 的键值对, 不含前缀）超过限制 2 KB 或键（key）长度（不含前缀 x-qs-meta- ）超过 512 字节时，返回此错误。| 400 |
| fetch_throttled | 服务端正在处理过多的抓取请求(fetch 请求从源链接抓取或者外部镜像从源站抓取)，返回此错误，请稍后重试 | 429 |
| internal_error | 对象存储系统内部错误，返回此错误，请稍后重试 | 500 |
| service_unavailable | 对象存储系统临时不可用时，返回此错误，请稍后重试 | 503 |
| upstream_failed | 无法与 fetch 请求的源链接或者外部镜像的源站建立链接，或者源站服务器返回(200, 3xx, 404)范围之外的错误代码，或者链接中断时，返回此错误 | 503 |

### 错误返回格式

错误信息的返回格式。

| 参数名 | 解释 |
| --- | --- |
| code | 错误码 |
| message | 详细错误信息 |
| request_id | 服务端为该次错误请求生成的唯一标示，联系我们时可附上该 ID，有助于更快定位问题。 |
| url | 指向相关帮助文档 |

错误返回示例:

```json
{
  "code": "bad_request",
  "message": "Invalid argument(s) or invalid argument value(s)",
  "request_id": "aa08cf7a43f611e5",
  "url": "http://docs.qingcloud.com/qingstor/api/common/error_code.html"
}
