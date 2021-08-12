---
title: "网络配置"
description: 网络配置
weight: 50
draft: false
---

**为 VPC 设置端口转发策略**  
网络与 CDN ‣ VPC 网络 ‣ 选中 VPC 网络 ‣ 进入详情页，见下图步骤：  
![](https://anybox-docs.pek3b.qingstor.com/installation/images/images03.jpg)

管理配置‣ 添加规则 ‣ 填写端口转发规则 ‣ 提交 ‣ 应用修改， 见下图步骤：  
![](https://anybox-docs.pek3b.qingstor.com/installation/images/images04.jpg)  

此处请注意: 源端口填写80, 内网ip填写anybox节点的内网ip, 内网端口填写80


**配置防火墙**  
默认情况下 AppCenter 集群的端口是全部打开的，所以我们只需要配置 VPC 网络的防火墙，确保源端口流量可以通过。见下图步骤：  
![](https://anybox-docs.pek3b.qingstor.com/installation/images/images07.jpg)


添加规则 ‣ 填写信息 ‣ 提交 ‣ 应用修改， 见下图步骤：  
![](https://anybox-docs.pek3b.qingstor.com/installation/images/images08.jpg)

资源配置说明：默认需要添加防火墙规则，允许80端口通过，在配置防火墙转发策略时，不需要填写目的IP/源IP（不写公网IP）。

