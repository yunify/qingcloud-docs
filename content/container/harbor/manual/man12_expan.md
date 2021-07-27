---
title: "扩容集群"
draft: false
enableToc: false
weight: 12
---

## 操作场景

若当前集群配置已不再满足您的需求，您可以对集群进行扩容。

支持**在线扩容**和**新增节点**两种方式扩容 Harbor 集群：

- 在线扩容：通过调整已有节点的CPU/内存/磁盘空间大小进行扩容。
- 新增节点：通过新增集群节点（支持新增主服务节点及任务节点）进行扩容。

## 在线扩容

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **AppCenter** > **集群管理**，进入**集群管理**页面。

3. 找到您的 Harbor 集群，右键点击，选择**扩容集群**，弹出**扩容集群**页面。

   <img src="/container/harbor/_images/man12_expan.png" alt="expan" style="zoom:50%;" />

5. 勾选（可多选）需要修改配置的节点，然后在下方调整资源配置。

6. 点击**提交**。

## 新增节点

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **AppCenter** > **集群管理**，进入**集群管理**页面。

3. 找到您的 Harbor 集群，点击集群 ID 进入集群详情页面。

4. 在右侧的**节点**页签，点击**新增节点**，弹出**新增节点**页面。

   <img src="/container/harbor/_images/man12_add_node.png" alt="add_node" style="zoom:50%;" />

5. 选择新增节点的类型，输入节点数量及名称，设置节点 IP。

6. 点击**提交**。

