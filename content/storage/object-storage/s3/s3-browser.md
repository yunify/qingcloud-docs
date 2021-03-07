---
title: "安装使用S3 Browser"
date: 2021-03-07T10:08:56+09:00
description:
draft: false
weight: 39
---

### 1.下载S3 Browser客户端

#### 1.1下载地址：https://s3browser.com/ 

支持**Windows XP/Vista/7/8/8.1/10 and Windows Server 2003/2008/2012/2016/2019**

![s3-browser-1](/storage/object-storage/_images/s3-browser-1.png)

### 2.获取青云的api秘钥

#### 2.1右上角账户-API秘钥

![s3-browser-2](/storage/object-storage/_images/s3-browser-2.png)

![s3-browser-3](/storage/object-storage/_images/s3-browser-3.png)

#### 2.2获取AK/SK

![s3-browser-4](/storage/object-storage/_images/s3-browser-4.png)

2.3点击下载后打开excel文件，记录AK/SK

![s3-browser-5](/storage/object-storage/_images/s3-browser-5.png)

### 3.安装S3 Browser

#### 3.1双击运行s3browser-9-5-5.exe

### 4.配置S3 Browser

#### 4.1创建账号

![s3-browser-6](/storage/object-storage/_images/s3-browser-6.png)

![s3-browser-7](/storage/object-storage/_images/s3-browser-7.png)

Account Name：任意

Account Type：选择S3 compatible Storage

Rest Endpoint: s3.(对象存储所在区域).qingstor.com ，对象存储区域包括：pek3a/pek3b/sh1a/gd2/ap3

Access Key ID：创建下载的excel中所获得qy_acccess_key_id的值

Secret Access Key：创建下载的excel中所获得qy_secret_access_key的值

Use Secure transfer（SSl/TLS):勾选

#### 4.2配置完成后，可以查询配置Endpoint的对象存储

![s3-browser-8](/storage/object-storage/_images/s3-browser-8.png)

#### 4.3可以根据file/size/type/last modified进行排序，点击排序列标题即可

![s3-browser-9](/storage/object-storage/_images/s3-browser-9.png)

#### 4.4通过s3 browser上传文件

![s3-browser-10](/storage/object-storage/_images/s3-browser-10.png)

![s3-browser-11](/storage/object-storage/_images/s3-browser-11.png)