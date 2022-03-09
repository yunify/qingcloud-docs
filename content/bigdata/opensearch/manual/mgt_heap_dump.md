---
title: "管理 Heap Dump 文件"
description: 本小节主要介绍如何生成和清除 Heap Dump 文件。 
keyword: OpenSearch 堆文件,Heap Dump,文件,清除 Heap Dump 文件,生成 Heap Dump 文件
weight: 80
collapsible: false
draft: false
---


Heap Dump 文件是一种二进制文件，记录了 JVM 中堆内存运行情况。HeapDump 文件是指定时刻的 Java 堆栈的快照，是一种镜像文件。

- 针对 OpenSearch 节点通过生成 Heap Dump 文件，可帮助定位节点内存情况和性能优化。
- 由于 Heap Dump 文件占用内存空间较大，为充分使用资源空间，在分析 Heap Dump 文件后，可清除文件释放存储空间。

> **注意**
> 
> 生成 Heap Dump 文件过程，将导致 OpenSearch 业务不可用。请在业务低峰期，执行生成操作。

本小节主要介绍如何在线生成和清除 Heap Dump 文件。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为**活跃**。

## 生成 Heap Dump 文件

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **OpenSearch 服务**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**生成 Heap Dump**，弹出参数配置窗口。
   
   <img src="../../_images/create_dump.png" alt="生成文件" style="zoom:50%;" />

6. 配置节点信息和最大等待时间，详细参数请参见[节点参数](#节点参数)。

7. 确认配置信息无误后，点击**提交**，返回节点列表页面。

   - 待节点状态切换为`活跃`，则 dump 过程完成。生成文件需数分钟，请耐心等待。
   
   - 生成 Heap Dump 文件过程，可通过 `http://<OpenSearch_IP>/dump/`，查看文件生成进度。

### 节点参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| 角色   | 选择 OpenSearch 节点角色类型。 |
| OS 节点 IP |  输入节点 IP。|
| 最大等待时间  |  输入最大等待时间，若超过该时间，文件仍未生成完成，将强制停止文件生成操作。<li>默认值为 300，单位为秒（s）。<li> 取值范围 30～1800。  |

## 清除 Heap Dump 文件

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **OpenSearch 服务**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**清除 Heap Dump**，弹出参数配置窗口。
   
   <img src="../../_images/delete_dump.png" alt="清除文件" style="zoom:50%;" />

6. 配置节点信息。
7. 确认配置信息无误后，点击**提交**，返回节点列表页面。

   可通过 `http://<OpenSearch_IP>/dump/`，可查看文件是否被清除。
