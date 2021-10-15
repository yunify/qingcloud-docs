---
title: "视频直播功能实践"
draft: false
collapsible: false
weight: 40
---

OBS （Open Broadcaster Software，如下简称 OBS）是一款第三方开源程序直播流媒体内容制作软件。

VLC media player 是一款自由、开源的跨平台多媒体播放器，可用来播放大多数多媒体文件。

本章节以 OBS 作为主播端，VLC 作为播放端为例进行说明。

## 准备工作

- 已获取管理控制台的账号和密码。
- 已开通青云视频直播服务，并准备已备案的域名。
- 已创建推流域名和播流域名，且状态为**已启用**。
- 推流域名和播流域名已配置 CNAME。
- 安装 [OBS](https://obsproject.com/zh-tw) 和 [VLC](https://www.videolan.org/) 工具。

## 配置 OBS 主播端

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **音视频服务** > **视频直播**，进入**视频直播**页面。

   ![](../../_images/qs_app_list.png)

3. 点击配置的推流域名的名称，在**地址生成器**页签下，获取**服务器**地址。

   ![](../../_images/bp_push_server_address.png)

4. 获取**串流密钥**。

   ![](../../_images/bp_push_address_ak.png)

5. 打开 OBS 第三方工具。

6. 点击**设置** > **推流**，进入推流设置页面。

   **服务**：选择**自定义**。

   **服务器**：设置为**步骤 3** 获取的服务器地址。

   **串流密钥**：设置为**步骤 4** 获取的串流密钥。

   其他配置请根据您的需要进行配置。

   ![](../../_images/um_push_setting.png)
   
7. 在右下角点击**确定**，完成配置。

8. 在主界面的**来源**窗口中，点击<img src="../../_images/icon_add_source.png" style="zoom:40%;" />，选择视频来源，选择**显示器采集**或者**视频采集设备**。

   ![](../../_images/bp_video_source.png)

9. 在右下角**控件**窗口中，点击**开始推流**，进行推流。

   ![](../../_images/bp_push_stream.png)

10. 若右下角出现 <img src="../../_images/icon_push.png" style="zoom:50%;" />，则表示推流成功。

   ![](../../_images/bp_push_success.png)

## 配置 LVC 播放端

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **音视频服务** > **视频直播**，进入**视频直播**页面。

   ![](../../_images/qs_app_list.png)

3. 点击配置的播流域名的名称，在**地址生成器**页签下，获取**播流地址**。

   ![](../../_images/bp_play_address.png)

4. 打开 VLC 第三方工具。

5. 选择**文件** > **高级打开文件** > **网络**，在 URL 文本框中，输入**步骤 3** 获取的播流地址。

   其他配置项，请您根据需求进行配置。

   ![](../../_images/bp_play_client.png)

6. 点击**打开**。若播流地址可正常拉流，则会直接弹出播放窗口。

## 验证效果

查看 OBS 主播端推送到 LVC 的视频是否可以正常查看。

若可以正常查看，则说明视频直播服务可正常使用。
