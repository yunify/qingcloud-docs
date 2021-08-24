---
title: "增删节点"
description: 本小节主要介绍如何新增 ClickHouse 节点实例。 
keywords: ClickHouse 节点添加；新增节点
weight: 10
collapsible: false
draft: false
---


ClickHouse 集群节点，数据库性能越好，可根据需要增加集群节点。

- 为了尽快的完成增加节点操作，让计算资源更快应用集群节点，增加节点过程不会迁移原有数据。

- 若需对已有数据进行重新迁移，可以进入数据库执行 `SYSTEM RESHARDING` ，可对集群的所有节点进行数据重分布。

   > **说明**
   > 
   > 由于 `SYSTEM RESHARDING` 的执行会造成大量的数据迁移工作，可能会对您的集群造成影响。默认情况下增加了 40MB/S 的迁移上限，但这并不代表不会对您的集群产生影响，如果需要进行该操作请选择在业务低峰时进行。

- 若对节点进行删除，则集群自动重分布，无需执行 `SYSTEM RESHARDING`。

本小节主要介绍如何在线新增 ClickHouse 集群节点。

## 约束限制

- 最多可创建 100 个节点。
- 暂不支持在线删除节点。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ClickHouse 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据仓库与 BI** > **ClickHouse**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**节点**页签，点击**新增节点**，弹出新增节点配置窗口。
   
   <img src="../../../_images/add_node.png" alt="新增节点" style="zoom:50%;" />

5. 配置节点信息，详细参数请参见[节点参数](#节点参数)。

6. 确认配置信息无误后，点击**提交**，返回节点列表页面。

   ![查看节点信息](../../../_images/get_id_node3.png)

### 节点参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
|   节点数量     |  选择节点数量。<li>设置范围1～100。|
| 节点名称 |  输入节点名称。 |
| 节点 IP   |  配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动配置`需为各节点配置 IP。  |
