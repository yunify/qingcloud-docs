---
title: "Logstash-input-syslog 插件使用说明"
description: 本小节主要介绍 Logstash-input-syslog 插件使用说明。
keywords: Logstash-input-syslog,
weight: 55
collapsible: false
draft: false
---

Logstash 预置了 logstash-input-syslog 插件，通过此插件可在 Logstash 节点上运行 syslog 服务以收集日志。

> **说明**
>
> 更多的预置 Logstash 插件请参见 [Logstash 预置插件列表](#logstash-plugins)。

## 操作步骤

1. 在集群详情页面，切换到参数配置页面，选择 Logstash 节点，修改`input_conf_content`配置项为如下，点击保存。

   ```ruby
   syslog { port => 514 }
   ```

   > **说明**
   >
   > 请注意不要使用 22、80、9600 端口。
   >
   > 请根据您的具体配置替换上面的配置，其他配置参数详情请参见[官方文档](https://www.elastic.co/guide/en/logstash/6.7/plugins-inputs-syslog.html)。

2. 重启 Logstash 节点：在集群列表页面右键点击您的ELK集群，点击重启，选择 Logstash 节点，点击提交，此时 Logstash 节点将会重启。

3. 将 syslog 日志发送到 Logstash 配置的端口，如本示例登录到 Logstash 节点上使用 logger 命令发送到 514 端口：

   ```bash
   logger -n $LS_IP -P 514 "This is a test message for logstash syslog plugin."
   ```

4. 测试插件是否如预期工作，在浏览器中访问 Kibana 节点提供的 Web 界面`(http://<Kibana节点IP>:5601)`，默认进入配置索引模式界面，如图，直接点击 Create 即可，点击左侧的 Discover 菜单项，显示近期接收到的日志，说明插件配置生效。

   ![ls-syslog-result](../../images/ls-syslog-result.png)
