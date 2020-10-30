---
title: "删除备份"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 青云
---


# 删除备份

你可以删除整个备份链，也可以删除某一个备份点。

> 
> 
> 
> 
> 警告
> 
> 需要注意的是，同一条备份链上的备份点之间的数据有依赖关系。当删除备份链上的全量备份点时，会删除整条备份链。 如果删除增量备份点，所有直接或者间接依赖于这个备份点的后序节点都会被删除。
> 
> 
> 
> ![](/storage/backup/manual/_images/delete_snapshots.png)
