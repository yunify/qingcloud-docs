---
title: "deleteUser"
description: 本小节主要介绍删除集群用户接口。 
keyword: ehpc,删除集群用户
weight: 10
collapsible: false
draft: false
---

可在集群的用户与权限组中选择用户进行删除。

如果集群当前只有 admin 账户，则没有删除用户的操作，如果有2个以上用户才可以进行删除

## Action

/user/deleteUser

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                    |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :---------------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳                  |
| cluster_id                                                 | string                                                     | true     | ldap 用户所属的集群  id |
| username                                                   | string                                                     | true     | 需要删除用户的名称      |
| zone                                                       | string                                                     | true     | 区域 id                 |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                         | 取值样例                  |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------------------------ | :------------------------ |
| action                                                     | string                                                     | api 响应动作名称                                             | HpcUserDeleteUserResponse |
| job_id                                                     | string                                                     | 执行删除用户的工作 id                                        | j-nmxc59kep40             |
| ret_code                                                   | int                                                        | 执行成功与否<br />可能值：<ul><li>0  执行成功</li><li>其他值 对应错误代码</li></ul> | 0                         |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/user/deleteUser
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-8jqdq0mz',
                     'username': 'isabel',
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
  action: "HpcUserDeleteUserResponse",
	job_id: "j-nmxc59kep40",
  ret_code: 0
}
```
