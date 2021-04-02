---
title: "User Data"
description: 
draft: false
collapsible: true
weight: 35
---

User Data，即用户自定义数据，帮助用户在创建云服务器时上传一部分用户自己定义的数据，让用户可以创建具有一定定制化的云服务器。 目前支持两种上传模式：字符串和压缩包。 字符串会放置于云服务器 /etc/qingcloud/userdata/userdata.string 文件中；压缩包会解压于根目录。

当用户开启 User Data 功能时，同时还提供云服务器的一些系统信息，称为 MetaData。 MetaData 会作为文件放置于 /etc/qingcloud/userdata/ 下，metadata.json 为 JSON 格式，metadata.env 为环境变量格式。
