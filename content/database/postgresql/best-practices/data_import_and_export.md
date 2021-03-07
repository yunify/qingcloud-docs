---
title: "数据导入和导出"
description: Test description
weight: 3
---

## 数据导出

命令：  
`pg_dump -U root -h 需要导出数据的 DB 的 IP  (-t 表名)  数据库名(缺省时同用户名)  > 路径/文件名.sql`  
例如：`pg_dump -U qingcloud -h 192.168.100.246 qingcloud  > /tmp/pgdatabk.sql`
  ![数据导出](../../_images/pg_datadump.png)

## 数据导入

### 方式一：从文件导入数据

命令：
`psql -d databaename(数据库名) -U username(用户名) (-h 需要导入数据的DB的IP) -f < 路径/文件名.sql`   

>注意这里导入的时候请使用root用户，以防止权限不够导入数据有问题,数据库root用户的密码与新建数据库时的用户命名相同。     
>如果有需要，导入数据时先创建数据库再用psql导入：
>`createdb newdatabase;`
>这里直接导入用户在创建集群时创建的数据库名称为qingcloud

例如：
`psql -d qingcloud -U root -h 192.168.100.6 -f /tmp/pgdatabk.sql`
![数据导入](../../_images/pg_dataimport.png)

### 方式二：在线导入数据

pg_dump 和 psql 读写管道的能力使得直接从一个服务器转储一个数据库到另一个服务器成为可能。
命令：  
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
例如：`select * from t_user; `
![数据check](../../_images/datacheck.png)



