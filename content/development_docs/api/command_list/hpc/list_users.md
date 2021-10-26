---
title: "ListUsers"
description: 
draft: false
weight: 15
---

### 获取当前集群用户列表

调用list-users可以获取当前集群用户列表。

### **接口说明**

获取集群用户列表可以显示当前集群的用户信息。

### 参数

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster_id     | string | false       | 需要查询的hpc集群id       |
| limit          | int    | false       | 集合限制                  |
| offset         | int    | false       | 集合偏移量                |
| search_word    | string | false       | 模糊查询 支持keys：[name] |
| timestamp      | string | true        | 运行当前api时间戳         |
| user_id        | string | false       | 用户id                    |
| zone           | string | true        | 所属区域id                |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Sample value | Description |
| --- | --- | --- | --- |
| action | string | HpcClusterListClusterResponse | 响应动作名称 |
| total_count | int | 1 | 用户信息个数<br>进可以理解为当前集群所拥有的用户个数</br> |
| ret_code | int | 0 | 执行成功与否，成功为0，其他值则为错误代码 |

**Response Item**

| Name            | Type   | Sample value         | Description                                                  |
| --------------- | ------ | -------------------- | ------------------------------------------------------------ |
| user_set        | list   |                      | 集群用户信息列表                                             |
| cluster_id      | string | hpc-qig9xu97         | 用户所属集群id                                               |
| create_time     | string | 2021-08-17T09:12:40Z | 用户创建时间                                                 |
| gid_number      | string | 41522                | gid编号                                                      |
| hpcuser_id      | string | hpcuser-8a301ir      | hpc用户id                                                    |
| mod             | string | mod                  | 模式                                                         |
| nas_mount_point | string | /public/shanhe/07023 | nas挂载点                                                    |
| role            | string | member               | 用户角色类型的可能值：<br>boss boss端</br><br>admin 管理员</br><br>member 成员用户/普通用户</br> |
| uid_number      | string | 41522                | uid编号                                                      |
| update_time     | string | 2021-08-17T09:12:40Z | 用户更新时间                                                 |
| user_id         | string | usr-vceaHsJu         | 用户id                                                       |
| username        | string | usr-vceaHsJu         | 用户名称                                                     |



**Example**

_Example Request_:

```
https://hpc.api.shanhe.com:443/api/user
```

_Example Response_:

```
{action: "HpcUserListUsersResponse"

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

**错误码**

| ret_code | name                                  | error info                                                   |
| -------- | ------------------------------------- | ------------------------------------------------------------ |
| 5000     | `ERR_MSG_GET_HPC_CLUSTER_USER_FAILED` | get hpc cluster[%s] user failed<br>获取hpc集群[%s]用户失败</br> |

