---
title: "修改用户密码"
description: 本小节主要介绍如何修改用户密码。 
keywords: polondb 用户密码
weight: 20
collapsible: false
draft: false
---

创建 PolonDB 数据库后，在控制台数据库实例**配置参数**页签，不支持修改初始用户账号密码。

本小节主要介绍如通用修改用户密码方法。

以如下 PolonDB 集群为示例。

- 协调器节点的 IP 地址为 192.168.8.12。
- Worker 节点的 IP 地址为 192.168.8.11 和 192.168.8.13。
- 创建集群时设置的数据库名称、账户、密码分别为 `qingcloud`、`qingcloud` 和 `qingcloud1234`。

## 前提条件

- 已创建 PolonDB 集群，且集群状态为**活跃**。

## 步骤一：验证连接节点

使用初始用户密码验证 PolonDB 连接协调器节点和 Worker 节点连通性。

```shell
psql -U qingcloud -h 192.168.8.12
```

输入密码`qingcloud234`，测试连接正常，回显信息如图。

![modify_polondb_passwd_3](../../../_images/modify_polondb_passwd_3.png)

## 步骤二：修改账户密码

1. 连接协调器节点。

   ```shell
   $ psql -U qingcloud -h 192.168.8.12
   ```

2. 修改协调器节点密码。

   ```shell
   $ alter user qingcloud password 'test123';
   ```

3. 修改 Worker 节点密码。

   ```shell
   $ select run_command_on_workers($qc$ alter user qingcloud password 'test123' $qc$); 
   ```

   ![modify_polondb_passwd_4](../../../_images/modify_polondb_passwd_4.png)

## 步骤三：登录验证

使用修改后的密码验证登录。

```shell
$ psql -U qingcloud -h 192.168.8.12
```

输入修改后密码 `test123`，测试连接正常，回显信息如图。

![modify_polondb_passwd_5](../../../_images/modify_polondb_passwd_5.png)
