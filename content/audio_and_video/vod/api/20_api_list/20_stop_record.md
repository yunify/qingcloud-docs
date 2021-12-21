---
title: "停止录制任务"
keyword: 云计算, 青云, QingCloud, 实时音视频 RTC,api接口, 停止录制任务
description: 使用实时音视频 RTC 的 API 接口停止录制任务。
draft: false
collapsible: false
weight: 20
---

该接口用于停止录制任务。

> **注意：**
>
> - 结束音视频通信后，请调用停止录制接口。如果没有主动调用停止录制，若频道内6分钟内没有活跃用户，则青云后台将主动发起停止录制任务。
>
> - 停止录制后文件上传到对象存储可能会有10~30分钟不等时间延时，请耐心等待。

## 请求路径

/v1/cloudRecord

## 请求方法

PATCH

## 请求参数

| 参数       | 类型   | 是否必填 | 说明     |
| ---------- | ------ | -------- | -------- |
| app_id     | String | 是       | 应用 ID  |
| project_id | String | 是       | 项目 ID  |
| channel    | String | 是       | 频道名称 |

## 返回值

```
{
    "code": "success",
    "data": "success"
}
```

返回数据说明，如下表所示。

| 参数 | 类型   | 是否必填 | 说明     |
| ---- | ------ | -------- | -------- |
| code | String | 是       | 响应代码 |
| data | String | 是       | 响应数据 |

