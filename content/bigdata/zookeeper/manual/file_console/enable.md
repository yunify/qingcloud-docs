---
title: "开启/关闭文件管理控制台"
description: 本小节主要介绍如何开启文件管理控制台。
keyword: 云计算,大数据,ZooKeeper,文件管理控制台
weight: 10
draft: false
---

`ZooKeeper 3.4.14 - v2.0.0` 版本新增文件管理控制台功能，您可以通过文件管理控制台查看节点的日志。

文件管理控制台开关通过集群参数**启用文件查看控制台**进行控制，默认为开启。

## 开启文件管理控制台

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **ZooKeeper 服务**，进入 ZooKeeper 服务管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 点击**配置参数**页签，在参数列表上方的下拉框中选择`公共参数`，进入公共参数管理页面。

   <img src="/bigdata/zookeeper/_images/para_file_console.png" alt="文件管理控制台" style="zoom:50%;" />

5. 点击**修改属性**，对应参数的**值**进入可编辑状态。
6. 开启文件管理控制台。

   设置**启用文件查看控制台**为`true`，开启文件管理控制台。

   <img src="/bigdata/zookeeper/_images/para_file_console_enable.png" alt="开启文件管理控制台" style="zoom:50%;" />

7. 设置用户名、密码。

    - 文件查看用户名：文件管理控制台登录用户名，默认为 `admin`。
    - 文件查看密码：文件管理控制台登录密码，默认为 `admin`。

    <img src="/bigdata/zookeeper/_images/para_file_console_account.png" alt="修改用户名、密码" style="zoom:50%;" />

8. 确认参数信息无误后，点击**保存**，弹出提示框。
9. 点击**确认**，返回参数列表页面。

## 关闭文件管理控制台

设置**启用文件查看控制台**为`false`，即可关闭文件管理控制台。

<img src="/bigdata/zookeeper/_images/para_file_console_disable.png" alt="关闭文件管理控制台" style="zoom:50%;" />