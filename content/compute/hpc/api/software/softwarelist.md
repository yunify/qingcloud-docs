---
title: "softwarelist"
description: 本小节主要介绍查看安装在集群上的软件接口。 
keyword: 查看软件,api
weight: 60
collapsible: false
draft: false
---

查看安装在集群上的软件。

## Action

/software/list

## 请求方式

GET

## 请求参数

| 参数        | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                                         |
| :---------- | :--------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| zone        | string                                                     | true     | zone id                                                      |
| timestamp   | date-time                                                  | true     | 时间戳                                                       |
| user_id     | string                                                     | false    | 用户 id                                                      |
| class_id    | string                                                     | false    | 软件类 id                                                    |
| search_word | string                                                     | false    | 关键词搜索                                                   |
| deploy_mode | int                                                        | false    | HPC 软件部署方式。<ul><li>1：预装</li><li>2：按需部署</li></ul> |
| platform    | int                                                        | false    | HPC软件支持平台。<ul><li>1：HPC</li><li> 2：EHPC </li><li> 3：HPC 和 EHPC </li></ul> |
| offset      | int                                                        | false    | 数据偏移量                                                   |
| limit       | int                                                        | false    | 页面个数限制                                                 |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                   |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | :------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcSoftwareGetListResponse |
| hpcsw_set                                                  | list                                                       | 集群软件以 list 形式返回                  |                            |
| total_count                                                | int                                                        | 返回软件总数                              | 59                         |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                          |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/software/list
&COMMON_PARAMS
```

### 响应示例

```json
{
	action: "HpcSoftwareGetListResponse"
	hpcsw_set: {CDO: {hpcsws: [{category: "", update_time: "2021-11-10T18:21:38", hash: "",…}]},…}
	ret_code: 0
	total_count: 59
}
```
