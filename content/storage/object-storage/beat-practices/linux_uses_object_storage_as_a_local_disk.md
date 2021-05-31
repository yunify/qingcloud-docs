---
title: "Linux使用对象存储作为本地盘"
date: 2021-05-18T10:08:56+09:00
description:
draft: false
weight: 3
---
>通过goofys将对象存储挂载到文件系统使用
>
>项目地址：https://github.com/kahing/goofys

## 创建对象存储（已有跳过）
![image-20210523145927842](../_images/linux_uses_object_storage_as_a_local_disk.assets/image-20210523145927842.png)

## 申请API密钥

![image-20210523150041285](../_images/linux_uses_object_storage_as_a_local_disk.assets/image-20210523150041285.png)

## 安装goofys(以Ubuntu为例)

```
mkdir /usr/local/goofys
cd /usr/local/goofys
wget https://github.com/kahing/goofys/releases/latest/download/goofys
chmod +x goofys
echo "PATH=\$PATH:/usr/local/goofys" >> /etc/profile
source /etc/profile
```
## 挂载bucket
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
df -Th查看结果

![image-20210523151936393](../_images/linux_uses_object_storage_as_a_local_disk.assets/image-20210523151936393.png)
