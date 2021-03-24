---
title: "SSH密钥"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: SSH, QingCloud,ssh密钥
---



SSH 密钥可以为云服务器的 root 用户设置 SSH 公钥，当云服务器启动后，用户可使用 SSH 密钥进行 SSH 无密码登录。相对于用户名密码方式，密钥方式拥有更强的安全性，也可以很大程度阻止暴力破解的发生。目前常用的密钥都是非对称性的加密方式，云服务器内置公钥，而用户则拥有私钥。由于采用非对称加密，入侵者试图通过公钥去破解私钥难度会远远超出密码的破解。

