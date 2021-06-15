---
title: "其他常见问题"
draft: false
enableToc: false
weight: 10
---

## VNC 登录账户和密码是什么？

默认用户名：**ubuntu** ，密码：**p12cHANgepwD**，拥有 sudo 权限。

## 如何查看日志？

日志文件以天为单位存放在**日志节点**的`/var/log/harbor` 路径下。

- `Harbor 1.7.1 - QingCloud 1.2.0` 之前的版本

  登录**日志节点**的 VNC，使用命令行进行查看。

- `Harbor 1.9.3 - QingCloud 1.5.0` 版本

  在浏览器输入云平台资源管理界面上显示的日志节点 IP 获取(端口80)，如图所示
  ![harbor-use-log-file-online](/container/harbor/_images/harbor-use-log-file-online.png)

> **说明**：
>
> 由于资源主机所在网络无法直接与外网连通，所以需要配置 [VPN](/network/vpc/manual/vpn/) 或配置 VPC 端口转发。

## 使用 HTTPs 连接 Harbor 超时怎么办？

确认前端负载均衡器的 https 监听器中**负载均衡器监听协议通过 X-Forwarded-Proto 头字段获取负载均衡器的监听协议**已勾选。

![harbor-create-add-proto](/container/harbor/_images/harbor-create-add-proto.png)

