---
title: "条件函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 40
collapsible: false
draft: false
---



| 函数                   | 描述                                                         |
| :--------------------- | :----------------------------------------------------------- |
| boolean1 OR boolean2   | 若 boolean1 或 boolean2 任意一个为 TRUE，返回 TRUE。         |
| boolean1 AND boolean2  | 若 boolean1 和 boolean2 均为 TRUE，返回 TRUE。               |
| NOT boolean            | <li>若 boolean 为 TRUE，返回 FALSE<li>若 boolean 为 FALSE，返回 TRUE<li>若 boolean 为 UNKNOWN，返回 UNKNOWN。 |
| boolean IS FALSE       | <li>若 boolean 为 FALSE 则返回 TRUE<li>若 boolean 为 TRUE 或 UNKNOWN 则返回 FALSE。 |
| boolean IS NOT FALSE   | <li>若 boolean 为 TRUE 或 UNKNOWN，返回 TRUE<li>若 boolean 为 FALSE，返回 FALSE。 |
| boolean IS TRUE        | <li>若 boolean 为 TRUE 则返回 TRUE<li>若 boolean 为 FALSE 或 UNKNOWN，返回 FALSE。 |
| boolean IS NOT TRUE    | <li>若 boolean 为 FALSE 或 UNKNOWN，返回 TRUE<li>若 boolean 为 TRUE，返回 FALSE。 |
| boolean IS UNKNOWN     | <li>若 boolean 为 UNKNOWN，返回 TRUE<li>若 boolean 为 TRUE 或 FALSE，返回 FALSE。 |
| boolean IS NOT UNKNOWN | <li>若 boolean 为 TRUE 或 FALSE，返回 TRUE<li>若 boolean 为 UNKNOWN，返回 FALSE。 |

