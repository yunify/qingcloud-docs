---
title: "Mountain Duck"
date: 2020-11-24T10:08:56+09:00
description:
draft: false
collapsible: false
weight: 16
---

Mountain Duck 是 Windows 平台上挂载访问对象存储的一种第三方客户端软件，推荐使用其作为 QingStor 对象存储的挂载工具。由 QingStor 为其提供无限容量的在线文件存储空间，而不占用本地磁盘空间。通过 Mountain Duck 您可以像操作本地磁盘(例如C盘、D盘等)一样方便、快捷地访问或存取 QingStor Bucket 中的各种类型文件，其运行后如下图(其中E盘对应着 QingStor 的 Bucket)所示：

![](run.png)

## 支持的平台

目前支持以下 Windows 平台：

- Windows 7、Windows 8、Windows 10 的 32/64 位平台。

## 安装

下载[Mountain Duck 安装包](https://mountainduck.io/)，解压缩后直接运行安装完成即可。

## 快速开始

Mountain Duck 通过登录操作挂载 QingStor 中的 Bucket，挂载成功后即可像操作本地磁盘一样对 Bucket 中的文件进行读写、存取等操作，同时可通过托盘菜单对缓存设置、版本更新、帐户信息等进行查看或操作。

### 登录

#### Host

首先输入您需要挂载的 QingStor Host ，如下图所示如下图所示：

![](login_step1.png)

#### AK/SK

填写相应的 access_key_id 和 secret_access_key 就可以正式登录并挂载到相应的 Bucket ，如下图所如下图所示：

![](login_step2.png)

其中 `access_key_id` 和 `secret_access_key` 可在[青云控制台](https://console.qingcloud.com/access_keys/)申请。

### 设置菜单

Mountain Duck 挂载成功后，对其相关操作(例如同步设置、版本更新等)均通过设置菜单完成，如下图所示：

![](setting_menu.png)

## 版本更新

当后台发布新版本后，您在登录 Mountain Duck 时将会提示您进行新版本的更新，或者在使用过程中通过托盘菜单中的检查更新入口主动更新最新版本即可。
