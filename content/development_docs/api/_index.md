---
title: "API文档"
linkTitle: "API文档"
weight: 1
collapsible: true
type: "product"

section1:
  title: API文档
  vice_title: 青云向用户开放所有资源操作相关的API。青云API是通过 HTTPS GET方式来调用的。 

section2:
  title: 用户指南
  children:
    - title: 概述
      content: API概述
      url: "overview/"

    - title: 公共参数
      content: 公共参数是所有 API 请求都必需的参数。
      url: "parameters/"

    - title: 签名方法
      content: API请求中签名(signature)的生成方法。
      url: "signature/"

    - title: 错误码
      content: 服务器返回的错误码(ret_code)和错误信息(message)。
      url: "error_code/"

    - title: API指令列表
      content: 列出了所有的API请求指令。
      url: "command_list/"

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
    - title: 了解：什么是API
      content: 青云向用户开放所有资源操作相关的API。
      vice_title: 了解的第一步
      children:
        - title: API概述
          url: "overview/" 

    - title: 上手：API文档包含哪些内容。
      content: API文档包含公共参数、签名方法、错误码、API指令列表。
      vice_title: 上手的第一步
      children: 
        - title: 公共参数
          url: "parameters/"

        - title: 签名方法
          url: "signature/"

        - title: 错误码
          url: "error_code/"

        - title: API指令列表
          url: "command_list/"
---

<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->