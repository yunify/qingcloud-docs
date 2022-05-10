---
title: "数据生成器 Faker"
description: 本小节主要介绍数据生成器 Faker 内置 Connector。 
keywords: 大数据工作台,内置 Connector,Faker
weight: 77
collapsible: false
draft: false
---



## 版本说明

当前仅支持 Flink 1.12 版本。

## 使用范围

Faker 是一款便捷的随机数据生成器，它可以作为数据源（Source）直接使用，支持无界数据源。

## DDL 定义

```sql
DROP TABLE IF EXISTS page_view;
CREATE TABLE page_view (
      product_id       INT,
      sex              INT,
      province         STRING,
      full_name        STRING,
      click_time       TIMESTAMP(3),
      WATERMARK FOR click_time AS click_time - INTERVAL '4' SECOND
) WITH (
      'connector' = 'faker',                                                              -- 必选参数,固定值为faker
      'fields.product_id.expression'    = '#{number.numberBetween ''1'',''100''}',        -- 随机生成 1-100 范围内的数据
      'fields.sex.expression' = '#{regexify ''(0|1){1}''}',                               -- 针对sex字段随机生成0、1两种值，用于后续通过性别统计
      'fields.province.expression'  = '#{regexify ''(河北省|山西省|辽宁省|吉林省|黑龙江省|江苏省|浙江省|安徽省|福建省|江西省|山东省|河南省|湖北省|湖南省|广东省|海南省|四川省|贵州省|云南省|陕西省|甘肃省|青海省|台湾省){1}''}',-- 针对province字段随机生成省份，用于后续通过省份统计
      'fields.full_name.expression' = '#{regexify ''(华为智慧屏V65i 65英寸 HEGE-560B 4K全面屏智能电视机 多方视频通话 AI升降摄像头 4GB+32GB 星际黑|Redmi 10X 4G Helio G85游戏芯 4800万超清四摄 5020mAh大电量 小孔全面屏 128GB大存储 4GB+128GB 冰雾白 游戏智能手机 小米 红米|小米10 至尊纪念版 双模5G 骁龙865 120HZ高刷新率 120倍长焦镜头 120W快充 8GB+128GB 透明版 游戏手机|小米10 至尊纪念版 双模5G 骁龙865 120HZ高刷新率 120倍长焦镜头 120W快充 12GB+256GB 陶瓷黑 游戏手机|Redmi 10X 4G Helio G85游戏芯 4800万超清四摄 5020mAh大电量 小孔全面屏 128GB大存储 4GB+128GB 冰雾白 游戏智能手机 小米 红米|华为 HUAWEI P40 麒麟990 5G SoC芯片 5000万超感知徕卡三摄 30倍数字变焦 8GB+128GB亮黑色全网通5G手机|Apple iPhone 12 (A2404) 64GB 黑色 支持移动联通电信5G 双卡双待手机|华为 HUAWEI P40 麒麟990 5G SoC芯片 5000万超感知徕卡三摄 30倍数字变焦 6GB+128GB冰霜银全网通5G手机){1}''}',                                               -- 针对full_name字段随机生成产品名，用于后续通过产品名热词拆分
      'fields.click_time.expression' = '#{date.past ''6'',''1'',''SECONDS''}',            -- 针对click_time 字段随机生成比当前时间有1-6秒的延迟的时间数据
      'rows-per-second'          = '1'                                                    -- 每秒生成1条数据
);
```

## Faker 源表 WITH 参数

| 参数值                    | 是否必填 | 默认值 | 数据类型 | 描述                                                         |
| :------------------------ | :------- | :----- | :------- | :----------------------------------------------------------- |
| connector                 | 是       | 无     | String   | 连接器，固定值为 `faker`。                                   |
| rows-per-second           | 否       | 10000  | Long     | 每秒生成的行数，控制发出数据速率。                           |
| fields.*field*.expression | 否       | 无     | String   | 通过正则表达式生成有规则数据。具体请参考 [java-faker](https://github.com/DiUS/java-faker) 中的正则功能和使用方式。 |
| fields.*field*.null-rate  | 否       | 0.0    | Double   | 此字段为空（null）的比率。                                   |
| fields.*field*.length     | 否       | 1      | Integer  | Array，map，multiset 相关类型数据的长度（size）。            |

## Faker 数据类型

| 数据类型                      | 支持的生成器      | 描述                          |
| :---------------------------- | :---------------- | :---------------------------- |
| BOOLEAN                       | random            |-                               |
| CHAR                          | random / sequence |-                               |
| VARCHAR                       | random / sequence |-                               |
| STRING                        | random / sequence |-                               |
| DECIMAL                       | random / sequence |-                               |
| TINYINT                       | random / sequence |-                               |
| SMALLINT                      | random / sequence |-                               |
| INT                           | random / sequence |-                               |
| BIGINT                        | random / sequence |-                               |
| FLOAT                         | random / sequence |-                               |
| DOUBLE                        | random / sequence |-                               |
| DATE                          | random            | 当前日期。                    |
| TIME                          | random            | 当前时间。                    |
| TIMESTAMP                     | random            | 当前时间戳。                  |
| TIMESTAMP WITH LOCAL TIMEZONE | random            | 当前时间戳。                  |
| INTERVAL YEAR TO MONTH        | random            |-                               |
| INTERVAL DAY TO MONTH         | random            |-                               |
| ROW                           | random            | 生成带有随机子字段的行。      |
| ARRAY                         | random            | 生成带有随机元素的 array。    |
| MAP                           | random            | 生成带有随机元素的 map。      |
| MULTISET                      | random            | 生成带有随机元素的 multiset。 |

