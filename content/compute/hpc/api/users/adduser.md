---
title: "adduser"
description: 本小节主要介绍可在集群的用户&权限组界面新增用户接口。 
keyword: EHPC,新增集群用户
weight: 30
collapsible: false
draft: false
---

可在集群的用户&权限组界面新增用户。

## Action

/user/addUser

## 请求方式

POST

## 请求参数

| 参数       | 类型      | 是否必要 | 描述                                                         |
| :--------- | :-------- | :------- | :----------------------------------------------------------- |
| timestamp  | date-time | true     | 时间戳                                                       |
| cluster_id | string    | true     | ladp 用户所属的集群 id                                       |
| password   | string    | true     | 设置新增用户密码，12-30个字符，包括大小写字母、数字和部分字符（包括：!@#%^&()*） |
| username   | string    | true     | 设置新增用户名称，1-8个字符，可包含字母，数字，下划线        |
| mod        | string    | false    | 设置用户目录权限（例如：“700”）                              |
| zone       | string    | true     | 区域 id                                                      |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                  | 取值样例               |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------------------- | :--------------------- |
| action                                                     | string                                                     | 响应动作                                              | HpcUserAddUserResponse |
| job_id                                                     | string                                                     | 操作的 job id                                         | j-2awn7xwq815          |
| ret_code                                                   | int                                                        | 是否执行成功<br />0为执行成功<br />其他值则为错误代码 | 0                      |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/user/addUser
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-8jqdq0mz',
                     'password': 'kUISjs@kkkkkk!',
                     'username': 'isabel',
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
  action: "HpcUserAddUserResponse",
  job_id: "j-2awn7xwq815",
  ret_code: 0
}
```
