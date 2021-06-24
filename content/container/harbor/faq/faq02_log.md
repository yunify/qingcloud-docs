---
title: "如何查看日志"
draft: false
enableToc: false
weight: 2
---

- **`Harbor 1.7.6 - QingCloud 1.3.0` （含）版本之前**

  1.登录**日志节点**的 VNC 。

  > **说明**：登录默认用户名：**ubuntu** ，密码：**p12cHANgepwD**。

  <img src="/container/harbor/_images/faq02_lognode.png" alt="faq02_lognode" style="zoom:50%;" />

  2.进入到 `/var/log/harbor`  目录下查看。

  <img src="/container/harbor/_images/faq02_login_vnc.png" alt="faq02_login_vnc" style="zoom:50%;" />

- **`Harbor 1.9.3 - QingCloud 1.5.0` （含）版本之后**

  在浏览器输入：`http://<日志节点 IP>` 即可查看，如图所示：
  
  ![harbor-use-log-file-online](/container/harbor/_images/harbor-use-log-file-online.png)

> **说明**：
>
> 由于资源主机所在网络无法直接与外网连通，所以需要配置 [VPN](/network/vpc/manual/vpn/) 或配置 VPC 端口转发。



