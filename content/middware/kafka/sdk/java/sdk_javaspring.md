---
title: "使用 Spring Cloud 框架收发消息"
description: 使用 Spring Cloud 框架接入 Kafka 并收发消息。
keyword: 云计算,大数据,消息队列,中间件,Kafka,开发指南,spring cloud,demo,SDK
weight: 20
draft: false
---

本小节介绍如何使用 Spring Cloud 框架接入 Kafka 并收发消息。

## 前提条件

- 已创建 Kafka 集群，并获取 Kafka 节点 IP 地址。
- 已创建 Topic，并获取 Topic 名称。
- 请准备好一个 Linux 操作系统的服务器，且服务器与 Kafka 集群在同一个 VPC 网络。
- [安装 1.8 或以上版本 JDK](https://www.oracle.com/java/technologies/javase-downloads.html)。
- [安装 2.5 或以上版本 Maven](http://maven.apache.org/download.cgi)。

## 下载 Demo

[下载 Demo](https://github.com/QingCloudAppcenter/Kafka/tree/dev/example/kafka-spring-cloud)。将 Demo 上传至准备好的 Linux 服务器上， Demo 包含如下文件：
   
| <span style="display:inline-block;width:140px">文件名</span> | <span style="display:inline-block;width:200px">文件路径</span> | <span style="display:inline-block;width:320px">说明</span> |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| KafkaDemoApplication.java                                    | /src/main/java/com/qingcloud/                                | Kafka demo 应用程序。                                      |
| MyInput.java                                                 | /src/main/java/com/qingcloud/                                | 消费消息的 API。                                           |
| MyOutput.java                                                | /src/main/java/com/qingcloud/                                | 生产消息的 API。                                           |
| application.properties                                       | /src/main/resources/                                         | Kafka demo 配置文件，用于配置 Kafka 的连接信息。           |
| package.xml                                                  | /src/main/resources/                                         | Maven 基本信息。           |
| pom.xml                                                      | /                                                            | Maven 配置文件。                    |
| run_demo.sh                                                  | /                                                            | Kafka demo 应用程序执行脚本，通过该脚本可以发送和接收消息。  |

## 运行 Demo

1. 进入 Demo 包所在路径。

2. 执行以下命令，进入配置文件所在路径。
   
   ```
   cd src/main/resources/
   ```

3. 执行以下命令，编辑 application.properties 配置文件，并配置相关信息。
    ```
    vi application.properties
    ```

   | <span style="display:inline-block;width:140px">参数</span> | <span style="display:inline-block;width:520px">参数说明</span> |
   | :--------------------------------------------------------- | :----------------------------------------------------------- |
   | kafka.bootstrap-servers                                    | Kafka 连接地址。若 Kafka 节点地址为：192.168.0.1, 192.168.0.2, 192.168.0.3, 则接入点为：192.168.0.1:9092,192.168.0.2:9092,192.168.0.3:9092。 |
   | kafka.consumer.group                                       | 订阅消息的 Group。您可以自定义，系统将会自动创建一个 Group。  |
   | kafka.output.topic.name                                    | 消息的 Topic。程序向此 Topic 周期性地发送同一内容的消息。  |
   | kafka.input.topic.name                                     | 消息的 Topic。发送消息到此 Topic，Demo 程序会消费此 Topic 的消息，并将消息打印在日志中。  |

   ```properties
    ###请将参数修改为实际使用的 Kafka 信息
    kafka.bootstrap-servers=XXX
    kafka.consumer.group=XXX
    kafka.output.topic.name=XXX
    kafka.input.topic.name=XXX
   ```

4. 进入 demo 包所在路径，执行以下命令，运行 run_demo.sh 脚本。

   ```shell
   sh run_demo.sh
   ```

   - 程序打印输出 ”Send: hello world !!“，说明 kafka.output.topic.name 配置的 Topic 收到程序所发送的消息。

      <img src="../../../_images/kafka_output_topic_name.png" alt="kafka_output_topic_name" style="zoom:50%;" />   

   - 向 kafka.input.topic.name 配置的 Topic 发送消息，若 Demo 程序日志中打印输出类似如下消息，说明 kafka.input.topic.name 配置的 Topic 能正常消费消息。

      <img src="../../../_images/kafka_input_topic_name.png" alt="kafka_input_topic_name" style="zoom:50%;" />   



