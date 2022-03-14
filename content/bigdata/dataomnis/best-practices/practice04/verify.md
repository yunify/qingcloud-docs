---
title: "验证结果"
description:  
keywords: 
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


