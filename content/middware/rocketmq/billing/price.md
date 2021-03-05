---
title: "计费说明"
description:
draft: false
---

## 费用说明

RocketMQ创建页面上的**费用预览**计费仅包括集群基础资源（CPU、RAM、磁盘）费用，集群创建完成之后绑定的公网IP资源、VPC网络资源等费用将会另外计算。使用RocketMQ时用户扩容后的资源费用也将另外计算。RocketMQ基础资源费用的计算周期以RocketMQ集群创建时间为起点，以RocketMQ集群销毁时间为终点。

除了支持弹性计费，RocketMQ也支持包年、包月等[合约方式](https://docsv3.qingcloud.com/billing/intro/billing_zhinan/)。

## 价格影响因素

### 磁盘类型

不同的磁盘类型对应着不同的性能，会有相应的价格，详情请参考[磁盘价格文档](https://docsv3.qingcloud.com/storage/disk/billing/price/)。

| 磁盘类型  |                             指标                             |                  备注                  |
| :-------: | :----------------------------------------------------------: | :------------------------------------: |
|  基础型   |  IOPS范围参考：500 – 2500；IO吞吐范围参考：36MB/s - 100MB/s  |  节点类型为基础型时默认采用此类型磁盘  |
| SSD企业级 | IOPS范围参考：2000 – 30000；IO吞吐范围参考：128MB/s - 320MB/s | 节点类型为企业型e2时默认采用此类型磁盘 |


## 价格计算

可以通过 [价格计算器](https://www.qingcloud.com/pricing#/Kafka) 获取价格详情。
