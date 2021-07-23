---
title: "与 QingStor 对象存储集成"
description: 本小节主要介绍如何与 QingStor 对象存储集成。 
keywords: HBase qingstro 存储,
weight: 50
collapsible: false
draft: false
---


QingStor 对象存储为用户提供可无限扩展的通用数据存储服务，具有安全可靠、简单易用、高性能、低成本等特点。用户可将数据上传至 QingStor 对象存储中，以供数据分析。

由于 QingStor 对象存储兼容 AWS S3 API，因此 HDFS 可以通过 AWS S3 API 与 QingStor 对象存储高效集成，以满足更多的大数据计算和存储场景。

有关 QingStor 的更多内容，请参考 [QingStor 对象存储用户指南](../../../../../storage/object-storage/)。

本小节以 test1 表为例，介绍如何使用 Phoenix 映射HBase 中已有的表。


## 操作步骤

1. 在 `HBase 客户端` 节点 `/root/.bashrc` 文件最后，增加配置。

   可通过 `Web 终端` 或 `连接 vpn` 登录 `HBase 客户端`直接使用，用户名：`ubuntu`，密码：`hbase`，通过 `sudo su` 可以切换到 `root` 用户。
  
  - QingCloud 1.1 - HBase 1.2.6 版本，增加：

  ```
  export HADOOP_S3=/opt/hadoop/share/hadoop/tools/lib/hadoop-aws-2.7.3.jar,/opt/hadoop/share/hadoop/tools/lib/aws-java-sdk-1.7.4.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-annotations-2.2.3.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-core-2.2.3.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-core-asl-1.9.13.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-databind-2.2.3.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-jaxrs-1.9.13.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-mapper-asl-1.9.13.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-xc-1.9.13.jar
  ```
  
  - QingCloud 2.0.1 - HBase 2.0.6 版本，增加：

  ```
  export HADOOP_S3=/opt/hadoop/share/hadoop/tools/lib/hadoop-aws-2.7.7.jar,/opt/hadoop/share/hadoop/tools/lib/aws-java-sdk-1.7.4.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-annotations-2.2.3.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-core-2.2.3.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-core-asl-1.9.13.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-databind-2.2.3.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-jaxrs-1.9.13.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-mapper-asl-1.9.13.jar,/opt/hadoop/share/hadoop/tools/lib/jackson-xc-1.9.13.jar
  ```
  
  执行：
  
  ```
  source /root/.bashrc
  ```

2. 在 `HBase 客户端` 节点的 `/opt/hadoop/etc/hadoop/core-site.xml` 文件的 `<configuration>` 和 `</configuration>` 之间增加以下配置。
  
  ```
      <property>
          <name>fs.s3a.endpoint</name>
          <value>s3.${zone}.qingstor.com</value>
      </property>
      <property>
          <name>fs.s3a.access.key</name>
          <value>${access_key}</value>
      </property>
      <property>
          <name>fs.s3a.secret.key</name>
          <value>${secret_key}</value>
      </property>
      <property>
          <name>fs.s3a.connection.ssl.enabled</name>
          <value>false</value>
      </property>
      <property>
          <name>fs.s3a.paging.maximum</name>
          <value>1000</value>
      </property>
      <property>
          <name>fs.s3a.connection.timeout</name>
          <value>300000</value>
      </property>
      <property>
          <name>ipc.client.connect.timeout</name>
          <value>200000</value>
      </property>
      <property>
          <name>ipc.client.connect.max.retries.on.timeouts</name>
          <value>3</value>
      </property>
  ```
  
3. 在 `HBase 客户端` 节点的 `/opt/hadoop/etc/hadoop/hadoop-env.sh` 文件中替换目标信息。

  替换前：

  ```
  export HADOOP_CLASSPATH=/usr/local/hadoop/share/hadoop/common/hadoop-lzo-0.4.20-SNAPSHOT.jar:$HADOOP_CLASSPATH
  ```
  
  替换后：
  ```
  source /root/.bashrc
  export HADOOP_CLASSPATH=/usr/local/hadoop/share/hadoop/common/hadoop-lzo-0.4.20-SNAPSHOT.jar:$HADOOP_CLASSPATH:$(echo $HADOOP_S3 |sed 's/,/:/g')
  ```

| 参数 | 描述 |
| :--- | :--- |
| zone | QingStor 对象存储可用区，目前开放了 pek3b、pek3c、pek3d、sh1a、gd2a、gd2b 区。 |
| access_key | QingCloud API 密钥 ID，**API 密钥 **。|
| secret_key | QingCloud API 密钥私钥。|

## 上传下载

完成以上述操作后，可进行本地文件、HDFS 文件与 QingStor 对象存储之间到上传和下载。

- 本地文件和对象存储之间的上传下载

  ```shell
  cd /opt/hadoop
  # 从 `HBase 客户端`本地上传文件到 QingStor 对象存储
  bin/hdfs dfs -mkdir s3a://{{bucket_name}}/${dir}
  bin/hdfs dfs -put LICENSE.txt s3a://{{bucket_name}}/${dir}/
  
  # 将文件从 QingStor 对象存储下载到Client 主机本地
  bin/hdfs dfs -get s3a://{{bucket_name}}/${dir}/LICENSE.txt
  ```

- HDFS文件系统和对象存储之间的数据传输

  ```shell
  cd /opt/hadoop
  # 将文件从 QingStor 对象存储拷贝到 HDFS 文件系统
  bin/hadoop distcp -libjars $HADOOP_S3 s3a://{{bucket_name}}/${dir}/LICENSE.txt /LICENSE.txt
  
  # 将文件从 HDFS 文件系统拷贝到 QingStor 对象存储存储空间中
  bin/hadoop distcp -libjars $HADOOP_S3 /LICENSE.txt s3a://{{bucket_name}}/${dir}/
  ```
