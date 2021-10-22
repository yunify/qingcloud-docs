---
title: "更新 SSL 证书"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

## 事件说明

SSL 证书是超文本传输安全协议 HTTPS 的基石，由受信任的根证书颁发机构颁发。而 QingStor 对象存储选用的 SSL 证书由全球使用最为广泛的根证书机构 Let's Encrypt 签发。

近期 Let's Encrypt 机构新增了根证书，使得老的根证书在 2021年9月30号 过期。由于 OpenSSL，GnuTLS 等 SSL 库实现问题，Let's Encrypt 提供的交叉签名根证书可能会导致您的应用在访问 QingStor 对象存储时出现形如 `certificate has expired` 或证书过期的报错，常见的形式如下：

```plain_text
# wget https://qingstor.com
--2021-10-13 10:15:53--  https://qingstor.com/
Resolving qingstor.com (qingstor.com)... 139.198.8.201
Connecting to qingstor.com (qingstor.com)|139.198.8.201|:443... connected.
ERROR: cannot verify qingstor.com's certificate, issued by ‘/C=US/O=Let's Encrypt/CN=R3’:
  Issued certificate has expired.
To connect to qingstor.com insecurely, use `--no-check-certificate'.
```

## 解决方案

针对以上问题，QingStor 对象存储团队提供了详细的解决方案。分别说明如下：

### 升级系统

保持您的系统处于更新状态是解决此类问题的最佳方案。如果您的系统不便进行完整的升级，请着重升级 openssl，gnutls 和 ca-certificates。该解决方案适用于如下平台：

- Windows >= XP SP3
- macOS >= 10.12.1
- iOS >= 10
- Android >= 7.1.1
- Mozilla Firefox >= 50.0
- Ubuntu >= xenial / 16.04
- Debian >= jessie / 8
- Java 8 >= 8u141
- Java 7 >= 7u151
- NSS >= 3.26

**具体操作如下：**
- CentOS / RHEL：`yum upgrade openssl gnutls ca-certificates`
- Ubuntu / Debian：`apt upgrade openssl libgnutls30 ca-certificates`

### 手动禁用过期证书
如果您的系统已不再提供更新，或者不便进行系统更新，请手动禁用过期证书，具体的操作方案如下：

**Linux 平台**

1. 打开并编辑 `/etc/ca-certificates.conf` 文件；
2. 在 `mozilla/DST_Root_CA_X3.crt` 这一行前增加一个英文，半角的感叹号：`!`，以禁用该证书；

  ```plain_text
  !mozilla/DST_Root_CA_X3.crt 
  ```
3. 编辑完成后，运行如下命令行以更新系统的证书链；

  ```plain_text
  update-ca-certificates
  ```
4. 在 CentOS 7 及其以后的版本，您还需要执行如下命令行：

  ```plain_text
  cp /etc/pki/ca-trust/extracted/cadir/DST_Root_CA_X3.pem /etc/pki/ca-trust/source/blacklist
  update-ca-trust
  ```


**Windows 平台**

使用快捷键 `Win + r` 并输入 `certmgr.msc` 以打开系统的证书管理器，搜索 `DST ROOT CA X3` 并删除相关证书后重启即可。

**Java 平台**

执行如下命令：
```plain_text
sudo keytool -delete -alias dstrootcax3 -cacerts -storepass 'changeit'
```

