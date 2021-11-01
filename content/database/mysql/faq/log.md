---
title: "日志管理"
description: 本小节主要介绍 MySQL Plus 日志管理常见问题。 
keywords: mysql plus 日志管理
weight: 90
collapsible: false
draft: false
---

## 如何获取 MySQL 日志?

(binlog,slow-log,error-log,general-log)

- MySQL Plus 支持通过 wget 下载 `slow-log`和 `error-log`，详细操作请参见[下载日志](../../manual/mgt_log/download_log)。
- `bin-log` 和 `general-log`可通过题工单获取。

## 如何查看 bin-log?

使用 mysqlbinlog 工具查看，使用示例：

```shell
mysqlbinlog –base64-output=decode-rows -v mysql-bin.000001
```
