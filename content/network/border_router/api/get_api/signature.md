---
title: "签名认证"
description: 介绍 API 签名方法。 
keyword: 边界路由器 API, API 签名, API 密钥
draft: false
weight: 30
---

本小节主要介绍 API 请求中签名 ( signature ) 的生成方法。您可以根据实际情况选择使用 **API 密钥** 或 **IAM 身份** 来完成签名。

## API 密钥签名

您需要先在控制台**API 密钥**页面[申请 API 密钥](https://console.qingcloud.com/access_keys/)，获取 accesss_key_id 和 secret_access_key。

例如请求参数如下:

```test
{
  "count":1,
  "vxnets.1":"vxnet-0",
  "zone":"pek3a",
  "instance_type":"small_b",
  "signature_version":1,
  "signature_method":"HmacSHA256",
  "instance_name":"demo",
  "image_id":"centos64x86a",
  "login_mode":"passwd",
  "login_passwd":"QingCloud20210712",
  "version":1,
  "access_key_id":"QYACCESSKEYIDEXAMPLE",
  "action":"RunInstances",
  "time_stamp":"2021-08-27T14:30:10Z"
}
```

> **说明**
>
> 使用上述的 AccessKey 和 Request 调试你的代码， 当得到跟后面一致的签名结果后(即表示你的代码是正确的)， 可再换为你自己的 AccessKey 和其他 API 请求。

### 步骤 1: 参数排序

按参数名进行升序排列，排序后的参数为:

```
{
  "access_key_id":"QYACCESSKEYIDEXAMPLE",
  "action":"RunInstances",
  "count":1,
  "image_id":"centos64x86a",
  "instance_name":"demo",
  "instance_type":"small_b",
  "login_mode":"passwd",
  "login_passwd":"QingCloud20130712",
  "signature_method":"HmacSHA256",
  "signature_version":1,
  "time_stamp":"2021-08-27T14:30:10Z",
  "version":1,
  "vxnets.1":"vxnet-0",
  "zone":"pek3a"
}
```

### 步骤 2: 参数 URL 编码

对参数名称和参数值进行 URL 编码，编码后的请求串为:

```text
{
  "access_key_id":"QYACCESSKEYIDEXAMPLE",
  "action":"RunInstances",
  "count":1,
  "image_id":"centos64x86a",
  "instance_name":"demo",
  "instance_type":"small_b",
  "login_mode":"passwd",
  "login_passwd":"QingCloud20130712",
  "signature_method":"HmacSHA256",
  "signature_version":1,
  "time_stamp":"2021-08-27T14%3A30%3A10Z",
  "version":1,
  "vxnets.1":"vxnet-0",
  "zone":"pek3a"
}
```

> **注意**
> 
> - 编码时空格要转换成 “%20” , 而不是 “+”。
> 
> - 转码部分的字符要用大写，如 ”:” 应转成 “%3A”，而不是 “%3a”。

### 步骤 3: 构造 URL 请求

参数名和参数值之间用 “=” 号连接，参数和参数之间用 “＆” 号连接。构造后的URL请求如下示例：

```text
access_key_id=QYACCESSKEYIDEXAMPLE&action=RunInstances&count=1&image_id=centos64x86a&instance_name=demo&instance_type=small_b&login_mode=passwd&login_passwd=QingCloud20130712&signature_method=HmacSHA256&signature_version=1&time_stamp=2021-08-27T14%3A30%3A10Z&version=1&vxnets.1=vxnet-0&zone=pek3a
```

### 步骤 4: 构造被签名串

被签名串的构造规则为: 被签名串 = HTTP请求方式 + “\n” + uri + “\n” + url 请求串。

> **注意**
> 
> - “\n” 是换行符，不要将 “\” 转义。即不使用 “\\n” 。
> 
>  - php、ruby 等语言，请用 “\n” , 而不是 ‘\n’。

假设 HTTP 请求方法为 GET 请求的uri路径为 “/iaas/” 。则被签名串示例如下：

```test
GET\n/iaas/\naccess_key_id=QYACCESSKEYIDEXAMPLE&action=RunInstances&count=1&image_id=centos64x86a&instance_name=demo&instance_type=small_b&login_mode=passwd&login_passwd=QingCloud20130712&signature_method=HmacSHA256&signature_version=1&time_stamp=2021-08-27T14%3A30%3A10Z&version=1&vxnets.1=vxnet-0&zone=pek3a
```

### 步骤 5: 计算签名

计算被签名串的签名 signature。

- 将API密钥的私钥 ( secret_access_key ) 作为key，生成被签名串的 HMAC-SHA256 或者 HMAC-SHA1 签名，更多信息可参见 [RFC2104](http://www.ietf.org/rfc/rfc2104.txt)。

- 将签名进行 Base64 编码

- 将 Base64 编码后的结果进行 URL 编码

> **注意**
> 
> 当 Base64 编码后存在空格时，不要对空格进行 URL 编码，而要直接将空格转为 “+”。

以 Python (版本 2.7) 代码为例 (其他语言类似，需要使用 sha256 + base64 编码，最后需要再进行 URL 编码，URL 编码时需要将原有的空格 ” ” 转为 “+”)。

```url
import base64
import hmac
import urllib
from hashlib import sha256

# 前面生成的被签名串
string_to_sign = 'GET\n/iaas/\naccess_key_id=QYACCESSKEYIDEXAMPLE&action=RunInstances&count=1&image_id=centos64x86a&instance_name=demo&instance_type=small_b&login_mode=passwd&login_passwd=QingCloud20130712&signature_method=HmacSHA256&signature_version=1&time_stamp=2021-08-27T14%3A30%3A10Z&version=1&vxnets.1=vxnet-0&zone=pek3a'
h = hmac.new(secret_access_key, digestmod=sha256)
h.update(string_to_sign)
sign = base64.b64encode(h.digest()).strip()
signature = urllib.quote_plus(sign)
```

### 步骤 6: 添加签名

将签名参数附在原有请求串的最后面。最终的 HTTP 请求串示例如下(为了查看方便，可将参数之间用回车分隔开)。

```url
access_key_id=QYACCESSKEYIDEXAMPLE
&action=RunInstances
&count=1
&image_id=centos64x86a
&instance_name=demo
&instance_type=small_b
&login_mode=passwd
&login_passwd=QingCloud20130712
&signature_method=HmacSHA256
&signature_version=1
&time_stamp=2021-08-27T14%3A30%3A10Z
&version=1
&vxnets.1=vxnet-0
&zone=pek3a
&signature=byjccvWIvAftaq%2BoublemagH3bYAlDWxxLFAzAsyslw%3D
```

完整的请求 URL 示例如下：

```url
https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE
&action=RunInstances
&count=1
&image_id=centos64x86a
&instance_name=demo
&instance_type=small_b
&login_mode=passwd
&login_passwd=QingCloud20130712
&signature_method=HmacSHA256
&signature_version=1
&time_stamp=2021-08-27T14%3A30%3A10Z
&version=1
&vxnets.1=vxnet-0
&zone=pek3a
&signature=byjccvWIvAftaq%2BoublemagH3bYAlDWxxLFAzAsyslw%3D
```

实际 URL 如下：

```url
https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE&action=RunInstances&count=1&image_id=centos64x86a&instance_name=demo&instance_type=small_b&login_mode=passwd&login_passwd=QingCloud20130712&signature_method=HmacSHA256&signature_version=1&time_stamp=2021-08-27T14%3A30%3A10Z&version=1&vxnets.1=vxnet-0&zone=pek3a&signature=byjccvWIvAftaq%2BoublemagH3bYAlDWxxLFAzAsyslw%3D
```

## IAM 身份签名

您需要先到 IAM 控制面板创建一个基于特定信任载体类型的身份，并将身份绑定到 API 执行设备上。

假设 API 执行设备为 QingCloud 广东 2 区 id 为 i-7lchv5u3 的云服务器。

### 步骤 1: 获取临时凭证

在云服务器中执行如下命令，即可取得 IAM 身份的临时凭证：

```curl
curl -i -H "Accept: application/json" http://169.254.169.254/latest/meta-data/security-credentials
```

返回信息：

```
"{\"jti\":\"0z7dO3oN03byx1CepBDTyl\",\"id_token\":\"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3IiOiIxIiwiYXVkIjoiaWFtIiwiYXpwIjoiaWFtIiwiY29ucyI6ImFkbWluIiwiY3VpZCI6ImlhbXItejU3dm42anIiLCJlaXNrIjoieUxjcFViRXZVOWZQZmJSQTA2eUFQMUtMS21keVpoX1JueDJmNmRmeFZZZz0iLCJleHAiOjE1OTAzMTk1MjMsImlhdCI6MTU5MDMxNTkyMywiaXNzIjoic3RzIiwianRpIjoiMHo3ZE8zb04wM2J5eDFDZXBCRFR5bCIsIm5iZiI6MCwib3JnaSI6ImFwcC0xMjM0NTY3OCIsIm93dXIiOiJ1c3ItQ29qOGFIZ24iLCJwcmVmIjoicXJuOnFpbmdjbG91ZDppYW06Iiwicm91ciI6InVzci1Db2o4YUhnbiIsInJ0eXAiOiJyb2xlIiwic3ViIjoic3RzIiwidHlwIjoiSUQifQ.YrCnvySApej2zHsn9cfn3D7tgOahDzeTP1TRBVMZ_3TyToo-H7hB2_mx_J_Qy1NY5K-WykYE4NFxqVN7PqsnAmskqAnRM2D7Gza_PffO7ajEJhtVF7Fo7nsmPKs7y1kryQ2Rvj3ABBJThHjQDtYVsk_pLUio5P0Nl9zb1sSswN4\",\"access_key\":\"0z7dO3oN03byx1CepBDTyl\",\"secret_key\":\"5qlKnUc3esKJp3G\",\"expiration\":1590319523}"
```

为了查看方便，将参数之间用回车分隔开如下：

```
"jti":"0z7dO3oN03byx1CepBDTyl",
"id_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3IiOiIxIiwiYXVkIjoiaWFtIiwiYXpwIjoiaWFtIiwiY29ucyI6ImFkbWluIiwiY3VpZCI6ImlhbXItejU3dm42anIiLCJlaXNrIjoieUxjcFViRXZVOWZQZmJSQTA2eUFQMUtMS21keVpoX1JueDJmNmRmeFZZZz0iLCJleHAiOjE1OTAzMTk1MjMsImlhdCI6MTU5MDMxNTkyMywiaXNzIjoic3RzIiwianRpIjoiMHo3ZE8zb04wM2J5eDFDZXBCRFR5bCIsIm5iZiI6MCwib3JnaSI6ImFwcC0xMjM0NTY3OCIsIm93dXIiOiJ1c3ItQ29qOGFIZ24iLCJwcmVmIjoicXJuOnFpbmdjbG91ZDppYW06Iiwicm91ciI6InVzci1Db2o4YUhnbiIsInJ0eXAiOiJyb2xlIiwic3ViIjoic3RzIiwidHlwIjoiSUQifQ.YrCnvySApej2zHsn9cfn3D7tgOahDzeTP1TRBVMZ_3TyToo-H7hB2_mx_J_Qy1NY5K-WykYE4NFxqVN7PqsnAmskqAnRM2D7Gza_PffO7ajEJhtVF7Fo7nsmPKs7y1kryQ2Rvj3ABBJThHjQDtYVsk_pLUio5P0Nl9zb1sSswN4",
"access_key":"0z7dO3oN03byx1CepBDTyl",
"secret_key":"5qlKnUc3esKJp3G",
"expiration":1590319523
```

### 步骤 2: 计算签名

将身份临时凭证中的 **access_key** 和 **secret_key** ，进行签名计算。详细操作参见 [API 密钥签名计算](#步骤-5-计算签名)。

### 步骤 3: 添加签名

将请求的 URI 路径改为 “/iam/”，最后在请求中附上 token 参数（参数值为临时凭证中的 id_token ）。

以 DescribeInstances 为例，最后请求的 URL 为（将参数之间用回车分隔开）:

```url
https://api.qingcloud.com/iam/?access_key_id=0z7dO3oN03byx1CepBDTyl
&action=DescribeInstances
&req_id=35430c022b694133a6a758b62e21067b
&signature_method=HmacSHA256
&signature_version=2
&status.1=running
&status.2=stopped
&time_stamp=2020-05-25T07%3A20%3A28Z
&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3IiOiIxIiwiYXVkIjoiaWFtIiwiYXpwIjoiaWFtIiwiY29ucyI6ImFkbWluIiwiY3VpZCI6ImlhbXItejU3dm42anIiLCJlaXNrIjoieUxjcFViRXZVOWZQZmJSQTA2eUFQMUtMS21keVpoX1JueDJmNmRmeFZZZz0iLCJleHAiOjE1OTAzMTk1MjMsImlhdCI6MTU5MDMxNTkyMywiaXNzIjoic3RzIiwianRpIjoiMHo3ZE8zb04wM2J5eDFDZXBCRFR5bCIsIm5iZiI6MCwib3JnaSI6ImFwcC0xMjM0NTY3OCIsIm93dXIiOiJ1c3ItQ29qOGFIZ24iLCJwcmVmIjoicXJuOnFpbmdjbG91ZDppYW06Iiwicm91ciI6InVzci1Db2o4YUhnbiIsInJ0eXAiOiJyb2xlIiwic3ViIjoic3RzIiwidHlwIjoiSUQifQ.YrCnvySApej2zHsn9cfn3D7tgOahDzeTP1TRBVMZ_3TyToo-H7hB2_mx_J_Qy1NY5K-WykYE4NFxqVN7PqsnAmskqAnRM2D7Gza_PffO7ajEJhtVF7Fo7nsmPKs7y1kryQ2Rvj3ABBJThHjQDtYVsk_pLUio5P0Nl9zb1sSswN4
&verbose=0
&version=1
&zone=pekt3
&signature=o8TW8DUQ3wyHz5YSkpMd9fSj4pJ24U7%2Buf7CeWKMoQw%3D
```

实际 URL 为：

```url
https://api.qingcloud.com/iam/?access_key_id=0z7dO3oN03byx1CepBDTyl&action=DescribeInstances&req_id=35430c022b694133a6a758b62e21067b&signature_method=HmacSHA256&signature_version=2&status.1=running&status.2=stopped&time_stamp=2020-05-25T07%3A20%3A28Z&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3IiOiIxIiwiYXVkIjoiaWFtIiwiYXpwIjoiaWFtIiwiY29ucyI6ImFkbWluIiwiY3VpZCI6ImlhbXItejU3dm42anIiLCJlaXNrIjoieUxjcFViRXZVOWZQZmJSQTA2eUFQMUtMS21keVpoX1JueDJmNmRmeFZZZz0iLCJleHAiOjE1OTAzMTk1MjMsImlhdCI6MTU5MDMxNTkyMywiaXNzIjoic3RzIiwianRpIjoiMHo3ZE8zb04wM2J5eDFDZXBCRFR5bCIsIm5iZiI6MCwib3JnaSI6ImFwcC0xMjM0NTY3OCIsIm93dXIiOiJ1c3ItQ29qOGFIZ24iLCJwcmVmIjoicXJuOnFpbmdjbG91ZDppYW06Iiwicm91ciI6InVzci1Db2o4YUhnbiIsInJ0eXAiOiJyb2xlIiwic3ViIjoic3RzIiwidHlwIjoiSUQifQ.YrCnvySApej2zHsn9cfn3D7tgOahDzeTP1TRBVMZ_3TyToo-H7hB2_mx_J_Qy1NY5K-WykYE4NFxqVN7PqsnAmskqAnRM2D7Gza_PffO7ajEJhtVF7Fo7nsmPKs7y1kryQ2Rvj3ABBJThHjQDtYVsk_pLUio5P0Nl9zb1sSswN4&verbose=0&version=1&zone=pekt3&signature=o8TW8DUQ3wyHz5YSkpMd9fSj4pJ24U7%2Buf7CeWKMoQw%3D
```
