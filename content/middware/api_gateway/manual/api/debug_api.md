---

title: "调试 API"
linkTitle: "调试 API"
date: 2021-05-25T10:08:56+09:00
description: 本小节主要介绍如何调试 API。 
keyword: API_Gateway, QingCloud, 调试 API
draft: false
weight: 43
---

API 定义录入完成后，您可以在 API 调试页面进行调试，以确定 API 的可用性。

API 调试可通过以下三种途径找到调试按钮进行操作：

- 进入服务的 API 管理页面。
- 在 API 服务菜单中选择**API** tab。
- 进入 API 详情页。

## 调试

 点击**调试**，页面进入 API 调试页面，页面中会显示 API 的配置信息。

> **说明**
>
>  若 API 未发布过，或已下线，调试按钮不可点。且 API 调试时，依据当前运行 API 配置进行调试。
>
> ![manage_api1](../_images/manage_api1.png)

1. 在发送请求之前，请先填写请求参数。
2. 若 API 的鉴权类型为 QingCloud-Auth，调试时会显示密钥栏位，要求用户填写绑定的密钥信息。若绑定多个密钥，填写绑定的一个即可。
3. 若 API 创建时在步骤 3 中填写了示例信息，调试页面右侧会显示示例内容。
4. 信息配置完成后，点击**发送请求**，请求返回结果会显示在右侧的返回结果栏位。

![manage_api2](../_images/manage_api2.png)

> **说明**
>
> 完成 API 调试后，您可以发布 API 到测试、预发、线上环境，继续调试或供用户使用。

