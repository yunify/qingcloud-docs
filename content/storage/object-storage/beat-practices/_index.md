---
title: "最佳实践"
linkTitle: "最佳实践"
weight: 7
collapsible: true
---


对象存储服务（Object Storage）提供了一个在线文件存储和访问平台，您可以将数据、日志、静态分发资源等多种文件类型，通过控制台或 Object Storage API 传到一个 Bucket 中，以供 HTTP 访问或数据分析使用。

本文档描述对象存储的最佳实践方式，以下是涉及的主要内容：

* [数据迁移方案](migrate/)
    * [被动触发迁移 - 外部镜像](migrate/#id2)
    * [用户主动迁移 - Fetch API](migrate/#fetch-api)
    * [用户主动迁移 - qscamel](migrate/#qscamel)
    * [推荐迁移步骤](migrate/#id4)
* [实时增量数据备份解决方案](backup/)
    * [环境要求](backup/#id2)
    * [软件配置](backup/#id3)
    * [使用方法](backup/#id4)
* [移动 App 接入方案](app_integration/)
    * [准备工作](app_integration/#id1)
    * [使用 QingStor SDK](app_integration/#qingstor-sdk)
    * [开发者实现签名服务器](app_integration/#id2)
    * [表单 POST 上传](app_integration/#post)
    * [请求参数签名](app_integration/#id3)
* [静态网站托管方案](web_hosting/)
    * [主要优势](web_hosting/#id2)
    * [应用场景](web_hosting/#id3)
    * [静态网站托管使用流程](web_hosting/#id4)
    * [对比传统部署方式](web_hosting/#id5)
    * [Web 服务静态化拆分样例](web_hosting/#web)

