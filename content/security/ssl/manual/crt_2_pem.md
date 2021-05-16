---
title: "将从青云控制台下载的 crt 证书转换成 pem"
date: 2020-05-14T17:08:56+09:00
description: test
draft: false
---

在云服务器部署https业务的时候，需要填写ssl证书的路径，而这个证书需要是pem格式的，例如下图：
![crt_2_pem_1](../../_images/crt2pem_1.png)

但是从青云控制台生成的证书，下载之后是crt格式的，我们需要将格式进行转换：
```bash
#openssl x509 -outform PEM -in server.crt -pubkey -noout > public_key.pem
```

转换完成后，将pem格式的证书添加到ssl的证书路径中，如ssl_certificate参数后。