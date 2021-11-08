---
title: "购买指南"
description: manual
draft: false
weight: 1
---


## 购买流程 {#id5}

**第一步：创建订单**

注解

免费证书仅限使用在 QingCloud 的负载均衡中，禁止用户下载，公司和姓名信息仅支持中文，仅限国内企业用户购买。

点击控制台左侧的安全 - SSL 证书服务，进入如下界面：

![](../../_images/step_1.png)

点击“购买 SSL 证书”

选择需要的 [_证书类型_](../../intro/introduction/#id3) 和 [_证书品牌_](../../billing/price/#brand) 点击“确定”

![](../../_images/step_2.png)

**第二步：补全域名信息**

DV 域名同时需要选择域名验证方式,建议使用 DNS 验证方式，如果没有网站 DNS 权限则使用文件验证。

点击“订单列表”选择订单，然后点击“补全域名”

![](../../_images/step_3.png)

输入需要签发的域名并选择加密算法

DV 证书需要选择 [_域名验证方式_](../../manual/manualq/#valid-domain)

注解

*   当通用域名为主域名时，如 qingcloud.com，默认会签发出www.qingcloud.com 和 qingcloud.com (免费赠送不计入数量)。
*   当通用域名为泛域名时，如 *.qingcloud.com， 默认会签发出 *.qingcloud.com 和 qingcloud.com (免费赠送不计入数量) 。
*   额外的域名：填写额外的子域名到多域名输入框中，即下图所示，提交签发出 qingcloud.com www.qingcloud.com api.qingcloud.com 和 docs.qingcloud.com 四个域名，同时建议多个子域名情况下直接购买泛域名证书。

![](../../_images/step_4.png)

**第三步：支付**

在订单列表页，点击“支付”按钮弹出如下对话框，点击确认支付即可。

![](../../_images/step_5.png)

**第四步：补全公司信息**

公司信息和个人信息补全后，非签发失败情况下不退款，请核实签发域名和选择的品牌正确与否。

填写公司信息后点击”下一步“，填写个人信息，点击”提交“

![](../../_images/step_7.png)

**第五步：域名确认/上传确认函**

DV 域名的验证通过 DNS 验证，或者文件验证即可，验证过程通常小于一天， OV/EV 证书的验证需要通过上传确认函的方式进行。

***DV 验证***

[_域名验证方式_](../../manual/manualq/#valid-domain)

***OV,EV 验证***

[_确认函确认_](../../manual/manualq/#confirm-letter)

**第六步:下载证书**

证书签发成功后进入订单完成状态，可以点击证书详情进行下载，也可以直接在负载均衡器中加载使用。

![](../../_images/download.png)