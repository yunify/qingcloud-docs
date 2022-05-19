---
title: "新增 FTP 数据源"
description: 本小节主要介绍如何新增 FTP 数据源。 
keywords: 
weight: 45
collapsible: false
draft: false
---

数据源是大数据工作台用于数据处理的出入口。本小节主要介绍如何新增 FTP 数据源。

## 前提条件

数据源需要在网络连通的前提下才能进行数据同步，详情请参见[网络连通方案](/bigdata/dataomnis/manual/connect/)。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 选择工作空间所在区域后，在目标工作空间点击**数据源管理**，进入数据源管理页面。
5. 点击**新增数据源**，进入新增数据源页面。
6. 选择 **FTP** 数据源类型，进入配置数据源页面。

   1. 配置数据源基本信息。

      | <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
      | :------------- | ---------------------------------------------------------- |
      | 数据源连接方式   | 当前仅支持`连接串模式`，即通过 IP、端口、用户名密码进行连接。 |
      | 数据源名称     | 新增数据源的名称，您可以自定义。                            |
      | 数据源描述     | 新增数据源的描述信息，您可以自定义。                         |

      <img src="/bigdata/dataomnis/_images/source_data_set_basic.png" alt="配置基本信息" style="zoom:50%;" />

   2. 配置数据源连接信息。

      | <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
      | :--------- | -------------------------------------------- |
      | 协议（Protocol）     |支持 `FTP` 和 `SFTP` 协议。                           |
      | 连接模式（Connection Mode）     | 支持 `被动模式`和`主动模式`。选择 FTP 协议时需要配置该参数。 <li>主动模式的 FTP 是指服务器主动连接客户端的数据端口。主动模式利于服务器安全管理。如果客户端开启了防火墙，或客户端处于内网，那么服务器对客户端端口发起的连接可能会失败。<li>被动模式的 FTP 是指服务器被动地等待客户端连接自己的数据端口。被动模式通常用在处于防火墙之后的 FTP 客户端访问外界 FTP 服务器的情况。   |
      | 私钥（Private Key）     | SFTP 私钥文件内容。选择 SFTP 协议时需要配置该参数。                           |
      | 主机别名和端口（Host : Port）    | FTP 服务器的名称和连接端口号，格式为 ftp://ip:port。<br>选择 FTP 协议，端口默认为 `21`。选择SFTP协议，端口默认为 `22`。 |         
      | 用户名（User Name）     | 访问 FTP 服务的用户名。                           |
      | 密码（Password）       | 访问 FTP 服务的密码。                           | 

      <img src="/bigdata/dataomnis/_images/source_data_set_ftp_connect.png" alt="配置 FTP 数据源连接信息" style="zoom:50%;" />

7. 展开**数据源可用性测试**，点击**开始测试**，测试数据源的可用性。

   也可以在数据源添加成功后，点击数据源操作列的**可用性测试**测试可用性。

8. 点击**新增**，开始新增数据源。
