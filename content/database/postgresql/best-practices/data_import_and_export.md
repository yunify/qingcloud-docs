---
title: "数据导入和导出"
description: 本小节主要介绍如何在 PostgreDB 数据库导入和导出数据。 
keywords: PostgreSQL 数据导出,数据导入
data: 2021-05-14T00:38:25+09:00
weight: 1
collapsible: false
draft: false
---


本小节主要介绍如何在 PostgreDB 数据库导入和导出数据。 

## 数据导出
  
`pg_dump -U root -h 需要导出数据的 DB 的 IP  (-t 表名)  数据库名(缺省时同用户名)  > 路径/文件名.sql`  

例如：

`pg_dump -U qingcloud -h 192.168.100.246 qingcloud  > /tmp/pgdatabk.sql`

  ![数据导出](../../_images/pg_datadump.png)

## 数据导入

### 从文件导入数据


导入数据时，需使用 **root** 用户，以防止权限不够导入数据有问题，**root** 用户密码与新建数据库的用户命名相同。  

1. 创建数据库。
   
   `createdb newdatabase;`

2. 通过`psql`命令，导入数据。
   
   `psql -d databaename(数据库名) -U username(用户名) (-h 需要导入数据的DB的IP) -f < 路径/文件名.sql`   
   
   在创建集群时创建的数据库名称默认为 `qingcloud`，可直接作为导入用户。

   例如：

   `psql -d qingcloud -U root -h 192.168.100.6 -f /tmp/pgdatabk.sql`

![数据导入](../../_images/pg_dataimport.png)

### 在线导入数据

`pg_dump` 和 `psql` 读写管道的能力，可将数据直接从一个服务器转储一个数据库到另一个服务器。
  
`pg_dump -h host1 dbname | psql -h host2 dbname`

例如：

```bash
export PGPASSWORD=qingcloud1234
#PGPASSWORD为用户新建集群设置的数据库密码
pg_dump -U qingcloud -h 192.168.100.246 qingcloud -w | psql -d qingcloud -U root -h 192.168.100.6 -W
```

![数据导入](../../_images/pg_importdataonline.png)

## 数据检查

导入完成后可以使用 select 语句进行检查。   

例如：

`select * from t_user; `

![数据check](../../_images/datacheck.png)
