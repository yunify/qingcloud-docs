---
title: "升级集群"
draft: false
enableToc: false
weight: 15
---



## 升级须知

- Harbor 镜像仓库应用不支持滚动升级，需要关闭集群后进行手动升级。

- `Harbor 1.7.1 - QingCloud 1.2.0` 以前的版本在升级前请手工备份修改过的 Harbor 配置，包括 **LDAP认证** 、**邮箱**、**系统配置**及**复制管理**，升级完毕后需要手动重新填写；`Harbor 1.7.1 - QingCloud 1.2.0` 以上的版本不再需要备份及重设配置。如需协助请通过工单获得支持。

  <img src="/container/harbor/_images/man15_config_page.png" alt="man15_config_page" style="zoom:50%;" />

- 目前暂不支持低版本升级至 Harbor 2.2.1 - QingCloud 1.6.0 版本。

## 升级操作

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **AppCenter** > **集群管理**，进入**集群管理**页面。

3. 勾选需要升级的集群，点击**关闭** > **确认**，待集群状态变为**已关闭**。

4. 点击集群 ID，进入集群详情页面。

5. 在左侧的**基本属性**区域，点击<img src="/container/harbor/_images/man05_menu_icon.png" alt="icon" style="zoom:60%;" />图标，选择**升级**，弹出**升级集群**窗口。

6. 选择需要升级的目标版本，下方显示该版本对应的更新特性。

7. 点击**升级**，等待升级成功。

     ![](/container/harbor/_images/man15_upgrade.png)




