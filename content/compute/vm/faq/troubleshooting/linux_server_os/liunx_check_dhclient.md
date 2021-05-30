---
title: "Liunx主机重启后dhclient未运行，导致无法获取IP"
date: 2021-05-30T00:38:25+09:00
description: Test description
weight: 10
draft: false
enableToc: false
---

## 问题描述

云服务器启动后dhclient未运行导致IP无法获取。

## 问题分析

重启后dhclient进程未运行的根因通常为：

1. NetworkManager未开启自启动导致dhclient进程未运行。
2. 网卡设备未纳入NetworkManager管理导致。

## 约束与限制

本节操作适用于CentOS 7系列、EulerOS 2系列、Ubuntu18.04操作系统的云服务器，并使用DHCP获取IP。

## 处理方法

1. 执行以下命令，确认dhclient是否运行。

   **# ps -ef |grep dhclient |grep -v grep**

2. 如果未找到dhclient进程，则确认dhclient进程未运行，执行以下命令，继续排查NetworkManager是否运行。

   **# systemctl status NetworkManager**

   - 如果NetworkManager的状态为Active: inactive (dead)，则NetworkManager未启动，执行以下命令，检查该服务是否开机自启。

     **# systemctl is-enabled NetworkManager**

     结果为disabled则确认为NetworkManager未设置开机自启导致，执行以下命令进行恢复。

     **# systemctl enable NetworkManager && systemctl start NetworkManager**

   - 如果NetworkManager的状态为Active: active (running)，执行以下命令查看网卡设备是否被NetworkManager管理。

     **# nmcli device status**

     如果显示该网卡为的STATE为unmanaged，则该网卡设备未被NetworkManager管理，执行以下命令进行恢复。

     **# nmcli device set eth0 managed yes**

3. 执行以下命令重启NetworkManager。

   **# systemctl restart NetworkManager**

4. 执行以下命令查看ip是否已经获取。

   **# ip add**