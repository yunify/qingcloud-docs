---
title: "modifyuser"
description: 本小节主要介绍修改集群用户密码接口。 
keyword: EHPC,修改集群用户密码
weight: 40
collapsible: false
draft: false
---

修改集群用户密码，12-30个字符，大小写字母、数字及字符(!@#$%^&()*)。

可以自行组合，也可以自动生成。自行生成代码前提满足以上条件。

## Action

/user/modifyUser

## 请求方式

POST

## 请求参数

| 参数         | 类型      | 是否必要 | 描述            |
| :----------- | :-------- | :------- | :-------------- |
| timestamp    | date-time | true     | 时间戳          |
| cluster_id   | string    | true     | 用户所在集群 id |
| new_password | string    | true     | 新密码          |
| username     | string    | true     | 用户名          |
| zone         | string    | true     | zone id         |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                       | 取值样例                  |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------ | :------------------------ |
| action                                                     | string                                                     | 响应动作                                   | HpcUserModifyUserResponse |
| ret_code                                                   | int                                                        | 执行成功与否，成功为 0，其他值则为错误代码 | 0                         |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/user/modifyUser
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-8jqdq0mz',
                     'new_password': '%e^S5kW1*&fR',
                     'username': 'isabel',
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcUserModifyUserResponse"
	ret_code: 0
}
```
