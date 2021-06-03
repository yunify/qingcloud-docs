---
title: "数据库用户管理"
description: 本小节主要介绍如何管理 QingCloud PolonDB 数据库用户。 
keywords: polondb 数据库用户
data: 2021-05-14T00:38:25+09:00
weight: 30
collapsible: false
draft: false
---



## 初始化用户

  创建集群时默认创建 `qingcloud` 用户（配置参数 `user_name` 可以配置用户），该用户具有 `create user ` 权限，没有 `DBA` 权限（ 在分布式数据库中 `DBA` 权限可以修改集群间的关系，导致集群不能自动进行云服务化）。

## 新建数据库用户

  可以通过初始化用户创建新的用户。

  > 在协调器创建用户的同时，注意使用 run_command_on_workers 为 Worker 创建用户
