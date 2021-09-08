---
title: "DeleteUser"
description: 
draft: false
weight: 10
---

### 删除用户

通过`deleteuser`可以删除集群中所增加的用户。

### **接口说明**

可在集群的用户与权限组中选择用户进行删除。

如果集群当前只有admin账户，则没有删除用户的操作，如果有2个以上用户才可以进行删除。

### 参数

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| timestamp      | string | true        | 进行当前api操作的时间戳 |
| cluster_id     | string | true        | ldap用户所属的集群id    |
| username       | string | true        | 需要删除用户的名称      |
| zone           | string | true        | 区域id                  |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Sample value | Description |
| --- | --- | --- | --- |
| action | string | HpcClusterListClusterResponse | 响应动作名称 |
| job_id   | string | j-nmxc59kep40                 | 执行删除用户的工作id                      |
| ret_code | int | 0 | 执行成功与否，成功为0，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://hpc.api.shanhe.com:443/api/user/deleteUser
```

_Example Response_:

```
{action: "HpcUserDeleteUserResponse",

job_id: "j-nmxc59kep40",

ret_code: 0}
```

**错误码**

| ret_code | name                                 | error info                                                   |
| -------- | ------------------------------------ | ------------------------------------------------------------ |
| 5000     | `ERR_MSG_DELETE_CLUSTER_USER_FAILED` | delete cluster user failed：detail：%s<br>删除集群用户失败。详情%s</br> |

