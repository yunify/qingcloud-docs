---
title: "图普鉴黄"
date: 2020-07-28T10:08:56+09:00
description:
draft: false
weight: 3
---

## 概述

图普科技鉴黄服务可以帮助用户判断存储在 QingStor 对象存储 Bucket 中的图片是否包含有色情信息。该服务由广州图普网络科技有限公司提供。QingStor 对象存储通过无缝对接图谱科技的图像智能审核功能，为用户提供面向图像文件的高精度鉴黄服务，实现对违规内容的有效甄别与管理，帮助用户大幅度提高业务运营效率及合规性。

图普鉴黄服务使用深度学习算法，帮助用户识别存储在 QingStor 对象存储 Bucket 中的图片是否涉黄，并将识别结果划分为确定部分和复审部分，其中确定部分的准确率超过 99.5%；复审部分不超过鉴别数据总量的 5% 。

开启该服务后，每当有图片成功上传至 QingStor 对象存储的 Bucket 时，匹配指定规则的图片将会触发鉴黄，鉴黄结果会以 HTTP POST 请求的方式推送至用户所配置的接收结果地址。QingStor 对象存储不会对图普科技鉴黄的结果进行修改。

图普科技的鉴黄服务可参考 [官网相关文档](http://cloud.doc.tuputech.com/zh/API/image/)。

## 操作步骤


### 开启服务

开启图谱鉴黄服务只需点击 **点击开启** 按钮，并在弹出框中输入参数即可。详细操作步骤如下：

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](../../_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **数据处理**，选择 **图谱鉴黄**，点击 **点击开启**：

 ![](../../_images/data_yellow_pro1.png)

3. 弹出参数设置对话框，根据对话框提示信息，输入对应参数后，点击 **确认**：

 ![](../../_images/data_yellow_pro2.png)

 **说明：**
   - 接收结果地址：当数据处理完成后，QingStor 对象存储会将处理结果以 HTTP POST 方式向接收结果地址发送。要求该地址在接受成功后返回状态码 200 至 QingStor 对象存储。
   - 接收结果地址返回其他状态码至 QingStor 对象存储时，QingStor 对象存储会发起重试，重试次数为 3 次，重试时间间隔为 500ms。该请求超时时间为 5s。
   - 文件名匹配规则：用于设置需要进行数据处理的文件名的规则。匹配规则是基于 Glob Pattern 的模式，多个规则之间使用逗号 `，` 进行分割。


### 查看详情

点击图谱鉴黄，进入详情页面。在这里可以根据需求查看结果说明，价格，消费记录以及配置等四个选项，可以对图谱鉴黄服务进行精确管理。

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](../../_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **数据处理**，选择 **图谱鉴黄**，点击 **打开**：

 ![](../../_images/data_yellow_pro3.png)

3. 进入 **图谱鉴黄** 详情页面，查看 **结果说明**，用户通过这个页面，可以查看接收到的识别结果中的各个字段的含义：

 ![](../../_images/data_yellow_pro4.png)

4. 在 **图谱鉴黄** 详情页面，点击 **价格**，用户可查看该功能的收费标准，详细说明与计费示例参考下图：

 ![](../../_images/data_yellow_pro5.png)

5. 在 **图谱鉴黄** 详情页面，点击 **消费记录**，用户可通过选择查询时间段查看各个月份对应的消费记录，结果用堆叠条形图表示，并将监控点的数据呈现在表格中：

 ![](../../_images/data_yellow_pro6.png)

6. 在 **图谱鉴黄** 详情页面，点击 **配置**，用户可在该页面设置接收结果地址与文件匹配规则，详情参考下图：
 
 ![](../../_images/data_yellow_pro7.png)

## 鉴黄结果

### 结果示例

```json
{
    "bucket": "fakebucket",
    "object": "porn.jpeg",
    "result": {
        "code": 0,
        "message": "success",
        "54bcfc6c329af61034f7c2fc": {
            "fileList": [
                {
                    "label": 2,
                    "name": "porn.jpeg",
                    "rate": 0.9836746454238892,
                    "review": false
                }
            ]
        },

        "nonce": "0.2297668219538047",
        "reviewCount": 0,
        "statistic": [
            0,
            0,
            1
        ],
        "timestamp": 1498647797834.0
    }
}
```

### 参数说明

| 字段名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| bucket | String | 图片在 QingStor 对象存储中的 Bucket 名。 | 是 |
| object | String | 图片在 QingStor 对象存储中的 Object 名。 | 是 |
| result | Object | 图普科技鉴黄服务所返回的结果。 | 是 |
| code | Int | 处理状态：<br>0：调用成功；<br>1：授权失败；<br>2：模型 ID 错误；<br>3：没有上传文件；<br>4：API 版本号错误；<br>5：API 版本已弃用；<br>6：secretId 错误；<br>7：任务 Id 错误，secretId 不能调用该任务；<br>8：secretId 状态异常；<br>9：尚未上传证书；<br>100：服务器错误；<br>101：未知错误。 | 是|
| message | String | 与 code 对应的具体状态描述信息。 | 是 |
| 54bcfc6c329af61034f7c2fc | String | 图普科技定义的作为鉴黄任务的 TaskID 。 | 是 |
| fileList | Array | 具体的处理结果列表。 | 是 |
| rate | Float | 介于 0 ～ 1 之间的浮点数，表示该图像被识别为某个分类的概率值。概率越高，识别准确度越高。可参考此值确定需要人工复审的界限。 | 是 |
| label | Int | 介于 0 ～ 2 之间的整数，表示该图像被判定为哪个分类，其中：<br>0：色情<br>1：性感<br>2：正常 | 是 |
| review | Boolean | 是否需要人工复审该图片。<br>true：需要 <br>false：不需要 | 是 |
| statistic | Array | 图像机器判定结果统计数组，分别对应判定 label 为 0 ～ 2 的数据总量。 | 否 |
| reviewCount | Int | 需要人工复审的图片数量。 | 否 |
| nonce | String | 随机数。 | 是 |
| timestamp | Float | 当前鉴黄服务器的 Unix 时间戳。 | 是 |


