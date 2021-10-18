---
title: "查看存储数据和空间"
description: 本小节主要介绍如何查看存储数据和空间。 
keywords: ClickHouse 查看存储数据，查看存储空间
weight: 30
collapsible: false
draft: false
---


开启 S3 冷热存储后，可分别查看冷热数据盘中存储数据，以及查看存储空间使用情况。

本小节主要介绍如何查看冷热数据盘上数据和空间。

## 前提条件

- 已开启冷热存储。

## 查看存储数据

- 查看热数据盘上的数据。

   ```sql
   select * from system.parts where database = '<database_name>' and table = '<table_name>' and disk_name ='default' and active = 1;
   ```

- 查看冷数据盘上的数据。

   ```sql
   select * from system.parts where database = '<database_name>' and table = '<table_name>' and disk_name ='<disk_name>' and active = 1;
   ```

## 查看存储空间

执行以下语句，即可查看冷热数据盘空间。

```sql
select * from system.disks;
```
