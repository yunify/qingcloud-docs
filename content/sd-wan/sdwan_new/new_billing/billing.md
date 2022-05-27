---
title: "计费说明（新）"
collapsible: false
draft: true
weight: 40

---

本章节主要介绍 SD-WAN（新版）的计费说明。

## 计费模式

- **包年包月**

  预付费模式，按月或按年收费，且享有大幅的优惠折扣。目前光盒 2 号订阅服务、接入点（实例和接入带宽）都支持包年包月。适合中长期稳定IT需求。

  光盒 2 号订阅服务下单链接：<a href="https://marketplace.qingcloud.com/">https://marketplace.qingcloud.com/

  > - 实例：光盒 2 号硬件设备、VCPE 虚拟机或者 VCPE 容器的 License（序列号）。
  > - 接入点购买时长支持：1个月、3个月、6个月、1年、2年、3年。若购买时长等于或超过1年可享受8.5折优惠。

- **按需计费**

  后付费模式，按秒计费，按小时扣费，不足1小时的将会以实际使用时间进行扣费，目前仅接入点（**实例**和**接入带宽**）支持按需计费。适合短期弹性需求，灵活精准、避免浪费。

## 计费规则

SD-WAN（新版）根据您使用的光盒 2 号订阅服务、实例订阅服务、接入带宽等进行计费。

<table>
  <thead>
  <tr>
     <th width="17%">产品名称</th>
 		 <th width="28%">计费项</th>
    <th width="15%">支持的计费模式</th>
    <th width="40%">计费公式</th>
  </tr>
  </thead>
	<tr>
 	 <td>光盒 2 号订阅服务</td>
  	<td>光盒 2 号硬件设备</td>
  	<td>包年包月</td>
 	 <td><li>450*月数*光盒数量</li><li>预付费，目前光盒 2 号订阅服务仅支持包年包月</li></td>
	</tr>
  <tr>
    <td rowspan="2">接入点</td>
    <td rowspan="2"><li>实例订阅服务（包含光盒 2 号硬件设备、VCPE 虚拟机或者 VCPE 容器的 License（序列号）费用）</li><li>SD-WAN接入带宽（国内）</li></td>
    <td>按需计费</td>
    <td><li>实例订阅服务：0.1 （元/个/小时）</li><li>SD-WAN 接入带宽：0.54 （元/Mbps/小时）</li><li>接入点计费 =（0.1+0.54*Mbps）*小时*接入点数量</li></td>
  </tr>
  <tr>
    <td>包年包月</td>
    <td><li>实例订阅服务：50 （元/个/月）</li><li>SD-WAN 接入带宽：260 （元/Mbps/月）</li><li>接入点计费 =（50+260*Mbps）*月数*接入点数量</li></td>
  </tr>
  <tr>
    <td rowspan="2">其他</td>
   <td>VPC 资源（可选）</td>
    <td colspan="2">VCPE 依赖 VPC 网络资源，VPC 产生的费用将会另外单独计算。价格请参考<a href="/network/vpc/billing/price/"> VPC 网络计费</a>。</td>
  </tr>
  <tr>
    <td>云服务器（可选）</td>
    <td colspan="2">VCPE 依赖云服务器，若将 VCPE 部署在云服务器上，则云服务器产生的费用将另行计算。<br/>云服务器价格详情请参见<a href="/compute/vm/billing/reserved_contract/">云服务器计费说明</a>。<br/>其他云厂商的云服务器价格，请查看该云厂商云服务器的价格表。</td>
  </tr>

</table>

## 计费详情

**实例**和**接入带宽**开始计费和停止计费的时间：

- 开始计费：接入点创建成功后开始计费。
- 停止计费：SD-WAN（新版）服务欠费，或者接入点删除成功后停止计费。







