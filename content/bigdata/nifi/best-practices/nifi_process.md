---
title: "创建 Nifi 流程"
description: 本小节主要介绍 Nifi 节本创建流程。 
keywords:  Nifi 基本创建流程
weight: 10
collapsible: false
draft: false
---

本小节主要介绍 Nifi 基本创建流程。

## 使用指南

1. 打开 Nifi 主面板，点击左上角的第一个控件`processor`，拖入到面板空白处，在过滤框中输入`HTTP`字样，并在下方的列表中选择`HandleHttpRequest`，完成后点击**Add**。

![](../../_images/nifi_flow_test_1.png)

2. 以同样的方式向 Nifi 主面板中添加`HandleHttpResponse`。

![](../../_images/nifi_flow_test_2.png)

3. 面板中有2个 Processor，移到鼠标到`HandleHttpRequest`中央，会弹出箭头样图标，拖动箭头，移动至`HandleHttpResponse`处松开，在确认框中点击**Add**。

4. 配置`HandleHttpRequest`控件，右键点击该控件，在弹出框中点击**Config**，选择**Properties**页签.

   依次配置`Listening Port`为9999，`Allowed Path`为`/test`，点击`HTTP Context Map`，选择`Create new service`创建新的控制器。

![](../../_images/nifi_flow_test_3.png)

5. 以默认配置创建`StandardHttpContextMap`。

![](../../_images/nifi_flow_test_4.png)

6. 返回到`HandleHttpRequest`的 **Properties** 页签后，点击`StandardHttpContextMap`右方的箭头进入其配置页面，点击右边的闪电样图标， 并以默认配置`enable`控制器。

![](../../_images/nifi_flow_test_5.png)
![](../../_images/nifi_flow_test_6.png)

7. 回到 Nifi 主面板，右键点击`HandleHttpResponse`，选择**Config**.
   
   在 **Properties** 页签中，依次在`Http Status Code`中输入200，`Http Context Map`选择在`HandleHttpRequest`中创建好的`StandardHttpContextMap`。

![](../../_images/nifi_flow_test_7.png)

8. 点击`HandleHttpResponse`的 **Setting**页签，勾选上`failure`和`success`后，点击**Apply**。

![](../../_images/nifi_flow_test_8.png)

9. 分别启动`HandleHttpRequest`和`HandleHttpResponse`控件。

![](../../_images/nifi_flow_test_9.png)

10.  使用模拟 HTTP 请求客户端(如 Postman发送请求到 `http://${ip}:9999/test` ，将收到 `http status 200` 的返回信息。
