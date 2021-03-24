---
title: "数据迁移"
description: Test description
weight: 5
---

## redis-port

如果有 **Redis(2.6.0 <= version < 5.0.0)** 数据库数据想迁移到 **Redis on QingCloud** 上，可以使用以下方法进行迁移:

- **redis-port**： 您可以使用 [redis_port](https://github.com/CodisLabs/redis-port/releases) 来迁移。 下载程序后，执行 `./redis-sync -m [源地址:端口号] -t [目标地址:端口号] `，如下图，提示完成[100%]，即可终止程序。此工具也支持rdb文件导入，比较灵活，详细说明请参见 https://github.com/CodisLabs/redis-port 。

![redis_port](../../_images/migrate.png)


## 从 RDB 文件恢复数据

Redis 5.0.7 - QingCloud 2.2.0_ 新增了「从RDB文件恢复数据」的操作。

> 注意：
>
> 1. 为方便迁移，该功能仅限目标集群为单节点时使用，多节点集群操作会报错
> 2. 该操作会完全删除目标集群的所有数据，且不可恢复，对于需要保留目标集群数据的，请自行备份
> 3. 目标集群的内存配置需要跟源集群一致或者更大，否则容易造成数据丢失
> 4. 数据量较大的情况下，恢复的时间可能会较长，请耐心等待，在这期间不要做任何操作，防止干扰数据加载

- 先打开 WebConsole，如图，将「配置参数」项的 「开启文件查看控制台」 设置为 `true`

![webconsole](../../_images/open_webconsole.png)

- 使用下面的命令将您生成的 RDB 文件上传至集群节点

```bash
curl -T <源 RDB 文件路径> http://<username>:<password>@<目标节点ip>:80/upload/dump.rdb
```

- 点击 「从 RDB 文件恢复数据」，等待过程执行完毕

![restoreData](../../_images/restoreData.png)

- 检查数据，迁移完毕。