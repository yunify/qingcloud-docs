---
title: "start_caddy"
description: 本小节主要介绍 ClickHouse 开启日志服务接口。 
keyword: ClickHouse 开启日志服务,start_caddy
weight: 50
collapsible: false
draft: false
---

ClickHouse 默认关闭 Caddy Server 日志服务。若需下载数据库日志，您需在集群中对相应节点启动日志服务端，再在 HTTP 服务端预览或下载日志。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-yxgxofd3`  | Yes      |
| service        | String | 自定义服务类型。<li>取值 `start_caddy`，表示启动集群日志服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"http_password":"test1","http_user":"test1"} <br>- `http_password` 表示访问 HTTP 日志用户密码。不能以数字开头。密码长度范围 8~32 个字符；必须同时包含大小写字母（a～z，A～Z）、数字（0～9）和特殊字符（@#$%^&*_+-=）。<br>- `http_user` 表示访问 HTTP 日志用户名称。不支持添加 `root`、`ubuntu`、`http`、`mysql`；只能由大小写字母（a～z，A～Z）、数字（0～9）和下划线（ _ ）组成；长度范围 2~26 个字符。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码。</li></span>  | Yes |

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
 &service=start_caddy
 &service_params=%7B%22http_password%22%3A%22test1%22%2C%22http_user%22%3A%22test1%22%7D
 &zone=pek3
&<COMMON_PARAMS>
```

### 响应示例

```json
{
    "action": "RunClusterCustomServiceResponse",
    "cluster_id": "cl-ggfkekwg",
    "job_id": "j-3ibxmg743ob",
    "service": "start_caddy",
    "ret_code": 0
}
```
