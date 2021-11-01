---
title: "产品规格"
descriptipn: 青云NAT网关产品规格、最大连接数
draft: false
weight: 7
keyword: QingCloud, 青云, NAT网关, NAT, SNAT, DNAT
---

不同规格的 NAT 网关会影响 SNAT 最大连接数和 SNAT 每秒新建连接数，但不会影响 DNAT 性能。您可以根据业务需求灵活选择规格。

| 规格   | SNAT 最大连接数 | SNAT 每秒新建连接数 | 流量转发能力 |
| ------ | --------------- | ------------------- | ------------ |
| 小型   | 1万             | 1千                 | 1Mpps        |
| 中型   | 5万             | 5千                 | 2Mpps        |
| 大型   | 20万            | 1万                 | 4Mpps        |


详细性能测试数据可参考 NAT 网关[最大连接数测试](../../perfwp/max_connect/)。

