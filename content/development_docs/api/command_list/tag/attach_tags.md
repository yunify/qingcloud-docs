---
title: "AttachTags"
description: 
draft: false
---



将标签绑定到资源上, 绑定之后，获取资源列表（例如 DescribeInstances） 的时候，可以传参数tags来过滤该标签的资源, 获取资源列表(例如DescribeInstances), 资源详情也会包含已绑定的标签信息

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_tag_pairs.n | Array | 资源标签对, 每项参数可见下面 [Resource Tag Pairs Item](#resource-tag-pairs-item) | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

**Resource Tag Pairs Item**

| Name | Type | Description |
| --- | --- | --- |
| tag_id | String | 标签 ID |
| resource_type | String | 资源类型, 见下面 [支持的资源列表](#id1) |
| resource_id | String | 资源 ID |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AttachTags
&resource_tag_pairs.1.tag_id=tag-hp55o9i5
&resource_tag_pairs.1.resource_type=instance
&resource_tag_pairs.1.resource_id=i-5yn6js06
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AttachTagsResponse",
  "ret_code":0
}
```

**支持的资源列表**

| Name | Type |
| --- | --- |
| 云服务器 | instance |
| 硬盘 | volume |
| SSH 密钥 | keypair |
| 防火墙 | security_group |
| 私有网络 | vxnet |
| 公网 IP | eip |
| 路由器 | router |
| 负载均衡 | loadbalancer |
| Virtual SAN | s2_server |
| 备份 | snapshot |
| 关系数据库 | rdb |
| Mongo DB | mongo |
| 缓存 | cache |
| Zookeeper | zookeeper |
| 队列 | queue |
| Spark | spark |
