---
title: "Logstash 自定义插件"
description: 本小节主要介绍 Logstash 如何自定义插件。
keywords: Logstash 自定义插件,
weight: 45
collapsible: false
draft: false
---

本小节主要介绍 Logstash 如何自定义插件。

## 操作步骤

1. 在集群列表页面的 Logstash 节点上点击节点 ID 右侧的显示器图标，打开 Web 终端。输入默认用户名 `ubuntu`、密码 `p12cHANgepwD`，进入 shell。

   > **说明**
   >
   > `ELK 5.6.16 - QingCloud 1.5.0` 之前的版本请继续输入命令 `sudo su` 切换到 root 用户。

2. 用如下命令创建自定义插件，其中 `filter` 可替换为您想要定制的插件的类型，类型包括 `{input, filter, codec, output}` ，`abcd` 可替换为您要开发的插件的名称，更多详情请参考 [官方文档](https://www.elastic.co/guide/en/logstash/6.7/contributing-to-logstash.html)：

   ```bash
   /usr/share/logstash/bin/logstash-plugin generate --type filter --name abcd --path /data/logstash/plugins
   ```

   > **说明**
   >
   > `ELK 5.5.1 - QingCloud 1.2.0` 及以前版本请使用如下命令：
   
   ```bash
   sudo docker exec -it $(docker ps -q) logstash-plugin generate --type filter --name abcd --path /data/logstash/plugins
   ```

   ![plugin_generate](../../images/plugin_generate.png)

3. 进入上面生成的插件目录，修改其中的文件，按实际业务需求进行开发，并修改 `.gemspec` 文件（比如示例 `/data/logstash/plugins/logstash-filter-abcd/logstash-filter-abcd.gemspec`），把包含 `TODO`  或 `FIXME` 的行改成实际内容，否则会导致 Logstash 无法启动。

4. 在集群列表页面中切换到配置参数标签页，选择"Logstash 节点"进行参数配置，点击"修改属性"，根据您的插件类型及参数修改相应的配置项，如示例中，将 `filter_conf_content` 修改为 `abcd {}` ，根据您插件所在位置修改 `gemfile_append_content` ，插件位置前缀必须是 `/data/logstash/plugins` ，如示例中，将 `gemfile_append_content` 修改为 `gem "logstash-filter-abcd", :path => "/data/logstash/plugins/logstash-filter-abcd"`，修改后保存即可，如下图为示例中配置的展示。

   > **说明**
   >
   > 如您有多个 Logstash 节点，请在所有 Logstash 节点上执行第 1、2、3 步骤，确保所有 Logstash 节点成功安装相关插件，不然状态会显示不正常。

   ![logstash_env](../../images/logstash_env.png)

5. 重启 Logstash 节点：在集群列表页面右键点击您的ELK集群，点击重启，选择 Logstash 节点，点击提交，此时 Logstash 节点将会重启。

6. 参考 **Logstash 基本用法** 发送一条数。

   ```bash
   curl -d "qingcloud" $LS_IP:9700
   ```

   参照 **Kibana 基本用法** 在浏览器打开 Kibana 并进行必要配置，点击左侧的 Discover 菜单项，显示近期接收到的日志，如图，示例中的 `logstash_filter_abcd` 成功将原消息中的 `qingcloud` 替换为了 `Hello World!` ，说明插件配置生效。

   ![log_display](../../images/log_display.png)
