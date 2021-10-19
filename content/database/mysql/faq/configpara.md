---
title: "配置参数"
description: 本小节主要介绍 MySQL Plus 配置参数常见问题。 
keywords: mysql plus 配置参数问题
weight: 50
collapsible: false
draft: false
---

## AppCenter 是否支持修改数据库参数参数？

支持。

详细可修改参数，请参见[配置参数](../../../manual/config_para/config_para_info)。

若需修改未暴露的参数，请提工单反馈。MySQL Plus 研发团队评估后，将确定是否暴露在控制台。

## 哪些参数修改后将重启数据库?

管理控制台修改参数，部分参数修改后会重启数据库服务，在参数配置列表中将提供说明，还可在[配置参数](../../../manual/config_para/config_para_info)中查阅。

- 管理控制台可修改的参数，重启后不会失效。
- 对于在线更改的参数，或者后台临时修改的配置文件，重启会失效。

## 如何设置 MySQL 字符集编码?

通过 `character_set_server` 全局变量设置：

- 在[配置参数](../../..//manual/config_para/modify_para)中，修改`character_set_server`参数项，修改完后需要重启生效。

- 提工单反馈，使用**root**账号登录数据库进行修改，能及时生效，但是重启数据库后失效。

MySQL 除了系统全局变量可以设定编码之外，还可以在 `create database` 的 SQL 中设置默认编码，也可以通过`alter table`修改表或字段中编码，具体的 SQL 可以参照 MySQL 官网手册 [Configuring Application Character Set and Collation](https://dev.mysql.com/doc/refman/5.7/en/charset-applications.html)、[Table Character Set and Collation](http://dev.mysql.com/doc/refman/5.7/en/charset-table.html)、[Column Character Set Conversion](http://dev.mysql.com/doc/refman/5.7/en/charset-conversion.html)。

设置编码后，通过客户端连接数据库时，需使用 `set names` 语句来选择的编码，如果编码与数据库中存储的 `charset` 不一致，MySQL 将自动转换。

## 如何修改 innodb_buffer_pool_size 参数？

MySQL Plus 默认 `innodb_buffer_pool_size`参数值为内存大小的60%。

若需修改，可在[配置参数](../../..//manual/config_para/modify_para)中，修改`innodb_buffer_pool_size`参数值大小。
