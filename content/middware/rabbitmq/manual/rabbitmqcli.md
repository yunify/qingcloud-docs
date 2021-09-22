---
title: "rabbitmqcli 使用示例"
description: test
weight: 16
draft: false
keyword:  QingCloud, RabbitMQ, rabbitmq,  消息队列服务, 消息中间件
---

官网参考地址：[http://www.rabbitmq.com/management-cli.html](http://www.rabbitmq.com/management-cli.html)

> **注意**：使用root/rabbitmq登录client节点，请勿随便使用集群管理命令去管理集群。client使用-n nodename连接集群中的节点，nodename格式为rabbit@hostname，可以在client节点/etc/hosts下看到有哪些host，也可以在rabbitmq的web界面直接看到nodename。

## 添加用户

```
rabbitmqctl -n rabbit@i-1zo2scr7 add_user username password
```

## 删除用户

```
rabbitmqctl -n rabbit@i-1zo2scr7 delete_user username
```

## 创建vhost

```
rabbitmqctl -n rabbit@i-1zo2scr7 add_vhost vhostpath
```

## 清空队列

```
rabbitmqctl -n rabbit@i-1zo2scr7 reset
```

## 停止应用

```
rabbitmqctl -n rabbit@i-1zo2scr7 stop_app
```

## 开启应用

```
rabbitmqctl -n rabbit@i-1zo2scr7 start_app
```

## 更改节点类型

```
rabbitmqctl -n rabbit@i-1zo2scr7 change_cluster_node_type ram
```

> **注意**：更改节点类型需要先关闭app后执行，然后再启动app，正常运行时不建议做集群和节点管理的操作。
