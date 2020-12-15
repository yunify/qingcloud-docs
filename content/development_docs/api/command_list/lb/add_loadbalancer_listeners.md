---
title: "AddLoadBalancerListeners"
description: 
draft: false
---



给负载均衡器添加一个或多个监听器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer | String | 负载均衡器ID | Yes |
| listeners.n.listener_port | Integer | 监听端口 | Yes |
| listeners.n.listener_protocol | String | 监听协议，目前支持 HTTP ， TCP 和 HTTPS 三种。 当指定监听协议为 HTTPS ，需指定服务证器书ID: server_certificate_id | Yes |
| listeners.n.server_certificate_id | String | 服务器证书 ID | No |
| listeners.n.backend_protocol | String | 后端协议，需要跟监听协议一致 | Yes |
| listeners.n.loadbalancer_listener_name | String | 监听器名称 | No |
| listeners.n.balance_mode | String | 监听器负载均衡方式：支持 roundrobin (轮询)， leastconn (最小连接)和 source (源地址) 三种。<br/>默认为 roundrobin | No |
| listeners.n.session_sticky | String | 会话保持，即拥有同一个 cookie 的请求始终发往同一后台服务器。会话保持提供四种方式: <br/>*   Insert: 由负载均衡器来插入 cookie，此时 cookie 名字若用户指定，将使用负载均衡器的默认 cookie 名字， 而使用者需要提供 cookie 的超时时间. <br/>*   Prefix: 由使用者自己来指定并维护 cookie，此时使用者需要主动向 client 端插入 cookie，并提供过期时间。负载均衡器通过重写该 cookie (在 cookie name 前面加上 server 标题)，借此实现会话保持。当 request 重新转发给后端服务器时，负载均衡器会主动将 server 标题删除，来实现 cookie 到后端服务器的透明。<br/>*   Rewrite: 由使用者自己来指定并维护 cookie，此时使用者需要主动向 client 端插入 cookie，并提供过期时间。负载均衡器通过重写该 cookie (将后端的 cookie value 值替换成负载均衡器的 cookie value 值)，借此实现会话保持。<br/>*   Backend: 由使用者自己来指定并维护 cookie，此时使用者需要主动向 client 端插入 cookie，并提供过期时间。负载均衡器存储后端和 cookie value 的对应值来实现会话保持。<br/>格式（只对 HTTP 协议有意义）：<br/>*   Prefix\|cookie_name，例如: prefix\|sk<br/>*   Insert：insert\|sk\|cookie_timeout，例如：insert\|sk\|3600<br/>*   rewrite\|cookie_name，例如: rewrite\|sk<br/>*  Backend\|cookie_name\|timeout，例如: backend\|sk\|3600, cookie_timeout 可以为 0，表示永远不超时<br/>为空表示禁用会话保持。 | No |
| listeners.n.forwardfor | Integer | 转发请求时需要附加的 HTTP Header。此值是由当前支持的3个附加头字段以“按位与”的方式得到的十进制数：<br/>*   X-Forwarded-For: bit 位是1 (二进制的1)，表示是否将真实的客户端IP传递给后端。 附加选项“获取客户端IP”关闭时，后端 server 得到的 client IP 是负载均衡器本身的 IP 地址。 在开启本功能之后，后端服务器可以通过请求中的 X-Forwarded-For 字段来获取真实的用户IP。<br/>*   QC-LBID: bit 位是2 (二进制的10)，表示 Header 中是否包含 LoadBalancer 的 ID<br/>*   QC-LBIP: bit 位是3 (二进制的100)，表示 Header 中是否包含 LoadBalancer 的公网IP<br/>例如 Header 中包含 X-Forwarded-For 和 QC-LBIP 的话，forwarfor 的值则为:<br/>“X-Forwarded-For \| QC-LBIP”，二进制结果为101，最后转换成十进制得到5。 | No |
| listeners.n.healthy_check_method | String | 监听器健康检查方式。检查方式有 HTTP 和 TCP 两种。格式为:<br/>*   TCP: tcp 。<br/>*   HTTP: http\|url\|host，例如 http\|/index.html 或 http\|/index.html\|vhost.example.com 。<br/>默认是 tcp | No |
| listeners.n.healthy_check_option | String | 监听器健康检查参数配置，只有当启用了健康检查了之后才有效。格式为:<br/>inter \| timeout \| fall \| rise ，表示<br/>检查间隔(2-60s) \| 超时时间(5-300s) \| 不健康阈值(2-10次) \| 健康阈值(2-10次)。<br/>默认是：10\|5\|2\|5 | No |
| listeners.n.listener_option | Integer | 附加选项。此值是由当前支持的2个附加选项以“按位与”的方式得到的十进制数：<br/>*   取消URL校验: bit 位是1 (二进制的1)，表示是否可以让负载均衡器接受不符合编码规范的 URL，例如包含未编码中文字符的URL等<br/>*   获取客户端IP: bit 位是2 (二进制的10)，表示是否将客户端的IP直接传递给后端。 开启本功能后，负载均衡器对与后端是完全透明的。后端主机TCP连接得到的源地址是客户端的IP， 而不是负载均衡器的IP。注意：仅支持受管网络中的后端。使用基础网络后端时，此功能无效。<br/>*   数据压缩: bit 位是4 (二进制的100)， 表示是否使用gzip算法压缩文本数据，以减少网络流量。<br/>*   禁用不安全的加密方式: bit 位是8 (二进制的1000), 禁用存在安全隐患的加密方式， 可能会不兼容低版本的客户端。 | No |
| listeners.n.tunnel_timeout | Integer | 监听器的tunnel超时时间，范围为10 ~ 86400秒，单位为秒。 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_listeners | Array | 新建的监听器ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

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

_Example Response_:

```
{
  "action":"AddLoadBalancerListenersResponse",
  "loadbalancer_listeners":[
    "lbl-1qibwb7u"
  ],
  "ret_code":0
}
```
