---
title: "UDTF 函数"
description: 本小节主要介绍如何新建函数。 
keywords: 
weight: 30
collapsible: false
draft: false
---



## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已创建工作空间。

## 新建 UDTF 函数节点

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入函数管理页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间单击**云上加工** > **函数管理**，进入函数管理页面。
5. 单击**新建 UDTF 函数节点**，进入新建函数节点页面。
   
   <img src="/bigdata/dataplat/_images/create_function_node.png" alt="新建函数节点" style="zoom:50%;" />

6. 选择函数语言后，单击下一步。
7. 参数详细说明请参见 [函数参数说明](#函数参数说明)。
8. 单击**确定**，开始创建网络。

## 函数节点管理

- 编辑函数节点：
- 删除函数节点：

## 函数参数说明

| 参数           | 参数说明                                                     |
| :------------- | ------------------------------------------------------------ |
| 函数类型 |  支持三种函数：UDF、UDTF、UDTTF              |
| 语言类型 |  支持三种语言：Java、Python、Scala           |
| 函数名   |  配置函数的名称，函数名需与实现名保持一致。 |
| 特有属性 |  函数的详细代码。 |

### Python 语句示例

```python
class Split(TableFunction):
    def eval(self, string):
        for s in string.split(" "):
            yield s, len(s)

st_env.register_function($qc$_udf_name_$qc$, udtf(Split(), DataTypes.STRING(), [DataTypes.STRING(), DataTypes.INT()]))
```

> **说明**
>
> $qc$_udf_name_$qc$ 是一个占位符，当使用函数时，会替换成创建函数时所填写的名字。

### Scala 语句示例

```scala
import org.apache.flink.table.annotation.DataTypeHint
import org.apache.flink.table.annotation.FunctionHint
import org.apache.flink.table.api._
import org.apache.flink.table.functions.TableFunction
import org.apache.flink.types.Row

@FunctionHint(output = new DataTypeHint("ROW<word STRING, length INT>"))
class SplitFunction extends TableFunction[Row] {
  def eval(str: String): Unit = {
    str.split(" ").foreach(s => collect(Row.of(s, Int.box(s.length))))
  }
}

stenv.registerFunction($qc$_udf_name_$qc$, new SplitFunction())
```

