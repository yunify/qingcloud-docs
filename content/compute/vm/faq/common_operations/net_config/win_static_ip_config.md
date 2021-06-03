---
title: "Windows云服务器配置静态IP地址"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 60
draft: false
enableToc: false
---

登录到Windows云服务器---网络和共享中心---更改适配器设置----右键以太网卡---属性---Internet版本协议4---使用下面的ip地址---确定

![图片](/compute/vm/_images/image-1568884268968.png)

![图片](/compute/vm/_images/image-1568884270100.png)

![图片](/compute/vm/_images/image-1568884271390.png)

![图片](/compute/vm/_images/image-1568884272521.png)

![图片](/compute/vm/_images/image-1568884273655.png)

可以使用开始----运行----cmd命令行（以管理员身份）----ipconfig /all---回车，查看配置的ip地址

![图片](/compute/vm/_images/image-1568884277992.png)