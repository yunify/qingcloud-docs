---
title: "数据分析引擎 Elasticsearch"
description: 本小节主要介绍数据分析引擎 Elasticsearch 内置 Connector。 
keywords: 大数据工作台,内置 Connector,Elasticsearch
weight: 70
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

Elasticsearch upsert、append 写数据。

## DDL 定义

```sql
CREATE TABLE es_table(
    id INT,
    name STRING,
    score INT,
    PRIMARY KEY (id) NOT ENFORCED --定义主键则根据主键upsert，否则是append模式
) WITH (
    'connector' = 'elasticsearch-7',
    'hosts' = 'http://localhost:9200'
    'index' = 'student',
    'sink.flush-on-checkpoint' = 'true',
    'sink.bulk-flush.max-actions' = '50',
    'sink.bulk-flush.max-size' =. '10mb',
    'sink.bulk-flush.interval' = '1000',
    'connection.max-retry-timeout' = '1000',
    'format' = 'json'
)
```

## ES 结果表参数

| 参数值                              | 必填 | 默认值   | 数据类型   | 描述                                                         |
| :---------------------------------- | :--- | :------- | :--------- | :----------------------------------------------------------- |
| connector                           | 是   | 无       | String     | 固定值为 `elasticesearch-7`。                                |
| hosts                               | 是   | 无       | String     | ES Server 地址 如：127.0.0.1:9200。                          |
| index                               | 是   | 空       | String     | ES 索引名称。                                                |
| username                            | 否   | 空       | String     | 用户名。                                                     |
| password                            | 否   | 无       | String     | 如果定义了 username，则必须定义非空的 password。             |
| document-id.key-delimiter           | 否   | _        | String     | 文件 ID 的分隔符。                                           |
| failure-handler                     | 否   | fall     | String     | ES请求失败时的故障处理策略。<li>fall：如果请求失败，则作业失败。<li>ignore：忽略失败并删除请求。<li>retry-rejected：重新添加由于队列容量满而失败的请求。<li>custom class name：使用 ActionRequestFailureHandler 子类进行故障处理。 |
| sink.flush-on-checkpoint            | 否   | true     | Boolean    | 是否在 checkpoint 时执行 flush。禁用该功能后，在 ES 进行 ck 时，connector 将不等待确认素有 pending 请求已完成。因此不会提供 atleast-once 保证。 |
| sink.bulk-flush.backoff.strategy    | 否   | DISABLED | String     | 如果由于临时请求错误导致 flush 操作失败，则设置 sink.bulk-flush.backoff.startegy 指定重试策略。<li>DISABLED：不执行重试。<li>CONSTANT：常量回退，每次回退等待时间相同。<li>EXPONENTIAL：指数回退，每次回退等待时间指数递增。 |
| sink.bulk-flush.backoff.max-retries | 否   | 8        | Integer    | 最大回退重试次数。                                           |
| sink.bulk-flush.backoff.delay       | 否   | 50ms     | Duration   | 每次回退尝试之间的延迟。                                     |
| sink.bulk-flush.max-actions         | 否   | 1000     | Integer    | 每个批量请求的最大缓冲操作数。                               |
| sink.bulk-flush.max-size            | 否   | 2mb      | MemorySize | 存放请求的缓冲区内存最大值。                                 |
| sink.bulk-flush.interval            | 否   | 1s       | Duration   | flush 的间隔。                                               |
| connection.path-prefix              | 否   | 空       | String     | 要添加到每个 REST 通信中的前缀字符串。                       |

## 代码示例

```sql
CREATE TABLE students(
    id INT,
    name STRING,
    score INT,
    PRIMARY KEY (id) NOT ENFORCED
) WITH (
    'connector' = 'mysql-cdc',
    'hostname' = 'localhost',
    'port' = '3306',
    'username' = 'root',
    'password' = '123456',
    'database-name' = 'detail',
    'table-name' = 'students'
)
 
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
