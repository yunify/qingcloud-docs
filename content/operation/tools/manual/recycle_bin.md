---
title: "回收站"
date: 2020-12-10T00:40:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 回收站, QingCloud
---



为展示回收站功能，以删除一台主机然后恢复的过程为例。

## 删除一台主机

在青云控制台，打开“计算”->“主机”页面，选中要删除的主机，然后点击删除：

![](../../_images/delete_instance.png)


## 找到回收站中被删除的主机

打开“管理”->“回收站”页面，查找刚刚删除的主机：

![](../../_images/find_delete_instance.png)


## 恢复被删除的主机
打开“管理”->“回收站”页面，选中刚刚删除的主机,然后点击“恢复”：

![](../../_images/find_deleted_and_recover.png)

注意

回收站只会保留被删除的资源2个小时。2个小时后，资源会被彻底销毁，不可恢复。