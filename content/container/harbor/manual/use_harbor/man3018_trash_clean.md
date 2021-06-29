---
title: "垃圾清理"
draft: false
enableToc: false
weight: 18
---

## 操作场景

当您从 Harbor 删除镜像时，空间不会自动释放。您必须进行垃圾清理，才能从文件系统中彻底释放空间。

## 操作步骤

1. 使用具有 Harbor 系统管理员权限的帐户登录 Harbor 界面。

2. 选择**系统管理**  > **垃圾清理**，点击**立即清理垃圾**。

   <img src="/container/harbor/_images/man3018_garbege_clean.png" alt="garbege_clean" style="zoom:50%;" />

   > **说明**：
   >
   > 为了避免过于频繁地触发垃圾清理操作，**立即清理垃圾**操作受到限制，每分钟只能运行一次。

3. 可选：您也可以点击**编辑**来设置定期自动进行垃圾清理。

