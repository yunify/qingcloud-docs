---
title: "监控与报表"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 4
---

## Bucket 监控

Bucket 的监控项分为 3 大类：流量、存储、API，每一类的监控内容说明如下：

**流量**

- 外网出流量：从公网下载 Bucket 中的文件所产生的流量。
- 外网进流量：从公网上传文件到 Bucket 所产生的流量。
- zone内出流量：从青云平台与 Bucket 相同区域的资源下载 Bucket 文件所产生的流量。
- zone内进流量：从青云平台与 Bucket 相同区域上传文件到 Bucket 所产生的流量。

**存储**

- 存储空间：Bucket 所有文件占用的存储空间大小。

**API**

- 外网读请求：从公网调用该 Bucket 读相关的 API 的次数，如 HEAD/GET。
- 外网写请求：从公网调用该 Bucket 写相关的 API 的次数，如 PUT/DELETE。
- zone内读请求：从青云平台与 Bucket 相同区域调用该 Bucket 读相关的 API 的次数。
- zone内写请求：从青云平台与 Bucket 相同区域用该 Bucket 写相关的 API 的次数。

每类监控项可分别查询最近一天、最近一个月、最近 6 个月的监控信息。用曲线图来展示时间区间内的变化值，并将监控点的具体数值呈现在表格中。监控项可以在页面右侧选择切换。

![](bucket_monitor.png)

## Bucket 消费记录

Bucket 的计费项有 5 项，分别是：存储空间、外网出流量、外网进流量、zone内出流量、zone内进流量，即监控项中对应的内容。

![](bucket_consumption_overview.png)

控制台提供 Bucket 最近一年的消费查询，在查询时间范围内提供以计费项分组的整体消费视图，以及按日期每日消费的折线图和明细表。

![](bucket_consumption_daily.png)
