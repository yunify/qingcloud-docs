---
title: "费用中心"
date: 2020-01-01 T00:38:25+09:00
weight: 2
description: Test description
draft: false
enableToc: false
keyword: 账单, 发票, 订单, 充值, 费用
---
***
## 费用中心介绍
QingCloud 费用中心为用户提供基于页面的云产品交易和账单管理能力，您可以通过费用中心清晰地了解自己的账户、订单、账单和费用等相关信息。

## 费用中心菜单介绍
[费用中心](https://console.qingcloud.com/finance/overview/)为您提供了如下功能：
<table border="1">
   <border  ></border>
   <thead>
   		<tr>
			<th  style="width:2000px">菜单</th>
			<th  style="width:2000px">子菜单</th> 
		</tr >
   </thead>
    <tr>
	    <td style="background:#fff;">账户总览</td>
	    <td style="background:#fff;">账户总览</td>
	</tr >
	<tr >
	    <td rowspan="2" style="background:#fff;">账务管理</td>
	    <td style="background:#fff;">钱包</td>
	</tr>
	<tr>
	    <td style="background:#fff;">优惠券</td>
	</tr>
	<tr >
	    <td rowspan="4" style="background:#fff;">消费账单</td>
	    <td style="background:#fff;">费用总览</td>
	</tr>
	<tr>
	    <td style="background:#fff;">费用预估</td>
	</tr>
    <tr>
	    <td style="background:#fff;">消费明细</td>
	</tr>
	<tr>
	    <td style="background:#fff;">续约管理</td>
	</tr>
		<tr >
	    <td rowspan="2" style="background:#fff;">发票管理</td>
	    <td style="background:#fff;">我的发票</td>
	</tr>
	<tr>
	    <td style="background:#fff;">地址管理</td>
	</tr>
</table>

## 费用中心功能介绍
###  账户总览
[账户总览](https://console.qingcloud.com/finance/overview/)为您提供账户的整体视图。

提供查询账户可用额度和账户折扣的功能。

提供快速入口到用户账户管理：充值、合同申请、发票申请。

提供30天内余额支出预估功能。

提供快速入口到用户账单管理和续费管理。
![](_images/100.png)
#### 可用额度预警
提供设置可以额度预警能力，设置后当您账户可用额度从高于变为低于预警阈值时，您会收到我们的提醒。
![](_images/101.png)
#### 可用优惠券
显示您目前可用代金券数量。
#### 可索取发票总额
显示您目前可开票总额。
#### 30天内待续费资源
显示您30天内，需要手动续费（不包括自动续费）的资源和合约，并提供快捷续费的快捷入口。
#### 月度账单
显示您最近的7个月的账单信息。
### 账务管理
#### 钱包
提供账户查询，账户充值的功能。
####  优惠券
提供优惠券查询功能，您可以通过该界面查询优惠券的余额、适用资源、有效期、可用区域。
### 消费账单
#### 账单总览
您可以使用[账单总览](https://console.qingcloud.com/finance/billing/)查看您在 青云QingCloud 上每个账单期的账单概况，包括资源的价格及优惠券抵扣等信息，并支持选定时间范围内的账单导出。
#### 消费明细
您可以使用[消费明细](https://console.qingcloud.com/finance/statistic/)查看您在 青云QingCloud 上每个月的消费明细，并支持多维度条件筛选。
#### 消费预估
消费预估根据您当前的按需资源、包年包月资源、即将产生续约操作的预留资源进行费用预估。请注意费用预估仅供参考，根据实际情况进行收取。

目前我们消费预估，主账户视图下，是可以去查看主账户和子账户的资源或者服务的预估情况，子账户视图下也能看到自己的预估情况。详情见下图：
![](_images/102.png)
>目前按项目预估中，包括项目中目前所有资源的预估，如果有一个合约内资源属于多个项目，我们会根据实际的项目和资源的关系，将预留合约的费用进行拆分预估。例如，用户有一个预留合约总共包括5台主机产品，预留合约自动续费续约续约的费用是500元，合约中有4台属于项目A，1台属于项目B，合约在30天内会到期自动续费，那项目A的这4台资源的预估为400元，项目B中这1台的预估为100元。
#### 续约管理
您可以在续约管理功能进行预留合约、包年包月产品的全局续费操作：对您购买的青云产品到期前进行续费，或设置自动续费，修改自动续费期限。为了确保您的业务续费成功，建议您在业务到期前办理续费。

>续约管理支持的产品有：预留合约（主机、硬盘）、集群、SD-WAN等。

操作方式：登录 [青云控制台](https://console.qingcloud.com/)，鼠标移至页面上方【费用】，在下拉菜单中单击续费管理，进入[续约管理](https://console.qingcloud.com/finance/renewal_management//)页面。

注意：提交续约之后，需要完成`完成支付` 才能成功续约。
![](_images/103.png)
### 发票
#### 我的发票
通过我的发票页面，您可以管理您的发票抬头，并进行发票申请和邮寄物流查看。
#### 邮寄地址管理
通过邮寄地址管理页面，您可以管理您的常用地址，方便在申请发票或者合同时使用。



