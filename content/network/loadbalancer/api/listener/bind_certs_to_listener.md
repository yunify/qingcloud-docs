---
title: "AssociateServerCertsToLBListener"
description: 绑定服务器证书到负载均衡监听器上的 API 接口说明。
keyword: 负载均衡器API,监听器,绑定服务器证书
weight: 10
draft: false
---

绑定服务器证书到负载均衡监听器上。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| server_certificates.n | String | 服务器证书 ID。 | Yes |
| loadbalancer_listener | String | 负载均衡监听器 ID。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=AssociateServerCertsToLBListener
&server_certificates.1=sc-1234abcd
&loadbalancer_listener=lbl-xsfe0u8d
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
recv: {
  "action":"AssociateServerCertsToLBListenerResponse",
  "ret_code":0
}
```
