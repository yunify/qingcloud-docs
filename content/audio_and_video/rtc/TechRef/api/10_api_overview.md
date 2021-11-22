---
title: "概述"
draft: false
collapsible: false
weight: 10
---

本文档介绍 RTC 相关接口的请求签名&鉴权、接口调用方法。

## API 请求地址

rtc.api.qingcloud.com

## 请求 query 公共参数

| 参数              | 参数说明                                                     |
| ----------------- | ------------------------------------------------------------ |
| signature_method  | 使用的签名方法，默认HmacSHA256                               |
| time_tamp         | 请求时间，格式：2021-10-15T06:44:58Z<br />注意：<br />请求有效时间为 15 分钟。 |
| signature_version | 签名版本号，默认：1。                                        |
| access_key_id     | 请求 access_key_id                                           |
| signature         | 计算出来的请求签名结果。                                     |

## 签名过程

### 步骤一：创建 access_key_id 与 secret_access_key

通过青云QingCloud 管理控制台创建 API 密钥。如果已创建 access_key_id 和 secret_access_key，可跳过此步骤。

1. 登录 QingCloud 管理控制台。

2. 在右上角账户名称下拉列表中，点击 **API 密钥**，进入 **API 密钥**页面。

   <img src="../../../_images/um_api_accesskey.png" style="zoom:50%;" />

3. 点击**创建**，弹出**创建 API 密钥**窗口。

   <img src="../../../_images/um_api_create_key.png" style="zoom:50%;" />

4. 输入密钥名称和描述信息，点击**提交**，弹出**下载 API 密钥的私钥**窗口。

   <img src="../../../_images/um_api_private_prompt.png" style="zoom:50%;" />

5. 点击**下载**，下载私钥。

   > **注意：**
   >
   > 通过点击“下载”按钮，可以取得私钥，此下载链接将保留10分钟。
   >
   > 为了保障您的安全，这是获取 API 私钥的唯一途径，请及时下载并妥善保管您的私钥。

### 步骤二：对body进行md5消息摘要计算

1. 将body转换为byte（字节）

2. 如果是 GET 请求，body 则为 None。

   > **注意：**
   >
   > Signature 参数不参与签名计算。

   Python 代码示例如下所示。

   ```
   import json
   import hashlib
   
   def body_hex_md5(body: dict):
       body = json.dumps(body)
       # 如果是空body,直接将body设为null
       if not body:
           body = b"null"
       # 如果是unicode，编码为byte
       if not isinstance(body, bytes):
           body = body.encode("utf-8")
       md5 = hashlib.md5()
       md5.update(body)
       return md5.hexdigest()
   
   print(hex_md5({"name": "test"}))
   ```

### 步骤三：处理 query 参数

对请求 query 参数按升序排序后，生成新的 query 参数。

Python 代码示例如下所示。

```
from urllib.parse import quote

def canonical_query_string(query_params):
    canonical_query_param = []
    for key in sorted(query_params.keys()):
        # signature不参与签名计算
        if key == "signature":
            continue
        value = query_params[key]
        k = quote(key)
        if isinstance(value, list):
            value.sort()
            for v in value:
                if isinstance(v, str):
                    kv = k + "=" + quote(v.encode("utf-8"))
                else:
                    kv = k + "=" + quote(v)
                canonical_query_param.append(kv)
        else:
            kv = k + "=" + quote(str(value))
            canonical_query_param.append(kv)

    return '&'.join(canonical_query_param)

print(canonical_query_string({"c1": 4, "a": 1, "b": 2, "c": 3}))
```

### 步骤四：生成签名串

1. 拼接签名串。

   签名字符串 = upper(method) + "\n" + (request_path + "/") + "\n" + sorted_query_string + "\n" + body_md5_string

2. 将签名字符串编码为 base64。

   Python 代码示例：

   ```
   import hmac
   import hashlib
   import base64
   
   def sign_sha256(sk, string_to_sign):
       if not isinstance(sk, bytes):
           sk = sk.encode("utf-8")
   
       if not isinstance(string_to_sign, bytes):
           string_to_sign = string_to_sign.encode("utf-8")
   
       h = hmac.new(
           sk,
           string_to_sign,
           digestmod=hashlib.sha256
       )
       # 将签名结果进行base64编码
       return str(base64.b64encode(h.digest()).strip(), "utf-8")
   
   # 替换为你的sk
   secret_key = "your secret key id"
   print(sign_sha256(secret_key, "your string sign result"))
   ```

## 完整 Pathon 示例

```
import json
import hashlib
from urllib.parse import quote
import hmac
import base64
import requests


def body_hex_md5(body: dict):
    body = json.dumps(body)
    # 如果是空body,直接将body设为null
    if not body:
        body = b"null"
    # 如果是unicode，编码为byte
    if not isinstance(body, bytes):
        body = body.encode("utf-8")
    md5 = hashlib.md5()
    md5.update(body)
    return md5.hexdigest()


def canonical_query_string(query_params):
    canonical_query_param = []
    for key in sorted(query_params.keys()):
        # signature不参与签名计算
        if key == "signature":
            continue
        value = query_params[key]
        k = quote(key)
        if isinstance(value, list):
            value.sort()
            for v in value:
                if isinstance(v, str):
                    kv = k + "=" + quote(v.encode("utf-8"))
                else:
                    kv = k + "=" + quote(v)
                canonical_query_param.append(kv)
        else:
            kv = k + "=" + quote(str(value))
            canonical_query_param.append(kv)

    return '&'.join(canonical_query_param)


def sign_sha256(sk, string_to_sign):
    if not isinstance(sk, bytes):
        sk = sk.encode("utf-8")

    if not isinstance(string_to_sign, bytes):
        string_to_sign = string_to_sign.encode("utf-8")

    h = hmac.new(
        sk,
        string_to_sign,
        digestmod=hashlib.sha256
    )
    # 将签名结果进行base64编码
    return str(base64.b64encode(h.digest()).strip(), "utf-8")


def main():
    api_address = "https://rtc.api.qingcloud.com"
    access_key_id = "your_access_key_id"
    secret_key = "your_secret_key"
    request_method = "POST"
    request_query_params = {"signature_method": "HmacSHA256",
                            "time_stamp": "2021-10-15T06:44:58Z",
                            "signature_version": 1,
                            "access_key_id": access_key_id,
                            "arg1": "arg1",
                            "arg2": "arg2",
                            "arg3": "arg3",
                            "arg4": "arg4"
                            }
    # 请求body
    request_body = {"c1": 4, "a": 1, "b": 2, "c": 3}
    # 请求path
    request_path = "/v1/test"
    # 请求头
    request_headers = {}

    body_md5_string = body_hex_md5(body=request_body)
    sorted_query_string = canonical_query_string(request_query_params)
    # 拼接等待签名字符串
    string_sign = request_method.upper() + "\n" + (request_path + "/") + "\n" + sorted_query_string + "\n" + body_md5_string
    # 得到最终签名
    signature = sign_sha256(sk=secret_key, string_to_sign=string_sign)
    request_query_params["signature"] = signature
    # 生成完整请求URL
    url = "{}{}?{}".format(api_address, request_path, sorted_query_string + "&signature=%s" % signature)
    # 发送请求
    requests.post(url=url, 
                  data=request_body, 
                  headers=request_headers
                  )


if __name__ == '__main__':
    main()
```



