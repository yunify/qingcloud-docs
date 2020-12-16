---
title: "GetWanInfo"
description: 
draft: false
---



获取 SD-WAN 资源信息详情。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resources.n | String | 资源 ID<br/>如果获取光盒移动接入信息（例如，4G 卡信息)，使用接入点 ID，类似 wacc-fub9b1eo | Yes |
| info_type | String | 信息类型<br/>如果获取光盒移动接入信息，info_type 为 cpe_mobile_info | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| wan_info | Dict | JSON 格式的资源信息详情<br/>如果获取光盒移动接入信息，则 key 为接入点ID，类似 wacc-fub9b1eo，value 为 Dict<br/>(其中 key 为光盒标识ID, 类似 wcpe-gw0l5d9u，value 为具体移动接入信息, 参数可见下面 [Response Item](#response-item)) |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| mobile_imsi | String | IMSI |
| mobile_apn | String | APN |
| mobile_iface_name | String | 接口名称 |
| mobile_provider | String | 运营商 |
| mobile_flow | Integer | 当月使用流量 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GetWanInfo
&resources.1=wacc-nzgqtn8b
&info_type=cpe_mobile_info
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action": "GetWanInfoResponse", 
  "wan_info": {
    "wacc-nzgqtn8b": {
      "wcpe-gw0l5d9u": {
        "mobile_imsi": "460019236208998", 
        "mobile_apn": "3GNET", 
        "mobile_iface_name": "ppp99", 
        "mobile_provider": "CHN-UNICOM", 
        "mobile_flow": 1898576838
      }
    }
  }, 
  "ret_code": 0
}
```
