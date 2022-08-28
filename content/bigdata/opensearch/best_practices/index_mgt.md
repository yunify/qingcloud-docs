---
title: "运用 Index Management 自动清理旧索引"
description: 本小节主要介绍运用 Index Management 自动清理旧索引。
keyword: 搜索分析,索引分层,索引分层存储
weight: 15
collapsible: false
draft: false


---

在使用 opensearch 接收并保存日志型数据时，超过半年或1年以上的日志可能已经过时，不再使用。可运用 opensearch 提供的 **Index Management** 功能，自动清理旧索引。

**Index Management** 功能是管理集群的索引、数据流和索引模板的简便方法。运用合理的索引策略，可实现索引的自动清理、数据热-温-冷自动迁移、自动备份、force merge、rollover、rollup、close、open、delete 等功能，以确保您的数据以尽可能最具成本效益的方式正确存储。

本文将以实验形式，通过配置合理的 **Index Management** 策略，实现索引的自动清理。

## 前提条件

* 已获取管理控制台登录账号和密码，且已获取集群操作权限。

## 步骤 1：准备实验环境

在 AppCenter 按照以下规格创建一个 opensearch 集群，快速配置中选择**预生产环境**，详细操作请参见[创建 OpenSearch 集群](/bigdata/opensearch/quickstart/create_cluster/)。

| 节点角色      | 节点规格  | 节点数量 |
| :------------ | :-------- | :------- |
| 专有主节点    | 2c4g，10G | 1        |
| 热节点        | 2c4g，60G | 2        |
| dashboard节点 | 2c4g      | 1        |
| logstash节点  | 2c4g，10G | 1        |

![创建集群](../../_images/index_mgt_01.png)

## 步骤 2：创建索引策略

1. 浏览器登录 Dashboard，详细操作请参见[访问 Dashboard](/bigdata/opensearch/os_manual/dashboard/dashboard_login/)。

2. 选择 **OpenSearch Plugins > Index Management**，进入 **Index Management** 界面。

   ![Index管理界面](../../_images/index_mgt_02.png)

   ![Index管理界面](../../_images/index_mgt_03.png)

4. 点击 **Create policy**，勾选 **Visual editor**，表示使用可视化编辑器。

   ![可视化界面](../../_images/index_mgt_04.png)

4. 点击 **Continue**，设置策略 ID，参数配置完成后点击 **Create**。

   ![设置策略 ID](../../_images/index_mgt_05.png)

5. 点击策略 ID，进入详情页面，点击 **Edit**，编辑页面。

6. 在 **ISM templates** 区域创建索引模板（为特定索引自动应用策略）。

   ![创建索引模板](../../_images/index_mgt_06.png)

7. 为形如 mytest-* 的索引应用策略

   ![应用策略](../../_images/index_mgt_07.png)

8. 在 **States** 区域点击删除图标删除已有的示例 state。

   ![删除示例](../../_images/index_mgt_08.png)

9. 点击 **Add state**。

   ![设置](../../_images/index_mgt_09.png)

   * 设置 normal_state。

     * **Action**：设置为空。

     * **Transitions** 的 **Condition** (条件)设置为条件设置为 Minimum index age is 10m（索引创建时间不小于 10 分钟），Destination State（目标状态）设置为 无。

       ![normal_state](../../_images/index_mgt_10.png)

   * 设置 delete_state，**Action** 设置为 Delete。

     ![delete_state](../../_images/index_mgt_11.png)

10. 点击state 所在行编辑图标，修改 normal_state。

    * Action：无

    * **Transitions** 的 **Condition** (条件)设置为条件设置为 Minimum index age is 10m（索引创建时间不小于 10 分钟），Destination State（目标状态）设置为 delete_state。

      ![修改](../../_images/index_mgt_12.png)

      ![删除示例](../../_images/index_mgt_13.png)

      ![删除示例](../../_images/index_mgt_14.png)

11. 修改完成后，点击 **Update**。

12. 参照以上步骤创建索引策略。

    ![创建索引](../../_images/index_mgt_15.png)

    ![创建索引策略](../../_images/index_mgt_16.png)

## 步骤 3：创建测试索引

1. 选择 **Management** > **Dev Tools**。

2. 输入以下命令，创建索引 mytest-01。

   ```
   PUT /mytest-01
   ```

   ![删除示例](../../_images/index_mgt_17.png)

3. 输入以下命令确认索引已创建。

   ```
   GET _cat/indices
   ```

   ![删除示例](../../_images/index_mgt_18.png)

## 步骤 4：验证索引策略生效

1. 选择 **OpenSearch Plugins > Index Management**，进入 **Index Management** 界面。

2. 点击 **Managed Indices**，在纳管的索引列表中查看索引。

   ![删除示例](../../_images/index_mgt_19.png)

3. 等待10分钟观察索引被自动清理，索引策略初始化成功后，索引所处状态：normal_state

   ![删除示例](../../_images/index_mgt_20.png)

4. 十分钟后，策略开始执行动作。

5. ![删除示例](../../_images/index_mgt_21.png)

6. 选择 **Management** > **Dev Tools**。

7. 执行以下命令，再次查看索引，确认索引 mytest-01 被删除

   ```
   GET _cat/indices
   ```

   ![删除示例](../../_images/index_mgt_22.png)