---
title: "License 类商品使用"
description: 介绍如何使用已购买的 License 商品。
keyword:  云市场, 商品, License
weight: 30
draft: false
---

本文介绍如何使用在云市场购买的 License 商品。

## 前提条件

已在云市场购买 License 类商品并支付成功。具体操作请参考[购买商品](/appcenter/market/manual/20_purchase_app/)。

## 商品交付流程

使用 License 类商品前，请先了解 License 商品整体交付流程，如下：

![](../../../_images/license_delivery_process.svg)

用户购买 License 商品后，需要等待服务商提交 License 信息，然后在**交付中心**完成行验收确认。

## 进入交付中心

1. 登录云市场首页，在页面右边顶部菜单，选择**买家中心**，进入买家中心控制台。

2. 在左侧导航栏中，点击**交付中心**，进入**交付中心**页面。

   交付中心列表展示了所有待交付或已交付商品的交付信息，包括商品规格、交付方式、交付状态、创建时间等。

   ![](../../../_images/buyer_delivery_center_list.png)

3. 在**交付方式**选项卡中，选择 **License**，则列表只展示 License 类商品的交付信息。

## 查看流程详情

用户购买 License 后，交付中心将生成相应的订单及交付流程，可以查看流程详情。

1. 在**交付中心**页面，点击列表中**操作**列的**流程详情**，进入**项目详情**页面。

   ![](/appcenter/market/_images/license_project_detail_1.png)

2. 在**交付流程详情**页面，可查看**交付流程详情**、**商品基本信息**及**服务商信息**。

3. 在**交付流程详情**区域，可通过以下操作查看流程详情：

   - 点击**流程日志**，进入**流程日志**页面，可查看到当前服务所有（包括用户及服务商）已执行过的流程。
   - 点击 <img src="/appcenter/market/_images/chevron_down.png" style="zoom:50%;" /> 图标，在展开区域中，可查看该流程环节的执行详情。

## 确认收货

购买 License 后，其交付流程的初始交付状态为`实施中`。待服务商提交 License 信息后，交付状态变为`待验收`，便可以进行验收操作。

>**注意**
>
>若超过 30 天未执行验收流程，系统将默认自动完成验收。为保证交付质量，请您及时执行验收操作。

1. 在**交付中心**页面，选择处于`待验收`状态的订单，点击**操作**列的**验收服务**，进入交付流程详情页。

2. 在**服务商提交License**环节，点击 <img src="/appcenter/market/_images/chevron_down.png" style="zoom:50%;" />  图标，查看 License 信息。

3. 根 据License 使用情况，在**确认收货**环节完成收货确认。

   ![](/appcenter/market/_images/license_confirm_acceptance.png)

   - 若确认 License 有效无误，然后点击**确认收货**。
   - 若 License 不可用或对 License 有疑义，填写您的问题，然后点击**驳回**。

4. 在弹出的提示框中，点击**提交**。

   - 若确认收货，则此次交付流程结束。
   - 若驳回验收，则交付流程回退到`服务商提交License`环节。
