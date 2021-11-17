---
title: "产品定价"
description: 介绍 TiDB 的产品价格。
keywords: 青云, TiDB, 计费,收费,价格
weight: 5
draft: false
---

TiDB 实例有三种类型，不同实例类型的价格可参考下表，具体价格以控制台扣费为准。

## 实例规格费用

<table>
  <tr><th>实例类型</th><th style="width: 350px;">节点 / 实例</th><th>包年包月（元/月）</th><th>按需计费（元/小时）</th></tr>
    <tr style="background:#fff;"><td>测试型</td><td>TiDB & PD & TiKV & Monitor</td><td>3705.2</td><td>7.68</td></tr>
  <tr style="background:#fff;"><td rowspan='4'>基础型</td><td>TiDB & PD</td><td>3381.5</td><td>7.01</td></tr>
  <tr style="background:#fff;"><td>TiKV + 存储</td><td>3788</td><td>7.85</td></tr>
  <tr style="background:#fff;"><td>Monitor</td><td>3381.5</td><td>7.01</td></tr>
   <tr style="background:#fff;"><td>实例：3 TiDB&PD + 3 TiKV + 1 Monitor</td><td>24890</td><td>51.59</td></tr>
  <tr style="background:#fff;"><td rowspan='5'>分许增强型</td><td>TiDB & PD</td><td>3381.5</td><td>7.01</td></tr>
<tr style="background:#fff;"><td>TiKV + 存储</td><td>3788</td><td>7.85</td></tr>
  <tr style="background:#fff;"><td>Monitor</td><td>3381.5</td><td>7.01</td></tr>
  <tr style="background:#fff;"><td>TiFlash + 存储</td><td>5444</td><td>11.29</td></tr>
   <tr style="background:#fff;"><td>实例：3 TiDB&PD + 3 TiKV + 1 Monitor + 1 TiFlash</td><td>30334</td><td>62.88</td></tr> 
</table>

## 备份空间费用

除 TiDB 实例配置费用外，若用户需要进行数据备份，备份空间将额外收费费用。

分布式数据库 TiDB 使用 QingStor 对象存储作为备份空间，价格请参见[对象存储计费说明](/storage/object-storage/billing/price/)。

## 费用计算示例

假设：用户 A 购买基础型实例，实例配置为：3个TiDB&PD（固定配置)，1个Monitor（固定配置），3个TiKV，未进行数据备份。

- 包年包月：每月费用 = (3 * 3381.5 + 1 * 3381.5 + 3 * 3788）= 24890 元

- 按需计费：每小时费用 = (3 * 7.01 + 1 * 7.01 + 3 * 7.85) = 51.59 元

