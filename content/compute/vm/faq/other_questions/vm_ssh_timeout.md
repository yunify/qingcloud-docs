---
title: "SSH 客户端连接 timeout 问题 ？ "
description: Test description
draft: false
enableToc: false
weight: 120
---

ssh 的默认配置为了安全考虑，当发现客户端一段时间内没有输入，就会断开这个 session， 这给使用者带来些许不便。解决这个问题有两种办法：

- 修改 ssh server 端配置

  ```
  # vi /etc/ssh/sshd_config
  ClientAliveInterval 60
  ClientAliveCountMax 3
  ```

  修改后请重启 ssh server。

- 修改 ssh client 端配置

  ```
  # vi /etc/ssh/ssh_config
  ServerAliveInterval 60
  ServerAliveCountMax 3
  ```
