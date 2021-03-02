---
title: "主机"
linkTitle: "主机"
weight: 1
collapsible: true
type: "product"

section1:
  title: 主机
  vice_title: 主机服务是云计算的核心服务，是承载用户业务的核心模块


Section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 主机产品简介
      url: "/compute/vm/intro/instance"

    - title: 计费指南
      content: 主机产品计费指南
      url: "/compute/vm/billing/reserved_contract"

    - title: 操作指南
      content: 主机产品操作指南
      url: "/compute/vm/manual/connect_instance"
    

    - title: 最佳实践
      content: 主机产品最佳实践
      url: "/compute/vm/best-practices/wordpress"

    - title: 常见问题
      content: 主机产品常见问题
      url: "/compute/vm/faq/faq"


    - title: 疑难杂症
      content: 主机产品底层类问题
      url: "/compute/vm/dmd/dmd"

section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "/development_docs/api/command_list/instance/describe_instances"




section4:
  children:
    - title: 了解：什么是主机
      content: 主机为用户提供开箱即用的操作系统与工具。
      vice_title: 了解的第一步
      children:
        - title: 产品介绍
          url: "/compute/vm/intro/instance"

        

    - title: 上手：主机的常用操作
      content: 虚拟主机为用户提供可无限扩展的通用数据存储服务。
      vice_title: 上手的第一步
      children: 
        - title: 虚拟主机操作
          url: "/compute/vm/manual/vm_instance"

        - title: 连接实例
          url: "/compute/vm/manual/connect_instance"

        - title: 基于主机搭建博客
          url: "/compute/vm/best-practices/wordpress"
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->