---
title: "计费说明"
description: Redis Cluster 计费说明
draft: false
keywords: Redis Cluster, QingCloud, 数据库，计费
---

## 费用说明

- Redis Cluster 按照您创建 Redis 实例时所选择的实例规格（如实例类型、内存规格等）进行计费，相应实例的收费按照规格乘以单位规格的费用。

- Redis Cluster 实例创建页面的**费用预览**仅包括实例基础资源费用。创建实例时所依赖的公网 IP、 VPC 网络等资源的费用将会另外单独计算。

- Redis Cluster 支持按小时、按月、按年三种方式计费。按月、按年付费相对于按小时付费可享有更优惠价格，且使用时间越长越便宜，若您有中长期使用需求，建议您选择按月或按年计费。

## 价格详情

Redis Cluster 实例的基础资源费用可通过 [价格计算器](https://www.qingcloud.com/pricing#/RedisCluster) 获取价格详情。

依赖的其他资源费用以产品实际公布的价格为准。

## 费用充值

青云账号支持多种充值途径：支付宝、网上银行、微信支付、线下银行转账。 可在[充值页面](https://console.qingcloud.com/finance/wallet/)选择。

如果需要发票，请到[发票管理](https://console.qingcloud.com/finance/invoices/)提出申请。

您随时可以在 QingCloud 管理控制台中通过[消费明细](https://console.qingcloud.com/finance/statistic/)查询消费情况 。

## 余额不足提醒

青云系统会定期检查用户余额和当时名下弹性计费资源的消费预估， 如果检查发现余额即将不足，会提前给用户发送通知。

通知策略是：分别在提前 15，7，3，2，1 天时发送提醒。 默认是发送给账号的注册手机号及通知邮箱，如果用户希望自定义接受者列表，可在账户设置的[通知列表](https://console.qingcloud.com/account/profile/notify_map/)中修改**财务通知**对应的通知列表。

## 资源欠费

如果用户余额已不足，资源会被自动暂停，并保留5天时间。 在此期间内用户可随时充值来恢复资源。 如果欠费逾期仍未充值，则资源会被删除，删除的资源会在[回收站](https://console.qingcloud.com/pek3/recyclebin/)保留2小时，之后便会被彻底删除，无法再恢复。

所以请您留意系统通知，并及时予以充值，以免造成损失。感谢您的理解和配合。

## 变配费用

关于变更配置的流程、影响及操作方法，请参见[变更节点配置](/database/redis_cluster/manual/cfginstance/changeconfig/)。

实例变更配置后，将按生成收费订单时的实例配置计费。

