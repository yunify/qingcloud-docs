---
title: "访问鉴权管理"
linkTitle: "访问鉴权管理"
weight: 1
collapsible: true
type: "product"

section1:
  title: 访问鉴权管理
  vice_title: 访问鉴权管理（Identity and Access Management，IAM）是一款在 QingCloud 平台上提供身份识别和访问控制的 Web 服务。通过使用 IAM 来统一管理和控制接入实体的认证和授权，能更安全地自主管控本账户下的任意资源访问权限。
  video: ""
  video_img: "_images/video.png"

section2:
  title: IAM 用户文档
  children:
    - title: 最新动态
      content: 2020-09-11 功能新增：集群身份
      url: "news/product_news"

    - title: 操作指南
      content: 身份管理、策略管理、策略模拟器
      url: "manual/portal"

    - title: 最佳实践
      content: 免密钥应用开发、跨账号管理协作
      url: "best-practices/"

section4:
  children:
    - title: 了解
      content: 了解 IAM 的概念及专业术语，学习 IAM 的工作模式
      children:
        - title: IAM 产品概述
          url: "introduction/product_features"
        - title: IAM 的作用与特点
          url: "introduction/product_features/#iam-的作用与特点"
        - title: 什么是身份、信任载体和会话有效期？
          url: "introduction/glossary#身份"
    - title: 进阶
      content: 学习如何如何管理、配置及验证策略，以及如何使用身份
      children:
        - title: 什么是策略？如何管理策略？
          url: "manual/policy/"
        - title: 如何理解策略 JSON 格式及各参数？
          url: "faq/json/"
        - title: 什么是资源标识符(QRN)？如何使用QRN生成器？
          url: "faq/qrn/"
        - title: 什么是策略模拟器？如何验证策略配置是否符合预期？
          url: "manual/policies_simulate/"
        - title: 如何使用身份？
          url: "faq/assume_role/"

---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->