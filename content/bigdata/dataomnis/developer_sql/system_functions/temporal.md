---
title: "时间函数"
description:  
keywords: 大数据工作台,系统内置函数
weight: 30
collapsible: false
draft: false
---

| 函数                                                     | 功能描述                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| DATE string                                              | 将 "yyyy-MM-dd" 形式表示的字符串 string 解析为 SQL 日期。<br>示例语句：insert into test SELECT Date '2022-05-25'  FROM  TableTest; |
| TIME string                                              | 将 "HH:mm:ss" 形式表示的字符串 string 解析为 SQL 时间。<br>示例语句：insert into test SELECT Time '12:30:00'  FROM  TableTest; |
| TIMESTAMP string                                         | 将 "yyyy-MM-dd HH:mm:ss[.SSS]" 形式表示的字符串 string 解析为 SQL 时间戳。<br>示例语句：insert into test SELECT Timestamp '2022-05-25 12:30:00'  FROM  TableTest; |
| INTERVAL string range                                    | 返回时间间隔。string 有两种类型： <li>"dd hh:mm:ss.fff" 形式的字符串（毫秒），range 可以为 DAY、MINUTE、DAY TO HOUR、DAY TO SECOND。<li> "yyyy-MM" 形式的字符串（月），range 可以为 YEAR 或 YEAR TO MONTH。<br/>例如：<li>INTERVAL '10 00:00:00.004' DAY TO SECOND 表示间隔 10 天 4 毫秒。<li>INTERVAL '10' DAY 表示间隔 10 天。<li>INTERVAL '2-10' YEAR TO MONTH 表示间隔 2 年 10 个月。 |
| CURRENT_DATE                                             | 返回 UTC 时区当前的 SQL 日期。                               |
| CURRENT_TIME                                             | 返回 UTC 时区当前的 SQL 时间。                               |
| CURRENT_TIMESTAMP                                        | 返回 UTC 时区当前的 SQL 时间戳。                             |
| LOCALTIME                                                | 返回本地时区当前的 SQL 时间。                                |
| LOCALTIMESTAMP                                           | 返回本地时区当前的 SQL 时间戳。                              |
| EXTRACT(timeintervalunit FROM temporal)                  | 获取时间点的一部分。<br>例如：<li>EXTRACT(DAY FROM DATE '2006-06-05') 返回 5<li>EXTRACT(YEAR FROM DATE '2018-06-12') 返回 2018。 |
| YEAR(date)                                               | 返回指定日期的年份，相当于 EXTRACT(YEAR FROM date)。<br/>例如：YEAR(DATE '2020-08-12') 返回 2020。 |
| QUARTER(date)                                            | 返回指定日期的季度（取值范围：1~4 之间的整数）。相当于 EXTRACT(QUARTER FROM date)。<br/>例如：QUARTER(DATE '2012-09-10') 返回 3。 |
| MONTH(date)                                              | 返回指定日期的月份（取值范围：1~12 之间的整数）。相当于 EXTRACT(MONTH FROM date)。<br/>例如：MONTH(DATE '2012-09-10') 返回 9。 |
| WEEK(date)                                               | 返回指定日期的周数，即当年的第几周（取值范围：1~53 之间的整数）。相当于 EXTRACT(WEEK FROM date)。<br/>例如：WEEK(DATE '1994-09-27') 返回 39。 |
| DAYOFYEAR(date)                                          | 返回指定日期在**当年**的天数，即当年的第几天（取值范围：1~366 之间的整数）。相当于 EXTRACT(DOY FROM date)。<br/>例如：DAYOFYEAR(DATE '1994-09-27') 返回 270。 |
| DAYOFMONTH(date)                                         | 返回指定日期在**当月**的天数，即当月的第几天（取值范围：1~31 之间的整数）。相当于 EXTRACT(DAY FROM date)。<br/>例如：DAYOFMONTH(DATE '1994-09-27') 返回 27。 |
| DAYOFWEEK(date)                                          | 返回指定日期在**本周**的天数，即本周的第几天（取值范围：1~7 之间的整数）。相当于 EXTRACT(DOW FROM date)。<br/>例如：DAYOFWEEK(DATE '1994-09-27') 返回 3。 |
| HOUR(timestamp)                                          | 返回指定时间戳的小时部分（取值范围：0~23 之间的整数）。相当于 EXTRACT(HOUR FROM timestamp)。<br/>例如：HOUR('2017-10-02 12:25:44') 返回 12。 |
| MINUTE(timestamp)                                        | 返回指定时间戳的分钟部分（取值范围：0~59 之间的整数）。相当于 EXTRACT(MINUTE FROM timestamp)。<br/>例如：MINUTE('2017-10-02 12:25:44') 返回 25。 |
| SECOND(timestamp)                                        | 返回指定时间戳的秒部分（取值范围：0~59 之间的整数）。相当于 EXTRACT(SECOND FROM timestamp)。<br/>例如：SECOND('2017-10-02 12:25:44') 返回 44。 |
| FLOOR(timepoint TO timeintervalunit)                     | 将一个时间点按 timeintervalunit 单位向下取整。<br/>例如：FLOOR(TIME '12:44:31' TO MINUTE) 返回 12:44:00。 |
| CEIL(timepoint TO timeintervalunit)                      | 将一个时间点按 timeintervalunit 单位向上取整。<br/>例如：CEIL(TIME '12:44:31' TO MINUTE) 返回 12:45:00。 |
| (Timepoint1, temporal1) OVERLAPS (timepoint2, temporal2) | 判断两个时间段是否重叠。时间值可以是时间点或时间间隔。<br/>例如：<li> (TIME '2:55:00', INTERVAL '1' HOUR) OVERLAPS (TIME '3:30:00', INTERVAL '2' HOUR) 返回 TRUE。<br>(TIME '2:55:00', INTERVAL '1' HOUR) 表示的时间段是 2:55:00 到 3:55:00 （2:55:00+1:00:00）， (TIME '3:30:00', INTERVAL '2' HOUR) 表示的时间段是 3:30:00 到 5:30:00（3:30:00+2:00:00），重叠的时间段为 3:30:00 到 3:55:00，所以返回值为 TRUE。<li> (TIME '9:00:00', TIME '10:00:00') OVERLAPS (TIME '10:15:00', INTERVAL '3' HOUR) 返回 FALSE。<br> (TIME '9:00:00', TIME '10:00:00') 表示的时间段是 9:00:00 到 10:00:00，(TIME '10:15:00', INTERVAL '3' HOUR) 表示的时间段是 10:15:00 到 13:15:00（10:15:00+3:00:00），两个时间段无重叠，所以返回值为 FALSE。 |
| TIMESTAMPADD(timeintervalunit, interval, timepoint)      | 对指定时间点 timestamp 增加一个时间段 interval（interval 可以为负数）。时间段单位 timeintervalunit 可以为 SECOND、MINUTE、HOUR、DAY、WEEK、MONTH、QUARTER、YEAR。<br>例如：<li>TIMESTAMPADD(WEEK, 1, '2013-01-09') 返回 2013-01-16。<li>TIMESTAMPADD(WEEK, -1, '2013-01-09') 返回 2013-01-02。 |
| TIMESTAMPDIFF(timepointunit, timepoint1, timepoint2)     | 计算指定单位区间下，timepoint1 和 timepoint2 之间的时间差（允许为负数）。timepointunit 可以为 SECOND、MINUTE、HOUR、DAY、WEEK、MONTH、QUARTER、YEAR 中的一种。<br>例如：TIMESTAMPDIFF(DAY, TIMESTAMP '2003-01-02 10:00:00', TIMESTAMP '2003-01-03 10:00:00') 返回 1，即相差正 1 天。 |
| CONVERT_TZ(string1, string2, string3)                    | 将时间 string1（格式为 'yyyy-MM-dd HH:mm:ss' ）从时区 string2 转换到时区 string3。时区支持缩写（例如 "PST"）、全称（例如 "Asia/Shanghai"）或者任意时区（例如 "GMT-8:00"）。<br>例如：CONVERT('1970-01-01 00:00:00', 'UTC', 'America/Los_Angeles') 返回 “1969-12-31 16:00:00”。 |
| FROM_UNIXTIME(numeric[, string])                         | 返回 numeric 代表的 Unix 时间戳（从 1970-01-01 00:00:00 UTC 到现今的秒数）转为 'YYYY-MM-DD hh:mm:ss' 格式的字符串。**默认使用 UTC+8 时区，即北京时间（Asia/Shanghai）**。 |
| UNIX_TIMESTAMP()                                         | 返回以秒为单位的 Unix 时间戳（从 1970-01-01 00:00:00 UTC 到现今的秒数），类型为 BIGINT。**默认使用 UTC+8 时区，即北京时间（Asia/Shanghai）**。 |
| UNIX_TIMESTAMP(string1[, string2])                       | 将时间 string1 以时区 string2 的格式（可选，默认是 'yyyy-MM-dd HH:mm:ss'）转为 Unix 时间戳，类型为 BIGINT。 |
| TO_DATE(string1[, string2])                              | 将日期字符串 string1 以 string2 的格式（可选，默认是 'yyyy-MM-dd'）转为 DATE 格式的日期。 |
| TO_TIMESTAMP(string1[, string2])                         | 将时间字符串 string1 以 string2 的格式（可选，默认是 'yyyy-MM-dd HH:mm:ss'）转为 TIMESTAMP 格式的时间。**默认使用 UTC+8 时区，即北京时间（Asia/Shanghai）**。 |
| NOW()                                                    | 返回 UTC 时区当前的 SQL TIMESTAMP 时间戳。                   |

