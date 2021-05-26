---
title: "产品系列"
description: 本小节主要介绍 MySQL Plus 版本规格。 
keywords: mysql plus 版本规格, 版本应用场景 
data: 2021-05-14T00:38:25+09:00
weight: 4
collapsible: false
draft: false
---



青云MySQL Plus 提供三个系列：基础版、高可用版、金融版。

## 版本介绍

|<span style="display:inline-block;width:60px">系列</span> |<span style="display:inline-block;width:320px">版本说明</span>|<span style="display:inline-block;width:240px">适应场景</span> |
|:----|:----|:----|
|基础版   |面向个人用户或中小型团队用户推出的单节点数据库版本，成本低，可实现极高的性价比。   |适用于个人学习、小型网站、开发测试等使用场景。|
|高可用版|面向企业级生产环境推出的双节点数据库版本，采用一主一从的经典高可用架构，提供数据库的高可用保障。|适用于大中型企业生产库、互联网、电商零售、物流、游戏等行业应用。|
|金融版|面向金融级生产环境推出的三节点数据库版本，采用一主两从的三节点架构，保证数据的强一致性，提供金融级可靠性。|适用于对数据安全性要求非常高的金融、证券、保险等行业的核心数据库。|


## 版本规格

各系列实例规格如下。
|<span style="display:inline-block;width:60px">系列</span>|<span style="display:inline-block;width:60px">vCPU </span>|<span style="display:inline-block;width:80px">内存</span> |<span style="display:inline-block;width:100px">vCPU/内存比</span> |<span style="display:inline-block;width:100px">最大IOPS</span> |<span style="display:inline-block;width:200px">存储空间</span> |
|:----|:----|:----|:----|:----|:----|
|基础版	|1~8|	1GB~32GB|	1:1，1:2，1:4|	500~2500|	基础型：10G~2000G|
|高可用版|	2~32|	4GB~128GB|	1:2，1:4，1:8|	2000~30000	|SSD企业型：10G~2000G<br/>NeonSAN：100G~10000G|
|金融版	|2~32	|8GB~256GB|	1:4，1:8	| 2000~30000|	SSD企业型：10G~2000G<br/>NeonSAN：100G~10000G|
