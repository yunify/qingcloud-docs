---
title: "Linux 使用对象存储作为本地盘"
description:
draft: false
weight: 3
---

本文介绍如何通过 goofys 将 QingStor 对象存储挂载到文件系统使用。项目地址：[Github 项目](https://github.com/kahing/goofys)。

## 操作步骤
1. 创建 Bucket，若已经有可使用的 Bucket，可略过该步骤。详细操作可参考 [创建 Bucket](/storage/object-storage/manual/console/bucket_manage/basic_opt/#创建-bucket)。

2. 申请 API 密钥。详细操作可参考 [创建 Access Key](/storage/object-storage/api/practices/signature/#获取-access-key)。

3. 安装 goofys (以 Ubuntu 为例)
```
mkdir /usr/local/goofys
cd /usr/local/goofys
wget https://github.com/kahing/goofys/releases/latest/download/goofys
chmod +x goofys
echo "PATH=\$PATH:/usr/local/goofys" >> /etc/profile
source /etc/profile
```
4.  挂载 Bucket
```bash
cd ~
vim .aws/credentials

[default]
aws_access_key_id = qy_access_key_id							#API密钥ID
aws_secret_access_key = qy_secret_access_key					#API密钥密码
```
```bash
goofys --endpoint https://s3.<zone>.qingstor.com <bucket_name> <mount_point>
```

5. `df -Th` 查看结果

![image-20210523151936393](../_images/linux_uses_object_storage_as_a_local_disk.assets/image-20210523151936393.png)
