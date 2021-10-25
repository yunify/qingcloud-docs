---
title: "日志归档"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 6
---

## 功能概述

QingStor 对象存储日志服务可以将 Bucket 的访问日志以 Object 的形式存储至指定 Bucket 下的指定目录。只有 Bucket 的所有者才有权限设置或关闭该功能。

## 操作步骤

1. 进入 QingStor 对象存储的主页面，选择待设置跨区域复制的 Bucket，点击 **右键** > **设置**：

 ![](../../_images/set_bucket_logging1.png)

2. 进入 Bucket 设置页面，点击 **日志**，根据页面信息，填写相关参数后，点击 **开启日志功能**：

 ![](../../_images/set_bucket_logging2.png)

 **说明：**
   - 目标 Bucket 和源 Bucket 必须属于同一个用户下的同一数据中心内，且目标 Bucket 必须处于正常状态。
   - 日志文件前缀可参考下文 [日志文件命名规则](#日志文件命名规则)
   

3. 开启日志功能后，页面显示如下：

 ![](../../_images/set_bucket_logging3.png)

 **说明：**
   - 如需修改用于存放日志的 Bucket，或日志文件命名的前缀，可在上图页面中直接修改后，点击 **应用修改** 即可。
   - 如需关闭日志功能，可点击如上页面中的 **关闭日志功能**。


## 相关API

用户可以调用日志服务Bucket Logging API 来配置日志服务。

|操作|API|说明|
|--|--|--|
|设置 Bucket Logging|[PUT Bucket Logging](/storage/object-storage/api/bucket/logging/put_logging)|用于开启 Bucket 的日志归档功能|
|获取 Bucket Logging|[GET Bucket Logging](/storage/object-storage/api/bucket/logging/get_logging)|用于获取 Bucket 的日志归档功能设置|
|删除 Bucket Logging|[DELETE Bucket Logging](/storage/object-storage/api/bucket/logging/delete_logging)|用于关闭已经设置的 Bucket 日志归档功能|

## 相关说明

### 日志文件命名规则

日志命名格式为：`<TargetPrefix><Source-Bucket-Name>-<YYYY-MM-DD-HH>-<OrderString>.log`。
- `<TargetPrefix>` 为在控制台或者通过API设置的前缀。
- `<Source-Bucket-Name>` 为产生日志的 Bucket，即源 Bucket。
- `<YYYY-MM-DD-HH>` 精确到小时的时间字符串。例：2018-11-11-11。
- `<OrderString>` 每个小时的日志按照 1G 大小进行切片归档到一个或多个文件，`OrderString` 为切片唯一编号。

### 日志格式相关说明

每条日志之间，使用换行符进行分隔。任意字段如果没有输出会用 `-` 做占位符。

**示例日志：**

	192.168.1.1 - [25/Jun/2018:03:36:04 +0800] "GET http://demo.xxxx.xxxx.com/?limit=1000" 200 0.057 289 406 "curl/7.15.5" "http://www.this.is.http.referer" demo-bucket list_objects usr-thisDeMo 30458f69af1c85b4

**字段说明：**

|日志字段|说明|
|--|--|
|192.168.1.1|访问IP|
|[25/Jun/2018:03:36:04 +0800]|访问时间|
|GET|HTTP 方法|
|http://demo.xxxx.xxxx.com/?limit=1000 |访问 URL|
|200 | 状态码|
|0.057|请求时长|
|289|请求的长度（包括请求行，请求头和请求正文）|
|406|发送给客户端的总字节数|
|curl/7.15.5|访问端 UA|
|http://www.this.is.http.refer | http_referer|
|demo-bucket|Bucket 名称|
|list_objects|操作|
|usr-thisDeMo|请求用户|
|30458f69af1c85b4|请求 ID|

### 其他说明

- 源 Bucket 和目标 Bucket 必须属于同一个用户下的同一数据中心内，且目标 Bucket 必须处于正常状态
- 推荐设置前缀，避免用户 Object 名与日志文件命名冲突。
- 如果日志量比较大，一个小时可能会有多个日志文件，则日志文件会按照 `OrderString` 唯一序列号区分。
- 正常情况下，日志会以 Object 的形式延迟 1-2 小时归档至指定位置。
- 开启该功能后，归档存储的日志文件会占用存储空间，故，QingStor 对象存储会对其所占存储进行收费。
- 日志生成后，用户可以按照普通的 Object 来操作这些文件。


