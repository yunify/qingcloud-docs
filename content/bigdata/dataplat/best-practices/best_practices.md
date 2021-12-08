---
title: "实时同步 MySQL 数据到 Elasticsearch"
description:  
keywords: 
weight: 10
collapsible: false
draft: false
---

本小节为您介绍如何将 MySQL 数据实时（upsert 或 append）同步到 Elasticsearch，并进行分析、展示。

## 准备 MySQL 数据源

本小节以 QingCloud MySQL Plus 为例，为您介绍如何创建数据库、如何建表并写入数据。

1. [创建 MySQL Plus 集群](/database/mysql/quickstart/create_cluster/)。
2. [创建数据库账号](/database/mysql/quickstart/create_cluster/)。
3. [连接数据库](/database/mysql/quickstart/access_mysqlplus/)。
4. 数据库连接成功后，执行以下命令，创建数据库表 **students**。

    ```sql
    create table if not exists students(
        id int(11),
        name varchar(10),
        score int(10),
        primary key (`id`)
    )engine=innodb auto_increment=4 default charset=utf8mb4 collate=utf8mb4_bin row_format=compact comment='学生表';  
    ```

5. 数据库表创建成功后，执行以下命令，写入数据。    
    ```sql    
    insert into students values(1,'张三',99);
    insert into students values(2,'李四',71);
    insert into students values(3,'王五',88);
    ```

## 准备 Elasticsearch 环境

本小节以 QingCloud ELK 服务为例，QingCloud ELK 服务对 Elasticsearch、Kibana 与 Logstash（后两者为可选）三者进行了很好的集成。

详细操作请参见：[创建 ELK 集群](/bigdata/elk/quickstart/create_cluster/)。

## 创建工作空间

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 选择相应的区域，单击**创建工作空间**，填写工作空间名称和描述信息。
   
   <img src="../../_images/cteate_workspace.png" alt="创建工作空间" style="zoom:50%;" />

5. 单击**创建**，开始创建工作空间。    
   工作空间创建成功后，即可在工作空间页面查看相应内容。


## 配置网络

1. 在目标工作空间单击**云上加工** > **网络配置**，进入网络配置页面。
2. 单击**创建网络**，进入创建网络页面。
   
   <img src="../../_images/create_net.png" alt="创建网络" style="zoom:50%;" />

3. 填写网络名称，选择 VPC 网络和私有网络。
4. 单击**确定**，开始创建网络。

## 创建计算集群

1. 在目标工作空间选择**云上加工** > **计算集群**，进入计算集群列表页面。
2. 单击**创建集群**，进入创建计算集群页面。
3. 配置集群相关参数，参数详细介绍请参见[创建计算集群 > 参数说明](../../manual/data_development/cluster/create_cluster/)。
4. 配置完成后，单击**确定**，开始创建计算集群。

## 创建 SQL 作业

1. 在目标工作空间选择**云上加工** > **实时计算**，进入实时计算页面。
2. 单击**创建作业**，进入创建作业页面。
   
   <img src="/bigdata/dataplat/_images/choose_model.png" alt="选择模式" style="zoom:50%;" />

3. 选择 SQL 模式。
4. 单击**下一步**，填写作业名称，并选择作业依赖的计算集群。
   
   <img src="/bigdata/dataplat/_images/job_basic.png" alt="填写信息" style="zoom:50%;" />

5. 配置完成后，单击**确定**，开始创建作业。

## 编写 SQL 作业

1. 单击作业名称，进入开发面板。
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

## 验证结果

1. 进入 Kibana 页面，详细操作可参见[访问 Kibana](/bigdata/elk/manual/cluster_info/#kibana-基本用法)。
2. 执行以下命令，在 Kibana 界面查看结果。
    
    ```
    GET stu/_search
    ```

    从下图中可以看到，MySQL 数据已正确同步到 Elasticsearch。
    <img src="/bigdata/dataplat/_images/bestpractice_kibana.png" alt="Kibana" style="zoom:50%;" />

