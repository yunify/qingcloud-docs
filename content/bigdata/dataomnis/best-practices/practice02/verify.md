---
title: "验证结果"
description: 本小节主要介绍如何验证 SQL 作业最佳实践结果。
keywords: 大数据工作台,最佳实践,SQL 作业
weight: 40
collapsible: false
draft: false
---

## 向 Kafka 发送消息

登录 Kafka 客户端，执行如下命令，向 Kafka 发送消息，模拟网站点击流数据。

```
./bin/kafka-console-producer.sh --broker-list 10.1.0.10:9092 --topic uvpv-demo
{"record_type":0, "user_id": 2, "client_ip": "100.0.0.2", "product_id": 101, "create_time": "2021-09-08 16:20:00"}
{"record_type":0, "user_id": 3, "client_ip": "100.0.0.3", "product_id": 103, "create_time": "2021-09-08 16:21:00"}
{"record_type":1, "user_id": 2, "client_ip": "100.0.0.1", "product_id": 101, "create_time": "2021-09-08 16:22:10"}
{"record_type":0, "user_id": 2, "client_ip": "100.0.0.2", "product_id": 102, "create_time": "2021-09-08 16:23:20"}
{"record_type":0, "user_id": 3, "client_ip": "100.0.0.3", "product_id": 101, "create_time": "2021-09-08 16:24:50"}
{"record_type":1, "user_id": 1, "client_ip": "100.0.0.1", "product_id": 101, "create_time": "2021-09-08 16:25:00"}
{"record_type":0, "user_id": 1, "client_ip": "100.0.0.2", "product_id": 104, "create_time": "2021-09-08 16:27:00"}
{"record_type":0, "user_id": 3, "client_ip": "100.0.0.3", "product_id": 102, "create_time": "2021-09-08 16:29:00"}
{"record_type":1, "user_id": 2, "client_ip": "100.0.0.1", "product_id": 103, "create_time": "2021-09-08 16:30:00"}
{"record_type":0, "user_id": 2, "client_ip": "100.0.0.2", "product_id": 101, "create_time": "2021-09-08 16:31:00"}
{"record_type":0, "user_id": 3, "client_ip": "100.0.0.3", "product_id": 102, "create_time": "2021-09-08 16:32:00"}
{"record_type":1, "user_id": 2, "client_ip": "100.0.0.1", "product_id": 101, "create_time": "2021-09-08 17:33:00"}
```

## 验证结果

1. 通过 [ClickHouse 连接工具](http://ui.tabix.io/#!/login)登录 ClickHouse。
2. 执行以下命令，清空表数据。

    ```sql
    truncate table output_conversion_rate;
    truncate table output_pv;
    truncate table output_uv;
    ```

3. 执行以下命令，查询合并的数据。
   
    **当前累计的 uv**

    ```sql
    select userids,uv from output_uv final ;
    ```
    **最新时刻的转化率**
    ```sql
    select conversion_rate,rate from output_conversion_rate final ;
    ```
    **每 10 分钟统计的 pv**
    ```sql
    select sum(pv) as pv,stt,edt from output_pv group by stt,edt;
    ```

4. 或者也可以手动合并，正常查询。

    ```sql
    OPTIMIZE TABLE output_uv FINAL;
    OPTIMIZE TABLE output_conversion_rate FINAL;
    select * from output_uv;
    select * from output_conversion_rate;
    select sum(pv) as pv,stt,edt from output_pv group by stt,edt;
    ```