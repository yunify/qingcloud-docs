---
title: "configuring_SSL"
description: 本小节主要介绍 MySQL Plus 提升灾备接口。 
keywords: mysql plus 提升灾备,configuring_SSL
weight: 14
collapsible: false
draft: false
---


MySQL Plus 支持开启 SSL 传输加密服务，更多详细介绍可参考 [MySQL SSL](https://dev.mysql.com/doc/refman/5.7/en/creating-ssl-rsa-files.html)。

MySQL Plus 默认`关闭` SSL 传输加密。开启 SSL 连接实现了数据加密传输，但将增加 CPU 消耗和连接响应时间，建议根据业务需要选择是否开启 SSL 传输加密。

> **注意**
> 
> 开启或关闭 SSL 将导致数据库重启，请在业务空闲期执行。

## 服务介绍

SSL（Secure Socket Layer，安全套接层），位于可靠的面向连接的网络层协议和应用层协议之间的一种协议层。SSL 通过互相认证、使用数字签名确保完整性、使用加密确保私密性，以实现客户端与服务器之间的安全连接。开启 SSL 具备以下传输优点：

- 加密认证用户帐号和服务器，保障数据安全发送目标客户端和服务器；
- 加密传输数据，防止数据在传输过程被泄漏；
- 加密数据，确保数据在传输过程中不被篡改，保障数据的完整性。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li>取值 `maininstance`，表示主实例节点角色类型。 | Yes      |
| service        | String | 自定义服务类型。<li>取值 `configuring_SSL`，表示是否开启集群 SSL 加密认证服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"configssl":"ON"} <br>- `configssl` 表示是否开启集群 SSL 加密认证。取值 `NO` 则关闭；取值 `YES` 则开启。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| job_id     | String  | 执行任务的 Job ID。                            |
| service    | String  | 执行任务对应的服务。                           |
| ret_code   | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |
| role       | String  | 节点对应的角色。                               |
| action     | String  | 响应动作。                                     |
| cluster_id | String  | 集群 ID。                                      |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?&action=RunClusterCustomService
&cluster=cl-ouhutv70
&role=maininstance
&service=configuring_SSL
&service_params=%7B%22configssl%22%3A%22ON%22%7D
&zone=sh1a
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'job_id': u'j-g5xds89dhis',
 u'service': u'configuring_SSL', 
 u'ret_code': 0, 
 u'role': u'maininstance',
 u'action': u'RunClusterCustomServiceResponse',
 u'cluster_id': u'cl-ouhutv70'}"
```
