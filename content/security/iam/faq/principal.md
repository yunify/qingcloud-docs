---
title: "信任载体"
description: IAM 信任载体
draft: false
weight: 1
---

# 信任载体

被身份信任的使用实体叫做信任载体，只有信任载体才能代入该身份。

## 信任载体类型

目前，QingCloud IAM 身份信任载体包含两类：

1. **主机类型信任载体**：供客户在 QingCloud 云主机上开发应用时使用。
2. **账户类型信任载体**：供客户邀请他人来辅助自己协同运维时使用。

## 如何创建信任

当您成功[创建身份](../../introduction/role#创建身份)时，便为该身份指定了信任载体类型或信任实体且不可更改。

1. 身份指定主机类型信任载体，需要添加主机资源。

   点击进入对应身份的详情页，查看下方的**信任载体详情**选项卡：

   ![demo1_CredLoader](../../_images/demo1_CredLoader.png)

   选择可用区后点击“关联资源”按钮，在弹出的对话框中选中要添加的主机资源

   ![demo1_AttachInstance](../../_images/demo1_AttachInstance.png)

   点击“添加”按钮，成功添加后该资源将会显示在**信任载体详情**下方的列表框中：

   ![demo1_SuccessAttachInstance](../../_images/demo1_SuccessAttachInstance.png)

   > 注：一个指定主机类型信任载体的身份可以添加多个主机作为信任实体，但一个主机资源只能关联到一个身份。
   >
   > 因此您可能会遇到资源添加不成功的情况，此时您需要去检查下该主机是否已关联到别的身份上并考虑直接[更换身份](../../introduction/role#为信任载体资源更换身份)。  

2. 身份指定 QingCloud 账户为信任载体，身份创建时便已指定到特定的账户，从而无需再次为该身份指定具体的信任实体。

   ![demo1_DescribeAccountRole](../../_images/demo1_DescribeAccountRole.png)

   > 注：信任载体为账户时，身份与账户为一一对应关系，不可更改；点击“解除信任”将删除身份，对方将不再能使用此身份辅助您管理 QingCloud 云平台。

## 如何解除信任

与创建信任相反，当您删除身份或移除身份上关联的资源时即自动解除信任关系。

账户类信任载体，您需要直接删除身份来解除信任（当您在身份详情页点击“解除信任”时等同于删除身份）。

针对主机类信任载体，您可以在身份详情页勾选对应主机资源后点击“移除”：

![trustoff](../../_images/trustoff1.png)

或进入主机详情页找到身份信息卡片，点击卡片右上角按钮后选择“解除信任”：

![trustoff](../../_images/trustoff2.png)

然后确认操作即可。

![trustoff](../../_images/trustoff3.png)
