---
title: "Lammps"
linkTitle: "Lammps应用场景最佳实践"
date: 2020-02-28T10:08:56+09:00
description: Lammps应用场景最佳实践
keyword: 云计算, 青云, QingCloud, hpc，Lammps，应用场景最佳实践
draft: false
weight: 2
---

## 作业文件说明

Lammps软件应用过程中，需要用到的作业文件包括：

- 计算文件，文件格式为*in，或 .lj 。
- 其他相关文件，文件格式为.restart，*airebo，*lcbop等。

准备好文件后，跟随下面步骤提交作业。

## 实践流程

1. 进入集群，提交作业

   <img src="../_images/lammps01.png" style="zoom:35%;" />

2. 指定作业运行需要的核心数

   <img src="../_images/lammps02.png" style="zoom:40%;" />

3. 选择软件及版本

   <img src="../_images/lammps03.png" style="zoom:33%;" />

4. 参数配置

   选择作业计算文件，如.in/.lj文件等，其他文件传输到同一目录下。

   <img src="../_images/lammps04.png" style="zoom:30%;" />

   > **说明：**
   >
   > lammps软件，平台做了内置的作业命令，不需要用户再提交其他命令文件，这里只需要上传计算执行文件即可。与计算执行文件相关的其他文件，需要放在共享存储的同一个目录文件夹下。如下图所示：

   <img src="../_images/lammps05.png" style="zoom:50%;" />

5. 提交作业

   点击“提交作业”，系统将自动分配计算任务到计算节点，进入作业状态，点击右上角刷新按钮刷新作业状态。

   <img src="../_images/lammps06.png" style="zoom:30%;" />

6. 作业查看。

   点击“作业详情”，即可查看作业结果文件。*.out是作业日志文件，*.err是错误日志文件。如下图所示：

   <img src="../_images/lammps07.png" style="zoom:50%;" />

   在对应的作业结果文件中点击“查看”，即可在线查看作业运行详情，如下图所示：

   <img src="../_images/lammps08.png" style="zoom:40%;" />

   点击“下载”，即可将作业文件下载到本地。

7. 作业列表详情显示。

   在“作业列表”下，可以看到该集群下每一个作业的详情情况，包括作业状态、所属队列、所用的核心数、运行时长，总计核时等详细信息，如下图所示：

   <img src="../_images/lammps00.png" style="zoom:33%;" />
