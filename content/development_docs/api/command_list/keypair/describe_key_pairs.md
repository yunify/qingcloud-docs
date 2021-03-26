---
title: "DescribeKeyPairs"
description: 
draft: false
---



获取一个或多个 SSH 密钥

可根据密钥ID，密钥名称，云服务器ID，加密方式作为过滤条件，获取密钥列表。 如果不指定任何过滤条件，默认返回你所拥有的所有密钥。 如果指定不支持的加密方式，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| keypairs.n | String | 密钥ID | No |
| instance_id | String | 云服务器ID | No |
| owner | String | 按照用户账户过滤, 只返回指定账户的资源 | No |
| encrypt_method | String | 加密算法: ssh-rsa，ssh-dss，ecdsa-sha2-nistp521 和 ssh-ed25519 | No |
| search_word | String | 搜索关键词，支持密钥ID，密钥名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回加载了该SSH密钥的云服务器的信息，默认为0. | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| keypair_set | Array | JSON 格式的密钥数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的密钥总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| keypair_id | String | SSH密钥ID |
| keypair_name | String | SSH密钥名称 |
| description | String | SSH密钥描述 |
| encrypt_method | String | SSH密钥加密算法，有效值为 ssh-rsa 和 ssh-dss |
| pub_key | String | SSH密钥公钥 |
| instance_ids | Array | SSH密钥加载的云服务器ID列表<br/>只有在请求参数 verbose=1 时才会返回此信息。 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=Describekeypairs
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeKeyPairsResponse",
  "total_count":1,
  "keypair_set":[
    {
      "description":null,
      "encrypt_method":"ssh-rsa",
      "keypair_name":"kp 1",
      "instance_ids":[
        "i-ogbndull"
      ],
      "create_time":"2013-08-30T05:13:50Z",
      "keypair_id":"kp-bn2n77ow",
      "pub_key":"AAAAB3..."
    }
  ],
  "ret_code":0
}
```
