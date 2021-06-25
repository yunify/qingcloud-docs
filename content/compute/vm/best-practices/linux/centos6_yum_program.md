---
title: "CentOS 6 无法使用 yum 解决办法"
description: Test description
weight: 50
draft: false
enableToc: false

---


## 背景

CentOS 6已经随着2020年11月的结束进入了 EOL（Reaches End of Life），不过有一些老设备依然需要支持，yum 源失效无法访问等情况，可参考此文档添加新 yum 源。



## yum 设置

### 1.源 yum 进行备份

```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
```

### 2.替换为官方的 VAULT 源（海外用户可使用）

```
curl -o /etc/yum.repos.d/CentOS-Base.repo https://www.xmpan.com/Centos-6-Vault-Official.repo
```



### 3.国内可使用 yum 源(任选其一)

   （1）替换国内的 VAULT 源（国内使用）

```
curl -o /etc/yum.repos.d/CentOS-Base.repo https://www.xmpan.com/Centos-6-Vault-Aliyun.repo
```



  （2）国内可使用的 yum repo 文件配置，如下

```

[base]
name=CentOS-6
failovermethod=priority
baseurl=http://mirrors.sohu.com/centos/6.10/os/x86_64/
gpgcheck=0
      
```

