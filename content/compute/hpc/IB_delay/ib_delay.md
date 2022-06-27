---
title: "IB 网络时延测试"
linkTitle: "IB 网络时延测试"
description: IB 网络时延测试
keyword: IB 网络时延测试
draft: false
weight: 10
---

## 两个 EHPC 节点（VM）之间的 IB 时延

```
# 1个节点作为server
[root@node002 ~]# taskset -c 3 ib_write_lat -d mlx5_0 --size=2 --duration=30 --connection=RC --CPU-freq
 
# 1个节点作为clinet
[root@node001 ~]# taskset -c 3 ib_write_lat --size=2 --duration=30 --connection=RC --CPU-freq --output=latency  10.103.131.116
1.846569
 
# 测试结果(单位 us)
1.846569
```

## 两个 mds （物理机）之间的 IB 时延

```
# mds01节点作为server
[root@mds01 ~]# taskset -c 3 ib_write_lat -d mlx5_0 --size=2 --duration=30 --connection=RC --CPU-freq
 
# mds02节点作为client
[root@mds02 ~]# taskset -c 3 ib_write_lat --size=2 --duration=30 --connection=RC --CPU-freq --output=latency  10.103.100.93
2.404708
 
# 测试结果(单位 us)
2.404708
```

