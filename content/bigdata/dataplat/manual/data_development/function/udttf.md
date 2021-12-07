---
title: "UDTTF 函数"
description: 本小节主要介绍如何新建 UDTTF 函数。 
keywords: 
weight: 40
collapsible: false
draft: false
---

UDTTF 函数是自定义时态表函数，通过一个时间属性来确定表数据的版本。更多详细信息请参见[官方文档](https://nightlies.apache.org/flink/flink-docs-release-1.11/zh/dev/table/streaming/temporal_tables.html)。

您可以通过 Java、Scala 语言编写代码创建 UDTTF 函数。

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已创建工作空间。

## 新建 UDTTF 函数节点

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间单击**云上加工** > **函数管理**，进入函数管理页面。
5. 选择 **UDTTF** 页签，单击**新建 UDTTF 函数节点**，进入新建函数节点页面。
   
   <img src="/bigdata/dataplat/_images/create_function_node.png" alt="新建函数节点" style="zoom:50%;" />

6. 选择函数语言后，单击**下一步**。
7. 配置函数名，函数名需与实现名保持一致。
8. 配置函数代码。
9. 单击**确定新建**，开始创建函数节点。
10. 创建完成后回到函数管理页面，可以看到已创建好的函数节点。   
    - 编辑函数节点：单击函数操作列的**编辑**，可修改**函数名**和**函数语句**。
    - 删除函数节点：单击函数操作列的**删除**，可删除函数。


