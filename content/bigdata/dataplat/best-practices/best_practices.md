---
title: "将 MySQL 数据实时同步到 Elasticsearch"
description: 本小节主要介绍。 
keywords: 
weight: 10
collapsible: false
draft: false
---

将 MySQL 数据实时（upsert 或 append） 同步到 Elasticsearch 进行分析、展示。

## 准备 MySQL 数据源

1. 申请 MySQL 实例。
2. 在 MySQL 实例中，创建表。

```sql
create table if not exists products(
    id int(11),
    name varchar(10),
    description varchar(10),
    primary key (`id`)
)engine=innodb auto_increment=4 default charset=utf8mb4 collate=utf8mb4_bin row_format=compact comment='商品表';
 
INSERT INTO products VALUES (1,'zs','abc');
INSERT INTO products VALUES (1,'ls','ccd');
INSERT INTO products VALUES (1,'ww','lalala');
```



## 创建工作空间

## 配置网络

## 创建计算集群

## 创建 SQL 作业



## 创建 Flink 任务到集群

```sql
DROP TABLE IF EXISTS students;
CREATE TABLE students(
    id INT,
    name STRING,
    score    INT,
    PRIMARY KEY (id) NOT ENFORCED
) WITH (
      'connector' = 'mysql-cdc',
      'hostname' = '192.168.100.2',
      'port' = '3306',
      'username' = 'test01',
      'password' = 'Gx12345678@',
      'database-name' = 'demo',
      'table-name' = 'students'
);
 
DROP TABLE IF EXISTS es_stu;
CREATE TABLE es_stu(
    id INT,
    name STRING,
    score INT,
    PRIMARY KEY (id) NOT ENFORCED --定义主键则根据主键upsert，否则是append模式
)WITH(
    'connector' = 'elasticsearch-7', --输出到es7
    'hosts' = 'http://192.168.100.19:9200',  --es连接地址
    'index' = 'stu',                         --es的index名
    'sink.flush-on-checkpoint' = 'true',     --checkpoint时不允许批量写入
    'sink.bulk-flush.max-actions' = '50',    --每批次最多的条数
    'sink.bulk-flush.max-size' = '10mb',     --每批次累计最大大小
    'sink.bulk-flush.interval' = '1000',     --批量写入的间隔(ms)
    'connection.max-retry-timeout' = '1000', --每次请求的最大超时时间(ms)
    'format' = 'json'                        --输出数据格式，目前只支持 'json'
);
 
INSERT INTO es_stu SELECT id,name,score FROM students;
```

## 验证结果

进入 [Kibana](https://www.elastic.co/cn/kibana/) 验证写入。

```
GET stu/_search
```

<img src="/bigdata/dataplat/_images/bestpractice_kibana.png" alt="Kibana" style="zoom:50%;" />

