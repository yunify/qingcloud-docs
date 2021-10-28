---
title: "查看存储数据和空间"
description: 本小节主要介绍如何查看存储数据和空间。 
keywords: ChronusDB 查看存储数据，查看存储空间
weight: 30
collapsible: false
draft: false
---


配置冷热存储策略后，可分别查看冷热数据盘中存储数据，以及查看存储空间使用情况。

本小节主要介绍如何查看冷热数据盘上数据和空间。

## 查看存储数据

- 查看热数据盘上的数据。

   ```bash
   $ echo "select * from system.parts where database = '<database_name>' and table = '<table_name>' and disk_name ='default' and active = 1" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
   ```

- 查看冷数据盘上的数据。

   ```bash
   $ echo "select * from system.parts where database = '<database_name>' and table = '<table_name>' and disk_name ='<disk_name>' and active = 1" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
   ```

## 查看存储空间

执行以下语句，即可查看冷热数据盘空间。

```bash
$ echo "select * from system.disks" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
```
