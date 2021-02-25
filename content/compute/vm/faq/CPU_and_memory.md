---

title: "Linux系统的主机中如何查看物理CPU和内存信息"
date: 2021-01-30T00:38:25+09:00
description: Test description
weight: 100
draft: false
enableToc: false
---

**概述**

本文主要介绍在Linux系统的主机中，如何查看物理CPU和内存信息。

>说明：
>
>总核数 = 物理CPU个数 × 每颗物理CPU的核数
>
>总逻辑CPU数 = 物理CPU个数 × 每颗物理CPU的核数 × 超线程数

通过如下命令，可以查看物理CPU和内存相关信息。

- 查看物理CPU个数。

  ```
  cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l
  ```

- 查看每个物理CPU中core的个数，即CPU核数。

  ```
  cat /proc/cpuinfo| grep "cpu cores"| uniq
  ```

- 查看逻辑CPU的个数。

  ```
  cat /proc/cpuinfo| grep "processor"| wc -l
  ```

- 查看CPU型号。

  ```
  cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
  ```

- 查看内存信息。

  ```
  cat /proc/meminfo
  ```

