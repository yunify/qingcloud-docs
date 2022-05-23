---
title: "步骤四：查看作业结果"
linkTitle: "步骤四：查看作业结果"
description: 本章节介绍如何查看作业结果
keyword: 云计算, 青云, QingCloud, HPC，查看作业结果
draft: false
weight: 4
---

作业运行完成后，用户可以查看作业运行结果。

## 前提条件

- 已开通弹性高性能计算 HPC 服务。
- 已创建**共享集群 (HPC 集群)**或者**专属集群 (EHPC 集群)**。
- 已提交并运行作业。

## 操作步骤
1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **高性能计算 HPC**，默认进入**高性能计算 HPC** 的**集群管理**页面。

   ![job_result_1](../../_images/job_result_1.png)

3. 点击**作业管理**，进入作业管理页面，用户可以查看作业运行状态。

   ![job_result_2](../../_images/job_result_2.png)

4. 作业运行完成后，在作业列表中可查看作业运行状态，点击**查看详情**，查看当前作业的运行结果文件、标准输出日志以及错误输出日志等信息。
   
   ![job_result_3](../../_images/job_result_3.png)

   **作业详情参数说明**
  <table>
  <tr>
    <th style="width:20%">信息类型</th> 
    <th style="width:30%">参数</th>
    <th style="width:50%">说明</th>
  </tr>
  <tr>
    <td rowspan="6">集群信息</td>
    <td>所属集群</td>
    <td>该作业所属集群的名称</td>
  </tr>
  <tr>
    <td>集群 ID</td>
    <td>该作业所属集群的 ID</td>
   </tr>
   <tr>
     <td> 集群状态</td>
     <td> 当前集群的状态，活跃为唯一正常状态。</td>
   </tr>
   <tr>
     <td> 调度器</td>
     <td> 目前采用默认调度器</td>
   </tr>
   <tr>
     <td> 共享目录</td>
     <td> 用户创建的共享目录的名称</td>
   </tr>
   <tr>
     <td> 申请/创建时间</td>
     <td> HPC / EHPC 集群创建时间</td>
   </tr>
    <tr>
    <td rowspan="4">队列信息</td>
    <td>队列名称</td>
    <td>该作业所属队列。HPC 集群中包括共享队列和专属队列， EHPC 集群只支持默认队列</td>
  </tr>
  <tr>
    <td>队列规格</td>
    <td>当前作业所属队列的规格</td>
   </tr>
   <tr>
     <td> 计费模式</td>
     <td> 包年包月或按需计费</td>
   </tr>
   <tr>
     <td> 申请时间</td>
     <td> 当前作业所属队列的申请时间</td>
   </tr>
    <tr>
    <td rowspan="6">基本信息</td>
    <td>作业名称</td>
    <td>当前作业的名称，可自定义需根据实际情况而定</td>
  </tr>
  <tr>
    <td>作业 ID</td>
    <td>当前作业的 ID，提交作业时自动生成</td>
   </tr>
   <tr>
     <td> 作业状态</td>
     <td> 当前作业的执行状态</td>
   </tr>
   <tr>
     <td> 调度器作业 ID</td>
     <td> 调度器作业 ID，系统自动生成</td>
   </tr>
   <tr>
     <td> 开始时间</td>
     <td> 该作业开始执行的时间</td>
   </tr>
   <tr>
     <td> 更新时间</td>
     <td> 该作业状态更新的时间</td>
   </tr>
      <tr>
    <td rowspan="8">运行信息</td>
    <td>作业运行时长</td>
    <td>当前作业从开始执行到运行结束所用时长</td>
  </tr>
  <tr>
    <td>平均 CPU 使用率</td>
    <td>该作业运行所消耗的集群内所有计算节点的平均 CPU 使用率</td>
   </tr>
   <tr>
     <td> 内存用量</td>
     <td> 该作业运行所消耗集群内计算节点的内存</td>
   </tr>
   <tr>
     <td> 作业是否闲置</td>
     <td> true 或 false</td>
   </tr>
   <tr>
     <td> SWAP 用量</td>
     <td> 该作业运行过程中的 SWAP 使用量</td>
   </tr>
   <tr>
     <td> 作业核心数</td>
     <td> 提交作业时已设定的该作业所需 CPU 核心数</td>
   </tr>
    <tr>
     <td> 标准输出路径</td>
     <td> 该作业运行结果所保存的路径</td>
   </tr>
    <tr>
     <td> 错误输出路径</td>
     <td> 该作业运行失败后，错误日志所保存的路径</td>
   </tr>
  <tr>
    <td rowspan="4">结果文件</td>
    <td>名称</td>
    <td>该作业运行结束后的结果文件，其中 .out 后缀文件为输出结果，.err 后缀文件为错误日志</td>
  </tr>
  <tr>
    <td>更新时间</td>
    <td>该作业结果文件的更新时间</td>
   </tr>
   <tr>
     <td> 大小</td>
     <td> 结果文件所占内存的大小</td>
   </tr>
   <tr>
     <td> 操作</td>
     <td> 用户可下载或查看任一结果文件</td>
   </tr>
  <table>



  
   

