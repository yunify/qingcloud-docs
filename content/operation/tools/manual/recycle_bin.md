---
title: "回收站"
description: Test description
draft: false
enableToc: false
keyword: 回收站, QingCloud
---



为展示回收站功能，以删除一台云服务器然后恢复的过程为例。

## 删除一台云服务器

在青云控制台，打开“计算”->“云服务器”页面，选中要删除的云服务器，然后点击删除：

![](../../_images/delete_instance.png)


## 找到回收站中被删除的云服务器

打开“运维与管理”->“回收站”页面，查找刚刚删除的云服务器：

![](../../_images/find_delete_instance.png)


## 恢复被删除的云服务器
打开“运维与管理”->“回收站”页面，选中刚刚删除的云服务器,然后点击“恢复”：

![](../../_images/find_deleted_and_recover.png)

注意

回收站只会保留被删除的资源2个小时。2个小时后，资源会被彻底销毁，不可恢复。