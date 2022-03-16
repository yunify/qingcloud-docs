---
title: "作业实例运行失败"
description: 本小节主要介绍大数据工作台的作业实例运行失败排查步骤。 
keywords: 大数据工作台,常见问题,运行失败
weight: 30
collapsible: false
draft: false
---

在实际使用过程中，可能会出现作业实例`运行失败`的情况，您可以参考以下排查步骤自行检查，若未能解决您的问题，可以提工单联系技术支持。

## 可能原因

- 数据库账号权限不够。
- 作业中数据源连接信息填写错误。

## 排查数据库账号权限

数据库账号需要拥有 SELECT, REPLICATION SLAVE, REPLICATION CLIENT 权限。
- 您可以直接使用高级权限账号。
- 若您使用普通权限账号，需要使用高级权限账号执行命令 `GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON . TO 'username'@'%';`，为普通权限账号授权。

## 排查数据源连接信息

计算集群与数据源集群的网络需要互通。网络连通后，请正确配置数据源的连接信息，包括 IP 地址、用户名、密码等信息。

请参照下表选择合适的网络连通方案。

| 数据源所在网络环境        | 网络连通方案                                |
| :------------- | ------------------------------------------------------------ |
| 具备公网访问能力 |为计算集群绑定的 VPC 配置公网 IP，保证公网连通性。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br>如果使用青云 MySQL Plus 的公网访问功能，还需将 VPC 绑定的公网 IP 添加到数据库白名单中。详细操作请参见[MySQL 白名单管理](/database/mysql/manual/mgt_connect/mgt_whitelist/)。</span>              |
| 在青云 **VPC 私有网络**（与工作空间在同一区域）  |<li>（**推荐**）计算集群绑定与数据源相同的 VPC，内网互通。  <li>计算集群绑定不同的 VPC，需要通过[IP Sec 隧道](/network/vpc/manual/tunnel/ipsec/)、[GRE 隧道](/network/vpc/manual/tunnel/gre/)或[边界路由器](/network/border_router/manual/border_user_guide/)的方式连通两个 VPC。 |
| 在青云 **VPC 私有网络**（与工作空间在不同区域）  |通过[IP Sec 隧道](/network/vpc/manual/tunnel/ipsec/)、[GRE 隧道](/network/vpc/manual/tunnel/gre/)或[边界路由器](/network/border_router/manual/border_user_guide/)的方式，使计算集群与数据源网络互通。 |
| 在青云**基础网络**    |**暂不支持在基础网络**中的数据源。 |
| 在本地 IDC 机房，或其他云环境     | 通过 [VPN](/network/vpc/manual/vpn/) 或[边界路由器](/network/border_router/manual/border_user_guide/)方式，使计算集群与本地 IDC 或其他云环境网络互通。  |
