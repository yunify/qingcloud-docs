---
title: "安全组"
description: test
draft: false
weight: 15
---

## 解释说明

### 安全组

安全组类似防火墙功能，通过策略配置对单台或多台云服务器的网络访问进行控制，极大地提高一个内部网络或主机的安全性，并过滤不安全的服务，从而降低内部网络或云服务器的风险。QingCloud 系统为每个用户提供了一个缺省安全组(ID 之后带有星标)，默认打开22端口（Linux SSH登录）和3389端口（Windows远程登录）

## 常见问题

<details>
<summary><p>
  1.云服务器需要打开哪些端口？
  </p></summary>
<p>
  根据您的使用场景而定，比如Linux操作系统远程登录需要放通22端口，Windows远程登录需要打开3389端口，使用ping需要打开 ICMP 协议。
  </p></details>

<details>
<summary><p>
  2.如何配置云服务器端口？
  </p></summary>
<p>
  云服务器的端口是通过修改安全组入方向规则实现的，配置方法请参考<a href="/security/security_group/manual/sg_setting/"> 配置安全组文档</a >。
  </p>
</details>








