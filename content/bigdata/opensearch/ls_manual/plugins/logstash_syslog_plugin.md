---
title: "使用 logstash-input-syslog 插件"
description: 本小节主要介绍 logstash-input-syslog 插件使用说明。
keyword: 搜索分析,Logstash-input-syslog,插件使用说明
weight: 55
collapsible: false
draft: false
---




Logstash 预置了 `logstash-input-syslog` 插件，通过此插件可在 Logstash 节点上运行 syslog 服务以收集日志。

> **说明**
>
> 更多的预置 Logstash 插件请参见 [Logstash 预置插件列表](#logstash-plugins)。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为**活跃**。

## 步骤 1: 修改配置参数

1. 登录管理控制台，选择目标 **OpenSearch 服务**，进入集群详情页面。
2. 在**配置参数**页签，选择 **Logstash 节点**参数类型，配置参数为如下参数值：

   -**input_conf_content** 配置为 `syslog {port => number}`，例如 `syslog {port => 9700}`。

   > **说明**
   >
   > 不建议使用 22、80、9600 端口。
   >
   > 请根据具体配置替换上面的配置，其他配置参数详情请参见[官方文档](https://www.elastic.co/guide/en/logstash/6.7/plugins-inputs-syslog.html)。
   
3. 重启 Logstash 节点，启动插件服务。
   
   在基本属性区域展开操作栏，点击**重启**并选择 **Logstash 节点**，重启 Logstash 节点。

## 步骤 3: 发送 syslog 日志

将 syslog 日志发送到 Logstash 配置的端口。

如本示例登录到 Logstash 节点上使用 logger 命令发送到 9700 端口。

```bash
$ logger -n $LS_IP -P 514 "This is a test message for logstash syslog plugin."
```

## 步骤 4: 查看日志

登录 Dashboard 平台(`http://<Dashboard_IP>:5601`)，在 **Discover** 页面，过滤查询 `syslog`，查看近期接收到的日志，验证插件配置是否生效。
