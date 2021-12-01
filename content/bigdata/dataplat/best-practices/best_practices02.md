---
title: "实时计算 uv、pv、转化率等指标（使用 Jar 作业）"
description: 本小节主要介绍。 
keywords: 
weight: 20
collapsible: false
draft: false
---

用于读取页面点击流日志，根据渠道、版本、地区、新老用户四个维度 统计独立访客数(uv)、页面访问数(pv)、页面进入次数(sv)、用户跳出次数(uj)、持续访问时间(du) 并按照窗口写入到clickhouse供后续的分析处理展示。

## 准备 ClickHouse 环境

1. 申请 ClickHouse 实例。
2. 在 ClickHouse 实例中，创建表。

```sql
create table visitor_stats
(
    stt     DateTime,
    edt     DateTime,
    vc      String,
    ch      String,
    ar      String,
    is_new  String,
    uv_ct   UInt64,
    pv_ct   UInt64,
    sv_ct   UInt64,
    uj_ct   UInt64,
    dur_sum UInt64,
    ts      UInt64
) engine = ReplacingMergeTree(ts)
        PARTITION BY toYYYYMMDD(stt)
        ORDER BY (stt, edt, is_new, vc, ch, ar)
        SETTINGS index_granularity = 8192;
```



## 创建工作空间

## 配置网络

## 创建计算集群

## 上传 Jar 包

解压[product-demo.zip](https://wiki.yunify.com/download/attachments/91871362/product-demo.zip?version=1&modificationDate=1638683201473&api=v2)，将flink-demo.jar上传到资源管理中。

## 创建 Jar 包作业



