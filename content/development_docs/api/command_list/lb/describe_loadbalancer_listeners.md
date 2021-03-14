---
title: "DescribeLoadBalancerListeners"
description: 
draft: false
---



获取负载均衡器的监听器。

可根据负载均衡器ID，监听器ID 作为过滤条件获取监听器列表。 如果不指定任何过滤条件，默认返回你拥有的负载均衡器下面的所有监听器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_listeners.n | String | 监听器ID | No |
| loadbalancer | String | 负载均衡器ID | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回监听器下的后端服务信息。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_listener_set | Array | JSON 格式的监听器数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的监听器总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| loadbalancer_listener_id | String | 监听器ID |
| loadbalancer_listener_name | String | 监听器名称 |
| backends | Array | <br/>监听器的后端服务列表，每项数据格式为:<br/>{<br/>  "loadbalancer_backend_id": "lbb-1234abcd",<br/>  "loadbalancer_backend_name": "test backend",<br/>  "port": "80",<br/>  "weight": "5",<br/>  "resource_id": "i-1234abcd",<br/>  "loadbalancer_id": "lb-1234abcd",<br/>  "loadbalancer_listener_id": "lbl-1234abcd",<br/>  "create-time": "2014-02-14T00:58:43Z",<br/>}<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
| balance_mode | String | 均衡方式。支持 roundrobin (轮询)， leastconn (最小连接)和 source (源地址) 三种。 |
| session_sticky | String | 会话保持，即拥有同一个 cookie 的请求始终发往同一后台服务器。会话保持提供两种方式:<br/>*   Insert: 由负载均衡器来插入cookie，此时 cookie 名字由负载均衡器来指定， 而使用者只需要提供 cookie 的超时时间.<br/>*   Rewrite: 由使用者自己来指定并维护 cookie，此时使用者需要主动向 client 端插入 cookie，并提供过期时间。负载均衡器通过重写该 cookie (在 cookie name 前面加上 server 标题)，借此实现会话保持。当 request 重新转发给后端服务器时，负载均衡器会主动将 server 标题删除，来实现 cookie 到后端服务器的透明。<br/>格式（只对 HTTP 协议有意义）：<br/>*   Rewrite：prefix\|cookie_name，例如：prefix\|sk<br/>*   Insert：insert\|cookie_timeout，例如：insert\|3600， cookie_timeout 可以为0，表示永远不超时<br/>为空表示禁用会话保持。 |
| create_time | TimeStamp | 监听器创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| forwardfor | Integer | 转发请求时需要的 HTTP Header。此值是由当前支持的3个附加头字段以“按位与”的方式得到的十进制数：<br/>*   X-Forwarded-For: bit 位是1 (二进制的1)，表示是否将真实的客户端IP传递给后端。 一般情况下，后端 server 得到的 client IP 是负载均衡器本身的 IP 地址。 在开启本功能之后，后端服务器可以通过请求中的 X-Forwarded-For 字段来获取真实的用户IP。<br/>*   QC-LBID: bit 位是2 (二进制的10)，表示 Header 中是否包含 LoadBalancer 的 ID<br/>*   QC-LBIP: bit 位是3 (二进制的100)，表示 Header 中是否包含 LoadBalancer 的公网IP<br/>例如 Header 中若要包含 X-Forwarded-For 和 QC-LBIP，则 forwarfor 的值为:<br/>“X-Forwarded-For \| QC-LBIP”，二进制结果为101，最后转换成十进制得到5。 |
| healthy_check_method | String | 监听器健康检查方式。检查方式有 HTTP 和 TCP 两种。格式为:<br/>*   TCP: tcp。<br/>*   HTTP: http\|url\|host ，例如 http\|/index.html 或 http\|/index.html\|vhost.example.com 。<br/>默认是 tcp |
| healthy_check_option | String | 监听器健康检查参数配置，只有当启用了健康检查了之后才有效。格式为:<br/>inter \| timeout \| fall \| rise ，表示<br/>检查间隔(2-60s) \| 超时时间(5-300s) \| 不健康阈值(2-10次) \| 健康阈值(2-10次)。<br/>例如：10\|5\|2\|5 |
| listeners.n.listener_option | Integer | 附加选项。此值是由当前支持的2个附加选项以“按位与”的方式得到的十进制数：<br/>*   取消URL校验: bit 位是1 (二进制的1)，表示是否可以让负载均衡器接受不符合编码规范的 URL，例如包含未编码中文字符的URL等<br/>*   获取客户端IP: bit 位是2 (二进制的10)，表示是否将客户端的IP直接传递给后端。 开启本功能后，负载均衡器对与后端是完全透明的。后端云服务器TCP连接得到的源地址是客户端的IP， 而不是负载均衡器的IP。注意：仅支持受管网络中的后端。使用基础网络后端时，此功能无效。<br/>*   数据压缩: bit 位是4 (二进制的100)， 表示是否使用gzip算法压缩文本数据，以减少网络流量。<br/>*   禁用不安全的加密方式: bit 位是8 (二进制的1000), 禁用存在安全隐患的加密方式， 可能会不兼容低版本的客户端。 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeLoadBalancerListeners
&loadbalancers.1=lb-1234abcd
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeLoadBalancerListenersResponse",
  "total_count":1,
  "loadbalancer_listener_set":[
    {
      "forwardfor":1,
      "loadbalancer_listener_id":"lbl-r3c8ys2a",
      "balance_mode":"roundrobin",
      "listener_protocol":"http",
      "backend_protocol":"http",
      "healthy_check_method":"tcp",
      "healthy_check_option":"2|5|2|2",
      "session_sticky":"insert|3600",
      "loadbalancer_listener_name":null,
      "backends":[
        {
          "loadbalancer_backend_id":"lbb-z0k2bggx",
          "loadbalancer_backend_name":null,
          "weight":5,
          "port":80,
          "resource_id":"i-6rxncvy1",
          "loadbalancer_listener_id":"lbl-r3c8ys2a",
          "loadbalancer_id":"lb-bnq972ht"
          "create_time":"2013-09-30T23:13:01Z",
        },
        {
          "loadbalancer_backend_id":"lbb-zumc7oze",
          "loadbalancer_backend_name":null,
          "weight":5,
          "port":80,
          "resource_id":"i-u1szvwkh",
          "loadbalancer_listener_id":"lbl-r3c8ys2a",
          "loadbalancer_id":"lb-bnq972ht"
          "create_time":"2013-09-30T23:13:01Z",
        }
      ],
      "create_time":"2013-09-30T07:34:07Z",
      "loadbalancer_id":"lb-bnq972ht",
      "listener_port":80,
      "listener_option":2
    },
  ],
  "ret_code":0
}
```
