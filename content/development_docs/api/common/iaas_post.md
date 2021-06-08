---
title: "Python3 语言 post 请求签名 demo"
description: 
draft: false


---

本文示例为 Python3 语言的 post 请求的 demo.CreateServerCertificate 通过 get 方式请求的时候会超出长度,需要用 post 方式请求.

需要调整的地方为：

1.填写您实际的 api 秘钥中的 access_key_id，secret_access_key

2.填写实际的 action (具体的api指令)

3.填写实际的 zone (资源区域)

4.根据 action 填写实际需要的参数

```
#!/usr/bin/env python3
# coding=utf-8
import json
import hmac
from base64 import b64encode
from datetime import datetime
from urllib.parse import urlencode, quote
import requests
import datetime

access_key_id = 'xxxxxx'
secret_access_key = 'xxxxxx'
URL = 'https://api.qingcloud.com/iaas/'
time_stamp = datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")


def calc_signature(data):
    params_string = urlencode(sorted(data.items()), quote_via=quote)
    string_to_sign = '\n'.join(['POST', '/iaas/', params_string])
    digestmod = 'SHA256' if data.get('signature_method', 'HmacSHA256') == 'HmacSHA256' else 'SHA1'
    h = hmac.new(
        key=secret_access_key.encode(),
        msg=string_to_sign.encode(),
        digestmod=digestmod,
    )
    signature = b64encode(h.digest()).decode()
    print("signature:" + signature)
    return signature

def req(action):
    data = {
        'action': action,
        'access_key_id': access_key_id,
        'signature_method': 'HmacSHA256',
        'signature_version':1,
        'time_stamp': time_stamp,
        'zone': 'sh1',
        
        'server_certificate_name':'test1',
        'certificate_content': 'xxxx',
        'private_key': 'xxxx'
    }
    data['signature'] = calc_signature(data)
    resp = requests.post(URL, data=data)
    return resp.json()

if __name__ == "__main__":
    from pprint import pprint
    action = 'CreateServerCertificate'
    result = req(action)
    pprint(result)

```

得到的签名为：

```
signature:EvCwxiGZyeri6TIkbMEhyy6YJorTccdd9fo8b5tQabY=
```

执行 CreateServerCertificate 的结果为：

```
{
    "action": "CreateServerCertificateResponse", 
    "ret_code": 0, 
    "server_certificate_id": "sc-j6f28axk"
}
```

