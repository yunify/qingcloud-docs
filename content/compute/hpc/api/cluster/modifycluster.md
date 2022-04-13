---
title: "modifycluster"
description: 本小节主要介绍修改集群。 
keyword: ehpc, 修改集群
weight: 30
collapsible: false
draft: false
---

可修改集群名称、描述信息。

## Action

cluster/modifyCluster

## 请求方式

POST

## 请求参数

| 参数         | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                                         |
| :----------- | :--------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| timestamp    | string                                                     | true     | 时间戳                                                       |
| cluster_id   | string                                                     | true     | 需要修改的集群id<ul><li> hpc-xxxx </li><li>ehpc-xxxx</li></ul> |
| zone         | string                                                     | true     | zone id                                                      |
| cluster_name | string                                                     | false    | 变更之后的集群名                                             |
| description  | string                                                     | false    | 变更的集群描述                                               |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | <span style="display:inline-block;width:380px">描述</span> | 取值样例                        |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------- |
| action                                                     | string                                                     | 响应动作                                                   | HpcclusterModifyClusterResponse |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码                  | 0                               |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/modifyCluster
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-h15dp0b1', 'zone': 'jn1a', 'description': '123'}
```

### 响应示例

```json
{
action: "HpcClusterModifyClusterResponse"
ret_code:0
}
```
