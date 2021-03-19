---
title: "AddRouterStatics"
description: 
draft: false
---



增加一条或多条路由器规则，规则包括：端口转发、VPN 、DHCP 、隧道、过滤控制。 注意：在增加路由器规则后，你需要执行 [_UpdateRouters_](../update_routers/) 才能使之生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| router | String | 需要增加规则的路由器ID | Yes |
| statics.n.router_static_name | String | 规则名称 | No |
| vxnet | String | vxnet id | Yes only in VPC |
| statics.n.static_type | Integer | 第n条规则的类型。支持的规则类型有：<br/>*   static_type=1：端口转发规则<br/>*   static_type=2：VPN 规则<br/>*   static_type=3：DHCP 选项<br/>*   static_type=4：二层 GRE 隧道<br/>*   static_type=5：过滤控制 (VPC不支持)<br/>*   static_type=6：三层 GRE 隧道<br/>*   static_type=7：三层 IPsec 隧道<br/>*   static_type=8：私网DNS | Yes |
| statics.n.val1 | String | 第n条规则的 val1 值，会根据规则类型的不同，代表不同含义：<br/>*   端口转发：val1 表示源端口。<br/>*   VPN：val1 表示 VPN 类型，目前支持 “openvpn” 、 “pptp” 、”l2tp”，默认值为 “openvpn”。<br/>*   DHCP 选项：val1 表示 DHCP 云服务器ID。<br/>*   二层 GRE 隧道：val1 表示二层隧道的远端 IP 和密钥，如：gre&#124;1.2.3.4&#124;888。<br/>*   过滤控制：val1 表示『源 IP』<br/>*   三层 GRE 隧道：val1 表示远端 IP 、密钥、本地点对点IP、对端点对点IP，格式如：6.6.6.6&#124;key&#124;1.2.3.4&#124;4.3.2.1。<br/>*   三层 IPsec 隧道：val1 表示远端IP（支持接受任意对端，可填 0.0.0.0） 、加密算法(phase2alg&ike，可为空，默认aes)、密钥和远端设备ID（支持接受任意对端设备ID，可填 %any），格式如：1.2.3.4&#124;passw0rd&#124;device-id<br/>*   私网DNS：val1 表示私网域名，比如node1 | Yes |
| statics.n.val2 | String | 第n条规则的 val2 值，会根据规则类型的不同，代表不同含义：<br/>*   端口转发规则：val2 表示目标 IP 。<br/>*   OpenVPN 规则：val2 表示 VPN 服务端口号，默认为1194。<br/>*   PPTP/L2TP VPN 规则：val2 表示用户名和密码，格式为 user:password<br/>*   DHCP 选项：val2 表示 DHCP 配置内容，格式为key1=value1;key2=value2，例如：”domain-name-servers=8.8.8.8;fixed-address=192.168.1.2”。<br/>*   过滤控制：val2 表示『源端口』<br/>*   三层 GRE 隧道：val2 表示目标网络，多个网络间以 “&#124;” 分隔。注意目标网络不能和路由器已有的私有网络重复。<br/>*   三层 IPsec 隧道：val2 表示本地网络，多个网络间以 “&#124;” 分隔。<br/>*   私网DNS：val2 表示IP地址，格式为ip1;ip2，例如：”192.168.1.2;192.168.1.3” | No |
| statics.n.val3 | String | 第n条规则的 val3 值，会根据规则类型的不同，代表不同含义：<br/>*   端口转发规则：val3 表示目标端口号。<br/>*   OpenVPN 规则：val3 表示 VPN 协议，默认为 “udp”。<br/>*   PPTP VPN 规则：val3 表示最大连接数，连接数范围是 1-253。<br/>*   L2TP VPN 规则：val3 表示IPsec预共享密钥(PSK, preshared secrets),可填入任意字符串。<br/>*   过滤控制：val3 表示『目标 IP』<br/>*   三层 IPsec 隧道：val3 表示目标网络，多个网络间以 “&#124;” 分隔。 | No |
| statics.n.val4 | String | 第n条规则的 val4 值，会根据规则类型的不同，代表不同含义：<br/>*   端口转发规则：val4 表示端口转发协议，默认为 “tcp” ，目前支持 “tcp” 和 “udp” 两种协议。<br/>*   VPN 规则(包括 OpenVPN 、PPTP、L2TP)：val4 表示 VPN 客户端的网络地址段，目前支持10.255.x.0/24，x的范围是[0-255]，默认为自动分配。<br/>*   过滤控制：val4 表示『目标端口』<br/>*   三层 IPsec 隧道：val4 表示IPsec隧道模式，默认为”main”，支持 主模式（main） 和 野蛮模式（aggrmode）。 | No |
| statics.n.val5 | String | 第n条规则的 val5 值，会根据规则类型的不同，代表不同含义：<br/>*   OpenVPN VPN 规则：val5 表示 OpenVPN 的验证方式，目前支持 1: 证书验证, 2: 用户名/密码验证, 3: 证书+用户名/密码验证，默认为 “证书验证” 方式。<br/>*   L2TP VPN 规则： val5 表示L2TP服务端口号，默认是1701。<br/>*   过滤控制： val5 表示优先级 | No |
| statics.n.val6 | String | 第n条规则的 val6 值，会根据规则类型的不同，代表不同含义：<br/>*   过滤控制：val6 表示『行为』，包括： “accept” 和 “drop” | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| router_statics | Array | 新增加的路由器规则ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AddRouterStatics
&statics.1.static_type=1
&statics.1.val1=8080
&statics.1.val2=192.168.1.12
&statics.1.val3=8080
&statics.1.val4=tcp
&statics.2.static_type=2
&statics.2.val1=openvpn
&statics.2.val2=1194
&statics.2.val3=tcp
&statics.2.val4=10.255.1.0/24
&statics.3.static_type=3
&statics.3.val1=i-m163jcqw
&statics.3.val2=domain-name-servers=8.8.8.8
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddRouterStaticsResponse",
  "ret_code":0,
  "router_statics":[
    "rtrs-qihmd2vb",
    "rtrs-2w8msd83",
    "rtrs-b3epyxu5"
  ]
}
```
