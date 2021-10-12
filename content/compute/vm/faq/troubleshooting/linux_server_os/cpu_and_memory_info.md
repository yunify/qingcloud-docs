---
title: "Linux云服务器查看CPU和内存信息"
date: 2021-01-30T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## **概述**

本文主要介绍在Linux系统的云服务器中，如何查看CPU和内存信息。

>**说明**
>
>总核心数 = 物理CPU颗数 * 每颗CPU上核心数
>
>总线程数（逻辑CPU数） = 物理CPU颗数 * 每颗CPU上核心数 * 每颗核心数上的线程  或者 总线程数（逻辑CPU数） = 总核心数 * 每颗核心数上的线程

## 操作步骤

通过如下命令，可以查看Linux系统的云服务器CPU和内存相关信息。

- 查看云服务器上物理cpu的颗数。

  ```
  cat /proc/cpuinfo |grep "physical id" | sort -u |wc -l
  ```

- 查看云服务器上每颗cpu上的核心数。

  ```
  cat /proc/cpuinfo |grep "cpu cores"|sort -u
  ```

- 查看云服务器上总逻辑CPU数量（可通过如下三种方式查看）。

  ```
  cat /proc/cpuinfo |grep "core id"|wc -l
  ```

  ```
  nproc --all
  ```

  ```
  getconf _NPROCESSORS_ONLN
  ```

- 查看CPU型号。

  ```
  cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
  ```

- 查看内存信息。

  ```
  cat /proc/meminfo
  ```

