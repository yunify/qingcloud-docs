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

|<span style="display:inline-block;width:80px">账号类型</span> |<span style="display:inline-block;width:240px">权限范围</span>|<span style="display:inline-block;width:280px">说明</span> |
|:----|:----|:----|
|高级权限   |具备 `CREATEDB`、`CREATEROLE`、`REPLICATION` 权限，以及其创建数据库的管理权限。 |<li>一个集群仅支持创建一个高级权限账号。|
|普通权限   | 具备其创建表、索引、Schema 等数据库对象的管理权限。|<li>一个集群支持创建多个普通账号。<li>普通账号不能创建和管理其他账号。|

## 默认账号

创建 PostgreSQL 集群时，系统默认同步创建 `postgis`、`postgres`、`replica`、`zbx_monitor` 等运维管理账号。

PostgreSQL 在初始化过程中，根据服务器参数中用户输入的数据库名称，数据库用户和密码创建数据库账户。为了方便维护，将自动创建数据库超级用户(superuser)账号 `root`，密码与用户在服务器参数中设置的数据库密码相同。

> **注意**
> 
> -默认账号仅用用于运维服务管理，不支持手动创建和修改。
> 
> -系统保留默认账号进行自动化运维和数据同步，请勿删除，以免破坏系统的运行。
