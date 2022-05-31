---
title: "创建离线-批量同步作业（脚本模式）"
description: 本小节主要介绍如何创建离线-批量同步作业。 
keywords: 大数据工作台,数据开发,数据集成,离线-批量同步作业
weight: 21
collapsible: false
draft: false
---

数据集成作业支持向导模式和脚本模式。本小节主要介绍脚本模式。

创建离线-批量同步作业时，默认创建向导模式的作业。创建完成后，您可以从向导模式转变为脚本模式。转变为脚本模式后，数据来源、数据目的和向导模式保持一致。

## 注意事项

转变为脚本模式后，不支持再回到向导模式，请谨慎操作。

## 前提条件

- 已添加数据源至目标工作空间。
- 目标工作空间已创建计算集群。

## 开发流程

1. 创建离线-批量同步作业。
2. 转变为脚本模式。
3. 作业开发。
4. 选择计算集群。
5. 配置作业调度。
6. 发布作业。

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

## 转变为脚本模式

1. 点击**脚本模式**，弹出对话框。

   <img src="/bigdata/dataomnis/_images/integration_job_offline_switch_script.png" alt="脚本模式" style="zoom:50%;" />

2. 点击**转变**，将作业从向导模式转变为脚本模式。

## 开发作业

### 编辑并调试作业

1. 点击作业名称，进入开发面板。
2. 在开发面板中输入业务相关的代码。
   
   <img src="/bigdata/dataomnis/_images/integration_job_content_script.png" alt="编辑和运行作业" style="zoom:50%;" />

3. 点击**语法检查**，对代码进行语法检查。
4. 点击**保存**，保存修改，防止代码丢失。

### 选择计算集群

1. 选择计算集群：点击**选择集群**，在弹出的对话框中选择已创建好的计算集群；也可以在对话框中点击**计算集群列表**，进入计算集群页面，创建新的计算集群。 

    > **注意**
    >  
    > 若您没有提前创建计算集群，点击**计算集群列表**后，已配置的数据源信息将会丢失。

   <img src="/bigdata/dataomnis/_images/integration_job_offline_2_flink-cluster.png" alt="计算集群" style="zoom:50%;" />

2. 测试连通性：点击**连通性测试**，测试计算集群与数据源的网络连通性。计算集群需与数据源网络互通，具体请参见[网络连通方案](/bigdata/dataomnis/manual/connect/)。

## 配置作业调度

1. 在作业开发面板右侧点击**调度设置**，进入调度配置页面。
2. 配置调度策略。详细信息请参见[配置作业调度](../scheduling_job)。   
3. 点击**确定**，完成调度配置操作。

## 发布作业

1. 点击**发布**，弹出发布调度任务对话框。

   <img src="/bigdata/dataomnis/_images/publish_job.png" alt="发布作业" style="zoom:50%;" />

2. 您可以根据实际情况选择是否终止**当前作业正在运行中的实例**，如果终止当前作业正在运行中的实例，运行中的作业实例会立即被强制终止。
3. 点击**发布**，发布作业。发布作业时也会对代码进行语法检查，需要一定的时间，请耐心等待。   
   作业发布成功后，您可以前往运维中心查看已发布作业和作业实例。

## 脚本示例

```json
{
  "job": {
    "content": [
      {
        "reader": {
          "name": "mysqlreader",
          "parameter": {
            "column": [
              {
                "name": "comm",
                "type": "DOUBLE"
              },
              {
                "name": "deptno",
                "type": "INT"
              },
              {
                "name": "empno",
                "type": "INT"
              },
              {
                "name": "ename",
                "type": "VARCHAR"
              },
              {
                "name": "hiredate",
                "type": "DATE"
              }
            ],
            "connection": [
              {
                "jdbcUrl": [
                  "jdbc:mysql://139.198.32.39:3306/dataomnis?useSSL=false"
                ],
                "table": [
                  "emp"
                ]
              }
            ],
            "password": "pa88w0rd",
            "username": "root"
          }
        },
        "writer": {
          "name": "postgresqlwriter",
          "parameter": {
            "column": [
              {
                "name": "comm",
                "type": "REAL"
              },
              {
                "name": "deptno",
                "type": "INTEGER"
              },
              {
                "name": "empno",
                "type": "INTEGER"
              },
              {
                "name": "ename",
                "type": "CHARACTER"
              },
              {
                "name": "hiredate",
                "type": "DATE"
              }
            ],
            "connection": [
              {
                "jdbcUrl": "jdbc:postgresql://139.198.28.41:5432/dataomnis?useSSL=false",
                "table": [
                  "public.emp"
                ]
              }
            ],
            "mode": "insert",
            "password": "postgres",
            "semantic": "exactly-once",
            "username": "postgres"
          }
        },
        "transformer": {
          "transformSql": ""
        }
      }
    ],
    "setting": {
      "speed": {
        "bytes": 0,
        "channel": 1
      }
    }
  }
}
```