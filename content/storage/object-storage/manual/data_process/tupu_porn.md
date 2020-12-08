---
title: "图普科技鉴黄服务"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 2
---

# 图普科技鉴黄服务

图普科技鉴黄服务帮助用户判断存储在 QingStor 对象存储中的图片是否为色情。 服务由广州图普网络科技有限公司提供。

开启服务后，每当有图片上传到对象存储成功，匹配指定规则(glob patterns)的图片将会触发鉴黄，鉴黄结果会以 HTTP POST 请求的方式推送到用户所配置的 notify_url。

> 用户的 notify_url 需要能响应如下的 HTTP POST 请求，并返回 HTTP 200 状态码。如果请求超时，会重试 `3` 次，超时时间为 `5s` ，重试间隔为 `500ms` ，之后将放弃此次请求。
>
> QingStor 对象存储数据处理服务不会对图普科技鉴黄的结果进行修改，结果将会放到字段 result 。 可参考 [图普科技的鉴黄服务文档](https://www.tuputech.com/api/response#image) 的接口描述。

## 鉴黄结果

```json
{
    "bucket": ,
    "object": ,
    "result": {
        "code": ,
        "message": ,
        "54bcfc6c329af61034f7c2fc": {
            "fileList": [
                {
                    "rate": ,
                    "label": ,
                    "name": ,
                    "review":
                }
            ]
        },
        "statistic": [

        ],
        "reviewCount": ,
        "nonce": ,
        "timestamp":
    }
}
```

## 参数说明

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| bucket | String | 图片在 QingStor 对象存储中的 Bucket 名。 | Yes |
| object | String | 图片在 QingStor 对象存储中的 Object 名。 | Yes |
| result | Object | 图普科技鉴黄服务所返回的结果。 | Yes |
| 54bcfc6c329af61034f7c2fc | String | 图普科技定义的作为鉴黄任务的 TaskID 。 | Yes |
| fileList | Array | 具体的处理结果列表。 | Yes |
| code | Int | 处理状态：0 调用成功；1 授权失败；2 模型ID错误；3 没有上传文件；4 API版本号错误；5 API版本已弃用；6 secretId 错误；7 任务Id错误，secretId不能调用该任务；8 secretId 状态异常；9 尚未上传证书；100 服务器错误；101 未知错误。 | Yes |
| message | String | 与 code 对应的具体状态描述信息。 | Yes |
| rate | Float | 介于 0-1 间的浮点数，表示该图像被识别为某个分类的概率值，概率越高，识别准确度越高，可参考此值确定需要人工复审的界限。 | Yes |
| label | Int | 介于 0-2 间的整数，表示该图像被判定为哪个分类，其中 0 色情；1 性感；2 正常。 | Yes |
| review | Boolean | 是否需要人工复审该图片，true 需要；false 不需要。 | Yes |
| statistic | Array | 图像机器判定结果统计数组，分别对应判定 label 为 0-3 的数据总量。 | No |
| reviewCount | Int | 需要人工复审的图片数量。 | No |
| nonce | String | 随机数。 | Yes |
| timestamp | Float | 当前鉴黄服务器的 Unix 时间戳。 | Yes |

## 鉴黄结果示例

```json
{
    "bucket": "fakebucket",
    "object": "porn.jpeg",
    "result": {
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
        "code": 0,
        "message": "success",
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
