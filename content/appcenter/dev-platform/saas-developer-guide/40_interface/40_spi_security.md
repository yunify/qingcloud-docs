---
title: "安全设计"
description: SPI 接口的安全设计
keyword: QingCloud, 青云, AppCenter, 云应用开发平台, SaaS 
draft: false
weight: 40
---

青云 app 平台会在每次请求中附上 signature、SPI 接口需对 signature 进行校验。若校验失败，则视该通知消息无效。

### 生成签名

青云平台会按照以下步骤生成签名。

1. 获取所有的 http get 请求参数。

   p1、p2、p3

2. 进行字典排序。

   sort(p1, p2, p3)，假设排序后的顺序是p1、p3、p2

3. 生成 signature 值。

   base64_encode(HMAC_SHA256(secret_app_key, p1=1&p3=3&p2=2)

   secret_app_key：应用创建时，由平台分配，与 sso 密钥不一样，接入方需保存好。secret_app_key可以通过接口重新生成。

### 示例

用户填写的通知url为：[http://www.isvwebsite.com](http://www.isvwebsite.com/?p1=1&p2=2&p3=3&signature=qingcloud-app-token)

SPI 请求：

headers: {'app_signature':'qingcloud-app-token'}
url: [http://www.isvwebsite.com?p1=1&p2=2&p3=3&signature=qingcloud-app-token](http://www.isvwebsite.com/?p1=1&p2=2&p3=3&signature=qingcloud-app-token)

若填写的通知 URL 中本身就含有参数，如：[http://www.isvwebsite.com?platform](http://www.isvwebsite.com/?p1=1&p2=2&p3=3&signature=qingcloud-app-token)=qingcloud ，那么[platform](http://www.isvwebsite.com/?p1=1&p2=2&p3=3&signature=qingcloud-app-token)也将参与签名。

