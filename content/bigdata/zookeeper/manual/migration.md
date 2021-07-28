---
title: "数据迁移"
description: 本小节主要介绍如何迁移数据至 ZooKeeper 集群。 
keywords: ZooKeeper 数据迁移,
weight: 04
collapsible: false
draft: false
---


ZooKeeper 的数据可借助 [zkcopy](https://github.com/ksprojects/zkcopy)  在不同的 ZooKeeper 集群间进行迁移。

本小节简要介绍如何将把 /zk-test 下的数据从源集群迁移到目标集群。

## 操作步骤

1. 获取源集群节点 IP。

   假设源集群包含3个节点：192.168.0.7, 192.168.0.9, 192.168.0.8

   源集群中包含路径为 /zk-test 的 znode。

2. 获取目标集群节点 IP。

   目标集群包含3个节点：192.168.0.6, 192.168.0.5, 192.168.0.12

3. 新建能联通两个集群环境的虚拟机，并运行如下命令获取 zkcopy 的 docker 映像。

   ```shell
   docker pull ksprojects/zkcopy
   ```

4. 迁移 /zk-test中数据至目标集群。

   ```shell
   docker run --rm -it ksprojects/zkcopy --source 192.168.0.7:2181,192.168.0.9:2181,192.168.0.8:2181/zk-test --target 192.168.0.6:2181,192.168.0.5:2181,192.168.0.12:2181/zk-test
   ```
