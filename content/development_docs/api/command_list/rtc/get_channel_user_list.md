---
title: "获取频道内用户列表"
description: 
draft: false
weight：20
---

用于获取指定频道内的用户列表。

- 通信场景下，返回频道内的用户列表。
- 直播场景下，返回频道内的主播列表和观众列表。

> 注意：
>
> - 同一频道内的用户必须使用相同的频道场景。否则，查询结果可能不准确。

## URI

/v1/api/channel/user/<project_id>/<channel_name>

## Request Parameters

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| Project_id | String | 用户项目 ID。 | Yes |
| Channel_name | String | 频道名称。 | Yes |

## 公共参数

公共参数的详细信息，请参见[_公共参数_](../../../parameters/)。

## Response Elements

| action | String | Description |
| --- | --- | --- |
| Channel_exist | Boolean | 指定查询的频道是否存在。 |
| mode | number | 频道场景，当 channel_exist 的值为 true 时，才会返回此字段。<br />1：通信场景。<br />2：直播场景。 |
| total | number  | 频道内的用户总人数。在通信场景（`mode` 的值为 `1`）下，才会返回此字段。 |
| user | Array | 频道内所有用户的 ID 列表。在通信场景（`mode` 的值为 `2`）下，才会返回此字段。 |
| broadcasters | Array | 频道内所有主播的用户 ID 列表。在直播场景 （`mode` 的值为 `2`）下，才会返回此字段。 |
| audience_total | number | 频道内的观众总人数。在直播场景 （`mode` 的值为 `2`）下，才会返回此字段。 |

## Example

### Example Request

```
https://api.qingcloud.com/iaas/?action=获取频道内用户列表
&COMMON_PARAMS
```

### Example Response

> 注意：
>
> 不同的频道场景下，该方法返回的响应内容不同。

**通信场景**

```
{
  "success": true,
  "data": {
    "channel_exist": true,
    "mode": 1,
    "total": 1,
    "users": [
      "<uid>"
    ],
} 
```

**直播场景**

```
{
  "success": true,
  "data": {
    "channel_exist": true,
    "mode": 2,
    "broadcasters": [
      "<uid>"
    ],
    "audience": [
      "<uid>"
    ],
    "audience_total": "<count>"
  }
} 
```

## 状态码

| 状态码 | 状态说明   |
| ------ | ---------- |
| 200    | 请求成功。 |

## 错误码

| 错误码 | 错误类型       | 提示信息                                                     |
| ------ | -------------- | ------------------------------------------------------------ |
| 400    | 请求无效       | 用户的请求为无效请求。                                       |
| 401    | 未授权         | 未经授权（App ID/Customer Certificate 匹配错误）。           |
| 403    | 禁止访问       | 禁止访问。                                                   |
| 404    | 资源未找到     | 请求的资源未找到。                                           |
| 415    | 媒体类型不支持 | 不支持的媒体类型。请确保 `Headers` 中的 `Content-Type` 设置为 `application/json`。 |
| 429    | 请求频繁       | 当用户请求过于频繁，返回该错误。。                           |
| 500    | 内部错误       | 服务器内部错误。                                             |
