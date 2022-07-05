---
title: "实例删除"
description: 
keyword: 云市场,SaaS 商品接入,SPI
weight: 25
draft: false
---

## 接口描述

接口名称：DeleteInstance。

接口功能： 用户执行删除实例后，云市场将通过实例删除通知接口发送消息至服务商的发货 URL，服务商将对应的实例进行删除。

## 请求参数

| 参数        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| action      | 固定值：DeleteInstance。                                     |
| signature   | 签名。                                                       |
| timestamp   | UNIX 时间戳。单位：秒。                                      |
| instance_id | 实例 ID。                                                    |
| debug       | 是否为调试模式。<br/>取值：<ul><li>1：调试模式</li><li>0：非调试模式</li></ul>实际生产场景调用时，云市场会先采用调试模式调用一次，成功后再进行非调试模式下的调用。调试模式下服务商只需进行数据及资源校验，不需要进行实例相关的操作。 |



## 请求示例

#### query_params

```
{
  "action": "DeleteInstance",
  "instance_id": "i-ascggds",
  "debug": 1
}
```

### Url示例

```
https://{url}?action=DeleteInstance&debug=1&instance_id=i-ascggds&signature=FB5W6zF%2BbOFWyb%2FX%2FXS0bkPkHibpdq%2FiYdpH5SWnvNQ%3D&timestamp=1652254417
```

> **说明**
>
> 请求示例里的 `{url} `需替换为服务商发货地址。

## 响应参数

| 参数名称   | 是否必选 | 类型   | 描述                 |
| ---------- | -------- | ------ | -------------------- |
| spiVersion | 否       | string | SPI 版本。默认为 1。 |
| success    | 是       | bool   | 操作是否成功。       |



## 响应示例

```
{
   "spiVersion": "1",
   "success":true
}
```
