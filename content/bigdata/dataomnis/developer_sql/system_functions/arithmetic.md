---
title: "算术运算函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 13
collapsible: false
draft: false
---

所有运算函数返回值都是数字类型。

| 函数                                                        | 功能描述                                                     |
| :---------------------------------------------------------- | :----------------------------------------------------------- |
| + numeric                                                   | 返回 numeric 本身。                                          |
| - numeric                                                   | 返回 0-numeric 的值，即反转符号。                            |
| numeric1 + numeric2                                         | 返回 numeric1 加 numeric2 的值。                             |
| numeric1 - numeric2                                         | 返回 numeric1 减 numeric2 的值。                             |
| numeric1 * numeric2                                         | 返回 numeric1 乘 numeric2 的值。                             |
| numeric1 / numeric2                                         | 返回 numeric1 除以 numeric2 的值。                           |
| POWER(numeric1, numeric2)                                   | 返回 numeric1 的 numeric2 次方。                             |
| ABS(numeric)                                                | 返回 numeric 的绝对值。                                      |
| MOD(numeric1, numeric2)                                     | 返回 numeric1 除以 numeric2 的余数。若 numeric1 是负数，那么余数也为负数。 |
| SQRT(numeric)                                               | 返回 numeric 的平方根。                                      |
| LN(numeric)                                                 | 返回 numeric 的自然对数（以 e 为底）。                       |
| LOG10(numeric)                                              | 返回 numeric 以 10 为底的对数。                              |
| LOG2(numeric)                                               | 返回 numeric 以 2 为底的对数。                               |
| LOG(numeric2) <br>LOG(numeric1, numeric2)                   | <li>若提供一个参数，计算 numeric2 的自然对数（等价于 LN）。 <li>若提供两个参数，计算 numeric2 以 numeric1 为底的对数。<br><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br>numeric2 必须大于 0，numeric1 必须大于 1。</span> |
| EXP(numeric)                                                | 返回 e 的 numeric 次方。                                     |
| CEIL(numeric) CEILING(numeric)                              | 返回 numeric 向上取整的值，该值为大于或等于 numeric 的最小整数。例如：CEIL(22.2) ，返回 23。 |
| FLOOR(numeric)                                              | 返回 numeric 向下取整的值，该值为小于或等于 numeric 的最大整数。例如：FLOOR(22.2) ，返回 22。 |
| SIN(numeric)                                                | 返回 numeric 的正弦值。                                      |
| SINH(numeric)                                               | 返回 numeric 的双曲正弦值（返回值为 DOUBLE 类型）。          |
| COS(numeric)                                                | 返回 numeric 的余弦值。                                      |
| COSH(numeric)                                               | 返回 numeric 的双曲余弦值（返回值为 DOUBLE 类型）。          |
| TAN(numeric)                                                | 返回 numeric 的正切值。                                      |
| TANH(numeric)                                               | 返回 numeric 的双曲正切值（返回值为 DOUBLE 类型）。          |
| COT(numeric)                                                | 返回 numeric 的余切值。                                      |
| ASIN(numeric)                                               | 返回 numeric 的反正弦值。                                    |
| ACOS(numeric)                                               | 返回 numeric 的反余弦值。                                    |
| ATAN(numeric)                                               | 返回 numeric 的反正切值。                                    |
| ATAN2(numeric1, numeric2)                                   | 返回 (numeric1、numeric2) 坐标点的反正切值。                 |
| DEGREES(numeric)                                            | 返回弧度 numeric 所对应的角度。                              |
| RADIANS(numeric)                                            | 返回角度 numeric 所对应的弧度。                              |
| SIGN(numeric)                                               | 返回 numeric 的正负号。负数返回 -1，正数返回 1，否则返回 0。 |
| ROUND(numeric, integer)                                     | 返回 numeric 保留指定小数位（位数由 integer 值决定）的值，超出指定小数位的部分进行四舍五入。例如：ROUND(22.1644, 2)，返回 22.16；ROUND(22.1664, 2)，返回 22.17。 |
| E()                                                         | 返回一个可以代表自然对数的底数 e 的值。                      |
| RAND() <br>RAND(integer)                                    | 返回一个 0.0（包含）~ 1.0（不包含）的伪随机双精度数，可以指定一个整数作为种子值。 |
| RAND_INTEGER(integer2) <br>RAND_INTEGER(integer1, integer2) | 返回一个 0.0（包含）~ 指定上限值 integer2（不包含）的伪随机整数。可以指定一个整数 integer1 作为种子值。 |
| UUID()                                                      | 返回一个随机生成的 Type-4 UUID 字符串。                      |
| BIN(numeric)                                                | 返回 numeric 的二进制表示的字符串。若参数为 NULL，则返回 NULL。<br>例如：BIN(4)，返回 “100”；BIN(12)，返回 “1100”。 |
| HEX(numeric) <br/>HEX(string)                               | 返回 numeric 或 string 的十六进制表示的字符串。若参数为 NULL，则返回 NULL。<br>例如：HEX(20)，返回 “14”；HEX(“hello,world”)，返回 “68656C6C6F2C776F726C64”。 |
| TRUNCATE(numeric1, integer2)                                | 返回 numeric1 保留指定小数位（位数由 integer2 值决定）的值，超出指定小数位的部分进行截断。<li>若 numeric1 或 integer2 为 NULL，则返回 NULL。<li>若 numeric2 为 0 或不填，则结果没有小数部分。<li>若 numeric2 为负数，此时对整数部分取整，小数点左边的 integer2 位变为零。 <br>例如：TRUNCATE(22.1664, 2) ，返回 22.16；TRUNCATE(22.1664)，返回 22.0；TRUNCATE(22.1664, -1)，返回 20.0。 |
| PI()                                                        | 返回 π 的值。                                                |
