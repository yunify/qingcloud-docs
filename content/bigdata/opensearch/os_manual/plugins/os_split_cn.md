---
title: "使用 IK 分词插件"
description: 本小节主要介绍 使用 IK Analysis 插件和自定义字典进行中文分词。
keyword: 搜索分析,IK 分词,IK Analysis,自定义分词,中文分词,OpenSearch,搜索引擎
weight: 20
collapsible: false
draft: false
---

为了在 OpenSearch 中获取更好的中文分词效果，OpenSearch 服务集成了 IK 分词插件，并为该插件提供了结巴分词的词库和 IK 自带的词库，同时还支持用户上传自定义词典。

[IK 分词插件（OpenSearch）](https://github.com/soosinha/opensearch-analysis-ik)是基于 Elasticsearch 开源插件 [IK Analysis](https://github.com/medcl/elasticsearch-analysis-ik) 开发，集成了 Lucene 的 IK 分析器，支持自定义词典，可用于 OpenSearch 的 IK 分词分析。

本小节主要介绍如何使用 IK 分词插件。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 若需通过外网访问 Dashboard，请先通过设置[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## IK 分词示例指导

登录 Dashboard 可视化管理页面，在 Dev Tools 的 Console 中分别执行如下步骤，可查看分词效果。

### 步骤 1：创建索引

```bash
PUT /ik-test
```

### 步骤 2：创建 Mapping

```bash
POST /ik-test/_mapping
{
  "properties": {
    "content": {
      "type": "text",
      "analyzer": "ik_max_word",
      "search_analyzer": "ik_smart"
    }
  }
}
```

### 步骤 3：创建文档

```bash
POST /ik-test/_create/1
{
  "content": "美国留给伊拉克的是个烂摊子吗"
}
 
POST /ik-test/_create/2
{
  "content": "公安部：各地校车将享最高路权"
}
 
POST /ik-test/_create/3
{
  "content": "中韩渔警冲突调查：韩警平均每天扣1艘中国渔船"
}
 
POST /ik-test/_create/4
{
  "content": "中国驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首"
}
 
POST /ik-test/_create/5
{
  "content": "北京优帆科技有限公司于2012年4月正式成立，是全球首家实现资源秒级响应并按秒计量的基础云服务商"
}
```

### 步骤 4：查看分词效果

```bash
POST /ik-test/_search
{
  "query": {
    "match": {
      "content": "优帆科技"
    }
  },
  "highlight": {
    "pre_tags": [
      "<tag1>",
      "<tag2>"
    ],
    "post_tags": [
      "</tag1>",
      "</tag2>"
    ],
    "fields": {
      "content": {}
    }
  }
}
```

## 自定义词库

### 步骤 1：上传自定义字典

把自定义字典上传到可访问到的 HTTP 服务器上。以下示例，将将自定义字典上传到 Logstash 节点。用户也可以上传自定义词典到其他任意 OpenSearch 节点可以访问 HTTP 服务器。

> **说明**
>
> URL最后的 `/` 不能省略。

```bash
curl -F "file=@-;filename=mydict.dic" <Logstash_IP>/dicts/ <<- EOF
云计算
大数据
搜索引擎
EOF
```

上传成功后可通过访问 `<Logstash_IP>/dicts/mydict.dic` 路径，查看已上传的字典文件。

### 步骤 2：修改配置参数

1. 登录管理控制台，选择目标 **OpenSearch 服务**，进入集群详情页面。  
   在**配置参数**页签，选择 **OpenSearch 节点（热）**参数类型，配置参数为如下参数值：  
   **remote_exe_dict** 配置为用户自定义字典的可访问 URL，例如 `http://<Logstash_IP>/dicts/mydict.dic`。

2. 重启 Logstash 节点，启动插件服务。  
   在基本属性区域展开操作栏，点击**重启**并选择 **OpenSearch 节点**，重启 OpenSearch 节点。

### 步骤 3：查看分词效果

执行如下命令，验证中文分词功能。可根据实际需要随时更新用户自定义字典，OpenSearch 会自动检测 HTTP 响应头中的 Last-Modified 和 ETag 的变化，来进行分词字典的热更新。

```bash
INDEX=chinese-news # 可根据实际情况调整
MAPPING_TYPE=_doc  
   
# 创建 $INDEX 索引
curl -XPUT $OS_IP:9200/$INDEX; echo
   
URL=$OS_IP:9200/$INDEX
   
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
   
# 索引文档
postData() {
  local url=$OS_IP:9200/$INDEX/$MAPPING_TYPE
curl -H "Content-Type: application/json" -d'{"content":"'$1'"}' $url; echo
}
   
sampleData="
【云计算大数据】搜索引擎选择
互联网金融的发展、风险与监管
云计算在互联网搜索中的应用 - 国务院新闻办公室
终于有人把云计算、大数据和人工智能讲明白了！
浅谈物联网、云计算、大数据、人工智能的关系？
"
   
for data in $sampleData; do postData "$data"; done
   
# 高亮查询
query() {
  curl -s -H "Content-Type: application/json" $OS_IP:9200/$INDEX/$MAPPING_TYPE/_search -d@- <<- EOF |
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
云计算
大数据
搜索引擎
"
sleep 5; for word in $words; do query "$word"; done
```
