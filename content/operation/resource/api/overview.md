---
title: "概述"
description: 本小节主要介绍项目 api 概述。 
keyword: 项目 概述；api 概述
draft: false
weight: 05
collapsible: false

---

青云QingCloud想用户开放所有项目操作相关的API，API通过HTTPS GET方式来进行调用。

在调用 API 前，需要先申请API 密钥，获取 API 密钥 ID ( access_key_id ) 和 API 密钥私钥 ( secret_access_key )。

- API **密钥 ID** 将作为参数包含在每一个请求中发送；

- API **密钥私钥**负责生成请求串的签名进行鉴权。

>API密钥的私钥 需要被妥善保管，请勿外传。

本文档提供对项目进行相关操作，如对项目、项目角色进行增、删、改、查等。