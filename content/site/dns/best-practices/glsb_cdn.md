---
title: "GSLB 实现 CDN 源站容灾切换"
weight: 2
collapsible: false
draft: false
---

## 应用场景

网站、视频、游戏、直播等客户群体为实现就近访问源站内容，会将企业应用服务接入 CDN 加速，同时他们对业务的高可用性也有极高要求，但 CDN 本身无法感知源站 IP 的运行状态，所以在故障及灾难场景下，无法快速将用户流量切换至正常节点上，而全局负载均衡（下文简称 GSLB），则可以帮助企业实现流量负载均衡、访问加速及容灾切换。

## 操作步骤

本文以`test.yunify.com`作为测试域名。

###   步骤一：全局负载均衡配置

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 选择**产品与服务** > **网络服务** > **云解析 DNS**，进入域名解析页面。

3. 在左侧导航栏选择**全局负载均衡**，进入实例列表页面。

4. 点击**添加**，创建一个 GSLB 实例。

   具体参数配置说明，可参见[配置 GSLB 实例](/site/dns/quickstart/creatgslbpolicy/)，以下为配置示例。

   1. 配置站点。

      ![添加站点](../../_images/bp05_station_set.png)

   2. 配置监控规则。
      配置 HTTP 监控。

      ![添加监控规则](../../_images/bp05_monitoring_setting.png)

   3. 配置调度策略。
      勾选**智能跌宕**和**主备切换**，并根据实际情况配置**主 IP 池在线率**阈值范围。

      ![配置调度策略](../../_images/gslb_scheduling_policy.png)

   5. 配置好参数后，点击**完成创建**。

      创建完成后，在弹出的配置信息确认页面，可看到 CNAME 接入域名。点击域名后的复制按钮，复制 GSLB 的 CNAME 接入域名。

      ![CNAME地址](../../_images/bp05_glsb_complete.png)

### 步骤二：CDN 加速配置

#### 一、配置加速域名

1. 选择**产品与服务** > **网络服务** > **CDN 服务**，进入 CDN 页面。

2. 点击**购买**，弹出**购买 CDN 服务**页面。

   <img src="../../_images/bp05_buy_cdn.png" alt="购买CDN服务" style="zoom:50%;" />

3. 点击**添加域名**，输入域名名称，点击**提交**。

   <img src="../../_images/bp05_add_domain.png" alt="添加域名" style="zoom:50%;" />

4. 点击**创建域名记录**，配置域名记录，点击**提交**。

   回源地址填写在[步骤一](#步骤一全局负载均衡配置)中复制的 GSLB 实例的 CNAME 接入域名。

   <img src="../../_images/bp05_domain_record.png" alt="创建域名记录" style="zoom:55%;" />

5. 设置 Origin Host、节点类型和服务区域。

6. 点击**提交**，购买完成后返回 CDN 页面。

7. 点击域名记录名称，进入详情页。

8. 在**基本属性**区域，复制 CNAME。

   <img src="../../_images/bp05_cdn_domain_cname.png" alt="域名CNAME" style="zoom:50%;" />

#### 二、配置域名解析

> **说明**
>
> 若域名托管在其他解析服务商，则需要登录到相应解析管理控制台，添加 CNAME 记录。

1. 选择**产品与服务** > **网络服务** > **云解析 DNS**，进入域名解析页面。

2. 点击**添加**，输入要解析的域名，点击**添加**。

   <img src="../../_images/bp05_add_dns.png" alt="添加解析域名" style="zoom:50%;" />

3. 在域名列表，点击已添加的域名名称，进入域名管理页面。

4. 在**解析记录**页签下，点击**添加记录**，配置 CNAME 记录。

   记录值填写在[加速域名配置](#一配置加速域名)中复制的 CNAME。

   ![域名解析记录](../../_images/bp05_gslb_dns.png)

      至此，CDN 加速配置完成。

