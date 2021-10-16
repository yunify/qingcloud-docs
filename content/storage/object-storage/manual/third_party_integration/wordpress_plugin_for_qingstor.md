---
title: "WordPress QingStor "
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 3
collapsible: false
---

wp-qingstor 是 QingStor 对象存储服务的 WordPress 插件，用于定时备份，自动同步媒体库。

该插件已在 GitHub 开源，本文为简要使用文档。更多详细信息请参见：[GitHub 项目](https://github.com/yunify/wp-qingstor)。

## 安装

1. 在 WordPress 已正确安装的前提下，用户可通过如下三种方式安装该插件：

  - 在 WordPress 插件库中搜索 wp-qingstor 并下载安装。
  - 在 [GitHub Releases](https://github.com/yunify/wp-qingstor/releases) 中下载最新的 zip 格式的安装包，并使用 WordPress 自带的上传插件进行安装。
  - 在 [GitHub Releases](https://github.com/yunify/wp-qingstor/releases) 中下载最新的任意格式安装包，并将安装包解压后移动至 `/wp-content/plugins/` 目录下。

2. 成功安装完插件后，须在插件库中找到并启用该插件。

## 前期准备

1. 在 [管理控制台](https://console.qingcloud.com/access_keys/) 申请 Access Key。可参考[获取 Access Key](/storage/object-storage/api/practices/signature/#获取-access-key)。

2. 在 QingStor 对象存储中，创建一个用于 WrodPress 的 Bucket。详细操作可参考 [创建 Bucket](/storage/object-storage/manual/console/bucket_manage/basic_opt/#创建-bucket)。

## 配置

1. 启用插件后，点击 **设置 > QingStor**。

2. 在 **Bucket 设置** 页面中填写创建的 Access Key，Secret Key 和用于 WordPress 的 Bucket，填写完成后点击 **保存设置**。

![](wordpress_set_bucket.png)

3. 在 **上传设置** 页面中，设置 `文件类型`，`指定前缀`，`Bucket URL` 以及是否开启 `自动替换资源文件 URL`，填写完成后点击 **保存设置**。

![](wordpress_set_upload.png)

4. 在 **备份设置** 页面中，设置 `指定前缀（备份文件保持目录）`，`定时备份`，`保存备份文件的最大数量` 以及是否开启 `邮件通知`，填写完成后点击 **保存设置**。

![](wordpress_set_backup.png)


## 说明
- 上传设置中，开启自动替换资源文件 URL，插件会在文章渲染时自动替换资源文件的 URL 为 Bucket 地址。
- 备份功能需安装 zip 和 mysqldump 程序。用户可分别在终端使用 `zip --version` 和 `mysqldump --version` 命令查看相应的版本号。定时备份的邮件通知依赖 PHP email 的相关设置。
