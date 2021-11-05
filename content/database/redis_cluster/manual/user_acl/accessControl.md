---
title: "权限控制字符串"
description: 本小节介绍如何设置 ACL 规则。 
keywords: redis cluster，redis ACL，访问控制
weight: 4
draft: false
---

权限控制字符串即 ACL 规则，用于给用户设置命令权限及数据权限，避免用户的误操作导致数据丢失或避免数据泄露的安全风险。

## ACL 使用场景

- 希望限制用户访问命令和键以提高安全性，使不受信任的用户没有权限访问，而受信任的用户仅有完成工作的最小访问权限。例如，限制用户只能执行只读命令。

- 希望提高运营安全， 以防止由于软件错误或人为错误而导致进程或人员访问 Redis，从而破坏数据或配置。 例如，禁止工作人员从 Redis 调用 `FLUSHALL` 命令。

##  ACL 规则配置

ACL 规则是使用 DSL（Domain specific language）定义的， DSL 描述了用户能够执行以及不能执行的操作。规则始终按照从从左到右，从第一个到最后一个的顺序进行应用。多条规则之间使用空格分隔。

### 允许/禁止命令

- **+<command\>**：将命令添加到用户可以调用的命令列表中。

- **-\<command\>**：将命令从用户可以调用的命令列表中移除。

- **+@\<category\>**：允许用户调用 \<category\> 类别中的所有命令，有效类别为 @admin，@set，@read 等，可通过调用 `ACL CAT` 命令查看完整列表。特殊类别 @all 表示所有命令，包括当前和未来版本中存在的所有命令。

- **-@\<category\>**：禁止用户调用 \<category\> 类别中的所有命令。

- **allcommands**：+@all 的别名，允许调用所有命令，包括当前存在的命令以及将来通过模块加载的所有命令。

- **nocommands**：-@all 的别名，禁止调用所有命令。

- **+\<command\>|subcommand**：允许使用已禁用命令的特定子命令。

  > **注意**
  >
  > 不可使用`-<command>|subcommand`写法，只能以“+”开头。

### 允许/禁止某些 Key

-  **~\<pattern\>**：添加可以在命令中提及的键模式。
- **allkey**：**~*** 的别名，表示允许全部 key，其中 * 为通配符。
- **resetkeys**：使用当前模式覆盖所有允许的模式。例如： ~int:* ~sor:* resetkeys ~new:* ，最终客户端只允许访问匹配 ~new:* 模式的key。

## 配置示例

**示例1:** 

允许用户调用 GET 命令。

```
+get ~*
```

**示例2:** 

允许用户调用除 GET 命令之外的所有命令。

```
 +@all -get ~*
```

**示例3：**

允许用户调用 READ 与 ADMIN 类别下的命令。

```
+@read  +@admin ~*
```

**示例4：**

允许读以 **qingcloud:** 或 **redis:** 开头的 key。

```
+@read ~qingcloud:* ~redis:*
```

**示例5：**

允许用户使用 "cluster info", "cluster nodes" 查看集群相关信息。

```
+cluster|info +cluster|nodes
```

