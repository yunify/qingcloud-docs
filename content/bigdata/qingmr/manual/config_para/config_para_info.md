---
title: "参数介绍"
description: 本小节主要介绍 QingMR 常用配置项。 
keywords: QingMR 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 QingMR 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 QingMR 配置参数的含义。 

## 支持的配置参数

- **开启 Hive**: 开启/关闭 Hive Metastore 和 HiveServer2 服务。
- **使用远程 mysql 数据库**: true 为使用远程 mysql 数据库，false 为使用本地 mysql 数据库。
- **远程 mysql 数据库 ip**: 仅当使用远程 mysql 数据库时需填此项。
- **Hive Metastore 用户名**: 本地 mysql 数据库默认为 hive 。
- **Hive Metastore 密码**: 本地 mysql 数据库默认为 hive 。
- **hive.execution.engine**： 指定 hive 执行引擎。	
- **hive.exec.parallel**：是否并行执行 hive 作业。
- **hive.exec.parallel.thread.number**： hive 并行执行作业数。
- **hive.merge.mapredfiles**： hive on mr 作业结束时是否合并小文件。
- **hive.merge.size.per.task**： hive 作业结束时合并文件的大小( byte )。
- **hive.merge.smallfiles.avgsize**：作业的输出文件平均大小( byte )小于该值时，hive 将启动 MapReduce 作业将输出文件合并成大文件。如果 hive.merge.mapfiles=true 时只对仅包含 map 任务的作业生效，如果 hive.merge.mapredfiles=true 时对所有 MapReduce 作业生效。
- **hive.merge.sparkfiles**： hive on spark 作业结束后是否合并小文件。	
- **hive.spark.executor.memory**： hive on spark 作业中每个 executor 的分配内存。	
- **hive.spark.executor.cores**： hive on spark 作业中每个 executor 的分配核心数。
- **hive.spark.executor.instances**: hive on spark 作业中每个作业分配的 executor 个数。
- **hive.server2.idle.session.timeout**: hiveserver2 的 session 闲置超过该时间时将被关闭，置零或负值时将禁用。需填入时间值，单位( d/day, h/hour, m/min, s/sec, ms/msec, us/usec, ns/nsec )，不指定时默认 msec。
- **hive.server2.idle.operation.timeout**: hiveserver2 的 session 中 operation 超过该时间时将被取消，置零或负值时将禁用。需填入时间值，单位( d/day, h/hour, m/min, s/sec, ms/msec, us/usec, ns/nsec )，不指定时默认 msec。
- **hive.server2.session.check.interval**： hiveserver2 中检查 session 和 operation 超时的间隔时间，该值应该大于等于 3000msec ，置零或负值时将禁用。需填入时间值，单位( d/day, h/hour, m/min, s/sec, ms/msec, us/usec, ns/nsec )，不指定时默认 msec。
- **QingStor**: 是否将 QingStor 与 Hadoop , Spark 和 Hive 集成，如需集成则必须输入相应的 access_key 及 secret_key 。
- **QingStor_zone**: 指定 QingStor 的分区，目前开放了 pek3a 和 sh1a 。 其他分区何时开放请关注 QingMR 用户指南。
- **s3.endpoint**: 兼容 S3 的对象存储的 endpoint, 如果指定了该值 QingStor_zone 将被忽略，常用于私有云中无法访问公有云对象存储的场景。通常公有云不用指定该值，如果指定须以 s3.<zone>.qingstor.com 格式
- **access_key**: 指定 QingStor 的 access_key 。
- **secret_key**: 指定 QingStor 的 secret_key 。
- **enable_spark_standalone**: 是否开启 Spark Standalone 模式。开启后将可以以 Spark Standalone 模式提交 Spark 应用；关闭后可以以 Spark on YARN 模式提交 Spark 应用。如仅以 Spark on YARN 模式提交 Spark 应用或者仅使用 hadoop 相关功能，则可以选择关闭 Spark Standalone 模式以释放资源。此选项最好不要和其他配置参数项一起改，单独改动此项然后保存设置是推荐的作法。
- **spark.master.SPARK_DAEMON_MEMORY**: Spark master 进程( Standalone 模式)占用内存( MB )。该值上限定为总内存-1024。
- **spark.worker.SPARK_DAEMON_MEMORY**: Spark worker 进程( Standalone 模式)占用内存( MB )。该值上限定为总内存-1024。
- **PYSPARK_PYTHON**: 指定 Python Spark 程序所用的 Python 版本，目前支持 Anaconda 发行版的 Python 2.7.13 和 3.6.1。两个 Python 版本对应的 Anaconda 发行版数据科学库 numpy, scikit-learn, scipy, Pandas, NLTK 和 Matplotlib 也包含在内。
- **spark.worker.cleanup.enabled**: 定期清理应用 work 目录，运行中的 application 不会被清理。
- **spark.worker.cleanup.interval**: 清理应用 work 目录的时间间隔，以秒为单位，默认为28800秒（ 8 小时）。
- **spark.worker.cleanup.appDataTtl**: 保留 worker 上应用 work 目录的时间，以秒为单位，默认为 86400 秒( 24 小时)。
- **spark.scheduler.mode**: Spark 应用内调度模式，针对 Spark 应用内不同线程提交的可同时运行的任务。
- **hadoop.proxyuser**: Hadoop 代理用户。
- **hadoop.proxyuser.hosts**: Hadoop 代理用户能代理哪些 hosts。
- **hadoop.proxyuser.groups**: Hadoop 代理用户能代理指定 host 中的哪些 groups。
- **resource_manager.YARN_HEAPSIZE**: ResourceManager 最大可用堆内存大小( MB )，如果指定 1000 ，则 ResourceManager 将可利用当前所有空闲内存。
- **node_manager.YARN_HEAPSIZE**: NodeManager 最大可用堆内存大小(MB)，该值上限为总内存的一半。
- **datanode.HADOOP_HEAPSIZE**: Datanode daemon 进程最大可用堆内存大小(MB)，默认值为1000. 该值上限为总内存-1024。
- **dfs.namenode.handler.count**: Name node 节点服务线程数。
- **dfs.datanode.handler.count**: Data node 节点服务线程数。
- **dfs.replication**: HDFS 副本数。
- **fs.trash.interval**: 控制 Trash 检查点目录过多少分钟后被删除。
- **yarn.resourcemanager.scheduler.class**: YARN ResourceManager 调度器，默认为 CapacityScheduler，可选 FairScheduler。如果选择 FairScheduler，需要上传自定义的 fair-scheduler.xml 到 HDFS 的 /tmp/hadoop-yarn/ 目录，然后右键点击集群选择更新调度器。如需对 CapacityScheduler 的默认行为进行更改，同样需要上传自定义的 capacity-scheduler.xml 到 HDFS 的 /tmp/hadoop-yarn/ 目录，然后更新调度器。
- **yarn.resourcemanager.client.thread-count**: 处理 applications manager 请求的线程数。
- **yarn.resourcemanager.amlauncher.thread-count**: 启动/清理 ApplicationMaster 的线程数。
- **yarn.resourcemanager.scheduler.client.thread-count**: 处理 scheduler 接口请求的线程数。
- **yarn.resourcemanager.resource-tracker.client.thread-count**: 处理 resource tracker 请求的线程数。
- **yarn.resourcemanager.admin.client.thread-count**: 处理 ResourceManager 管理接口请求的线程数。
- **yarn.nodemanager.container-manager.thread-count**: 分配给 Container Manager 用的线程数。
- **yarn.nodemanager.delete.thread-count**: 用于清理工作的线程数。
- **yarn.nodemanager.localizer.client.thread-count**: 用于处理 localization 请求的线程数。
- **yarn.nodemanager.localizer.fetch.thread-count**: 用于处理 localization fetching 请求的线程数。
- **yarn.nodemanager.pmem-check-enabled**: 是否需要为 container 检查物理内存限制。
- **yarn.nodemanager.vmem-check-enabled**: 是否需要为 container 检查虚拟内存限制。
- **yarn.nodemanager.vmem-pmem-ratio**: NodeManager 中虚拟内存与物理内存的比率。
- **yarn.scheduler.minimum-allocation-mb**: ResourceManager 中针对每个 container 请求内存的最小分配值(MB). 低于该值的内存请求将会抛出 InvalidResourceRequestException 异常。
- **yarn.scheduler.maximum-allocation-mb**: ResourceManager 中针对每个 container 请求内存的最大分配值(MB). 高于该值的内存请求将会抛出 InvalidResourceRequestException 异常。
- **yarn.scheduler.minimum-allocation-vcores**: ResourceManager 中针对每个 container 请求 virtual CPU cores 的最小分配值。 低于该值的请求将会抛出 InvalidResourceRequestException 异常。
- **yarn.scheduler.maximum-allocation-vcores**: ResourceManager 中针对每个 container 请求 virtual CPU cores 的最大分配值。 高于该值的请求将会抛出 InvalidResourceRequestException 异常。
- **yarn.scheduler.fair.user-as-default-queue**: 以下 yarn.scheduler.fair.* 相关选项只有在 FairScheduler 被使用时才生效。在资源请求中没有指定队列名字的时候，是否使用 username 作为默认的队列名。如果此选项被设置为 false 或者未设置，所有 job 都将共享一个名为 default 的队列。
- **yarn.scheduler.fair.preemption**: 是否应用 preemption。
- **yarn.scheduler.fair.preemption.cluster-utilization-threshold**: 超过指定集群资源利用率后将会激活 preemption . 资源利用率是已用资源与资源容量的比率。
- **yarn.scheduler.fair.sizebasedweight**: 是否根据应用的大小分配资源，而不是对所有应用无视大小分配同样的资源。
- **yarn.scheduler.fair.assignmultiple**: 是否允许在一次心跳中指定多个 container。
- **yarn.scheduler.fair.max.assign**: 如果 assignmultiple 为 true ，在一次心跳中可指定的最大 container 数量。设置为-1表示无限制。
- **yarn.scheduler.fair.locality.threshold.node**: 对于请求某特定节点上 container 的应用，设定该值指定一个可错失的得到别的节点中 container 的机会。错失次数超过该值，该请求将得到别的节点的 container . 以集群大小百分比的形式指定，-1表示不错失任何调度机会。
- **yarn.scheduler.fair.locality.threshold.rack**: 对于请求某特定 rack上container 的应用，设定该值指定一个可错失的得到别的 rack 中 container 的机会。错失次数超过该值，该请求将得到别的 rack 的 container . 以集群大小百分比的形式指定，-1表示不错失任何调度机会。
- **yarn.scheduler.fair.allow-undeclared-pools**: 如果该值设置为 true ,每次应用提交后都会创建一个新的队列。如果设置为 false ，当某应用没有在分配分请求中指定队列的时候，该应用都会被放到 default 队列中。如果在请求中制定了队列分配策略，则该属性将被忽略。
- **yarn.scheduler.fair.update-interval-ms**: 重新锁住调度器重新计算 fair shares 和请求以及检查是否有资源可以被用于 preemption 的时间间隔。
- **yarn.nodemanager.log.retain-seconds**: 保存 YARN 应用日志的时间（以秒为单位）。仅在没有启用日志聚合时生效。
- **yarn.nodemanager.delete.debug-delay-sec**: YARN 应用结束后多长时间删掉应用的本地文件目录及日志目录（以秒为单位）。
- **yarn.log-aggregation-enable**: 是否开启 YARN log 的集中存储。
- **yarn.log-aggregation.retain-seconds**: 集中存储的 log 将被保存多久（秒）。
- **yarn.log-aggregation.retain-check-interval-seconds**: 多长时间（秒）检查一次集中存储的 log 是否到期可以清理。如果设置为0或负数，则该值将会被设置为 yarn.log-aggregation.retain-seconds 的十分之一。如果该值过小可能会导致频繁向 name node 发送请求。
- **yarn.nodemanager.remote-app-log-dir**: 集中存储的 log 将被保存在那，默认为 HDFS 的 /tmp/logs 目录。
- **yarn.nodemanager.remote-app-log-dir-suffix**: 集中存储的 log 将会被放在 {yarn.nodemanager.remote-app-log-dir}/${user}/{本参数}中。  
- **yarn.webapp.ui2.enable**: 是否启用 YARN WEB UI v2 ，默认启用。
- **kap.storage.columnar.spark-conf.spark.executor.cores**: 单个查询Spark Executor所用CPU核数。  
- **kap.storage.columnar.spark-conf.spark.executor.instances**: 查询Spark Executor数。   
- **kap.storage.columnar.spark-conf.spark.driver.memory**: 查询Spark Driver内存大小。   
- **kap.storage.columnar.spark-conf.spark.executor.memory**: 单个查询Spark Executor内存大小。   
- **flink.jobmanager.heap.size**: JobManager 内存大小	
- **flink.taskmanager.heap.size**: Taskmanager 内存大小	
- **flink.parallelism.default**: 任务默认并行度	
- **flink.jobmanager.archive.expiration-time**: 已完成任务保存时间	
- **flink.env.log.max**: 日志最大保存个数