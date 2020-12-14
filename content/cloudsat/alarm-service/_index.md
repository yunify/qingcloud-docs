---
title: "告警服务"
linkTitle: "告警服务"
weight: 5
collapsible: true
type: "product"

section1:
  title: 告警服务
  vice_title: 告警功能提供对监控指标的告警服务支持，用户对云服务的核心监控指标设置告警规则，当监控指标触发用户设置的告警规则阈值时，则会按照用户设置的查收通知形式，收取告警信息。目前平台支持以邮箱、短信、等方式通知用户，让用户可以在第一时间得知云资源发生的异常情况，快速准确定位，并迅速处理故障，避免因资源问题或者外部操作原因，造成业务上的损失。

Section2:
  title: 用户指南
  children:
    #- title: 告警服务
    # content: 告警服务用户使用文档
    # url: "/cloudsat/alarm-service/intro/introduction"

    - title: 产品简介
      content: 产品简介
      url: "/cloudsat/alarm-service/intro/intro/"
    
    - title: 计费指南
      content: 计费指南
      url: "/cloudsat/alarm-service/billing/price/"
    
    - title: 操作指南
      content: 操作指南
      url: "/cloudsat/alarm-service/manual/alarm_service/"
    
    - title: 最佳实践
      content: 最佳实践
      url: "/cloudsat/alarm-service/best-practices/exceptionhandle"

section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "/qingstor/guide/object_manage"

    - title: SDK 文档
      content: 如何使用 SDK 文档
      url: "/test/guide/object_manage"

    - title: CLI 文档
      content: 如何使用 CLI 文档
      url: "/qingstor/guide/object_manage/"

section4:
  children:
    - title: 了解：什么是告警服务
      content: 告警功能提供对监控指标的告警服务支持，让用户可以在第一时间得知云资源发生的异常情况，快速准确定位，并迅速处理故障，避免因资源问题或者外部操作原因，造成业务上的损失。
      vice_title: 了解的第一步
      children:
        - title: 告警服务概述
          url: "/cloudsat/alarm-service/intro/intro/"


    - title: 上手：创建告警策略使用告警服务
      content: 创建一个告警策略，指定资源类型、检查周期、告警条件、通知列表等信息。 之后便可将其与资源关联，开始监控。
      vice_title: 上手的第一步
      children: 
        - title: 创建与使用告警服务
          url: "/cloudsat/alarm-service/manual/alarm_service/"

---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->