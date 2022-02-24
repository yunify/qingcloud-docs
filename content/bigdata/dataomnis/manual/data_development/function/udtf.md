---
title: "UDTF 函数"
description: 本小节主要介绍如何新建 UDTF 函数。 
keywords: 
weight: 30
collapsible: false
draft: false
---

UDTF 函数适用于一进多出的业务场景，即函数的输入与输出是一对多的关系，输入一行数据，输出多个值。更多详细信息请参见[官方文档](https://nightlies.apache.org/flink/flink-docs-release-1.12/zh/dev/table/functions/udfs.html#%E8%A1%A8%E5%80%BC%E5%87%BD%E6%95%B0)。

您可以通过 Java、Python、Scala 语言编写代码创建 UDTF 函数。

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已创建工作空间。

## 新建 UDTF 函数节点

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间选择**数据开发** > **函数管理**，进入函数管理页面。
5. 选择 **UDTF** 页签，点击**新建 UDTF 函数节点**，进入新建函数节点页面。
   
   <img src="/bigdata/dataomnis/_images/create_function_node.png" alt="新建函数节点" style="zoom:50%;" />

6. 选择函数语言后，点击**下一步**，配置函数节点。
7. 配置基础属性。

   - 函数名：函数名需与实现名保持一致。
   - 描述信息：函数的描述信息。

8. 配置特有属性。不同的语言，需要配置的参数也不同。
    
   - [选择 Java 语言](#java)
   - [选择 Python 语言](#python)
   - [选择 Scala 语言](#scala)

9. 点击**确定新建**，开始创建函数节点。
    
    创建完成后回到函数管理页面，可以看到已创建好的函数节点。 

### Java

在**引用 Jar 包**下拉框中选择已上传的 Jar 包资源。也可以点击**上传资源**，立即上传新的 Jar 包资源。

<img src="/bigdata/dataomnis/_images/create_udf_java.png" alt="新建函数节点-udf-java" style="zoom:50%;" />

### Python

在 **Python 语句**中输 入 Python 代码。

<img src="/bigdata/dataomnis/_images/create_udf_python.png" alt="新建函数节点-udf-python" style="zoom:50%;" />

#### 示例

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

### Scala

在 **Scala 语句**中输 入 Scala 代码。

<img src="/bigdata/dataomnis/_images/create_udf_scala.png" alt="新建函数节点-udf-scala" style="zoom:50%;" />

#### 示例

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

## 编辑 UDTF 函数节点

若您需要修改函数名称、描述信息、函数代码，您可以执行以下步骤。

1. 点击函数操作列的**编辑**，进入编辑函数节点页面。
2. 根据实际情况修改**函数名**、**描述**和**特有属性**。

## 删除 UDTF 函数节点

> **注意**
>
> 删除函数后，相关作业、任务将无法正常运行，且该操作无法撤回，请谨慎操作。

- **单个删除**：在需要删除的函数节点的操作列，点击**删除**，在弹出的提示框中点击**删除**。    
- **批量删除**：勾选需要删除的函数节点，点击列表上方的**删除**，在弹出的提示框中点击**删除**。
