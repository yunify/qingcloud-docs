---
title: "HBase 压缩和数据块编码"
description: 本小节主要介绍 HBase 压缩和数据块编码指南。 
keywords: HBase 压缩,数据库编码
weight: 25
collapsible: false
draft: false
---


## ColumnFamily 上启用压缩

```shell
  cd /opt/hbase

  bin/hbase shell
  
  hbase(main):001:0> create 'test', { NAME => 'cf', COMPRESSION => 'SNAPPY' }
  Created table test
  Took 1.0499 seconds
  => Hbase::Table - test
  hbase(main):002:0> describe 'test'
  Table test is ENABLED
  test
  COLUMN FAMILIES DESCRIPTION
  {NAME => 'cf', VERSIONS => '1', EVICT_BLOCKS_ON_CLOSE => 'false', NEW_VERSION_BEHAVIOR => 'false', KEEP_DELETED_CELLS => 'FALSE', CACHE_DATA_ON_WRITE => 'false', DATA_BLOCK_ENC
  ODING => 'NONE', TTL => 'FOREVER', MIN_VERSIONS => '0', REPLICATION_SCOPE => '0', BLOOMFILTER => 'ROW', CACHE_INDEX_ON_WRITE => 'false', IN_MEMORY => 'false', CACHE_BLOOMS_ON_W
  RITE => 'false', PREFETCH_BLOCKS_ON_OPEN => 'false', COMPRESSION => 'SNAPPY', BLOCKCACHE => 'true', BLOCKSIZE => '65536'}
  1 row(s)
  Took 0.1047 seconds
```

## ColumnFamily 上启用数据块编码

```shell
  hbase(main):003:0> disable 'test'
  Took 1.0723 seconds
  hbase(main):004:0> alter 'test', { NAME => 'cf', DATA_BLOCK_ENCODING => 'FAST_DIFF' }
  Updating all regions with the new schema...
  All regions updated.
  Done.
  Took 1.2715 seconds
  hbase(main):005:0> enable 'test'
  Took 0.7507 seconds
  hbase(main):006:0> describe 'test'
  Table test is ENABLED
  test
  COLUMN FAMILIES DESCRIPTION
  {NAME => 'cf', VERSIONS => '1', EVICT_BLOCKS_ON_CLOSE => 'false', NEW_VERSION_BEHAVIOR => 'false', KEEP_DELETED_CELLS => 'FALSE', CACHE_DATA_ON_WRITE => 'false', DATA_BLOCK_ENC
  ODING => 'FAST_DIFF', TTL => 'FOREVER', MIN_VERSIONS => '0', REPLICATION_SCOPE => '0', BLOOMFILTER => 'ROW', CACHE_INDEX_ON_WRITE => 'false', IN_MEMORY => 'false', CACHE_BLOOMS
  _ON_WRITE => 'false', PREFETCH_BLOCKS_ON_OPEN => 'false', COMPRESSION => 'SNAPPY', BLOCKCACHE => 'true', BLOCKSIZE => '65536'}
  1 row(s)
  Took 0.0509 seconds
```
