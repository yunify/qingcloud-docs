---
title: "上传自建证书到青云"
description: test
weight: 30
draft: false
---


## 1.生成私钥

使用 OpenSSL 工具生成一个 RSA 私钥
```bash
# openssl genrsa -des3 -out server.key 2048
Generating RSA private key, 2048 bit long modulus
...........................+++
......................+++
e is 65537 (0x10001)
Enter pass phrase for server.key:
Verifying - Enter pass phrase for server.key:
```

>说明：生成 RSA 私钥，DES3 算法，2048位强度，server.key 是秘钥文件名。  
>注意：生成私钥，需要提供一个至少4位的密码。


## 2.生成 CSR（证书签名请求）

生成私钥之后，便可以创建 CSR 文件了。使用 OpenSSL 实现自签名，具体操作如下：
```bash
# openssl genrsa -des3 -out server.key 2048
Generating RSA private key, 2048 bit long modulus
...........................+++
......................+++
e is 65537 (0x10001)
Enter pass phrase for server.key:
Verifying - Enter pass phrase for server.key:
[root@i-m8wemtbm ~]# openssl req -new -key server.key -out server.csr
Enter pass phrase for server.key:
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [XX]:CN
State or Province Name (full name) []:Shanghai
Locality Name (eg, city) [Default City]:Shanghai
Organization Name (eg, company) [Default Company Ltd]:Qingcloud
Organizational Unit Name (eg, section) []:Remote
Common Name (eg, your name or your server's hostname) []:test.com.cn
Email Address []:qingcloud@qingcloud.com.cn
```
>说明：需要依次输入国家，地区，城市，组织，组织单位，Common Name 和 Email。

## 3.删除私钥中的密码

在第1步创建私钥的过程中，由于必须要指定一个密码。要删除私钥中的密码，操作如下：

```bash
# cp server.key  server.key.org
[root@i-m8wemtbm ~]# openssl rsa -in server.key.org -out server.key
Enter pass phrase for server.key.org:
writing RSA key
```

不删除密码的话，上传会报错

## 4.生成自签名证书

```bash
# openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
Signature ok
subject=/C=CN/ST=Shanghai/L=Shanghai/O=Qingcloud/OU=Remote/CN=test.com.cn/emailAddress=qingcloud@qingcloud.com.cn
Getting Private key
```

## 5.上传证书

进入控制台【SSL 证书服务】界面，选择【上传证书】
![上传证书](../../_images/crt_2_qingcloud_1.png)

![上传证书](../../_images/crt_2_qingcloud_2.png)

在证书内容中填写 server.crt 文件中的内容，在私钥中填写 server.key 文件中的内容，点击【提交】。提交成功后，可以在【我的证书】看到上传的证书
![上传证书](../../_images/crt_2_qingcloud_3.png)