---
title: "性能规格"
description: 本小节主要介绍 PostgreSQL 性能规格。 
keywords: PostgreSQL, QingCloud, 性能规格
weight: 4
collapsible: false
draft: false
---


QingCloud PostgreSQL 根据QingCloud AppCenter 功能特点，定制`基础版`、`增强版`和`专业版`三个资源类型，您也可以选择`自定义`配置资源规格。

## 资源类型规格

默认资源类型规格如下。
|<span style="display:inline-block;width:140px">资源类型</span> |<span style="display:inline-block;width:140px">云服务器规格</span>|<span style="display:inline-block;width:140px">磁盘规格</span>|<span style="display:inline-block;width:240px">适用场景</span>|
|:----|:----|:----|:----|
|   专业版     | 企业型 e2 8核16G |   200GB | <li>适用于企业生产环境，对数据安全性要求非常高的金融、证券、保险等行业的核心数据库场景。   | 
|   增强版     | 企业型 e2  4核8G |   100GB | <li>适用于企业生产环境，中型企业生产库、互联网、电商零售、物流、游戏等行业场景。  | 
|   基础版     | 基础型  2核4G  |   50GB  | <li>适用于个人学习、小型网站、开发测试等使用场景。   | 

## 自定义规格

各系列实例可自定规格如下。
|<span style="display:inline-block;width:60px">节点角色</span>|<span style="display:inline-block;width:180px">CPU </span>|<span style="display:inline-block;width:180px">内存</span> |<span style="display:inline-block;width:100px">存储空间</span> |<span style="display:inline-block;width:80px">最大节点数</span> |
|:----|:----|:----|:----|:----|
|主实例	|基础型：1～8核 <br> 企业型 e2：2～32核  |   基础型：2～32G <br> 企业型 e2：4～256G   | 10～2000GB|	-  |
|只读实例| 基础型：1～8核 <br> 企业型 e2：2～32核  |   基础型：2～32G <br> 企业型 e2：4～256G   | 10～2000GB|	5个  |
|Proxy 实例	|基础型：1～8核 <br> 企业型 e2：2～32核  |   基础型：2～32G <br> 企业型 e2：4～256G   | 10～2000GB| 2个  |
