---
title: "版本管理"
description: 本小节主要介绍 Bucket 版本管理相关内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
draft: false
weight: 10
---

## 概述

版本管理（Bucket Versioning）是在同一 Bucket 中保留 Object 的多个版本的方式。对于 Bucket中存储的每个 Object，均可使用版本管理功能来保存、检索和还原它们的各个版本。
通过版本管理能够轻松从用户意外操作和应用程序故障中恢复历史数据。

开启版本管理后，被覆盖或删除的 Object 均会成为历史版本被保存下来。QingStor 对象存储会计算每个版本的大小，并收取相应的存储费用。

### 状态说明

Bucket 的版本管理功能包含三种状态，分别为未开启，开启，暂停。

**未开启：**

Bucket默认不开启版本管理功能，此时状态为：未开启。

**开启：**

Bucket 开启版本管理功能后，用户上传或删除同名的 Object 时，系统会保存该 Object 的历史版本，并为其添加全局唯一的版本 ID，便于用户进行数据恢复。
一旦 Bucket 开启版本管理功能，将无法返回至 “未开启” 状态，只能在 “开启”与“暂停”两种状态间切换。
即：Bucket 一旦开启版本管理功能，Bucket 就进入了“版本化”的状态，无法再次回到“非版本化”的状态，但允许暂停版本管理。

**暂停：**

Bucket 暂停版本管理功能后，用户上传或删除同名的 Object 时，系统不再为其产生新的历史版本。该操作已存在的历史版本无影响。

### 基本概念

**Version ID**

Bucket 开启版本管理功能后，针对存储于该 Bucket 内的所有 Object 的覆盖和删除操作均会产生历史版本，并保存下来，且系统对每个历史版本均添加唯一的 Version ID。
在错误覆盖或者删除 Object 后，用户能根据 Version ID 使 Object恢复至任一指定的历史版本。
对于不指定 Version ID 的 Object 操作，默认都是操作当前 Object 版本。


**Object/Object 版本**

Object 泛指存储于 Bucket 中的文件。针对已开启版本管理功能的 Bucket 来说，同一个 Object 会包含多个 Object 版本，每个 Object 版本均由 Version ID 唯一标识。除添加删除标记的 Object 版本外，其余 Object 版本均占用存储空间。

**Delete Marker**

位于已开启版本管理功能的 Bucket 中的 Object，删除操作并不能彻底删除该 Object。为了区别于其他 Object 版本，QingStor 对象存储使用删除标记（Delete Marker）来标记该版本的状态为已删除。

删除标记（Delete Marker） 是一个特殊类型的 Object，它没有文件内容，只有元数据信息，并且仅通过 Delete Object 产生，占据当前版本的位置，作为一个占位符用于标识一个 Object 已经被删除，而之前的当前版本被如何处理要根据具体当前版本管理功能的状态决定。

删除标记拥有如下特点：

* 若一个 Object 版本是删除标记类型的，不占用实际的存储空间，不包含数据实体。
* 若一个 Object 版本是删除标记类型的，无法通过 Get 请求获取该 Object，QingStor 对象存储仅支持 Delete 请求。


**当前版本/非当前版本**

对于开启了版本管理的 Bucket，其所有的 Object 就进入了版本化的状态。对于 Object 来说，除当前版本外，其他版本均为历史版本，也可统称为非当前版本。
开启版本管理功能后，针对同一个 Object，系统会维护一个当前版本，以及零个或零个以上的历史版本。若用户操作不指定 Version ID，系统默认操作当前版本。


## 使用限制

### 费用说明

* 公有云环境上，版本管理功能本身不收取任何费用，但对存储于 Bucket 中的当前版本和所有历史版本的 Object 都会收取存储费用。
* 为避免不必要的存储费用，用户需及时删除 Object 的不需要的历史版本。此外，若用户对 Object 的历史版本进行下载或恢复等操作，还会产生相应的请求费用、流量费用等。


### 功能互斥

* Region Bucket 不支持开启版本管理功能。
* 同一 Bucket 中，版本管理与 WORM 功能不能同时开启。
* 对于已开启版本管理功能的 Bucket，不再支持跨区域复制功能。
* 对开启版本管理功能的 Bucket 可设置生命周期，用于删除 Object 的历史版本。


### 权限限制

QingStor 对象存储定义版本管理（Bucket Versioning）为 Bucket 的子资源。故，仅允许 Bucket 的所有者“启用/暂停”Bucket 的版本管理功能。

## 操作步骤
1. 进入 QingStor 对象存储的主页面，选择待设置版本管理的 Bucket，点击 **右键** > **设置**：

 ![](/storage/object-storage/_images/set_bucket_replication1.png)

2. 进入 Bucket 设置页面，点击 **版本管理** > **开启**：

 ![](/storage/object-storage/_images/bucket_version1.png)

3. 在弹出的对话框内，确认操作无误后，点击 **确认** 按钮。

4. 开启版本管理功能的 Bucket，用户可以暂停版本管理功能。

 ![](/storage/object-storage/_images/bucket_version2.png)

## 相关API

Bucket Versioning API 见 API 文档:

|操作|API|说明|
|--|--|--|
|设置 Bucket Version|[PUT Bucket Version](/storage/object-storage/api/bucket/version/put_version)|用于设置 Bucket 版本管理功能|
|获取 Bucket Version|[GET Bucket Version](/storage/object-storage/api/bucket/version/get_version)|用于获取已有的 Bucket 版本管理功能状态|

