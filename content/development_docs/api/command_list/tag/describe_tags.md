---
title: "DescribeTags"
description: 
draft: false
---



获取一个或多个标签

可根据标签ID，名称作为过滤条件，获取标签列表。 如果不指定任何过滤条件，默认返回你所拥有的所有标签。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| tags.n | String | 标签ID | No |
| search_word | String | 搜索关键词，支持标签名称 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回绑定了该标签的资源的信息，默认为0. | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| tag_set | Array | JSON 格式的密钥数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的密钥总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| tag_id | String | 标签ID |
| tag_name | String | 标签名称 |
| description | String | 标签描述 |
| resource_count | Interger | 该标签绑定资源总数 |
| resource_type_count | Interger | 该标签绑定资源分类数量 |
| resource_tag_pairs | Array | 密钥绑定的资源的列表<br/>只有在请求参数 verbose=1 时才会返回此信息。 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeTags
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeTagsResponse",
  "total_count":1,
  "tag_set":[
    {
      "tag_id":"tag-axbkmf20",
      "tag_name":"tag 1",
      "description":"",
      "resource_count":1,
      "resource_type_count":[
        {
          "count":1,
          "resource_type":"keypair"
        }
      ],
      "resource_tag_pairs":[
        {
          "tag_id":"tag-axbkmf20",
          "resource_type":"keypair",
          "resource_id":"kp-9i9pm6u3"
        }
      ],
      "create_time":"2013-08-30T05:13:50Z",
    }
  ],
  "ret_code":0
}
```
