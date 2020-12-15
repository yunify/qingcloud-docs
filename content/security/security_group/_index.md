---
title: "安全组"
linkTitle: "安全组"
weight: 30
collapsible: true
type: "product"

section1:
  title: 安全组 (Security Group)
  vice_title: 为了加强位于基础网络 vxnet-0 中的主机或路由器的安全性，可以在主机或路由器之前放置一个安全组(Security Group)。QingCloud 系统为每个用户提供了一个缺省安全组(ID 之后带有星标)，默认打开22端口。当然，您也可以创建更多的安全组。初始状态下，每个安全组都不包含任何规则，即，任何端口都是封闭的，您需要建立规则以打开相应的端口。另外，您可以借助 "IP/端口集合" 功能把具有相同特征的一组 IP 或者一组端口设置成为 "IP/端口集合"，并且在安全组规则中进行添加，实现批量管理功能。
  video: "https://pek3a.qingstor.com/workshop/webhosting%20feb.16%20v3.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 安全组
      content: 安全组产品简介
      url: "/security/security_group/intro/introduction"

    - title: 操作指南
      content: 安全组操作文档
      url: "/security/security_group/manual/sg_create"

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
    - title: 了解：什么是安全组
      content: 安全组。
      vice_title: 了解的第一步
      children:
        - title: 产品描述
          url: "/security/security_group/intro/introduction"

---

