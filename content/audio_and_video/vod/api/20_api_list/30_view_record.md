---
title: "查询录制"
keyword: 云计算, 青云, QingCloud, 实时音视频 RTC,查询录制任务
description: 本章节介绍如何使用实时音视频 RTC 的 API 接口查询录制。
draft: false
collapsible: false
weight: 30
---

该接口用于查询录制，最大查询时间为 24 小时。

## 请求路径

/v1/cloudRecord

## 请求方法

GET

## 请求参数

| 参数      | 类型   | 是否必填 | 说明                                                         | 默认值 |
| --------- | ------ | -------- | ------------------------------------------------------------ | ------ |
| app_id    | String | 是       | 应用 ID                                                      | -      |
| channel   | String | 是       | 频道名称                                                     | -      |
| from_hour | int    | 否       | 当天且在当前时间之前多少小时。限制：不能小于 0 且不能小于结束时间。 | 3      |
| to_hour   | int    | 否       | 当天且在当前时间之前多少小时。限制：不能小于0且不能大于起始时间。 | 5      |
| offset    | int    | 否       | 分页查询                                                     | 0      |
| limit     | int    | 否       | 分页查询总条数，最大不能超过 100。                           | 20     |

## 返回值

```
{
    "code":"success",
    "offset":0,
    "limit":20,
    "recinfos":[
        {
            "id":39,
            "project_id":"PHbrnM2Ff",
            "app_id":"34723259bb8f4768bc7a9c7cbb126baa",
            "channel":"crIUxmwHA2",
            "pid":15045,
            "host":"13rtc-rec-gw-bj13103.235.85.758020",
            "status":2,
            "size":0,
            "is_mix":1,
            "url_prefix":"",
            "files":"",
            "acc_key_id":"POAWWUCKNHNGNTHYJTXL",
            "rec_bucket":"sunny-video-recorde",
            "rec_zone":"pek3b",
            "rec_path":"CloudRecordMedia/",
            "created":"2021-11-18 14:56:43",
            "updated":"2021-11-18 14:56:43"
        }
    ],
    "total_count":1
}
```

返回数据说明，如下表所示。

| 参数               | 类型   | 是否必填 | 说明                                |
| ------------------ | ------ | -------- | ----------------------------------- |
| code               | String | 是       | 响应代码                            |
| offset             | int    | 是       | 分页偏移量                          |
| limit              | int    | 是       | 分页，数据条数                      |
| recinfo.id         | int    | 是       | 录制任务 ID                         |
| recinfo.project_id | String | 是       | 项目 ID                             |
| recinfo.app_id     | String | 是       | 应用 ID                             |
| recinfo.channel    | String | 是       | 频道名称                            |
| recinfo.pid        | String | 是       | 进程 ID                             |
| recinfo.host       | String | 是       | 录制服务器地址                      |
| recinfo.status     | String | 是       | 参考：[录制状态说明](#录制状态说明) |
| recinfo.size       | String | 是       | 录制文件大小                        |
| recinfo.is_mix     | String | 是       | 是否合流录制                        |
| recinfo.url_prefix | String | 是       | 暂未使用                            |
| recinfo.files      | String | 是       | 暂未使用                            |
| recinfo.acc_key_id | String | 是       | access key                          |
| recinfo.rec_bucket | String | 是       | 录制存储的bucket名称                |
| recinfo.rec_zone   | String | 是       | 录制所在 zone                       |
| recinfo.rec_path   | String | 是       | 录制存储 bucket 路径                |
| total_count        | int    | 是       | 数据总条数                          |

## 录制状态说明

```
0:  None：无意义
1:  Start：录制进程启动
2:  Recording：正在进行录制
3:  Recorded：录制已完成
4:  Stopping：录制已手动停止，正在进行退出处理
5:  AutoStopping：录制已自动停止，正在进行退出处理
6:  MergingSingleMedia：开始合并单流文件
7:  SingleMediaMerged：单流文件合并完成
8:  PushingToQingstor：开始上传到对象存储
9:  PushedToQingstor：上传到对象存储完成
10: Stopped：整个录制过程处理完毕
11: RepairingMedia：开始修复录制文件（异常处理）
30: RecordProcessCored：录制进程崩溃
31: RecordProcessCoredRepairSuccess：录制进程崩溃处理成功
32: RecordProcessCoredRepairFailed：录制进程崩溃处理失败
50: RepairMediaFailed：录制文件修复失败
51: MergeSingleMediaFailed：合并单流文件失败
52: PushToQingstorFailed：上传到对象存储失败
53: StopRecordProcessFailed：停止录制进程失败
```



