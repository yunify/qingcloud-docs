---
title: "创建离线-批量同步作业（向导模式）"
description: 本小节主要介绍如何创建离线-批量同步作业。 
keywords: 大数据工作台,数据开发,数据集成,离线-批量同步作业
weight: 20
collapsible: false
draft: false
---

数据集成作业支持向导模式和脚本模式。本小节主要介绍向导模式。

## 前提条件

- 已添加数据源至目标工作空间。
- 目标工作空间已创建计算集群。

## 开发流程

1. 创建离线-批量同步作业。
2. 开发作业。
   1. 选择数据来源。
   2. 选择数据目的。
   3. 配置字段映射。
   4. 选择计算集群。
   5. 通道控制。
3. 配置作业调度。
4. 发布作业。

## 创建离线-批量同步作业

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间选择**数据加工** > **数据开发**，进入数据开发页面。
5. 点击**创建作业**，进入创建作业页面。

   <img src="/bigdata/dataomnis/_images/integration_job_offline_choose_model.png" alt="离线-批量同步作业" style="zoom:50%;" />

6. 选择**离线-批量同步作业**，点击**下一步**。
   
   <img src="/bigdata/dataomnis/_images/integration_job_offline_basic.png" alt="填写信息" style="zoom:50%;" />

7. 配置作业相关信息。

   | <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
   | :------------- | ------------------------------------------------------------ |
   | 开发模式 |  作业开发模式，点击**上一步**可以修改。              |
   | 同步类型 |  选择作业同步类型、数据来源端和数据目的端的数据源类型。<br>- 支持`全量同步`和`增量同步`。<br>- 支持的数据来源端和目的端请参见：[配置数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/)、[配置数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/)。             |
   | 作业名称 |  创建的作业名称，您可以自定义。              |
   | 作业所在目录    | 选择作业所在目录。数据集成作业只能在数据集成目录和其子目录下。  |
   | 描述    |  作业的描述信息，您可以自定义。 |

8. 点击**确定**，开始创建作业。

## 开发作业

### 选择数据来源

配置数据来源，以及需要同步的表等信息。

选择数据来源时，请参见[配置数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/)。

<img src="/bigdata/dataomnis/_images/integration_job_offline_1_choose_source.png" alt="选择数据来源" style="zoom:50%;" />

### 选择数据目的

选择数据目的时，请参见[配置数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/)。

<img src="/bigdata/dataomnis/_images/integration_job_offline_1_choose_sink.png" alt="选择数据目的" style="zoom:50%;" />

### 配置字段映射

选择数据来源和数据目的后，您需要指定来源表字段和目的端字段的映射关系。您可以选择**全部平行**、**同名映射**、**同行映射**、**解除全部映射**或**置为初始状态**。

选择数据来源后，系统自动加载出来源表字段和类型。
- 来源表字段：不可以修改。
- 类型：可以修改。支持的数据类型请参见[配置数据来源](/bigdata/dataomnis/manual/integration_job/cfg_source/)。

选择数据目的后，系统自动加载出来目标表字段和类型。
- 目标表字段：不可以修改。
- 类型：不可以修改。支持的数据类型请参见[配置数据目的](/bigdata/dataomnis/manual/integration_job/cfg_sink/)。

| <span style="display:inline-block;width:140px">操作</span> | <span style="display:inline-block;width:520px">说明</span>   |
| :--------------------------------------------------------- | ------------------------------------------------------------ |
| 全部平行                                                   | 点击**全部平行**，可以自动将已建立的映射关系的字段调整到同行。 |
| 同名映射                                                   | 点击**同名映射**，可以根据名称建立相应的映射关系，请注意匹配数据类型。 |
| 同行映射                                                   | 点击**同行映射**，可以在同行建立相应的映射关系，请注意匹配数据类型。 |
| 解除全部映射                                               | 点击**解除全部映射**，可以解除已建立的映射关系。             |
| 置为初始状态                                               | 点击**置为初始状态**，可以解除已建立的映射关系并恢复字段排序为初始状态。 |
| 编辑字段                                                   | 点击**编辑**，输入自定义 value，当字段值为 null 时，会返回此 value 值。 |
| 时间转换                                                   | 如果字段类型是时间字符串（TIMESTAMP），点击**时间转换**，可以在弹框中输入指定时间的格式，将字段类型转为日期格式返回。 |
| 添加字段                                                   | 点击**添加字段**，手动添加字段，自定义 columnName、columnType，并输入自定义 value。 |

<img src="/bigdata/dataomnis/_images/integration_job_offline_1_map.png" alt="字段映射" style="zoom:50%;" />

### 选择计算集群

1. 选择计算集群：点击**选择集群**，在弹出的对话框中选择已创建好的计算集群；也可以在对话框中点击**计算集群列表**，进入计算集群页面，创建新的计算集群。 

    > **注意**
    >  
    > 若您没有提前创建计算集群，点击**计算集群列表**后，已配置的数据源信息将会丢失。

   <img src="/bigdata/dataomnis/_images/integration_job_offline_1_flink-cluster.png" alt="计算集群" style="zoom:50%;" />

2. 测试连通性：点击**连通性测试**，测试计算集群与数据源的网络连通性。计算集群需与数据源网络互通，具体请参见[网络连通方案](/bigdata/dataomnis/manual/connect/)。

### 通道控制

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">说明</span>  |
| :------------- | ---------------------------------------------------------- |
| 作业期望最大并行数   | 数据同步任务内，可以从源并行读取或并行写入数据存储端的最大线程数。向导模式通过界面化配置并发数，指定任务所使用的并行度。 |
| 同步速率     | 设置同步速率可以保护读取端数据库，以避免抽取速度过大，给源库造成太大的压力。同步速率建议限流，结合源库的配置，请合理配置抽取速率。  |
| 错误记录数     | 设置允许的脏数据条数或比例，当脏数据超过设置的阈值时，作业将自动结束运行。 |

<img src="/bigdata/dataomnis/_images/integration_job_offline_1_dirty-data.png" alt="通道控制" style="zoom:50%;" />

### 保存作业

完成以上配置后，点击**保存**，保存作业。

## 配置作业调度

1. 在作业开发面板右侧点击**调度设置**，进入调度配置页面。
2. 配置调度参数和调度策略。详细信息请参见[配置调度参数](../../schedule/para)、[配置调度策略](../../schedule/time)。   
3. 点击**确定**，完成调度配置操作。

## 发布作业

1. 点击**发布**，弹出发布调度任务对话框。

   <img src="/bigdata/dataomnis/_images/publish_job.png" alt="发布作业" style="zoom:50%;" />

2. 您可以根据实际情况选择是否终止**当前作业正在运行中的实例**，如果终止当前作业正在运行中的实例，运行中的作业实例会立即被强制终止。
3. 点击**发布**，发布作业。发布作业时也会对代码进行语法检查，需要一定的时间，请耐心等待。   
   作业发布成功后，您可以前往运维中心查看已发布作业和作业实例。