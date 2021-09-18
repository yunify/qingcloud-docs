---
title: "更换云服务器操作系统"
date: 2021-03-07T10:08:56+09:00
description:
draft: false
weight: 39
---

## 问题背景

用户购买云服务器后，发现操作系统并不是自己所需要的，目前无法直接更换操作系统。需要删除当前云服务器，并创建需要的操作系统云服务器，如果云服务器中有重要数据，需要自行拷贝下，谢谢。

## 操作步骤

如果云服务器是预留合约云服务器，可以按照下面的步骤操作下：

### Windows云服务器，删除后创建Linux云服务器

1. Windows云服务器：i-jsndqhie；云服务器合约：rc-E5aHQ75r

   ![change-promote-os-1](/compute/vm/_images/change-promote-os-1.png)

2. 将云服务器与合约解绑

   ![change-promote-os-2](/compute/vm/_images/change-promote-os-2.png)

3. 升级Windows云服务器合约为Linux云服务器合约，会退还差价

   ![change-promote-os-3](/compute/vm/_images/change-promote-os-3.png)

   ![change-promote-os-4](/compute/vm/_images/change-promote-os-4.png)

   ![change-promote-os-5](/compute/vm/_images/change-promote-os-5.png)

   ![change-promote-os-19](/compute/vm/_images/change-promote-os-19.png)

4. 创建Linux云服务器

   ![change-promote-os-6](/compute/vm/_images/change-promote-os-6.png)

   ![change-promote-os-7](/compute/vm/_images/change-promote-os-7.png)

   ![change-promote-os-8](/compute/vm/_images/change-promote-os-8.png)

### Linux云服务器，删除后创建Windows云服务器

1. Linux云服务器：i-ilqtvuh2；云服务器合约：rc-E5aHQ75r

   ![change-promote-os-9](/compute/vm/_images/change-promote-os-9.png)

2. 将云服务器与合约解绑

   ![change-promote-os-10](/compute/vm/_images/change-promote-os-10.png)

3. 升级Linux云服务器合约为Windows云服务器合约

   注意：Linux云服务器合约升级为Windows云服务器合约需要补差价

   ![change-promote-os-11](/compute/vm/_images/change-promote-os-11.png)

   ![change-promote-os-12](/compute/vm/_images/change-promote-os-12.png)

   ![change-promote-os-13](/compute/vm/_images/change-promote-os-13.png)

   ![change-promote-os-14](/compute/vm/_images/change-promote-os-14.png)

   ![change-promote-os-15](/compute/vm/_images/change-promote-os-15.png)

4. 创建Windows云服务器

   ![change-promote-os-16](/compute/vm/_images/change-promote-os-16.png)

   ![change-promote-os-17](/compute/vm/_images/change-promote-os-17.png)

   ![change-promote-os-18](/compute/vm/_images/change-promote-os-18.png)

   注意：也可以通过计算-云服务器界面创建与合约配置完全匹配的云服务器，然后手动绑定；直接在合约界面创建云服务器会自动绑定。