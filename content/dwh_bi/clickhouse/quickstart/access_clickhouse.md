---
title: "连接数据库"
description: 本小节主要介绍如何快速访问 ClickHouse 集群。 
keywords: ClickHouse 实例, 访问集群
weight: 20
collapsible: false
draft: false
---


ClickHouse on QingCloud 与原生 ClickHouse 高度兼容，可直接使用 ClickHouse 的连接方式。

可选用 Docker 、客户端、curl 等方式连接集群和导入数据。

> **说明**
> 
> 更多使用信息可以参考 [ClickHouse](https://clickhouse.yandex/docs/en/)。

## 前提条件

- 已创建 ClickHouse 集群，且集群状态为**活跃**。
- 已获取可登录数据库账号和密码。
- 已获取集群连接信息。

## 使用 Docker

- 使用 Docker 交互式的方式连接。
  
  ``` shell
  docker run -it --rm yandex/clickhouse-client -h 高可用IP --port TCP服务端口 --user 用户名 --password 密码
  ```

- 使用 Docke 非交互式的方式导入数据。

    ``` shell
    cat visits_v1.tsv | docker run -i --rm yandex/clickhouse-client -h 高可用IP --port TCP服务端口 --user 用户名 --password 密码 --query "INSERT INTO datasets.visits_v1 FORMAT TSV"
  ```

## 使用 ClickHouse 客户端

- 使用 clickhouse-client 交互式的方式连接。
   
   ``` shell
   sudo apt-get install clickhouse-client  #如已安装请忽略
   clickhouse-client -h 高可用IP --port tcp服务端口 --user 用户名  --password 密码
   ```

- 使用 clickhouse-client 非交互式的方式向导入数据。
   
   ``` shell
   sudo apt-get install clickhouse-client  #如已安装请忽略
   cat visits_v1.tsv | clickhouse-client -h 高可用IP --port TCP服务端口 --user 用户名 --password 密码 --query "INSERT INTO datasets.visits_v1 FORMAT TSV"
  ```

## 使用 curl 

- 使用 curl 访问。

   ``` shell
   echo 'SELECT 1' | curl 'http://用户名:密码@高可用IP:端口' -d @-
   ```

- 使用 curl 向导入数据。

   ``` shell
   cat visits_v1.tsv | curl 'http://用户名:密码@高可用IP:端口/?query=INSERT+INTO+datasets.visits_v1+FORMAT+FORMAT+TSV' --data-binary @-
   ```
