---
title: "环境准备"
description:  
keywords: 
weight: 10
collapsible: false
draft: false
---

## 准备 MySQL 数据源

本实践以 QingCloud MySQL Plus 为例，为您介绍如何创建数据库、如何建表并写入数据。

1. [创建 MySQL Plus 集群](/database/mysql/quickstart/create_cluster/)。
2. [创建数据库账号](/database/mysql/quickstart/create_cluster/)。
3. [连接数据库](/database/mysql/quickstart/access_mysqlplus/)。
4. 数据库连接成功后，执行以下命令，创建数据库 **demo**。

    ```sql
    create database if not exists demo;
    ```

5. 执行以下命令，在数据库 **demo** 中创建数据库表 **students**。

    ```sql
    use demo;
    create table if not exists students(
        id int(11),
        name varchar(10),
        score int(10),
        primary key (`id`)
    )engine=innodb auto_increment=4 default charset=utf8mb4 collate=utf8mb4_bin row_format=compact comment='学生表';  
    ```

6. 数据库表创建成功后，执行以下命令，写入数据。    
    ```sql    
    insert into students values(1,'张三',99);
    insert into students values(2,'李四',71);
    insert into students values(3,'王五',88);
    ```

## 准备 Elasticsearch 环境

本实践以 QingCloud ELK 服务为例，QingCloud ELK 服务对 Elasticsearch、Kibana 与 Logstash（后两者为可选）三者进行了很好的集成。

详细操作请参见：[创建 ELK 集群](/bigdata/elk/quickstart/create_cluster/)。