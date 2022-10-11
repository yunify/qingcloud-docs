---
title: "用户账号概述"
description: 本小节主要介绍 PostgreSQL 用户账号。 
keyword: PG,用户帐号,用户账号,高级账号,普通账号,PostgreSQL,关系型数据库,数据库
weight: 01
collapsible: false
draft: false
---

## 自定义账号

关系型数据库 PostgreSQL 支持管理 **高级权限**和**普通权限** 两种权限类型用户账号。

| <span style="display:inline-block;width:80px">账号类型</span> | <span style="display:inline-block;width:240px">权限范围</span> | <span style="display:inline-block;width:280px">说明</span>   |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 高级权限                                                     | 具备 `Superuser`、`CREATEDB`、`CREATEROLE` 权限，以及`REPLICATION`等创建数据库的管理权限。 | 一个集群支持创建多个高级权限账号。                           |
| 普通权限                                                     | 具备其创建表、索引、Schema 等数据库对象的管理权限。          | <li>一个集群支持创建多个普通账号。<li>普通账号不能创建和管理其他账号。 |

## 默认账号

创建 PostgreSQL 集群时，系统默认同步创建 `postgres`、`pgautofailover_replicator`、`pgautofailover_monitor`等运维管理账号。

默认集群没有业务账户及数据库，需要在 console 创建高级权限账户，并通过该账户进行管理。



