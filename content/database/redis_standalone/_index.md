---
title: "键值数据库 Redis Standalone"
linkTitle: "Redis Standalone"
weight: 07
collapsible: true
type: "product"

section1:
  title: Redis Standalone
  vice_title:    Redis 是一个使用ANSI C编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。Redis Standalone on QingCloud 将 Redis 封装成 App，采用 Redis 最近的稳定版本 3.2.9 构建，支持在 AppCenter 上一键部署，在原生 Redis 的基础上增加了其易用性、高可用的特性。
  video: "https://pek3b.qingstor.com/yunify-qingcloud-docs/video/qs_qingcloud_redis.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 产品简介
      url: "intro/introduction/"

    - title: 计费指南
      content: 计费指南
      url: "billing/price/"

    - title: 快速入门
      content: 快速入门
      url: "quickstart/quick_start/"

    - title: 操作指南
      content: 学习上手管理和使用 Redis Standalone 集群
      url: "manual/cluster_info/"

    - title: 最佳实践
      content: Redis Standalone 的最佳实践
      url: "best-practices/data_transfer/"

section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "/development_docs/api/"

    - title: SDK 文档
      content: 如何使用 SDK 文档
      url: "/development_docs/sdk/"

    - title: CLI 文档
      content: 如何使用 CLI 文档
      url: "/development_docs/cli/"

section4:
  children:
    - title: 了解
      content: 什么是 Redis Standalone
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "intro/introduction/"

    - title: 进阶
      content: 学习如何创建、管理、使用 Redis Standalone 集群
      vice_title: 上手的第一步
      children: 
        - title: 创建 Redis Standalone
          url: "quickstart/quick_start/"

        - title: Redis Standalone 集群信息
          url: "manual/cluster_info/"

        - title: Redis Standalone 服务功能
          url: "manual/service/"
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->