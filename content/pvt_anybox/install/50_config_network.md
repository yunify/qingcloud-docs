---
title: "网络配置"
description: 网络配置
keyword: 青云,anybox,安装anybox,网络配置
weight: 50
draft: false
---

## 为 VPC 设置端口转发策略

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **网络服务** > **VPC 网络**，进入 **VPC 网络**页面。

3. 点击已创建的 VPC 网络，进入 VPC 网络详细信息页面。

   <img src="../../_images/install_vpc_port.png" style="zoom:50%;" />

4. 选择**管理配置** > **端口转发**，进入**端口转发**页面。

5. 点击**添加规则**，弹出**添加端口转发规则**窗口。

   > 注意：
   >
   > 源端口：80
   >
   > 内网 IP：AnyBox节点的内网 IP
   >
   > 内网端口：80

   <img src="../../_images/install_port_forward.png" style="zoom:50%;" />

6. 点击**提交**，完成端口转发规则添加。

7. 在页面右上角点击**应用修改**，使端口转发规则生效。

## 配置防火墙

默认情况下 AppCenter 集群的端口是全部打开的，所以仅需要配置 VPC 网络的防火墙，确保源端口流量可以通过。

资源配置说明：默认需要添加防火墙规则，允许 80 端口通过，在配置防火墙转发策略时，不需要填写目的 IP/源 IP（不写公网 IP）。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **安全** > **Web 应用防火墙**，进入 **Web 应用防火墙**页面。

   <img src="../../_images/install_firewall.png" style="zoom:50%;" />

3. 点击**创建**，弹出**创建域名防护策略**窗口。

   <img src="../../_images/install_add_firewall.png" style="zoom:50%;" />

4. 点击**提交**，完成防火墙的创建。

