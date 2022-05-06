---
title: "关系运算函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 11
collapsible: false
draft: false
---

所有数据类型都可用关系运算符进行比较，并返回一个 BOOLEAN 类型的值。

被比较的两个数据类型必须是相同的数据类型或者是可以进行隐式转换的类型。

Flink SQL 提供的关系运算函数如下。

| **函数**                                                     | 功能描述                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| value1 = value2                                              | 若 value1 等于 value2，返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 <> value2                                             | 若 value1 不等于 value2，返回 TRUE，否则返回 FALSE。<br>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 > value2                                              | 若 value1 大于 value2，返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 >= value2                                             | 若 value1 大于或等于 value2，返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 < value2                                              | 若 value1 小于 value2，返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 <= value2                                             | 若 value1 小于或者等于 value2，则返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 IS NULL                                               | 若 value1 为 NULL，返回 TRUE，否则返回 FALSE。               |
| value1 IS NOT NULL                                           | 若 value1 不为 NULL，返回 TRUE，否则返回 FALSE。             |
| value1 IS DISTINCT FROM value2                               | 若 value1 与 value2 不相等，返回 TRUE，否则返回 FALSE。NULL 视为相等。<br>例如：1 IS DISTINCT FROM NULL，返回 TRUE； NULL IS DISTINCT FROM NULL，返回 FALSE。 |
| value1 IS NOT DISTINCT FROM value2                           | 若 value1 与 value2 相等，返回 TRUE，否则返回 FALSE。NULL 视为相等。<br/>例如：1 IS NOT DISTINCT FROM NULL，返回 FALSE； NULL IS NOT DISTINCT FROM NULL，返回 TRUE。 |
| value1 BETWEEN [ASYMMETRIC \| SYMMETRIC] value2 AND value3   | 若 value1 大于或等于 value2 且小于或等于 value3，返回 TRUE，否则返回 FALSE。<br>[ ]内为可选参数，默认为 ASYMMETRIC。<li>ASYMMETRIC：表示 value2 和 value3 位置相关。例如：value1 BETWEEN ASYMMETRIC value2 AND value3，等价于 value1 BETWEEN value2 AND value3。<li>SYMMETRIC：表示 value2 和 value3 位置不相关。例如：value1 BETWEEN SYMMETRIC value2 AND value3 等价于 value1 BETWEEN value2 AND value3 或 value1 BETWEEN value3 AND value2。 |
| value1 NOT BETWEEN [ ASYMMETRIC \| SYMMETRIC ] value2 AND value3 | 若 value1 小于 value2 或大于 value3，返回 TRUE，否则返回 FALSE。<br/>[ ]内为可选参数，默认为 ASYMMETRIC。<li>ASYMMETRIC：表示 value2 和 value3 位置相关。例如：value1 NOT BETWEEN ASYMMETRIC value2 AND value3，等价于 value1 NOT BETWEEN value2 AND value3。<li>SYMMETRIC：表示 value2 和 value3 位置不相关。例如：value1 NOT BETWEEN SYMMETRIC value2 AND value3 等价于 value1 NOT BETWEEN value2 AND value3 或 value1 NOT BETWEEN value3 AND value2。 |
| string1 LIKE string2 [ ESCAPE char ]                         | 若 value1 与模式 value2 匹配，返回 TRUE。 如果 string1 或 string2 为 NULL，则返回 UNKNOWN 。必要时可以定义转义字符。 |
| string1 NOT LIKE string2 [ ESCAPE char ]                     | 若 value1 与模式 value2 不匹配，返回TRUE。 如果 string1 或 string2 为 NULL，则返回 UNKNOWN 。必要时可以定义转义字符。 |
| string1 SIMILAR TO string2 [ ESCAPE char ]                   | 若 value1 与正则表达式 value2 匹配，返回TRUE。如果 string1 或 string2 为 NULL，则返回 UNKNOWN 。 必要时可以定义转义字符。 |
| string1 NOT SIMILAR TO string2 [ ESCAPE char ]               | 若 value1 与正则表达式 value2 不匹配，返回TRUE。如果 string1 或 string2 为 NULL，则返回 UNKNOWN 。必要时可以定义转义字符。 |
| value1 IN (value2 [, value3]*)                               | 若 value1 在列表中，返回 TRUE。<li>如果列表中包含 NULL，且可以找到 value1，则返回 TRUE，否则返回 UNKNOWN。<li>如果 value1 为 NULL，则返回 UNKNOWN。 |
| value1 NOT IN (value2 [, value3]* )                          | 若 value1 不在列表中，返回 TRUE。<li>如果列表中包含 NULL，且可以找到 value1，则返回 FALSE，否则返回 UNKNOWN。<li>如果 value1 为 NULL，则返回 UNKNOWN。 |
| EXISTS (某个子查询)                                          | 若子查询返回至少一行，则返回 TRUE，否则返回 FALSE。**该查询对内存压力较大，请谨慎使用。** |
| value IN (某个子查询)                                        | 若子查询返回的多行结果中，有一条等于 value 的值，则返回 TRUE，否则返回 FALSE。**该查询对内存压力较大，请谨慎使用。** |
| value NOT IN (某个子查询)                                    | 若子查询返回的多个结果中，没有一条等于 value，则返回 TRUE，否则返回 FALSE。**该查询对内存压力较大，请谨慎使用。** |

