---
title: "WordPress plugin for QingStor "
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 2
collapsible: false
---

wp-qingstor 是一个 QingStor 对象存储服务 WordPress 插件，支持定时备份，自动同步媒体库。

该插件已在 GitHub 开源，下文为简要使用文档。该开源插件链接地址：[https://github.com/yunify/wp-qingstor](https://github.com/yunify/wp-qingstor)。

## 安装

首先确保 WordPress 已正确安装，安装该插件有三种方法：
1. 在 WordPress 插件库中搜索 wp-qingstor, 进行安装
2. 在 [github releases](https://github.com/yunify/wp-qingstor/releases) 中下载最新的 zip 格式的插件或在 WordPress 插件库中下载，然后使用 WordPress 自带的上传插件进行安装
3. 在 [github releases](https://github.com/yunify/wp-qingstor/releases) 中下载最新的任意格式的插件或在 WordPress 插件库中下载，然后将文件解压后移动到 /wp-content/plugins/ 目录下

选择任意一种方法安装完插件后，需要在插件库中找到该插件并启用。

## 快速开始

使用插件之前请先在[青云控制台](https://console.qingcloud.com/access_keys/)创建 Access Key，Secret Key 和一个用于 WrodPress 的 Bucket。

wp-qingstor 的基本配置项如下，查看更多可用选项可访问 GitHub 项目页面进行查阅。

如上启用插件后，在 `设置->QingStor` 里进行设置：

#### 1. Bucket 设置

  在 Bucket 设置页面中填写创建的 Access Key, Secret Key 和 用于 WordPress 的 Bucket，填写完点击保持设置即可。
![](wordpress_set_bucket.png)

#### 2. 上传设置

  在 `上传设置` 页面中设置 `文件类型`，`指定前缀（Media 文件上传目录）`，`Bucket URL` 以及是否开启 `自动替换资源文件 URL`，填写完点击保存设置即可。
![](wordpress_set_upload.png)

> 开启自动替换资源文件 URL，插件会在文章渲染时自动替换资源文件的 URL 为 Bucket 地址。

#### 3. 备份设置

  在 `备份设置` 页面中设置 `指定前缀（备份文件保持目录）`，`定时备份`，`保存备份文件的最大数量` 以及是否开启 `邮件通知`，填写完点击保持设置即可。
![](wordpress_set_backup.png)

> 备份功能需要安装有 zip 和 mysqldump 程序，可分别在终端使用 zip --version 和 mysqldump --version 命令检查。定时备份的邮件通知依赖 PHP email 的相关设置。
