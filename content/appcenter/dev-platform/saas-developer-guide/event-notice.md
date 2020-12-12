---
title: "计费事件通知"
description: SaaS
draft: false
weight: 3
---
## 事件通知配置

SaaS 系统对接 Newbilling 计费系统后，产生续费成功、失败，订阅过期等计费事件，需要接入方配置通知接收 URL 地址：

![通知接收地址](/appcenter/dev-platform/saas-developer-guide/_image/event-notice.png)

### Newbilling 通知消息字段如下

| 字段             | 类型   | 说明                                                   |
| :--------------- | :----- | :----------------------------------------------------- |
| event            | string | 通知的事件，接入系统根据事件类型区分处理不同的计费事件 |
| access_sys_id    | string | 接入系统ID                                             |
| user_id          | string | 用户ID                                                 |
| prod_inst_id_ext | string | 接入系统产品实例ID                                     |
| component_id     | string | 相关计费项ID                                           |
| occurred_at      | string | 消息产生时间                                           |

### 通知事件列表

| Event               | 说明                             | 计费模式是否通知 | 目前是否支持 | 接入系统处理 |        |                   |          |          |
| :------------------ | :------------------------------- | :--------------- | :----------- | :----------- | ------ | ----------------- | -------- | -------- |
| 时间包              | 时间量                           | 资源量           | 时间包       | 时间量       | 资源量 |                   |          |          |
| RenewFailed         | 自动续费失败                     | Y                | Y            | Y            | 支持   | 转时间量/停止计费 | 停止计费 | 停止计费 |
| RenewSuccess        | 开启自动续费产品实例自动续费成功 | Y                | N            | N            | 支持   | 更新周期起止事件  | /        | /        |
| SubscriptionExpired | 没开启自动续费的产品实例过期     | Y                | N            | N            | 支持   | 转时间量/停止计费 | /        | /        |
| SubscriptionResumed | 计费项订阅恢复成功，重新开始计费 | Y                | Y            | Y            | Todo   |                   |          |          |

### NB发送通知请求示例

**POST**  Json
```
{
  "event":"SubscriptionExpired",
  "access_sys_id":"sys_L9PVxlrEgEMr",
  "user_id":"admin",
  "prod_inst_id_ext":"hpcjob-u2d2en1y",
  "component_id":"comp_7EP50E3np6Jy",
  "occurred_at":"2020-06-21T23:59:59"
}
```

### 请求结果

HTTP 200 表示消息送达 

其他HTTP状态码都表示未送达，会执行重试