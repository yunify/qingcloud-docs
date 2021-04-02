---
title: "CreateKeyPair"
description: 
draft: false
---



创建 SSH 密钥对，每对密钥都可加载到任意多台云服务器中。

支持以下两种加密算法：

*   1024-位 DSS
*   2048-位 RSA （默认）

创建密钥对成功后，请及时从 API 返回结果中保存私钥， 因为我们不会保存用户的私钥数据。 公钥数据可以随时通过 [_DescribeKeyPairs_](../describe_key_pairs/) 得到。

另外用户也可以通过已有公钥来创建 SSH 密钥。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| keypair_name | String | 密钥对名称 | No |
| mode | String |密钥创建方式，有效值为 system 和 user，默认为 system.<br/>当密钥创建方式 system 时，表示 SSH密钥 将由系统为你创建，此时你需要下载并保存系统创建的私钥；<br/>当密钥创建方式 user 时，表示 SSH密钥 将通过您提供的公钥 ( public_key ) 参数进行创建. | No |
| encrypt_method | String | 加密算法，有效值为 ssh-rsa，ssh-dss，ecdsa-sha2-nistp521 和 ssh-ed25519，默认为 ssh-rsa。只有当 mode = sytem 的时候才需要提供。 | No |
| public_key | String | SSH 公钥内容。只有当 mode = user 的时候才需要提供。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| private_key | String |密钥对的私钥。<br/>当密钥创建方式 system 时，此时你需要下载或保存该私钥；<br/>当密钥创建方式 user 时，该私钥为空. |
| keypair_id | String | 创建成功的密钥对 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateKeyPair
&mode=system
&keypair_name=demo_kp
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateKeyPairResponse",
  "private_key":"-----BEGIN DSA PRIVATE KEY-----....",
  "keypair_id":"kp-z0goby7d",
  "ret_code":0
}
```

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateKeyPair
&mode=user
&keypair_name=demo_kp
&public_key=ssh-rsa%20AAAAB3...
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateKeyPairResponse",
  "private_key":"",
  "keypair_id":"kp-z0goby7d",
  "ret_code":0
}
```
