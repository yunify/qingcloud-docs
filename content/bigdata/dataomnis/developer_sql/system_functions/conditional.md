---
title: "条件函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 40
collapsible: false
draft: false
---

## 函数列表

| 函数                                                         | 功能描述                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| CASE value <br>WHEN value1 [, value11 ]* THEN result1 <br/>[ WHEN valueN [, valueN1 ]* THEN resultN ]* <br/>[ ELSE resultZ ] <br/>END | <li>当 value 包含在 value1 ~ value11 中时，返回 result1。<li>当 value 包含在 valueN ~ valueN1 中时，返回 resultN。<li>否则返回 resultZ。若没有 else 语句，则返回 NULL。<br>示例语句：<br>insert into temp SELECT  CASE units WHEN 5 THEN 1 ELSE 0 END FROM Orders;<br>当 units 等于 5 时返回 1，否则返回 0。 |
| CASE <br>WHEN condition1 THEN result1 <br/>[ WHEN conditionN THEN resultN ] * <br/>[ ELSE resultZ ] <br/>END | <li>当满足 condition1 时返回 result1。<li>当满足 conditionN 时返回 resultN。<br>否则返回 resultZ。若没有 else 语句，则返回 NULL。<br>示例语句：<br>insert into temp SELECT CASE WHEN units = 5 THEN 1 ELSE 0 END FROM Orders;<br>当 units 等于 5 时返回 1，否则返回 0。 |
| NULLIF(value1, value2)                                       | 如果 value1 与 value2 相同，则返回 NULL，否则返回第一个值。<br>例如：<li>NULLIF(5, 5) 返回 NULL。<li>NULLIF(5, 0) 返回 5。 |
| COALESCE(value1, value2 [, value3 ]* )                       | 返回列表中第一个不为 NULL 的值。<br>例如：COLAESCE(NULL, 5) 返回 5。 |
| IF(condition, true_value, false_value)                       | 如果满足 condition 的条件，返回 true_value，否则返回 false_value。<br>例如：IF(2 > 1, 2, 1) 返回 2。 |
| IS_ALPHA(string)                                             | 判断字符串 string 是不是仅由纯字母组成。<br>如果是，返回 TRUE，否则返回 FALSE。 |
| IS_DECIMAL(string)                                           | 判断字符串 string 是不是一个合法的数字（整数、小数、负数均可）。<br>如果是，返回 TRUE，否则返回 FALSE。 |
| IS_DIGIT(string)                                             | 判断字符串是不是仅由纯数字组成。<br>如果是，返回 TRUE，否则返回 FALSE。 |

<!-- ## 常用函数示例

### IS_ALPHA

**功能描述**：判断字符串是否只包含字母。  
**语法**：IS_ALPHA(content)  
**示例测试语句**：SELECT IS_ALPHA(string) AS result FROM TableTest;  
**测试数据和结果**：

| 测试数据（VARCHAR string） | 测试结果（BOOLEAN result） |
| :------------------------- | :------------------------- |
| Oceanus                    | true                       |
| oceanus123                 | false                      |
| ''                         | false                      |
| null                       | false                      |

### IS_DIGITS

**功能描述**：判断字符串是否只包含数字。  
**语法**：IS_DIGITS(content)  
**示例测试语句**：SELECT IS_DIGITS(content) AS result FROM Test;  
**测试数据和结果**：

| 测试数据（VARCHAR content） | 测试结果（BOOLEAN case_result） |
| :-------------------------- | :------------------------------ |
| 58.0                        | true                            |
| 58                          | true                            |
| 58pl                        | false                           |
| ''                          | false                           |
| null                        | false                           |

-->
