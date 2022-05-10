---
title: "作业命令文件编写"
linkTitle: "作业命令文件编写"
date: 2020-02-28T10:08:56+09:00
description: 作业命令文件编写
keyword: 云计算, 青云, QingCloud, hpc，作业命令文件
draft: false
weight: 5
---

本文主要介绍提交作业时需要选择/上传的作业命令文件，此文件是具体执行的作业脚本，包含指定运行的计算文件和一些依赖文件。
HPC 集群采用天云 AIP 调度系统，EHPC 集群采用 slurm 调度系统，请根据实际情况使用专用命令脚本。

## 作业命令文件内容

1. 包含执行计算文件的命令（重要）
2. 其他命令

>   **说明：**
>
> 作业执行命令文件和计算文件要放到同一个目录下

## 实例-以运行lammps为例

1. 提交作业-选择上传文件

   <img src="../_images/job01.png" style="zoom:35%;" />

2. 点击“空白作业文件”

   <img src="../_images/job02.png" style="zoom:38%;" />

3. 输入执行计算文件的命令，确定路径和文件后点击右侧保存

   `\#!/bin/bash`
   `mpirun lmp_mpi  -in abcd[.in](http://2.in/) – >` 

> **说明：**
>
> 每个软件都有自己的命令格式，以运行的软件为准

​	<img src="../_images/job03.png" style="zoom:38%;" />

4. 选择此文件后，点击确定，然后提交作业即可

   <img src="../_images/job04.png" style="zoom:38%;" />
