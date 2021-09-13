---
title: "开启Windows云服务器远程登录"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 60
draft: false
enableToc: false
---

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，在云服务器列表里找到这台云服务器。

   ![图片](/compute/vm/_images/image.png)

2. 通过 [QingCloud 管理控制台](https://console.qingcloud.com/login)> **网络** > **公网 IP** > **申请**，进入**公网 IP** 申请页面。

   ![图片](/compute/vm/_images/image-1568884014191.png)

3. 通过右键eip---分配到云服务器----找到对应的云服务器完成绑定。

   ![图片](/compute/vm/_images/image-1568884020689.png)

4. 点击云服务器id旁边小电脑的标志，通过web vnc登录到云服务器，开启远程桌面访问。

   ![图片](/compute/vm/_images/image-1568884029354.png)

   ![图片](/compute/vm/_images/image-1568884045486.png)

   ![图片](/compute/vm/_images/image-1568884042485.png)

   ![图片](/compute/vm/_images/image-1568884094219.png)

5. 确认云服务器内部防火墙已关闭，通过控制面板---系统和安全---windows防火墙---启用或者关闭windows防火墙，关闭专有网络和共用网络防火墙。

   ![图片](/compute/vm/_images/image-1568884099948.png)

6. 放行青云平台云服务器绑定的安全组规则下行3389端口。并应用修改安全组。

   ![图片](/compute/vm/_images/image-1568884118279.png)

7. 通过客户端测试远程桌面云服务器，通过开始----运行----mstsc，点击回车。

   ![图片](/compute/vm/_images/image-1568884119758.png)

   ![图片](/compute/vm/_images/image-1568884121368.png)

