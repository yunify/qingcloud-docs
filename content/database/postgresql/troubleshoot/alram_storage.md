---
title: "监控显示内存使用率告警"
keyword: 监控显示内存使用率告警,PostgreSQL,关系型数据库,数据库
weight: 10
collapsible: false
draft: false

---

## 现象描述

监控页面显示异常，而后台内存使用正常，free -m avalible 列显示有大量的内存。

## 可能原因

内存计算方式差异导致的监控异常。

* gapd 没启动时，是通过 virsh 获取的 dommemstat 的内存统计，该结果里没有 cache 的数。
* gapd 启动时，就会到 vm 里面执行 free， 计算时会考虑 cache，将已使用内存去掉 cache 的数量。

## 解决措施

执行以下命令启动 gapd。

```bash
/usr/bin/gapd &
```

