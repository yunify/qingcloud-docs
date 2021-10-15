---
title: "生命周期管理"
date: 2021-07-14T10:08:56+09:00
description:
draft: false
weight: 8
---

## 功能介绍
用户可以使用 QingStor 对象存储的生命周期管理功能来配置一条或多条规则对 Bucket 中的 Object 进行生命周期管理。每条规则定义了对 Bucket 中的哪些 Object 过多长时间执行哪种操作。

QingStor 对象存储定义生命周期（Lifecycle）为 Bucket 的子资源 (Subresource)，因此，只有 Bucket 的所有者才能设置该功能。

**操作类型:**

- 转换存储层级

    用户可以使用该功能将过一段时间后访问频率变低的 Object 转换至低频存储层级。目前 QingStor 对象存储仅支持将标准存储转换至低频存储。

- 过期删除

    用户通过配置此功能，可将指定资源过一段时间后自动删除。包括删除 Object 和取消分段上传，删除未完成的分段上传。


## 操作步骤

1. 进入 QingStor 对象存储的主页面，选择待设置生命周期的 Bucket，点击 **右键** > **设置**：

 ![](../../_images/set_bucket_lifecycle1.png)

2. 进入 Bucket 设置页面，点击 **生命周期** > **添加规则**：

 ![](../../_images/set_bucket_lifecycle2.png)

3. 在弹出的 **添加规则** 对话框内，根据页面提示信息，填写相关参数后，点击 **提交** 按钮：

 ![](../../_images/set_bucket_lifecycle3.png)

 **说明：**
   - **对象前缀：** 用于指定该规则匹配的 Object 名。
      - 缺损时，说明该规则对 Bucket 内所有 Object 均适用；
      - 不支持通配符和正则表达式；
      - 需进行编码，编码后长度在 1 ～ 1023 个字符之间。
   - **天数：** Object 创建或修改的指定天数后执行操作。
      - 变更存储级别时，天数必须大于或等于 30 天；
      - 删除 Object，或者取消未完成的分段上传，天数必须大于 0 天。

4. 成功创建的生命周期规则，列表显示：

 ![](../../_images/set_bucket_lifecycle4.png)

## 相关API

|操作|API|说明|
|--|--|--|
|设置 Bucket Lifecycle|[PUT Bucket Lifecycle](/storage/object-storage/api/bucket/policy/put_lifecycle)|用于设置 Bucket 的生命周期规则|
|获取 Bucket Lifecycle|[GET Bucket Lifecycle](/storage/object-storage/api/bucket/policy/put_lifecycle)|用于获取已设置的 Bucket 生命周期规则|
|删除 Bucket Lifecycle|[DELETE Bucket Lifecycle](/storage/object-storage/api/bucket/policy/put_lifecycle)|用于删除已经设置的 Bucket 策略生命周期规则|

