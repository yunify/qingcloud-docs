---
title: "计费说明"
description: 本小节主要介绍 Redis Standalone  计费说明。 
keyword: 计费说明,数据库,键值数据库,Redis Standalone
weight: 10
collapsible: false
draft: false
---

## 计费项

Redis Standalone 仅对集群所占用的资源进行收费，Redis Standalone 集群不额外收取服务费。详细的计费项如下：

|<span style="display:inline-block;width:120px">计费项</span> |<span style="display:inline-block;width:410px">计费说明</span>|
|:----|:----|
|   云服务器资源     | 根据您选择的节点云服务器规格和数量进行收费，费用包含在 Redis Standalone 资源费用中。  |
|   磁盘资源     | 根据您选择的磁盘类型和规格进行收费，费用包含在 Redis Standalone 资源费用中。  |  
|   VPC 网络资源        |  Redis Standalone 集群依赖 VPC 网络资源，VPC 产生的费用将单独计算。价格请参考 [VPC 网络计费](/network/vpc/billing/price/)。 |  
|   备份（可选）  |  您可以根据实际情况，备份 Redis Standalone 集群。<br>Redis Standalone 集群备份为**快照备份**，所有数据存储在硬盘。集群备份使用硬盘产生相应的费用按小时单独计算，与备份时间和备份数据量相关。价格请参考 [硬盘计费](/storage/disk/billing/price/)。  |
|   监控告警（可选）  |  您可以根据实际情况为 Redis Standalone 集群绑定指标告警策略：<li>若绑定的策略**监控周期**为 `5 分钟`，该功能免费使用。<li>若绑定的策略**监控周期**为 `1 分钟`，该功能会产生相应的费用，该费用单独计算。   |

## 计费模式

Redis Standalone 支持**包年**、**包月**和**按需计费**计费模式。

|<span style="display:inline-block;width:100px">计费模式</span> |<span style="display:inline-block;width:300px">说明</span>|<span style="display:inline-block;width:230px">适用场景</span>|
|:----|:----|:----|
|   **包年**或**包月**    |  **计费方式**为`月`或`年`。您需要按照购买时长（月或年）一次性支付所选时长的费用。在购买时长期间内，您可以一直使用该资源。  |  适用于长期稳定需求，帮助您更大程度的节省支出。   |
|   **按需计费**     |  **计费方式**为`小时`。按秒计费，按小时扣费，且不设最低消费指标，您可以随时启用和删除资源。若集群实际使用时长不足 1 小时，将按实际时长进行扣费。<li>集群开启时，收取节点主机实例和节点存储空间费用。<li>集群关闭时，仅收取节点存储空间费用。|  适用于有较大波动且无法准确预测资源需求量的业务场景，或临时性和突发性的资源需求场景。如果是短期测试使用，推荐使用按需计费模式。  |

## 产品价格

根据选择的计费模式，使用的云服务器和磁盘资源规格，总计费用会有所不同，可以通过[价格计算器](https://www.qingcloud.com/pricing#/redis)获取价格详情。
