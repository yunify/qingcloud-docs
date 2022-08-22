---
title: "SaaS 商品接入调试"
description: 介绍服务商如何进行 SaaS 类商品的接入测试。
keyword:  云市场, 商品接入
weight: 30
draft: false

---

本文介绍服务商如何进行 SaaS 类商品的接入测试。

## 操作场景

云市场在卖家中心搭建了商品接入调试页面。服务商上架 SaaS 商品后，可以在**商品接入调试**页面进行 SaaS 类商品的接入测试，支持新购、升级、续费、删除等操作的测试。

## 前提条件

已参照 [SaaS 类商品 SPI 开发指南](/appcenter/market/develop_guide/spi_develop/overview/)完成相关通知接口的开发。

## 操作步骤

1. 登录青云云市场，在页面右边顶部菜单，选择**卖家中心** > **进入卖家中心** ，进入卖家中心控制台。

2. 在左侧导航栏，选择**工具** > **商品接入调试**，进入调试页面。

   ![](/appcenter/market/_images/saas_debug_page.png)

3. 按照下表说明，设置调试信息。

   | 参数           | 说明                                                         |
   | -------------- | ------------------------------------------------------------ |
   | 消息类型       | 需要调试的场景。例如：需要测试购买商品，则选择`新购商品`。   |
   | 商品 ID / 名称 | 选择一个需要调试的商品。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/>需要在商品管理先发布 SaaS 商品，并提交审核，才能在此处选择商品。</div> |
   | 通知 URL       | 无须手动填写。选择商品后，将自动关联。                       |
   | Prod_key       | 无须手动填写。选择商品后，将自动关联。                       |

   

4. 在**参数列表**区域，手动输入参数至，构造请求。

   > **说明**
   >
   > - 不同消息类型，需要输入的参数不一样。参数详细说明请参见[接口文档](/appcenter/market/develop_guide/spi_develop/create/)。
   > - 可选择**表格**或**jason**方式输入请求参数。

5. 参数设置完成后，点击**发送请求**，调用结果会以弹窗的形式展示。

   ![](/appcenter/market/_images/saas_debug_prompt.png)