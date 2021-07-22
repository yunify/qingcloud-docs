---
title: "清理任务日志"
draft: false
enableToc: false
weight: 22
---

## 操作场景

任务节点在执行操作后会产生日志，占用日志节点空间。您可以设置日志保留天数，超过保留天数的文件将被自动进行清理（永久删除）。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **AppCenter** > **集群管理**，进入**集群管理**页面。

3. 找到您的 Harbor 集群，点击集群 ID 进入集群详情页面。

4. 在左侧的**基本属性**区域，点击<img src="/container/harbor/_images/man05_menu_icon.png" alt="icon" style="zoom:60%;" />图标，选择**清理任务日志**。

5. 在**保留天数**输入框中，输入需要任务日志保留的天数。可设置范围：0-365天。

   <img src="/container/harbor/_images/man22_clean_tasklog.png" alt="clean_tasklog" style="zoom:50%;" />

6. 点击**提交**。

