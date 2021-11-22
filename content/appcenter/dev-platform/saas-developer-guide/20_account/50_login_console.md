---
title: "免密登录控制台"
description: SaaS
draft: false
weight: 50
---

用户界面点击立即访问按钮，前端会获取到当前用户的 token，然后写携带 token 跳转到服务商提供的地址 authUrl?token={usertoken}

> **说明：**
>
> - 跳转到服务商 authUrl 地址后，需校验是否携带token参数，如果携带需请求青云接口验证token有效性
> - 如果token未携带活无效，需要访问青云sso让用户重新登录来获取token
> - 获取了用户 token 后，服务商即可访问青云 API。

![](/appcenter/dev-platform/_images/um_sec_login.png)

