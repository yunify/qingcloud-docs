---
title: "网络配置"
description: 网络配置
keyword: 青云,anybox,安装指南,网络配置
weight: 50
draft: false
---

## **申请公网 IP** 

如果您需要使用公网IP访问 ANYBOX，首先需申请公网 IP 地址。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **网络服务** > **公网 IP**，进入 **公网 IP**页面。

3. 点击**申请**，弹出提示信息。

   <img src="../../_images/install_prompt.png" style="zoom:50%;" />

4. 若确认提示信息没问题，点击继续申请公网 IP，弹出**申请公网 IP** 页面。

   <img src="../../_images/install_apply_ip.png" style="zoom:50%;" />

5. 根据实际情况配置参数。

6. 点击**提交**，申请公网 IP。

## 绑定公网 IP

1. 在公网 IP 页面，查找到申请的公网 IP。

2. 鼠标右键点击申请的公网 IP，弹出功能列表框。

   <img src="../../_images/install_bind_vpc.png" style="zoom:50%;" />

3. 点击**绑定到 VPC 网络**，弹出选择要绑定的公网 IP 的 VPC 网络窗口。

   <img src="../../_images/install_bind_vpcnet.png" style="zoom:50%;" />

4. 点击**提交**，绑定到 VPC 网络。

   公网 IP 的状态变更为已分配，表示已绑定到 VPC 网络。

## 为 VPC 设置端口转发策略

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **网络服务** > **VPC 网络**，进入 **VPC 网络**页面。

3. 点击已创建的 VPC 网络，进入 VPC 网络详细信息页面。

   <img src="../../_images/install_vpc_port.png" style="zoom:50%;" />

4. 选择**管理配置** > **端口转发**，进入**端口转发**页面。

5. 点击**添加规则**，弹出**添加端口转发规则**窗口。

   若源端口填写时使用的公网 IP 的端口，例如80、8088或其它。内网 IP 填写AnyBox节点的内网 IP，内网端口填写80（固定）。
   
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

