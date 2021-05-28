---
title: "连接集群"
description: 
date: 2021-04-19T00:39:25+09:00
draft: false
weight: 3
---


ClickHouse on QingCloud 与原生 ClickHouse 高度兼容，可直接使用 ClickHouse 的任何连接方式连接 ClickHouse on QingCloud 。

可选用以下方式连接集群和导入数据。

- 使用Docker交互式的方式连接。
  
  ``` shell
  docker run -it --rm yandex/clickhouse-client -h 高可用IP --port TCP服务端口 --user 用户名 --password 密码
  ```


- 使用Docker非交互式的方式导入数据。
    ``` shell
    cat visits_v1.tsv | docker run -i --rm yandex/clickhouse-client -h 高可用IP --port TCP服务端口 --user 用户名 --password 密码 --query "INSERT INTO datasets.visits_v1 FORMAT TSV"
  ```


- 使用clickhouse-client交互式的方式连接。
   ``` shell
   sudo apt-get install clickhouse-client  #如已安装请忽略
   clickhouse-client -h 高可用IP --port tcp服务端口 --user 用户名  --password 密码
   ```

- 使用clickhouse-client非交互式的方式向导入数据。
   ``` shell
   sudo apt-get install clickhouse-client  #如已安装请忽略
   cat visits_v1.tsv | clickhouse-client -h 高可用IP --port TCP服务端口 --user 用户名 --password 密码 --query "INSERT INTO datasets.visits_v1 FORMAT TSV"
  ```

- 使用curl访问。
   ``` shell
   echo 'SELECT 1' | curl 'http://用户名:密码@高可用IP:端口' -d @-
   ```

- 使用curl向导入数据。
   ``` shell
   cat visits_v1.tsv | curl 'http://用户名:密码@高可用IP:端口/?query=INSERT+INTO+datasets.visits_v1+FORMAT+FORMAT+TSV' --data-binary @-
   ```

**注解**：更多使用信息可以参考： [ClickHouse](https://clickhouse.yandex/docs/en/)

