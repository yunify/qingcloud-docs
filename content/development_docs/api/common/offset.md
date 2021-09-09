---
title: "offset / limit 参数说明"
description: test
date: 2021-05-26T15:08:56+09:00
weight: 20
draft: false
---

参数说明：

1) offset :数据偏移量, 默认为0

2) limit :返回数据长度，默认为20，最大100(10/20/50/100)

以 DescribeInstances 获取主机这个 api 为例：

当 limit 为20，offset 为0时，查询显示出所有的三台主机：

```
"instance_name": "", 
"instance_name": "rtr-8vwgl9kv", 
"instance_name": "tools",
"total_count": 3
```

当 limit 为20，offset 为1时，查询显示出第2，第3台主机：

```
"instance_name": "rtr-8vwgl9kv", 
"instance_name": "tools",
"total_count": 3,
```

当 limit 为20，offset 为2时，查询显示出第3台主机：

```
"instance_name": "tools",
"total_count": 3,
```

当 limit 为20，offset > 2时，没有主机显示：

```
{'action': 'DescribeInstancesResponse', 'instance_set': [], 'total_count': 3, 'ret_code': 0}
```

offset 表示从第 n+1个查询结果开始显示。比如查询101-199号主机，此时可以设置 limit 为100，offset 为100.