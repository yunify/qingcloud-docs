---
title: "create_oss_policies"
description: 本小节主要介绍 ChronusDB 创建存储策略接口。 
keyword: ChronusDB 创建存储策略,创建存储策略
weight: 60
collapsible: false
draft: false
---

ChronusDB 通过创建对象存储策略，并在创建表时添加语句指定对象存储策略，将冷数据存储到对象存储服务磁盘中，实现数据多磁盘存储。

> **注意**
> 
> -开启存储策略将重启集群。为避免数据丢失，请在业务低峰期开启存储策略。
> 
> -当多个表共用一个存储策略时，在对象存储桶的数据统一存在同一目录下，不会按照表进行划分目录，可能对运维不友好。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster        | String | 集群 ID。<li>取值示例 `cl-yxgxofd3`  | Yes      |
| service        | String | 自定义服务类型。<li>取值 `delete_oss_policies`，表示删除存储策略服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"policies_name":"ossp","end_point":"","key_secret":"","key_id":"""} <br>- `policies_name` 表示存储策略名称。<br>- `end_point` 表示对象存储地址。s3 协议的对象存储地址必须以 ‘/’ 结尾 ，例如：http://s3.gd2.qingstor.com/bucketName/path/ 。<br>- `key_id` 表示 API 密钥的 ID。<br>- `key_secret` 表示 API 密钥的私钥。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码。</li></span>  | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| service    | String  | 执行任务对应的服务。                           |
| cluster_id | String  | 集群 ID。                                      |
| action     | String  | 响应动作。                                     |
| job_id     | String  | 执行任务的 Job ID。                            |
| ret_code   | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |

## 示例

### 请求示例

```url
https://api.qingcloud.com/iaas/?access_key_id=CCCVEESNVLHNZFPLUYZX
&action=RunClusterCustomService
&cluster=cl-yxgxofd3
&service=create_oss_policies
&service_params=%7B%22policies_name%22%3A%22ossp%22%2C%22end_point%22%3A%22https%3A%2F%2Fs3.pek3b.qingcloud.com%2Fqingstor%bucketname%2Fpath%2F%22%2C%22key_secret%22%3A%22e1O5aUrS8FhgSwjanP%22%2C%22key_id%22%3A%22TEM%22%7D
&zone=pek3
&<COMMON_PARAMS>
```

### 响应示例

```json
{
    "action": "RunClusterCustomServiceResponse",
    "cluster_id": "cl-ggfkekwg",
    "job_id": "j-2kuqg0giddu",
    "service": "create_oss_policies",
    "ret_code": 0
}
```
