---
title: "Hadoop 与 QingStor 集成"
description: 本小节主要介绍如何 Hadoop 与 QingStor 对象存储集成。 
keywords: qingmr ，Hadoop 与 QingStor ，Hadoop 对象存储集成,
weight: 40
collapsible: false
draft: false
---






## 本地文件与对象存储之间的上传下载

从 Client 主机本地上传文件到 QingStor 对象存储。

```shell
cd /opt/hadoop
bin/hdfs dfs -mkdir s3a://{{bucket_name}}/${dir}
bin/hdfs dfs -put LICENSE.txt s3a://{{bucket_name}}/${dir}/
```

将文件从 QingStor 对象存储下载到 Client 主机本地。

```shell
bin/hdfs dfs -get s3a://{{bucket_name}}/${dir}/LICENSE.txt
```

## HDFS 文件系统与对象存储之间的数据传输

将文件从 QingStor 对象存储拷贝到 HDFS 文件系统。

```shell
cd /opt/hadoop
bin/hadoop distcp -libjars $HADOOP_S3 s3a://{{bucket_name}}/${dir}/LICENSE.txt /LICENSE.txt
```

将文件从 HDFS 文件系统拷贝到 QingStor 对象存储存储空间中。

```shell
bin/hadoop distcp -libjars $HADOOP_S3 /LICENSE.txt s3a://{{bucket_name}}/${dir}/
```

## 将对象存储作为 MapReduce job 的输入/输出

将 QingStor 对象存储中的文件作为 MapReduce 的输入，计算结果输出到 HDFS 文件系统中。

```shell
cd /opt/hadoop
bin/hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-<hadoop_version>.jar wordcount -libjars $HADOOP_S3 s3a://your_bucket/LICENSE.txt /test_output

将 QingStor 对象存储中的文件作为 MapReduce 的输入，计算结果依然输出到 QingStor 对象存储的存储空间中。

```shell
cd /opt/hadoopbin/hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-<hadoop_version>.jar wordcount -libjars $HADOOP_S3 s3a://your_bucket/LICENSE.txt s3a://your_bucket/your_folder/
```

将 HDFS 中的文件作为 MapReduce 的输入，计算结果输出到 QingStor 对象存储的存储空间中。

```shell
cd /opt/hadoop
bin/hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-<hadoop_version>.jar wordcount -libjars $HADOOP_S3 /LICENSE.txt s3a://your_bucket/
```
