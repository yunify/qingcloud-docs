---
title: "ACL 最佳实践"
description: 介绍 ACL 最佳实践。
weight: 6
collapsible: false
draft: false
keyword: QingCloud, Redis Cluster,  数据库，acl


---

## 应用场景

- 一组 Redis 集群赋予多个应用使用, 需要每个应用限定权限
- 需要设置有监控, 但为了数据安全, 不宜给全部权限的

## 部署方案

- 配置 requirepass 作为 管理员账户 使用, 有全部权限
- 添加 write 用户, 作为 数据操作账户 使用, 有读写权限. 没有查看和管理服务权限
- 添加 read 用户, 作为 读取数据账户 使用, 有只读权限, 以及查看槽位权限, 没有写权限, 没有查看和管理服务状态权限, 
- 添加 monitor 用户, 监控服务状态使用, 只有查看服务器状态权限, 没有调整服务配置, 以及读写数据权限

## 前提条件[ ](https://docsv3.qingcloud.com/database/redis_cluster/best-practices/tls_config/#前提条件)

- 需要在一台有redis-cli 的机器上测试部署

## 约束与限制

- Redis Standalone 6.2.5-v1.0.0 及其以上版本

## 操作步骤

1. 设置 requirepass 密码

   如果不设置此密码, 通过redis-cli 就可以获取所有管理和读写权限, 所以需要先给 requirepass 设置密码
   <img src="../../_images/acl_config_01.png" style="zoom:100%;" />

2. 设置读写数据权限 用户

   规则: -@all +@read +@write ~*
   <img src="../../_images/acl_config_02.png" style="zoom:100%;" />

3. 设置只读权限 用户

   规则: -@all +@read ~*
   <img src="../../_images/acl_config_03.png" style="zoom:100%;" />

4. 设置只有 查看服务状态用户

   规则: -@all +config|get +client|list +client|info +time +role +ping +info 
   <img src="../../_images/acl_config_04.png" style="zoom:100%;" />

5. 查看配置是否正确

   <img src="../../_images/acl_config_05.png" style="zoom:100%;" />

6. 测试配置

   - 测试 读写权限权限用户, 
     <img src="../../_images/acl_config_06.png" style="zoom:100%;" />
   - 测试只读权限用户
     <img src="../../_images/acl_config_07.png" style="zoom:100%;" />
   - 测试监控权限用户
     <img src="../../_images/acl_config_08.png" style="zoom:100%;" />