---
title: "UpdateDnatRule"
description: 更新 DNAT 规则
draft: false
weight: 30
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, DNAT
---

更新 DNAT 规则。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| natgw_id | String | NAT 网关的 ID | Yes |
| name | String | DNAT 的 ID | No |
| public_port | String | 公网端口号 1-65535, 端口号或者范围, 如 80 或者 80-85 | No |
| private_port | String | 内网端口号 1-65535, 端口号或者范围, 如 8080 或者 8080-8085。 | No |
| private_ip| String | 内网 IP 地址 | No |
| protocol| String | 协议类型, tcp 或者 udp | No |
| enable | Integer | 是否启用。 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| dnat_id | String | 更新 DNAT 规则的 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=UpdateDnatRule
&natgw_id=nfv-1234abcd
&name=natgw1
&public_port=80-85
&private_port=80-85
&private_ip=172.17.0.2
&protocol=tcp
&eip_id=eip-9m3skybb
&enable=1
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"UpdateDnatRuleponse",
  "dnat_id":"dnat-p8zf9ytc",
  "ret_code":0
}
```
