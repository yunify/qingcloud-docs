---
title: "Linux云服务器开启SSH会话保持"
date: 2021-01-30T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## **操作场景**

使用SSH方式登录CentOS 操作系统的弹性云服务器时，过一段时间就会自动断开连接。本节操作介绍如何保持SSH会话持续连接不断开

>说明：
>本节操作涉及重启sshd服务，会造成sshd断开。

### **操作方法**

编辑/etc/ssh/sshd_config文件设置心跳，保持连接。

#### 1.编辑/etc/ssh/sshd_config，添加配置项：

```
ClientAliveInterval 600      
ClientAliveCountMax 10
```

ClientAliveInterval 600 表示每600秒发送一次请求， 从而保持连接。

ClientAliveCountMax 10 表示服务器发出请求后客户端没有响应的次数达到10次，就自动断开连接。

则无响应的SSH客户端将在大约600x10=6000秒后断开连接。

>说明：
>ClientAliveInterval设置超时间隔（以秒为单位），在此间隔之后，如果尚未从客户端接收到任何数据,则sshd将通过加密的通道发送消息以请求客户端的响应。默认值为0，表示这些消息将不会发送到客户端。此选项仅适用于协议版本2。
>
>ClientAliveCountMax设置客户端活动消息的数量，该消息可以在sshd接收不到来自客户端的任何消息的情况下发送。如果在发送客户端活动消息时达到此阈值，则sshd将断开客户端连接，从而终止会话。

#### 2.执行以下命令，重启sshd服务，使配置生效。

- CentOS6操作系统

  ```
  service sshd restart
  ```

- CentOS7操作系统

  ```
  systemctl restart sshd
  ```

  

