---
title: "其他函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 100
collapsible: false
draft: false
---

## 集合函数

| 函数                    | 功能描述                                                         |
| :---------------------- | :----------------------------------------------------------- |
| CARDINALITY(array)    | 返回数组 array 中的元素数。                                       |
| array ‘[’ integer ‘]’ | 返回数组 array 中位于 integer 位置（从 1 开始计数）的元素。            |
| ELEMENT(array)       | 返回数组 array 中的元素（array 中只有一个元素）。<li>如果数组为空，则返回 NULL。<li>如果数组包含多个元素，则引发异常。 |
| CARDINALITY(map)      | 返回 map 中的键值对个数。                              |
| map ‘[’ value ‘]’     | 返回 map 中指定 value 的值。                  |

## 值构建函数

| 函数                                                         | 功能描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| -- implicit constructor with parenthesis (value1 [, value2]\*) <br>-- explicit ROW constructor ROW(value1 [, value2]*) | 创建一行数据，包含指定的值（*value1, value2,* ...）。<br><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><li>implicit constructor 支持任意表达式作为字段，但至少需要两个字段。<li>explicit ROW constructor 可以处理任意数量的字段，但目前还不能很好地支持各种字段表达式。</span> |
| ARRAY '[' value [, value ]* ']'                              | 创建一个数组，包含指定的值（*value1、value2*、...）。        |
| MAP '[' value1, value2 [, value3, value4 ]* ']'              | 创建一个 map，包含指定的键值对 (( *value1, value2* ), *(value3, value4)* , ...)。 |

## 值访问函数

| 函数                          | 功能描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| tableName.compositeType.field | 通过名称访问 Flink 复合类型（例如 Tuple、POJO）的单个字段，并返回该字段的值。 |
| tableName.compositeType.*     | 访问 Flink 复合类型（例如 Tuple、POJO）的所有字段（将其每个直接子类型转换为单独的字段），并返回字段的值。 |

## 分组函数

| 函数                                                         | 功能描述                          |
| :----------------------------------------------------------- | :---------------------------- |
| GROUP_ID()                                                   | 返回一个唯一标识分组的整数。  |
| GROUPING(expression1 [, expression2]* )<br>GROUPING_ID(expression1 [, expression2]* ) | 返回指定分组表达式的分组 ID。 |

## 哈希函数

| 函数                   | 功能描述                                                         |
| :------------------------- | :----------------------------------------------------------- |
| MD5(string)              | 返回 string 的 MD5 值（32 位十六进制数字组成的字符串）。<br>如果 string 为 NULL，则返回 NULL。 |
| SHA1(string)             | 返回 string 的 SHA-1 值（40 个十六进制数字的字符串）。<br/>如果 string 为 NULL，则返回 NULL。 |
| SHA224(string)           | 返回 string 的 SHA-224 值（56 个十六进制数字的字符串）。<br/>如果 string 为 NULL，则返回 NULL。 |
| SHA256(string)           | 返回 string 的 SHA-256 值（64 位十六进制数字的字符串）。<br/>如果 string 为 NULL，则返回 NULL。 |
| SHA384(string)           | 返回 string 的 SHA-384 值（96 个十六进制数字的字符串）。<br/>如果 string 为 NULL，则返回 NULL。 |
| SHA512(string)           | 返回 string 的 SHA-512 值（128 个十六进制数字的字符串）。<br/>如果 string 为 NULL，则返回 NULL。 |
| SHA2(string, hashLength) | 返回 string 的 SHA-2 系列哈希函数（SHA-224、SHA-256、SHA-384 或 SHA-512）的哈希值。具体使用哪一种哈希函数，由 hashLength 来决定，可以取值 224、256、384 和 512。<br>SHA2(string, 224) 等价于 SHA224(string)，其他的以此类推。<br>如果 string 或 hashLength 为 NULL，则返回 NULL。 |

### MD5(string)

**功能描述：**返回字符串的 MD5 值。
**测试语句：**SELECT MD5(content) AS res FROM Test;
**测试数据和结果：**

| 测试数据（VARCHAR content） | 测试结果（VARCHAR res）          |
| :-------------------------- | :------------------------------- |
| abc                         | 900150983cd24fb0d6963f7d28e17f72 |

### SHA1(string)

**功能描述：**返回字符串 expr 的 SHA1 值。
**测试语句：**SELECT SHA1(expr) AS res FROM Test;
**测试数据和结果：**

| 测试数据（VARCHAR expr） | 测试结果（VARCHAR res）                  |
| :----------------------- | :--------------------------------------- |
| abc                      | a9993e364706816aba3e25717850c26c9cd0d89d |

### SHA256(string)

**功能描述：**返回字符串 expr 的 SHA256 值。
**测试语句：**SELECT SHA256(expr) FROM Test;
**测试数据和结果：**

| 测试数据（VARCHAR expr） | 测试结果（VARCHAR res）                                      |
| :----------------------- | :----------------------------------------------------------- |
| abc                      | ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad |

