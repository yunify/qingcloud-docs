---
title: "连接测试"
description: 本小节主要介绍 Memcached 连接测试。 
keywords: memcached 测试
weight: 90
collapsible: false
draft: false
---




当缓存服务创建完成之后，我们可以进行连接测试。可同时连接到多节点进行查询和写入，Memcached 的客户端会根据 Hash 算法来自动计算数据的存放节点位置。

测试代码(需要预先安装 python 以及 python-memcached ):

```python
import memcache
mc = memcache.Client(['192.168.0.13:11211','192.168.0.14:11211','192.168.0.15:11211'])
mc.set('kobe', 'laker')
mc.get_stats()[0][1].get('curr_items')
mc.get_stats()[1][1].get('curr_items')
```
