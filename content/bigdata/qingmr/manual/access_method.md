---
title: "访问组件 Web 页面"
description: 本小节主要介绍组件 Web 站点访问方式。 
keyword: 云计算,大数据,QingMR,连接方式,访问方式,Web 地址
weight: 21
collapsible: false
draft: false
---

QingMR 集群默认在集群中创建并托管了各组件的 Web 站点。您可以访问这些站点查看组件的相关信息。

## 访问方式

### 通过云服务器访问

1. 创建一个单独的 Windows 云服务器，且云服务器需要与 QingMR 集群处于同一区域下的同一 VPC 中。
2. 登录 Windows 云服务器。
   
   若云服务器绑定了公网 IP，您可以通过本地的远程连接工具进行连接。
   若云服务器未绑定公网 IP，您可以单击云服务器名称右侧的 **Web终端**图标进行远程连接。

3. 在 Windows 云服务器的远程桌面中，访问[站点地址](#组件-web-站点地址)。

### 在本地通过公网 IP 访问

1. 申请一个公网 IP，并与 QingMR 集群所属 VPC 进行绑定。

2. 根据组件端口配置[端口转发](../../../../../network/vpc/faq/methods_of_port_forwarding/)。

3. 在本地浏览器访问[站点地址](#组件-web-站点地址)。   

   站点地址中的 IP 请替换为公网 IP，端口请替换为端口转发规则中的源端口。

### 在本地通过配置 VPN 访问

1. 申请一个公网 IP，并与 QingMR 集群所属 VPC 进行绑定。
2. 配置 [VPN](../../../../../network/vpc/manual/vpn/)。
3. 在本地浏览器访问[站点地址](#组件-web-站点地址)。 

## 组件 Web 站点地址

| <span style="display:inline-block;width:140px">组件</span> | <span style="display:inline-block;width:260px">站点地址</span> | <span style="display:inline-block;width:260px">说明</span> |
| :--------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| Yarn 主页面                                                | http://< 主节点 IP >:8088                                    | -                                                          |
| HDFS 主页面                                                | http://< HDFS 主节点 IP >:50070                              | -                                                          |
| Spark 主页面                                               | http://< 主节点 IP >:8080                                    | 需要开启 spark standalone 模式                             |
| Flink YARN Session Web UI                                 | http://< JobManager-Web-Interface >                         | 从 QingMR 2.5.0 开始支持；需要启动 Session                 |
| Flink historyserver Web UI                                | http://< HDFS 主节点 IP >:8082                               | 从 QingMR 2.5.0 开始支持                                   |
| Hive 主页面                                                | http://< 主节点 IP >:10002                                   | 从 QingMR 1.3.0 开始支持；需要开启 Hive                    |
| Ranger 主页面                                              | http://< Client IP >:6080                                   | -                                                          |



