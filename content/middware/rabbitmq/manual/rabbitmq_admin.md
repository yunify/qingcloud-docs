---
title: "rabbitmqadmin命令行客户端工具示例简介"
description: test
weight: 20
draft: false
---

### 在 RabbitMQ 管理界面下载

官网参考地址：http://www.rabbitmq.com/management-cli.html

### client 节点上自带 rabbitmqadmin 工具

> **注意**：rabbitmqadmin 工具已经在 client 节点上配置好了，可以直接使用，若修改了guest 用户，需要自己修改 default_options 中用户名和密码配置。

### 自己下载或者自定义配置 rabbitmqadmin 工具方法

> **注意**：可以选择任意 RabbitMQ 节点 或者 Haproxy 节点 ip 或者 Keepalived vip 操作 使用。

如Keepalived VIP 为 192.168.0.253 (也可以是任意 RabbitMQ 节点 或者 Haproxy 节点 ip)

执行以下命令：

```
wget http://192.168.0.253:15672/cli/rabbitmqadmin

file rabbitmqadmin

chmod +x rabbitmqadmin
```

修改 rabbitmqadmin文件 default_options 中的 hostname 为 任意 RabbitMQ 节点 或者 Haproxy 节点 ip 或者 Keepalived vip，若修改了guest 用户，还需要修改 default_options 中用户名和密码配置。

### 定义一个 queue

> **提示**：durable=true 仅表示该队列持久化，并不表示队列中的消息已经持久化。

```
./rabbitmqadmin declare queue name=test durable=true
```

### 查看 queues

```
./rabbitmqadmin list queues
```

### 查看 channels

```
./rabbitmqadmin list channels
```

### 查看 consumers

```
./rabbitmqadmin list consumers
```

### 发送一条消息

```
./rabbitmqadmin publish routing_key=test payload=”just for test”
```

### 消费一条消息

```
./rabbitmqadmin get queue=test requeue=true
```