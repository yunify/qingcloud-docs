---
title: "返回结果"
description: 介绍 API 返回结构。 
keyword: 公网 IP API, 返回结构
draft: false
weight: 40
---

本文介绍 API 返回结构组成及含义。

## 正确返回结果

Http状态码为200时调用成功，其可能的返回如下为：

```
{
    "data": {}
}
```

- `data` 内为具体接口定义的字段，不同的接口所返回的字段参见接口文档中的定义。
- API 请求的唯一标识 requestid 可以从请求的 Response Header 中查找，字段名为`x-qvod-request-id`，如果 API 出现异常，可[提交工单](https://console.qingcloud.com/tickets/create)并提供该 ID 来解决问题。

## 错误返回结果

若 HTTP 状态码大于400 时，接口调用失败，其返回值示例格式如下：

```
{
  "code": "String",
  "message": "String"
}
```

- `code` 表示具体出错的错误码。当请求出错时，可以先根据公共错误码和当前接口对应的错误码列表里查找对应原因和解决方案。
- `Message` 显示出了这个错误发生的具体原因。随着业务发展或体验优化，此文本可能会进行变更或更新，故该描述仅作为参考，用户不应依赖这个返回值。
- API 请求的唯一标识 requestid 可以从请求的 Response Header 中查找，字段名为`x-qvod-request-id`，如果 API 出现异常，可[提交工单](https://console.qingcloud.com/tickets/create)并提供该 ID 来解决问题。

