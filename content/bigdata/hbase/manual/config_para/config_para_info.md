---
title: "参数介绍"
description: 本小节主要介绍 HBase 常用配置项。 
keywords: HBase 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 HBase 常用配置参数的管理。

> **说明：**
> 
> 更多配置参数说明，请参见 [HBase 官方配置文件](http://hbase.apache.org/book.html#config.files)

本小节主要介绍 AppCenter 中各 HBase 配置参数的含义。 

## 支持的配置参数

|<span style="display:inline-block;width:80px">版本</span> |<span style="display:inline-block;width:120px">取之范围</span>|<span style="display:inline-block;width:420px">版本说明</span>|
|:----|:----|:----|
|   fs.trash.interval    |       >= 0  |  表示被永久删除前在回收站中保留的分钟数，配置为0表示不开启回收站功能。  |
|   dfs.replication      |  1~10        |   表示默认副本数。  |
|   dfs.namenode.handler.count    |      4～200  |  表示 NameNode 处理 RPC 请求的线程数。  |
|   dfs.datanode.handler.count      |  4~200        |   表示 DataNode 处理 RPC 请求的线程数。  |
|   hbase.regionserver.handler.count    |       10～200  |  表示 RegionSever 处理 RPC 请求的线程数。  |
|   hbase.master.handler.count     |  10~200        |   表示 Master 处理 RPC 请求的线程数。  |
|   zookeeper.session.timeout    |   1000～3600000 |  表示 HBase 连接 Zookeeper 的 session timeout 时间。  |
|   hbase.hregion.majorcompaction      |  0~2419200000       |   表示两次自动 Major Compaction 的时间间隔，设为0则禁用自动 Compaction。  |
|   hbase.hstore.blockingStoreFiles    |   1～1000000  |  表示当一个 Store 中的 StoreFiles 达到该值时，会 block 写入，进行 Compaction。  |
|   hbase.regionserver.optionalcacheflushinterval      |  0~86400000        |   表示一个 edit 版本在内存中 cache 的最长时间，超过该时间则自动 flush 到磁盘，设为0则禁用自动 flush。  |
|   hfile.block.cache.size   |   0～0.8 |  表示读缓存 BlockCache 占用的堆内存比例，读多于写可适当增大该值。<li>`hbase.regionserver.global.memstore.size` +` hfile.block.cache.size` <= 0.8  |
|   hbase.regionserver.global.memstore.size      |  0~0.8       |   表示一台 RegionServer 上所有 MemStores 占用的堆内存比例， 写多于读可适当增大该值。<li>`hbase.regionserver.global.memstore.size` + `hfile.block.cache.size` <= 0.8  |
|   hfile.index.block.max.size    |   1～13107200  |  表示 HFile 索引块大小。索引块越小，需要的索引块越多，索引的层级越深；索引块过大，对索引块本身的扫描时间会显著的增加。  |
|   hbase.hregion.max.filesize      |  1~107374182400        |   表示一Region split 触发阈值。当一个 Region 里的所有 HFile 大小超过该值，region 自动 split。  |
|   hbase.master.logcleaner.ttl  |   1～86400000 |  表示预写 log（WAL）过期时间，超过这个时间 Master 会将该 WAL 删除。  |
|   hbase.ipc.server.callqueue.handler.factor      |  0~1       |   表示调用队列个数因子，设为0表示所有的handler共用一个队列，设为1表示每个handler拥有自己的队列。  |
|   hbase.ipc.server.callqueue.read.ratio    |   0～1  |  表示调用 read 请求队列个数因子。<li>设为0表示不去分读写请求的队列，小于0.5表示读请求队列少于写请求队列。<li>设为1表示只有1个写请求队，其他都是读请求。  |
|  hbase.ipc.server.callqueue.scan.ratio      |  0~1        |   表示调用 scan 请求队列个数因子。<li>设为0和1表示在读请求队列中不区分 long-read 和 small-read。<li>小于0.5表示 long-read 数小于 small-read 数。  |
|   hbase.regionserver.msginterval  |   1000～20000 |  表示 ResionServer 给 Master 发送消息的时间间隔，心跳间隔。  |
|   hbase.regionserver.logroll.period      |  60000～86400000       |   表示 HBase 预写log（WAL） roll 的时间间隔，便于后期删除过期 log。  |
|   hbase.regionserver.regionSplitLimit    |   1～2000  |  表示一个 RegionServer 上的 region 数达到这个 limit 后不再 split。  |
|  hbase.balancer.period      | 60000~86400000        |   表示 Master 每隔多久做一次 balance 操作。  |
|   hbase.regions.slop  |   0～1 |  表示 Rebalance 操作的前提条件，如果有 regionserver 上的 region 数超过 average + (average * slop) 则进行 Rebalance。  |
|   io.storefile.bloom.block.size      |  1～1310720       |   表示布隆过滤器块大小。  |
|   hbase.rpc.timeout    |   1000～3600000  |  表示 HBase client 应用 rpc 超时时间。  |
|  hbase.column.max.version      | 1~1000        |   表示新创建列簇的最大版本数。  |
|   hbase.security.authorization  |   - |  表示是否开启安全认证机制。  |
|   qingcloud.hbase.major.compact.hour      |  -1～24       |   表示设置每天手动 Major Compaction 的整点时间，设为-1则取消手动 Compaction。  |
|   qingcloud.phoenix.on.hbase.enable  |   - |  表示是否开启 Phoenix 查询引擎功能。  |
|   phoenix.functions.allowUserDefinedFunctions  |   - |  表示是是否开启 Phoenix UDF。  |
|   phoenix.transactions.enabled  |   - |  表示是否开启 Phoenix ACID 事务。  |
