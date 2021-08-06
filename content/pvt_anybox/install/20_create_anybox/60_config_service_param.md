---
title: "配置服务环境参数"
description: 配置服务环境参数
weight: 70
draft: false
---

(1) 为了更好地方便您使用 ANYBOX 内容协作平台，需要您填写 ANYBOX 访问的相关域名。

> - 主域名：访问anybox的入口域名（例如： `anybox.com`）
> - account服务域名：登陆时使用的域名（例如： `account.anybox.com`）
> - 控制台域名：进入管理控制台的域名（例如： `admin.anybox.com`）
> - api服务域名：内部及app使用（例如：`api.anybox.com`）

注意：因为通过公网访问Anybox服务，因国家法规规定需要使用已备案的域名，也可以使用二级/三级子域名（是在主域名的前面添加自定义名称），示例说明  

例如域名：`dns-example.com`：  
`dns-example.com` 是主域名（也可称托管一级域名），主要指企页名  

`example.dns-example.com` 是子域名（也可称为托管二级域名）  

`www.example.dns-example.com` 是子域名的子域（也可称为托管三级域名）   

同时，需要您将准备好的备案域名解析到申请好的公网 IP 地址上。
以上4个域名用户可以定制, 但是主域名必须一致. 域名确定后无法修改。如下图：  

![](https://anybox-docs.pek3b.qingstor.com/installation/images/images16.jpg)

(2) ANYBOX 需要 API 密钥来调用 QingCloud 对象存储 API。请在控制台生成 API 密钥。  

(3) 前置负载均衡器协议 此选项是为使用https访问准备的. 如果您想使用https访问部署好的anybox, 这个选项可以设置为https, 然后在控制台增加一个负载均衡器, 并且配置好https证书. 做好443--80端口的转发. 具体负载均衡器的配置请参考相关文档. 如无以上需求, 保持默认值http即可



