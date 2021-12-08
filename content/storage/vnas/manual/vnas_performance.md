---
title: "vNAS性能测试"
date: 2021-11-22T17:08:56+09:00
description: 本小节主要介绍vNAS性能测试。
draft: false
weight: 4
keyword: 云计算, 青云, QingCloud, 文件存储, Virtual NAS, vNAS, 性能测试
---

NFS 和 Samba（CIFS）网络共享存储的 IO 性能对当前网络状况有很大的依赖性，即使 vNAS 服务器和客户端同在一个私有网络内部，可能因弹性裸金属服务器所处网络区域的不同，在 IO 性能上会有不同的表现：

### 性能型硬盘，单客户端测试

```
dd bs=64k count=40k if=/dev/zero of=testdata conv=fdatasync
2684354560 bytes (2.7 GB) copied, 24.8957 s, 108 MB/s
```

### 性能型硬盘，多客户端测试

```
dd bs=64k count=40k if=/dev/zero of=testdata conv=fdatasync
2684354560 bytes (2.7 GB) copied, 43.0581 s, 62.3 MB/s
2684354560 bytes (2.7 GB) copied, 42.7729 s, 62.8 MB/s
2684354560 bytes (2.7 GB) copied, 42.9182 s, 62.5 MB/s
```

### 容量型硬盘，单客户端测试

```
dd bs=64k count=40k if=/dev/zero of=testdata conv=fdatasync
2684354560 bytes (2.7 GB) copied, 80.7506 s, 33.2 MB/s
```

### 容量型硬盘，多客户端测试

```
dd bs=64k count=40k if=/dev/zero of=testdata conv=fdatasync
2684354560 bytes (2.7 GB) copied, 217.539 s, 12.3 MB/s
2684354560 bytes (2.7 GB) copied, 180.095 s, 14.9 MB/s
2684354560 bytes (2.7 GB) copied, 192.331 s, 14.0 MB/s
```

> **说明**
>
> 由于网络状况和客户端处理能力都会影响到 vNAS 的 IO 性能，不同客户端的测试结果会有差异，对于 IO 性能和稳定性要求较高的业务，可先评估客户端的 IO 性能是否能满足需要。