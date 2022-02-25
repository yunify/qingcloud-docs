---
title: "elasticdump 工具方式"
description: 本小节主要介绍如何通过 mysqldump 方式在线迁移。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,mysqldump 方式在线迁移
weight: 10
collapsible: false
draft: false
---

1. 在任意可以连通两个 Elasticsearch 集群的主机上安装 elasticdump，命令如下：

   ```bash
   # 没有 nodejs 及 npm 需要手动安装
   npm install elasticdump -g
   ```

2. elasticdump 安装成功后，即可进行数据迁移操作，命令如下：

   ```bash
   elasticdump --input=http://192.168.0.37:9200 --output=http://192.168.0.24:9200
   ```

   > **说明**
   >
   > 将 192.168.0.37 替换为原青云大数据平台的 Elasticsearch 集群的任意节点的 IP 地址，将 192.168.0.24 替换为 ELK 集群的任意 Elasticsearch 节点的 IP 地址。
