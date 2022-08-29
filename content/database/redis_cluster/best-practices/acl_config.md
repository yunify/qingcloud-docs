---
title: "ACL 最佳实践"
description: 介绍 ACL 最佳实践。
weight: 6
collapsible: false
draft: false
keyword: QingCloud, Redis Cluster,  数据库，acl

---

## 应用场景

- 一组 Redis 集群并赋予多个应用使用，需要每个应用限定权限。
- 需要设置有监控，但为确保数据安全，不宜给全部权限的。

## 部署方案

- 配置 requirepass 作为**管理员账户**使用，拥有全部权限。
- 添加 write 用户，作为**数据操作账户**使用, 有读写权限，没有查看和管理服务权限。
- 添加 read 用户，作为**读取数据账户**使用，有只读权限和查看槽位权限，没有写权限、查看和管理服务状态权限。
- 添加 monitor 用户，作为**监控服务状态**使用，只有查看服务器状态权限，没有调整服务配置以及读写数据权限。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Redis Cluster 集群，且集群状态为`活跃`。
- 已在服务器安装 redis-cli 客户端，且服务器与 Redis 之间网络通常。

## 约束与限制

- Redis Cluster 6.2.5-v1.0.0 及其以上版本。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。

3. 选择目标集群，点击目标集群 ID，进入集群详情页面。

4. 点击**配置参数**页签，进入集群配置参数管理页面。

5. 点击**修改属性**，公共参数**值**进入可编辑状态。

6. 设置 requirepass 密码。

   * **打开config和save命令**：选择 `1`，方便后续验证。
   * **requirepass**：修改独立密码，保证后续不能直接登录，避免通过 redis-cli 就可以获取所有管理和读写权限。

   <img src="../../_images/acl_config_01.png" style="zoom:100%;" />

7. 确认参数信息无误后，点击**保存**，返回参数列表页面。

8. 在**用户管理 ACL** 页签，点击**添加账号**。

   * 设置**读写数据权限**用户。

     规则：-@all +@read +@write +cluster|nodes ~*

     > +cluster|nodes 是 查看槽位表命令，仅适用于部分客户端。

     <img src="../../_images/acl_config_02.png" style="zoom:100%;" />

   * 设置**只读权限**用户。

     规则：-@all +cluster|nodes +@read ~*

     > +cluster|nodes 是 查看槽位表命令，仅适用于部分客户端。

     <img src="../../_images/acl_config_03.png" style="zoom:100%;" />

   * 设置**只有查看服务状态**用户。

     规则：-@all +config|get +cluster|nodes +cluster|info +client|list +client|info +time +role +ping +info 
     <img src="../../_images/acl_config_04.png" style="zoom:100%;" />

9. 查看配置是否正确。

   <img src="../../_images/acl_config_05.png" style="zoom:100%;" />

10. 连接数据库，详细操作请参见[Redis-cli 连接](/database/redis_cluster/manual/connect/redis_cli/)

11. 测试配置。

    - 测试**读写权限权限**用户, 
      <img src="../../_images/acl_config_06.png" style="zoom:100%;" />
    - 测试**只读权限**用户
      <img src="../../_images/acl_config_07.png" style="zoom:100%;" />
    - 测试**监控权限**用户
      <img src="../../_images/acl_config_08.png" style="zoom:100%;" />

