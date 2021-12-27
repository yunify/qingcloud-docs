---
title: "对象存储"
linkTitle: "对象存储"
weight: 1
collapsible: true
type: "product"

section1:
  title: 对象存储
  vice_title: QingStor 对象存储为用户提供可无限扩展的通用数据存储服务，具有安全可靠、简单易用、高性能、低成本等特点。
  # todo add qingstor introduction video
  video: "https://pek3b.qingstor.com/yunify-qingcloud-docs/video/qs_qingcloud_bucket.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    # - title: 动态与公告
    #   content: 产品动态和公告
    #   url: "/storage/object-storage/news/history"

    - title: 产品简介
      content: 产品简介
      url: "/storage/object-storage/intro/object-storage"

    - title: 计费指南
      content: 计费指南
      url: "/storage/object-storage/billing/price"

    - title: 操作指南
      content: 操作指南
      url: "/storage/object-storage/manual"

    - title: 最佳实践
      content: 最佳实践
      url: "/storage/object-storage/beat-practices/"

    - title: 常见问题
      content: 常见问题
      url: "/storage/object-storage/faq/object-faq"

section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "api/overview/"

    - title: SDK 文档
      content: 如何使用 SDK 文档
      url: "/storage/object-storage/sdk/"
      
    - title: S3 兼容
      content: S3 兼容说明
      url: "s3/"

section4:
  children:
    - title: 了解：什么是对象存储
      content: 对象存储为用户提供可无限扩展的通用数据存储服务，具有安全可靠、简单易用、高性能、低成本等特点。
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "/storage/object-storage/intro/object-storage/"

        - title: 产品优势
          url: "/storage/object-storage/intro/object-storage/#产品优势"

        - title: 功能简介
          url: "/storage/object-storage/intro/function_list/"       


    - title: 上手：创建和管理 Bucket
      content: 创建独立的 Bucket，管理 Bucket 的访问权限，设置 CORS 等。
      vice_title: 上手的第一步
      children:
        - title: 创建 Bucket
          url: "/storage/object-storage/manual/console/bucket_manage/basic_opt/"

        - title: 通过控制台上传文件
          url: "/storage/object-storage/manual/console/object_manage/basic_opt/"

        - title: 设置 Bucket 的访问权限
          url: "/storage/object-storage/manual/console/bucket_manage/access_control/"
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->

