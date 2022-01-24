---
title: "测试方法"
description: 本小节主要介绍 MongoDB 的性能测试方法。
keyword: MongoDB, 性能测试, 测试方法
weight: 30
collapsible: false
draft: false

---

本小节主要介绍如何使用 YCSB 对 MongoDB 进行性能测试。

## 测试场景

通用测试场景有如下 6种：

| <span style="display:inline-block;width:220px">场景</span> | <span style="display:inline-block;width:500px">说明</span> |
| --------------------- | ------------------------ |
| workloada                     | 读写均衡型，Reads/Writes 50:50                   |
| workloadb                     | 读多写少型，Reads/Writes 95:5                   |
| workloadc                     | 只读型，Reads 100%                    |
| workloadd                    | 读最近写入记录型，Reads/Insert 95:5                   |
| workloade                     | 扫描小区间型，Scan/Insert  95:5                  |
| workloadf                    | 读写入记录均衡型，Reads/Insert 50:50                  |

## 测试步骤

1. [创建云服务器](/compute/vm)，配置云服务器与 MongoDB 集群在相同可用区、VPC、私有网络和安全组。

2. 在云服务器上安装 YCSB 测试工具。
   
3. 在云服务器上准备测试数据。

   ```shell
   $ ./bin/ycsb.sh load  mongodb -s -P ./workloads/<workload_config>  -p mongodb.url=mongodb://<mongodb_user_name>:<mongodb_user_password><mongod_ip>:<mongod_port>/ycsb?authSource=admin -p mongodb.writeConcern=unacknowledged >loadlog.txt &
   ```

4. 在云服务上执行相关测试命令。

   ```shell
   $ ./bin/ycsb.sh run mongodb -s -P ./workloads/<workload_config> -p mongodb.url=mongodb://<mongodb_user_name>:<mongodb_user_password>@<mongod_ip>:<mongod_port>/ycsb?authSource=admin -p mongodb.upsert=true -threads <threads_number> -p mongodb.writeConcern=<writeConcern_mode> >runlog.txt & 
   ```

### 命令参数说明

| <span style="display:inline-block;width:220px">参数</span> | <span style="display:inline-block;width:300px">说明</span> | <span style="display:inline-block;width:200px">取值示例</span> |
| :--------------------- | :------------------------ | :------------------------ |
| -P                    |  表示指定读取的配置文件。  `./workloads/< workload_config >` 表示指定测试场景配置文件。 |  ./workloads/workloada  |
| -p mongodb.url      | 表示指定 mongod 连接地址。      | -    |
| authSource           | 表示指定用户认证库。若未开启用户认证，可忽略。    | admin    |
| -p mongodb.upsert     | 表示指定操作类型。<li>取值 `true` 表示执行更新操作 ；<li>取值 `false` 表示执行插入操作 。               | true    |
| -threads     | 表示指定并发线程数。  |  100    |
| -p mongodb.writeConcern     | 表示指定写入策略。<li>取值 `acknowledged` 表示应答式写入模式。要求确认操作已经传播到指定的单个 mongod 实例或副本集主实例，缺省为1。 <li>取值 `unacknowledged` 表示非应答式写入模式。不返回任何响应，所以无法知道写入是否成功，但对于尝试向已关闭的套接字写入或者网络故障会返回异常信息。<li>取值 `majority` 用于副本集环境，要求写入操作已经传递到绝大多数投票节点以及主节点后进行应答。                  | unacknowledged    |
