---
title: "参数介绍"
description: 本小节主要介绍 PolonDB 常用配置项。 
keywords: PolonDB 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 PolonDB 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 PolonDB 常见账号和访问配置参数的含义。更多集群高可用参数，请参见集群**配置参数**页面说明。

## 账号与访问

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   数据库名称    |  -       |   表示创建集群时，创建的初始数据库。 默认为 **qingcloud** 。<li>集群创建后不可修改。  |
|   user_name    |  -       |   表示创建集群时，创建的初始用户名称。 默认为 **qingcloud** 。<li>集群创建后不可修改。  |
|   密码   |  -       |   表示创建集群时，创建的初始用户密码。 默认为 **qingcloud1234** 。<li>集群创建后不可修改。  |
|   端口    |  1025 ~ 65534      |   表示 PostgreSQL 数据库端口号。默认为 5432。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>修改后将重启数据库。</li></span> |

## 参数标识说明

- 需重启的参数

  需重启生效的参数由 `[restart]` 进行标识。

- 参数单位

  参数单位由 `[unit: MB]` 进行标识。

- 自动设置的参数

  自动进行最优设置的参数由 `[0 is automatic set.]` 进行标识。
