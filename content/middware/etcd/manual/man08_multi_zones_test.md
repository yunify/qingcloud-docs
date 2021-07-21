---
title: "多可用区部署测试"
draft: false
enableToc: false
weight: 8
---



## 背景信息

[青云QingCloud 升级区域（Region）架构 轻松实现同城多活](https://log.qingcloud.com/archives/3981)

## 注意事项

1. 单节点 etcd 集群仅做开发测试使用，正式使用建议至少 3 节点。 etcd 集群代理节点可根据实际情况创建。
2. **节点**的状态监控界面中 etcd_server_has_leader 表示当前节点是否有 leader ，**1** 表示有，处于无 leader 状态的集群是不能提供服务的，集群会自动重新选举。
   <img src="/middware/etcd/images/node_status.png" alt="node_status" style="zoom:50%;" />

## 测试环境

- 区域：北京 3 区

- etcd 节点：1 CPU， 1G 内存，超高性能型

- Client 节点：pek3c 区，4 CPU， 8G 内存，企业型，Ubuntu Server 16.04.5 LTS 64bit

## 测试方法

使用 etcd 中包含的 [benchmark](https://github.com/etcd-io/etcd/tree/master/tools/benchmark) CLI 工具对 etcd 性能进行测试。不同的操作（Get, Set）分别定量处理，在客户端用操作成功的次数除以时间得到 TPS 。具体方法请参考 [官方文档](https://etcd.io/docs/v3.5/op-guide/performance/)。

### 测试代码

https://github.com/etcd-io/etcd/tree/master/tools/benchmark

写操作：

```
benchmark --endpoints=${HOST_1},${HOST_2},${HOST_3} --conns=30 --clients=30 \
    put --key-size=8 --sequential-keys --total=100000 --val-size=256
```

读操作：

```
benchmark --endpoints=${HOST_1},${HOST_2},${HOST_3} --conns=30 --clients=30 \
    range key0001 --consistency=s --total=1200000
```

## 测试结果

| 集群 / 指标                         | 网络延时 Ping * | 读吞吐量 TPS | 写吞吐量 TPS |
| ----------------------------------- | --------------- | ------------ | ------------ |
| 单可用区部署（pek3c）               | `0.3 ms`        | `~28000`     | `~3500`      |
| 多可用区部署（pek3b, pek3c, pek3d） | `1.6 ms`        | `~20000`     | `~3175`      |

> **说明**：
>
> 网络延时视情况而定，同可用区可能在 `0.1 ~ 0.5 ms` 之间波动，不同可用区之间波动更大一些，一般在 `1 ms` 以上。
