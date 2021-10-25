---

title: "查看 API"
linkTitle: "查看 API"
date: 2021-05-25T10:08:56+09:00
description:
draft: false
weight: 42
---

## 查看 API 列表

查看 API 列表的途径有 2 种，分别是：

- 进入 API 服务菜单，选择 API Tab 查看所有 API 列表。

  ![view_api1](../_images/view_api1.png)

- 选择服务，点击 **API 管理**，进入 API 管理页面查看服务下对应的 API 列表。

  ![view_api2](../_images/view_api2.png)

## 查看 API 详情

点击 API 名称，页面可跳转到 API 详情页，页面可查看 API 的详细信息，包括 API 当前的配置信息、版本信息、已绑插件、已绑密钥、监控信息。

### 配置信息

进入 API 详情页选择**配置信息**tab，点击页面中的 **编辑** 可修改 API 配置。

![view_api3](../_images/view_api3.png)

### 版本管理

API 详情页中选择**版本管理**tab，页面中显示当前 API 所有已发布版本列表。

![view_api4](../_images/view_api4.png)

- 点击某版本的**查看**按钮，可查看此版本的配置信息。

  ![view_api5](../_images/view_api5.png)

- 点击**切换至此版本**按钮，可切换当前 API 的运行版本。

  ![view_api6](../_images/view_api6.png)

### 已绑插件

进入 API 详情页选择**已绑插件**tab，页面中显示当前 API 所有已绑定的插件列表。

- 点击**绑定插件**按钮，为当前 API 批量绑定已创建的插件。
- 选择需要解绑的插件，点击**解绑插件**按钮，解开此插件与 API 的绑定关系。

![view_api7](../_images/view_api7.png)

### 已绑密钥

进入 API 详情页选择**已绑密钥**tab，页面中可显示当前 API 所有已绑定的密钥列表。

- 点击**绑定密钥**按钮，可给当前 API 绑定已创建的密钥，不支持批量处理。
- 选择需要解绑的密钥，点击**解绑密钥**按钮，解开此密钥与 API 的绑定关系。

![view_api8](../_images/view_api8.png)

### 监控信息

进入 API 详情页选择**监控信息**tab，页面中可显示当前 API 在不同时间段内的监控曲线。用户可切换时间 tab 选择监控时间范围，也可以点击自定义按钮，设定其他时间范围后查看监控数据。

> **说明**
>
> 自定义范围仅支持查询到 90 天内的数据，且起止之间跨度最大 7 天。

![view_api9](../_images/view_api9.png)

