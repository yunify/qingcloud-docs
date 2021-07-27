---
title: "域名常用状态解释"
description: 
weight: 4
keyword: 域名常用状态, 域名注册, QingCloud, 青云
---



域名各个状态说明：

* 以client开头的状态表示由客户端(注册商)可以增加的状态。
* 以server开头的状态表示服务器端(注册局)操作增加的状态。



<table>
  <tr>
  	<th style="width: 120px">域名状态</th>
 		<th>含义</th>
    <th>说明</th>
  </tr>
  <tr>
  <td colspan="3">新注册的域名，可能存在以下状态</td>
  </tr>
  <tr>
  	<td>addPeriod</td>
  	<td>注册局设置的域名新注册期</td>
    <td>域名新注册5天内会出现此状态，但不影响域名的正常使用，5天后自动解除该状态。</td>
  </tr>
  <tr>
  	<td>ok</td>
  	<td>正常状态</td>
    <td>域名可常使用状态，不需要进行操作，也没有设置任何保护措施。</td>    
  </tr>
  <tr>
  <td colspan="3">出于对域名注册信息的保护，域名在设置某些安全锁后会出现以下状态。</td>
  </tr>
  <tr>
  	<td>clientDeleteProhibited</td>
  	<td>注册商设置禁止删除</td>
    <td>保护域名的一种状态，域名不能被删除。</td>
  </tr>
  <tr>
  	<td>clientUpdateProhibited</td>
  	<td>注册商设置禁止更新</td>
    <td>包含注册人/管理联系人/技术联系人/付费联系人/DNS等域名信息不能被修改，但可以设置或修改解析记录。</td>
  </tr>
  <tr>
  	<td>clientTransferProhibited</td>
  	<td>注册商设置禁止转移</td>
    <td>保护域名的一种状态，域名不能转移注册商。</td>
  </tr>
  <tr>
  	<td>serverDeleteProhibited</td>
  	<td>注册商设置禁止删除</td>
    <td>保护域名的一种状态，域名不能被删除。</td>
  </tr>
  <tr>
  	<td>serverUpdateProhibited</td>
  	<td>注册商设置禁止更新</td>
    <td>包含注册人/管理联系人/技术联系人/付费联系人/DNS等域名信息不能被修改，但可以设置或修改解析记录。</td>
  </tr>
  <tr>
  	<td>serverTransferProhibited</td>
  	<td>注册商设置禁止转移</td>
    <td>保护域名的一种状态，域名不能转移注册商。部分新注册的域名或域名转移注册商60天内会被注册局设置禁止转移，60天后会自动解除该状态；部分域名涉及仲裁或诉讼案被注册局设置禁止转移，仲裁或诉讼案结束会解除该状态。</td>
  </tr>
   <tr>
  	<td colspan="3">其他禁止解析、禁止续费的状态</td>
  </tr>
  <tr>
  	<td>pendingVerification</td>
  	<td>注册信息审核期</td>
    <td>域名注册后未进行实名审核，注册成功后5天内提交实名资料进行审核，如果5天后仍未提交资料进行实名审核，域名会被serverHold（暂停解析）。</td>
  </tr>
  <tr>
  	<td>clientHold</td>
  	<td>注册商设置暂停解析</td>
    <td>域名会被暂停解析，联系注册商解除该状态。</td>
  </tr>
  <tr>
  	<td>serverHold</td>
  	<td>注册局设置暂停解析</td>
    <td>域名会被解析暂停，“.cn”中英文域名注册成功后，如果未通过实名审核多会出现该状态，域名有效期内完成实名审核，审核通过后会解除该状态。</td>
  </tr>
  <tr>
  	<td>inactive</td>
  	<td>非激活状态</td>
    <td>注册域名时未填写域名DNS，导致域名注册成功后无法进行解析，需在注册商处设置域名DNS。</td>
  </tr>
  <tr>
  	<td>clientRenewProhibited</td>
  	<td>注册商设置禁止续费</td>
    <td>域名无法进行域名续费，通常是域名处于仲裁或法院争议期，需联系注册商确认原因。</td>
  </tr>
  <tr>
  	<td>serverRenewProhibited</td>
  	<td>注册局设置禁止续费</td>
    <td>域名无法进行域名续费，通常是域名处于仲裁或法院争议期，需联系注册商确认原因。</td>
  </tr> 
  <tr>
  	<td>pendingTransfer</td>
  	<td>注册局设置转移过程中</td>
    <td>域名正处于转移注册商的过程中。</td>
  </tr>
  <tr>
  	<td>redemptionPeriod</td>
  	<td>注册局设置赎回期</td>
    <td>联系注册商高价赎回域名。</td>
  </tr>
  <tr>
  	<td>pendingDelete</td>
  	<td>注册局设置待删除/赎回期</td>
    <td>国际域名：域名已过赎回期等待被删除，删除后可对外重新开放注册。 国内域名：域名处于赎回期，联系注册商高价赎回域名。</td>
  </tr>
	<tr>
  </tr></table>








