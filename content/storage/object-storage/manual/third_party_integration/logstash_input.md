---
title: "Logstash Input QingStor"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 1
collapsible: false
---

Logstash Input QingStor 是一个 Logstash 的 Input 插件，它可以对接 QingStor 对象存储服务， 下载存储在对象存储上的日志文件，并读入至 Logstash 中进行进一步处理。

该插件已在 GitHub 开源，下文为简要使用文档。更多详细信息请参见 [https://github.com/yunify/logstash-input-qingstor](https://github.com/yunify/logstash-input-qingstor)。

## 安装

首先确保 Logstash 已正确安装，之后使用以下命令从 Ruby Gems 安装插件。

```bash
> bin/logstash-plugin install logstash-input-qingstor
```

## 快速开始

使用插件之前请先在 [青云控制台](https://console.qingcloud.com/access_keys/) 申请 Access Key 。

Logstash Input QingStor 的基本配置项如下，查看更多可用选项可访问 GitHub 项目页面进行查阅。

如配置文件 qs_input.conf 的内容如下:

```conf
input {
    qingstor {
        access_key_id => "your_access_key_id"
        secret_access_key => "your_secret_access_key"
        bucket => "bucket_name"
        region => "pek3a"
    }
}
```

设置完成之后启动 Logstash，即可读取对象存储 Bucket 中日志文件。

```bash
> ./bin/logstash -f qs_input.conf
```
