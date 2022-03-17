---
title: "rabbitmq web http 命令使用示例"
description: 本小节主要介绍如何使用 rabbitmq web http 命令。
keyword: 云计算,大数据,消息队列,中间件,RabbitMQ,rabbitmq,消息队列服务,消息中间件,操作指南,rabbitmq web
weight: 24
draft: false
---

官网参考地址：[https://cdn.rawgit.com/rabbitmq/rabbitmq-management/rabbitmq_v3_6_10/priv/www/api/index.html](https://cdn.rawgit.com/rabbitmq/rabbitmq-management/rabbitmq_v3_6_10/priv/www/api/index.html)

## 检查集群健康状态

```
curl -i -u guest:guest http://192.168.0.253:15672/api/healthchecks/node
```

## 创建 vhost

```
curl -i -u guest:guest -H “content-type:application/json” -XPUT http://192.168.0.253:15672/api/vhosts/foo
```

## 授权用户访问 vhost

```
curl -i -u guest:guest -H “content-type:application/json” -XPUT http://192.168.0.253:15672/api/permissions/foo/guest -d ‘{“configure”:”.*”,”write”:”.*”,”read”:”.*”}’
```

## 创建一个 queue ，发送消息，并消费消息

```
curl -i -u guest:guest http://192.168.0.253:15672/api/aliveness-test/foo
```
