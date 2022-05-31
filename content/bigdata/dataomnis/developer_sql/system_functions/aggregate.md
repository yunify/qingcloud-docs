---
title: "聚合函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 60
collapsible: false
draft: false
---

聚合函数是指将一组数据计算为一个结果。

| 函数                                                       | 功能描述                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| COUNT([ ALL ] expression \| DISTINCT expression1 [, expression2]*) | 返回 expression 表达式不为 NULL 的行数。<br>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计。 |
| COUNT(*) <br>COUNT(1)                                        | 返回输入的总行数，含 NULL 值。                               |
| AVG([ ALL \| DISTINCT ] expression)                          | 返回 expression 表达式筛选后，所有输入的算术平均值。<br/>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计求平均。 |
| SUM([ ALL \| DISTINCT ] expression)                          | 返回 expression 表达式筛选后，所有输入和。<br/>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计求和。 |
| MAX([ ALL \| DISTINCT ] expression)                          | 返回 expression 表达式筛选后，所有输入的最大值（不可用于 TIMESTAMP 类型）。<br/>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计求最大值。 |
| MIN([ ALL \| DISTINCT ] expression)                          | 返回 expression 表达式筛选后，所有输入的最小值（不可用于 TIMESTAMP 类型）。<br/>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计求最小值。 |
| STDDEV_POP([ ALL \| DISTINCT ] expression)                   | 返回 expression 表达式筛选后，所有输入的总体标准差。<br/>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计求总体标准差。 |
| STDDEV_SAMP([ ALL \| DISTINCT ] expression)                  | 返回 expression 表达式筛选后，所有输入的样本标准差。<br/>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计求样本标准差。 |
| VAR_POP([ ALL \| DISTINCT ] expression)                      | 返回 expression 表达式筛选后，所有输入的总体方差。<br/>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计求总体方差。 |
| VAR_SAMP([ ALL \| DISTINCT ] expression)                     | 返回 expression 表达式筛选后，所有输入的样本方差。<br/>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计求样本方差。 |
| VARIANCE([ ALL \| DISTINCT ] expression)                     | 同 VAR_SAMP([ ALL \|DISTINCT ] expression)。                 |
| COLLECT([ ALL \| DISTINCT ] expression)                      | 返回 expression 表达式筛选后，所有非 NULL 的 MULTISET 集合（允许重复值）。<br>如果所有值都是 NULL，则返回一个空集。<br>如果使用 DISTINCT，则会先对数据进行去重，然后再进行统计。 |
| RANK()                                                       | 返回某个数据在一组数据中的排名，前后调用的结果可能不连续。<br>例如有五个数据，其中两个并列第二，那么 RANK() 的结果是 1、2、2、4、5。 |
| DENSE_RANK()                                                 | 返回某个数据在一组数据中的排名，前后调用的结果是连续的。<br/>例如有五个数据，其中两个并列第二，那么 DENSE_RANK() 的结果是 1、2、2、3、4。 |
| ROW_NUMBER()                                                 | 为一组数据的每行分配一个递增且连续的值，从1开始，不会重复。<br/>例如有五个数据，其中两个并列第二，那么 ROW_NUMBER() 的结果是 1、2、3、4、5。 |
| LEAD(expression [, offset] [, default] )                     | 返回当前行之前 offset 行的数据。<br>offset 默认为 1，即访问上一行的数据。<br/>default 表示无数据时的默认值，如果未提供，默认为 NULL。 |
| LAG(expression [, offset] [, default])                       | 返回当前行之后 offset 行的数据。<br/>offset 默认为 1，即访问下一行的数据。<br/>default 表示无数据时的默认值，如果未提供，默认为 NULL。 |
| FIRST_VALUE(expression)                                      | 返回一组数据中的第一个数据。                                 |
| LAST_VALUE(expression)                                       | 返回一组数据中的最后一个数据。                               |
| LISTAGG(expression [, separator])                            | 将一组数据使用给定的分隔符进行连接，最终返回一个连接后的字符串。<br/>分隔符默认值为 ','。 |
