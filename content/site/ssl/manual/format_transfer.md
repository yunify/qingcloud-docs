---
title: "SSL 证书格式讲解及转换方法"
description: SSL证书格式讲解及转换方法
keyword: SSL, DNS, 证书, 域名
draft: false
weight: 15
---

根据不同服务以及服务的版本，我们需要用到不同的证书和私钥格式，各种格式的证书及私钥遵循的公钥加密标准（Public Key Cryptography Standards, PKCS）和编码方式也各不相同，下面我们对此逐一进行介绍。

## 常见证书格式

电子证书可以二进制或Base64形式存储，常见的文件扩展名有 .cer、.crt、.der和.pem。如果把证书和私钥一起存储，则可以使用PKCS#12（.p12、.pfx）格式。

### 格式说明

- DER用于二进制DER编码的证书，这类证书常见的文件扩展有.der、.cer、.crt等。
- PEM用于不同类型的X.509v3文件，是以“ - BEGIN ...”前缀的ASCII（Base64）数据，这类证书常见的文件扩展名有.der、.cer、.crt等。
- CER和CRT几乎同义，证书可以被编码为二进制DER或ASCII PEM。
- PKCS7 文件，也被称为 P7B，通常用于 Java Keystores 和 Microsoft IIS（Windows）。它们是 ASCII 文件，可以包含证书和 CA 证书。
- PKCS12 文件，也被称为 PFX 文件，通常用于在 Micrsoft IIS（Windows）中导入和导出证书链。

Tomcat 一般使用Java提供的密码库。通过Java的Keytool工具，生成Java Keystore（JKS）格式的证书文件。

Apache、Nginx 等，使用OpenSSL提供的密码库，生成PEM、CRT等格式的证书文件。

Windows Server中的Internet Information Services（IIS），一般使用PFX格式的证书文件。

## 证书转换方法

### 方法1

通过一些证书格式转换的网页操作，例如[SSL在线工具](https://www.ssleye.com/ssltool/jks_pkcs12.html)、[证书格式转换](https://myssl.com/cert_convert.html)。

### 方法2

根据格式转换的需求安装OpenSSL、Keytool工具，使用命令进行配置。

> **说明**
>
> 在执行格式转换的命令前，需要通过证书编码方式、常见文件扩展名区分证书格式，譬如DER编码的证书是二进制格式，而PEM编码的证书是文本格式，内容以"-BEGIN..."开始。

#### **OpenSSL**

1. PEM和DER相互转换（特指编码方式，与文件扩展名无关）

   查看PEM编码证书：

   ```
    openssl x509 -in xxx.crt -text -noout
   ```

   查看DER编码证书：

   ```
   openssl x509 -in xxx.der -inform der -text -noout
   ```

   格式转换：

   ```
   openssl x509 -in xxx.pem -outform DER -out xxx.der
   
   openssl x509 -in xxx.der -inform DER -outform PEM -out xxx.pem
   ```

2. PEM和PKCS7相互转换

   > **说明**
   >
   > PKCS7文件常常是证书链文件，此文件中可包含多个证书。

   格式转换：

   ```
   openssl crl2pkcs7 -nocrl -certfile xxx.pem -out xxx.p7b
   
   openssl pkcs7 -print_certs -in xxx.p7b -out xxx.pem
   ```

3. PEM和PKCS12转换

   > **说明**
   >
   > PKCS12文件中一般包含了证书和私钥，在格式转换时需要将私钥也添加进去，同时还需要输入一个密码。

   格式转换：

   ```
   openssl pkcs12 -export -in xxx.crt -inkey xxx.key -out xxx.pfx
   
   PKCS12-->CRT&KEY
   1、提取证书:
   openssl pkcs12 -in xxx.pfx -nokeys -out SERVERNAME.pem
   2、提取私钥:
   openssl pkcs12 -in xxx.pfx -nocerts -out SERVERNAME.key -nodes
   ```

#### **Keytool**

> **说明**
>
> Keytool使用Java提供的密码库，使用此命令需先配置[Java环境](https://www.oracle.com/java/technologies/downloads/)。

**JKS 和 PKCS12 转换**

> **说明**
>
> 和PKCS12一样，JKS也需要输入密码，同时还需要验证PKCS12文件的密码。

格式转换：

```z
keytool -importkeystore -srckeystore xxx.pfx -destkeystore xxx.jks -srcstoretype PKCS12 -deststoretype JKS

keytool -importkeystore -srckeystore xxx.jks -destkeystore xxx.pfx -srcstoretype JKS -deststoretype PKCS12
```

