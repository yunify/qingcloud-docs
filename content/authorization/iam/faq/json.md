---
title: "JSON 编辑格式及参数说明"
date: 2020-02-28T10:08:56+09:00
description: 
draft: false
weight: 43
---

创建或编辑策略时，您可以选择 JSON 选项卡进入 JSON 编辑模式，以便在 JSON 编辑器中键入或粘贴策略。

这种方法一般适用于复制[示例策略](../../faq/json/#策略示例)以方便在您的账户中使用，如果您对下文描述中的 QingCloud IAM 语法元素比较熟悉，也可以直接在 JSON 编辑器中键入自己的 JSON 策略文档。

![demo1_JsonEditor](../../_images/demo1_JsonEditor.png)

## 策略构成

策略**语句（statement）**核心元素：**资源（resource）**、**操作（action）** 和 **效力（effect）**。

> 注：元素保留字仅支持小写。

1. 语句（statement）

    描述一条或多条权限的详细信息。

    策略的权限可能包含一条或多条语句（statement），每条语句都必须包括资源（resource）、操作（action）和效力（effect）。

    ```json
    {
    "action": [
      "ecm:Describe*",
      "ecm:CreateBrokers",
      "ecm:DeleteBrokers"
    ],
    "effect": "allow",
    "resource": "*"
    }
    ```

2. 操作（action）

    描述允许或拒绝的操作，该元素是必填项。

    操作可以是某个或某些服务下的 [API](../../faq/supported_services#服务操作列表) 或者功能集。

    填写时以冒号分隔前者为服务类别后者为操作 API ，可以使用一个 `*` 作为通配符。

    ```json
    "action": [
      "ecm:Describe*",
      "ecm:CreateBrokers",
      "ecm:DeleteBrokers"
    ]
    ```

3. 资源（resource）

    描述授权的具体数据范围，该元素是必填项。

    资源是用六段式 qrn 描述，每款产品的资源定义详情会有所区别。具体描述方式请参阅：[资源标识符 QRN](../../faq/qrn) 。

    ```json
    "resource": "qrn:qingcloud:ecm:test:usr-XXXXX:instance/i-123456"
    ```

4. 效力（effect）

    描述策略语句产生的结果是“允许（allow）”还是“拒绝（deny）”，该元素是必填项。

    > 注：若同一个操作被同时赋予两种效力，最终产生的结果为“拒绝”。

    ```json
    "effect": "allow"
    ```

以上便是 QingCloud IAM 的策略文档构成，建议您在参照文档用 JSON 编辑策略时，随时通过切换到可视化编辑器来比较您填写的这些内容。

## 策略示例

### 最高管理权限

```json
[
  {
    "action": "*",
    "effect": "allow",
    "resource": "*"
  }
]
```

### 弹性云服务器服务（ECM）的资源查看权限

```json
[
  {
    "action": [
      "ecm:Describe*",
      "ecm:CreateBrokers",
      "ecm:DeleteBrokers"
    ],
    "effect": "allow",
    "resource": "*"
  }
]
```

### 弹性负载均衡服务（ELB）的完全管理权限

```json
[
  {
    "action": "elb:*",
    "effect": "allow",
    "resource": "*"
  }
]
```
