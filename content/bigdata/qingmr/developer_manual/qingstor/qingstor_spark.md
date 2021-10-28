---
title: "Spark 与 QingStor 集成"
description: 本小节主要介绍如何 Spark 与 QingStor 对象存储集成。 
keywords: qingmr ，Spark 与 QingStor ，Spark 对象存储集成,
weight: 30
collapsible: false
draft: false
---



有两种方式可以启动 Spark job： 通过 spark-shell 交互式运行和通过 spark-submit 提交 job 到 Spark 集群运行，这两种方式都需要通过选项 "--jars $SPARK_S3" 来指定使用 S3 API相关的 jar 包。

假设您在 QingStor 上的 bucket 为 `my-bucket`, 下面以 spark-shell 为例， 列出常见的 Spark 与 QingStor 集成场景。

## 存储到 QingStor

在 Spark 中读取到 HDFS 上的文件后将其存储到 QingStor。

1. 将本地的一个测试文件上传到 QingMR 集群的 HDFS 存储节点上。
   
   ```shell
   $ cd /opt/hadoop
   $ bin/hdfs dfs -mkdir /input
   $ bin/hdfs dfs -put /opt/spark/README.md /input/
   ```

2. 启动 spark-shell，并执行如下命令，将会读取 HDFS 上的 README.md 文件，将其存为 QingStor 中 "my-bucket" 下的 test 文件。

   ```shell
   $ cd /opt/spark
   $ bin/spark-shell --master spark://< 主节点IP >:7077 --jars $SPARK_S3 

   val qs_file = sc.textFile("hdfs://<hdfs-master-ip>:9000/input/README.md")
   qs_file.saveAsTextFile("s3a://my-bucket/test")
   ```

## 存储到 HDFS 文件系统

在 Spark 中读取 QingStor 上的文件，处理后再存储到 HDFS 文件系统中。

```shell
val qs_file = sc.textFile("s3a://my-bucket/test")
qs_file.count()
qs_file.saveAsTextFile("hdfs://<hdfs-master-ip>:9000/output/")
```

## 文件处理后，存储回 QingStor

在 Spark 中读取 QingStor 上的文件， 经过处理后将结果存回 QingStor。

如下代码将会读取 QingStor 中 my-bucket 下的 test 文件， 从中选出包含字符串 "Spark" 的行， 最后将结果存储到 my-bucket 下的 qingstor-output 文件中。

```shell
val qs_file = sc.textFile("s3a://my-bucket/test").filter(line => line.contains("Spark"))
qs_file.saveAsTextFile("s3a://my-bucket/output1")
```

在 Spark 中创建元素值为 1 到 1000 的数组， 找出其中的奇数并对其求平方， 最后将结果存储到 QingStor 上的文件中。

```shell
val data = for (i <- 1 to 1000) yield i
sc.parallelize(data).filter(_%2 != 0).map(x=>x*x).saveAsTextFile("s3a://my-bucket/output2")
```
