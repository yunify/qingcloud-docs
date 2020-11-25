---
title: "Ruby SDK"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 13
---

# Ruby SDK

QingStor Ruby SDK 已在 GitHub 开源，下文为简要使用文档。更多详细信息请参见 [https://github.com/qingstor/qingstor-sdk-ruby](https://github.com/qingstor/qingstor-sdk-ruby) 。

## 安装

直接 Ruby Gem 安装:

```bash
> gem install qingstor-sdk
```

从源码安装:

```bash
> git clone git@github.com:qingstor/qingstor-sdk-ruby.git
> cd qingstor-sdk-ruby
> bundle install
> bundle exec rake install
```

## 快速开始

使用 SDK 之前请先在 [青云控制台](https://console.qingcloud.com/access_keys/) 申请 access key 。

### 初始化服务

发起请求前首先建立需要初始化服务:

```ruby
require 'qingstor/sdk'

config = QingStor::SDK::Config.init 'ACCESS_KEY_ID', 'SECRET_ACCESS_KEY'
qs_service = QingStor::SDK::Service.new config
```

上面代码初始化了一个 QingStor Service

### 获取账户下的 Bucket 列表

```ruby
result = qs_service.list_buckets

# Print HTTP status code
puts result[:status_code]

# Print bucket count
puts result[:buckets].length
```

### 创建 Bucket

初始化并创建 Bucket, 需要指定 Bucket 名称和所在 Zone:

```ruby
bucket = qs_service.bucket 'test-bucket', 'pek3a'
putBucketOutput = bucket.put
```

### 获取 Bucket 中存储的 Object 列表

```ruby
result = bucket.list_objects

# Print HTTP status code
puts result[:status_code]

# Print keys count
puts result[:keys].length
```

### 创建一个 Object

例如上传一张屏幕截图:

```ruby
file_path = File.expand_path '~/Desktop/Screenshot.jpg'
result = bucket.put_object 'Screenshot.jpg', body: File.open(file_path)

# Print HTTP status code.
puts result[:status_code]
```
