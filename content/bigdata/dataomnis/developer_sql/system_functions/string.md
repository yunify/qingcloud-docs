---
title: "字符串函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 20
collapsible: false
draft: false
---

## 函数列表

| 函数                                                         | 功能描述                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [string1 \|\| string2](#heading)                                     | 拼接两个字符串，返回两个字符串串联的结果。<br>string1 \|\| string2 与 CONCAT(string1, string2) 返回的结果相同。 |
| [CHAR_LENGTH(string)](#char_length)<br>[CHARACTER_LENGTH(string)](#character_length)      | 返回 string 中的字符数量。                                   |
| [UPPER(string)](#upper)                                            | 返回 string 的全大写字母形式。                               |
| [LOWER(string)](#lower)                                            | 返回 string 的全小写字母形式。                               |
| [POSITION(string1 IN string2)](#position)                             | 获取 string2 中第一次出现 string1 的位置（从 1 开始计数）。<br>若 string2 中没有包含 string1，返回 0。 |
| [TRIM([ BOTH \| LEADING \| TRAILING ]string1 FROM string2 )](#trim) | 从 string2 中删除首尾/首位/末尾的 string1。默认情况下，首尾的空格都将被删除。 |
| LTRIM(string)                                                | 删除 string 最左侧的所有空格。<br>例如：LTRIM(' Test') 会返回 'Test'。 |
| RTRIM(string)                                                | 删除 string 最右侧的所有空格。<br/>例如：RTRIM(' Test ') 会返回 ' Test'。 |
| REPEAT(string, integer)                                      | 将 string 重复 integer 次。<br/>例如：REPEAT('Test', 3) 会返回 'TestTestTest'。 |
| REGEXP_REPLACE(string1, string2, string3)                    | string2 是一个正则表达式，将 string1 中满足该正则表达式的内容，替换为 string3。<br/>例如：REGEXP_REPLACE('TestTestTest', 'es\|tT', '') 返回 'Tt'。 |
| [REPLACE(string1, string2, string3)](#replace)                       | 将 string1 中所有的 string2 替换为 string3。<br/>例如：REPLACE('TestTestTest', 'T', 't') 返回 'testtesttest'。 |
| [OVERLAY(string1 PLACING string2 FROM integer1 [ FOR integer2 ])](#overlay) | 将 string1 从第 integer1 位（从 1 开始计数）开始，长度为 integer2 的子字符串（默认为 string2 的长度 ）替换为 string2。<br>例如：OVERLAY('This is an old string' PLACING ' new' FROM 10 FOR 5) 返回 "This is a new string"。 |
| SUBSTRING(string from integer1 [ FOR integer2])              | 获取 string1 从第 integer1 位（从 1 开始计数）开始，长度为 integer2 的子字符串（默认到 string1 的末尾 ）。 |
| REGEXP_EXTRACT(string1, string2[, integer])                  | 从 string1 中提取正则分组，正则表达式为 string2，第一个括号为第一组，以此类推。<br>可通过 integer 来指定所需的分组号（从1开始）。如果不指定分组号或者分组号为 0，则表示返回整个正则表达式匹配到的字符串。<br>例如：`REGEXP_EXTRACT('foothebar', 'foo(.*?)(bar)', 2)` 返回 “bar”。 |
| [INITCAP(string)](#initcap)                                          | 将 string 中的单词，首字母转换为大写，其余为小写。<br>例如：INITCAP('i have a dream') 返回 “I Have A Dream”。 |
| [CONCAT(string1, string2 …)](#concat)                               | 连接多个字符串。若任意字符串为 NULL，则结果为 NULL。<br/>例如：`CONCAT('AA', 'BB', 'CC')` 返回 “AABBCC”。 |
| [CONCAT_WS(string1, string2, string3, …)](#concat_ws)                  | 使用指定的分隔符 string1 连接多个字符串。<li>如果 string1 为 NULL，则结果为 NULL。<li>如果某个字符串为 NULL，则跳过它，但是不会跳过空字符串。例如 `CONCAT_WS('~', 'AA', NULL, 'BB', '', 'CC')` 返回 “AA~BB~~CC”。 |
| [LPAD(string1, integer, string2)](#lpad)                          | 将 string2 拼接到 string1 的左侧，直到字符串长度为 length。<br>如果 string1 的长度大于 length，则返回 string1 裁剪为长度为 length 的字符串。 |
| [RPAD(string1, integer, string2)](#rpad)                          | 将 string2 拼接到 string1 的右侧，直到字符串长度为 length。<br/>如果 string1 的长度大于 length，则返回 string1 裁剪为长度为 length 的字符串。 |
| FROM_BASE64(string)                                          | 将 Base64 编码的 string 进行解码。如果 string 为 NULL，则返回 NULL。<br>例如：FROM_BASE64('aGVsbG8gd29ybGQ=') 返回“hello world”。 |
| TO_BASE64(string)                                            | 将 string 编码为 Base64 字符串。如果 string 为 NULL，则返回 NULL。<br>例如：TO_BASE64('hello world') 返回“aGVsbG8gd29ybGQ=”。 |
| ASCII(string)                                                | 返回 string 中第一个字符的 ASCII 码。如果 string 为 NULL，则返回 NULL。<br/>例如：ASCII('apple') 返回 97，因为首字母 'a' 的 ASCII 编码是 97。 |
| CHR(integer)                                                 | 返回 integer 表示的 ASCII 码对应的字符。如果 integer 为 NULL，则返回 NULL；如果 integer 大于 255，则先得到 integer 除以 256 的余数，再返回该余数表示的 ASCII 码对应的字符。<br/>例如：CHR(97) 返回 a，CHR(353) 返回 a。 |
| DECODE(binary, string)                                       | 将 binary 表示的 BINARY 类型以 string 指定的字符集（'US-ASCII'、'ISO-8859-1'、'UTF-8'、'UTF-16BE'、'UTF-16LE'、'UTF-'之一）解码。如果任一参数为 NULL，则返回 NULL。<br/>例如：DECODE(binary_field, 'UTF-16LE')。 |
| ENCODE(string1, string2)                                     | 将 string1 转码为 string2 指定的字符集（'US-ASCII'、'ISO-8859-1'、'UTF-8'、'UTF-16BE'、'UTF-16LE'、'UTF-'之一）编码的 BINARY 类型。<br/>例如：ENCODE(hello, 'GBK')。 |
| INSTR(string1, string2)                                      | 返回 string2 在 string1 中首次出现的位置。如果任一参数为 NULL，则返回 NULL。 |
| LEFT(string, integer)                                        | 返回 string 从左起前 integer 个字符。如果 integer 为负数，则返回空字符串。如果任一参数为 NULL，则返回 NULL。 |
| RIGHT(string, integer)                                       | 返回 string 从右起后 integer 个字符。如果 integer 为负数，则返回空字符串。如果任一参数为 NULL，则返回 NULL。 |
| LOCATE(string1, string2[, integer])                          | 返回跳过 integer 个字符后，string1 在 string2 中首次出现的位置（参数顺序与 INSTR 函数相反）。如果未找到，则返回 0。如果任意参数为 NULL，结果为 NULL。 |
| PARSE_URL(string1, string2[, string3])                       | 从 URL （string1）返回指定的部分。<br>string2 的有效值包括：“HOST”、“PATH”、“QUERY”、“REF”、“PROTOCOL”、“AUTHORITY”、“FILE” 和 “USERINFO”。<br>若 string2 为 QUERY，可通过 string3 来指定键，从而获取特定键的值。<br/>如果任一参数为 NULL，则返回 NULL。<br/>例如：<li>`parse_url('http://facebook.com/path1/p.php?k1=v1&k2=v2#Ref1', 'HOST')`返回“facebook.com”。<li>`parse_url('http://facebook.com/path1/p.php?k1=v1&k2=v2#Ref1', 'QUERY', 'k1')`返回“v1”。 |
| REGEXP(string1, string2)                                     | 如果 string1 中的任一子字符串能与正则表达式 string2 匹配，那么返回 TRUE，否则返回 FALSE。如果任一参数为 NULL，返回 NULL。 |
| REVERSE(string)                                              | 反转 string 字符串。如果任一参数为 NULL，返回 NULL。         |
| SPLIT_INDEX(string1, string2, integer1)                      | 将 string1 以分隔符 string2 进行拆分，并获取第 integer1（从 0 开始计数）项，返回值为字符串 VARCHAR 类型。如果 integer1 为负数，则返回 NULL 。如果任一参数为 NULL，则返回 NULL。 |
| STR_TO_MAP(string1[, string2, string3])                      | 将 string1 用 string2 提供的数据分隔符（默认为“,”）和 string3 提供的键值间分隔符（默认为"="）进行拆分，结果为键值对 `MAP` 类型。例如 STR_TO_MAP('k1=v1,k2=v2,k3=v3') 返回键值对（非字符串）{'k1': 'v1', 'k2': 'v2', 'k3': 'v3'}。 |
| SUBSTR(string[, integer1[, integer2]])                       | 返回 string 字符串从 integer1 位置开始，长度为 integer2 的子字符串。如果不提供 integer2，则默认到 string 的末尾。 |


## 常用函数示例

### ||

**功能描述**：拼接两个字符串，返回两个字符串串联的结果。      
**语法**：string1 || string2   
**测试语句**：SELECT string1 || string2 FROM TableTest ;   
**测试数据和结果**：

| 测试数据（VARCHAR string1） | 测试数据（VARCHAR string2） | 测试结果（VARCHAR） |
| :-------------------------- | :-------------------------- | :------------------ |
| Hello                       | World                        | HelloWorld          |

### CHAR_LENGTH

**功能描述**：返回 string 中的字符数量。  
**语法**：CHAR_LENGTH(string)  
**测试语句**：SELECT CHAR_LENGTH(var1) AS length FROM TableTest；  
**测试数据和结果**：

| 测试数据（VARCHAR var1） | 测试结果（INT length） |
| :----------------------- | :--------------------- |
| HelloWorld               | 10                     |

### CHARACTER_LENGTH

**功能描述**：返回 string 中的字符数量。   
**语法**：CHARACTER_LENGTH(string)  
**测试语句**：SELECT CHAR_LENGTH(var1) AS length FROM TableTest;   
**测试数据和结果**：

| 测试数据（VARCHAR var1） | 测试结果（INT length） |
| :----------------------- | :--------------------- |
| HelloWorld               | 10                     |

### CONCAT

**功能描述**：连接多个字符串。若任意字符串为 NULL，则结果为 NULL。   
**语法**：CONCAT(string1, string2 …)     
**测试语句**：SELECT CONCAT(string1, string2, string3) AS result FROM TableTest;   
**测试数据和结果**：

| 测试数据（VARCHAR string1） | 测试数据（VARCHAR string2） | 测试数据（VARCHAR string3） | 测试结果（VARCHAR result） |
| :-------------------------- | :-------------------------- | :-------------------------- | :------------------------- |
| AA                          | BB                          | CC                          | AABBCC               |

### CONCAT_WS

**功能描述**：使用指定的分隔符 string1 连接多个字符串。   
**语法**：CONCAT_WS(string1, string2, string3, …)    
**测试语句**：SELECT CONCAT_WS(string1, string2, string3, string4) AS result FROM TableTest;   
**测试数据和结果**：

| 测试数据（VARCHAR string1） | 测试数据（VARCHAR string2） | 测试数据（VARCHAR string3） | 测试数据（VARCHAR string4） | 测试结果（VARCHAR result） |
| :---------------------------- | :-------------------------- | :-------------------------- | :-------------------------- | :---------------------- |
| -                             | AA                          | BB                          | CC                          | AA-BB-CC                |

### INITCAP

**功能描述**：将 string 中的单词，首字母转换为大写，其余为小写。   
**语法**：INITCAP(string)  
**测试语句**：SELECT INITCAP(var1) AS str FROM TableTest;   
**测试数据和结果**：

| 测试数据（VARCHAR var1） | 测试结果（VARCHAR str） |
| :----------------------- | :---------------------- |
| hello world           | Hello World          |

### LOWER

**功能描述**：返回 string 的全小写字母形式。   
**语法**：LOWER(string)  
**测试语句**：SELECT LOWER(var1) AS lower FROM TableTest;   
**测试数据和结果**：

| 测试数据（VARCHAR var1） | 测试结果（VARCHAR lower） |
| :----------------------- | :------------------------ |
| HelloWorld               | helloworld                |

### LPAD

**功能描述**：将 string2 拼接到 string1 的左侧，直到字符串长度为 length。   
**语法**：LPAD(string1, integer, string2)  
**测试语句**：SELECT LPAD(string1, integer, string2) AS result FROM TableTest;   
**测试数据和结果**：

| 测试数据（VARCHAR string1） | 测试数据（INT integer） | 测试数据（VARCHAR string2） | 测试结果（VARCHAR result） |
| :----------------------- | :--------------------- | :-------------------------- | :---------------------- |
| testtest                  | 3                      | hello                       | hel                     |
| testtest                  | -1                     | hello                       | ''                      |
| testtest                  | 12                     | hello                       | helltesttest            |

### OVERLAY

**功能描述**：将 string1 从第 start_pos 位（**start_pos 从1开始计数**）开始的子串替换为 string2。可以指定替换的长度。   
**语法**：SELECT OVERLAY(string1 PLACING string2 FROM start_pos [ FOR length ])   
**示例测试语句**：SELECT OVERLAY(string1 PLACING string2 FROM start_pos FOR length) AS result FROM Test;   
**测试数据和结果**：

| 测试数据（VARCHAR string1） | 测试数据（VARCHAR string2） | 测试数据（INT start_pos） | 测试数据（INT length） | 测试结果（VARCHAR result） |
| :-------------------------- | :-------------------------- | :------------------------ | :--------------------- | :---------------------- |
| testtest                     | abc                         | 2                         | 2                      | tabcttest                |

### POSITION

**功能描述**：获取 string2 中第一次出现 string1 的位置（从 1 开始计数）。   
**语法**：POSITION(string1 IN string2)   
**示例测试语句**：SELECT POSITION(string1 IN string2) AS result FROM TableTest;  
**测试数据和结果**：

| 测试数据（VARCHAR string1） | 测试数据（VARCHAR string2） | 测试结果（VARCHAR result） |
| :-------------------------- | :-------------------------- | :---------------------- |
| lo                          | helloworld                     | 4                       |

### REPLACE

**功能描述**：将 string1 中所有的 string2 替换为 string3。   
**语法**：REPLACE(string1, string2, string3)     
**示例测试语句**：SELECT REPLACE( string1, string2, string3) AS result FROM TableTest;  
**测试数据和结果**：

| 测试数据（VARCHAR string1） | 测试数据（VARCHAR string2） | 测试数据（VARCHAR string3） | 测试结果（VARCHAR result） |
| :-------------------------- | :-------------------------- | :-------------------------- | :---------------------- |
| banana                      | a                           | A                           | bAnAnA                  |

### RPAD

**功能描述**：将 string2 拼接到 string1 的右侧，直到字符串长度为 length。   
**语法**：RPAD(string1, integer, string2)   
**测试语句**：SELECT RPAD(string1, integer, string2) AS result FROM TableTest;  
**测试数据和结果**：

| 测试数据（VARCHAR string1） | 测试数据（INT integer） | 测试数据（VARCHAR string2） | 测试结果（VARCHAR result） |
| :----------------------- | :--------------------- | :-------------------------- | :---------------------- |
| testtest                  | 3                      | hello                       | tes                     |
| testtest                  | -1                     | hello                       | ''                      |
| testtest                  | 12                     | hello                       | testtesthell            |

### TRIM

**功能描述**：从 string2 中删除首尾/首位/末尾的 string1。默认情况下，首尾的空格都将被删除。   
**语法**：TRIM([ BOTH | LEADING | TRAILING ]string1 FROM string2 )  
**测试语句**：SELECT TRIM(BOTH string1 FROM string2) AS result FROM TableTest;  
**测试数据和结果**：

| 测试数据（VARCHAR string1） | 测试数据（VARCHAR string2） | 测试结果（VARCHAR result） |
| :-------------------------- | :-------------------------- | :---------------------- |
| t                           | tHelloWorldt                | HelloWorld              |

### UPPER

**功能描述**：返回 string 的全大写字母形式。      
**语法**：UPPER(string)  
**测试语句**：SELECT UPPER(var1) AS upper FROM TableTest;  
**测试数据和结果**：

| 测试数据（VARCHAR var1） | 测试结果（VARCHAR upper） |
| :----------------------- | :------------------------ |
| HelloWorld               | HELLOWORLD                |
