---
title: "监控指标"
description: 本小节主要介绍 PostgreSQL 主要的监控指标。 
keyword: PG,监控指标
weight: 10
collapsible: false
draft: false
---

PostgreSQL 提供集群服务和资源性能监控指标和告警信息。

- 服务监控指标统计了 PostgreSQL 中的相关信息，可用于定位分析数据库的性能。

- 资源监控指标统计了云服务器的资源信息，如 CPU 使用率、硬盘 IOPS 情况等，可用于查看系统性能是否到达瓶颈。

> **注意**
> 
> PostgreSQL 集群 Agent 只用于监控集群的服务和资源指标，不会收除集除监控指标外的其它数据。

## 支持的服务监控指标

<table>
  <tr>
  	<th>监控项</th>
  	<th>子监控项</th>
  	<th>监控周期</th>
  	<th>单位</th>
  	<th>指标含义</th>
  </tr>
  <tr>
    <td rowspan="2">连接信息</td>
    <td>连接数</td>
    <td>5 分钟</td>
    <td>counts</td>
    <td>统计当前连接到 PostgreSQL 的总连接数以个为单位。</td>
  </tr>
   <tr>
    <td>未使用连接数</td>
    <td>5 分钟</td>
    <td>counts</td>
    <td>统计当前还能连接到 PostgreSQL 的总连接数以个为单位。</td>
  </tr>
    <tr>
    <td rowspan="2">事务信息</td>
    <td>事务提交数</td>
    <td>5 分钟</td>
    <td>counts</td>
    <td>统计当前 PostgreSQL 的事务总数，以次为单位。</td>
  </tr>
  <tr>
    <td>事务回滚数</td>
    <td>5 分钟</td>
    <td>counts</td>
    <td>统计当前 PostgreSQL 的回滚事务总数，以次为单位。</td>
  </tr>
  <tr>
    <td rowspan="3">元组信息</td>
    <td>插入元组数</td>
    <td>5 分钟</td>
    <td>counts</td>
    <td>统计当前 PostgreSQL 的插入元组的数量，以个为单位。</td>
  </tr>
  <tr>
    <td>更新元组数</td>
    <td>5 分钟</td>
    <td>counts</td>
    <td>统计当前 PostgreSQL 的更新元组的数量，以个为单位。</td>
  </tr>
  <tr>
    <td>删除元组数</td>
    <td>5 分钟</td>
    <td>counts</td>
    <td>统计当前 PostgreSQL 的删除元组的数量，以个为单位。</td>
  </tr>
  <tr>
    <td>最大事务持续时间</td>
    <td>最大事务持续时间</td>
    <td>5 分钟</td>
    <td>s</td>
    <td>统计当前 PostgreSQL 最大事务的持续时间，以秒为单位。</td>
  </tr>
  <tr>
    <td rowspan="2">数据块信息</td>
    <td>读取缓存块数</td>
    <td>5 分钟</td>
    <td>counts</td>
    <td>统计在数据库内存中读取的数据块数，每个块 8KB。</td>
  </tr>
  <tr>
    <td>读取磁盘块数</td>
    <td>5 分钟</td>
    <td>counts</td>
    <td>统计在磁盘中读取的数据块数，每个块 8KB。</td>
  </tr>
  <tr>
    <td>缓存命中率</td>
    <td>缓存命中率</td>
    <td>5 分钟</td>
		<td>counts</td>
    <td>统计所有块的数量，命中率 = 缓存块数 /（缓存块数 + 磁盘块数）</td>
  </tr>
</table>



## 支持的资源监控指标

| 监控项 | <span style="display:inline-block;width:80px">监控周期</span> | <span style="display:inline-block;width:60px">单位</span> | 指标含义 |
|:--- |:--- |:--- |:--- |
| CPU | 5分钟 | % | 统计当前资源 CPU 使用率。<br>以 % 为单位。 |
| 内存 | 5分钟 | % | 统计当前资源内存使用率。<br>以 % 为单位。 |
| 硬盘使用率 | 5分钟 | % | 统计当前资源硬盘使用率。<br>以 % 为单位。 |
| 硬盘 IOPS | 5分钟 | counts/s | 统计每秒资源硬盘 IOPS 读取或写入次数，可分别查看读取或写入监控指标。<br>以次每秒为单位。 |
| 硬盘吞吐量 | 5分钟 | MByte/s | 统计每秒资源硬盘读取或写入速率，可分表获取读取或写入速率。<br>以 MByte 每秒为单位。 |
