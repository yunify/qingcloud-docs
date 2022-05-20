---
title: "DescribeServerCertificates"
description: 
keyword: 负载均衡器API,
weight: 2
draft: false
---

获取一个或多个服务器证书。

可根据服务器证书ID，服务器证书名称作过滤条件，来获取服务器证书列表。 如果不指定任何过滤条件，默认返回你的所有服务器证书。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| server_certificates | String | 服务器证书 ID。 | No |
| search_word | String | 搜索关键词，支持服务器证书 ID，服务器证书名称。 | No |
| verbose | Integer | 是否返回冗长的信息，若为 1，则返回服务器证书相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为 0。 | No |
| limit | Integer | 返回数据长度。默认为 20，最大 100 | No |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| server_certificate_set | Array | JSON 格式的服务器证书数据列表，每项参数可见 [Response Item](#response-item)。 |
| total_count | Integer | 根据过滤条件得到的服务器证书总数。 |

#### Response Item

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| server_certificate_id | String | 服务器证书 ID。 |
| server_certificate_name | String | 服务器证书名称。 |
| private_key | String | 私钥。 |
| certificate_content | String | 证书内容。 |
| description | String | 证书描述。 |
| create_time | TimeStamp | 服务器证书创建时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime)。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DescribeServerCertificates
&server_certificates.1=sc-1234abcd
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DescribeServerCertificatesResponse",
  "total_count":1,
  "server_certificate_set":[
    {
      "private_key":"private_key",
      "server_certificate_id":"sc-1234abcd",
      "server_certificate_name":"test",
      "description":"",
      "create_time":"2013-09-24T15:41:49Z",
      "certificate_content":"certificate_content"
    }
  ],
  "ret_code":0
}
```
