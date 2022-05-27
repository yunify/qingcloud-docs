---
title: "费用变更（新）"
collapsible: false
draft: true
weight: 50
---

## 变更计费模式

- 包年包月转按需：包年包月模式设置为自动续费，若当前费用不足以支付下月费用，包年包月自动转为按需计费。转按需计费模式后，自动续费关闭。
- 按需转包年包月：？

| 原计费模式 | 目标计费模式 | 操作说明                                                     |
| ---------- | ------------ | ------------------------------------------------------------ |
| 按需计费   | 包年包月     | 执行[修改计费模式](http://139.198.1.69:8080/database/mysql/manual/cluster_lifecycle/switch_billing_mode)操作，变更立即生效，您需一次性支付合约的费用。 |
| 包年包月   | 按需计费     | <li>执行[修改计费模式](http://139.198.1.69:8080/database/mysql/manual/cluster_lifecycle/switch_billing_mode)操作，服务到期后，集群将按照按需计费模式进行收费。<li>执行[退订](http://139.198.1.69:8080/database/mysql/manual/cluster_lifecycle/unsubscribe)操作，操作成功后，系统将费用退订至您的账户中，集群立即按照按需计费模式进行收费。??? |



