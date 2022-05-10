---
title: "节点管理 FAQ"
description: QKE 集群常见问题
draft: false
weight: 10
keyword: 青云, QingCloud, QKE, 常见问题 
---

## 如何增删主节点?

托管版 QKE 集群不支持增删主节点。

## 删除工作节点后应用异常

删除工作节点时，QKE 会先执行命令 `drain` 命令，确保工作负载能成功迁移到其他节点，然后再执行删除节点的操作。

部分情况下可能 drain 失败（导致工作负载未成功迁移），这时会重试 2 次，如果一直失败，会强制删除节点。

