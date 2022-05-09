---
title: "删除 NAT 网关"
descriptipn: 介绍如何删除 NAT 网关。
draft: false
weight: 30
keyword: QingCloud, 云计算, 青云, NAT网关, NAT
---

在确定无需使用 NAT 网关后，您可以随时将其删除<!--，包年包月类型的NAT网关不支持删除操作-->。

## 注意事项

删除 NAT 网关时，会将路由表中指向此 NAT 网关的路由规则一并删除，Internet 转发请求将立即中断，请提前做好网络中断准备。

##  操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，在控制台导航栏中，选择**产品与服务** > **网络服务** > **NAT 网关**，进入 **NAT 网关**页面。

2. 右键点击待删除的 NAT 网关，选择**删除**。

   ![图片](../../../_images/mdy_nat.png)

   或在 NAT 网关详情页面的基本信息区域中，点击**更多操作** > **删除**。

   ![](../../../_images/nat_detail_operation.png)

3. 在弹出的提示框中，勾选**解绑公网IP并删除已有SNAT及DNAT规则**，点击**删除**。

   
