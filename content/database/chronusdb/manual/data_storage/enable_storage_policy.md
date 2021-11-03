---
title: "开启对象存储策略"
description: 本小节主要介绍如何开启对象存储策略。 
keywords: ChronusDB 开启对象存储策略；冷热存储，冷热存储策略
weight: 10
collapsible: false
draft: false
---



ChronusDB 通过创建对象存储策略，并在创建表时添加语句指定对象存储策略，将冷数据存储到对象存储服务磁盘中，实现数据多磁盘存储。

- ChronusDB 对象存储策略默认关闭。
- 若需使用数据冷热分离功能，需[配置冷热存储策略](../config_hot_to_cold_storage)。

本小节主要介绍如何开启 ChronusDB 对象存储策略，将数据全部存储在对象存储中。

> **注意**
> 
> -开启存储策略将重启集群。为避免数据丢失，请在业务低峰期开启存储策略。
> 
> -当多个表共用一个存储策略时，在对象存储桶的数据统一存在同一目录下，不会按照表进行划分目录，可能对运维不友好。

## 约束限制

- 创建对象存储策略后，暂不支持修改存储策略参数值。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ChronusDB 集群，且集群状态为**活跃**。
- 已创建对象存储桶，并获取对象存储地址。
  
  > **注意**
  > 
  > 对象存储服务与集群需在同一区域；若不在同一区域，可通过[边界路由器](../../../../../network/border_router/)或 [VPN](../../../../../network/vpc/manual/vpn/) 等方式打通网络。

- 已创建并获取 API 密钥。

## 步骤 1：创建对象存储策略

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **时序数据库 ChronusDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**创建对象存储策略**，进入存储策略配置窗口。

   <img src="../../../_images/enable_bucket_policy.png" alt="启动对象存储策略" style="zoom:50%;" />

6. 配置存储策略信息，详细参数说明请参见[存储策略参数](#存储策略参数)。

7. 确认配置信息无误后，点击**提交**，返回集群页面。

   待集群重启，状态切换为**活跃**，即对象存储策略创建完毕。

### 存储策略参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| 策略名称 |  输入存储策略名称。<li>只能包含字母、数字、下划线。 |
| 对象存储地址  | S3 协议的对象存储地址。<li>必须以 ‘/’ 结尾。|
| key_secret |  输入 API 密钥密码。 |
| key_id  | 输入 API 密钥 ID。|

## 步骤 2：查看存储策略

创建对象存储策略后，执行如下命令将查询到三条存储策略。

```bash
$ echo "select  *  from  system.storage_policies" | curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
```

以创建一个 `ossp` 对象存储策略为例，查询回显信息如下：

<img src="../../../_images/check_storge_policy.png" alt="查看对象存储策略" style="zoom:50%;" />

|  <span style="display:inline-block;width:120px">策略</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| default |  未创建对象存储策略前，默认存储策略，直接存储数据至热数据盘 `default`。 |
| ossp  | 开启对象存储策略后，新创建的对象存储策略。数据全量存储到对象存储盘 `ossp`。|
| ossp_hot_to_cold  | 开启对象存储策略后，新创建的冷热存储策略。数据可根据磁盘容量和存储时间，在冷热数据盘之间转移，即在 `default` 和 `ossp`磁盘间转移。|

> **说明**
> 
> -`move_factor` 参数表示热数据盘存储空间使用率低于该阈值，将转移数据最早写入的数据。默认值 `0.1`，表示热数据盘存储空间大于 90% 将自动转移数据。
> 
> -`prefer_not_to_merge` 参数表示冷数据盘中的数据是否进行合并。默认值 `0` 表示不合并。
> 
> -`volume_priorty` 参数决定策略存储磁盘顺序优先级。
> 
> -暂不支持修改存储策略参数值。

## 步骤 3：建表指定存储策略

- 创建对象存储策略后，建表未指定相关策略时，仍启用 `default` 默认存储策略；
- 若需使用对象存储桶直接存储数据，需在建表时添加语句指定对象存储策略。
- 若需使用冷热存储策略，请参见[配置冷热分离存储](../config_hot_to_cold_storage)。

添加对象存储策略语句如下：

```sql
 SETTINGS storage_policy = '<策略名称>';
```

以下示例建表语句，在`ossp`对象存储策略上，将所有数据全部存储到 `ossp` 对象存储磁盘中。

```bash
$ echo  "CREATE TABLE test.t_local
(
    EventDate DateTime,
    CounterID UInt32,
    UserID UInt32,
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(EventDate) 
ORDER BY (CounterID, EventDate)
SETTINGS storage_policy = 'ossp'"
| curl 'http://<ChronusDB 用户名>:<ChronusDB 密码>@<高可用 IP>:8123/' --data-binary @-
```
