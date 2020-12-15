---
title: "DescribeDNSAliases"
description: 
draft: false
---



可根据资源 ID 作过滤条件，获取内网域名别名列表。 如果不指定任何过滤条件，默认返回你所拥有的所有内网域名别名。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| dns_aliases.n | String | 内网域名别名 ID | No |
| resource_id | String | 按资源 ID 过滤 | No |
| search_word | String | 搜索关键词，支持内网域名别名ID，内网域名别名名称 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| dns_alias_set | Array | JSON 格式的内网域名别名数据列表，每项数据可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的内网域名别名总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| status | String | 内网域名别名状态 |
| dns_alias_id | String | 内网域名别名 ID |
| resource_id | String | 内网域名别名关联的资源 ID |
| dns_alias_name | String | 内网域名别名名称 |
| create_time | TimeStamp | 创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeDNSAliases
&dns_aliases.1=da-xxxxxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeDNSAliasesResponse",
  "total_count":1,
  "dns_alias_set":[
    {
      "create_time":"2013-08-27T10:02:25Z",
      "dns_alias_id":"da-xxxxxxxx",
      "dns_alias_name":"",
      "resource_id":"i-xxxxxxxx",
      "status":"available"
    }
  ],
  "ret_code":0
}
```
