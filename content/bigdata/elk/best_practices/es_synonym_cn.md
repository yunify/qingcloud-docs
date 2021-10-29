---
title: "Elasticsearch 同义词搜索"
description: 本小节主要介绍 Elasticsearch 同义词词典配置与同义词搜索。
keywords: Elasticsearch 同义词,
weight: 20
collapsible: false
draft: false
---

本小节主要介绍如何配置 Elasticsearch 同义词词典及如何进行同义词搜索。

## 操作步骤

1. 按照每行一组同义词、词语之间以 **半角** 逗号 `,` 分隔的格式准备名为 `synonym.txt` 的同义词词典文件。

   ```bash
   番茄,西红柿 => 西红柿,番茄
   ```

   > **说明**
   >
   > 详细的 synonym.txt 文件配置说明请参考 [官方文档](https://www.elastic.co/guide/en/elasticsearch/reference/6.7/analysis-synonym-tokenfilter.html)。
   
2. 通过如下命令在 **所有** Elasticsearch 节点和 Elasticsearch 专有主节点上传词典：

   > **注意**
   >
   > URL最后的 `/` 不能省略

   ```bash
   curl -F "file=@-;filename=synonym.txt" $ES_IP/analysis/ <<- EOF
   番茄,西红柿 => 西红柿,番茄
   EOF
   ```

   上传成功后可通过访问 http://$ES_IP/analysis/synonym.txt 来查看同义词文件。

   > **说明**
   >
   > `ELK 5.6.16 - QingCloud 1.5.0` 之前的版本需要重启集群中的 Elasticsearch 节点使词典生效，待集群恢复 `green` 状态（可通过以下命令查看状态，等待 `status` 字段变为 `green` ）：
   
   ```bash
   curl $ES_IP:9200/_cluster/health?pretty
   ```

3. 进行同义词搜索测试。使用如下 bash 脚本测试同义词搜索功能：

   ```bash
   INDEX=synonym-test
   MAPPING_TYPE=_doc      # ELK 6.8.0 - QingCloud 2.1.0 以前版本请去掉开头的下划线，即：doc
   
   # 创建 索引
   curl -H "Content-Type: application/json" -XPUT http://$ES_IP:9200/$INDEX -d'
   {
     "settings": {
       "index": {
         "analysis": {
           "analyzer": {
             "by_smart": {
               "type": "custom",
               "tokenizer": "ik_smart",
               "filter": ["by_tfr","by_sfr"],
               "char_filter": ["by_cfr"]
             },
             "by_max_word": {
               "type": "custom",
               "tokenizer": "ik_max_word",
               "filter": ["by_tfr","by_sfr"],
               "char_filter": ["by_cfr"]
             }
           },
           "filter": {
             "by_tfr": {
               "type": "stop",
               "stopwords": [" "]
             },
             "by_sfr": {
               "type": "synonym",
               "synonyms_path": "analysis/synonym.txt"
             }
           },
           "char_filter": {
             "by_cfr": {
               "type": "mapping",
               "mappings": ["| => |"]
             }
           }
         }
       }
     }
   }'
   
   # 创建 mapping
   
   URL=$ES_IP:9200/$INDEX
   # ELK 6.8.6 及以下版本请使用如下地址
   # URL=$ES_IP:9200/$INDEX/$MAPPING_TYPE
   
   curl -H "Content-Type: application/json" -XPUT $URL/_mapping -d'
   {
     "properties": {
       "content": {
         "type": "text",
         "analyzer": "by_max_word",
         "search_analyzer": "by_smart"
       }
     }
   }'
   
   # 索引 一些 文档
   postData() {
     curl -H "Content-Type: application/json" -d'{"content":"'$1'"}' $ES_IP:9200/$INDEX/$MAPPING_TYPE; echo
   }
   
   phrases="
   我有一个西红柿
   番茄炒蛋饭
   西红柿鸡蛋面
   "
   for phrase in $phrases; do postData $phrase; done
   
   # 高亮 查询
   sleep 5; curl -s -H "Content-Type: application/json" -XPOST http://$ES_IP:9200/$INDEX/_search  -d'{
       "query" : { "match" : { "content" : "番茄" }},
       "highlight" : {
           "pre_tags" : ["<tag1>", "<tag2>"],
           "post_tags" : ["</tag1>", "</tag2>"],
           "fields" : {
               "content" : {}
           }
       }
   }' | grep --color "<tag1>[^<]*</tag1>"
   ```

4. 查看同义词搜索结果。如下图所示，搜索结果包含"西红柿"和"番茄"的所有文档。

   ![synonym_result](../../images/synonym_result.png)

   > **说明**
   >
   > QingStor 对象存储为用户提供了云端可无限扩展的通用数据存储服务，具有安全可靠、简单易用、高性能、低成本等特点。 用户可以将数据、日志、静态资源等多种文件类型，通过多种方式上传至 QingStor 对象存储中，以满足日常数据存储、归档、分析等需求。为了更好的满足用户的需求，青云提供了Elasticsearch、Logstash 等与 QingStor 对象存储的集成功能。
