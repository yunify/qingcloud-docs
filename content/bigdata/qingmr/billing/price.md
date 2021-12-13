---
title: "计费说明"
description: 本小节主要介绍 QingCloud QingMR  计费说明。 
keyword: QingMR  计费说明, 
weight: 10
collapsible: false
draft: false
---

## 计费项

|<span style="display:inline-block;width:120px">计费项</span> |<span style="display:inline-block;width:260px">计费说明</span>|
|:----|:----|
|   QingMR 服务     |  当前免费使用。  |  
|   节点主机实例     | 根据您选择的节点主机实例规格和数量进行收费。  |
|   节点容量     | 根据您选择的数据盘类型和节点硬盘资源大小进行收费。  |  
|   VPC 资源     |  QingMR 集群依赖 VPC 网络资源，VPC 产生的费用将会另外单独计算。价格请参考 [VPC 网络计费](/network/vpc/billing/price/)。 |  
|   公网 IP（可选）    |  您可以根据实际情况为 QingMR 集群绑定公网 IP，公网 IP 产生的费用将会另外单独计算。价格请参考[公网 IP 计费](/network/eip/billing/price/)。   | 
|   监控告警（可选）    |  您可以根据实际情况为 QingMR 集群绑定指标告警策略：<li>若绑定的策略监控周期为 5 分钟，该功能免费使用。<li>若绑定的策略监控周期为 1 分钟，该功能会产生相应的费用，该费用另外单独计算。   | 

## 计费模式

QingMR 支持包年/包月和按需计费两种计费模式。

|<span style="display:inline-block;width:120px">计费模式</span> |<span style="display:inline-block;width:260px">说明</span>|<span style="display:inline-block;width:260px">适用场景</span>|
|:----|:----|:----|
|   包年/包月    |  先付费后使用，按照购买时长（月或年）一次性支付所选时长的费用。在购买时长期间内，您可以一直使用该资源。  |  适用于长期稳定需求，帮助您更大程度的节省支出。   |
|   按需计费     |  先使用后付费，每小时计算一次费用，您只需为使用的资源付费。费用按秒计算，且不设最低消费指标，您可以随时开启和关闭资源。<li>集群开启时，收取节点主机实例和节点存储空间费用。<li>集群关闭时，仅收取节点存储空间费用。|  适用于有较大波动且无法准确预测资源需求量的业务场景，或临时性和突发性的资源需求场景。如果是短期测试使用，推荐使用按需计费模式。  |

## 产品价格

根据选择的计费模式，使用的主机实例和节点硬盘资源规模，总计费用会有所不同，可以通过[价格计算器](https://www.qingcloud.com/pricing#/QingMR) 获取价格详情。