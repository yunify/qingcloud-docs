---
title: "参数介绍"
description: 本小节主要介绍 PostgreSQL 常用配置项。 
keywords: PostgreSQL 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 PostgreSQL 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 PostgreSQL 不可修改配置参数的含义，可修改参数说明请参见**配置参数**页面具体参数说明。

## 不可修改参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   数据库版本    |  11、10、9        |   表示当前数据库 PostgreSQL 内核参数。 <li>不可修改。  |
|   数据库名称      |  -      |   表示新创建的数据库名称。 <li>默认为 `qingcloud`。<li>初始化集群的时候生效，创建后修改无效。  |
|   数据库用户名  |  -  |  表示新创建的数据库用户名。<li>默认为 `pguser`。<li>初始化集群的时候生效，创建后修改无效。 |
|   数据库密码 | - |  表示新创建的数据库密码。 <li> 默认为 `qingcloud1234`。  |
