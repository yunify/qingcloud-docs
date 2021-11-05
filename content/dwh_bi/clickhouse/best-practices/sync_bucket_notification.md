---
title: "同步 QingStor 事件通知"
description: 本小节主要介绍如何同步 QingStor 事件通知。 
keywords: ClickHouse 同步事件通知；对象存储服务事件通知，QingStor 事件通知，桶事件通知
weight: 20
collapsible: false
draft: true
---



ClickHouse 通过配置对象存储策略，并在创建表时添加语句指定对象存储策略，将冷数据存储到对象存储服务 S3 磁盘中，实现数据冷热分层存储。

- 开启冷热存储后，即开启默认存储策略。
- 若需转移指定时间前冷数据至对象存储服务，需[配置 TTL 存储策略](../config_ttl_storage)。
- ClickHouse 对象存储策略默认关闭。

本小节主要介绍如何开启 ClickHouse 冷热存储，以及如何修改默认存储策略。

> **注意**
> 
> 开启存储策略将重启集群。为避免数据丢失，请在业务低峰期开启存储策略。

## 约束限制

- 开启冷热存储后，暂不支持修改存储策略。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ClickHouse 集群，且集群状态为**活跃**。
- 已创建对象存储，并获取对象存储地址。
  
  > **注意**
  > 
  > 对象存储服务需与集群在同一区域，或通过[边界路由器](../../../../../network/border_router/)或 [VPN](../../../../../network/vpc/manual/vpn/) 等方式打通网络。

- 已创建并获取 API 密钥。

## 步骤 1：开启对象存储策略

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据仓库与 BI** > **ClickHouse**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**创建对象存储策略**，进入存储策略配置窗口。

   <img src="../../../_images/enable_bucket_policy.png" alt="启动对象存储策略" style="zoom:50%;" />

7. 配置存储策略信息，详细参数说明请参见[存储策略参数](#存储策略参数)。

8. 确认配置信息无误后，点击**提交**，返回集群页面。

   待集群重启，状态切换为**活跃**，即对象存储策略配置完毕。

### 存储策略参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| 策略名称 |  输入存储策略名称。<li>只能包含字母、数字、下划线。 |
| 对象存储地址  | s3 协议的对象存储地址。<li>必须以 ‘/’ 结尾。|
| key_secret |  输入 API 密钥密码。 |
| key_id  | 输入 API 密钥 ID。|

## 步骤 2：建表指定存储策略

开启对象存储策略后，若需使用冷热数据分层存储功能，还需在建表时添加如下语句指定对象存储策略。

```sql
SETTINGS storage_policy = '< 策略名称 >';
```

## 步骤 3：修改默认存储策略

开启冷热存储后，默认存储策略的相关参数如下表所示。

- 可通过修改参数，修改默认存储策略。
- 并可通过[配置 TTL 存储策略](../config_ttl_storage)，实现转移指定时间前冷数据。

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| move_factor |  热数据盘存储空间使用率低于该阈值，将转移数据最早写入的数据。<li>默认值 0.1，表示热数据盘存储空间小于10%将自动转移数据。<li>取值范围：大于0，小于等于1。 |
| prefer_not_to_merge  | 冷数据盘中的数据是否进行合并。<li>默认值 `true` 表示不合并。<li>`false` 表示合并。|
