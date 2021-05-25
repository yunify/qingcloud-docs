---
title: "服务功能"
description: 本小节主要介绍 QingCloud PolonDB 基本功能操作。 
keywords: polondb 基本功能
data: 2021-05-14T00:38:25+09:00
weight: 10
collapsible: false
draft: false
---



## 启动

点击**启动**。

![image-ZhiLing](../../_images/image-ZhiLing.png)

## 关闭

点击**关闭**。

![image-ZhiLing](../../_images/image-ZhiLing.png)

## 重启

点击**重启**。

![image-ZhiLing](../../_images/image-ZhiLing.png)

## 切换私有网络

点击**切换私有网络**，根据提示配置参数。

  > 切换私有网络会重启集群。

![image-ZhiLing](../../_images/image-ZhiLing.png)

## 节点角色

![image-NodeRole](../../_images/image-NodeRole.png)

* 点击 `节点角色` 即可查看，通过 `node` 列可以查看到集群的从属关系，通过 `role` 列可以查看到角色状态。

* 角色状态

  -  `primary` ：主节点
  -  `standby` ：备节点
  -  `unknown` ：获取节点状态失败

> 带有 `副本` 标识的节点并不代表 PolonDB 集群的备节点，仅代表节点是一个组。

![image-NodeRoleNode](../../_images/image-NodeRoleNode.png)
