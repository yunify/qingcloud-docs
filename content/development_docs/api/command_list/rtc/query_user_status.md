---
title: "查询用户状态"
description: 
draft: false
weight：10
---

查询用户的状态。

## URI

/v1/api/channel/user/property/<project_id>/<uid>/<channel_name>

## Request Parameters

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| Project_id | String | 用户项目 ID。 | Yes |
| uid | String | 用户 id，该 id 可以通过 SDK 获取。 | Yes |
| channel_name | String | 频道名称。 | Yes |

## 公共参数

公共参数的详细信息，请参见[_公共参数_](../../../parameters/)。

## Response Elements

| action | String | Description |
| --- | --- | --- |
| join       | number  | 该用户加入频道的时间戳，unix 时间戳，单位：秒。<br />当 in_channel 的值为 true 时，才会返回此字段。 |
| in_channel | boolean | true：在频道中。<br />false：不在频道中。                    |
| role       | number  | 用户在频道内的角色。<br />0：未知。<br />1：通信场景的用户。<br />2：直播场景的主播。<br />3：直播场景的观众。 |

## Example

### Example Request

```
https://api.qingcloud.com/iaas/?action=查询用户状态
&COMMON_PARAMS
```

### Example Response

```
{
  "success": true,
  "data": {
    "join": 1592289039,
    "in_channel": true,
    "role": 2
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
| 429    | 请求频繁       | 用户请求过于频繁。                                           |
| 500    | 内部错误       | 服务器内部错误。                                             |
