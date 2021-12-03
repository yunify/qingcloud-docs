---
title: "Logstash 与 QingStor 对象存储集成"
description: 本小节主要介绍 Logstash 与 QingStor 对象存储集成。
keywords: Logstash 对象存储集成,
weight: 40
collapsible: false
draft: false
---

Logstash 支持从 QingStor 对象存储输入数据到 Elasticsearch，或者从 Elasticsearch 导出数据到 QingStor 对象存储。

| 版本 | 插件
| - | -
| 6.8.0 及以上 | logstash-input/output-s3
| 5.6.16 | logstash-input/output-s3（**`推荐！`**）, logstash-input/output-qingstor
| 5.5.1 | logstash-input/output-qingstor

## 前提条件

已在 [QingCloud 管理控制台](https://console.qingcloud.com/login) 申请 [Access Key](https://console.qingcloud.com/access_keys/) 和 [创建Bucket](https://docs.qingcloud.com/qingstor/guide/bucket_manage.html#%E5%88%9B%E5%BB%BA-bucket)。

## 操作步骤

1. 在集群详情页面，切换到参数配置页面，选择 Logstash 节点，修改 `input_conf_content` 配置项为如下，点击保存。

   ```ruby
   s3 {
       access_key_id => "access key id"
       secret_access_key => "secret access key"
       endpoint => "https://s3.pek3a.qingstor.com"
       bucket => "logstash-input"
   }
   ```

   请根据实际情况调整上面的参数，比如按区域就近指定 endpoint 地址等，关于参数的详情可参考其 [官方文档](https://www.elastic.co/guide/en/logstash/6.7/plugins-inputs-s3.html)

   `ELK 5.6.16 - QingCloud 1.5.0` 之前的版本请使用 Logstash Inputs QingStor 插件参考如下示例进行配置：

   ```ruby
    qingstor {
    access_key_id => "your_access_key_id"
    secret_access_key => "your_secret_access_key"
    bucket => "bucket_name"
    region => "pek3a"
    sincedb_path => "~/.sincedb"
   }
   ```

   请根据您的具体配置替换上面的配置，其他配置参数详情请参见[手册](https://github.com/yunify/logstash-output-qingstor/blob/master/docs/index.asciidoc)。

2. 重启 Logstash 节点。在集群列表页面右键点击您的 ELK 集群，点击重启，选择 Logstash 节点，点击提交，此时 Logstash 节点将会重启。

3. 保存成功后请在您配置的 bucket 里上传日志文件。

4. 参照 **Kibana 基本用法** 使用浏览器输入 `http://$KB_IP:5601/` 打开 Kibana 界面，配置 index pattern 后，既可在 Discover 查看到导入的日志。

   Logstash 默认的 output 是 Elasticsearch， 并自动配置好了 Elasticsearch 集群的 hosts 选项。如果需要在 output 到 Elasticsearch 的过程中指定其他参数， 可以在`output_es_content`中指定，比如：
   
   ```ruby
   action => "update"
   index => "my-first-index"
   ```
   
   如还需输出到其他位置，可以通过`output_conf_content`指定，比如通过如下配置将数据上传到 QingStor 对象存储：
   
   ```ruby
   s3 {
   access_key_id => "access key id"
   secret_access_key => "secret access key"
   endpoint => "https://s3.pek3a.qingstor.com"
   bucket => "bucket name"
   codec => "json"
   encoding => "gzip"
   rotation_strategy => "size_and_time"
   size_file => 10485760
   time_file => 10
   }
   ```
   
   更多参数详情可参考其 [官方文档](https://www.elastic.co/guide/en/logstash/6.7/plugins-outputs-s3.html)。
   
   `ELK 5.6.16 - QingCloud 1.5.0` 之前的版本请使用 Logstash Outputs QingStor 插件参考如下示例进行配置：
   
   ```ruby
   qingstor {
   access_key_id => "your-access_key_id"
   secret_access_key => "your-secret-access_key"
   bucket => "bucket name"
   region => "pek3a"
   codec => "json"
   encoding => "gzip"
   rotation_strategy => "size_and_time"
   file_size => 10485760
   file_time => 10
   }
   ```

   关于`logstash-input/output-qingstor`插件的更多细节信息请查看[相关文档](https://docs.qingcloud.com/qingstor/third_party_integration/index.html)。
