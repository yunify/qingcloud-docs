---
title: "备份回滚"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 青云
---

# 备份回滚

当用户因为误操作或者应用逻辑的 bug 而导致业务数据的丢失时，可以通过 “回滚” 操作恢复到某个备份点的状态。

> ![](_images/apply_snapshot.png)

## 备份导出

**导出为映像**:

> 
> 
> 当备份点是基于主机系统盘创建时，通过这个备份点可以创建新的映像，基于该映像可以创建多台和备份点状态相同的主机。
> 
> > ![](/storage/backup/manual/_images/capture_instance_from_snapshot.png)
> 
> 

