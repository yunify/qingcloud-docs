---
title: "验证指南"
description: SSL 证书验证
keyword: SSL, DNS, 证书, 域名
draft: false
weight: 10
---


## 域名验证方式 {#valid-domain}

建议使用 DNS 验证方式，如果没有网站 DNS 权限，也可使用文件验证。

补全公司信息后点击**验证**：

![](../../_images/domain_valid.png)

**DNS 验证**

![](../../_images/domain_valid_dns.png)

根据提示，为签发的域名做 TXT 解析。

以 [QingCloud DNS](https://www.qingcloud.com/products/dns/) 为例，在控制台中，选择**产品与服务** > **域名与网站** > **云解析DNS**，进入域名解析页面，添加域名并配置解析记录。具体操作方法，可参见[配置域名解析记录](/site/dns/quickstart/creatrecordset/)。

![](../../_images/dnspod_valid.png)

**文件验证**

在签发的域名下的服务器，添加指定内容的静态内容来确定域名的所属权。根据提示需要在网站下新建 /.well-known/pki-validation/fileauth.txt 文件，内容是 20170910172838365vi3ozp3er1qgxihlr53snf4of6ck5s1hrmduol7swsj068w 。

保证 http(s)://qingcloud.com/.well-known/pki-validation/fileauth.txt 这个文件可以正常返回。

![](../../_images/domain_valid_file.png)

## 确认函确认 {#confirm-letter}

**下载确认函**

订单列表页点击**上传**，如下图显示，然后点击**下载确认函**。

![](../../_images/confirm0.png)

确认函示例：

![](../../_images/confirm1.jpg) 
![](../../_images/confirm2.jpg)
![](../../_images/confirm3.jpg)

填写后加盖公司公章，保存为一张 png 文件并上传，成功后等待工作人员联系并核实信息，确认后等待签发。
