---
title: "DescribeApps"
description: 
draft: false
---

## 接口描述

获取一个或多个应用的信息。

您可以根据应用 ID，名称，标签等作为过滤条件，来获取应用信息。

## 请求参数

| 参数名      | 类型          | 描述                                                         | 是否必填 |
| ----------- | ------------- | ------------------------------------------------------------ | -------- |
| app         | String        | 应用 ID                                                      | 否       |
| app_name    | String        | 应用名称                                                     | 否       |
| category    | String        | 类别，如：database、 bigdata、 container、 shield            | 否       |
| tags        | Array<String> | 标签数组                                                     | 否       |
| app_type    | String        | 应用类型，如：web、 image、 cluster、 license、 sass，默认 web | 否       |
| verbose     | Integer       | 是否返回冗长的信息，若为 1，则返回应用相关其他信息字段，默认为 0 | 否       |
| search_word | String        | 关键字（匹配应用名称，描述，摘要）                           | 否       |
| offset      | Integer       | 数据偏移量，默认 0                                           | 否       |
| limit       | Integer       | 返回数据长度，默认 20，最大 100                              | 否       |
| sort_key    | String        | 结果排序的列                                                 | 否       |
| reverse     | Integer       | 是否逆序，1 为逆序，0 为正序                                 | 否       |

[_公共参数_](../../../../parameters/)

## 返回数据

**公共参数：**

| 名称        | 类型    | 描述                                         |
| ----------- | ------- | -------------------------------------------- |
| action      | String  | 响应动作                                     |
| total_count | Integer | 应用总数量                                   |
| app_set     | Array   | 应用集合                                     |
| ret_code    | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**APP 信息：**

| 名称        | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| app_name    | String | 应用名称               |
| cover_img   | String | 封面图片地址           |
| app_id      | String | 应用 ID                |
| edition     | Object | 系列信息               |
| create_time | String | 创建时间               |
| screenshots | Array  | 截图地址列表           |
| category    | String | 类别                   |
| app_type    | String | 应用类型               |
| status_time | String | 状态时间               |
| status      | String | 应用状态               |
| abstraction | String | 应用摘要               |
| description | String | 应用描述               |
| tags        | Array  | 标签列表               |
| visibility  | String | 可见范围（公开、私有） |
| icon        | String | 图表地址               |
| contact     | String | 开发者联系方式         |
| company_url | String | 开发者公司主页         |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DescribeApps
&app=app-00r26u27
&limit=20
&app_type=cluster
```

**返回示例：**

```json
{
  "action":"DescribeAppsResponse",
  "total_count":1,
  "app_set":[
    {
      "company_url":"https://www.qingcloud.com/",
      "app_id":"app-00r26u27",
      "edition":[
        {
          "edition_id":"default",
          "name":"default",
          "description":"default"
        }
      ],
      "create_time":"2017-04-20T13:55:32Z",
      "screenshots":[
        "ca-35yq08gp",
        "ca-xl65n015",
        "ca-he8rh81t",
        "ca-mp0e587w",
        "ca-qifdpo2y",
        "ca-hq6ycrk9"
      ],
      "app_name":"QingCloud MySQL Plus",
      "category":"database",
      "app_type":"cluster",
      "screenshot_links":[
        "https://pek3a.qingstor.com/attachment-4-appcenter/public/ca-35yq08gp",
        "https://pek3a.qingstor.com/attachment-4-appcenter/public/ca-xl65n015",
        "https://pek3a.qingstor.com/attachment-4-appcenter/public/ca-he8rh81t",
        "https://pek3a.qingstor.com/attachment-4-appcenter/public/ca-mp0e587w",
        "https://pek3a.qingstor.com/attachment-4-appcenter/public/ca-qifdpo2y",
        "https://pek3a.qingstor.com/attachment-4-appcenter/public/ca-hq6ycrk9"
      ],
      "status_time":"2021-12-21T16:04:39Z",
      "status":"active",
      "abstraction":"\u91d1\u878d\u7ea7\u5f3a\u4e00\u81f4\u6027\u3001\u4e3b\u4ece\u79d2\u7ea7\u5207\u6362\u3001\u53cc\u5f15\u64ce\u652f\u6301\u7684 MySQL \u96c6\u7fa4",
      "description":"- QingCloud MySQL Plus \u662f\u91d1\u878d\u7ea7\u9ad8\u53ef\u9760\u7684 MySQL \u96c6\u7fa4\uff1b\n- \u63d0\u4f9b\u4e86 InnoDB \u548c TokuDB \u4e24\u5927\u4e8b\u52a1\u5f15\u64ce\uff1b\n- \u4e3b\u4ece\u5f00\u542f Semi-sync\uff0c\u4e25\u683c\u4fdd\u8bc1\u8282\u70b9\u95f4\u7684\u6570\u636e\u4e00\u81f4\u6027\uff1b\n- \u4f7f\u7528 Raft \u534f\u8bae\u7ba1\u7406\u96c6\u7fa4\u4e3b\u4ece\u8282\u70b9\uff0c\u6545\u969c\u65f6\u53ef\u5b9e\u73b0\u79d2\u7ea7\u4e3b\u4ece\u5207\u6362\uff0c\u4fdd\u969c\u4e1a\u52a1\u8fde\u7eed\u6027\uff1b\n- \u96c6\u7fa4\u4e3a\u4e00\u4e3b\u591a\u4ece\u67b6\u6784\uff0c\u9ed8\u8ba4\u4e24\u4e2a\u4ece\u8282\u70b9\uff0c\u6700\u5927\u652f\u6301\u516d\u4e2a\u4ece\u8282\u70b9\u3002",
      "tags":[],
      "icon":"ca-j0r9swvj",
      "contact":"",
      "cover_img":"",
      "icon_link":"https://pek3a.qingstor.com/attachment-4-appcenter/public/ca-j0r9swvj"
    }
  ],
  "ret_code":0
}
```

