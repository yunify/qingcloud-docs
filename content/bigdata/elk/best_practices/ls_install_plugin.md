---
title: "Logstash 安装插件"
description: 本小节主要介绍 Logstash 插件安装使用方法。
keywords: Logstash 安装插件,
weight: 40
collapsible: false
draft: false
---

本小节仅讨论在线安装，需要有公网连接，如需离线安装，请参考 [官方文档](https://www.elastic.co/guide/en/logstash/6.7/offline-plugins.html)。下面以 logstash-output-influxdb 插件的安装为例，其他插件安装方式类似。

## 操作步骤

1. 在集群列表页面的 Logstash 节点上点击节点 ID 右侧的显示器图标，打开 Web 终端。输入默认用户名 `ubuntu`、密码 `p12cHANgepwD`，进入 shell，然后输入命令 `sudo su` 切换到 root 用户。

2. 运行如下命令下载 logstash-output-influxdb 插件：

   ```bash
   cd /data/logstash/plugins
   git clone https://github.com/logstash-plugins/logstash-output-influxdb.git
   ```

3. 在集群详情页面，切换到参数配置页面，选择 Logstash 节点，修改`gemfile_append_content`配置项为如下示例并点击保存：

   ```ruby
   gem "logstash-output-influxdb", :path => "/data/logstash/plugins/logstash-output-influxdb"
   ```

4. 打开之前的 Web 终端，执行如下命令安装插件：

   ```bash
   /usr/share/logstash/bin/logstash-plugin install --no-verify
   ```

   > **说明**
   >
   > `ELK 5.5.1 - QingCloud 1.2.0` 及以前版本请使用如下命令：
   >
   > ```bash
   > sudo docker exec -it $(docker ps -q) logstash-plugin install --no-verify
   > ```

5. 在集群详情页面，切换到参数配置页面，选择 Logstash 节点，修改 `output_conf_content` 配置项为如下，点击保存。

   ```ruby
   influxdb {
       data_points => {
           "duration" => "%{data.event.duration}"
       }
       host => '192.168.0.7'
       password => ''
       user => ''
       db => 'elk'
   }
   ```

   > **说明**
   >
   > 请参考相关插件的配置参数进行必要的修改，logstash-output-influxdb 相关的配置参数请参考其[文档](https://www.elastic.co/guide/en/logstash/5.5/plugins-outputs-influxdb.html)。
   >
   > 如您有多个 Logstash 节点，请在所有 Logstash 节点上执行第 1、2、4 步骤，确保所有 Logstash 节点成功安装相关插件，不然状态会显示不正常。

6. 重启 Logstash 节点：在集群列表页面右键点击您的ELK集群，点击重启，选择 Logstash 节点，点击提交，此时 Logstash 节点将会重启。

7. 参考 **Logstash 基本用法** 发送一条数据。

   ```bash
   curl -d "qingcloud" $LS_IP:9700
   ```

   如成功，则 influxdb 中将新增一条 point ，说明插件配置生效，如发现 influxdb 中没有新增 point ，请查看 logstash 日志，位置为 `/data/logstash/logs/logstash-plain.log`。
