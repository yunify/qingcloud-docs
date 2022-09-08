---
title: "版本管理"
description: 本小节主要介绍 Bucket 版本管理相关内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
draft: false
weight: 10
---

## 概述

版本管理（Bucket Versioning）为用户提供 Bucket 级别的数据保护功能。开启版本管理后，针对 Object 的覆盖上传、删除操作均会产生 Object 的历史版本，并保存下来。从而使得用户可以保存、检索和还原各个版本的 Object，恢复历史数据。

开启版本管理后，由于 QingStor 对象存储会计算 Object 的每个版本大小，并统计相应的存储空间，因此，QingStor 对象存储建议用户配置生命周期规则来定期清理删除 Object 的历史版本。

### 状态说明

Bucket 的版本管理功能包含三种状态，分别为未开启，开启，暂停。

**未开启：**

Bucket默认不开启版本管理功能，此时状态为：未开启。

**开启：**

Bucket 开启版本管理功能后，用户上传或删除同名的 Object 时，系统会保存该 Object 的历史版本，并为其添加全局唯一的版本 ID，便于用户进行数据恢复。
一旦 Bucket 开启版本管理功能，将无法返回至`未开启`状态，只能在`开启`与`暂停`两种状态间切换。
即：Bucket 一旦开启版本管理功能，Bucket 就进入了`版本化`的状态，无法再次回到`非版本化`的状态，但允许暂停版本管理。

**暂停：**

Bucket 暂停版本管理功能后，用户上传或删除同名的 Object 时，系统不再为其产生新的历史版本。该操作已存在的历史版本无影响。

### 基本概念

**Version ID**

Bucket 开启版本管理功能后，针对存储于该 Bucket 内的所有 Object 的覆盖和删除操作均会产生历史版本，并保存下来，且系统对每个历史版本均添加唯一的 Version ID。
在错误覆盖或者删除 Object 后，用户能根据 Version ID 使 Object 恢复至任一指定的历史版本。
对于不指定 Version ID 的 Object 操作，默认都是操作当前 Object 版本。


**Object/Object 版本**

Object 泛指存储于 Bucket 中的文件。针对已开启版本管理功能的 Bucket 来说，同一个 Object 会包含多个 Object 版本，每个 Object 版本均由 Version ID 唯一标识。除添加删除标记的 Object 版本外，其余 Object 版本均占用存储空间。

**Delete Marker**

位于已开启版本管理功能的 Bucket 中的 Object，删除操作并不能彻底删除该 Object。为了区别于其他 Object 版本，QingStor 对象存储使用删除标记（Delete Marker）来标记该版本的状态为已删除。

删除标记（Delete Marker） 是一个特殊类型的 Object，它没有文件内容，只有元数据信息，并且仅通过 Delete Object 产生，占据当前版本的位置，作为一个占位符用于标识一个 Object 已经被删除。

删除标记拥有如下特点：

* 若一个 Object 版本是删除标记类型的，不占用实际的存储空间，不包含数据实体。
* 若一个 Object 版本是删除标记类型的，无法通过 Get 请求获取该 Object，仅支持 Delete 请求。


**当前版本/非当前版本**

对于开启了版本管理的 Bucket，其所有的 Object 就进入了版本化的状态。对于 Object 来说，除当前版本外，其他版本均为历史版本，也可统称为非当前版本。
开启版本管理功能后，针对同一个 Object，系统会维护一个当前版本，以及零个或零个以上的历史版本。若用户操作不指定 Version ID，系统默认操作当前版本。


## 使用限制

### 费用说明

* 公有云环境上，版本管理功能本身不收取任何费用，但对存储于 Bucket 中的当前版本和所有历史版本的 Object 都会收取存储费用。
* 为避免不必要的存储费用，用户需及时删除 Object 的不需要的历史版本。此外，若用户对 Object 的历史版本进行下载或恢复等操作，还会产生相应的请求费用、流量费用等。


### 使用限制

* 对于已开启版本管理功能的 Bucket，暂不支持跨区域复制功能。
* 开启了跨区域复制功能的 Bucket，也暂不支持开启版本管理功能。
* 对开启版本管理功能的 Bucket 可设置生命周期，用于删除 Object 的历史版本。


### 权限限制

QingStor 对象存储仅允许 Bucket 的所有者`启用/暂停` Bucket 的版本管理功能。

## 基本操作

本章节介绍如何开启关闭版本管理功能。

1. 进入 QingStor 对象存储的主页面，选择待设置版本管理的 Bucket，点击 **右键** > **设置**：

 ![](/storage/object-storage/_images/set_bucket_replication1.png)

2. 进入 Bucket 设置页面，点击 **版本管理** > **开启**：

 ![](/storage/object-storage/_images/bucket_version1.png)

3. 在弹出的对话框内，确认操作无误后，点击 **确认** 按钮。

4. 开启版本管理功能的 Bucket，用户可以暂停版本管理功能。

 ![](/storage/object-storage/_images/bucket_version2.png)

## 文件操作

本章节介绍开启版本管理功能后，文件的相关操作。如何进入文件列表页面，可参考[Bucket 文件标签页](/storage/object-storage/manual/console/object_manage/basic_opt/)

### 文件列表

若用户需查看 Object 的历史版本，可在文件列表页面，点击**显示历史版本**开关，打开历史版本列表。

![](/storage/object-storage/_images/bucket_version_listfile.png)

### 删除文件

若用户不想彻底删除文件，后期仍然有恢复该数据的需求，则可以在文件列表页面执行如下操作。

1. 点击**显示历史版本**开关，关闭历史版本列表。

2. 选择待删除的文件，执行[删除操作](/storage/object-storage/manual/console/object_manage/basic_opt/#删除文件)。

3. 确认已删除文件不在列表显示。

4. 点击**显示历史版本**开关，打开历史版本列表，确认文件没有被删除，只是增加了删除标记。

 ![](/storage/object-storage/_images/bucket_version_deletefile1.png)

### 彻底删除

若用户不再需要该文件或该文件某一具体的版本，可执行彻底删除操作，以免产生存储相关费用。彻底删除的文件或着文件版本，将不再支持恢复。操作步骤如下。

1. 在文件列表页面，点击**显示历史版本**开关，打开历史版本列表。

2. 如需删除所有文件版本，可选中文件名后，点击**更多操作->彻底删除**。

 ![](/storage/object-storage/_images/bucket_version_deletefile2.png)

3. 如需删除文件的指定版本，可选中文件的具体版本后，点击**更多操作->彻底删除**或**右键->彻底删除**。

 ![](/storage/object-storage/_images/bucket_version_deletefile3.png)

4. 彻底删除的文件，将不再支持恢复操作。也不在文件列表显示。彻底删除的某一文件版本，则该文件将不再能恢复至该版本。

### 恢复文件

对于已开启版本管理功能，且没有执行彻底删除操作的文件，能进行恢复操作，用户可指定将该文件恢复至某一具体版本。操作步骤如下：

1. 在文件列表页面，点击**显示历史版本**开关，打开历史版本列表。

2. 选择待恢复的版本，即，将该版本作为当前版本，点击**恢复**。

 ![](/storage/object-storage/_images/bucket_version_restore1.png)

3. 恢复后的文件，在文件列表显示。

## 设置生命周期

由于开启 Bucket 版本管理功能后，针对存储于该 Bucket 内的所有 Object 的覆盖和删除操作均会产生历史版本，并保存下来。这些历史版本，均会产生存储费用。因此，QingStor 对象存储建议用户配置生命周期规则来定期清理删除 Object 的历史版本。操作步骤可参考[生命周期管理](/storage/object-storage/manual/console/bucket_manage/lifecycle/#操作步骤)。


## 相关API

Bucket Versioning API 见 API 文档:

|操作|API|说明|
|--|--|--|
|设置 Bucket Version|[PUT Bucket Version](/storage/object-storage/api/bucket/version/put_version)|用于设置 Bucket 版本管理功能|
|获取 Bucket Version|[GET Bucket Version](/storage/object-storage/api/bucket/version/get_version)|用于获取已有的 Bucket 版本管理功能状态|

