---
title: "Liunx 云服务器重启后无法获取 IP"
description: Test description
weight: 10
draft: false
enableToc: false
---

## 问题描述

云服务器启动后 dhclient 未运行导致 IP 无法获取。

## 问题分析

重启后 dhclient 进程未运行的原因通常为：

1. NetworkManager 未开启自启动导致 dhclient 进程未运行。
2. 网卡设备未纳入 NetworkManager 管理导致。

## 前提条件

本节操作适用于 CentOS 7系列、EulerOS 2系列、Ubuntu18.04操作系统的云服务器，并使用 DHCP 获取 IP 。

## 处理方法

1. 执行`# ps -ef |grep dhclient |grep -v grep`命令，确认 dhclient 是否运行。
2. 如果未找到 dhclient 进程，则确认 dhclient 进程未运行，执行`# systemctl status NetworkManager`命令，继续排查 NetworkManager 是否运行。
   - 如果 NetworkManager 的状态为 Active: inactive (dead) ，则 NetworkManager 未启动，执行`# systemctl is-enabled NetworkManager`命令，检查该服务是否开机自启。
   - 结果为 disabled 则确认为 NetworkManager 未设置开机自启导致，执行`# systemctl enable NetworkManager && systemctl start NetworkManager`命令进行恢复。
   - 如果 NetworkManager 的状态为 Active: active (running) ，执行`# nmcli device status`命令查看网卡设备是否被 NetworkManager 管理。
   - 如果显示该网卡为的 STATE 为 unmanaged ，则该网卡设备未被 NetworkManager 管理，执行`# nmcli device set eth0 managed yes`命令进行恢复。

3. 执行`# systemctl restart NetworkManager`命令重启 NetworkManager。
4. 执行`# ip addr`命令查看 IP 是否已经获取。