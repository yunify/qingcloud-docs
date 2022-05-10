---
title: "AddLoadBalancerListeners"
description: 给负载均衡器添加监听器的 API 接口说明。
keyword: 负载均衡器API,添加监听器
weight: 1
draft: false
---

给负载均衡器添加一个或多个监听器。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer | String | 负载均衡器 ID。 | Yes |
| listeners.n.listener_port | Integer | 监听端口。 | Yes |
| listeners.n.listener_protocol | String | 监听协议。<br/>目前支持 HTTP ， TCP 和 HTTPS 三种。 <br/>当指定监听协议为 HTTPS ，需指定服务证器书 ID: `server_certificate_id`。 | Yes |
| listeners.n.server_certificate_id | String | 服务器证书 ID。 | No |
| listeners.n.backend_protocol | String | 后端协议，需要跟监听协议一致。 | Yes |
| listeners.n.loadbalancer_listener_name | String | 监听器名称。 | No |
| listeners.n.balance_mode | String | 监听器负载均衡方式。<br/>支持以下三种：<ul><li> roundrobin ：轮询</li> <li>  leastconn：最小连接</li> <li>  source：源地址</li> </ul>默认为 roundrobin。 | No |
| listeners.n.session_sticky | String | 会话保持，即拥有同一个 cookie 的请求始终发往同一后台服务器。会话保持提供四种方式: <br/><ul><li>Insert: 由负载均衡器来插入 cookie，此时 cookie 名字若用户指定，将使用负载均衡器的默认 cookie 名字， 而使用者需要提供 cookie 的超时时间。</li> <li> Prefix: 由使用者自己来指定并维护 cookie，此时使用者需要主动向 client 端插入 cookie，并提供过期时间。负载均衡器通过重写该 cookie (在 cookie name 前面加上 server 标题)，借此实现会话保持。当 request 重新转发给后端服务器时，负载均衡器会主动将 server 标题删除，来实现 cookie 到后端服务器的透明。</li> <li> Rewrite: 由使用者自己来指定并维护 cookie，此时使用者需要主动向 client 端插入 cookie，并提供过期时间。负载均衡器通过重写该 cookie (将后端的 cookie value 值替换成负载均衡器的 cookie value 值)，借此实现会话保持。</li> <li>Backend: 由使用者自己来指定并维护 cookie，此时使用者需要主动向 client 端插入 cookie，并提供过期时间。负载均衡器存储后端和 cookie value 的对应值来实现会话保持。</li> </ul>格式（只对 HTTP 协议有意义）：<ul><li>Prefix\|cookie_name，例如: prefix\|sk</li> <li>insert\|sk\|cookie_timeout，例如：insert\|sk\|3600</li> <li>rewrite\|cookie_name，例如: rewrite\|sk</li> <li>backend\|cookie_name\|timeout，例如: backend\|sk\|3600</li> </ul>cookie_timeout 可以为 0，表示永远不超时，为空表示禁用会话保持。 | No |
| listeners.n.forwardfor | Integer | 转发请求时需要附加的 HTTP Header。此值是由当前支持的 3 个附加头字段以“按位与”的方式得到的十进制数：<br/>*   X-Forwarded-For: bit 位是 1 (二进制的1)，表示是否将真实的客户端IP传递给后端。 附加选项“获取客户端IP”关闭时，后端 server 得到的 client IP 是负载均衡器本身的 IP 地址。 在开启本功能之后，后端服务器可以通过请求中的 X-Forwarded-For 字段来获取真实的用户 IP。<br/>*   QC-LBID: bit 位是 2 (二进制的10)，表示 Header 中是否包含 LoadBalancer 的 ID。<br/>*   QC-LBIP: bit 位是 3 (二进制的100)，表示 Header 中是否包含 LoadBalancer 的公网 IP。<br/>例如 Header 中包含 X-Forwarded-For 和 QC-LBIP 的话，forwarfor 的值则为:“X-Forwarded-For \| QC-LBIP”，二进制结果为101，最后转换成十进制得到 5。 | No |
| listeners.n.healthy_check_method | String | 监听器健康检查方式。检查方式有 HTTP 和 TCP 两种。格式为:<br/>*   TCP: tcp 。<br/>*   HTTP: http\|url\|host，例如 http\|/index.html 或 http\|/index.html\|vhost.example.com 。<br/>默认是 TCP。 | No |
| listeners.n.healthy_check_option | String | 监听器健康检查参数配置，只有当启用了健康检查了之后才有效。格式为:<br/>inter \| timeout \| fall \| rise，表示<br/>检查间隔(2-60s) \| 超时时间(5-300s) \| 不健康阈值(2-10次) \| 健康阈值(2-10次)。<br/>默认是：10\|5\|2\|5 | No |
| listeners.n.listener_option | Integer | 附加选项。此值是由当前支持的2个附加选项以“按位与”的方式得到的十进制数：<br/>*   取消URL校验: bit 位是 1 (二进制的1)，表示是否可以让负载均衡器接受不符合编码规范的 URL，例如包含未编码中文字符的 URL 等<br/>*   获取客户端IP: bit 位是 2 (二进制的10)，表示是否将客户端的IP直接传递给后端。 开启本功能后，负载均衡器对与后端是完全透明的。后端云服务器 TCP 连接得到的源地址是客户端的 IP， 而不是负载均衡器的 IP。注意：仅支持受管网络中的后端。使用基础网络后端时，此功能无效。<br/>*   数据压缩: bit 位是 4 (二进制的100)， 表示是否使用 gzip 算法压缩文本数据，以减少网络流量。<br/>*   禁用不安全的加密方式: bit 位是 8 (二进制的 1000), 禁用存在安全隐患的加密方式， 可能会不兼容低版本的客户端。 | No |
| listeners.n.tunnel_timeout | Integer | 监听器的 tunnel 超时时间，范围为10 ~ 86400 秒，单位为秒。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| loadbalancer_listeners | Array | 新建的监听 ID 列表。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=AddLoadBalancerListeners
&loadbalancer=lb-1234abcd
&listeners.1.listener_port=80
&listeners.1.listener_protocol=tcp
&listeners.1.backend_protocol=tcp
&listeners.1.balance_mode=roundrobin
&listeners.1.session_sticky=insert|3600
&listeners.1.healthy_check_method=http|/index.html
&listeners.1.healthy_check_option=10|5|2|5
&listeners.1.listener_option=2
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"AddLoadBalancerListenersResponse",
  "loadbalancer_listeners":[
    "lbl-1qibwb7u"
  ],
  "ret_code":0
}
```
