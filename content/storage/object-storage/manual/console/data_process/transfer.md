---
title: "媒体转码"
date: 2021-07-28T10:08:56+09:00
description: 本小节主要介绍媒体转码相关内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
draft: false
weight: 2
---

## 概述

QingStor 对象存储的媒体转码服务，是对储存在 QingStor 对象存储 Bucket 中的音视频提供转码计算，并将处理结果仍然保存至 QingStor 对象存储中。该功能还支持对音视频进行裁剪。

## 操作步骤

### 创建转码任务

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **数据处理**，选择 **媒体转码**，点击 **开启**：

 ![](/storage/object-storage/_images/data_trans1.png)

3. 进入媒体转码详情页面，点击 **转码任务 > +创建任务**：

 ![](/storage/object-storage/_images/data_trans2.png)

4. 进入媒体转码任务设置页面，用户根据页面提示信息，指定目标文件，即：待操作待文件后，详细页面参数如下，用户根据提示信息，输入相应参数，点击 **提交** 按钮：

 ![](/storage/object-storage/_images/data_trans3.png)

 **说明：**
   - 媒体输入：指定待进行转码的，存储在当前 Bucket 中的多媒体文件。目前仅支持格式为：mp3, mp4, flac, ogg, flv 的文件。
   - 媒体输出：指定转码后的文件的输出目录。
   - 文件名：指定输出后的文件名。若与源文件同名且同路径，则会覆盖源文件。
   - 输出格式：指定转码后的媒体文件输出格式。目前音频支持 mp3、mp4、flac、ogg；视频支持 flv、mp4。

### 查看详情

在媒体转码详情页面，可以添加转码任务，查看收费标准，消费记录以及任务统计等信息。可对转码任务进行精确的管理。

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **数据处理**，选择 **媒体转码**，点击 **开启**：

 ![](/storage/object-storage/_images/data_trans1.png)

3. 进入媒体转码详情页面，点击 **价格**，可查看详细的收费标准以及计费示例：

 ![](/storage/object-storage/_images/data_trans4.png)

4. 在媒体转码详情页面，点击 **消费记录**，可查看详细的消费清单：

 ![](/storage/object-storage/_images/data_trans5.png)

5. 在媒体转码详情页面，点击 **任务统计**，可查看指定时间内的转码任务次数：

 ![](/storage/object-storage/_images/data_trans6.png)

