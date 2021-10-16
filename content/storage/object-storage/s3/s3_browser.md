---
title: "安装 S3 Browser"
date: 2021-03-07T10:08:56+09:00
description:
draft: false
weight: 39
---

## 下载S3 Browser客户端

下载地址：https://s3browser.com/ 

支持的操作系统有：
- Windows XP/Vista/7/8/8.1/10 
- Windows Server 2003/2008/2012/2016/2019

![s3-browser-1](/storage/object-storage/_images/s3-browser-1.png)

## 获取青云的 API 秘钥

操作步骤可参考 [获取 Access Key](/storage/object-storage/api/practices/signature/#获取-access-key)。

## 安装 S3 Browser

1. 右键 S3 Browser-9-5-5.exe，点击 **打开**：

![s3-browser-12](/storage/object-storage/_images/s3-browser-12.png)

2. 在弹出的对话框内点击 **接受协议 > 下一步 > 下一步 > 下一步 > 完成**：

![s3-browser-13](/storage/object-storage/_images/s3-browser-13.png)

![s3-browser-14](/storage/object-storage/_images/s3-browser-14.png)

![s3-browser-15](/storage/object-storage/_images/s3-browser-15.png)

![s3-browser-16](/storage/object-storage/_images/s3-browser-16.png)

## 配置S3 Browser

1. 创建账号

![s3-browser-6](/storage/object-storage/_images/s3-browser-6.png)

![s3-browser-7](/storage/object-storage/_images/s3-browser-7.png)

**页面各字段说明：**

- Account Name: 任意
- Account Type: 选择S3 compatible Storage
- Rest Endpoint: s3.<Zone_id>.qingstor.com ，QingStor 对象存储区域包括：pek3a/pek3b/sh1a/gd2/ap3
- Access Key ID: 前文获取的 API 秘钥的 `qy_acccess_key_id` 的值
- Secret Access Key: 前文获取的 API 秘钥的 `qy_secret_access_key` 的值
- Use Secure transfer（SSl/TLS): 勾选

2. 配置完成后，可以查询配置 Endpoint 的对象存储

![s3-browser-8](/storage/object-storage/_images/s3-browser-8.png)

3. 可以根据 file/size/type/last modified 进行排序，点击排序列标题即可

![s3-browser-9](/storage/object-storage/_images/s3-browser-9.png)

4. 通过S3 Browser 上传文件

![s3-browser-10](/storage/object-storage/_images/s3-browser-10.png)

![s3-browser-11](/storage/object-storage/_images/s3-browser-11.png)