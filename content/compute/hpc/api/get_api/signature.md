---
title: "签名认证"
description: 本小节主要介绍如何进行 MySQL Plus 集群 api 签名方式。 
keyword: mysql plus 签名方式；api 签名方式
draft: false
weight: 10
collapsible: false
---

本小节主要介绍 API 请求中签名 ( signature ) 的生成方法。您可以根据实际情况选择使用 **API 密钥** 或 **IAM 身份** 来完成签名。

## API 密钥签名

您需要先在控制台创建 [API 密钥](https://console.qingcloud.com/access_keys/)，获取 accesss_key_id 和 secret_access_key。

假设 access_key_id 和 secret_access_key 如下所示。

```
access_key_id = 'QYACCESSKEYIDEXAMPLE'
secret_access_key = 'SECRETACCESSKEY'
```

请求参数如下:

```test
param = {
'access_key_id': 'QYACCESSKEYIDEXAMPLE',
"zone":"jinan1a",
"signature_method": "HmacSHA256",
"signature_version": "1",
"version":"1",
"timestamp": '2021-08-19T16:44:40Z',
}
```

> **说明**
>
> 使用上述的 AccessKey 和 Request 调试您的代码， 当得到跟后面一致的签名结果后(即表示你的代码是正确的)， 可再换为您自己的 AccessKey 和其他 API 请求。
>
> 这里以请求集群列表为例，若最后计算的结果和示例中一样，只需要换成自己的 access_key_id 和 secret_access_key 以及请求的path即可。

### 步骤 1: 参数排序

按参数名进行升序排列，排序后的参数为:

```
{
'access_key_id': 'QYACCESSKEYIDEXAMPLE'
'signature_method': 'HmacSHA256',
'signature_version': '1',
'timestamp': '2021-08-19T16:44:40Z',
'version': '1',
'zone': 'jinan1a'
}
```

### 步骤 2: 参数 URL 编码

对参数名称和参数值进行 URL 编码，编码后的请求串为:

```text
{
'access_key_id': 'QYACCESSKEYIDEXAMPLE'
'signature_method': 'HmacSHA256',
'signature_version': '1',
'timestamp': '2021-08-19T16%3A44%3A40Z',
'version': '1',
'zone': 'jinan1a'
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
access_key_id=QYACCESSKEYIDEXAMPLE&signature_method=HmacSHA256&signature_version=1&timestamp=2021-08-19T16%3A44%3A40Z&version=1&zone=jinan1a
```

### 步骤 4: 构造被签名串

被签名串的构造规则为: 被签名串 = HTTP请求方式 + “\n” + uri + “\n” + url 请求串 + “\n” + md5(requests_body)

以请求集群列表为例：

```test
methed : GET
 
url :/api/cluster/list/
 
requests_param:
access_key_id=QYACCESSKEYIDEXAMPLE&signature_method=HmacSHA256&signature_version=1&timestamp=2021-08-19T16%3A44%3A40Z&version=1&zone=jinan1a
 
md5(requests_body):请求体的md5值，如果是get请求requests_body为空字符串’’，注意中间没有空格，计算出的md5值固定为：
d41d8cd98f00b204e9800998ecf8427e
 
如果是post请求，requests_body是请求body的json字符串的MD5值
string_to_sign  = methed + "\n" + url + "\n"+ requests_param + "\n" + MD5(requests_body)
```

### 步骤 5: 计算签名

计算被签名串的签名 signature。

- 将 API 密钥的私钥 ( secret_access_key ) 作为key，生成被签名串的 HMAC-SHA256 或者 HMAC-SHA1 签名，更多信息可参见 [RFC2104](http://www.ietf.org/rfc/rfc2104.txt)。

- 将签名进行 Base64 编码

- 将 Base64 编码后的结果进行 URL 编码

```url
string_to_sign: = GET\n/api/cluster/list/\naccess_key_id=QYACCESSKEYIDEXAMPLE&signature_method=HmacSHA256&signature_version=1&timestamp=2021-08-19T16%3A44%3A40Z&version=1&zone=jinan1a\nd41d8cd98f00b204e9800998ecf8427e
```

**python3生成签名代码示例**

```
h = hmac.new(sk.encode(encoding="utf-8"), digestmod=sha256)
h.update(string_to_sign.encode(encoding="utf-8"))
sign = base64.b64encode(h.digest()).strip()
signature = parse.quote_plus(sign.decode())
signature = parse.quote_plus(signature)
requests_param = requests_param + "&signature=%s"%signature
```

**最终生成待签名的字符串**

```
GET\n/api/cluster/list/\naccess_key_id=QYACCESSKEYIDEXAMPLE&signature_method=HmacSHA256&signature_version=1&timestamp=2021-08-19T16%3A44%3A40Z&version=1&zone=jinan1a\nd41d8cd98f00b204e9800998ecf8427e
```

**使用上面的签名串得到的signature为：**

```
W68niby0THV%252BXsKcRxuGblFm2a4XbTdto129JkSH2%252FM%253D
```

**将得到的签名signature参数附在原有的请求串的最后面：**

```
access_key_id=QYACCESSKEYIDEXAMPLE&signature_method=HmacSHA256&signature_version=1&timestamp=2021-08-19T16%3A44%3A40Z&version=1&zone=jinan1a&signature=W68niby0THV%252BXsKcRxuGblFm2a4XbTdto129JkSH2%252FM%253D
```

假如请求的host是 https://hpc-api.qingcloud.com:443，将生成的最终签名结果的URL加到请求的路径下

https://hpc-api.qingcloud.com:443/api/cluster/list，中间用？连接。

最终得到的完整的URL请求如下：

```
https://hpc.api.qingcloud.com:443/api/cluster/list?access_key_id=QYACCESSKEYIDEXAMPLE&signature_method=HmacSHA256&signature_version=1&timestamp=2021-08-19T16%3A44%3A40Z&version=1&zone=jinan1a&signature=W68niby0THV%252BXsKcRxuGblFm2a4XbTdto129JkSH2%252FM%253D
```

### 测试代码

将签名参数附在原有请求串的最后面。最终的 HTTP 请求串示例如下(为了查看方便，可将参数之间用回车分隔开)。

```url
# !/usr/bin/python3
 
import requests,json,time,datetime
from urllib import parse
from hashlib import sha256
import hashlib
import hmac
import base64,json
import collections
 
 
def hex_encode_md5_hash(data):
    if not data:
        data = "".encode("utf-8")
    else:
        data = data.encode("utf-8")
    md5 = hashlib.md5()
    md5.update(data)
    return md5.hexdigest()
 
def get_signature(url="",ak="",sk="",params="",requests_body=""):
     
    params["access_key_id"] = ak
    keys = sorted(params.keys())
    print(keys)
 
    # sorted_param = {key:params[key] for key in keys}
    # print(sorted_param)
    sorted_param = collections.OrderedDict()
    for key in keys:
        sorted_param[key] = params[key]
 
    requests_param = parse.urlencode(sorted_param)
    print(requests_param)
     
    if requests_body:
        method = "POST"
        body = hex_encode_md5_hash(json.dumps(requests_body))
    else:
        method = "GET"
        body = hex_encode_md5_hash("")
    string_to_sign  = method + "\n" + url + "\n"+ requests_param + "\n" + body
    print(string_to_sign)
    # string_to_sign  = "GET" + "\n" + url + "\n"+ requests_param + "\n"
    h = hmac.new(sk.encode(encoding="utf-8"), digestmod=sha256)
    h.update(string_to_sign.encode(encoding="utf-8"))
    sign = base64.b64encode(h.digest()).strip()
    signature = parse.quote_plus(sign.decode())
    signature = parse.quote_plus(signature)
    requests_param = requests_param + "&signature=%s"%signature
    return requests_param
 
def list_cluster():
    secret_access_key = "SECRETACCESSKEYSECRETACCESSKEY"
    access_key_id = "QYACCESSKEYIDEXAMPLE"
 
    url = 'https://test.hpc.qingcloud.com/api/cluster/list'
    param = {
        "zone":"jinan1a",
        "signature_method": "HmacSHA256",
        "signature_version": "1",
        "version":"1",
        "timestamp":datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ")
    }
    signature = get_signature(url="/api/cluster/list/",ak=access_key_id,sk=secret_access_key,params=param)
    url = url + "?" + signature
    print(url)
    headers={'Content-Type': 'application/json','User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    r = requests.get(url)
    print(r.text)
 
list_cluster()
```

