---

title: "管理 API"
linkTitle: "管理 API"
date: 2021-05-25T10:08:56+09:00
description:
draft: false
weight: 44
---

API 网关（API Gateway），提供的 API 托管服务，覆盖设计、开发、测试、发布、售卖、运维监测、安全管控、下线等 API 各个生命周期阶段。

本小节主要介绍如何快速管理 API，包含发布 API、编辑 API、下线 API、绑定插件、绑定密钥、删除 API 等操作流程。

## 操作入口

API 管理可通过以下三种途径找到对应的按钮进行操作：

- 进入服务的 API 管理页面。
- 在 API 服务菜单中选择**API** tab。
- 进入 API 详情页。

## 发布

发布按钮在如下情况时可点击，其他情况下置灰不支持点击。

-  API 未发布过；
- API 被修改；
- API 已下线。

![manage_api3](../_images/manage_api3.png)

点击发布按钮，页面出现发布 API 弹窗，填写发布描述，待**发布**按钮点亮后点击**发布**。

## 编辑 API

点击 **编辑**，页面跳转至编辑页，除 API 服务不可修改，其他信息均支持修改。

![manage_api4](../_images/manage_api4.png)

## 下线 API

仅支持已发布的 API 进行下线，点击**下线 API**出现下线弹窗，点击弹窗中的**下线**按钮，确认后 API 状态修改为已下线。

![manage_api5](../_images/manage_api5.png)

## 绑定插件

1. 点击**绑定插件**，页面出现绑定插件弹窗。

2. 弹窗中列出所有已创建的插件列表，用户可批量选择插件，已绑插件不可选。

   ![manage_api6](../_images/manage_api6.png)

3. 选择插件，点击弹窗中的**绑定**，插件绑定成功后页面出现发布确认弹窗。

   ![manage_api7](../_images/manage_api7.png)

4. 若点击**稍后发布**，弹窗直接关闭，当前运行 API 为绑定插件前版本。若填写描述后，点击**发布 API**，API 发布成功，当前运行 API 为绑定插件后版本。

## 绑定密钥

1. 点击**绑定密钥**，页面出现绑定密钥弹窗。

2. 弹窗中列出所有已创建的密钥列表，仅支持单个绑定，已绑密钥不可选。

   ![manage_api8](../_images/manage_api8.png)

3. 选择密钥，点击弹窗中的**绑定**，密钥绑定成功。若当前 API 鉴权类型为免鉴权，绑定密钥后，API 鉴权类型自动修改为 QingCloud-Auth，且页面出现发布弹窗。若当前 API 鉴权类型为 QingCloud-Auth，绑定密钥后，直接绑定成功，无需再次发布。

   ![manage_api9](../_images/manage_api9.png)

## 删除 API

点击**删除 API**。

- 若 API 有版本正在运行中，API 不可删除，需要先下线 API。

  ![manage_api10](../_images/manage_api10.png)

- 若 API 无运行版本，点击删除 API，页面出现确认删除弹窗，确定后删除。

  ![manage_api11](../_images/manage_api11.png)

