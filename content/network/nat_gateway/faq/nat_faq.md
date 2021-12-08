---
title: "NAT 网关 FAQ"
descriptipn: NAT 网关实例常见问题
draft: false
weight: 1
enableToc: false
keyword: QingCloud, 云计算, 青云, NAT网关, NAT, 常见问题
---

## NAT 网关与 VPC 网络所提供的公网访问功能有何区别？

NAT 网关和 VPC 网络都支持 SNAT 和 DNAT 功能，如果使用 NAT 网关访问公网，则具备更好的转发能力。

当 VPC 流量转发达到最高配置瓶颈，可使用 NAT 网关 DNAT 进行流量转发。

## NAT 网关配置 SNAT、DNAT 规则后，为什么无法通过公网 IP 连通？

首选请确认您是否正确配置 SNAT 、DNAT 规则。若确认无误，仍旧不通，可能是公网 IP 异常。

处理办法：在具备外网访问能力的机器上，使用 `ping {eip}` 命令测试公网 IP 的连通性。若公网 IP 无法 ping 通，可能该公网 IP 被运营商禁用，可更换公网 IP 再次进行尝试。

