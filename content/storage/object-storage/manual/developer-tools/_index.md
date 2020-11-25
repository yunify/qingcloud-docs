---
title: "客户端工具"
date: 2020-11-24T10:08:56+09:00
description:
draft: false
collapsible: true
weight: 21
---

# 客户端工具

QingStor™ 对象存储提供了多种命令行和 GUI 工具，便于用户高效操作、管理对象存储资源，迁移数据到对象存储。

## qsctl 

[文档](./qsctl)

实现文件上传下载的命令行工具

## qscamel 

[文档](./qscamel)

对大批量数据进行迁移的工具

## qsftpd 

[文档](./qsftpd)

使用 Qingstor Bucket 提供 Ftp 服务

## 本地盘工具

[文档](local_fs_tools/index.html)

支持 Linux 和 Windows 平台的本地挂载盘

> 本地盘工具只适合对象存储的运维管理，不能用于服务器生产环境下.

## CLI 

[文档](./qingcloud-cli)

实现 API 调用的命令行工具

## Mountain Duck

[文档](./mountain-duck)

支持 Windows 平台的本地挂载盘

## s3fs

[详情](https://github.com/s3fs-fuse/s3fs-fuse)

s3fs 允许用户在 Linux 与 macOs 系统中通过 FUSE 挂载一个 S3 桶作为本地盘。
s3fs 保留本地文件格式，并允许用户使用其他工具，例如 AWS CLI.

## RClone

[详情](http://rclone.org)

类似 rsync 方式进行多种数据源之间同步的工具 (第三方开发)
