---
title: "函数管理概述"
description: 本小节主要介绍函数管理概述。 
keywords: 函数,UDF,UDTF,UDTTF
weight: 10
collapsible: false
draft: false
---

当系统内置函数无法支撑您的业务需求时，您可以编写自定义函数 UDF（User-Defined Functions）插入自己的处理代码，并在查询中进行使用，从而满足业务的多样化需求。

大数据工作台支持如下自定义函数：
 - [UDF](../udf/)（User-Defined Functions，自定义标量函数）：输入单个数据行，输出一个数据行。
 - [UDTF](../udtf/)（User-Defined Table Functions，自定义表值函数）：输入一行输出多行（One-to-many maping）。
 - [UDTTF](../udttf/)（User-Defined Temporal Table Functions，自定义时态表函数）：通过一个时间属性来确定表数据的版本。

## 注意事项

- 自定义函数的性能低于系统内置函数，若系统内置函数能满足业务需求，建议您优先使用系统内置函数。
- 当自定义函数的名称与系统内置函数的名称相同时，系统默认会调用自定义函数。

## 约束与限制

单个用户在同一区域下最多可新建 500 个函数。