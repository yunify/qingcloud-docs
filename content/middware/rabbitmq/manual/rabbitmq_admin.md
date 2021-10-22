---
title: "rabbitmqadmin 使用示例"
description: test
weight: 20
draft: false
keyword:  QingCloud, RabbitMQ, rabbitmq,  消息队列服务, 消息中间件
---

## 在RabbitMQ管理界面下载

官网参考地址：[http://www.rabbitmq.com/management-cli.html](http://www.rabbitmq.com/management-cli.html)

## client节点上自带rabbitmqadmin工具

> **注意**：rabbitmqadmin工具已经在client节点上配置好了，可以直接使用，若修改了guest 用户，需要自己修改default_options中用户名和密码配置。

## 自己下载或者自定义配置rabbitmqadmin工具方法

> **注意**：可以选择任RabbitMQ节点或者Haproxy节点ip或者Keepalived vip操作使用。

如Keepalived VIP为192.168.0.253（也可以是任意RabbitMQ节点或者Haproxy节点ip）

执行以下命令：

```
wget http://192.168.0.253:15672/cli/rabbitmqadmin

file rabbitmqadmin

chmod +x rabbitmqadmin
```

修改rabbitmqadmin文件default_options中的hostname为任意RabbitMQ节点或者Haproxy节点ip或者Keepalived vip，若修改了guest用户，还需要修改default_options中用户名和密码配置。

## 定义一个queue

> **提示**：durable=true仅表示该队列持久化，并不表示队列中的消息已经持久化。

```
./rabbitmqadmin declare queue name=test durable=true
```

## 查看queues

```
./rabbitmqadmin list queues
```

## 查看channels

```
./rabbitmqadmin list channels
```

## 查看consumers

```
./rabbitmqadmin list consumers
```

## 发送一条消息

```
./rabbitmqadmin publish routing_key=test payload=”just for test”
```

## 消费一条消息

```
./rabbitmqadmin get queue=test requeue=true
```
