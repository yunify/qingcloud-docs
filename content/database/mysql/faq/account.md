---
title: "用户帐号"
description: 本小节主要介绍 MySQL Plus 用户帐号常见问题。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,用户帐号问题
weight: 20
collapsible: false
draft: false
---

## 如何创建数据库超级权限的账户?

MySQL Plus 1.5.2 及以上版本支持创建超级账户，可点击**添加账户**创建。

详细创建说明，请参见[创建用户](../../manual/mgt_account/creat_account)。

## 如何查询创建用户的权限？

支持执行 SQL 查询，示例如下：

```shell
mysql> select * from mysql.user where user='admin'\G
*************************** 1. row ***************************
                  Host: %
                  User: admin
           Select_priv: Y
           Insert_priv: Y
           Update_priv: Y
           Delete_priv: Y
           Create_priv: Y
             Drop_priv: Y
           Reload_priv: Y
         Shutdown_priv: Y
          Process_priv: Y
             File_priv: Y
            Grant_priv: Y
       References_priv: Y
            Index_priv: Y
            Alter_priv: Y
          Show_db_priv: Y
            Super_priv: Y
 Create_tmp_table_priv: Y
      Lock_tables_priv: Y
          Execute_priv: Y
       Repl_slave_priv: Y
      Repl_client_priv: Y
      Create_view_priv: Y
        Show_view_priv: Y
   Create_routine_priv: Y
    Alter_routine_priv: Y
      Create_user_priv: Y
            Event_priv: Y
          Trigger_priv: Y
Create_tablespace_priv: Y
              ssl_type: 
            ssl_cipher: 
           x509_issuer: 
          x509_subject: 
         max_questions: 0
           max_updates: 0
       max_connections: 0
  max_user_connections: 0
                plugin: mysql_native_password
 authentication_string: *38C59B51E78BEBC39594D0A17FDE8D29BF7D78DD
      password_expired: N
 password_last_changed: 2019-09-23 10:01:51
     password_lifetime: NULL
        account_locked: N
1 row in set (0.00 sec)

mysql> show grants for 'admin'@'%';
+--------------------------------------------------------------+
| Grants for admin@%                                           |
+--------------------------------------------------------------+
| GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION |
+--------------------------------------------------------------+
1 row in set (0.00 sec)
```

## 为什么添加数据库账户失败？

1. 检查集群中是否已存在同名数据库账户。

2. 检查集群中是否已存在高级权限账户。目前一个 MySQL Plus 仅允许添加一个高级权限的数据库账户。

## 新添加账户无法正常访问数据库？

1. 检查该账户是否在节点指定了 **加密认证** 选项为 `YES`。

2. 检查集群是否开启 **SSL 传输加密** 服务功能。

## 为什么删除数据库账户失败？

检查待删除的数据库账户是否已被删除。
