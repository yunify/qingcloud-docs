---
title: "日志搜索"
description: 本小节主要介绍 OpenSearch 中文日志搜索场景。 
keyword: 搜索分析,OpenSearch 日志搜索,
weight: 10
collapsible: false
draft: true
---


本小节主要介绍如何将中英文日志从 Logstash 导入到 OpenSearch，以及如何通过 Dashboard 进行日志搜索。


本小节为用户呈现了中文日志从 Logstash 导入到 OpenSearch，再通过 Dashboard 进行搜索的完整的过程。

> **说明**
>
> 从版本 `ELK 5.6.16 - QingCloud 1.5.0` 起已内置用于指定 ik 分词器的模板文件，用户可以直接使用（在 Logstash 节点的 /data/OpenSearch/dicts 目录下）。
>
> 如果是以前的版本，需要事先把 **模板文件** 下载到 Logstash 节点的 `/data/elasticserach/dicts/` 目录下再进行后面的操作，否则 Logstash 会因找不到模板文件而无法启动（可以直接登录到节点下载，也可以通过如下命令上传，注意 URL 最后的 `/` 不能省略。

```bash
curl -sL https://docs.qingcloud.com/product/big_data/elk/logstash.json |
curl -F "file=@-;filename=logstash.json" $LS_IP/dicts/
```

## 操作步骤

1. 在集群详情页面，切换到参数配置页面，选择 **Logstash 节点** 参数。
2. 找到 `output_es_content` 配置项，配置参数值为如下字段，然后点击保存。

   ```ruby
   template_overwrite => true
   template => "/data/OpenSearch/dicts/logstash.json"
   ```

   > **说明**
   >
   > 上述模板文件 logstash.json 只能对之后新创建的 index 生效，无法对已经存在的 index 生效。如果当天的 Logstash index 已经存在，可以备份完里面的数据以后先删除这个 index 再进行下面的操作。

3. 重启 Logstash 节点：在集群列表页面右键点击您的 ELK 集群，点击重启，选择 Logstash 节点，点击提交，此时 Logstash 节点将会重启。

4. 待 Logstash 重启完成后，向 Logstash 发送数据：

   ```bash
   curl -d "中国驻洛杉矶领事馆" $LS_IP:9700
   ```

5. 参照 **Kibana 基本用法** 在浏览器中访问 Kibana 节点并配置 index pattern，然后点击左侧的 `Discover` 菜单项，显示近期接收到的日志，在搜索栏中输入“中国”，点击右侧的“搜索”按钮。
   
   如图，“中国”被高亮显示并且中间没有空格分隔，测试成功。

 ![search_result](../../images/search_result.png) 

本小节为用户呈现了英文日志从 Logstash 导入到 OpenSearch ，再通过 Kibana 进行搜索的完整的过程。

> **说明**
>
> 为了方便测试，此选择了 logstash-http-input 插件输入日志数据，在实际应用中用户可以选择多种 Logstash Input 插件从各种数据源获取日志数据，比如文件、log4j、syslog、QingStor 对象存储、Kafka 等。
>
> 此外，Logstash 默认将日志输出到 OpenSearch 中，用户可以通过 `output_es_content` 配置项，对这个输出过程进行定制。用户还可以通过 `output_conf_content` 配置项，选择将日志输出到除了 OpenSearch 之外的其他位置，比如 QingStor 对象存储。

## 操作步骤

1. 在集群详情页面找到任意 Logstash 节点的 IP 地址。参照 **Logstash 基本用法**，执行如下命令将一条模拟日志发往 Logstash 。

   ```bash
   curl -d "[09-07 15:57:26]: call_es_api [:10105/_cluster/health] Exception [error: [Errno -5] No address associated with hostname], try to sleep 10 second." $LS_IP:9700
   ```

2. 参照 **Kibana 基本用法**在浏览器中访问 Kibana 节点并配置 index pattern：点击左侧的 `Discover` 菜单项，显示近期接收到的日志，在搜索栏中输入 `error` ，点击右侧的“搜索”按钮。
   
   如图，`error` 被高亮显示，测试成功。

   ![en_search_result](../../images/en_search_result.png)
