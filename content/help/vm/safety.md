---
title: "安全组"
linkTitle: "安全组"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 1
---

## 解释说明

### 安全组

安全组类似防火墙功能，通过策略配置对单台或多台云服务器的网络访问进行控制，极大地提高一个内部网络或主机的安全性，并过滤不安全的服务，从而降低内部网络或云服务器的风险。QingCloud 系统为每个用户提供了一个缺省安全组(ID 之后带有星标)，默认打开22端口（Linux SSH登录）和3389端口（Windows远程登录）。

## 常见问题
<details>
<summary>云服务器需要打开哪些端口？</summary>
根据您的使用场景而定，比如Linux操作系统远程登录需要放通22端口，Windows远程登录需要打开3389端口，使用ping需要打开 ICMP 协议。
</details>

<details>
<summary>如何配置云服务器端口？</summary>
云服务器的端口是通过修改安全组入方向规则实现的，配置方法请参考文档：[配置安全组](/security/security_group/manual/sg_setting) 。
</details>
