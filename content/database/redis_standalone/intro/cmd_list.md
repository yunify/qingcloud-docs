---
title: "支持的命令"
description: 不同版本 Redis 支持的命令。 
keyword: 支持的命令,命令参考,键值数据库,Redis,Redis Standalone,数据库
weight: 60
collapsible: false
draft: false
---

不同版本的 Redis Standalone 实例对 Redis 命令的支持度有所不同。

## 注释与说明

为便于阅读和内容表达，本文的表格约定使用下述注释：

- **✓** 表示支持该命令。
- **✕** 表示在不支持该命令。
- **⎻** 表示在原生Redis的该版本下，该命令尚未开始支持。
- **config** 表示支持该命令，但需要在控制台修改控制参数支持。

## Connection 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| AUTH       |**✓**     | **✓**   |
| CLIENT CACHING         | **⎻**        | **✓**      |
| CLIENT GETNAME         | **✓**        | **✓**      |
| CLIENT GETREDIR        | **⎻**        | **✓**      |
| CLIENT ID              | **✓**        | **✓**       |
| CLIENT KILL            | **✓**         | **✓**       |
| CLIENT LIST             | **✓**         | **✓**       |
| CLIENT PAUSE            | **✓**         | **✓**         |
| CLIENT REPLY            | **✓**         | **✓**        |
| CLIENT SETNAME           | **✓**      | **✓**             |
| CLIENT TRACKING           | **⎻**           | **✓**        |
| CLIENT UNBLOCK        | **✓**               | **✓**       |
| ECHO                  | **✓**               | **✓**        |
| HELLO                 | **⎻**                | **✓**       |
| PING                  | **✓**                | **✓**       |
| QUIT                | **✓**                  | **✓**        |
| SELECT            | **✓**             | **✓**              |

## Geo 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| GEOADD           | **✓**                                                        | **✓**                                                        |
| GEODIST           | **✓**                                                        | **✓**                                                        |
| GEOHASH            | **✓**                                                        | **✓**                                                        |
| GEOPOS             | **✓**                                                        | **✓**                                                        |
| GEORADIUS         | **✓**                                                        | **✓**                                                        |
| GEORADIUSBYMEMBER    | **✓**                                                        | **✓**                                                        |

## Hashes 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| HDEL            | **✓**                                                        | **✓**                                                        |
| HEXISTS          | **✓**                                                        | **✓**                                                        |
| HGET            | **✓**                                                        | **✓**                                                        |
| HGETALL         | **✓**                                                        | **✓**                                                        |
| HINCRBY         | **✓**                                                        | **✓**                                                        |
| HINCRBYFLOAT    | **✓**                                                        | **✓**                                                        |
| HKEYS            | **✓**                                                        | **✓**                                                        |
| HLEN             | **✓**                                                        | **✓**                                                        |
| HMGET            | **✓**                                                        | **✓**                                                        |
| HMSET             | **✓**                                                        | **✓**                                                        |
| HSCAN            | **✓**                                                        | **✓**                                                        |
| HSET            | **✓**                                                        | **✓**                                                        |
| HSETNX          | **✓**                                                        | **✓**                                                        |
| HSTRLEN         | **✓**                                                        | **✓**                                                        |
| HVALS           | **✓**                                                        | **✓**                                                        |

## HyperLogLog 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| PFADD                                                      | **✓**                                                        | **✓**                                                        | **✓**                                                        |
| PFCOUNT                                                    | **✓**                                                        | **✓**                                                        | **✓**                                                        |
| PFMERGE                                                    | **✓**                                                        | **✓**                                                        | **✓**                                                        |

## Keys 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| DEL             | **✓**                                                        | **✓**                                                        |
| DUMP            | **✓**                                                        | **✓**                                                        |
| EXISTS          | **✓**                                                        | **✓**                                                        |
| EXPIRE          | **✓**                                                        | **✓**                                                        |
| EXPIREAT         | **✓**                                                        | **✓**                                                        |
| KEYS             | **config**                                                   | **config**                                                   |
| MIGRATE          | **✓**                                                        | **✓**                                                        |
| MOVE             | **✓**                                                        | **✓**                                                        |
| OBJECT           | **✓**                                                        | **✓**                                                        |
| PERSIST          | **✓**                                                        | **✓**                                                        |
| PEXPIRE          | **✓**                                                        | **✓**                                                        |
| PEXPIREAT         | **✓**                                                        | **✓**                                                        |
| PTTL              | **✓**                                                        | **✓**                                                        |
| RANDOMKEY        | **✓**                                                        | **✓**                                                        |
| RENAME          | **✓**                                                        | **✓**                                                        |
| RENAMENX        | **✓**                                                        | **✓**                                                        |
| RESTORE          | **✓**                                                        | **✓**                                                        |
| SCAN             | **✓**                                                        | **✓**                                                        |
| SORT             | **✓**                                                        | **✓**                                                        |
| TOUCH           | **✓**                                                        | **✓**                                                        |
| TTL             | **✓**                                                        | **✓**                                                        |
| TYPE            | **✓**                                                        | **✓**                                                        |
| UNLINK         | **✓**                                                        | **✓**                                                        |
| WAIT           | **✓**                                                        | **✓**                                                        |

## Lists 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| BLPOP          | **✓**                                                        | **✓**                                                        |
| BRPOP           | **✓**                                                        | **✓**                                                        |
| BRPOPLPUSH       | **✓**                                                        | **✓**                                                        |
| LINDEX            | **✓**                                                        | **✓**                                                        |
| LINSERT            | **✓**                                                        | **✓**                                                        |
| LLEN               | **✓**                                                        | **✓**                                                        |
| LPOP             | **✓**                                                        | **✓**                                                        |
| LPUSH             | **✓**                                                        | **✓**                                                        |
| LPUSHX            | **✓**                                                        | **✓**                                                        |
| LRANGE            | **✓**                                                        | **✓**                                                        |
| LREM              | **✓**                                                        | **✓**                                                        |
| LSET                | **✓**                                                        | **✓**                                                        |
| LTRIM           | **✓**                                                        | **✓**                                                        |
| RPOP              | **✓**                                                        | **✓**                                                        |
| RPOPLPUSH         | **✓**                                                        | **✓**                                                        |
| RPUSH           | **✓**                                                        | **✓**                                                        |
| RPUSHX          | **✓**                                                        | **✓**                                                        |

## Pub 和 Sub 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| PSUBSCRIBE      | **✓**                                                        | **✓**                                                        |
| PUBLISH         | **✓**                                                        | **✓**                                                        |
| PUBSUB            | **✓**                                                        | **✓**                                                        |
| PUNSUBSCRIBE      | **✓**                                                        | **✓**                                                        |
| SUBSCRIBE          | **✓**                                                        | **✓**                                                        |
| UNSUBSCRIBE        | **✓**                                                        | **✓**                                                        |

## Scripting 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| EVAL            | **✓**                                                        | **✓**                                                        |
| EVALSHA         | **✓**                                                        | **✓**                                                        |
| SCRIPT DEBUG    | **✓**                                                        | **✓**                                                        |
| SCRIPT EXISTS    | **✓**                                                        | **✓**                                                        |
| SCRIPT FLUSH      | **✓**                                                        | **✓**                                                        |
| SCRIPT KILL       | **✓**                                                        | **✓**                                                        |
| SCRIPT LOAD       | **✓**                                                        | **✓**                                                        |

## Sentinel 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| SENTINEL sentinels    | **✓**                                                        | **✓**                                                        |
| SENTINEL get-master-addr-by-name    | **✓**                             | **✓**                                                        |

## Server 命令族

> ⚠️**注意**
>
> Redis 6.x 版本屏蔽了 ACL 命令，但 AppCenter 控制台已经实现了 ACL 访问控制功能。

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| ACL CAT           | **⎻**                                                        | **config**                                                        |
| ACL DELUSER       | **⎻**                                                        |**config**                                                         |
| ACL GENPASS       | **⎻**                                                        |**config**                                                         |
| ACL GETUSER       | **⎻**                                                        | **config**                                                         |
| ACL HELP          | **⎻**                                                        | **config**                                                  |
| ACL LIST          | **⎻**                                                        | **config**                                                     |
| ACL LOAD          | **⎻**                                                        | **config**                                                      |
| ACL LOG            | **⎻**                                                        | **config**                                                      |
| ACL SAVE          | **⎻**                                                        | **config**                                                       |
| ACL SETUSER       | **⎻**                                                        | **config**                                                        |
| ACL USERS         | **⎻**                                                        | **config**                                                        |
| ACL WHOAMI        | **⎻**                                                        | **config**                                                        |
| BGREWRITEAOF       | **config**                                                   | **config**                                                   |
| BGSAVE            | **config**                                                   | **config**                                                   |
| COMMAND           | **✓**                                                        | **✓**                                                        |
| COMMAND COUNT     | **✓**                                                        | **✓**                                                        |
| COMMAND GETKEYS   | **✓**                                                        | **✓**                                                        |
| COMMAND INFO      | **✓**                                                        | **✓**                                                        |
| CONFIG GET        | **config**                                                   | **config**                                                   |
| CONFIG RESETSTAT  | **config**                                                   | **config**                                                   |
| CONFIG REWRITE    | **config**                                                   | **config**                                                   |
| CONFIG SET        | **config**                                                   | **config**                                                   |
| DBSIZE            | **✓**                                                        | **✓**                                                        |
| DEBUG OBJECT      | **config**                                                   | **config**                                                   |
| DEBUG SEGFAULT    | **config**                                                   | **config**                                                   |
| FLUSHALL          | **config**                                                   | **config**                                                   |
| FLUSHDB            | **config**                                                   | **config**                                                   |
| INFO               | **✓**                                                        | **✓**                                                        |
| LASTSAVE          | **✓**                                                        | **✓**                                                        |
| LATENCY DOCTOR    | **✓**                                                        | **✓**                                                        |
| LATENCY GRAPH     | **✓**                                                        | **✓**                                                        |
| LATENCY HELP      | **✓**                                                        | **✓**                                                        |
| LATENCY HISTORY   | **✓**                                                        | **✓**                                                        |
| LATENCY LATEST    | **✓**                                                        | **✓**                                                        |
| LATENCY RESET     | **✓**                                                        | **✓**                                                        |
| LOLWUT            | **✓**                                                        | **✓**                                                        |
| MEMORY DOCTOR     | **✓**                                                        | **✓**                                                        |
| MEMORY HELP       | **✓**                                                        | **✓**                                                        |
| MEMORY MALLOC**⎻** STATS  | **✓**                                                | **✓**                                                        |
| MEMORY PURGE      | **✓**                                                        | **✓**                                                        |
| MEMORY STATS      | **✓**                                                        | **✓**                                                        |
| MEMORY USAGE      | **✓**                                                        | **✓**                                                        |
| MODULE LIST       | **✓**                                                        | **✓**                                                        |
| MODULE LOAD        | **✓**                                                        | **✓**                                                        |
| MODULE UNLOAD       | **✓**                                                        | **✓**                                                        |
| MONITOR           | **✓**                                                        | **✓**                                                        |
| PSYNC             | **✓**                                                        | **✓**                                                        |
| REPLICAOF      | **config**                                                   | **config**                                                   |
| ROLE             | **✓**                                                        | **✓**                                                        |
| SAVE            | **config**                                                   | **config**                                                   |
| SHUTDOWN       | **config**                                                   | **config**                                                   |
| SLAVEOF         | **config**                                                   | **config**                                                   |
| SLOWLOG        | **✓**                                                        | **✓**                                                        |
| SWAPDB          | **✓**                                                        | **✓**                                                        |
| SYNC           | **✓**                                                        | **✓**                                                        |
| TIME          | **✓**                                                        | **✓**                                                        |

## Sets 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| SADD       | **✓**                                                        | **✓**                                                        |
| SCARD    | **✓**                                                        | **✓**                                                        |
| SDIFF     | **✓**                                                        | **✓**                                                        |
| SDIFFSTORE    | **✓**                                                        | **✓**                                                        |
| SINTER     | **✓**                                                        | **✓**                                                        |
| SINTERSTORE    | **✓**                                                        | **✓**                                                        |
| SISMEMBER    | **✓**                                                        | **✓**                                                        |
| SMEMBERS    | **✓**                                                        | **✓**                                                        |
| SMISMEMBER    | **✓**                                                        | **✓** ️                                                       |
| SMOVE         | **✓**                                                        | **✓**                                                        |
| SPOP         | **✓**                                                        | **✓**                                                        |
| SRANDMEMBER     | **✓**                                                        | **✓**                                                        |
| SREM         | **✓**                                                        | **✓**                                                        |
| SSCAN      | **✓**                                                        | **✓**                                                        |
| SUNION        | **✓**                                                        | **✓**                                                        |
| SUNIONSTORE           | **✓**                                                        | **✓**                                                        |

## Sorted Sets 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| BZPOPMAX      | **✓**                                                        | **✓**                                                        |
| BZPOPMIN     | **✓**                                                        | **✓**                                                        |
| ZADD        | **✓**                                                        | **✓**                                                        |
| ZCARD           | **✓**                                                        | **✓**                                                        |
| ZCOUNT         | **✓**                                                        | **✓**                                                        |
| ZINCRBY        | **✓**                                                        | **✓**                                                        |
| ZINTERSTORE    | **✓**                                                        | **✓**                                                        |
| ZLEXCOUNT     | **✓**                                                        | **✓**                                                        |
| ZPOPMAX     | **✓**                                                        | **✓**                                                        |
| ZPOPMIN        | **✓**                                                        | **✓**                                                        |
| ZRANGE            | **✓**                                                        | **✓**                                                        |
| ZRANGEBYLEX      | **✓**                                                        | **✓**                                                        |
| ZRANGEBYSCORE    | **✓**                                                        | **✓**                                                        |
| ZRANK            | **✓**                                                        | **✓**                                                        |
| ZREM              | **✓**                                                        | **✓**                                                        |
| ZREMRANGEBYLEX     | **✓**                                                        | **✓**                                                        |
| ZREMRANGEBYRANK      | **✓**                                                        | **✓**                                                        |
| ZREMRANGEBYSCORE      | **✓**                                                        | **✓**                                                        |
| ZREVRANGE            | **✓**                                                        | **✓**                                                        |
| ZREVRANGEBYLEX        | **✓**                                                        | **✓**                                                        |
| ZREVRANGEBYSCORE      | **✓**                                                        | **✓**                                                        |
| ZREVRANK     | **✓**                                                        | **✓**                                                        |
| ZSCAN         | **✓**                                                        | **✓**                                                        |
| ZSCORE        | **✓**                                                        | **✓**                                                        |
| ZUNIONSTORE        | **✓**                                                        | **✓**                                                        |

## Streams 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| XACK     | **✓**                                                        | **✓**                                                        |
| XADD    | **✓**                                                        | **✓**                                                        |
| XCLAIM   | **✓**                                                        | **✓**                                                        |
| XDEL     | **✓**                                                        | **✓**                                                        |
| XGROUP   | **✓**                                                        | **✓**                                                        |
| XINFO      | **✓**                                                        | **✓**                                                        |
| XLEN            | **✓**                                                        | **✓**                                                        |
| XPENDING     | **✓**                                                        | **✓**                                                        |
| XRANGE      | **✓**                                                        | **✓**                                                        |
| XREAD      | **✓**                                                        | **✓**                                                        |
| XREADGROUP  | **✓**                                                        | **✓**                                                        |
| XREVRANGE   | **✓**                                                        | **✓**                                                        |
| XTRIM       | **✓**                                                        | **✓**                                                        |

## Strings 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| APPEND        | **✓**                                                        | **✓**                                                        |
| BITCOUNT    | **✓**                                                        | **✓**                                                        |
| BITFIELD    | **✓**                                                        | **✓**                                                        |
| BITOP     | **✓**                                                        | **✓**                                                        |
| BITPOS     | **✓**                                                        | **✓**                                                        |
| DECR      **✓**                                                        | **✓**                                                        |
| DECRBY     | **✓**                                                        | **✓**                                                        |
| GET        | **✓**                                                        | **✓**                                                        |
| GETBIT      | **✓**                                                        | **✓**                                                        |
| GETRANGE      | **✓**                                                        | **✓**                                                        |
| GETSET       | **✓**                                                        | **✓**                                                        |
| INCR           | **✓**                                                        | **✓**                                                        |
| INCRBY         | **✓**                                                        | **✓**                                                        |
| INCRBYFLOAT       | **✓**                                                        | **✓**                                                        |
| MGET           | **✓**                                                        | **✓**                                                        |
| MSET           | **✓**                                                        | **✓**                                                        |
| MSETNX           | **✓**                                                        | **✓**                                                        |
| PSETEX          | **✓**                                                        | **✓**                                                        |
| SET              | **✓**                                                        | **✓**                                                        |
| SETBIT           | **✓**            | **✓**                    |
| SETEX           | **✓**           | **✓**                |
| SETNX             | **✓**             | **✓**             |
| SETRANGE         | **✓**            | **✓**            |
| STRALGO         | -                    | **✓**        |
| STRLEN          | **✓**             | **✓**               |

## Transaction 命令族

| <span style="display:inline-block;width:280px">命令</span> |  <span style="display:inline-block;width:120px">5.x 版本</span> | <span style="display:inline-block;width:120px">6.x 版本</span> |
| :-------------- | :---------------------------- | :-----------------|
| DISCARD       | **✓**      | **✓**        |
| EXEC          | **✓**        | **✓**       |
| MULTI          | **✓**        | **✓**        |
| UNWATCH         | **✓**         | **✓**      |
| WATCH           | **✓**           | **✓**         |
