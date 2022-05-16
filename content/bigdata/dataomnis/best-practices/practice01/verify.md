---
title: "验证结果"
description: 本小节主要介绍如何验证 SQL 作业最佳实践结果。
keywords: 大数据工作台,最佳实践,SQL 作业
weight: 40
collapsible: false
draft: false
---

## 验证数据同步结果

1. 进入 Kibana 页面，详细操作可参见[访问 Kibana](/bigdata/elk/quickstart/access_kibana/)。
2. 执行以下命令，在 Kibana 界面查看数据同步结果。
    
    ```
    GET stu/_search
    ```

    从下图中可以看到，MySQL 数据已正确同步到 Elasticsearch。

    <img src="/bigdata/dataomnis/_images/bestpractice_kibana.png" alt="Kibana" style="zoom:50%;" />

## 验证数据实时同步结果

1. 修改数据库中的数据。
   
   执行以下命令，修改数据库 **demo** 中数据库表 **students** 的数据。

    ```sql   
    update students set score=89 where name='张三';
    delete from students where name='李四';
    insert into students values(4,'赵六',92);
    ```

2. 在 Kibana 页面，执行以下命令，查看数据实时同步结果。
    
    ```
    GET stu/_search
    ```

    从下图中可以看到，修改后的 MySQL 数据已正确同步到 Elasticsearch。

    <img src="/bigdata/dataomnis/_images/bestpractice_kibana01.png" alt="Kibana" style="zoom:50%;" />