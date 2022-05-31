---
title: "参数配置"
description: 本小节主要介绍如何配置作业调度。 
keywords: 大数据工作台,数据开发,实时计算,作业,作业调度
weight: 10
collapsible: false
draft: false
---

调度参数是作业调度时使用的参数，调度参数会根据作业调度的时间及调度参数的取值格式自动替换取值。

## 配置调度参数

在参数配置区域，您可以通过可视化或表达式方式新增参数。

同一个作业可以配置多个调度参数。

### 可视化方式

- 添加变量：通过新增变量的方式为作业添加参数。
- 加载代码中的参数：该功能可以识别当前作业代码中定义的变量名，并自动将变量名添加为参数。

<img src="/bigdata/dataomnis/_images/schedule_para.png" alt="可视化方式" style="zoom:50%;" />

### 表达式方式

参数配置默认使用可视化方式定义参数，您可以根据使用习惯切换为表达式方式。

<img src="/bigdata/dataomnis/_images/schedule_para_1.png" alt="表达式方式" style="zoom:50%;" />

## 参数列表

调度参数分为**系统内置参数**和**自定义参数**。

### 系统内置参数

| <span style="display:inline-block;width:140px">参数名</span> | <span style="display:inline-block;width:520px">定义</span>   |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| ${ScheduleTime}                                              | 调度时间，格式为：yyyymmddHHMMSS。<li>yyyy：表示 4 位的年份，取值为作业实例调度运行的年份。<li>mm：表示月，取值为作业实例调度运行的月份。<li>dd：表示日期，取值为作业实例调度运行的日期。<li>HH：表示小时（24 进制），取值为作业实例调度运行的小时。<li>MM：表示分钟，取值为作业实例调度运行的分钟。<li>SS：表示秒，取值为作业实例调度运行的秒。<br>例如：20220112100500。 |
| ${ScheduleTimeStamp}                                         | 调度时间戳，long 类型，精确到`毫秒`。<br/>例如：1641965312454（2022-01-12 13:28:32）。 |
| ${ScheduleTimeSecond}                                        | 调度时间戳，long 类型，精确到`秒`。<br/>例如：1641965312（2022-01-12 13:28:32）。 |

### 自定义参数

根据系统参数  `${ScheduleTime}` 获取以下时间参数的取值。

| <span style="display:inline-block;width:140px">参数名</span> | <span style="display:inline-block;width:520px">定义</span>   |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| ${yyyy}                                                      | 调度年份，格式为: yyyy。<br/>例如：2022                      |
| ${yyyymm}                                                    | 调度年份+月份，格式为：yyyymm。<br/>例如：202201             |
| ${yyyy-mm}                                                   | 调度年份+月份，格式为：yyyy-mm。<br/>例如：2022-01           |
| ${yyyymmdd}                                                  | 调度年份+月份+日期，格式为：yyyymmdd。<br/>例如：20220112    |
| ${yyyy-mm-dd}                                                | 调度年份+月份+日期，格式为：yyyy-mm-dd。<br/>例如：2022-01-12 |
| ${yyyymmddHH}                                                | 调度年份+月份+日期+小时，格式为：yyyymmddHH。<br/>例如：2022011210 |
| ${yyyy-mm-dd HH}                                             | 调度年份+月份+日期+小时，格式为：yyyy-mm-dd HH。<br/>例如：2022-01-12 10 |
| ${yyyymmddHHMM}                                              | 调度年份+月份+日期+小时+分钟，格式为：yyyymmddHHMM。<br/>例如：202201121005 |
| ${yyyy-mm-dd HH:MM}                                          | 调度年份+月份+日期+小时+分钟，格式为：yyyy-mm-dd HH:MM。<br/>例如：2022-01-12 10:05 |
| ${yyyymmddHHMMSS}                                            | 调度年份+月份+日期+小时+分钟+秒，格式为：yyyymmddHHMMSS。<br/>例如：20220112100500 |
| ${yyyy-mm-dd HH:MM:SS}                                       | 调度年份+月份+日期+小时+分钟+秒，格式为：yyyy-mm-dd HH:MM:SS。<br/>例如：2022-01-12 10:05:00 |

- yyyy：表示 4 位的年份，取值为作业实例调度运行的年份。
- mm：表示月，取值为作业实例调度运行的月份。
- dd：表示日期，取值为作业实例调度运行的日期。
- HH：表示小时（24 进制），取值为作业实例调度运行的小时。
- MM：表示分钟，取值为作业实例调度运行的分钟。
- SS：表示秒，取值为作业实例调度运行的秒。

### 加减周期参数

加减周期参数，由 +/- 符号，区分前后两部分。加减周期参数也属于自定义参数。

前部分：系统参数 或 自定义参数，包括：ScheduleTime、ScheduleTimeStamp、ScheduleTimeSecond、yyyymmddHHMMSS 等

后部分：

| 参数 | 含义                    |
| :--- | :---------------------- |
| nY   | n 表示数字，Y 表示年    |
| nM   | n 表示数字，M 表示月    |
| nD   | n 表示数字，D 表示天    |
| nH   | n 表示数字，H 表示小时  |
| nMi  | n 表示数字，Mi 表示分钟 |

加减周期后，输出格式不变。 

组合后样例：

- ${ScheduleTime-1D} 输出格式为：20220208171257
- ${ScheduleTimeStamp-1D} 输出格式为：1644311577537
- ${ScheduleTimeSecond-1D} 输出格式为：1644311577
- ${yyyy-mm-dd HH:MM:SS-1D} 输出格式为：2022-02-08 17:12:57

| 日期/时间加减周期 | 参数取值                                                     | 说明                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 后 n 周           | ${ScheduleTime+7nD}<br>写成：${ScheduleTime+mD}（其中，m=7n） | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，m=14，value=20220126100500 |
| 后 n 天           | ${ScheduleTime+nD}                                           | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20220114100500 |
| 后 n 小时         | ${ScheduleTime+nH}                                           | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20220112120500 |
| 后 n 分钟         | ${ScheduleTime+nMi}                                          | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20220112100700 |
| 后 n 月           | ${ScheduleTime+nM}                                           | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20220312100500 |
| 后 n 年           | ${ScheduleTime+nY} 等价于 ${yyyymmddHHMMSS+nY}               | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20240112100500 |
| 前 n 周           | ${ScheduleTime-7nD}<br>写成：${ScheduleTime+mD}（其中，m=7n） | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，m=14，value=20211229100500 |
| 前 n 天           | ${ScheduleTime-nD}                                           | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20220110100500 |
| 前 n 小时         | ${ScheduleTime-nH}                                           | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20220112080500 |
| 前 n 分钟         | ${ScheduleTime-nMi}                                          | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20220112100300 |
| 前 n 月           | ${ScheduleTime-nM}                                           | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20211112100500 |
| 前 n 年           | ${ScheduleTime-nY}                                           | ScheduleTime 为系统参数的调度时间，可以更改为自定义参数，加减周期后结果与系统参数格式相同。<br/>当 ScheduleTime=20220112100500，n=2 时，value=20200112100500 |
