---
title: "创建接入点"
draft: false
collapsible: false
weight: 10
---



## 前提条件



## 创建接入点

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **SD-WAN** > **RTN**，进入 **RTN** 的**概览**页面。

3. 点击**接入点**，进入**接入点**页面。

4. 点击**创建接入点**，弹出**创建接入点**页面。

   

5. 配置光盒基本信息。

   输入接入点名称，并选择接入点类型。接入点类型包含**光盒**和**软件**。

   **选择光盒**

   <table class="table table-bordered table-striped table-condensed">
     <tr>
       <td>参数</td>
       <td>参数说明</td>
     </tr>
     <tr>
       <td>已有硬件设备</td>
       <td>您可以根据自己的情况选择<b>无</b>或者<b>有</b>。</td>
     </tr>
     <tr>
       <td>部署方式</td>
       <td>单机部署或者双机部署。</td>
     <tr>
       <td>序列号</td>
       <td>输入光盒设备上的序列号。若当前接入点采用双机高可用模式，您可以点击<b>添加备设备</b>，添加备设备。</td>
     </tr>
     <tr>
       <td>高级设置</td>
       <td>LAN 配置、目录树。</td>
     </tr>
     <tr>
       <td>网段</td>
       <td>输入光盒所在网段。</td>
     </tr>
     <tr>
       <td>网关</td>
       <td>设置网关。</td>
     </tr>
     <tr>
       <td>连接类型</td>
       <td>动态 IP 或者静态 IP。</td>
     </tr>
     <tr>
       <td>DHCP 起始地址</td>
       <td>当选择动态 IP 时，配置此项目。</td>
     </tr>
     <tr>
       <td>DHCP 结束地址</td>
       <td>当选择动态 IP 时，配置此项目。</td>
     </tr>
     <tr>
       <td>所在目录</td>
       <td>接入点所在的目录。</td>
     </tr>
   </table>

   **选择软件**

6. 配置购买信息。

   <table class="table table-bordered table-striped table-condensed">
     <tr>
       <td>参数</td>
       <td>参数说明</td>
     </tr>
     <tr>
       <td>计费模式</td>
       <td> 包年包月、带宽计费或者流量计费。</td>
     </tr>
     <tr>
       <td>带宽上限</td>
       <td>带宽的上限。</td>
     <tr>
       <td>购买时长</td>
       <td>购买的时长，支持选择1个月、3个月、6个月、1年、2年以及3年。</td>
     </tr>
     <tr>
       <td>自动续费</td>
       <td>勾选自动续费后，若账户余额充足，设备到期后自动续费。自动续费的周期与购买时长相同。</td>
     </tr>
   </table>

7. 点击**立即创建**，创建接入点。

   接入点创建完成后，您可以在接入点列表中，查看接入点的名称/ID、状态、类型、双机、WAN 端口 IP、LAN 端口 IP、License、带宽、计费方式及连接状态。

## 相关操作

### 激活接入点



### 重启接入点



### 提升带宽



### 重置密码



### 查看接入点列表



### 查看接入点目录



