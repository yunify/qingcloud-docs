---
title: "管理网络流量镜像"
keyword: 青云, QingCloud, VPC, VPC 网络, 网络流量镜像, SPAN 
description: 介绍如何创建 SPAN 及添加 SPAN 成员。
draft: false
weight: 60

---

网络流量镜像 (Switched Port Analyzer)一般可以用于网络监控、分析。 通过定义网络流量镜像的目标地址，加入 SPAN 的成员都会把网络流量按照 SPAN 定义的封装方式发送到目标地址。 SPAN 使用二层 GRE 隧道来封装和发送报文，因此在接收镜像流量的对端要能识别并解析 GRE 报文。

## 创建 SPAN

创建 SPAN 可以指定以下项目:

*   流量类型:可选流入流量，流出流量和全部流量
*   IP 地址:接收镜像流量的目标地址。对应的云服务器应该具有流量分析功能，并且能够支持 GRE 封装，比如镜像市场提供的 EZSonar。
*   密钥:建立 GRE 隧道时两端共同使用的约定整型数字，比如 12345

![](../_images/create_span.png)

注解

IP 地址只能是基础网络中的一台云服务器的地址，并且在其关联的防火墙中放行 GRE 流量，如下图:

![](../_images/span_sg.png)

## 添加 SPAN 成员

加入 SPAN 的成员，就会将这台云服务器的流量发送到配置的SPAN IP。添加完成即开始发送镜像流量。

注解

由于GRE和虚拟网络会增加额外的包头，为了达到最佳性能，SPAN成员云服务器的 mtu 请设置为1408 (linux命令 ifconfig eth0 mtu 1408)。如果mtu高于1408， 流量镜像仍然工作，超过1408的数据包会自动切片，带来一定性能损失。

![](../_images/span_add_member.png)

## 移除 SPAN成员

加入 SPAN 的成员可以移除，点击对应成员名称右边的关闭按钮即可移除。 移除后就停止对该云服务器的流量做镜像。

![](../_images/span_del_member.png)

> **说明**：删除 SPAN 需要先移除其全部成员。

## 修改 SPAN属性

已经建立的 SPAN 可以修改其属性，创建时可以指定的项目都可以修改，修改完之后要点击页面上的“应用修改”按钮，以完成配置更新。

![](../_images/span_modify.png)
