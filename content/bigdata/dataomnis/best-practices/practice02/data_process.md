---
title: "数据开发"
description: 本小节主要介绍。 
keywords: 
weight: 30
collapsible: false
draft: false
---

## 创建 SQL 作业

1. 在目标工作空间选择**数据开发** > **实时计算**，进入实时计算页面。
2. 点击**创建作业**，进入创建作业页面。
   
   <img src="/bigdata/dataomnis/_images/choose_model_sql.png" alt="选择模式" style="zoom:50%;" />

3. 选择 **SQL 模式**。
4. 点击**下一步**，填写作业名称，并选择作业依赖的计算集群。
   
   <img src="/bigdata/dataomnis/_images/job_basic.png" alt="填写信息" style="zoom:50%;" />

5. 配置完成后，点击**确定**，开始创建作业。

## 开发 SQL 作业

1. 在开发面板中输入以下 SQL 代码，数据源相关参数请根据代码中的注释进行修改。

  ```sql
  DROP TABLE IF EXISTS input_web_record;
  CREATE TABLE `input_web_record` (
      `record_type`    INT,
      `user_id`        INT,
      `client_ip`      VARCHAR,
      `product_id`     INT,
      `create_time`    TIMESTAMP,
      `times`          AS create_time,
      WATERMARK FOR times AS times - INTERVAL '1' MINUTE
  ) WITH (
      'connector' = 'kafka',        -- 可选 'kafka','kafka-0.11'. 注意选择对应的内置  Connector
      'topic' = 'uvpv-demo112',
      'scan.startup.mode' = ' earliest-offset',
      'properties.bootstrap.servers' = '192.168.100.16:9092,192.168.100.17:9092,192.168.100.18:9092',
      'properties.group.id' = 'record',  -- 必选参数, 一定要指定 Group ID
      'format' = 'json',
      'json.ignore-parse-errors' = 'true',       -- 忽略 JSON 结构解析异常
      'json.fail-on-missing-field' = 'false'     -- 如果设置为 true, 则遇到缺失字段会报错 设置为 false 则缺失字段设置为 null
  );
    
  -- UV sink
  DROP TABLE IF EXISTS output_uv;
  CREATE TABLE `output_uv` (
  `userids`          STRING,
  `uv`               BIGINT,
  `create_time`      TIMESTAMP(3)
  ) WITH (
    'connector' = 'clickhouse',
      'url' = 'jdbc:clickhouse://139.198.106.31:65193/pk', -- 可配置集群地址，写入时随机选择连接写入，不会一直使用一个连接写入
      'table-name' = 'output_uv',
      'username' = 'default',
      'password' = 'JR29uF39LqX3LrG',
      'format' = 'json'
  );
    
  -- PV sink
  DROP TABLE IF EXISTS output_pv;
  CREATE TABLE `output_pv` (
  `pagevisits`       STRING,
  `product_id`       STRING,
  `pv`               BIGINT,
  `stt`              TIMESTAMP(3),
  `edt`              TIMESTAMP(3)
  ) WITH (
    'connector' = 'clickhouse',
      'url' = 'jdbc:clickhouse://139.198.106.31:65193/pk', -- 可配置集群地址，写入时随机选择连接写入，不会一直使用一个连接写入
      'table-name' = 'output_pv',
      'username' = 'default',
      'password' = 'JR29uF39LqX3LrG',
      'format' = 'json'
  );
    
  -- 转化率 sink
  DROP TABLE IF EXISTS output_conversion_rate;
  CREATE TABLE `output_conversion_rate` (
  `conversion_rate`  STRING,
  `rate`             STRING,
  `create_time`      TIMESTAMP(3)
  ) WITH (
    'connector' = 'clickhouse',
      'url' = 'jdbc:clickhouse://139.198.106.31:65193/pk', -- 可配置集群地址，写入时随机选择连接写入，不会一直使用一个连接写入
      'table-name' = 'output_conversion_rate',
      'username' = 'default',
      'password' = 'JR29uF39LqX3LrG',
      'format' = 'json'
  );
    
  -- 加工得到 UV 指标，统计所有时间内的 UV
  INSERT INTO output_uv
  SELECT
    'userids'                AS `userids`,
    COUNT(distinct user_id)  AS uv,
    TO_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(),'yyyy-MM-dd HH:mm:ss')) AS create_time
  FROM input_web_record
  GROUP BY user_id;
    
  -- 加工并得到 PV 指标，统计每 10 分钟内的 PV
  INSERT INTO output_pv
  SELECT
    'pagevisits'               AS `pagevisits`,
    CAST(product_id AS string) AS product_id,
    COUNT(product_id) AS pv,
    TUMBLE_START(times, INTERVAL '10' MINUTE) as `stt`,
    TUMBLE_END(times, INTERVAL '10' MINUTE) as `edt`
  FROM input_web_record WHERE record_type = 0
  GROUP BY
    TUMBLE(times, INTERVAL '10' MINUTE),
    product_id,
    user_id;
    
  -- 加工并得到转化率指标，统计每 10 分钟内的转化率
  INSERT INTO output_conversion_rate
  SELECT
    'conversion_rate' AS `conversion_rate`,
    CAST( (((SELECT COUNT(1) FROM input_web_record WHERE record_type=0)*1.0)/SUM(a.product_id)) as string),
    TO_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(),'yyyy-MM-dd HH:mm:ss')) AS create_time
  FROM (SELECT * FROM input_web_record where record_type = 1) AS a
  GROUP BY
    TUMBLE(times, INTERVAL '10' MINUTE),
    product_id;
  ```

2. 点击语法检查，对代码进行语法检查。

3. 点击保存，保存修改，防止代码丢失。

## 配置作业调度

1. 选择已创建好的作业，点击右侧的**调度设置**，进入调度配置页面。    
2. 设置调度策略。   
   
   本实践选择**执行一次**，**发布后立即执行**。若您需要配置为其他调度策略，请参见[配置作业调度](../../../manual/data_development/job/scheduling_job)。

   <img src="/bigdata/dataomnis/_images/bp_schedule_sql.png" alt="配置作业调度" style="zoom:50%;" />

3. 设置完成后，点击**确定**。

## 配置运行参数

1. 选择已创建好的作业，点击右侧的**运行参数**，进入运行参数配置页面。 

2. 基础设置。
   
   - **计算集群**：在该页面可以查看和修改运行作业的计算集群。
   - **并行度**：配置作业的并发数，不能为 `0`，默认为 `1`。

   <img src="/bigdata/dataomnis/_images/bp_enviroment_sql_3.png" alt="基础设置" style="zoom:50%;" />
   
3. 依赖资源。

   - **依赖包**、**函数包**：本示例无需选择依赖包和函数包。
   - **内置 Connector**：本示例选择如下内置 Connector。
   
   <img src="/bigdata/dataomnis/_images/bp_enviroment_sql_4.png" alt="依赖资源" style="zoom:50%;" />

4. 配置完成后，点击**确定**。

## 发布作业

完成作业调度和运行参数配置后，您才可以发布作业。

1. 点击**发布**，弹出发布调度任务对话框。

   <img src="/bigdata/dataomnis/_images/publish_job.png" alt="发布作业" style="zoom:50%;" />

2. 填写作业描述信息。
3. 选择是否**终止当前作业正在运行中的实例**。首次发布作业时无需勾选此项。
   
   如果当前作业有作业实例正在运行，勾选此项，运行中的作业实例会立即被强制终止。

4. 点击**确定**，发布作业。发布作业时也会对代码进行语法检查，需要一定的时间，请耐心等待。

   作业发布成功后，您可以前往运维中心查看已发布作业和作业实例。


