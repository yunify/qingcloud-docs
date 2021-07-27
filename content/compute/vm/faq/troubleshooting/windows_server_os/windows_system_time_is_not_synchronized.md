---
title: "Windows云服务器同步网络时间"
date: 2021-02-04T20:38:25+09:00
description: Test description
weight: 10
draft: false
enableToc: false
---

## 问题背景

国内 Windows 系统的云服务器有时候不能自动同步互联网当前时间，这就需要改一下 Windows 的时间同步服务器

## 操作步骤

### 1、点击桌面上右下的时间，弹出框点击更改时间和日期

<img src="/compute/vm/_images/time1.png" width="60%" height="40%">

### 2、在弹出框中选择“Internet时间”，点击更改设置

<img src="/compute/vm/_images/time2.png" width="60%" height="40%">

### 3、点击立即更新，稍等会提示同步成功，最后会发现时间和日期都同步了

<img src="/compute/vm/_images/time3.png" width="60%" height="40%">



