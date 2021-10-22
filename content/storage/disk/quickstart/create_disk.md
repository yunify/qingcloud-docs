---
title: "步骤1：购买硬盘"
description: Test description
draft: false
enableToc: false
weight: 20
keyword: 青云，硬盘

---

##  操作场景

您可以在购买云服务器时同时购买硬盘，也可单独购买硬盘。

本章节旨在指导用户单独购买硬盘。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **存储服务** > **云硬盘**，进入**硬盘**页面。

   <img src="../_images/disk_page.png" alt="硬盘" style="zoom:50%;" />

3. 单击**创建**，弹出**创建硬盘**窗口。

   <img src="../_images/create_disk.png" alt="创建硬盘" style="zoom:50%;" />

4. 根据界面提示，配置硬盘基本信息。各项参数说明如下：

<table>
  <tr>
    <th style="width: 110px">参数名称</th>
    <th>参数说明</th>
  </tr>
   <tr>
    <td>计费模式</td>
    <td>支持<b>包年包月</b>及<b>按需计费</b>，详情请参见<a href="/storage/disk/billing/price/">计费说明</a>。</td>
  </tr>
   <tr>
    <td>区域及可用区</td>
    <td>硬盘所在区域及可用区。<br>
      <li>若所选可用区下无云服务器，建议根据界面提示，点击<b>创建主机</b>进行创建。</li>
      <li>若所选可用区下存在云服务器，则默认勾选<b>挂载云服务器</b>，单击下方的下拉列表可选择需要挂载的云服务器。</li><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">
  <b>说明</b>：<br>
  <li>硬盘创建后不可修改可用区。</li>
  <li>硬盘只能挂载给相同可用区的云服务器。</li> 
  <li>不同可用区所支持的硬盘类型不同，详见<a href="/storage/disk/intro/introduction/#产品类型">硬盘分类</a>。</li>
  </div></td>
  </tr>
   <tr>
    <td>硬盘类型</td>
    <td>需要创建的硬盘类型。<br>不同类型硬盘所支持的主机类型不同，硬盘创建后不可修改硬盘类型。硬盘详细说明可参见<a href="/storage/disk/intro/introduction/#产品类型">硬盘分类</a>。
     </td>
  </tr>
   <tr>
    <td>硬盘容量</td>
    <td>硬盘的容量。<br>
      不同类型硬盘所支持的容量范围不同，将鼠标悬浮于容量设置框上，可查看容量范围提示。</td>
  </tr>
  <tr>
    <td>自动续约</td>
    <td>若选择包年包月计费模式，则可设置是否开启自动续约以及续约时长。</td>
  </tr>
	<tr>
    <td>硬盘名称</td>
    <td>硬盘的名称。<br>
      由系统自动填充，用户也可自定义，长度范围为1-64位字符。硬盘名称在硬盘创建完成后支持修改。
    </td>
 	 </tr>
	 <tr>
    <td>附加功能</td>
    <td>
      启用自动备份：若需要自动备份硬盘数据，请点击<b>启用自动备份</b>，然后选择备份策略。若选项中无合适的备份策略，可点击<b>新建定时备份策略</b>进行创建。</td>
  </tr>
    <tr>
    <td>硬盘数量</td>
 		<td>需要创建的云硬盘数量。默认至少1块，支持同时创建多块。</td>
  </tr>
</table>

4. 配置完成后，点击**立即购买**，弹出**确认配置**对话框。
5. 查看配置信息及配置费用，点击**确认**开始创建硬盘。



