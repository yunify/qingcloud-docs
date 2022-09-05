---
title: "PostgreSQL 正常运行，大多数查询挂起"
keyword: PostgreSQL,关系型数据库,数据库
weight: 20
collapsible: false
draft: false

---

## 现象描述

* PostgreSQL 连接数已满，kill 进程并重启应用无法恢复。

* 查看 Postgresql.csv 日志，存在以下报错

  dsa_area could not attach to segment

  cannot unpin a segament that is not pinned

  ![报错显示](../../_images/parallel_leader_participation.png) 

##  可能原因

并行查询过程中，触发动态共享内存管理异常导致。

## 解决措施

设置 `parallel_leader_participation` 参数为 `off`，关闭并行查询。