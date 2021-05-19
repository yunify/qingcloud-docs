---
title: "nat网关配合vpc使用"
description: Test description
weight: 40
draft: false
enableToc: false

---



# 概述

如果使用nat网关访问公网，则具备更好的转发能力，但nat不支持端口转发，隧道等功能，不方便维护，用户如需使用其他功能则需nat配合vpc使用。

# 操作指南

## 1、打通隧道，确保隧道正常

以ipsec隧道为例,ipsec隧道可参考文档：[隧道配置](https://docsv3.qingcloud.com/network/vpc/manual/tunnel/ipsec/)
本端隧道配置如下：
![](../_images/ipsec.png)
隧道本地公网ip为：139.198.174.112；本地内外ip为：172.16.1.0/24；测试主机ip为：172.16.1.2.
隧道对端公网ip为：139.198.6.130;对端内网ip为：192.168.1.0/24；测试主机ip为：192.168.1.5.
双向测试结果如下：
![](../_images/ping1.png)
![](../_images/ping2.png)

## 2、加入nat，通过nat网关具备公网能力
配置nat网关可参考文档：[配置nat网关](https://docsv3.qingcloud.com/network/nat_gateway/manual/nat_user_guide/)
配置完成后可访问公网，但隧道不通，无法通过vpc端口转发能力访问云服务器。
![](../_images/ping3.png)
![](../_images/vpctest.png)
此现象符合预期，因默认路由均走nat网关，不再走vpc。

## 3、nat配合vpc使用
示例背景：nat网关公网：139.198.172.235；nat网关加入私有网路：vxnet-toqcg3c（172.16.1.0/24）;vpc公网：139.198.174.112；vpc加入私有网路：vxnet-toqcg3c（172.16.1.0/24）。

路由表可以配置策略路由实现源地址到目标地址的路由策略。

**示例1、公网走nat，隧道走路由器**

对端隧道内外ip为：192.168.1.0/24，添加策略路由如下：
![](../_images/route1.png)
测试结果如下：
![](../_images/ping4.png)
![](../_images/ping5.png)

**示例2、公网走nat，指定ip走路由器**

此场景适用于平时维护，如通过vpc端口转发登录服务器
本机ip为：106.84.199.46,添加策略路由如下：
![](../_images/route2.png)
测试结果如下：
![](../_images/telnet.png)