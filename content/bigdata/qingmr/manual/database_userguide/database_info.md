---
title: "使用简介"
description: 本小节主要介绍 QingMR 数据库使用指南简介。 
keywords: QingMR 使用简介,
weight: 10
collapsible: false
draft: false
---



- 以下场景均在 `root` 用户下测试通过。

- 如以非 `root` 用户比如用户 `ubuntu` 运行 **Spark on YARN job** 或 **Hive on Spark job**，需要先运行如下命令：

```shell
/opt/hadoop/bin/hdfs dfs -mkdir -p /user/ubuntu/

/opt/hadoop/bin/hdfs dfs -chown -R ubuntu:ubuntu  /user/ubuntu/
```

- 如以非 `root` 用户运行 **MapReduce job** 或者上传文件到 HDFS ，也需要具有相应目录的读写权限.
