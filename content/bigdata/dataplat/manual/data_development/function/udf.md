---
title: "UDF 函数"
description: 本小节主要介绍如何新建函数。 
keywords: 
weight: 20
collapsible: false
draft: false
---



## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已创建工作空间。

## 新建 UDF 函数节点

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入函数管理页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间单击**云上加工** > **函数管理**，进入网络配置页面。
5. 单击**新建 UDF 函数节点**，进入新建函数节点页面。
   
   <img src="/bigdata/dataplat/_images/create_function_node.png" alt="新建函数节点" style="zoom:50%;" />

6. 选择函数语言后，单击下一步。
7. 参数详细说明请参见 [函数参数说明](#函数参数说明)。
8. 单击**确定**，开始创建网络。

## 函数参数说明

| 参数           | 参数说明                                                     |
| :------------- | ------------------------------------------------------------ |
| 函数类型 |  支持三种函数：UDF、UDTF、UDTTF              |
| 语言类型 |  支持三种语言：Java、Python、Scala           |
| 函数名   |  配置函数的名称，函数名需与实现名保持一致。 |
| 特有属性 |  函数的详细代码。 |

## 函数节点管理

- 编辑函数节点：
- 删除函数节点：

## 示例

### Python 语句示例

```python
class PythonUpper(ScalarFunction):
    def eval(self, s):
        return s.upper()

st_env.register_function($qc$_udf_name_$qc$, udf(PythonUpper(), DataTypes.STRING(), DataTypes.STRING()))
```

> **说明**
>
> $qc$_udf_name_$qc$ 是一个占位符，当使用函数时，会替换成创建函数时所填写的名字。

### Scala 语句示例

```scala
class PlusOne extends ScalarFunction {
  def eval(v: Long) = v + 1
}

stenv.registerFunction($qc$_udf_name_$qc$, new PlusOne())
```

