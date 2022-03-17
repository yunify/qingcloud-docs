---
title: "使用默认接入点收发消息"
description: 以 Java SDK 为例介绍如何使用 SDK 接入 Kafka 并收发消息。
keyword: 云计算,大数据,消息队列,中间件,Kafka,开发指南,SDK,默认接入点,demo
weight: 10
draft: false
---

本小节以 Java SDK 为例介绍如何使用 SDK 接入 Kafka 并收发消息。

## 前提条件

- 已创建 Kafka 集群，并获取 Kafka 节点 IP 地址。
- 已创建 Topic，并获取 Topic 名称。
- [安装 1.8 或以上版本 JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
- [安装 2.5 或以上版本 Maven](http://maven.apache.org/download.cgi) 
- Demo 代码必须与 Kafka 集群在同一个 VPC 网络。若您通过本地电脑进行连接，请配置 [VPN](/network/vpc/manual/vpn/)，确保本地可以访问集群网络。

## 下载 Demo

[下载 Demo](https://github.com/QingCloudAppcenter/Kafka/tree/dev/example/kafka-sdk)。Demo 包含如下文件：

| <span style="display:inline-block;width:140px">文件名</span> | <span style="display:inline-block;width:200px">文件路径</span> | <span style="display:inline-block;width:320px">说明</span> |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| JavaKafkaConfigurer.java                                     | /src/main/java/                                              | Kafka demo 配置文件加载程序。                              |
| KafkaConsumerDemo.java                                       | /src/main/java/                                              | 单 Consumer 消费消息程序。                                 |
| KafkaMultiConsumerDemo.java                                  | /src/main/java/                                              | 多 Consumer 消费消息程序。                                 |
| KafkaProducerDemo.java                                       | /src/main/java/                                              | 发送消息程序。                                             |
| kafka.properties                                             | /src/main/resources/                                         | Kafka demo 配置文件，用于配置 Kafka 的连接信息。           |
| log4j.properties                                             | /src/main/resources/                                         | 日志配置文件。                                            |
| pom.xml                                                      | /                                                            | Maven 配置文件。                    |

您也可以根据 Demo 文件自行创建相关文件。

## 引入 Kafka 客户端

在 pom.xml 中添加以下依赖，引入 Kafka 客户端。   
开发时客户端尽量选择与服务端对应的版本。

```xml
<dependencies>
    <dependency>
        <groupId>org.apache.kafka</groupId>
        <artifactId>kafka-clients</artifactId>
        <version>2.3.1</version>
    </dependency>

    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-log4j12</artifactId>
        <version>1.7.6</version>
    </dependency>
</dependencies>
```

## 准备 Kafka 配置信息

1. 创建 Log4j 配置文件 **log4j.properties**。

2. 创建 Kafka 配置文件 **kafka.properties**，并配置相关信息。

    | <span style="display:inline-block;width:140px">参数</span> | <span style="display:inline-block;width:520px">参数说明</span> |
    | :--------------------------------------------------------- | :----------------------------------------------------------- |
    | bootstrap.servers                                          | Kafka 连接地址。若 Kafka 节点地址为：192.168.0.1, 192.168.0.2, 192.168.0.3, 则连接地址为：192.168.0.1:9092,192.168.0.2:9092,192.168.0.3:9092。 |
    | topic                                                      | 消息的 Topic。                                               |
    | group.id                                                   | 订阅消息的 Group。您可以自定义，系统将会自动创建一个 Group。 |

   ```properties
   ## 配置接入点
   bootstrap.servers=XXXX
   ## 配置 Topic，可以在 Kafka Manager 界面上创建 Topic。
   topic=XXXX
   ## 配置 Group
   group.id=XXXX
   ```

3. 创建配置文件加载程序 **JavaKafkaConfigurer.java**。

## 发送消息

创建发送消息程序 **KafkaProducerDemo.java**，编译并运行 **KafkaProducerDemo.java** 发送消息。

   ```java
   import java.util.ArrayList;
   import java.util.List;
   import java.util.Properties;
   import java.util.concurrent.Future;
   
   import java.util.concurrent.TimeUnit;
   import org.apache.kafka.clients.CommonClientConfigs;
   import org.apache.kafka.clients.producer.KafkaProducer;
   import org.apache.kafka.clients.producer.ProducerConfig;
   import org.apache.kafka.clients.producer.ProducerRecord;
   import org.apache.kafka.clients.producer.RecordMetadata;
   
   public class KafkaProducerDemo {
       public static void main(String args[]) {
           //加载kafka.properties。
           Properties kafkaProperties =  JavaKafkaConfigurer.getKafkaProperties();
   
           Properties props = new Properties();
           //设置接入点，请通过控制台获取对应Topic的接入点。
           props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaProperties.getProperty("bootstrap.servers"));
   
           //消息队列Kafka版消息的序列化方式。
           props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
           props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
           //请求的最长等待时间。
           props.put(ProducerConfig.MAX_BLOCK_MS_CONFIG, 30 * 1000);
           //设置客户端内部重试次数。
           props.put(ProducerConfig.RETRIES_CONFIG, 5);
           //设置客户端内部重试间隔。
           props.put(ProducerConfig.RETRY_BACKOFF_MS_CONFIG, 3000);
           //构造Producer对象，注意，该对象是线程安全的，一般来说，一个进程内一个Producer对象即可。
           //如果想提高性能，可以多构造几个对象，但不要太多，最好不要超过5个。
           KafkaProducer<String, String> producer = new KafkaProducer<String, String>(props);
   
           //构造一个消息队列Kafka版消息。
           String topic = kafkaProperties.getProperty("topic"); //消息所属的Topic，请在控制台申请之后，填写在这里。
           String value = "this is the message's value"; //消息的内容。
   
           try {
               //批量获取Future对象可以加快速度,。但注意，批量不要太大。
               List<Future<RecordMetadata>> futures = new ArrayList<Future<RecordMetadata>>(128);
               for (int i =0; i < 100; i++) {
                   //发送消息，并获得一个Future对象。
                   ProducerRecord<String, String> kafkaMessage =  new ProducerRecord<String, String>(topic, value + ": " + i);
                   Future<RecordMetadata> metadataFuture = producer.send(kafkaMessage);
                   futures.add(metadataFuture);
   
               }
               producer.flush();
               for (Future<RecordMetadata> future: futures) {
                   //同步获得Future对象的结果。
                   try {
                       RecordMetadata recordMetadata = future.get();
                       System.out.println("Produce ok:" + recordMetadata.toString());
                   } catch (Throwable t) {
                       t.printStackTrace();
                   }
               }
           } catch (Exception e) {
               //客户端内部重试之后，仍然发送失败，业务要应对此类错误。
               System.out.println("error occurred");
               e.printStackTrace();
           }
       }
   }
   ```

## 消费消息

### 单 Consumer 消费消息

创建单 Consumer 消费消息程序 **KafkaConsumerDemo.java**，编译并运行 **KafkaConsumerDemo.java** 消费消息。

   ```java
   import java.util.ArrayList;
   import java.util.List;
   import java.util.Properties;
   
   import org.apache.kafka.clients.consumer.ConsumerConfig;
   import org.apache.kafka.clients.consumer.ConsumerRecord;
   import org.apache.kafka.clients.consumer.ConsumerRecords;
   import org.apache.kafka.clients.consumer.KafkaConsumer;
   import org.apache.kafka.clients.producer.ProducerConfig;
   
   public class KafkaConsumerDemo {
       public static void main(String args[]) {
           //加载kafka.properties。
           Properties kafkaProperties =  JavaKafkaConfigurer.getKafkaProperties();
   
           Properties props = new Properties();
           //设置接入点，请通过控制台获取对应Topic的接入点。
           props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaProperties.getProperty("bootstrap.servers"));
           //两次Poll之间的最大允许间隔。
           //消费者超过该值没有返回心跳，服务端判断消费者处于非存活状态，服务端将消费者从Group移除并触发Rebalance，默认30s。
           props.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, 30000);
           //每次Poll的最大数量。
           //注意该值不要改得太大，如果Poll太多数据，而不能在下次Poll之前消费完，则会触发一次负载均衡，产生卡顿。
           props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 30);
           //消息的反序列化方式。
           props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");
           props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");
           //当前消费实例所属的消费组，请在控制台申请之后填写。
           //属于同一个组的消费实例，会负载消费消息。
           props.put(ConsumerConfig.GROUP_ID_CONFIG, kafkaProperties.getProperty("group.id"));
           //构造消费对象，也即生成一个消费实例。
           KafkaConsumer<String, String> consumer = new org.apache.kafka.clients.consumer.KafkaConsumer<String, String>(props);
           //设置消费组订阅的Topic，可以订阅多个。
           //如果GROUP_ID_CONFIG是一样，则订阅的Topic也建议设置成一样。
           List<String> subscribedTopics =  new ArrayList<String>();
           //如果需要订阅多个Topic，则在这里添加进去即可。
           //每个Topic需要先在控制台进行创建。
           String topicStr = kafkaProperties.getProperty("topic");
           String[] topics = topicStr.split(",");
           for (String topic: topics) {
               subscribedTopics.add(topic.trim());
           }
           consumer.subscribe(subscribedTopics);
   
           //循环消费消息。
           while (true){
               try {
                   ConsumerRecords<String, String> records = consumer.poll(1000);
                   //必须在下次Poll之前消费完这些数据, 且总耗时不得超过SESSION_TIMEOUT_MS_CONFIG。
                   //建议开一个单独的线程池来消费消息，然后异步返回结果。
                   for (ConsumerRecord<String, String> record : records) {
                       System.out.println(String.format("Consume partition:%d offset:%d", record.partition(), record.offset()));
                   }
               } catch (Exception e) {
                   try {
                       Thread.sleep(1000);
                   } catch (Throwable ignore) {
   
                   }
                   e.printStackTrace();
               }
           }
       }
   }
   ```


### 多 Consumer 消费消息

创建多 Consumer 消费消息程序 **KafkaMultiConsumerDemo.java**，编译并运行 **KafkaMultiConsumerDemo.java** 消费消息。

   ```java
   import java.util.ArrayList;
   import java.util.List;
   import java.util.Properties;
   import java.util.concurrent.atomic.AtomicBoolean;
   import org.apache.kafka.clients.consumer.ConsumerConfig;
   import org.apache.kafka.clients.consumer.ConsumerRecord;
   import org.apache.kafka.clients.consumer.ConsumerRecords;
   import org.apache.kafka.clients.consumer.KafkaConsumer;
   import org.apache.kafka.clients.producer.ProducerConfig;
   import org.apache.kafka.common.errors.WakeupException;
   
   public class KafkaMultiConsumerDemo {
       public static void main(String args[]) throws InterruptedException {
           //加载kafka.properties。
           Properties kafkaProperties = JavaKafkaConfigurer.getKafkaProperties();
   
           Properties props = new Properties();
           //设置接入点，请通过控制台获取对应Topic的接入点。
           props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaProperties.getProperty("bootstrap.servers"));
           //两次Poll之间的最大允许间隔。
           //消费者超过该值没有返回心跳，服务端判断消费者处于非存活状态，服务端将消费者从Group移除并触发Rebalance，默认30s。
           props.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, 30000);
           //每次Poll的最大数量。
           //注意该值不要改得太大，如果Poll太多数据，而不能在下次Poll之前消费完，则会触发一次负载均衡，产生卡顿。
           props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 30);
           //消息的反序列化方式。
           props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");
           props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");
           //当前消费实例所属的消费组，请在控制台申请之后填写。
           //属于同一个组的消费实例，会负载消费消息。
           props.put(ConsumerConfig.GROUP_ID_CONFIG, kafkaProperties.getProperty("group.id"));
   
           int consumerNum = 2;
           Thread[] consumerThreads = new Thread[consumerNum];
           for (int i = 0; i < consumerNum; i++) {
               KafkaConsumer<String, String> consumer = new KafkaConsumer<String, String>(props);
   
               List<String> subscribedTopics = new ArrayList<String>();
               subscribedTopics.add(kafkaProperties.getProperty("topic"));
               consumer.subscribe(subscribedTopics);
   
               KafkaConsumerRunner kafkaConsumerRunner = new KafkaConsumerRunner(consumer);
               consumerThreads[i] = new Thread(kafkaConsumerRunner);
           }
   
           for (int i = 0; i < consumerNum; i++) {
               consumerThreads[i].start();
           }
   
           for (int i = 0; i < consumerNum; i++) {
               consumerThreads[i].join();
           }
       }
   
       static class KafkaConsumerRunner implements Runnable {
           private final AtomicBoolean closed = new AtomicBoolean(false);
           private final KafkaConsumer consumer;
   
           KafkaConsumerRunner(KafkaConsumer consumer) {
               this.consumer = consumer;
           }
   
           @Override
           public void run() {
               try {
                   while (!closed.get()) {
                       try {
                           ConsumerRecords<String, String> records = consumer.poll(1000);
                           //必须在下次Poll之前消费完这些数据, 且总耗时不得超过SESSION_TIMEOUT_MS_CONFIG。
                           for (ConsumerRecord<String, String> record : records) {
                               System.out.println(String.format("Thread:%s Consume partition:%d offset:%d", Thread.currentThread().getName(), record.partition(), record.offset()));
                           }
                       } catch (Exception e) {
                           try {
                               Thread.sleep(1000);
                           } catch (Throwable ignore) {
   
                           }
                           e.printStackTrace();
                       }
                   }
               } catch (WakeupException e) {
                   //如果关闭则忽略异常。
                   if (!closed.get()) {
                       throw e;
                   }
               } finally {
                   consumer.close();
               }
           }
           //可以被另一个线程调用的关闭Hook。
           public void shutdown() {
               closed.set(true);
               consumer.wakeup();
           }
       }
   }
   ```

