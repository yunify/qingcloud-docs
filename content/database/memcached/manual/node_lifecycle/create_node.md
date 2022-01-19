---
title: "新增节点"
description: 本小节主要介绍如何新增 Memcached 节点实例。 
keyword: 节点添加,新增节点,Memcached,键值数据库
weight: 10
collapsible: false
draft: false
---



Memcached 缓存服务支持多个缓存节点。当容量或者性能不足时，可以通过增加缓存节点来提升。

默认的 Memcached 客户端使用简单 Hash 来进行数据分片，当增加或删除节点时可能会造成大量的缓存失效。可以采用支持一致性 Hash 算法的 Memcached 客户端来避免这个问题，例如 [hash_ring](https://pypi.python.org/pypi/hash_ring)  客户端。

本小节主要介绍如何新增 Memcached 集群节点。

## 约束限制

- 支持最多创建 100个节点。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Memcached 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Memcached**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**节点**页签，点击**新增节点**，弹出新增节点配置窗口。
   
   <img src="../../../_images/add_node.png" alt="新增节点" style="zoom:50%;" />

5. 配置节点信息，详细参数请参见[节点参数](#节点参数)。
6. 确认配置信息无误后，点击**提交**，返回节点列表页面。

### 节点参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| 节点类型   | 选择节点类型。 |
| 节点数量 |  输入新增节点数量，根据已有节点数量确定可新增节点数量。|
| 节点名称 |  输入节点名称。 |
| 节点 IP   |  配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动配置`需为各节点配置 IP。  |
