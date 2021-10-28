---
title: "Elasticsearch 获取中文分词"
description: 本小节主要介绍 Elasticsearch 使用 IK Analysis 插件和自定义字典进行中文分词。
keywords: Elasticsearch 中文分词,
weight: 15
collapsible: false
draft: false
---

本小节为用户呈现了直接调用 Elasticsearch API 的中文分词使用方式，为了在 Elasticsearch 中获取更好的中文分词效果，ELK 集成了 IK Analysis 中文分词插件，并为该插件提供了结巴分词的词库和 IK 自带的搜狗词库，同时还支持用户上传自定义词典。IK Analysis 插件用法请参考 [IK Analysis plugin](https://github.com/medcl/elasticsearch-analysis-ik)。

## 操作步骤

1. 把自定义字典上传到可访问到的 HTTP 服务器上，本示例将通过如下命令上传到某个 Logstash 节点，用户也可以放在其他任意 HTTP 服务器，只要 Elasticsearch 节点可以访问到即可：

   > **说明**
   >
   > URL最后的 `/` 不能省略。

   ```bash
   curl -F "file=@-;filename=mydict.dic" $LS_IP/dicts/ <<- EOF
   青云
   优帆科技
   优帆
   EOF
   ```

   上传成功后可通过访问 $LS_IP/dicts/mydict.dic 来查看上传的字典文件。

2. 在集群详情页面中切换到配置参数标签页，选择"Elasticsearch节点"进行参数配置，设置 `remote_ext_dict` 设置项为用户自定义字典的可访问 URL（如示例的 `http://$LS_IP/dicts/mydict.dic`）后保存, 然后在集群列表页面 **重启** 集群中的 Elasticsearch 节点。

3. 执行如下命令测试中文分词功能。

   ```bash
   INDEX=chinese-news # 可根据实际情况调整
   MAPPING_TYPE=_doc  # ELK 6.8.0 - QingCloud 2.1.0 以前版本请去掉开头的下划线，即：doc
   
   # 创建 $INDEX 索引
   curl -XPUT $ES_IP:9200/$INDEX; echo
   
   URL=$ES_IP:9200/$INDEX
   # ELK 6.8.6 及以下版本请使用如下地址
   # URL=$ES_IP:9200/$INDEX/$MAPPING_TYPE
   
   # 创建 mapping
   curl -s -H "Content-Type: application/json" $URL/_mapping -d'
   {
       "properties": {
           "content": {
               "type": "text",
               "analyzer": "ik_max_word",
               "search_analyzer": "ik_smart"
           }
       }
   }'; echo
   
   # 索引 一些 文档
   postData() {
     local url=$ES_IP:9200/$INDEX/$MAPPING_TYPE
     curl -H "Content-Type: application/json" -d'{"content":"'$1'"}' $url; echo
   }
   
   sampleData="
   美国留给伊拉克的是个烂摊子吗
   公安部：各地校车将享最高路权
   中韩渔警冲突调查：韩警平均每天扣1艘中国渔船
   中国驻洛杉矶领事馆遭亚裔男子枪击，嫌犯已自首
   北京优帆科技有限公司于2012年4月正式成立，是全球首家实现资源秒级响应并按秒计量的基础云服务商
   青云的12字决：从初创企业到云生态的蜕变
   "
   
   for data in $sampleData; do postData "$data"; done
   
   # 高亮查询
   query() {
     curl -s -H "Content-Type: application/json" $ES_IP:9200/$INDEX/$MAPPING_TYPE/_search -d@- <<- EOF |
     {
         "query" : { "match" : { "content" : "$1" }},
         "highlight" : {
             "pre_tags" : ["<tag1>", "<tag2>"],
             "post_tags" : ["</tag1>", "</tag2>"],
             "fields" : {
                 "content" : {}
             }
         }
     }
   EOF
     grep --color "<tag1>[^<]*</tag1>"
   }
   
   words="
   中国
   青云
   优帆科技
   "
   sleep 5; for word in $words; do query "$word"; done
   ```

4. 查看中文分词结果，结果如下图红色部分所示即为成功。即"中国"、"青云"、"优帆科技"被当做固定的中文分词表示。

   ![chinese_split](../../images/chinese_split.png)

5. 可根据实际需要随时更新用户自定义字典，Elasticsearch 会自动检测 HTTP 响应头中的 Last-Modified 和 ETag 的变化，来进行分词字典的热更新。