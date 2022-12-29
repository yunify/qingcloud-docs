---
title: "OpenSearch 如何对索引进行周期性管理？"
description: 本小节主要介绍如何配置周期性快照。 
keyword: OpenSearch,文档数据库,数据库,快照
weight: 30
collapsible: false
draft: false
---

OpenSearch 提供的 **Index Management** 功能，可以支持对索引进行周期性管理。

本文以配置周期性快照为例，介绍周期性管理索引功能的配置步骤。其他周期性管理操作类似，也可以参照本文提供的步骤进行配置。

## 注意事项

修改、删除等操作均属于高危操作，可能会带来未知风险，请谨慎操作。

## 前提条件

* 已获取管理控制台登录账号和密码，且已获取 OpenSearch 集群操作权限。
* OpenSearch 集群已安装 Dashboard。

## 步骤一：创建快照仓库

快照仓库是用于存储快照的一个存储位置，可以是共享文件系统、S3 对象存储、分布式文件系统等。

在执行快照前，您需要先创建快照仓库，详细操作请参见 [Register repository](https://opensearch.org/docs/latest/opensearch/snapshots/snapshot-restore#register-repository)。

## 步骤二：创建索引策略

索引策略主要是定义索引处于的 States（状态），以及在该状态下索引需要执行的 Actions（操作），以及索引在进入下一个状态（Destination state）需要满足的 Conditions（条件）。

以下步骤介绍如何创建周期性快照策略，关于索引策略的详细介绍，请参见[官方文档](https://opensearch.org/docs/latest/im-plugin/ism/policies/)。

1. 登录 Dashboard，详细操作请参见[访问 Dashboard](../../os_manual/dashboard/dashboard_login/)。
2. 选择 **OpenSearch Plugins** > **Index Management**，进入 **Index Management** 界面。

   <img src="/bigdata/opensearch/_images/index_mgt_02.png" alt="Index管理界面" style="zoom:60%;" />
   <img src="/bigdata/opensearch/_images/index_mgt_03.png" alt="Index管理界面" style="zoom:60%;" />

3. 点击 **Create policy**，进入 Configuration method 页面。

   选择 **Visual editor**，表示使用可视化编辑器。

   <img src="/bigdata/opensearch/_images/index_mgt_04.png" alt="" style="zoom:40%;" />  

4. 点击 **Continue**，进入创建策略页面。设置策略 ID 和描述信息。

   > **说明**
   >
   > 策略创建成功后，策略 ID 不支持修改。

   <img src="/bigdata/opensearch/_images/snapshot_01.png" alt="" style="zoom:40%;" />

5. （可选）在 **Error notification** 区域配置错误通知。如果索引管理操作执行失败，系统将会根据您配置的自定义消息进行错误通知。

   <img src="/bigdata/opensearch/_images/snapshot_notification.png" alt="" style="zoom:60%;" />

6. 在 **ISM templates** 区域创建索引模板（为指定索引自动应用策略，可以配置多个）。

   <img src="/bigdata/opensearch/_images/index_mgt_06.png" alt="" style="zoom:60%;" />

   点击 **Add template**，在 **Index patterns** 处配置索引应用策略。例如配置为 `test-*`，表示以 `test-` 开头的索引都会自动应用该策略。

   <img src="/bigdata/opensearch/_images/snapshot_02.png" alt="" style="zoom:40%;" />

7. 在 **States** 区域配置索引可以处于的状态，包括默认状态。

   点击 State 所在行的删除图标，先删除已有的示例 State。

   <img src="/bigdata/opensearch/_images/index_mgt_08.png" alt="" style="zoom:60%;" />

   点击 **Add state**，新增 state。

   <img src="/bigdata/opensearch/_images/index_mgt_09.png" alt="" style="zoom:60%;" />  

   * **Initial state**：默认状态。待 State 创建好后，设置 `waiting` 状态为默认状态。意思是所有符合 Index patterns 的索引，都会⾸先进⼊这个状态。
   * 新增 waiting State。
     * **Action** 设置为空，表示在该状态不执行任何动作。
     * **Transitions** 的 **Condition**（条件）设置为 `Cron Expression`，表示通过 [Cron 表达式](https://opensearch.org/docs/latest/monitoring-plugins/alerting/cron/)触发状态切换操作，实现定时控制；**Destination State**（目标状态）先设置为无，等 snapshot State 建好后改为 `snapshot`，表示达到 Cron Expression 设置的时间后切换到 snapshot 状态。

       点击 state 所在行的编辑图标，可以修改 State。

     <img src="/bigdata/opensearch/_images/snapshot_03.png" alt="" style="zoom:60%;" />

   * 新增 snapshot State。
     * **Action** 设置为 `Snapshot`，表示在该状态时，索引需要执行快照。
     * **Transitions** 的 **Condition**（条件）设置为空，表示状态切换不需要条件；**Destination State**（目标状态）设置为 `waiting`，表示索引快照执行完毕后索引将切换到 waiting 状态。

     <img src="/bigdata/opensearch/_images/snapshot_04.png" alt="" style="zoom:45%;" />

8. 配置完成后，点击 **Create**。

## 步骤三：验证索引策略

1. 登录 Dashboard，详细操作请参见[访问 Dashboard](../../os_manual/dashboard/dashboard_login/)。
2. 选择 **Management** > **Dev Tools**。
3. 输入以下命令，创建索引 test-01。

   ```bash
   PUT /test-01
   ```

4. 输入以下命令确认索引已创建。
 
   ```bash
   GET _cat/indices
   ```

   <img src="/bigdata/opensearch/_images/snapshot_05.png" alt="" style="zoom:60%;" />  

5. 选择 **OpenSearch Plugins** > **Index Management**，进入 **Index Management** 界面。
6. 点击 **Managed Indices**，在纳管的索引列表中查看索引，索引默认进入 waiting 状态。

   <img src="/bigdata/opensearch/_images/snapshot_06.png" alt="" style="zoom:60%;" />

7. 等待设置的时间到达后，索引将开始切换状态。

   <img src="/bigdata/opensearch/_images/snapshot_07.png" alt="" style="zoom:60%;" />
