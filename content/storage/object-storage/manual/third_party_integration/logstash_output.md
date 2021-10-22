---
title: "Logstash Output QingStor"
date: 2021-08-16T10:08:56+09:00
description:
draft: false
weight: 2
collapsible: false
---

Logstash Output QingStor 是 Logstash 的一个 Output 插件，它用于对接 QingStor 对象存储服务。用户通过该插件，将 Logstash 的输出结果归档至 QingStor 对象存储的 Bucket 中。

该插件已在 GitHub 开源，本文为简要使用文档。更多详细信息请参见 [GitHub 项目](https://github.com/yunify/logstash-output-qingstor)。

## 安装

1. 自行下载安装 Logstash。可参考 [Logstash](https://www.elastic.co/cn/downloads/past-releases#logstash)。

2. 执行如下命令，安装插件。
```bash
/usr/local/bin/logstash-plugin install logstash-output-qingstor
```

## 配置

1. 在 [管理控制台](https://console.qingcloud.com/access_keys/) 申请 Access Key。

2. 创建配置文件 qs_output.conf，并填写如下内容：

```conf
output {
    qingstor {
        access_key_id => "your_access_key_id"
        secret_access_key => "your_secret_access_key"
        bucket => "bucket_name"
        region => "pek3a"
    }
}
```

   **说明：**
   - 以上内容为 Logstash Output QingStor 的必须配置项。查看更多可用选项可访问 GitHub 项目页面进行查阅。
   - 由于可选项均有默认值，故填写必须配置项后，插件即可成功运行。

## 使用

配置完成之后执行如下命令行启动 Logstash，即可在 QingStor 对象存储指定的 Bucket 中查看到输出的日志文件。

```bash
$./bin/logstash -f qs_output.conf
```

