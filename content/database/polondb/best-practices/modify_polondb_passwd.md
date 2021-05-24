---
title: "修改 PolonDB 账户密码"
description: 本小节主要介绍如何使用 QingCloud PolonDB 恢复数据。 
keywords: polondb 恢复数据
data: 2021-05-14T00:38:25+09:00
weight: 3
collapsible: false
draft: false
---

创建 PolonDB 数据库后，在控制台数据库实例**配置参数**页签，无法修改账户密码时，可参考本小节修改 PolonDB 账户密码。

![modify_polondb_passwd_2](../../_images/modify_polondb_passwd_2.png)

## 操作准备

假设 PolonDB 的集群 ID 为 `cl-on372zmc`，协调器节点的 IP 地址为 192.168.8.12，Worker 节点的 IP 地址为192.168.8.11和192.168.8.13，创建集群时设置的数据库名称、账户、密码分别为 `qingcloud`、`qingcloud` 和 `qingcloud1234`。

## 步骤一：验证连接节点

使用初始密码测试 PolonDB 连接协调器节点和 Worker 节点是否可连接。

```
psql -U qingcloud -h 192.168.8.12
```

输入密码`qingcloud234`，测试连接正常，返回如图信息。

![modify_polondb_passwd_3](../../_images/modify_polondb_passwd_3.png)

## 步骤二：修改账户密码

1. 连接协调器节点。

   ```
   psql -U qingcloud -h 192.168.8.12
   ```

2. 修改协调器节点密码。

   ```
   alter user qingcloud password 'test123';
   ```

3. 修改 Worker 节点密码。

   ```
   select run_command_on_workers($qc$ alter user qingcloud password 'test123' $qc$); 
   ```

   ![modify_polondb_passwd_4](../../_images/modify_polondb_passwd_4.png)

## 步骤三：登录验证

使用修改后的密码验证登录。

```
psql -U qingcloud -h 192.168.8.12
```

输入密码`test123`，测试连接正常，回显如图信息。

![modify_polondb_passwd_5](../../_images/modify_polondb_passwd_5.png)
