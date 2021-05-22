---
title: "主机"
date: 2020-01-30T00:40:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 云主机, QingCloud, 实例, 虚拟机
---

# 主机( Instance )

青云 IaaS 平台所交付的主机服务，是云计算的核心业务，也是用户最为关心的计算的核心。

# 主机类型

青云 IaaS 平台提供如下几种类型的主机，可以按照自己的实际情况进行选择。

## 基础型 （ S1 ）

基础型主机提供从 1C 1G - 8C 32G 的可选配置，是面向个人或中小团队用户推出的入门型主机类型，以极高的性价比满足低负载应用、轻量 Web 应用、开发测试环境、轻量级企业服务等使用场景需求。

|实例类型    |CPU    |内存    |内网带宽    |
|:----|:----|:----|:----|
|s1.small.r1   |1核    |1G    |0.2 Gbps    |
|s1.small.r2   |1核    |2G    |0.2 Gbps    |
|s1.large.r1   |2核    |2G    |0.5 Gbps    |
|s1.large.r2   |2核    |4G    |0.5 Gbps    |
|s1.large.r4   |2核    |8G    |0.5 Gbps    |
|s1.xlarge.r1  |4核    |4G    |0.8 Gbps    |
|s1.xlarge.r2  |4核    |8G    |0.8 Gbps    |
|s1.xlarge.r4  |4核    |16G    |0.8 Gbps    |
|s1.2xlarge.r1 |8核    |8G    |1.2 Gbps    |
|s1.2xlarge.r2 |8核    |16G    |1.2 Gbps    |
|s1.2xlarge.r4 |8核    |32G    |1.2 Gbps    |

## 企业型 ( E1 )

企业型主机提供从 2C 4G - 32C 128G 的可选配置，是面向严肃的企业级生产应用环境设计的高性能高可靠计算实例资源，满足企业客户核心数据库、在线业务系统、传统企业服务等使用场景需求。

|实例类型    |CPU    |内存    |内网带宽    |
|:----|:----|:----|:----|
|e1.large.r2   |2核    |4G    |1.5 Gbps    |
|e1.large.r4   |2核    |8G    |1.5 Gbps    |
|e1.large.r8   |2核    |16G    |1.5 Gbps    |
|e1.xlarge.r1  |4核    |4G    |2 Gbps    |
|e1.xlarge.r2  |4核    |8G    |2 Gbps    |
|e1.xlarge.r4  |4核    |16G    |2 Gbps    |
|e1.xlarge.r8  |4核    |32G    |2 Gbps    |
|e1.2xlarge.r1 |8核    |8G    |3 Gbps    |
|e1.2xlarge.r2 |8核    |16G    |3 Gbps    |
|e1.2xlarge.r4 |8核    |32G    |3 Gbps    |
|e1.2xlarge.r8 |8核    |64G    |3 Gbps    |
|e1.3xlarge.r1 |12核    |12G    |4.5 Gbps    |
|e1.3xlarge.r2 |12核    |24G    |4.5 Gbps    |
|e1.3xlarge.r4 |12核    |48G    |4.5 Gbps    |
|e1.3xlarge.r8 |12核    |96G    |4.5 Gbps    |
|e1.4xlarge.r1 |16核    |16G    |5.5 Gbps    |
|e1.4xlarge.r2 |16核    |32G    |5.5 Gbps    |
|e1.4xlarge.r4 |16核    |64G    |5.5 Gbps    |
|e1.4xlarge.r8 |16核    |128G    |5.5 Gbps    |
|e1.6xlarge.r2 |24核    |48G    |7.5 Gbps    |
|e1.6xlarge.r4 |24核    |96G    |7.5 Gbps    |
|e1.6xlarge.r8 |24核    |192G    |7.5 Gbps    |
|e1.8xlarge.r2 |32核    |64G    |8 Gbps    |
|e1.8xlarge.r4 |32核    |128G    |8 Gbps    |

## 企业型 ( E2 )

企业型主机提供从 2C 4G - 32C 512G 的可选配置，企业型 e2 主机采用独享 CPU模式，可提供更高更稳定的计算性能，并针对人工智能工作负载进行优化，满足企业更严苛的性能要求。

|实例类型    |CPU    |内存    |内网带宽    |
|:----|:----|:----|:----|
|e2.large.r2   |2核    |4G    |1.5 Gbps    |
|e2.large.r4   |2核    |8G    |1.5 Gbps    |
|e2.large.r8   |2核    |16G    |1.5 Gbps    |
|e2.xlarge.r1  |4核    |4G    |2 Gbps    |
|e2.xlarge.r2  |4核    |8G    |2 Gbps    |
|e2.xlarge.r4  |4核    |16G    |2 Gbps    |
|e2.xlarge.r8  |4核    |32G    |2 Gbps    |
|e2.2xlarge.r1 |8核    |8G    |3 Gbps    |
|e2.2xlarge.r2 |8核    |16G    |3 Gbps    |
|e2.2xlarge.r4 |8核    |32G    |3 Gbps    |
|e2.2xlarge.r8 |8核    |64G    |3 Gbps    |
|e2.3xlarge.r1 |12核    |12G    |4.5 Gbps    |
|e2.3xlarge.r2 |12核    |24G    |4.5 Gbps    |
|e2.3xlarge.r4 |12核    |48G    |4.5 Gbps    |
|e2.3xlarge.r8 |12核    |96G    |4.5 Gbps    |
|e2.4xlarge.r1 |16核    |16G    |5.5 Gbps    |
|e2.4xlarge.r2 |16核    |32G    |5.5 Gbps    |
|e2.4xlarge.r4 |16核    |64G    |5.5 Gbps    |
|e2.4xlarge.r8 |16核    |128G    |5.5 Gbps    |
|e2.6xlarge.r2 |24核    |48G    |7.5 Gbps    |
|e2.6xlarge.r4 |24核    |96G    |7.5 Gbps    |
|e2.6xlarge.r8 |24核    |192G    |7.5 Gbps    |
|e2.8xlarge.r2 |32核    |64G    |10 Gbps    |
|e2.8xlarge.r4 |32核    |128G    |10 Gbps    |
|e2.8xlarge.r8 |32核    |256G    |10 Gbps    |
|e2.8xlarge.r16 |32核    |512G    |10 Gbps    |

## 企业型（E3）

本类型云服务器正在公测中，如需使用，请填写[表单申请](https://jinshuju.net/f/oNtOJw)。

采用第三代英特尔®至强®可扩展处理器（Ice Lake），主频：2.6GHz，睿频：3.4GHz，和上一代相比性能大幅提升，独享 CPU 模式，提供从 2C 4G - 120C 480G 可选配置，IOPS可达100k，最大内网带宽可达32G，适用场景：

- 对计算与网络有更高性能要求的网站和Web服务器、企业级应用。
- 高性能数据库、大数据分析与挖掘、分布式内存缓存、Hadoop和Spark集群。
- 数据分析、批量计算、视频编码等计算密集型应用程序。

| 实例规格        | vCPU | 内存 | 内网带宽 | 内网收发包PPS | 延时 |
| --------------- | ---- | ---- | -------- | ------------- | ---- |
| ec3.xlarge.r1   | 4核  | 4G   | 2.5Gbps  | 200万         | 91μs |
| ec3.2xlarge.r1  | 8核  | 8G   | 3.5Gbps  | 400万         | 91μs |
| ec3.3xlarge.r1  | 12核 | 12G  | 5Gbps    | 400万         | 91μs |
| ec3.4xlarge.r1  | 16核 | 16G  | 6Gbps    | 400万         | 91μs |
| ec3.8xlarge.r1  | 32核 | 32G  | 13Gbps   | 400万         | 91μs |
| ec3.large.r2    | 2核  | 4G   | 2Gbps    | 100万         | 91μs |
| ec3.xlarge.r2   | 4核  | 8G   | 2.5Gbps  | 200万         | 91μs |
| ec3.2xlarge.r2  | 8核  | 16G  | 3.5Gbps  | 400万         | 91μs |
| ec3.3xlarge.r2  | 12核 | 24G  | 5Gbps    | 400万         | 91μs |
| ec3.4xlarge.r2  | 16核 | 32G  | 6Gbps    | 400万         | 91μs |
| ec3.6xlarge.r2  | 24核 | 48G  | 9Gbps    | 400万         | 91μs |
| ec3.8xlarge.r2  | 32核 | 64G  | 13Gbps   | 400万         | 91μs |
| ec3.16xlarge.r2 | 64核 | 128G | 25Gbps   | 400万         | 91μs |
| eg3.large.r4    | 2核  | 8G   | 2Gbps    | 100万         | 91μs |
| eg3.xlarge.r4   | 4核  | 16G  | 2.5Gbps  | 200万         | 91μs |
| eg3.2xlarge.r4  | 8核  | 32G  | 3.5Gbps  | 400万         | 91μs |
| eg3.3xlarge.r4  | 12核 | 48G  | 5Gbps    | 400万         | 91μs |
| eg3.4xlarge.r4  | 16核 | 64G  | 6Gbps    | 400万         | 91μs |
| eg3.6xlarge.r4  | 24核 | 96G  | 9Gbps    | 400万         | 91μs |
| eg3.8xlarge.r4  | 32核 | 128G | 13Gbps   | 400万         | 91μs |
| eg3.16xlarge.r4 | 64核 | 256G | 25Gbps   | 400万         | 91μs |
| eg3.24xlarge.r4 | 96核 | 384G | 30Gbps   | 400万         | 91μs |
| er3.large.r8    | 2核  | 16G  | 2Gbps    | 100万         | 91μs |
| er3.xlarge.r8   | 4核  | 32G  | 2.5Gbps  | 200万         | 91μs |
| er3.2xlarge.r8  | 8核  | 64G  | 3.5Gbps  | 400万         | 91μs |
| er3.3xlarge.r8  | 12核 | 96G  | 5Gbps    | 400万         | 91μs |
| er3.4xlarge.r8  | 16核 | 128G | 6Gbps    | 400万         | 91μs |
| er3.6xlarge.r8  | 24核 | 192G | 9Gbps    | 400万         | 91μs |
| er3.8xlarge.r8  | 32核 | 256G | 13Gbps   | 400万         | 91μs |

## 网络增强企业型（E3）

本类型云服务器正在公测中，如需使用，请填写[表单申请](https://jinshuju.net/f/oNtOJw)。

独享 CPU 模式，采用第三代英特尔®至强®可扩展处理器（Ice Lake），主频：2.6GHz，睿频：3.4GHz。网络优化实例，延时低至25μs，内网收发包最高2400万，IOPS可达140k，支持DPDK与RDMA，提供从 2C 4G - 120C 480G 可选配置，使用场景：

- 网络包收发较高场景如NFV/SD-WAN、直播、游戏等。
- 企业网站和Web服务器、企业级应用。
- 中小型数据库及缓存服务器等。

备注：如果物理服务器遭遇偶然硬件故障，会自动将云服务器关机后迁移到正常物理服务器上，此过程持续几秒，涉及开机、关机操作。

| 实例规格          | vCPU | 内存 | 内网带宽 | 内网收发包PPS | 延时 |
| ----------------- | ---- | ---- | -------- | ------------- | ---- |
| ec3ne.xlarge.r1   | 4核  | 4G   | 2.5Gbps  | 200万         | 50μs |
| ec3ne.2xlarge.r1  | 8核  | 8G   | 3.5Gbps  | 400万         | 50μs |
| ec3ne.3xlarge.r1  | 12核 | 12G  | 5Gbps    | 600万         | 50μs |
| ec3ne.4xlarge.r1  | 16核 | 16G  | 6Gbps    | 800万         | 50μs |
| ec3ne.8xlarge.r1  | 32核 | 32G  | 13Gbps   | 200万         | 50μs |
| ec3ne.large.r2    | 2核  | 4G   | 2Gbps    | 100万         | 50μs |
| ec3ne.xlarge.r2   | 4核  | 8G   | 2.5Gbps  | 200万         | 50μs |
| ec3ne.2xlarge.r2  | 8核  | 16G  | 3.5Gbps  | 400万         | 50μs |
| ec3ne.3xlarge.r2  | 12核 | 24G  | 5Gbps    | 600万         | 50μs |
| ec3ne.4xlarge.r2  | 16核 | 32G  | 6Gbps    | 800万         | 50μs |
| ec3ne.6xlarge.r2  | 24核 | 48G  | 9Gbps    | 1200万        | 50μs |
| ec3ne.8xlarge.r2  | 32核 | 64G  | 13Gbps   | 2400万        | 50μs |
| ec3ne.16xlarge.r2 | 64核 | 128G | 50Gbps   | 2400万        | 50μs |
| eg3ne.large.r4    | 2核  | 8G   | 2Gbps    | 100万         | 50μs |
| eg3ne.xlarge.r4   | 4核  | 16G  | 2.5Gbps  | 200万         | 50μs |
| eg3ne.2xlarge.r4  | 8核  | 32G  | 3.5Gbps  | 400万         | 50μs |
| eg3ne.3xlarge.r4  | 12核 | 48G  | 5Gbps    | 600万         | 50μs |
| eg3ne.4xlarge.r4  | 16核 | 64G  | 6Gbps    | 800万         | 50μs |
| eg3ne.6xlarge.r4  | 24核 | 96G  | 9Gbps    | 1200万        | 50μs |
| eg3ne.8xlarge.r4  | 32核 | 128G | 13Gbps   | 2400万        | 50μs |
| eg3ne.16xlarge.r4 | 64核 | 256G | 25Gbps   | 2400万        | 50μs |
| eg3ne.24xlarge.r4 | 96核 | 384G | 30Gbps   | 2400万        | 50μs |
| er3ne.large.r8    | 2核  | 16G  | 2Gbps    | 100万         | 50μs |
| er3ne.xlarge.r8   | 4核  | 32G  | 2.5Gbps  | 200万         | 50μs |
| er3ne.2xlarge.r8  | 8核  | 64G  | 3.5Gbps  | 400万         | 50μs |
| er3ne.3xlarge.r8  | 12核 | 96G  | 5Gbps    | 600万         | 50μs |
| er3ne.4xlarge.r8  | 16核 | 128G | 6Gbps    | 800万         | 50μs |
| er3ne.6xlarge.r8  | 24核 | 192G | 9Gbps    | 1200万        | 50μs |
| er3ne.8xlarge.r8  | 32核 | 256G | 13Gbps   | 2400万        | 50μs |

## 专业增强型 ( P1 )

专业增强型主机提供从 2C 4G - 32C 256G 的可选配置，是面向企业级用户全新推出的 vCPU 独享型虚拟主机，可为用户提供更高的计算性能、更大的内存带宽与稳定性，满足企业用户对 CPU 主频及网络吞吐性能有极高要求，且需要独享 vCPU 资源的应用系统，特别适用于企业核心数据库、线上关键业务等应用场景。

|实例类型    |CPU    |内存    |内网带宽    |
|:----|:----|:----|:----|
|p1.large.r2   |2核    |4G    |1.5 Gbps    |
|p1.large.r4   |2核    |8G    |1.5 Gbps    |
|p1.large.r8   |2核    |16G    |1.5 Gbps    |
|p1.xlarge.r1  |4核    |4G    |2 Gbps    |
|p1.xlarge.r2  |4核    |8G    |2 Gbps    |
|p1.xlarge.r4  |4核    |16G    |2 Gbps    |
|p1.xlarge.r8  |4核    |32G    |2 Gbps    |
|p1.2xlarge.r1 |8核    |8G    |3 Gbps    |
|p1.2xlarge.r2 |8核    |16G    |3 Gbps    |
|p1.2xlarge.r4 |8核    |32G    |3 Gbps    |
|p1.2xlarge.r8 |8核    |64G    |3 Gbps    |
|p1.3xlarge.r1 |12核    |12G    |4.5 Gbps    |
|p1.3xlarge.r2 |12核    |24G    |4.5 Gbps    |
|p1.3xlarge.r4 |12核    |48G    |4.5 Gbps    |
|p1.3xlarge.r8 |12核    |96G    |4.5 Gbps    |
|p1.4xlarge.r1 |16核    |16G    |5.5 Gbps    |
|p1.4xlarge.r2 |16核    |32G    |5.5 Gbps    |
|p1.4xlarge.r4 |16核    |64G    |5.5 Gbps    |
|p1.4xlarge.r8 |16核    |128G    |5.5 Gbps    |
|p1.6xlarge.r2 |24核    |48G    |8 Gbps    |
|p1.6xlarge.r4 |24核    |96G    |8 Gbps    |
|p1.6xlarge.r8 |24核    |192G    |8 Gbps    |
|p1.8xlarge.r2 |32核    |64G    |12 Gbps    |
|p1.8xlarge.r4 |32核    |128G    |12 Gbps    |
|p1.8xlarge.r8 |32核    |256G    |12 Gbps    |
|p1.16xlarge.r4|64核    |256G    |25 Gbps    |

## 其它

* GPU 主机 是具备 GPU 加速计算能力的实例，可同时提供 GPU 和 CPU 计算资源，大幅提高机器学习及科学计算等大规模计算框架的运行速度，为搭建人工智能及高性能计算平台提供基础架构支持。主要应用场景包括人工智能深度学习、高性能计算、图形图像处理等领域。

* 物理主机 提供高性能、资源独享、安全隔离的专属物理主机群组，满足各类核心应用对高性能及稳定性的需求，同时提供完整的设备管理权限及运维服务。适用于对超高性能和合规有需求的场景，例如高性能计算、大规模数据分析，传统核心数据库 Oracle RAC等业务。

* 专属宿主机 服务向用户提供专用物理宿主机资源，用以部署虚拟实例。部署于专属宿主机之上的实例，称为专属实例。专属实例在硬件层级与其他用户所部署实例保持物理隔离。