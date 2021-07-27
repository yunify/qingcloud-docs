---
title: "MapReduce 导入数据到 HBase"
description: 本小节主要介绍如何通过 MapReduce 导入数据到 HBase。 
keywords: HBase 导入数据,MapReduce
weight: 35
collapsible: false
draft: false
---





通过 MapReduce 服务来批量导入 HDFS 中数据到 HBase。

可通过 DistCp 命令来拷贝不同 HDFS 中的数据，关于 DistCp 更多的详细信息，可参考 [DistCp](http://hadoop.apache.org/docs/r2.7.7/hadoop-distcp/DistCp.html)

## 前提条件 

- 已创建 QingMR 集群，并在 `HBase 客户端` 中在 /opt/hadoop 目录下完成 MapReduce 服务配置。

## 方案简介

使用 MapReduce 导入数据有三种方案：

- 方案一：直接书写 MapReduce 使用 HBase 提供的 JAVA API 从 HDFS 导入到 HBase 表。
  
  特点：只需要一步操作，可自由规整数据，更为简单灵活，但直接写入 HBase 表会对线上服务有一定的性能影响。

- 方案二：书写 MapReduce 将 HDFS 中数据转化为 HFile 格式，再使用 HBase 的 BulkLoad 工具导入到 HBase 表。若数据并未格式化仍需规整则采用该方式。

   特点：需两步操作，耗时工作提前做好，确保对线上服务影响做到最小。

- 方案三：使用 HBase ImportTsv 工具将格式化的 HDFS 数据导入到 HBase 表。若要导入的数据已经是格式化的数据（有固定的分隔符），不需要自己实现 MapReduce 做进一步数据清洗，直接采用该方式。

   特点：需两步操作，耗时工作提前做好，确保对线上服务影响做到最小。
   
## 建表

以下示例通过 HBase Shell 预先建表，均使用 HBase 表 test_import，包含一个column family：content。

```shell
  cd /opt/hbase

  bin/hbase shell

  hbase(main):001:0> create 'test_import', 'content'
  0 row(s) in 1.2130 seconds

  => Hbase::Table - test_import
```

项目若使用 mvn 构建，pom.xml 中增加如下内容：

```shell
  <properties>
    <hbase.version>1.2.6</hbase.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.apache.hbase</groupId>
      <artifactId>hbase-server</artifactId>
      <version>${hbase.version}</version>
    </dependency>
  </dependencies>
```

## 方案一

方案一 MapReduce 代码如下，先创建表，在 Map 中完成数据解析，在 Reduce 中完成入库。Reduce的个数相当于入库线程数。

> **说明：**
> 
> 可自行修改 `job.setNumReduceTasks()` 中 Reduce 数目。

```java
  package com.qingcloud.hbase

  import org.apache.hadoop.conf.Configuration;
  import org.apache.hadoop.fs.Path;
  import org.apache.hadoop.hbase.HBaseConfiguration;
  import org.apache.hadoop.hbase.HColumnDescriptor;
  import org.apache.hadoop.hbase.HTableDescriptor;
  import org.apache.hadoop.hbase.TableName;
  import org.apache.hadoop.hbase.client.*;
  import org.apache.hadoop.hbase.mapreduce.TableMapReduceUtil;
  import org.apache.hadoop.hbase.mapreduce.TableReducer;
  import org.apache.hadoop.io.LongWritable;
  import org.apache.hadoop.io.Text;
  import org.apache.hadoop.mapreduce.Job;
  import org.apache.hadoop.mapreduce.Mapper;
  import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
  import org.apache.hadoop.util.GenericOptionsParser;
  import org.apache.hadoop.hbase.io.ImmutableBytesWritable;

  import java.io.File;
  import java.io.FileInputStream;
  import java.io.IOException;

  public class ImportByMR {

      private static String table = "test_import";

      private static class ImportByMRMapper extends Mapper<LongWritable, Text, Text, Text> {

          @Override
          public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
              String[] sp = value.toString().split(" ");
              if (sp.length < 2) {
                  return;
              }
              context.write(new Text(sp[0]), new Text(sp[1]));
          }
      }

      private static class ImportByMRReducer extends TableReducer<Text, Text, ImmutableBytesWritable> {

          @Override
          public void reduce(Text key, Iterable<Text> value, Context context) throws IOException, InterruptedException {
              byte[] bRowKey = key.toString().getBytes();
              ImmutableBytesWritable rowKey = new ImmutableBytesWritable(bRowKey);

              for (Text t : value) {
                  Put p = new Put(bRowKey);
                  p.setDurability(Durability.SKIP_WAL);
                  p.addColumn("content".getBytes(), "a".getBytes(), t.toString().getBytes());
                  context.write(rowKey, p);
              }
          }
      }

      private static void createTable(Configuration conf) throws IOException {
          TableName tableName = TableName.valueOf(table);
          Connection connection = ConnectionFactory.createConnection(conf);
          Admin admin = connection.getAdmin();
          if (admin.tableExists(tableName)) {
              System.out.println("table exists!recreating.......");
              admin.disableTable(tableName);
              admin.deleteTable(tableName);
          }
          HTableDescriptor htd = new HTableDescriptor(tableName);
          HColumnDescriptor tcd = new HColumnDescriptor("content");
          htd.addFamily(tcd);
          admin.createTable(htd);
      }

      public static void main(String[] argv) throws IOException, ClassNotFoundException, InterruptedException {
          Configuration conf = HBaseConfiguration.create();
          File file = new File("/opt/hbase/conf/hbase-site.xml");
          FileInputStream in = new FileInputStream(file);
          conf.addResource(in);
          createTable(conf);
          GenericOptionsParser optionParser = new GenericOptionsParser(conf, argv);
          String[] remainingArgs = optionParser.getRemainingArgs();

          Job job = Job.getInstance(conf, ImportByMR.class.getSimpleName());
          job.setJarByClass(ImportByMR.class);
          job.setMapperClass(ImportByMRMapper.class);
          TableMapReduceUtil.initTableReducerJob(table, ImportByMRReducer.class, job);
          job.setMapOutputKeyClass(Text.class);
          job.setMapOutputValueClass(Text.class);
          job.setOutputKeyClass(ImmutableBytesWritable.class);
          job.setOutputValueClass(Mutation.class);
          job.setNumReduceTasks(1);
          FileInputFormat.addInputPath(job, new Path(remainingArgs[0]));
          System.exit(job.waitForCompletion(true) ? 0 : 1);
      }
  }
```

hbase-tools-1.0.0.jar 是将上述代码打成的jar包，APP_HOME 是 jar 包所放置的目录，`/user/inputPath` 下是需要导入到HBase中的数据。
数据格式为 rowkey value，两列 tab 分隔。需自行准备后通过 `bin/hdfs dfs -put` 到 HDFS 的 `/user/inputPath` 目录。

依次执行下述命令，执行成功后可简单通过测试一中的 HBase Shell 来验证数据。

```shell
  cd /opt/hadoop

  bin/hadoop jar $APP_HOME/hbase-tools-1.0.0.jar com.qingcloud.hbase.ImportByMR /user/inputPath
```

## 方案二

方案二 MapReduce 代码如下，Map 对数据做进一步处理，Reduce 无需指定，会根据 Map 的 outputValue 自动选择实现。

```java
  package com.qingcloud.hbase

  import org.apache.hadoop.conf.Configuration;
  import org.apache.hadoop.fs.Path;
  import org.apache.hadoop.hbase.*;
  import org.apache.hadoop.hbase.client.*;
  import org.apache.hadoop.hbase.io.ImmutableBytesWritable;
  import org.apache.hadoop.hbase.mapreduce.HFileOutputFormat2;
  import org.apache.hadoop.io.LongWritable;
  import org.apache.hadoop.io.Text;
  import org.apache.hadoop.mapreduce.Job;
  import org.apache.hadoop.mapreduce.Mapper;
  import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
  import org.apache.hadoop.util.GenericOptionsParser;

  import java.io.File;
  import java.io.FileInputStream;
  import java.io.IOException;

  public class ImportByBulkLoad {

      private static String myTable = "test_import";

      private static class ImportByBulkLoadMapper extends Mapper<LongWritable, Text, ImmutableBytesWritable, Put> {

          @Override
          public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
              String[] sp = value.toString().split(" ");
              if (sp.length < 2) {
                  return;
              }
              byte[] bRowKey = sp[0].getBytes();
              ImmutableBytesWritable rowKey = new ImmutableBytesWritable(bRowKey);
              Put p = new Put(bRowKey);
              p.setDurability(Durability.SKIP_WAL);
              p.addColumn("content".getBytes(), "a".getBytes(), sp[1].getBytes());
              context.write(rowKey, p);
          }
      }

      public static void main(String[] argv) throws IOException, ClassNotFoundException, InterruptedException {
          Configuration conf = HBaseConfiguration.create();
          File file = new File("/opt/hbase/conf/hbase-site.xml");
          FileInputStream in = new FileInputStream(file);
          conf.addResource(in);
          GenericOptionsParser optionParser = new GenericOptionsParser(conf, argv);
          String[] remainingArgs = optionParser.getRemainingArgs();
          Job job = Job.getInstance(conf, ImportByBulkLoad.class.getSimpleName());
          job.setJarByClass(ImportByBulkLoad.class);
          job.setMapperClass(ImportByBulkLoadMapper.class);
          job.setMapOutputKeyClass(ImmutableBytesWritable.class);
          job.setMapOutputValueClass(Put.class);
          FileInputFormat.addInputPath(job, new Path(remainingArgs[0]));
          HFileOutputFormat2.setOutputPath(job, new Path(remainingArgs[1]));
          TableName tableName = TableName.valueOf(myTable);
          Connection connection = ConnectionFactory.createConnection(conf);
          Table table = connection.getTable(tableName);
          RegionLocator regionLocator = connection.getRegionLocator(tableName);
          HFileOutputFormat2.configureIncrementalLoad(job, table, regionLocator);
          System.exit(job.waitForCompletion(true) ? 0 : 1);
      }
  }
```

hbase-tools-1.0.0.jar 是将上述代码打成的 jar 包，APP_HOME 是 jar 包所放置的目录，`/user/inputPath` 下是需要导入到HBase中的数据。数据格式为 rowkey value，两列 tab 分隔。

需自行准备后通过 `bin/hdfs dfs -put` 到 HDFS 的 `/user/inputPath` 目录。`/user/outputPath` 是 MapReduce 生成的 HFile 格式的结果。`test_import` 是 HBase 表名。

依次执行下述命令，执行成功后可简单通过测试一中的 HBase Shell 来验证数据。

```shell
  cd /opt/hadoop

  bin/hdfs dfs -rmr /user/outputPath

  export HADOOP_CLASSPATH=`/opt/hbase/bin/hbase classpath`

  bin/hadoop jar $APP_HOME/hbase-tools-1.0.0.jar com.qingcloud.hbase.ImportByBulkLoad /user/inputPath /user/outputPath

  bin/hadoop jar /opt/hbase/lib/hbase-server-<VERSION>.jar completebulkload /user/outputPath test_import
```

## 方案三

方案三无需书写代码，`/user/inputPath` 下是需要导入到 HBase 中的数据。数据格式为 `rowkey value`，两列 tab 分隔。需自行准备后通过 `bin/hdfs dfs -put` 到 HDFS 的 `/user/inputPath` 目录。 `test_import`是 HBase 表名。

依次执行下述命令，执行成功后可简单通过测试一中的 HBase Shell 来验证数据。

```shell
  cd /opt/hadoop

  bin/hdfs dfs -rmr /user/outputPath

  export HADOOP_CLASSPATH=`/opt/hbase/bin/hbase classpath`

  bin/hadoop jar /opt/hbase/lib/hbase-server-<VERSION>.jar importtsv -Dimporttsv.columns=HBASE_ROW_KEY,content:a test_import /user/inputPath
```

或

```shell
  cd /opt/hadoop

  bin/hdfs dfs -rmr /user/outputPath

  cd /opt/hbase

  bin/hbase org.apache.hadoop.hbase.mapreduce.ImportTsv -Dimporttsv.columns=HBASE_ROW_KEY,content:a test_import /user/inputPath
```
