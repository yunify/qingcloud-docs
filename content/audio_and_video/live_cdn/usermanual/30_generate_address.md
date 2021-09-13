---
title: "生成流地址"
draft: false
collapsible: false
weight: 30
---

创建直播域名并配置 CNAME 值后，需要使用推流域名和播流域名生成推流地址和播流地址。

本章节指导您如何创建流地址。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建推流域名和播流域名，且状态为**已启用**。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **音视频服务** > **视频直播**，进入**视频直播**页面。

   ![](../../_images/qs_app_list.png)

3. 点击已创建的推流域名或播流域名的ID，进入流域名详情页面。

   ![](../../_images/um_doname_details.png)

4. 点击**地址生成器**，进入地址生成器页面。

   ![](../../_images/um_generate_address.png)

5. 在地址生存器页面，配置参数，如下表所示。

   <table class="table table-bordered table-striped table-condensed">
     <tr>
       <td><b>参数</td>
       <td><b>参数说明</td>
     </tr>
     <tr>
       <td>推流域名</td>
       <td>推流的域名。</td>
     <tr>
       <td>播流域名</td>
       <td>播流的域名。</td>
     </tr>
        <tr>
       <td>APP 名称</td>
       <td>APP 的名称。您可以根据自己的需要进行自定义。</td>
     </tr>
     <tr>
       <td>流名称</td>
       <td>流的标识符，与域名一起唯一标识一路流。您可以根据自己的需要进行自定义。</td>
     </tr>
     <tr>
       <td>过期时间</td>
       <td>流地址过期的时间。</td>
     </tr>
   </table>

6. 点击**地址示例说明**，显示流地址示例说明。

   ![](../../_images/um_address_note.png)

7. 点击**生成流地址**，生成流地址。

   > 说明：
   >
   > 生成的三个**播流地址**，您可以根据自己的需要选择使用。
   
   ![](../../_images/um_flow_address.png)

