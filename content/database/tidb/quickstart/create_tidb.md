---
title: "创建 TiDB 实例"
description: 本小节主要介绍如何快速创建TiDB实例。 
keyword: QingCloud, 青云, 云计算, TiDB 分布式数据库
weight: 2
collapsible: false
draft: false
---

本小节主要介绍如何快速创建 TiDB 实例。

## 前提条件

已注册 QingCloud 青云账号并完成实名认证。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **分布式数据库 TiDB**，进入 TiDB 简介页面。


3. 点击**立即创建**进入创建页面。
4. 按照以下说明配置实例信息。

### 购买信息设置

![](../../_images/create_bug_info.png)

| <span style="display:inline-block;width:100px">参数</span> | 说明                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 实例计费模式                                               | 支持**包年包月**及**按需计费**。<br/><li>包年包月：预付费模式，按月/年预留资源，可享受更多优惠，适合中长期稳定需求。</li><li>按需计费：后付费模式，按秒计费，按小时扣费。适合短期弹性需求，用完可立即释放实例，节省费用。</li> |
| 区域及可用区                                               | 实例的部署区域及可用区。<br/>建议根据用户所在的地理位置选择就近的区域，以减少网络延时，提升访问速度。 |

### 配置信息设置

![](../../_images/create_setting_info.png)

| <span style="display:inline-block;width:120px">参数</span> | 说明                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 版本                                                       | TiDB 的版本。                                                |
| 实例规格                                                   | 支持**测试型**、**基础型**及**分析增强型**，不同类型使用的节点规格、本地存储和最大组件数量不同。<br/><li>选择**基础型**时，需要设置 TiKV 组件的节点数量，范围为3～9；</li><li>选择**分析增强型**时，需要设置 TiFlash 以及 TiKV 组件的节点数量。其中， TiFlash 节点数量范围为1～3，TiKV 节点数量为3～9。</li>规格及组件详细说明请参考[实例类型](../../intro/instance_type/)。 |
| 私有网络                                                   | 选择实例部署的 VPC 网络及私有网络。不同实例可以使用相同或不同的 VPC 网络和私有网络。<li>若您已经创建有 VPC 网络和私有网络，可重复使用，不需要多次创建；</li><li>若您没有可用的 VPC 网络及私有网络，请根据界面提示进行创建。</li>VPC 创建的具体操作请参见[创建 VPC 网络](/network/vpc/manual/vpcnet/10_create_vpc/)。<br/><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>说明</b>：<li>选择的 VPC 网络与 TiDB 实例在相同的区域。</li><li>请勿选择免费型的 VPC，目前暂不支持在免费型 VPC 中创建 TiDB 实例。</li></div> |

### 实例设置

![](../../_images/create_instance_setting.png)

| <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:600px">说明</span>   |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 实例名称                                                   | TiDB 实例名称。                                              |
| 描述                                                       | TiDB 实例的描述信息。                                        |
| 数据容量自动扩容                                           | **测试型**实例不支持该项设置。<br/>默认关闭状态，点击进行开启。开启后，当剩余存储容量不足 30% 时，您将收到警告通知，持续 90 分钟以上时会触发自动扩容。 |
| 对象存储                                                   | 默认关闭状态，点击进行开启。开启表示需要启动对象存储服务来存储备份数据。开启对象存储，需要指定存储 Bucket 及 API 密钥，若未创建，请根据界面提示进行创建。<br>创建对象存储桶（Bucket）的详细操作，请参见[创建 Bucket](/storage/object-storage/manual/bucket_manage/#创建-bucket)。 |

4. 所有信息配置完成后，点击**立即购买**，进入**实例列表**页面。

   实例状态显示**创建中**，当状态变为**运行中**，表示创建成功。

## 后续操作

>**说明**
>
>创建 TiDB 实例时，将同步创建一个默认用户：**root**，默认无密码，为了保障信息安全，建议您创建后立即设置密码。具体操作方法请参见[修改用户密码](../../manual/user_mgt/mdypasswd/)。

TiDB 实例创建成功后，您可以进行以下操作：

- [连接 TiDB 实例](../cnect_tidb/)
- [查看实例](../../manual/mgeinstance/view/)
