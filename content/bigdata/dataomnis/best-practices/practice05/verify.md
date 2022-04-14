---
title: "验证结果"
description: 本小节主要介绍如何验证 SQL 作业最佳实践结果。
keywords: 大数据工作台,最佳实践,SQL 作业
weight: 50
collapsible: false
draft: false
---

## 统计每省前 3 热点词汇

1. 通过 [ClickHouse 连接工具](http://ui.tabix.io/#!/login)登录 ClickHouse。
2. 执行以下命令，查询每省前 3 热点词汇。

```sql
select *
from (select province, groupArray(3)(word) as keywords, groupArray(3)(total_count) as keywords_counts
      from (
            select word, province, sum(ct) as total_count
            from clickhouse_key_words
            where stt > '2022-01-21 00:00:00'
              and edt < '2022-01-21 23:59:59'
            group by word, province
            order by province, total_count desc)
      group by province
      order by province) ARRAY JOIN keywords, keywords_counts;
```

## 统计女性热点词汇前 10

1. 通过 [ClickHouse 连接工具](http://ui.tabix.io/#!/login)登录 ClickHouse。
2. 执行以下命令，查询女性热点词汇前 10。

    ```sql
    select word, sum(ct) as total_count
    from clickhouse_key_words
    where sex = '女'
    group by word
    order by total_count desc
    limit 10;
    ```
