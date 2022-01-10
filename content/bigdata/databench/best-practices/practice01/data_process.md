---
title: "数据开发"
description:  
keywords: 
weight: 30
collapsible: false
draft: false
---


## 创建 SQL 作业

1. 在目标工作空间选择**数据开发** > **实时计算**，进入实时计算页面。
2. 点击**创建作业**，进入创建作业页面。
   
   <img src="/bigdata/databench/_images/choose_model_sql.png" alt="选择模式" style="zoom:50%;" />

3. 选择 SQL 模式。
4. 点击**下一步**，填写作业名称，并选择作业依赖的计算集群。
   
   <img src="/bigdata/databench/_images/job_basic.png" alt="填写信息" style="zoom:50%;" />

5. 配置完成后，点击**确定**，开始创建作业。

## 开发 SQL 作业

1. 点击作业名称，进入开发面板。
2. 在开发面板中输入以下 SQL 代码，创建 Flink 任务到计算集群。

    ```sql
    DROP TABLE IF EXISTS students;
    CREATE TABLE students(
        id INT,
        name STRING,
        score    INT,
        PRIMARY KEY (id) NOT ENFORCED
    ) WITH (
        'connector' = 'mysql-cdc',       --写入数据到 mysql-cdc
        'hostname' = '192.168.100.2',    --mysql 连接 IP 地址
        'port' = '3306',                 --mysql 连接端口号
        'username' = 'test01',           --mysql 连接用户名
        'password' = 'Gx12345678@',      --mysql 连接密码
        'database-name' = 'demo',        --mysql 数据库名称
        'table-name' = 'students'        --mysql 数据库表名称
    );
    
    DROP TABLE IF EXISTS es_stu;
    CREATE TABLE es_stu(
        id INT,
        name STRING,
        score INT,
        PRIMARY KEY (id) NOT ENFORCED --定义主键则根据主键upsert，否则是append模式
    )WITH(
        'connector' = 'elasticsearch-7', --输出到es7
        'hosts' = 'http://192.168.100.19:9200',  --es连接地址
        'index' = 'stu',                         --es的index名
        'sink.flush-on-checkpoint' = 'true',     --checkpoint时不允许批量写入
        'sink.bulk-flush.max-actions' = '50',    --每批次最多的条数
        'sink.bulk-flush.max-size' = '10mb',     --每批次累计最大大小
        'sink.bulk-flush.interval' = '1000',     --批量写入的间隔(ms)
        'connection.max-retry-timeout' = '1000', --每次请求的最大超时时间(ms)
        'format' = 'json'                        --输出数据格式，目前只支持 'json'
    );
    
    INSERT INTO es_stu SELECT id,name,score FROM students;
    ```

## 作业调度

1. 选择已创建好的作业，点击右侧的**调度设置**，进入调度配置页面。    
   在该页面可以查看作业的基础属性，包括业务名称、业务 ID、业务描述。基础属性在调度配置页面均不可修改。
2. 设置调度策略。详细操作请参见[配置作业调度](../../../manual/data_development/job/scheduling_job)。
3. 设置完成后，点击**确定**，完成调度设置操作。

## 发布作业

点击**发布**，发布作业。

