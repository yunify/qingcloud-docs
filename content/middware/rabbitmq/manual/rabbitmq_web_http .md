---
title: "rabbitmq web http 命令示例简介"
description: test
weight: 24
draft: false
---

官网参考地址：https://cdn.rawgit.com/rabbitmq/rabbitmq-management/rabbitmq_v3_6_10/priv/www/api/index.html

### 检查集群健康状态

```
curl -i -u guest:guest http://192.168.0.253:15672/api/healthchecks/node
```

### 创建 vhost

```
curl -i -u guest:guest -H “content-type:application/json” -XPUT http://192.168.0.253:15672/api/vhosts/foo
```

### 授权用户访问 vhost

```
curl -i -u guest:guest -H “content-type:application/json” -XPUT http://192.168.0.253:15672/api/permissions/foo/guest -d ‘{“configure”:”.*”,”write”:”.*”,”read”:”.*”}’
```

### 创建一个 queue ，发送消息，并消费消息

```
curl -i -u guest:guest http://192.168.0.253:15672/api/aliveness-test/foo
```

## 设置镜像队列 HA

官网参考地址：https://www.rabbitmq.com/ha.html

- 推荐使用 web 界面来设置，比较方便
- 熟悉的话,也可以使用 HTTP API