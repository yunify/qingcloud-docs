---
title: "硬盘简介"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 青云，硬盘，SSD
---

## 产品概述

硬盘是青云 QingCloud 平台为云服务器提供的块存储设备，支持多种规格和类型，并可弹性扩展，可满足不同场景的业务需求，并且支持对云服务器和硬盘进行备份。

硬盘可分为系统盘和数据盘。

**系统盘**

系统盘随着云服务器的创建而自动创建，云服务器的删除而自动删除。系统盘创建时将自动初始化，默认磁盘分区形式为主启动记录分区（MBR）。

**数据盘**

数据盘独立于云服务器的生命周期，需要通过控制台单独创建，然后挂载到云服务器，并初始化后才能正常使用。

## 产品优势

- 规格丰富：支持多种类型及规格，包括性能型硬盘、超高性能型硬盘和容量型硬盘，满足您不同的业务场景及预算要求。
- 超高性能：增强型SSD云硬盘，单盘IO性能可达10万IOPS。
- 安全可靠：通过软件定义存储 SDS2.0 的功能，让您可以灵活的选择副本策略，数据可靠性达99.9999%；同时，业务正常运行时也可以进行在线备份，并可随时回滚，满足您各方面的使用需求。
- 弹性扩容：支持在线扩容，满足您不断变化的存储需求。
- 便捷易用：支持菜单界面和图形界面操作，并随时查看资源使用情况、操作日志等。

## 产品类型

按照硬盘性能及不同适用场景，青云QingCloud 提供了企业型SSD、容量型、通用型SSD和增强型SSD四种类型的云硬盘，其中企业型SSD为本地盘，其他类型则为云盘。

各类硬盘性能参数及适用场景如下：

<table>
  <tr>
    <th style="width: 120px">硬盘参数</th>
    <th style="width: 140px">企业型SSD</th>
 		<th style="width: 145px">容量型</th>
  	<th style="width: 165px">通用型SSD</th>
  	<th style="width: 150px">增强型SSD</th>
  </tr>
   <tr>
      <td>容量</td>
      <td>20～2000 GB</td>
      <td>20～2000 GB</td>
      <td>20～2000 GB</td>
     	<td>450～32000 GB</td>
   </tr>
   <tr>
      <td>单盘最大吞吐</td>
      <td>320 MB/S</td>
      <td>150 MB/S</td>
      <td>350 MB/S</td>
     	<td>750 MB/S</td>
   </tr>
      <tr>
      <td>单盘吞吐性能</td>
      <td></td>
      <td></td>
      <td></td>
     	<td></td>
   </tr>
   <tr>
      <td>单盘最大IOPS</td>
      <td>30000</td>
      <td>5500</td>
      <td>50000</td>
     	<td>100000</td>
   </tr>
   <tr>
      <td>单盘IOPS性能</td>
      <td></td>
      <td></td>
      <td></td>
     	<td></td>
   </tr>
   <tr>
      <td>时延</td>
      <td>0.3 ms</td>
      <td>1 ms</td>
      <td>0.5 ms</td>
     	<td>0.2 ms</td>
   </tr>
  <tr>
      <td>适用场景</td>
      <td>高性能、低延时，适用大部分企业级场景</td>
      <td>高性价比，适合中等性能要求的中小型建站等场景</td>
      <td>高性能，适用大部分企业级场景</td>
     	<td>超高性能，适用大型数据库等I/O密集型场景</td>
   </tr>
  <tr>
    <td>典型应用举例</td>
		<td>
				<li>多媒体业务</li>
      	<li>开发与测试业务</li>
				<li>大数据离线分析</li>
				<li>数据仓库</li>
        <li>日志处理</li>
    </td>
     <td></td>
    <td>
      	 <li>高性能计算应用</li>
      	 <li>I/O密集型应用</li>
				 <li>关系型数据库</li>
				 <li>NoSQL</li>
				 <li>分布式文件系统服务</li>
    </td>
    <td>
				<li>Oracle RAC</li>
        <li>SQL Server</li>
				<li>RadonDB</li>
        <li>大数据分析与计算</li>
        <li>高可用容器集群</li>
    </td>
   </tr>
</table>
