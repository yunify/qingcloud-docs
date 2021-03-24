---
title: "资源编排"
linkTitle: "资源编排"
weight: 1
collapsible: true
type: "product"

section1:
  title: 资源编排
  vice_title: 资源编排（Resources Orchestration）是对资源的抽象建模和实例生成、维护的一种管理方式。该功能用于生成一组彼此关联，即有拓扑关系的 QingCloud IaaS/PaaS 资源组合的模板。模板描述了资源的详细配置和关联关系，应用模板可以生成拥有该配置和关系的资源。 

section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 产品简介
      url: "intro/intro/"

    - title: 操作指南
      content: 学习上手如何创建、查看及应用资源编排模板等。
      url: "manual/"

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
    - title: 了解：什么是资源编排
      content: 资源编排是对资源的抽象建模和实例生成、维护的一种管理方式。
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "intro/intro/"

    - title: 上手：操作指南
      content: 资源编排功能可以快速构建系统。
      vice_title: 上手的第一步
      children:
        - title: 创建模板
          url: "manual/createmodel/" 
        - title: 应用模板
          url: "manual/applymodel/"  
        - title: 查看模板
          url: "manual/checkmodel/"      

---

<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->