---
title: "验证结果"
description: 本小节主要介绍如何验证 JAR 作业最佳实践结果。
keywords: 大数据工作台,最佳实践,JAR 作业
weight: 40
collapsible: false
draft: false
---

1. 通过 [ClickHouse连接工具](http://ui.tabix.io/#!/login)登录 ClickHouse。
2. 执行以下命令，查询从 `2022-01-18 00:00:00` 开始，消费 Top 3 的用户及消费总金额。

    ```sql
    select supplier, SUM(price) as total
    from top_price
    where start > '2022-01-18 00:00:00'
    group by supplier
    order by total desc limit 3;
    ```


