---
title: "监控与报表"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 3
---

## 功能说明

每类监控项可分别查询最近一天、最近一个月、最近 6 个月的监控信息。用曲线图来展示一定时间区间内的变化值，并将监控点的具体数值呈现在表格中。监控项的时间区间可以在页面右侧选择切换。

控制台提供 Bucket 最近一年的消费查询，在查询时间范围内提供以计费项分组的整体消费视图，以及按日期每日消费的折线图和明细表。消费记录根据监控项分别显示。

## 操作步骤

1. 进入 QingStor 对象存储的主页面，点击待查看监控信息的 Bucket 名：

 ![](../../_images/bucket_monitor1.png)

2. 进入 Bucket 详情页面，点击 **监控** ，查看监控详细信息：

 ![](../../_images/bucket_monitor2.png)

3. 进入 Bucket 详情页面，点击 **消费记录** ，查看各资源的消费信息。Bucket 的计费项有 5 项，分别是：存储空间、外网出流量、外网进流量、zone内出流量、zone内进流量，即监控项中对应的内容，详细内容如下图：

 ![](../../_images/bucket_monitor3.png)


## 监控项说明

通过以上步骤查询出来的各监控项指标说明如下：

   <table class="table table-bordered table-striped table-condensed">
      <tr>
        <th>类别</th>
        <th>监控项</th>
        <th>说明</th>
       </tr>
      <tr>
        <td rowspan="4">流量</td>
        <td>外网出流量</td>
        <td>从公网下载 Bucket 中的文件所产生的流量。</td>
      </tr>
      <tr>
        <td>外网进流量</td>
        <td>从公网上传文件至 Bucket 所产生的流量。</td>
     </tr>
     <tr>
        <td>zone内出流量</td>
        <td>从与 Bucket 相同区域的青云平台其他资源下载 Bucket 文件所产生的流量。</td>
     </tr>
     <tr>
        <td>zone内进流量</td>
        <td>从与 Bucket 相同区域的青云平台其他资源上传文件至 Bucket 所产生的流量。</td>
     </tr>
     <tr>
        <td rowspan="1">低频存储流量</td>
        <td>读</td>
        <td>读取低频存储所产生的流量。</td>
     </tr>
     <tr>
        <td rowspan="4">API</td>
        <td>外网读请求</td>
        <td>从公网调用该 Bucket 读相关的 API 的次数，如 HEAD/GET。</td>
     </tr>
     <tr>
        <td>外网写请求</td>
        <td>从公网调用该 Bucket 写相关的 API 的次数，如 PUT/DELETE。</td>
     </tr>
     <tr>
        <td>zone内读请求</td>
        <td>从与 Bucket 相同区域的青云平台其他资源调用该 Bucket 读相关的 API 的次数。</td>
     </tr>
     <tr>
        <td>zone内写请求</td>
        <td>从与 Bucket 相同区域的青云平台其他资源调用该 Bucket 写相关的 API 的次数。</td>
     </tr>
     <tr>
        <td rowspan="4">低频存储API请求</td>
        <td>外网读请求</td>
        <td>从公网调用该 Bucket 读相关的 API 的次数，如 HEAD/GET。</td>
     </tr>
     <tr>
        <td>外网写请求</td>
        <td>从公网调用该 Bucket 写相关的 API 的次数，如 PUT/DELETE。</td>
     </tr>
     <tr>
        <td>zone内读请求</td>
        <td>从与 Bucket 相同区域的青云平台其他资源调用该 Bucket 读相关的 API 的次数。</td>
     </tr>
     <tr>
        <td>zone内写请求</td>
        <td>从与 Bucket 相同区域的青云平台其他资源调用该 Bucket 写相关的 API 的次数。</td>
     </tr>
     <tr>
        <td>存储</td>
        <td>存储空间</td>
        <td>Bucket 所有文件占用的存储空间大小。</td>
     </tr>
     <tr>
        <td rowspan="2">低频存储</td>
        <td>低频存储容量</td>
        <td>低频存储所占用的实际容量</td>
     </tr>
     <tr>
        <td>低频存储计费容量</td>
        <td>由于低频存储有最小存储时间的要求，故计费容量会大于等于实际存储容量。</td>
     </tr>
   </table>

