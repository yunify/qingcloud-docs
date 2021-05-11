---
title: "备份"
linkTitle: "备份"
weight: 3
collapsible: true
type: "product"

section1:
  title: 备份
  vice_title: 备份 (Snapshot) 用于在块设备级别上进行硬盘的备份与恢复。


Section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 备份概述
      url: "/storage/backup/intro/introduction/"

    - title: 操作指南
      content: 管理备份
      url: "/storage/backup/manual/create_snapshot/"

section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "/development_docs/api/command_list/snapshot/apply_snapshots"


section4:
  children:
    - title: 了解：什么是备份
      content: 备份为用户提供开箱即用的操作系统与工具。
      vice_title: 了解的第一步
      children:
        - title: 产品概述
          url: "/storage/backup/intro/introduction"

    - title: 备份的相关操作
      content: 备份为用户提供数据备份与恢复能力。
      vice_title: 上手的第一步
      children: 
        - title: 创建备份
          url: "/storage/backup/manual/create_snapshot"

        - title: 删除备份
          url: "/storage/backup/manual/delete_snapshot"

        - title: 备份回滚
          url: "/storage/backup/manual/rollback_snapshot"

---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->