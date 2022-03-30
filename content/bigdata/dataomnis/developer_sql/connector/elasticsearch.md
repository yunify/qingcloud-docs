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

ElasticSearch 仅支持作为 Sink，写入数据到 ElasticSearch 的 index 中。

## DDL 定义

```sql
CREATE TABLE es_table(
    id INT,
    name STRING,
    score INT,
    PRIMARY KEY (id) NOT ENFORCED --定义主键则根据主键 upsert，否则是 append 模式
) WITH (
    'connector' = 'elasticsearch-7',
    'hosts' = 'http://localhost:9200'
    'index' = 'student',
    'sink.flush-on-checkpoint' = 'true',
    'sink.bulk-flush.max-actions' = '50',
    'sink.bulk-flush.max-size' =. '10mb',
    'sink.bulk-flush.interval' = '1000ms',
    'connection.max-retry-timeout' = '1000',
    'format' = 'json'
)
```

## ES 结果表参数

| 参数值                              | 是否必填 | 默认值   | 数据类型   | 描述                                                         |
| :---------------------------------- | :------- | :------- | :--------- | :----------------------------------------------------------- |
| connector                           | 是       | 无       | String     | 连接器，目前支持 `elasticesearch-7`，连接 Elasticsearch 7.x 及更高版本的集群。 |
| hosts                               | 是       | 无       | String     | ElasticSearch 连接地址，如：`http://host_name:9092;http://host_name:9093`。 |
| index                               | 是       | 空       | String     | ElasticSearch 索引名称，支持固定 Index（如：`myIndex`），也支持动态 Index（如：'index-{log_ts\|yyyy-MM-dd}' 或 '{field_name}' ）。详细请参考[动态索引](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/elasticsearch.html#dynamic-index)。 |
| document-id.key-delimiter           | 否       | _        | String     | 复合键的分隔符（默认为 "_"）。例如有 a、b、c 三个主键，某条数据的 a 字段为 "1"，b 字段为 "2"，c 字段为 "3"，使用默认分隔符，则最终写入 Elasticsearch 的 _id 是 "1_2_3"。 |
| username                            | 否       | 空       | String     | 连接 ElasticSearch 集群的用户名。                            |
| password                            | 否       | 无       | String     | 连接 ElasticSearch 集群的密码。如果定义了 username，则必须定义非空的 password。 |
| failure-handler                     | 否       | fall     | String     | ElasticSearch 请求失败时的故障处理策略。<li>fall：如果请求失败，则作业失败。<li>ignore：忽略失败并丢弃请求。<li>retry-rejected：重新添加由于队列容量满而失败的请求。<li>custom class name：使用 ActionRequestFailureHandler 子类进行故障处理（需要上传自定义程序包，并在作业的依赖资源处引用）。 |
| sink.flush-on-checkpoint            | 否       | true     | Boolean    | 进行 checkpoint 时，是否等待现有记录完全写入 ElasticSearch 。如果设置为 false，则可能导致恢复时部分数据丢失或者重复。 |
| sink.bulk-flush.max-actions         | 否       | 1000     | Integer    | 每个批量请求的最大缓冲操作数，设置为 `0 ` 禁用。             |
| sink.bulk-flush.max-size            | 否       | 2mb      | MemorySize | 每个批量请求缓冲区内存大小，必须以 mb 为单位。设置为 '0' 禁用。 |
| sink.bulk-flush.interval            | 否       | 1s       | Duration   | 周期性批量写入缓存数据到 ElasticSearch 的时间间隔。设置为 '0' 禁用。 |
| sink.bulk-flush.backoff.strategy    | 否       | DISABLED | String     | 批量写入操作失败时的重试策略。<li>DISABLED：不重试。<li>CONSTANT：常量等待时间重试，等待 `sink.bulk-flush.backoff.delay` 选项设置的时间后重试。<li>EXPONENTIAL：指数等待时间重试，首次失败等待 `sink.bulk-flush.backoff.delay` 选项设置的时间后重试，此后每次失败将指数增加下次的等待时间。 |
| sink.bulk-flush.backoff.max-retries | 否       | 8        | Integer    | 批量写入时，最大重试次数。                                   |
| sink.bulk-flush.backoff.delay       | 否       | 50ms     | Duration   | 批量写入失败时，每次重试之间的等待间隔。                     |
| connection.max-retry-timeout        | 否       | 无       | Duration   | 重试的最大超时时间。                                         |
| connection.path-prefix              | 否       | 空       | String     | 每个 REST 请求的前缀，如：'/v1'。                            |
| format                              | 否       | json     | String     | 输出格式。目前仅支持 `json`。详细信息， 请参考[JSON 格式页面](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/json.html)。 |

> **注意**
>
> ElasticSearch sink 支持 upsert 模式或 append 模式。如果在 DDL 上定义了主键，则 sink 以 upsert 模式与外部系统交换 UPDATE/DELETE 消息，否则，它以 append 模式运行，仅支持 INSERT 消息。

## 代码示例

### 示例一

```sql
-- 利用 datagen 随机生成数据源数据
CREATE TABLE datagen_source (
    name STRING,
    age INT
) WITH (
    'connector' = 'datagen'
)
 
-- 用 Flink SQL 注册 ElasticSearch index my-index  
CREATE TABLE elasticsearch7_sink (
    name STRING,
    age INT
) WITH (
    'connector' = 'elasticsearch-7',         -- 输出到 ElasticSearch7
    'username' = '$username',                -- ElasticSearch 用户名
    'password' = '$password',                -- ElasticSearch 密码
    'hosts' = 'http://192.168.100.19:9200',  -- ElasticSearch 连接地址
    'index' = 'my-index',                    -- ElasticSearch 的 Index 名
    'format' = 'json'                        -- 输出数据格式，目前只支持 'json'
);
 
INSERT INTO elasticsearch7_sink select * from datagen_source;
```

### 示例二

```sql
-- 用 Flink SQL 注册 MySQL 表 students，使用 CDC 机制流式获取 changelog
CREATE TABLE students(
    id INT,
    name STRING,
    score INT,
    PRIMARY KEY (id) NOT ENFORCED
) WITH (
    'connector' = 'mysql-cdc',
    'hostname' = 'localhost',
    'port' = '3306',
    'username' = '$username',
    'password' = '$password',
    'database-name' = 'detail',
    'table-name' = 'students'
)
 
-- 用 Flink SQL 注册 ElasticSearch index stu
CREATE TABLE es_stu(
    id INT,
    name STRING,
    score INT,
    PRIMARY KEY (id) NOT ENFORCED --定义主键则根据主键 upsert，否则是 append 模式
) WITH(
    'connector' = 'elasticsearch-7',           --输出到 ElasticSearch7
    'hosts' = 'http://192.168.100.19:9200',    --ElasticSearch 连接地址
    'index' = 'stu',                           --ElasticSearch 的 Index 名
    'sink.flush-on-checkpoint' = 'true',       --checkpoint 时批量写入
    'sink.bulk-flush.max-actions' = '50',      --每批次最多的操作数
    'sink.bulk-flush.max-size' = '10mb',       --每批次累计最大大小
    'sink.bulk-flush.interval' = '1000ms',     --批量写入的间隔
    'connection.max-retry-timeout' = '1000ms', --每次请求的最大超时时间
    'format' = 'json'                          --输出数据格式，目前只支持 'json'
);
 
-- 将 MySQL 表 students 的 upsert 流实时同步到 ElasticSearch 的 stu index 里
INSERT INTO es_stu SELECT id,name,score FROM students;
```

