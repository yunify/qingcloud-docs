---
title: "Logstash 自定义插件"
description: 本小节主要介绍 Logstash 如何自定义插件。
keyword: 搜索分析,Logstash 自定义插件,自定义插件,OpenSearch,搜索引擎,大数据
weight: 20
collapsible: false
draft: true
---

本小节主要介绍 Logstash 如何自定义插件。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。

## 步骤 1:创建自定义插件

1. 登录 Logstash 节点服务器，进入 shell。默认端口 9600、用户名 `ubuntu`、密码 `p12cHANgepwD`。

2. 执行如下指令，创建自定义插件。

   ```bash
   /usr/share/logstash/bin/logstash-plugin generate --type <filter_type> --name <plugin_name> --path /data/logstash/plugins
   ```

   其中：

   -`filter_type` 为定制的插件的类型，类型包括 `{input, filter, codec, output}` ；

   -`plugin_name` 为自定义插件的名称。
   
   -更多参数说明，请参考 [Logstash Plugin](https://www.elastic.co/guide/en/logstash/6.7/contributing-to-logstash.html)。


3. 进入插件目录路径，修改配置文件。
   
   根据实际业务需求配置相应文件。例如修改 `.gemspec` 文件，需把包含 `TODO` 或 `FIXME` 的行改成实际内容，否则将导致 Logstash 无法启动。

> **说明**
>
> 如有多个 Logstash 节点，请在所有 Logstash 节点上创建自定义插件，确保所有 Logstash 节点成功安装插件。否则状态会显示不正常。

## 步骤 2:修改配置参数

1. 登录管理控制台，选择目标 **OpenSearch 服务**，进入集群详情页面。
   
   在**配置参数**页签，选择 **Logstash 节点**参数类型，配置参数为如下参数值：
   
   -**filter_conf_content** 配置为 `<plugin_name> {}`，例如 `abcd{}`。

   -**gemfile_append_content** 根据插件路径配置，且路径前缀须为 `/data/logstash/plugins`，例如 `gem "logstash-filter-abcd", :path => "/data/logstash/plugins/logstash-filter-abcd"`。
   
   ![修改配置参数](../../../_images/logstash_para.png)

2. 重启 Logstash 节点，启动插件服务。
   
   在基本属性区域展开操作栏，点击**重启**并选择 **Logstash 节点**，重启 Logstash 节点。

## 步骤 3:安装验证

1. 向 Logstash 发送一条数据。

   ```bash
   curl -d "test" <Logstash_IP>:9600
   ```

2. 登录 Dashboard 平台，在 **Discover** 页面，查看近期接收到的日志，验证插件配置是否生效。
