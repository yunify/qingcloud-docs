---
title: "性能规格"
description: 本小节主要介绍 RadonDB 性能规格。 
keywords: RadonDB, QingCloud, 性能规格
weight: 40
collapsible: false
draft: false
---


QingCloud RadonDB 根据QingCloud AppCenter 功能特点，定制`基础型`、`企业型`两个资源类型，您也可以选择`自定义`配置资源规格。

## 资源类型规格

默认资源类型规格如下。

|<span style="display:inline-block;width:120px">资源类型</span> |<span style="display:inline-block;width:120px">节点类型</span>|<span style="display:inline-block;width:180px">云服务器规格</span>|<span style="display:inline-block;width:100px">磁盘规格</span>|<span style="display:inline-block;width:140px">数量</span>|
|:----|:----|:----|:---- | :---- | 
|   企业型     | SQL 节点   | 企业型 e2  4核8G |   20GB | 节点 1个<br>副本 1次 | 
|   企业型     | 存储节点   | 企业型 e2  2核8G |   NeonSAN 100GB |  节点 2个<br>副本 2次 | 
|   企业型     |  监控节点  | 企业型 e2  2核4G |   20GB |  节点 1个 | 
|   基础型     |  SQL 节点  |  基础型  2核4G  |   10GB  | 节点 1个<br>副本 1次 | 
|   基础型     | 存储节点  |  基础型  2核4G   |   NeonSAN 50GB  | 节点 2个<br>副本 2次| 

> **说明**
> 
> 副本数量是指对所有节点进行整体备份的次数。

## 自定义规格

`基础型`服务器配备`基础型本地盘`，`企业型 e2`服务器配备`企业型 SSD 本地盘`和`通用型 SSD 云盘`。

各系列节点可自定规格如下。

|<span style="display:inline-block;width:60px">节点角色</span>|<span style="display:inline-block;width:180px">CPU </span>|<span style="display:inline-block;width:180px">内存</span> |<span style="display:inline-block;width:100px">存储空间</span> |<span style="display:inline-block;width:80px">最大节点数</span> |
|:----|:----|:----|:----|:----|
|SQL 节点	|基础型：2～8核 <br> 企业型 e2：2～32核  |   基础型：4～16G <br> 企业型 e2：4～32G   | 100～200GB |	4个|
|存储节点  | 基础型：1～8核 <br> 企业型 e2：2～32核  |   基础型：2～8G <br> 企业型 e2：4～16G   | 10～2000GB |	60个  |
|监控节点	|基础型：1～8核 <br> 企业型 e2：2～16核  |   基础型：2～8G <br> 企业型 e2：4～16G   | 10～50GB | 1个  |

> **说明**
> 
> `SQL 节点`默认副本数量1次。
> 
> `存储节点`默认副本数量2次。
> 
> `监控节点`默认不进行备份。
