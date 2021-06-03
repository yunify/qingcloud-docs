---
title: "升级版本"
description: 本小节主要介绍如何升级 QingCloud MongoDB 集群版本。 
keywords: mongodb 升级版本试, 
data: 2021-05-14T00:38:25+09:00
weight: 20
collapsible: false
draft: false
---



`MongoDB v3.0.15 (MMAPv1)` 和 `MongoDB v3.4.5 (WiredTiger)` 版本均可以升级至 _MongoDB 4.0.3 - QingCloud 1.2.0_ 版本，升级前需要先关闭集群， `MongoDB v3.0.15 (MMAPv1)` 升级的时间较长，其时长主要受数据量的影响，数据量越大，升级所花费的时间越久。

> 升级前，请先对数据做好备份。

`MongoDB v3.0.15 (MMAPv1)` 单节点不允许升级，如果您点了升级，不用担心，升级失败后您可以关闭集群然后选择**版本回退**。

由于 3.6 以上的版本不再支持对名字为 `*` 的索引的操作，所以您需要在升级前将名字为 `*` 的索引删除或者重命名，详情见 [Compatibility Changes in MongoDB 3.6](https://docs.mongodb.com/manual/release-notes/3.6-compatibility/#general-compatibility-changes) 。

升级集群期间，客户端无法连接 mongo 服务，为了避免客户端的操作影响到升级的过程，在这期间禁掉了客户端对 mongo 服务的访问。 

![](../../_images/upgrade_1.png)

![](../../_images/upgrade.png)
