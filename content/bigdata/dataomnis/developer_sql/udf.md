---
title: "自定义函数"
description: 本小节主要介绍自定义函数的概念、及如何创建自定义函数。 
keywords: 大数据工作台,自定义函数,UDF,UDTF,UDAF
weight: 20
collapsible: false
draft: false
---

当系统内置函数无法支撑您的业务需求时，您可以编写自定义函数 UDF（User-Defined Functions）插入自己的处理代码，并在查询中进行使用，从而满足业务的多样化需求。

## 函数类型

大数据工作台支持如下自定义函数：

- 标量函数（Scalar Function，UDF）   
    其输入与输出是一对一的关系，即读入一行数据，写出一条输出值。例如系统内置的 SUBSTRING、REPLACE 等字符串操作函数，都属于标量函数。
- 表函数（Table Function，UDTF）   
    调用一次函数输出多行或多列数据，这样可以在 JOIN 操作中作为右表。
- 聚合函数（Aggregate Function，UDAGG）   
    其输入与输出是多对一的关系，即将多条输入记录聚合成一条输出值。例如系统内置的 MAX、MIN、AVG 等都属于聚合函数。
- 表聚合函数（Table Aggregate Function）   
    表聚合函数的作用是将多行数据的一组值，聚合为新的多行数据（多对多）。

更多详细信息请参见 [Flink 官方文档](https://nightlies.apache.org/flink/flink-docs-release-1.12/zh/dev/table/functions/udfs.html#%E6%A0%87%E9%87%8F%E5%87%BD%E6%95%B0)。

## 注意事项

- 自定义函数的性能低于系统内置函数，若系统内置函数能满足业务需求，建议您优先使用系统内置函数。
- 当自定义函数的名称与系统内置函数的名称相同时，系统默认会调用自定义函数。

## 开发自定义函数

1. 编写自定义函数代码，详细请参见 Flink 官方文档中的 [UDF 开发指南](https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/functions/udfs.html#开发指南)。

    > **说明**
    > 
    > 目前大数据工作台支持 Java 和 Scala 两种语言编写的程序包。

2. 编译写好的自定义函数，并打成 JAR 包。

## 使用自定义函数

1. 上传程序包   
    在资源管理界面，上传自定义函数的 JAR 程序包。详细操作请参见[上传程序包](/bigdata/dataomnis/manual/data_development/resource/upload)。   
2. 声明 UDF   
    
    在 SQL 作业中添加 UDF 声明语句，然后就可以像普通函数一样使用了。

    ```sql
    CREATE [TEMPORARY|TEMPORARY SYSTEM] FUNCTION 
    [IF NOT EXISTS] [catalog_name.][db_name.]function_name 
    AS identifier [LANGUAGE JAVA|SCALA]
    ```

    **示例**：
    ```sql
    -- 声明 my_custom_function 函数
    CREATE FUNCTION my_custom_function AS 'com.example.flink.MyCustomFunction';
    -- 使用 my_custom_function 函数
    INSERT INTO sink_stream select my_custom_function(attr) FROM source_stream;
    ```

3. 选择依赖资源   
    在作业的运行参数界面，选择已上传的 JAR 程序包。