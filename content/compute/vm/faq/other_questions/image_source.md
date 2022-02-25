---
title: "关于CentOS 8.x镜像由于官方yum源下线后无法使用的解决方案"
description: CentOS 8.x 系列镜像的 yum 不再维护，yum 功能无法使用如何处理？"
draft: false
weight: 230
keyword: 云服务器，yum，无法使用
---

## 问题背景

由于 CentOS 8 项目官方已于2021年底停止，相关 yum 源已无法使用，会导致云服务器无法正常使用 yum 功能。

## 影响范围

青云QingCloud 对线上 CentOS 8 系列镜像已经紧急更新，新创建云服务器不会受到影响。

针对已有基于 CentOS 8.X 镜像创建虚拟机的用户会受到影响，无法使用 yum 功能，解决该问题的操作步骤请参考[解决方案](#解决方案)。

## 解决方案

具体操作，请参考以下步骤进行。若您有任何疑问可通过控制台提交工单联系青云技术支持工程师，或者拨打 400 客服热线反馈。

1. 备份源文件

   ```
   mv /etc/yum.repos.d /etc/yum.repos.d.bak
   ```

2. 创建源文件目录

   ```
   mkdir -p /etc/yum.repos.d
   ```

3. 下载新的 yum 源

   ```
   curl https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo > /etc/yum.repos.d/Centos-vault-8.5.2111.repo
   curl https://mirrors.aliyun.com/repo/epel-archive-8.repo > /etc/yum.repos.d/epel-archive-8.repo
   ```

4. 重建缓存

   ```
   yum clean all && yum makecache
   ```
