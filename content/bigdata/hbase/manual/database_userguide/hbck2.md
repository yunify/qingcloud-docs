---
title: "修复工具 HBCK 2"
description: 本小节主要介绍 HBase 2.0 修复工具 hbck2 使用指南。 
keywords: HBase 使用简介,
weight: 30
collapsible: false
draft: false
---




HBase 2.x 版本使用 HBCK2。HBase 1.x 版本仍然使用 HBCK。

更多 HBCK2 使用和功能介绍，可参考 [HBCK2](https://github.com/apache/hbase-operator-tools/tree/master/hbase-hbck2)

```shell
  cd /opt/hbase

  bin/hbase org.apache.hbase.HBCK2
```
或
```shell
  cd /opt/hbase

  bin/hbase hbck -j lib/hbase-hbck2-1.0.0.jar
```
