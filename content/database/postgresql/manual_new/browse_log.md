---
title: "日志管理"
description: 本小节主要介绍如何获取 PostgreSQL 运行日志。 
keyword: 运行日志,日志管理,PostgreSQL,关系型数据库,数据库
weight: 90
collapsible: false
---

PostgreSQL 的日志默认保存30天，每天会自动保存一个日志文件，超过30天系统自动清理。日志的命名规则为`postgresqllog_xx.csv`，`xx`表示在当月的第多少天。

> **说明**
>
> * 用户可设置 `log_min_duration_statement` 参数，进行慢日志记录。
> * 用户可使用 pgaudit 插件开启日志审计，帮助用户了解系统运行状态，及时发现异常行为。

- 为了方便用户获取 PostgreSQL 的运行日志，PostgreSQL 默认开启 FTP 服务。用户可以通过 FTP 获取 PostgreSQL 的日志。默认用户名为 `ftp_pg`，默认密码为 `Pa88word`。
- 通过 wget 文件下载工具，可下载日志目录和单个文件。

> **注意**
> 
> 下载或预览的服务器需与数据库在同一 VPC 下，或者通过 **VPN 服务**来访问。不建议通过端口转发的方式将服务暴露到外网，以免造成数据库关键信息暴露等风险。

本小节主要介绍如何预览日志和下载 PostgreSQL 运行日志。

## 前提条件

- 已获取 HTTP 服务日志端节点地址，以及登录账号和密码。
- 已在服务器安装 FTP 客户端工具。
- 已在服务器安装 wget 文件下载工具。

## 操作步骤

### 在线查看日志

创建 PostgreSQL 数据库集群后，可在控制台集群详情页的**日志**页签查看对应日期的日志表，通过查询相应日期的表可以在线查看数据库的集群日志（primary 节点日志）。

1. 登录管理控制台。

2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 PostgreSQL**，进入集群管理页面。

3. 选择目标集群，点击目标集群 ID，进入集群详情页面。

4. 点击**配置参数**页签，进入集群配置参数管理页面。

5. 点击**修改属性**，公共参数**值**进入可编辑状态。

6. 修改日志参数后，点击**保存**。


   - log：显示集群日志
   - calls：根据 SQL 调用次数显示慢日志。
   - mean_time：根据 SQL 平均时间显示慢日志。
   - total_time：根据 SQL 总运行时间显示慢日志。
   - max_time：根据 SQL 最大执行时间显示慢日志。

   <img src="../_images/confi_log_para.png" style="zoom:100%;" />

7. 点击日志，可查看对应的日志列表。

   <img src="../_images/view_log.png" style="zoom:100%;" />

### 下周运行日志

1. 通过 FTP 命令可以获取到日志，其中 IP 对应 PostgreSQL 节点所在的 IP 地址。

    ```bash
    ftp 192.168.100.13
    ls
    exit
    ```

2. 通过 wget 文件下载工具，下载日志。示例如下：

   ```bash
   wget ftp://192.168.100.13/postgresqllog_24.csv --ftp-user=ftp_pg --ftp-password=Pa88word
   ```
   
   ![logcheck](../../_images/logcheck.png)
