---
title: "rabbitmq web http 命令使用示例"
description: test
weight: 24
draft: false
---

官网参考地址：[https://cdn.rawgit.com/rabbitmq/rabbitmq-management/rabbitmq_v3_6_10/priv/www/api/index.html](https://cdn.rawgit.com/rabbitmq/rabbitmq-management/rabbitmq_v3_6_10/priv/www/api/index.html)

## 检查集群健康状态

```
curl -i -u guest:guest http://192.168.0.253:15672/api/healthchecks/node
```

## 创建vhost

```
curl -i -u guest:guest -H “content-type:application/json” -XPUT http://192.168.0.253:15672/api/vhosts/foo
```

## 授权用户访问vhost

```
curl -i -u guest:guest -H “content-type:application/json” -XPUT http://192.168.0.253:15672/api/permissions/foo/guest -d ‘{“configure”:”.*”,”write”:”.*”,”read”:”.*”}’
```

## 创建一个queue ，发送消息，并消费消息

```
curl -i -u guest:guest http://192.168.0.253:15672/api/aliveness-test/foo
```
