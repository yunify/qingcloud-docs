---
title: "验证指南"
description: manual
draft: false
---





## 域名验证方式 {#valid-domain}

建议使用 DNS 验证方式，如果没有网站DNS权限，也可使用文件验证。

补全公司信息后点击”验证“：

[![](../../_images/domain_valid.png)](../../_images/domain_valid.png)

**DNS 验证**

通过配置 DNS 的方式确定域名的所属权，需要为签发的域名做 TXT 解析到

[![](../../_images/domain_valid_dns.png)](../../_images/domain_valid_dns.png)

根据提示需要把 qingcloud.com 做 TXT 解析到 2017091017280119g7yql9fvbjknt6jsj3bvufh5636kokk5vsh4eiur4rqee9s1

下图以 [DNSPOD](https://www.dnspod.cn) 为例做如下解析即可

[![](../../_images/dnspod_valid.png)](../../_images/dnspod_valid.png)

**文件验证**

在签发的域名下的服务器，添加指定内容的静态内容来确定域名的所属权。根据提示需要在网站下新建 /.well-known/pki-validation/fileauth.txt 文件，内容是 20170910172838365vi3ozp3er1qgxihlr53snf4of6ck5s1hrmduol7swsj068w 

保证 http(s)://qingcloud.com/.well-known/pki-validation/fileauth.txt 这个文件可以正常返回

[![](../../_images/domain_valid_file.png)](../../_images/domain_valid_file.png)

## 确认函确认 {#confirm-letter}

**下载确认函**

订单列表页点击”上传“，如下图显示，点击”下载确认函“

[![](../../_images/confirm0.png)](../../_images/confirm0.png)

确认函示例

[![](../../_images/confirm1.jpg)](../../_images/confirm1.jpg) [![](../../_images/confirm2.jpg)](../../_images/confirm2.jpg) [![](../../_images/confirm3.jpg)](../../_images/confirm3.jpg)

填写后加盖公司公章，保存为一张 png 文件并上传，成功后等待工作人员联系并核实信息，确认后等待签发
