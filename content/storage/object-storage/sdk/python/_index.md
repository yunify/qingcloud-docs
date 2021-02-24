---
title: "Python SDK"
date: 2020-02-28T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---


QingStor 对象存储的新版 Python SDK 项目为 qingstor-sdk-python, 已在 GitHub 开源， 下文为简要使用文档。
更多详细信息请参见 [GitHub 项目页面](https://github.com/qingstor/qingstor-sdk-python)，
和[Python SDK API 文档](https://qingstor-sdk-python.readthedocs.io/en/latest/)。
Python SDK 使用 [Snips](https://github.com/yunify/snips) 工具生成，
各个调用的均与具体的 [Qingstor Restful API](https://docs.qingcloud.com/qingstor/api/) 对应，
返回码、请求头、错误码等规定请参照具体 API 文档的描述。

使用 Pip 安装:

```bash
> pip install qingstor-sdk
```

使用 SDK 之前请先在 [青云控制台](https://console.qingcloud.com/access_keys/) 申请 access key 。

## 初始化服务

发起请求前首先建立需要初始化服务:

```python
from qingstor.sdk.service.qingstor import QingStor
from qingstor.sdk.config import Config

config = Config('ACCESS_KEY_ID_EXAMPLE', 'SECRET_ACCESS_KEY_EXAMPLE')
qingstor = QingStor(config)
```

上面代码初始化了一个 QingStor Service。


## 获取账户下的 Bucket 列表

```python
# List all buckets.
output = qingstor.list_buckets()

# Print HTTP status code.
print(output.status_code)

# Print the buckets.
print(output['buckets'])
```

## 创建 Bucket

初始化并创建 Bucket, 需要指定 Bucket 名称和所在 Zone:

```python
bucket = qingstor.Bucket('test-bucket', 'pek3a')
output = bucket.put()
```

## 获取 Bucket 中存储的 Object 列表

```python
output = bucket.list_objects()

# Print the HTTP status code.
# Example: 200
print(output.status_code)

# Print the key count.
# Example: 7
print(output['keys'])
```

## 创建一个 Object

上传一个文件:

```python
with open('/tmp/sdk_bin', 'rb') as f:
    output = bucket.put_object(
        'example_key', body=f
    )

# Print the HTTP status code.
# Example: 201
print(output.status_code)
```

## 删除一个 Object

```python
output = bucket.delete_object('example_key')

# Print the HTTP status code.
# Example: 204
print(output.status_code)
```

## 设置 Bucket ACL

```python
output = bucket.put_acl(acl=[
    {
        'grantee': {
            'type': 'group',
            'name': 'QS_ALL_USERS'
        },
        'permission': 'FULL_CONTROL'
    }
])

# Print the HTTP status code.
# Example: 200
print(output.status_code)
```
