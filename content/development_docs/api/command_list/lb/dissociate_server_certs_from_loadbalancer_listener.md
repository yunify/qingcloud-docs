---
title: "DissociateServerCertsFromLBListener"
description: 
draft: false
---



将服务器证书从负载均衡监听器上解绑。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| server_certificates.n | string | 服务器证书ID | Yes |
| loadbalancer_listener | String | 负载均衡监听器ID | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DissociateServerCertsFromLBListener
&server_certificates.1=sc-1234abcd
&loadbalancer_listener=lbl-xsfe0u8d
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
recv: {
  "action":"DissociateServerCertsFromLBListenerResponse",
  "ret_code":0
}
```
