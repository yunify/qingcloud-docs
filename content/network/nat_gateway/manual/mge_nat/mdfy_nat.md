---
title: "修改 NAT 网关配置"
descriptipn: 修改 NAT 网关的基本信息及配置，包括修改名称描述、添加标签、修改安全组等。
draft: false
weight: 4
keywords: QingCloud, 青云, NAT网关, NAT
---

您可以根据实际需求随时修改 NAT 网关的名称、描述、标签、安全组等属性。

##  操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，在控制台导航栏中，选择**产品与服务** > **网络服务** > **NAT 网关**，进入 **NAT 网关**页面。

2. 在 NAT 网关列表，右键点击目标 NAT 网关，可进行以下修改操作：

   ![图片](../../../_images/mdy_nat.png)

   - 修改：修改 NAT 网关名称及描述。
   - 调整规格：修改 NAT 网关的规格类型。具体操作可参见[调整规格](../mge_nat/mdfy_type/)。
   - 绑定公网 IP：绑定 NAT 网关的公网 IP。具体操作可参见[绑定和解绑公网 IP](../mdfy_nat/)。
   - 标签：添加或移除标签，通过标签进行分类管理。
   - 项目：加入或离开某个项目，便于整个项目总览查看。
   
3. 点击目标 NAT 网关 ID，进入详情页。

   同样可进行 NAT 网关的配置修改：

   - 点击**更多操作**，可修改 NAT 网关名称、重启 NAT 网关、[调整规格](../mdfy_type)、配置健康检测。

     ![](../../../_images/nat_detail_operation.png)

   - 将鼠标移到**公网安全组**、**基础网络安全组**的属性值上，可修改安全组的绑定值。具体操作可参见[修改 NAT 网关安全组](../mdfy_sg/)。





