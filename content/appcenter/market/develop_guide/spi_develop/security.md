---
title: "接口安全"
description: 
keyword: 云市场, SaaS 商品接入
weight: 3
draft: false
---

本文为您介绍 SPI 的安全令牌方案。

## 安全方案

云市场每次发起请求时，都会在请求参数（Query-Params）中携带 `signature` 和 `timestamp` ，服务商可根据这两个参数校验请求的合法性。

### signature

签名算法如下：

以 Query-Params=“c=3&b=2&a=1&signature=asafasdfasdfggs” 为例

1. 获取请求中除 signature 外的所有 Query-Params，即“c=3&b=2&a=1”。
2. 将 Query-Params 按照 key 的名称进行字典排序，即“a=1&b=2&c=3”。
3. 使用创建商品时生成的 prod_key 计算签名：base64_encode(HMAC_SHA256(prod_key, ”a=1&b=2&c=3“))。

### timestamp

请求发起时的 UNIX 时间戳，单位秒，服务商可通过该参数判断请求的时效性。

## 校验示例

Python3.7

```
import base64
import hmac
import time
from hashlib import sha256
from urllib.parse import urlencode

PROD_KEY = 'CHANGE THIS'
TIMEOUT = 10


def validate_request(query_params: dict):
    # validate timestamp
    req_timestamp = int(query_params['timestamp'])
    if req_timestamp + TIMEOUT < time.time():
        raise ValueError('Request expired.')
    # validate signature
    req_signature = query_params.pop('signature')
    query_params = sorted(query_params.items(), key=lambda kv: kv[0])
    query_params = urlencode(query_params)
    signature = base64.b64encode(hmac.new(PROD_KEY.encode('utf-8'), query_params.encode('utf-8'), sha256).digest())
    signature = signature.decode('utf-8')
    if signature != req_signature:
        raise ValueError('Signature is invalid.')

```

