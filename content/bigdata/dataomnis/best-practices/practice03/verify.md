---
title: "验证结果"
description:  
keywords: 
weight: 40
collapsible: false
draft: true
---

## 验证结果

通过[ClickHouse连接工具](http://ui.tabix.io/#!/login)登录 ClickHouse，执行以下操作，查询结果数据。

**清空表数据**

```sql
truncate table output_conversion_rate;
truncate table output_pv;
truncate table output_uv;
 ```

**查询合并的数据**

```sql
-- 当前累计的uv
select userids,uv from output_uv final ;
-- 最新时刻的转化率
select conversion_rate,rate from output_conversion_rate final ;
-- 每10分钟统计的pv
select sum(pv) as pv,stt,edt from output_pv group by stt,edt;
 ```

**或者也可以手动合并，正常查询**

```sql
OPTIMIZE TABLE output_uv FINAL;
OPTIMIZE TABLE output_conversion_rate FINAL;
select * from output_uv;
select * from output_conversion_rate;
select sum(pv) as pv,stt,edt from output_pv group by stt,edt;
```


