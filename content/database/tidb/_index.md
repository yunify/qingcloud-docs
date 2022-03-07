---
title: "分布式数据库 TiDB"
linkTitle: "TiDB"
weight: 10
collapsible: true
type: "product"

section1:
  title: TiDB
  vice_title: TiDB 分布式数据库是青云基于 PingCAP 公司开源的分布式关系型数据库的云上实现, 兼具联机事务处理（OLTP）和 联机分析处理（OLAP）能力。具备水平扩容、强一致性的分布式事务，高度兼容MySQL协议。可广泛适用于高可用、强一致要求较高、数据规模较大等各种应用场景。

Section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 快速了解 TiDB
      url: "intro/overview/"

    - title: 计费指南
      content: TiDB 的计费说明
      url: "billing/price_overview/"

    - title: 快速入门
      content: 快速创建 TiDB 实例 
      url: "quickstart/create_tidb/"

    - title: 操作指南
      content: 管理和使用 TiDB 集群
      url: "manual/mgeinstance/view/"

    - title: 最佳实践
      content: 关于 TiDB 的最佳实践
      url: "best-practices/high_concurrency/"
  
    - title: 性能测试
      content: TiDB 的性能参考数据
      url: "perfwp/test_method/"

    - title: 常见问题
      content: TiDB 使用的常见问题
      url: "faq/concept_faq/"

section3:
  title: 开发者指南
  children:

    - title: SDK 文档
      content: 如何使用 SDK 文档
      url: "/development_docs/sdk/"

    - title: CLI 文档
      content: 如何使用 CLI 文档
      url: "/development_docs/cli/"

section4:
  children:
    - title: 了解
      content: 什么是 TiDB
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "intro/overview/"

    - title: 进阶
      content: 学习如何创建、管理、使用 TiDB 集群
      vice_title: 上手的第一步
      children: 
        - title: 部署 TiDB
          url: "quickstart/create_tidb/"

        - title: 查看 TiDB
          url: "manual/mgeinstance/view/"

        - title: 监控 TiDB
          url: "manual/monitor/viewmonidata/"
---

<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->