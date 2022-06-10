---
title: "类型转换函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 50
collapsible: false
draft: false
---

## 语法格式

```sql
CAST(value AS type)
```

## 函数说明

将 value 强制转换为 type 类型。 

若 value 为 NULL，则返回 NULL。

例如：
- CAST('42' AS INT) 返回 42。
- CAST(NULL AS VARCHAR) 返回 NULL。

## 常用类型转换函数


| 函数                                                | 描述                                                         |
| --------------------------------------------------- | ------------------------------------------------------------ |
| [CAST(value AS VARCHAR)](#castvalue-as-varchar)     | 将 value 强制转换为字符串类型，value 可以是数值类型、TIMESTAMP/DATE/TIME。 |
| [CAST(value AS INT)](#castvalue-as-int)             | 将 value 强制转换为 INT 类型，value 可以是数值类型、字符类型。 |
| [CAST(value AS TIMESTAMP)](#castvalue-as-timestamp) | 将 value 强制转换为 TIMESTAMP 类型，value 可以是字符串、DATE/TIME。 |
| [CAST(value AS DATE)](#castvalue-as-date)           | 将 value 强制转换为 DATE 类型，value 可以是字符串、TIMESTAMP。 |

### CAST(value AS VARCHAR)

**测试语句**

```sql
SELECT CAST(var1 as VARCHAR) FROM TableTest;
```

**测试数据和结果**

| 测试数据（INT var1） | 测试结果 VARCHAR |
| -------------------- | ---------------- |
| 30                   | "30"             |

### CAST(value AS INT)

**测试语句**

```sql
SELECT CAST(var1 as INT) FROM TableTest;
```

**测试数据和结果**

| 测试数据（STRING var1） | 测试结果 INT |
| ----------------------- | ------------ |
| "30"                    | 30           |

### CAST(value AS TIMESTAMP)

**测试语句**

```sql
SELECT CAST(var1 as TIMESTAMP) FROM TableTest;
```

**测试数据和结果**

| 测试数据（STRING var1） | 测试结果 TIMESTAMP |
| ----------------------- | ------------------ |
| "2022-01-12 13:28:32"   | 1641965312454      |

### CAST(value AS DATE)

**测试语句**

```sql
SELECT CAST(var1 as DATE) FROM TableTest;
```

**测试数据和结果**

| 测试数据（TIMESTAMP var1） | 测试结果 DATE |
| -------------------------- | ------------- |
| 1641965312454              | "2022-01-12"  |
