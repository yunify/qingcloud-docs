---
title: "生命周期管理"
date: 2021-07-14T10:08:56+09:00
description:
draft: false
weight: 8
---

## 功能介绍
用户可以使用 QingStor 对象存储的生命周期管理功能来配置一条或多条规则对 Bucket 中的 Object 进行生命周期管理。每条规则定义了对 Bucket 中的哪些 Object 过多长时间执行哪种操作。

QingStor 对象存储定义生命周期为 Bucket 的子资源，因此，只有 Bucket 的所有者才能设置该功能。

**操作类型:**

- 转换存储层级

    用户可以使用该功能将过一段时间后访问频率变低的 Object 转换至低频存储层级。目前 QingStor 对象存储仅支持将标准存储转换至低频存储。需要注意的是，Object 的最后更新时间为 30 天前，包括 30 天，才能将其转换为低频存储。低频存储中的 Object 需在低频存储中最少存储30天，若在 30 天内被修改或删除，系统仍然以 30 天计费。

- 过期删除

    用户通过配置此功能，可将指定资源过一段时间后自动删除。包括删除 Object 和取消分段上传，删除未完成的分段上传。

## 规则冲突

当两条或多条生命周期规则重叠或冲突时，QingStor 对象存储的处理如下：

1. 若同一个 Object 匹配到多条规则，并且匹配的这些规则是同一操作，那么生效时间最早的规则，先执行。举例说明如下：

   **案例1:** 一个 Object 匹配到了两条规则。规则 A 是 7 天后删除该 Object；规则 B 是 30 天后删除该 Object。QingStor 对象存储将在 7 天后删除该 Object。

   **案例2:** 一个 Object 匹配到了两条规则。规则 A 是 30 天后变更该 Object 为低频存储；规则 B 是 120 天后变更该 Object 为低频存储。QingStor 对象存储将在 30 天后变更该 Object 为低频存储。
   
2. 若同一个 Object 匹配到多条规则，并且匹配的这些规则是不同操作，那么生效时间更早的先执行，生效时间晚的后执行。举例说明如下：

   **案例1:** 一个 Object 匹配到了两条规则。规则 A 是 30 天后变更该 Object 为低频存储；规则 B 是 120 天后删除该 Object。QingStor 对象存储将在 30 天后变更该 Object 为低频存储，并在 120 天后删除该 Object。
   
3. 当用户添加或修改 `转换存储层级规则` 时，若存在某 `过期删除规则` 的前缀覆盖其前缀的范围，且 `转换存储层级规则` 的生命周期大于或等于 `过期删除规则` 的生命周期，QingStor 对象存储判定用户误操作，不允许添加或修改该 `转换存储层级规则`，并返回 `400 invalid_request` 以及相应的冲突信息。举例说明：

   **条件1:** 用户添加规则 A，120 天后变更前缀为 `logs/test` 的 Object 为低频存储；

   **条件2:** 已经存在规则 B，30 天后删除前缀为 `logs/` 的 Object；

   **服务端处理:** 此时用户添加规则 A 失败，QingStor 对象存储返回 `400 invalid_request` 以及相应的冲突信息。

4. 当用户添加或修改 `过期删除规则` 时，若存在某 `转换存储层级规则` 的前缀处于其前缀范围之下，且 `过期删除规则` 的生命周期小于或等于 `转换存储层级规则` 的生命周期，QingStor 对象存储判定用户误操作，不允许添加或修改该 `过期删除规则`，并返回 `400 invalid_request` 以及相应的冲突信息。举例说明：

   **条件1:** 用户添加规则 A，30 天后删除前缀为 `logs/` 的 Object；

   **条件2:** 已经存在规则 B，120 天后变更前缀为 `logs/test` 的 Object 为低频存储；

   **服务端处理:** 此时用户添加规则 A 失败，QingStor 对象存储返回 `400 invalid_request` 以及相应的冲突信息。


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
|设置 Bucket Lifecycle|[PUT Bucket Lifecycle](/storage/object-storage/api/bucket/lifecycle/put_lifecycle)|用于设置 Bucket 的生命周期规则|
|获取 Bucket Lifecycle|[GET Bucket Lifecycle](/storage/object-storage/api/bucket/lifecycle/get_lifecycle)|用于获取已设置的 Bucket 生命周期规则|
|删除 Bucket Lifecycle|[DELETE Bucket Lifecycle](/storage/object-storage/api/bucket/lifecycle/delete_lifecycle)|用于删除已经设置的 Bucket 策略生命周期规则|