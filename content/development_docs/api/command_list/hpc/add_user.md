---
title: "AddUser"
description: 
draft: false
weight: 20
---

### **增加集群用户**

调用adduser可以在当前集群上新增一个集群用户。

### **接口说明**

可在集群的用户&权限组界面新增用户。

### 参数

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| timestamp      | string | true        | 执行当前api时间戳    |
| cluster_id     | string | true        | ladp用户所属的集群id |
| password       | string | true        | 设置新增用户密码     |
| username       | string | true        | 设置新增用户名称     |
| zone           | string | true        | 区域id               |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Sample value | Description |
| --- | --- | --- | --- |
| action | string | HpcClusterListClusterResponse | 响应动作名称 |
| ret_code | int | 0 | 执行成功与否，成功为0，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://hpc.api.shanhe.com:443/api//user/addUser
```

_Example Response_:

```
{action: "HpcUserAddUserResponse",

job_id: "j-2awn7xwq815",

ret_code: 0}
```

**错误码**

| ret_code | name                                     | error info                                                   |
| -------- | ---------------------------------------- | ------------------------------------------------------------ |
| 5000     | ERR_MSG_ADD_HPC_APP_CLUSTERS_USER_FAILED | add hpc cluster [%s] user failed<br>添加HPC集群[%s]用户失败</br> |

