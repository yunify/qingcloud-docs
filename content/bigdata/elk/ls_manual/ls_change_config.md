---
title: "Logstash 配置的修改生效"
description: 本小节主要介绍如何修改 Logstash 配置。
keyword: Logstash 自定义启动配置文件,
weight: 50
collapsible: false
draft: false

---

默认情况下，修改 Logstash 配置不会立即生效，本小节主要介绍如何使修改 Logstash 的配置生效。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已完成 Logstash 的配置。

## 操作步骤

### 方法一、重启 Logstash 服务

1. 登录控制台。

2. 选择**产品与服务** > **大数据服务** > **ELK 服务**，进入集群管理页面。

3. 点击目标集群 ID，进入集群详情页面。

4. 在**基本属性**模块，点击集群操作下拉菜单。

5. 展开下拉菜单，点击**重启**。

   ![重启](../../_images/restart_logstash.png)

6. 选择一个集群角色，这里勾选 `Logstash 节点`。

   ![选择节点](../../_images/restart_logstash_node.png)

   重启完成后，则配置生效。

### 方法二、修改 Logstash 的 参数值

1. 登录管理控制台。

2. 选择**产品与服务** > **大数据服务** > **ELK 服务**，进入集群管理页面。

3. 选择目标集群，点击目标集群 ID，进入集群详情页面。

4. 点击**配置参数**页签，进入集群配置参数管理页面。

5. 参数类型选择**Logstash 节点**，切换到相应节点参数页面。

6. 点击**修改属性**，公共参数**值**进入可编辑状态。

7. 将 logstash 的 `config.reload.automatic` 参数值修改为 `true`。

   ![修改参数](../../_images/ls_change_config.png)

8. 重启 logstash 服务，详细操作请参见[方法一](/bigdata/elk/ls_manual/ls_change_config/#方法一重启-logstash-服务)。

   重启完成后，若再修改 Logstash 的 input、filter、output 配置，将会立即生效，不需要重启 logstash 服务。