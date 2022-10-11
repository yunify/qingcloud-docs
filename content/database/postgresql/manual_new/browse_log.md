---
title: "日志管理"
description: 本小节主要介绍如何获取 PostgreSQL 运行日志。 
keyword: 运行日志,日志管理,PostgreSQL,关系型数据库,数据库
weight: 90
collapsible: false
---

PostgreSQL 的日志默认保存30天，每天会自动保存一个日志文件，超过30天系统自动清理。日志的命名规则为`postgresqllog_xx.csv`，`xx`表示在当月的第多少天。

> **说明**
>
> 用户可设置 `log_min_duration_statement` 参数，进行慢日志记录。

本小节主要介绍如何预览 PostgreSQL 运行日志。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。

## 操作步骤

创建 PostgreSQL 数据库集群后，可在控制台集群详情页的**日志**页签查看对应日期的日志表，通过查询相应日期的表可以在线查看数据库的集群日志（primary 节点日志）。

1. 登录管理控制台。

2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 PostgreSQL**，进入集群管理页面。

3. 选择目标集群，点击目标集群 ID，进入集群详情页面。

4. 点击**配置参数**页签，进入集群配置参数管理页面。

5. 点击**修改属性**，公共参数**值**进入可编辑状态。

6. 修改日志参数后，点击**保存**。


   - log：显示集群日志
   - calls：根据 SQL 调用次数显示慢日志。
   - mean_time：根据 SQL 平均时间显示慢日志。
   - total_time：根据 SQL 总运行时间显示慢日志。
   - max_time：根据 SQL 最大执行时间显示慢日志。

   <img src="../_images/confi_log_para.png" style="zoom:100%;" />

7. 点击日志，可查看对应的日志列表。

   <img src="../_images/view_log.png" style="zoom:100%;" />
   
   您也可以连接 PostgreSQL 数据库在线查看数据的日志，同时可以借助 sql 的能力进行日志的分析。
   
   <img src="../_images/view_log_1.png" style="zoom:100%;" />
