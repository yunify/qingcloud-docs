---
title: "步骤二：登录主机"
description: 本小节主要介绍如何快速创建 MySQL Plus 数据库用户账号。 
keywords: mysql plus 数据库用户账号创建,
weight: 30
collapsible: false
draft: false
---

本小节主要介绍如何创建 MySQL Plus 数据库用户账号。

## 背景介绍

MySQL Plus 集群支持创建两种权限类型用户账号：**高级权限**和**普通权限**。

|<span style="display:inline-block;width:80px">账号类型</span> |<span style="display:inline-block;width:240px">权限范围</span>|<span style="display:inline-block;width:280px">说明</span> |
|:----|:----|:----|
|高级权限账号   |`SUPER`和`GRANT`，以及`ALTER`、`ALTER ROUTINE`、`CREATE`、`CREATE ROUTINE`、`CREATE TEMPORARY TABLES`、`CREATE VIEW`、`DELETE`、`DROP`、`EXECUTE`、`EVENT`、`INDEX`、`INSERT`、`LOCK TABLES`、`PROCESS`、`RELOAD`、`SELECT`、`SHOW DATABASES`、`SHOW VIEW`、`UPDATE`、`TRIGGER`、`REFERENCES` |<li>一个实例中只能创建一个高权限账号，可以管理所有普通账号和数据库。<li>开放了更多权限，可满足个性化和精细化的权限管理需求，例如可按用户分配不同表的查询权限。<li>拥有实例下所有数据库的所有权限。<li>可以断开任意账号的连接。|
|普通权限账号|`ALTER`、`ALTER ROUTINE`、`CREATE`、`CREATE ROUTINE`、`CREATE TEMPORARY TABLES`、`CREATE VIEW`、`DELETE`、`DROP`、`EXECUTE`、`EVENT`、`INDEX`、`INSERT`、`LOCK TABLES`、`PROCESS`、`RELOAD`、`SELECT`、`SHOW DATABASES`、`SHOW VIEW`、`UPDATE`、`TRIGGER`、`REFERENCES`|<li>一个实例可以创建多个普通账号，具体的数量与实例内核有关 。<li>需要手动给普通账号授予特定数据库的权限。<li>普通账号不能创建和管理其他账号，也不能断开其他账号的连接。|

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群，且集群状态为**活跃**。

## 操作步骤

1. 在集群管理页面，点击目标集群 ID，进入集群详情页面。
2. 选择**账号页签**，点击**添加账号**，弹出添加账号窗口。
   
   <img src="../../_images/set_user_info.png" alt="配置账号信息" style="zoom:50%;" />

3. 配置账号信息，详细参数说明请参见[账号参数](#账号参数)。

4. 确认配置信息无误后，点击**提交**，返回账号列表页面，即可查看已添加账号。
   
   ![查看账号信息](../../_images/check_user.png)

### 账号参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| 角色| 默认为主实例。 |
| 授权数据库 |  输入一个数据库名。<li>默认为`*`，表示集群全部数据库。<li>不支<li>持一个普通账号授权多个数据库。高级权限账号，可授权全部数据库。 |
| 数据库密码 |  输入数据库密码。<li>密码规则：长度为8～32位字符数；必须同时包含大写字母（A～Z)、小写字母（a～z）、数字（0～9）和特殊字符（@#¥%^&*_+-=）。 |
| 加密认证| 数据传输中加密认证。<li>默认为`NO`；若选择`YES`，需同时开启集群 **SSL 传输加密**，否则不能正常连接数据库。 |
| 授权主机 | 输入授权主机 IP 地址。<li>默认为`%`，表示所有主机均可访问。<li>授权主机设置的 IP，仅对内网 IP 登录有效。若需外网访问，请设置授权主机为`%`。 |
| 数据库用户名 |  输入数据库账户名。<li>不支持添加`root`、`qc_admin`、`qc_repl`和`qc_check`运维账号。<li>为确保账号名唯一性，不支持添加已有账号。<li>命名规则：长度为2～26个字符数；只能由大写字母（A～Z)、小写字母（a～z）、数字（0～9）和特殊字符（_）组成。 |
| 用户权限 |  选择账号权限类型。<li>可选择`普通权限`或`高级权限`。|
