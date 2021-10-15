---
title: "Mountain Duck"
date: 2021-08-12T10:08:56+09:00
description:
draft: false
collapsible: false
weight: 18
---

## 概述

Mountain Duck 是 Windows 平台上用于挂载访问对象存储的第三方客户端软件。目前也支持 MAC 平台。

QingStor 对象存储推荐用户使用 Mountain Duck 来挂载由 QingStor 对象存储为其提供的无限容量的在线文件存储空间，从而节省本地磁盘空间。用户通过 Mountain Duck 可以像操作本地磁盘(例如 C 盘、D 盘等)一样方便、快捷地访问或存取 QingStor 对象存储 Bucket 中的各种类型文件。

目前支持以下平台：
- Windows 7、Windows 8、Windows 10 的 32/64 位平台。
- MAC OS 10.12 及以后版本。

## 安装

用户可下载 [Mountain Duck 安装包](https://mountainduck.io/)，解压缩后直接运行安装即可完成。


## 使用

通过 Mountain Duck 成功挂载 QingStor 对象存储中的 Bucket 后，用户即可像操作本地磁盘一样对 QingStor 对象存储 Bucket 中的文件进行读写、存取等操作，同时可通过托盘菜单对缓存设置、版本更新、帐户信息等进行查看或操作。

详细操作步骤如下：

1. 点击 **Mountain Duck -- > 新建链接**，如下图所示：

![](../_images/mountain-duck1.png)

2. 弹出新建链接对话框，根据提示信息输入相关字段，点击 **连接** 即可：

![](../_images/mountain-duck2.png)

   **说明：**
   - 协议下拉框里，选择 `Amazon S3`，如上图所示。
   - `服务器名`，填写 QingStor 对象存储的域名，格式为：`s3.<zone_id>.qingstor.com`。其中 `zone_id` 须根据实际情况进行修改。公有云环境，可参考 [公有云开放区域](/storage/object-storage/intro/object-storage/#zone)。
   - `访问密钥 ID` 与 `访问私钥`，即 AK/SK 须根据实际情况进行填写。具体可参考[获取 Access Key](/storage/object-storage/api/practices/signature/#获取-access-key)。
   - `盘符` 即 QingStor 对象存储 Bucket 成功挂载至本地后的磁盘盘符。

3. 成功挂载后，本地可直接查看 QingStor 对象存储的 Bucket，如下图所示：

![](../_images/mountain-duck3.png)

   **说明：**
   - 成功挂载的 QingStor 对象存储 Bucket，可像本地磁盘一样进行操作。
   - 由于新建链接时，没有指定路径，故这里显示了根目录下的所有 Bucket。
   - 若用户须操作指定 Bucket，可在新建链接时，指定对应的目录即可。

4. Mountain Duck 挂载成功后，用户可通过设置菜单对该工具进行相关操作设置。设置菜单如下图所示：

![](../_images/mountain-duck4.png)


## 升级

当 Mountain Duck 新版本发布后，用户在登录 Mountain Duck 时将会收到版本的更新提示，用户根据需求进行更新即可。当然，用户也可在使用过程中，通过托盘菜单中的检查更新入口主动更新最新版本。
