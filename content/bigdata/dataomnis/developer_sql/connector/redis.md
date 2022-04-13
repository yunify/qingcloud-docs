---
title: "示例：自定义 Redis Connector"
description: 本小节主要介绍数据库 Redis 自定义 Connector。 
keywords: 大数据工作台,自定义 Connector,Redis
weight: 101
collapsible: false
draft: false
---

Flink 内置的 Connector 中没有 Redis Connector，本小节以自定义 Redis Connector 为例进行介绍如何开发自定义 Connector。

## 下载自定义 Redis Connector 代码

[下载自定义 Redis Connector 代码](https://github.com/QingCloudAppcenter/Flink-Example/tree/main/connector-demo)。

## 构建 JAR 程序包

将下载的 Connector 代码构建成一个 JAR 包，例如 [flink_connector_redis.jar](https://bigdata-doc.pek3b.qingstor.com/dataomnis/doc/flink-connector-redis-0.8.1.jar) 文件。

## 使用自定义 Redis Connector

1. 上传程序包   
    在资源管理界面，上传已构建的 JAR 程序包（例如 `flink_connector_redis.jar`）。详细操作请参见[上传程序包](/bigdata/dataomnis/manual/data_development/resource/upload)。   
2. 作业引用程序包   
    根据自定义 Redis Connector 中定义的 Source 和 Sink 结构，在 SQL 作业开发面板中进行相应配置。

    Flink SQL 代码示例如下：

    ```sql
    DROP TABLE IF EXISTS redis_dim;
    CREATE TABLE redis_dim
    (
        sex  STRING,
        desc STRING,
        rt AS PROCTIME()
    ) WITH (
        'connector' = 'redis',
        'hostname' = 'localhost',
        'port' = '6379',
        'password' = '123456'
        );

    DROP TABLE IF EXISTS redis;
    CREATE TABLE redis
    (
        id   STRING,
        name STRING,
        sex  STRING,
        PRIMARY KEY (id) NOT ENFORCED
    ) WITH (
        'connector' = 'redis',
        'hostname' = 'localhost',   
        'port' = '6379',
        'password' = '123456',  --redis 密码
        'ttl' = '60' -- second
        );
    ```

3. 选择依赖资源   
    在作业的运行参数界面，**资源引用**选择已上传的 JAR 程序包。

## 自定义 Redis Connector 代码说明

### RedisOutputFormat.java

实现 RichOutputFormat 自定义数据输出规律。

```java
public class RedisOutputFormat<T> extends RichOutputFormat<T> {
    //TODO 通过重写open 方法来初始化所需要的数据源相关连接
    @Override
    public void open(int taskNumber, int numTasks) throws IOException {
        JedisPoolConfig jedisPoolConfig = RedisConnectionUtils.getJedisPoolConfig();
        jedisPool = RedisConnectionUtils.getJedisPool(jedisPoolConfig, redisIp, redisPort, redisPassword);
        LOG.info("Initialize redis success.");
    }

    //TODO 通过重新writeRecord将flink的中的数据转为所需要的数据类型，并对相关数据源进行具体的写入操作
    @Override
    public void writeRecord(T record) throws IOException {
        Tuple2<Boolean, Row> tuple;
        RowData rowData;
        if (record instanceof Tuple2) {
            tuple = (Tuple2<Boolean, Row>) record;
            writeRedis(tuple.f1);
        } else if (record instanceof RowData) {
            rowData = (RowData) record;
            writeRedis(rowData);
        } else {
            throw new FlinkRuntimeException("can not handle record: " + record);
        }
    }
    
    // TODO 释放资源具体逻辑
    @Override
    public void close() throws IOException {
        RedisConnectionUtils.closeJedisPool(jedisPool);
    }
}
```

### RedisSinkFunction.java

- 实现 RichSinkFunction 来定义数据输出逻辑。
- 实现 CheckpointedFunction 来定义数据的 checkpoint 相关逻辑。

```java
public class RedisSinkFunction<T> extends RichSinkFunction<T> implements CheckpointedFunction {
    private final RedisOutputFormat<T> redisOutputFormat;

    public RedisSinkFunction(RedisOutputFormat<T> redisOutputFormat) {
        this.redisOutputFormat = redisOutputFormat;
    }

    // TODO 定义相关数据源具体的初始化逻辑
    @Override
    public void open(Configuration parameters) throws Exception {
        super.open(parameters);
        final RuntimeContext ctx = getRuntimeContext();
        redisOutputFormat.setRuntimeContext(ctx);
        redisOutputFormat.open(ctx.getIndexOfThisSubtask(), ctx.getNumberOfParallelSubtasks());
    }

    // TODO 定义快照相关逻辑
    @Override
    public void snapshotState(FunctionSnapshotContext context) throws Exception {

    }

    // TODO 定义从快照恢复任务的相关逻辑
    @Override
    public void initializeState(FunctionInitializationContext context) throws Exception {

    }

    // TODO 定义数据具体的写入相关逻辑
    @Override
    public void invoke(T value, Context context) throws Exception {
        redisOutputFormat.writeRecord(value);
    }

    // TODO 定义释放资源的相关逻辑
    @Override
    public void close() throws Exception {
        redisOutputFormat.close();
        super.close();
    }
}
```
### RedisLookupFunction.java

继承 TableFunction 从而实现 lookup 相关逻辑(for system_time of xxx on xxx.xx=xxx.xx)

```java
public class RedisLookupFunction extends TableFunction<Row> {
    // TODO 初始化数据源相关逻辑
    @Override
    public void open(FunctionContext context) throws Exception {
        JedisPoolConfig config = RedisConnectionUtils.getJedisPoolConfig();
        jedisPool = RedisConnectionUtils.getJedisPool(config, ip, port, redisPassword);
        if (openCache) {
            if (cacheMaxSize <= 0 || cacheMaxSize > DEFAULT_MAX_SIZE) {
                cacheMaxSize = DEFAULT_MAX_SIZE;
            }
            cache = new LRUMap(this.cacheMaxSize);
        }
    }
    
    // TODO 返回数据类型结果集
    @Override
    public TypeInformation<Row> getResultType() {
        DataType dataType = TableSchema.builder().fields(fieldNames, fieldTypes).build().toRowDataType();
        return (TypeInformation<Row>) TypeConversions.fromDataTypeToLegacyInfo(dataType);
    }

    // TODO 释放资源相关逻辑
    @Override
    public void close() throws Exception {
        RedisConnectionUtils.closeJedisPool(jedisPool);
    }

    // TODO 具体lookup 相关逻辑，通过collect方法收集读取数据
    public void eval(Object... params) {
        Pair<Boolean, Object> pair = null;
        try {
            final String joinKeyVal = String.valueOf(params[0]);
            String redisKey = joinKeyVal;
            String[] values = null;

            if (writeOpen) {
                values = StringUtils.split(joinKeyVal, keyAppendCharacter);
                redisKey = values[values.length - 1];
            }

            pair = getObjectFromRedis(redisKey);

            if (writeOpen && (redisWriteStrategy == RedisWriteStrategy.ALWAYS || redisWriteStrategy == RedisWriteStrategy.WRITE_IF_NOT_EXIST && !pair.getLeft())) {
                setKVToRedis(values);
            }
            collect(Row.of(redisKey, pair.getRight()));
        } catch (Exception e) {
            LOG.error(String.format("redis lookup join failed, params [%s], pair [%s]", Arrays.toString(params),
                    (null == pair ? "null" : pair.getLeft() + ":" + pair.getRight())), e);
        }
    }
}
```
### RedisDynamicTableSource.java

通过实现 LookupTableSource、ScanTableSource 生成数据源类。

> **注意**
> 
> 该类需要加到 resources 目录下，具体请参考 /src/main/resources/org.apache.flink.table.factories.Factory 文件。

```java
public class RedisDynamicTableSource implements LookupTableSource, ScanTableSource {
    
    // TODO 返回封装后的lookupfunction的类
    @Override
    public LookupRuntimeProvider getLookupRuntimeProvider(LookupContext context) {
        String[] keyNames = new String[context.getKeys().length];
        for (int i = 0; i < keyNames.length; i++) {
            final int[] innerKeyArr = context.getKeys()[i];
            Preconditions.checkArgument(innerKeyArr.length == 1, "redis only support non-nested look up keys");
            keyNames[i] = fieldNames[innerKeyArr[0]];
        }
        RedisLookupFunction lookupFunction =
                RedisLookupFunction.builder()
                        .setIp(ip)
                        .setPort(port)
                        .setRedisPassword(redisPassword)
                        .setRedisValueType(redisValueType)
                        .setFieldNames(fieldNames)
                        .setFieldTypes(fieldTypes)
                        .setRedisJoinKeys(keyNames)
                        .setCacheMaxSize(cacheMaxSize)
                        .setOpenCache(openCache)
                        .setKeyAppendCharacter(keyAppendCharacter)
                        .setWriteOpen(writeOpen)
                        .setRedisWriteStrategy(redisWriteStrategy)
                        .build();
        return TableFunctionProvider.of(lookupFunction);
    }
    
    // TODO 定义changelog所支持的操作类型
    @Override
    public ChangelogMode getChangelogMode() {
        return ChangelogMode.newBuilder()
                .addContainedKind(RowKind.INSERT)
                .addContainedKind(RowKind.UPDATE_BEFORE)
                .addContainedKind(RowKind.UPDATE_AFTER)
                .build();
    }

    // TODO 返回读取数据相关的类
    @Override
    public ScanRuntimeProvider getScanRuntimeProvider(ScanContext runtimeProviderContext) {
        return null;
    }

    @Override
    public DynamicTableSource copy() {
        return new RedisDynamicTableSource(
                fieldNames,
                fieldTypes,
                ip,
                port,
                redisPassword,
                redisValueType,
                openCache,
                cacheMaxSize,
                keyAppendCharacter,
                writeOpen,
                redisWriteStrategy);
    }

    @Override
    public String asSummaryString() {
        return "redis source";
    }
}
```
### RedisDynamicTableSink.java

通过实现 DynamicTableSink 生成数据结果类。

```java
public class RedisDynamicTableSink implements DynamicTableSink {
    // TODO 选择changelog支持的操作类型
    @Override
    public ChangelogMode getChangelogMode(ChangelogMode requestedMode) {
        return ChangelogMode.newBuilder()
                .addContainedKind(RowKind.INSERT)
                .addContainedKind(RowKind.UPDATE_BEFORE)
                .addContainedKind(RowKind.UPDATE_AFTER)
                .addContainedKind(RowKind.DELETE)
                .build();
    }

    // TODO 返回写入数据相关的类
    @Override
    public SinkRuntimeProvider getSinkRuntimeProvider(Context context) {
        SinkFunction sinkFunction = new RedisSinkFunction<>(newFormat());
        return SinkFunctionProvider.of(sinkFunction);
    }

    @Override
    public DynamicTableSink copy() {
        return new RedisDynamicTableSink(
                redisIp, redisPort, redisPassword, redisValueType, tableSchema, ttl);
    }

    @Override
    public String asSummaryString() {
        return "redis sink";
    }
}
```
### RedisDynamicTableFactory.java

通过实现 DynamicTableSourceFactory, DynamicTableSinkFactory 来定义数据源数据结果相关的工厂类。

```java
public class RedisDynamicTableFactory implements DynamicTableSourceFactory, DynamicTableSinkFactory {
    
    // TODO 定义数据结果类的初始化逻辑
    @Override
    public DynamicTableSink createDynamicTableSink(Context context) {
        final FactoryUtil.TableFactoryHelper helper = FactoryUtil.createTableFactoryHelper(this, context);
        final ReadableConfig tableOptions = helper.getOptions();
        helper.validateExcept("No");
        return RedisDynamicTableSink.builder()
                .setRedisIp(tableOptions.get(HOSTNAME))
                .setRedisPort(tableOptions.get(PORT))
                .setRedisPassword(tableOptions.get(PASSWORD))
                .setRedisValueType(tableOptions.get(TYPE))
                .setTtl(tableOptions.get(TTL))
                .setTableSchema(context.getCatalogTable().getSchema())
                .build();
    }

    // TODO 定义数据源类的初始化逻辑
    @Override
    public DynamicTableSource createDynamicTableSource(Context context) {
        FactoryUtil.TableFactoryHelper helper = FactoryUtil.createTableFactoryHelper(this, context);
        final ReadableConfig readableConfig = helper.getOptions();
        helper.validateExcept("No");
        return RedisDynamicTableSource.builder()
                .setIp(readableConfig.get(HOSTNAME))
                .setPort(readableConfig.get(PORT))
                .setRedisPassword(readableConfig.get(PASSWORD))
                .setRedisValueType(readableConfig.get(TYPE))
                .setWriteOpen(readableConfig.get(WRITE_OPEN))
                .setRedisWriteStrategy(
                        RedisWriteStrategy.get(readableConfig.get(STORE_KEY_STRATEGY)))
                .setOpenCache(readableConfig.get(OPEN_CACHE))
                .setKeyAppendCharacter(readableConfig.get(KEY_APPEND_CHARACTER))
                .setCacheMaxSize(readableConfig.get(CACHE_SIZE))
                .setFieldNames(context.getCatalogTable().getSchema().getFieldNames())
                .setFieldTypes(context.getCatalogTable().getSchema().getFieldDataTypes())
                .build();
    }

    // TODO 定义 connector 参数对应的名称 'connector' = 'redis'
    @Override
    public String factoryIdentifier() {
        return "redis";
    }

    // TODO 定义必填相关参数
    @Override
    public Set<ConfigOption<?>> requiredOptions() {
        Set<ConfigOption<?>> options = new HashSet<>();
        options.add(HOSTNAME);
        options.add(PORT);
        options.add(PASSWORD);
        options.add(TYPE);
        return options;
    }

    // TODO 定义选填相关参数
    @Override
    public Set<ConfigOption<?>> optionalOptions() {
        Set<ConfigOption<?>> options = new HashSet<>();
        options.add(WRITE_OPEN);
        options.add(STORE_KEY_STRATEGY);
        options.add(KEY_APPEND_CHARACTER);
        options.add(OPEN_CACHE);
        options.add(CACHE_SIZE);
        options.add(TTL);
        return options;
    }
}
```