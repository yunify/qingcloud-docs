---
title: "逻辑函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 12
collapsible: false
draft: false
---

逻辑函数用来执行逻辑运算，返回一个 BOOLEAN 类型的值。

逻辑状态有 TRUE、FALSE、UNKNOWN 三种（NULL 值的逻辑状态是 UNKNOWN），因此 NOT TRUE 不一定是 FALSE，还可能是 UNKNOWN。

常用的逻辑操作符有 AND、OR 和 NOT，优先级顺序为：NOT>AND>OR。

## 注意事项

逻辑函数只允许 BOOLEAN 类型参与运算，不支持类型转换。

## 函数列表

| 函数                   | 功能描述                                                     |
| :--------------------- | :----------------------------------------------------------- |
| boolean1 OR boolean2   | 若 boolean1 或 boolean2 任意一个为 TRUE，返回 TRUE。且支持三值逻辑。 |
| boolean1 AND boolean2  | 若 boolean1 和 boolean2 均为 TRUE，返回 TRUE。且支持三值逻辑。 |
| NOT boolean            | <li>若 boolean 为 TRUE，返回 FALSE<li>若 boolean 为 FALSE，返回 TRUE<li>若 boolean 为 UNKNOWN，返回 UNKNOWN。 |
| boolean IS FALSE       | <li>若 boolean 为 FALSE 则返回 TRUE<li>若 boolean 为 TRUE 或 UNKNOWN 则返回 FALSE。 |
| boolean IS NOT FALSE   | <li>若 boolean 为 TRUE 或 UNKNOWN，返回 TRUE<li>若 boolean 为 FALSE，返回 FALSE。 |
| boolean IS TRUE        | <li>若 boolean 为 TRUE 则返回 TRUE<li>若 boolean 为 FALSE 或 UNKNOWN，返回 FALSE。 |
| boolean IS NOT TRUE    | <li>若 boolean 为 FALSE 或 UNKNOWN，返回 TRUE<li>若 boolean 为 TRUE，返回 FALSE。 |
| boolean IS UNKNOWN     | <li>若 boolean 为 UNKNOWN，返回 TRUE<li>若 boolean 为 TRUE 或 FALSE，返回 FALSE。 |
| boolean IS NOT UNKNOWN | <li>若 boolean 为 TRUE 或 FALSE，返回 TRUE<li>若 boolean 为 UNKNOWN，返回 FALSE。 |
