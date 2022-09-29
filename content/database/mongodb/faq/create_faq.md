---
title: "如何避免在创建索引时导致锁库问题？"
description: 本小节主要介绍 MongoDB 数据库创建问题。 
keyword: 配置参数问题,MongoDB,文档数据库,数据库
weight: 60
collapsible: false
draft: false

---



MongoDB  当前支持版本默认为前台构建索引，但是构建过程中会造成数据库锁库问题，为避免在创建索引导致锁库，建议您引用 Background 方式在后台构建索引，构建方式可参见以下内容。

>**注意**
>
>该方式可能造成索引构建时间变长，且读写时间可能增加，请根据实际情况选择构建方式。

```sql
db.user.createIndex( { name: 1}, {background: true} )
```

详细构建索引操作请参见[创建索引](https://www.mongodb.com/docs/v4.0/core/index-creation/)。

>**说明**
>
>MongoDB 创建索引支持以下 3 种方式。
>
>* 前台创建：MongoDB 支持在前台构建索引，可快速完成构建。该方式构建过程中会造成锁库，期间集群无法读写，索引构建完成后，集群恢复可正常操作。
>* 后台创建：MongoDB 支持在后台构建索引，后台构建不会阻止对集群的操作，但是构建过程较慢。
>* 混合创建：仅在 MongoDB 4.2 及以上版本支持，该过程仅在构建过程的开始和结束时持有排他锁。构建过程的其余部分产生交错读取和写入操作，当前版本不支持。