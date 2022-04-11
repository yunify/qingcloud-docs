---
title: "使用 logstash-output-s3 插件 "
description: 本小节主要介绍 Logstash 插件安装使用方法。
keyword: 搜索分析,Logstash 安装插件,logstash-output-s3,
weight: 25
collapsible: false
draft: false
---

[logstash-output-s3](https://www.elastic.co/guide/en/logstash/6.8/plugins-outputs-s3.html)是一款开源插件，能够从多个来源采集数据、转换数据，再将数据发送到对象存储中。通过安装 `logstash-output-s3` 插件，并在对象存储开启日志功能，支持将 Logstash 的日志事件批量上传到支持 S3 对象存储协议桶存储。

本小节主要介绍部分 Logstash 插件 `logstash-output-s3` 的 安装、配置和验证方法。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已创建可用对象存储桶和 API 密钥，并分别获取到 `endpoint`、`bucket`、`access_key`、`secret_key`信息。

## 步骤 1: 安装插件

1. 登录 Logstash 节点服务器，进入 shell。默认端口 9600、用户名 `ubuntu`、密码 `p12cHANgepwD`。

   输入命令 `sudo su` 切换到 root 用户，执行安装操作。

2. 执行如下指令，安装插件：

   ```bash
   $ cd /data/logstash/plugins
   $ /usr/share/logstash/bin/logstash-plugin install logstash-output-s3
   ```

> **说明**
>
> 如有多个 Logstash 节点，请在所有 Logstash 节点上安装插件，确保所有 Logstash 节点成功安装插件。否则状态会显示不正常。

## 步骤 2: 修改配置参数

1. 登录 AppCenter 管理控制台，选择目标 **OpenSearch 服务**，进入集群详情页面。
2. 在**配置参数**页签，选择 **Logstash 节点**参数类型。
   
   配置 **gemfile_append_content**、**output_conf_content** 和 **input_conf_content** 参数，分别为如下参数值：

   **gemfile_append_content**

   ```ruby
   gem "logstash-output-s3", :path => "/data/logstash/plugins/logstash-output-s3"
   ```

   **output_conf_content**

   ```ruby
   s3 {
       access_key_id => "<YourAccessKey>"
       secret_access_key => "<YourSecretKey>"
       endpoint => "http://s3.pek3b.qingstor.com"
       bucket => "<bucket_name>"
   }
   ```

   **input_conf_content**

   ```ruby
   file {
       path => "/data/logstash/logs/logstash-plain.log"
   }
   ```

3. 重启 Logstash 节点，启动插件服务。
   
   在基本属性区域展开操作栏，点击**重启**并选择 **Logstash 节点**，重启 Logstash 节点。
<!--
## 步骤 3: 开启桶日志归档

对象存储日志归档功能，可以将 Bucket 的访问日志以 Object 的形式存储至 Bucket 下的指定目录。

更多桶日志说明，请参见[日志归档](/storage/object-storage/manual/console/bucket_manage/logging/)。

1. 登录 QingStor 管理控制台，选择目标桶，进入桶详情页面。
2. 在**日志**页签，配置**目标 Bucket** 和**日志文件前缀**，并应用修改，即开启桶日志归档功能。

![开启日志归档](../../../_images/logstash_log_s3.png)
-->

## 步骤 3: 安装验证

1. 向 Logstash 发送一条数据。

   ```bash
   curl -d "test" <Logstash_IP>:9700
   ```

2. 登录 QingStor 管理控制台，选择目标桶，进入桶详情页面。
   
   在相应文件夹中，查看是否生成 `text/plain` 日志文件。
