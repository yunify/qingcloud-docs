---
title: "实例创建"
description: 
keyword: 云市场,SaaS 商品接入,SPI
weight: 5
draft: false
---

## 接口描述

接口名称： CreateInstance  

接口功能： 用户购买商品并支付后，云市场将通过实例创建通知接口发送信息至服务商的发货 URL。

## 请求参数

| 参数          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| action        | CreateInstance                                               |
| signature     | 签名。                                                       |
| timestamp     | UNIX 时间戳。单位：秒。                                      |
| order_id      | 订单ID                                                       |
| qingcloud_uid | 青云用户ID                                                   |
| product_code  | 商品编码。                                                   |
| spec          | 规格名称。                                                   |
| package       | 套餐名称。                                                   |
| duration      | 商品套餐有效期。<br/>格式：值_时间单位。<br/>示例：1_year，1_day，1_month。 |
| debug         | 是否为调试模式。<br/>取值：<ul><li>1：调试模式</li><li>0：非调试模式</li></ul>实际生产场景调用时，云市场会先采用调试模式调用一次，成功后再进行非调试模式下的调用。调试模式下服务商只需进行数据及资源校验，不需要进行实例相关的操作。 |



## 请求示例

#### query_params

```
{
  "action": "CreateInstance",
  "order_id": "mord-m80iaibd",
  "qingcloud_uid": "usr-u5JDC3MS",
  "product_code": "prod-yha6rswd",
  "spec": "规格",
  "package": "套餐",
  "duration": "1_year",
  "debug": 1
}
```

#### Url 示例

```
https://{url}?action=CreateInstance&debug=1&duration=1_year&order_id=mord-m80iaibd&package=%E5%A5%97%E9%A4%90&product_code=prod-yha6rswd&qingcloud_uid=usr-u5JDC3MS&signature=bpy9g5zCGoWvAJqrbpUrNSy7BU%2F2%2B6SiDhi7lPxy5CY%3D&spec=%E8%A7%84%E6%A0%BC&timestamp=1652254417
```

> **说明**
>
> 请求示例里的 `{url} `需替换为服务商发货地址。

## 响应参数

| 参数名称     | 是否必选 | 类型        | key 名称                                                     | 说明                                   |
| ------------ | -------- | ----------- | ------------------------------------------------------------ | -------------------------------------- |
| spiVersion   | 否       | string      | -                                                            | SPI 版本。默认为 1。                   |
| instanceId   | 是       | string      | -                                                            | 服务实例 ID。全局唯一，长度最大128位。 |
| instanceInfo | 是       | json-object | frontEndUrl：前台地址 <br/>adminUrl：管理后台地址 <br/> username：账号 <br/> password：密码 | 服务实例信息。                         |

## 响应示例

```
{
  "spiVersion": "1",
  "instanceId": "i-ascggds",
  "instanceInfo": {
    "frontEndUrl": "https://www.saas.com/",
    "adminUrl": "https://www.saas.com/admin",
    "username": "root",
    "password": "root123"
  }
}
```

