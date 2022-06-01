---
title: "比较函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 11
collapsible: false
draft: false
---

所有数据类型都可用关系运算符进行比较，比较函数返回一个 BOOLEAN 类型的值。

## 注意事项

- 被比较的两个数据类型必须是相同的数据类型或者是可以进行转换的类型。
- double、real 和 float 值存在一定的精度差，因此在 Flink SQL 中不建议直接使用`=`对两个 double 或两个 float 类型的数据进行比较。


## 函数列表

| 函数                                                         | 功能描述                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| value1 = value2                                              | 若 value1 等于 value2，返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。<br><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><li>`=` 和 `IS NOT DISTINCT FROM` 的主要区别是对 NULL 值的处理方式不同。<li>建议使用 `IS NULL` 而不是 `= NULL` 来与 NULL 进行比较。</span> |
| value1 <> value2                                             | 若 value1 不等于 value2，返回 TRUE，否则返回 FALSE。<br>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 > value2                                              | 若 value1 大于 value2，返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 >= value2                                             | 若 value1 大于或等于 value2，返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 < value2                                              | 若 value1 小于 value2，返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 <= value2                                             | 若 value1 小于或者等于 value2，则返回 TRUE，否则返回 FALSE。<br/>若 value1 或 value2 为 NULL，则返回 UNKNOWN。 |
| value1 IS NULL                                               | 若 value1 为 NULL，返回 TRUE，否则返回 FALSE。               |
| value1 IS NOT NULL                                           | 若 value1 不为 NULL，返回 TRUE，否则返回 FALSE。             |
| value1 IS DISTINCT FROM value2                               | 若 value1 与 value2 不相等，返回 TRUE，否则返回 FALSE。NULL 视为相等。<br>例如：<li>1 IS DISTINCT FROM NULL，返回 TRUE。<li>NULL IS DISTINCT FROM NULL，返回 FALSE。 |
| value1 IS NOT DISTINCT FROM value2                           | 若 value1 与 value2 相等，返回 TRUE，否则返回 FALSE。NULL 视为相等。<br/>例如：<li>1 IS NOT DISTINCT FROM NULL，返回 FALSE。<li> NULL IS NOT DISTINCT FROM NULL，返回 TRUE。 |
| value1 BETWEEN [ASYMMETRIC \| SYMMETRIC] value2 AND value3   | 若 value1 大于或等于 value2 且小于或等于 value3，返回 TRUE，否则返回 FALSE。当 value2 或 value3 为 NULL 时，返回 FALSE 或 UNKNOWN。<br>[ ]内为可选参数，默认为 `ASYMMETRIC`。<li>**ASYMMETRIC**：表示 value2 和 value3 位置相关。<li>**SYMMETRIC**：表示 value2 和 value3 位置不相关。<br>例如：<li>12 BETWEEN 15 AND 12 返回 FALSE。<li>12 BETWEEN SYMMETRIC 15 AND 12 返回 TRUE。 <li>12 BETWEEN 10 AND NULL 返回 UNKNOWN。<li>12 BETWEEN NULL AND 10 返回 FALSE。<li>12 BETWEEN SYMMETRIC NULL AND 12 返回 UNKNOWN。 |
| value1 NOT BETWEEN [ ASYMMETRIC \| SYMMETRIC ] value2 AND value3 | 若 value1 小于 value2 或大于 value3，返回 TRUE，否则返回 FALSE。当 value2 或 value3 为 NULL 时，返回 TRUE 或 UNKNOWN。<br/>[ ]内为可选参数，默认为 `ASYMMETRIC`。<li>**ASYMMETRIC**：表示 value2 和 value3 位置相关。<li>**SYMMETRIC**：表示 value2 和 value3 位置不相关。<br>例如：<li>12 NOT BETWEEN 15 AND 12 返回 TRUE。<li>12 NOT BETWEEN SYMMETRIC 15 AND 12 返回 FALSE。 <li>12 NOT BETWEEN NULL AND 15 返回 UNKNOWN。<li>12 NOT BETWEEN 15 AND NULL 返回 TRUE。<li>12 NOT BETWEEN SYMMETRIC 12 AND NULL 返回 UNKNOWN。 |
| string1 LIKE string2 [ ESCAPE char ]                         | 若 value1 与模式 value2 匹配，返回 TRUE。 <br>如果 string1 或 string2 为 NULL，则返回 UNKNOWN 。<br/>必要时可以定义转义字符。 |
| string1 NOT LIKE string2 [ ESCAPE char ]                     | 若 value1 与模式 value2 不匹配，返回TRUE。 <br/>如果 string1 或 string2 为 NULL，则返回 UNKNOWN 。<br/>必要时可以定义转义字符。 |
| string1 SIMILAR TO string2 [ ESCAPE char ]                   | 若 value1 与正则表达式 value2 匹配，返回TRUE。<br/>如果 string1 或 string2 为 NULL，则返回 UNKNOWN 。 <br/>必要时可以定义转义字符。 |
| string1 NOT SIMILAR TO string2 [ ESCAPE char ]               | 若 value1 与正则表达式 value2 不匹配，返回TRUE。<br/>如果 string1 或 string2 为 NULL，则返回 UNKNOWN 。<br/>必要时可以定义转义字符。 |
| value1 IN (value2 [, value3]*)                               | 若 value1 在列表中，返回 TRUE。<li>如果列表中包含 NULL，且可以找到 value1，返回 TRUE，否则返回 UNKNOWN。<li>如果 value1 为 NULL，则返回 UNKNOWN。 |
| value1 NOT IN (value2 [, value3]* )                          | 若 value1 不在列表中，返回 TRUE。<li>如果列表中包含 NULL，且可以找到 value1，返回 FALSE，否则返回 UNKNOWN。<li>如果 value1 为 NULL，则返回 UNKNOWN。 |
| EXISTS (sub-query)                                           | 若 sub-query 返回至少一行，则返回 TRUE，否则返回 FALSE。<br>**该查询可能占用较多内存，请谨慎使用。** |
| value IN (sub-query)                                         | 若 sub-query 返回的结果中，有一条等于 value 的值，返回 TRUE，否则返回 FALSE。<br/>**该查询可能占用较多内存，请谨慎使用。** |
| value NOT IN (sub-query)                                     | 若 sub-query 返回的结果中，没有等于 value 的值，返回 TRUE，否则返回 FALSE。<br/>**该查询可能对内存压力较大，请谨慎使用。** |
