---
title: "配置Linux云服务器免密登录"
date: 2021-02-15T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---


## 1.本机自身实现无密码登录

**1.1生成公钥、私钥对**

```
ssh-keygen
```

**1.2 进行配置**

进入到生成密钥文件夹中，默认在用户的家目录下面，一个隐藏的.ssh文件夹中。

```
cd /root/.ssh/
```

查看是否有“authorized_keys”文件，如果有，直接将公钥追加到“authorized_keys”文件中，如果没有，创建“authorized_keys”文件，并修改权限为“600”

```
touch authorized_keys
chmod 600 authorized_keys 
```

追加公钥到“authorized_keys”文件中

```
cat id_rsa.pub >> authorized_keys 
```

## 2. 配置（A、B云服务器）间实现无密码登录

### 2.1 配置hosts文件

在A、B服务器中分别配置该文件

```
vim /etc/hosts
10.89.127.123  lz-1
10.89.127.125  lz-2
```

### 2.1. 生成秘钥

A、B云服务器分别生成公钥、私钥对

```
ssh-keygen
```

### 2.2. 开始配置

进入到生成密钥文件夹中，默认在用户的家目录下面，一个隐藏的.ssh文件夹中。

```
cd /root/.ssh/
```

使用scp命令，将B云服务器公钥发送给A云服务器

```
scp id_rsa.pub lz-1:/root
```

查看A云服务器的/root/.ssh目录下是否有“authorized_keys”文件，如果有，直接将需无密码登录的云服务器公钥追加到“authorized_keys”文件中，如果没有，创建“authorized_keys”文件，并修改权限为“600”

```
touch authorized_keys
chmod 600 authorized_keys
```

追加A云服务器公钥、B云服务器公钥到“authorized_keys”文件中

```
cat id_rsa.pub >> authorized_keys 
```

### 2.3 测试

```
ssh lz-1
ssh lz-2
```

配置结束

## 注意：

- 若有多个服务器，则多个服务器均需要更改hosts文件，内容为所有的服务器ip和云服务器名（包括自己）
- 最重要的是authorized_keys文件，该文件是包含所有服务器（包括自己）的`id_rsa.pub`内容，权限为600。
- 配置技巧，只需要在一台服务器中配置上述步骤，然后将authorized_keys文件拷贝到其他服务器中。