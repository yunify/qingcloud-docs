---
title: "用户管理概述"
description: 用户管理概述
keywords: redis cluster，访问控制，用户管理 ACL
weight: 1
draft: false
---

## 默认用户

创建 Redis Cluster 实例时，将同步创建一个默认用户：**default**，并且可在创建时设置密码（对应的参数为**requirepass**），也可在创建后设置或修改密码。若未进行过设置，则默认无密码。

**default** 用户的密码设置方法可参考[配置集群参数](/database/redis_cluster/manual/cfginstance/paramconfig/)。

## 普通用户

除默认用户外，自 Redis Cluster 6.x 版本起，新增用户 ACL（Access Control List）功能，支持普通用户的创建与权限管理操作。您可以在控制台的**用户管理ACL**页面进行[新增用户](../addusr/)、[删除用户](../deleusr/)、[启用及停用帐号](../account/)、[修改用户密码](../account/)及[修改用户访问控制权限](../mdyacl/)等操作。

> **说明**
>
> ACL 功能仅针对普通用户，**default** 用户不在**用户管理ACL**页面进行展示及管理。



