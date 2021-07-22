---
title: "添加规则子集"
description: manual
draft: false
weight: 50
draft: false
---

规则子集是一组安全规则的集合，您可以依据自身业务将安全策略分为多组。使用安全组策略时，通过绑定规则子集的方式来实现多组安全策略的批量引用，绑定后该安全组将会应用子集内的所有规则。每个安全组最多可同时绑定 10 个规则子集。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **安全服务** > **安全组**，进入**安全组**页签。

3. 进入**安全组规则子集**页面，点击**创建**。

   <img src="../../_images/create_subset.png" style="zoom:24%;" />

3. 输入规则子集名称，点击**提交**。

   <img src="../../_images/subset_name.png" alt="subset_name" style="zoom:50%;" />

4. 创建完成后可以点击该规则子集绑定安全组。

   <img src="../../_images/subset_group.png" style="zoom:30%;" />

   <img src="../../_images/subset_group2.png" style="zoom:33%;" />

5. 点击绑定的安全组，创建安全组规则。

   ![](../../_images/subset_group3.png)

   > 说明：安全组规则相关内容请参考[添加安全组规则](../../manual/sg_rules/)文档。
   
   ### 
