---
title: "什么是作业？"
description: 本小节主要介绍什么是作业。 
keywords: 大数据工作台,数据开发,实时计算,作业
weight: 10
collapsible: false
draft: false
---

作业是指完成对数据的一系列操作，大数据工作台目前支持两种类型的作业，SQL 模式和代码开发（JAR）模式。    
您可以根据业务实际需求与使用场景，选择合适的作业类型开发作业。

- [SQL 模式](../create_job_sql/)    
    原生 Flink SQL 支持，包含更多特性和功能，比算子编排更为强大。    
    SQL 与其他的编程语言相比学习成本较低，使用 SQL 作业进行开发将降低数据开发人员使用门槛。   
- [代码开发](../create_job_jar/)   
    有两种格式：JAR（支持 Java 包和 Scala 包）、Python，目前仅支持 Jar 作业。    
    JAR 作业需要用户先在本地开发并编译好 JAR 包（需要开发人员对 Java 或 Scala 有一定的了解），适合对流计算处理偏底层和复杂要求较高的用户。
    