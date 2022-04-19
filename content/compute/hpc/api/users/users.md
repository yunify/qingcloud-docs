---
title: "users"
description: 本小节主要介绍获取集群用户列表可以显示当前集群的用户信息接口。 
keyword: ehpc,用户信息
weight: 20
collapsible: false
draft: false
---

获取集群用户列表可以显示当前集群的用户信息。

## Action

/user

## 请求方式

GET

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                               |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :------------------------------------------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳                                             |
| zone                                                       | string                                                     | true     | 所属区域 id                                        |
| cluster_id                                                 | string                                                     | false    | 需要查询的 hpc 集群 id                             |
| user_id                                                    | string                                                     | false    | 用户 id                                            |
| search_word                                                | string                                                     | false    | 模糊查询支持 keys：[name]                          |
| limit                                                      | int                                                        | false    | 页面需要显示多少条数据，默认10，页面最大可显示100. |
| offset                                                     | int                                                        | false    | 集合偏移量                                         |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                 | 取值样例                 |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ---------------------------------------------------- | ------------------------ |
| action                                                     | string                                                     | api 响应动作名称                                     | HpcUserListUsersResponse |
| total_count                                                | int                                                        | 用户信息个数<br />可以理解为当前集群所拥有的用户个数 | 1                        |
| ret_code                                                   | int                                                        | 执行成功与否<br />成功为0<br />其他值则为错误代码    | 0                        |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                         | 取值样例             |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------------------------ | -------------------- |
| user_set                                                   | list                                                       | 集群用户信息列表                                             |                      |
| cluster_id                                                 | string                                                     | 用户所属集群 id                                              | hpc-qig9xu97         |
| create_time                                                | string                                                     | 用户创建时间                                                 | 2021-08-17T09:12:40Z |
| gid_number                                                 | string                                                     | gid 编号                                                     | 41522                |
| hpcuser_id                                                 | string                                                     | hpc 用户 id                                                  | hpcuser-8a301ir      |
| mod                                                        | string                                                     | 模式                                                         | mod                  |
| nas_mount_point                                            | string                                                     | nas 挂载点                                                   | /public/shanhe/07023 |
| role                                                       | string                                                     | 用户角色类型<br />可能值：<ul><li>boss boss端</li><li>admin 管理员</li><li>member 成员用户/普通用户</li></ul> | member               |
| uid_number                                                 | string                                                     | uid 编号                                                     | 41522                |
| update_time                                                | string                                                     | 用户更新时间                                                 | 2021-08-17T09:12:40Z |
| user_id                                                    | string                                                     | 用户 id                                                      | usr-vceaHsJu         |
| username                                                   | string                                                     | 用户名称                                                     | usr-vceaHsJu         |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/user
&cluster_id=hpc-qing9xu97
&COMMON_PARAMS
```

### 响应示例

```json
{
	action: "HpcUserListUsersResponse"
	ret_code: 0
	total_count: 1
	users_set: [
		{cluster_id: "hpc-qig9xu97"
		create_time: "2021-08-17T09:12:40Z"
		gid_number: "41522"
		hpcuser_id: "hpcuser-8a310ir1"
		mod: null
		nas_mount_point: "/public/shanhe/s0723"
		role: "member"
		uid_number: "41522"
		update_time: "2021-08-17T09:12:40Z"
		user_id: "usr-vceaHsJu"
		username: "usr-vceaHsJu"}]
}
```
