---
title: "add_ck_user"
description: 本小节主要介绍 MySQL Plus 添加分析实例帐号接口。 
keywords: mysql plus 添加 ClickHouse 帐号,add_ck_user，添加分析实例帐号
weight: 21
collapsible: false
draft: false
---


MySQL Plus 通过接入支持 MaterializeMySQL 引擎的 ClickHouse 数据库，可提升 MySQL 查询性能和数据同步的时效性。

为使用新增的分析实例节点，需单独创建分析实例帐号，通过分析实例帐号和密码访问 ClickHouse 数据库。

> **注意**
> 
> 若创建的帐号已存在，该操作会执行失败。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:300px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li>取值 `analysis`，表示分析实例节点角色类型。 | Yes      |
| service        | String | 自定义服务类型。<li>取值 `add_ck_user`，表示创建分析实例帐号。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"passwd":"Passwd@123","host":"::/0","user":"test"} <br>- `passwd` 表示 ClickHouse 帐号密码。密码长度范围 8~32 个字符，必须同时包含大小写字母（a～z，A～Z）、数字（0～9）和特殊字符（@#$%^&*_+-=）。 <br>- `host` 表示允许访问的主机。取值 `::/0` 允许所有主机访问。若需指定多个 IP 或网段，可用分号分隔。<br>- `user` 表示 ClickHouse 帐号名称。不支持添加 `default` 帐号；只能由大小写字母（a～z，A～Z）、数字（0～9）和下划线（ _ ）组成；长度范围 2~26 个字符。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| job_id     | String  | 执行任务的 Job ID。                           |
| service    | String  | 执行任务对应的服务                           |
| ret_code   | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |
| role       | String  | 节点对应的角色。                               |
| action     | String  | 响应动作。                                     |
| cluster_id | String  | 集群 ID 。                                     |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?&action=RunClusterCustomService
&cluster=cl-ouhutv70
&role=analysis
&service=add_ck_user
&service_params=%7B%22Passwd%40123%22%3A%22Zhu1241jie%40%22%2C%22host%22%3A%22%3A%3A%2F0%22%2C%22user%22%3A%22test%22%7D
&zone=sh1a
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'job_id': u'j-i0oox8b5t90',
 u'service': u'add_ck_user',
 u'ret_code': 0, 
 u'role': u'analysis',
 u'action': u'RunClusterCustomServiceResponse',
 u'cluster_id': u'cl-ouhutv70'}"
```
