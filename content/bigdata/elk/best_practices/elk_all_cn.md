---
title: "ELK 中文日志搜索"
description: 本小节主要介绍 ELK 中文日志搜索场景。 
keywords: ELK 日志搜索,
weight: 05
collapsible: false
draft: false
---

本小节为用户呈现了中文日志从 Logstash 导入到 Elasticsearch，再通过 Kibana 进行搜索的完整的过程。

> **说明**
>
> 从版本 `ELK 5.6.16 - QingCloud 1.5.0` 起已内置用于指定 ik 分词器的模板文件，用户可以直接使用（在 Logstash 节点的 /data/elasticsearch/dicts 目录下）。
>
> 如果是以前的版本，需要事先把 **模板文件** 下载到 Logstash 节点的 `/data/elasticserach/dicts/` 目录下再进行后面的操作，否则 Logstash 会因找不到模板文件而无法启动（可以直接登录到节点下载，也可以通过如下命令上传，注意 URL 最后的 `/` 不能省略。

```bash
curl -sL https://docs.qingcloud.com/product/big_data/elk/logstash.json |
curl -F "file=@-;filename=logstash.json" $LS_IP/dicts/
```

## 操作步骤

1. 在集群详情页面，切换到参数配置页面，选择 Logstash 节点，在 `output_es_content` 配置项后追加如下内容，然后点击保存。

   ```ruby
   template_overwrite => true
   template => "/data/elasticsearch/dicts/logstash.json"
   ```

   > **说明**
   >
   > 上述模板文件 logstash.json 只能对之后新创建的 index 生效，无法对已经存在的 index 生效。如果当天的 Logstash index 已经存在，可以备份完里面的数据以后先删除这个 index 再进行下面的操作。

2. 重启 Logstash 节点：在集群列表页面右键点击您的 ELK 集群，点击重启，选择 Logstash 节点，点击提交，此时 Logstash 节点将会重启。

3. 待 Logstash 重启完成后，向 Logstash 发送数据：

   ```bash
   curl -d "中国驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首" $LS_IP:9700
   ```

4. 参照 **Kibana 基本用法** 在浏览器中访问 Kibana 节点并配置 index pattern，然后点击左侧的 `Discover` 菜单项，显示近期接收到的日志，在搜索栏中输入“中国”，点击右侧的“搜索”按钮。
   
   如图，“中国”被高亮显示并且中间没有空格分隔，测试成功。

 ![search_result](../../images/search_result.png) 
