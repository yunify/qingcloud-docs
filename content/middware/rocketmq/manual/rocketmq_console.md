---
title: "RocketMQ Console使用示例"
description: test
weight: 12
draft: false
---

在配置[VPN](https://docs.qingcloud.com/product/network/vpn)或[端口转发](https://docs.qingcloud.com/product/network/appcenter_network_config/config_portmapping)后，用户可在浏览器中打开控制台进行操作。比如控制台节点的IP地址是`172.23.5.18`，则打开：`http://172.23.5.18:8080/`，默认用户密码为`admin/password`。

![](../../_images/console_login.png)

![](../../_images/console.png)

下面列举几个常见操作，详情可参见[官方使用文档](https://github.com/apache/rocketmq-externals/blob/master/rocketmq-console/doc/1_0_0/UserGuide_CN.md)。

> **注意**：通过此控制台可以对集群中的实际数据进行增删改，请谨慎操作。

## 创建一个Topic

![](../../_images/create_topic.png)

> **提示**：创建一个Topic，指定Topic所在的broker。

## 发送消息

![](../../_images/send_message.png)

> **提示**：在指定的Topic后面，点“发送消息”按钮，填写消息内容进行发送。

##  查询消息

![](../../_images/search_messages.png)

> **提示**：查询消息，在“消息”选项卡页面，选择Topic和时间范围进行查询，同时可以在查询结果后面查看消息详情。