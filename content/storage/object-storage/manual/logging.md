---
title: "日志归档"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 6
---

## 功能概述

对象存储日志服务可以将指定的Bucket的访问日志以Object的形式归档到Bucket下的指定目录。

## 功能设置

用户可以调用日志服务Bucket Logging API 来配置日志服务，也可以在控制台配置。
只有存储空间的所有者可以设置。

### 用日志服务 API 来开启、设置、关闭日志服务

日志服务(Bucket Logging) API 见 API 文档:

- [PUT Bucket Logging](/storage/object-storage/api/bucket/logging/put_logging)

- [GET Bucket Logging](/storage/object-storage/api/bucket/logging/get_logging)

- [DELETE Bucket Logging](/storage/object-storage/api/bucket/logging/delete_logging)

### 用控制台来配置日志服务

可在青云控制台对象存储 Bucket 设置项中进行配置。

## 日志文件命名规则

日志命名格式为&lt;TargetPrefix&gt;&lt;Source-Bucket-Name&gt;-&lt;YYYY-MM-DD-HH&gt;-&lt;OrderString&gt;.log。
- &lt;TargetPrefix&gt;为在控制台或者通过API设置的前缀。
- &lt;Source-Bucket-Name&gt;为产生日志的Bucket，即源Bucket。
- &lt;YYYY-MM-DD-HH&gt;精确到小时的时间字符串。例：2018-11-11-11。
- &lt;OrderString&gt;每个小时的日志按照1G大小来切片归档到一个或多个文件, OrderString为切片唯一编号。

## 日志格式相关说明

日志之间用换行符分隔。任意字段如果没有输出会用“-”做占位符。

示例日志：

	192.168.1.1 - [25/Jun/2018:03:36:04 +0800] "GET http://demo.xxxx.xxxx.com/?limit=1000" 200 0.057 289 406 "curl/7.15.5" "http://www.this.is.http.referer" demo-bucket list_objects usr-thisDeMo 30458f69af1c85b4

|日志字段|说明|
|--|--|
|192.168.1.1|访问IP|
|[25/Jun/2018:03:36:04 +0800]|访问时间|
|GET|http方法|
|http://demo.xxxx.xxxx.com/?limit=1000 |访问URL|
|200 | 状态码|
|0.057|请求时长|
|289|请求的长度（包括请求行，请求头和请求正文）|
|406|发送给客户端的总字节数|
|curl/7.15.5|访问端UA|
|http://www.this.is.http.refer | http_referer|
|demo-bucket|bucket名称|
|list_objects|操作|
|usr-thisDeMo|请求用户|
|30458f69af1c85b4|请求ID|

## 其他说明

- 源Bucket和目标Bucket必须属于同一个用户下的同一数据中心内。
- 推荐设置前缀，避免用户object名字与日志文件命名冲突。
- 目标Bucket必须处于正常状态。
- 如果日志量比较大，一个小时可能会有多个日志文件，文件按照OrderString唯一序列号区分。
- 正常情况下，日志会以对象 (Object) 的形式延迟1-2小时归档到指定位置。对象存储生成的日志文件，会对存储收费。日志生成后您可以按照普通的Object来操作这些文件。


