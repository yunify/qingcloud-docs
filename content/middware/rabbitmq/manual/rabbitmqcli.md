---
title: "rabbitmqcli命令示例简介"
description: test
weight: 16
draft: false
---

官网参考地址：https://www.rabbitmq.com/man/rabbitmqctl.1.man.html

> **注意**：使用 root/rabbitmq 登录 client 节点，请勿随便使用集群管理命令去管理集群。client 使用 -n nodename 连接集群中的节点，nodename 格式为 rabbit@hostname ，可以在 client节点 /etc/hosts 下看到有哪些 host ，也可以在 rabbitmq 的 web 界面直接看到 nodename。

### 添加用户

```
rabbitmqctl -n rabbit@i-1zo2scr7 add_user username password
```

### 删除用户

```
rabbitmqctl -n rabbit@i-1zo2scr7 delete_user username
```

### 创建 vhost

```
rabbitmqctl -n rabbit@i-1zo2scr7 add_vhost vhostpath
```

### 清空队列

```
rabbitmqctl -n rabbit@i-1zo2scr7 reset
```

### 停止应用

```
rabbitmqctl -n rabbit@i-1zo2scr7 stop_app
```

### 开启应用

```
rabbitmqctl -n rabbit@i-1zo2scr7 start_app
```

### 更改节点类型

```
rabbitmqctl -n rabbit@i-1zo2scr7 change_cluster_node_type ram
```

> **注意**：更改节点类型需要先关闭 app 后执行，然后再启动 app，正常运行时不建议做集群和节点管理的操作。

### 设置镜像队列 HA

```
rabbitmqctl -n rabbit@i-1zo2scr7 set_policy ha-all “^ha.” ‘{“ha-mode”:”all”}’
```

> **注意**：镜像队列会对性能有影响，但是可以实现队列的高可靠，根据需求设置需要高可用的队列。详细请参考：https://www.rabbitmq.com/ha.html。