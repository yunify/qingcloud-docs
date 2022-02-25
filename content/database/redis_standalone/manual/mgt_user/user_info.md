---
title: "用户管理概述"
description: 用户管理概述
keyword: 访问控制,用户管理 ACL,用户概述,default,键值数据库,Redis,Redis Standalone,数据库
weight: 01
collapsible: false
draft: false
---

## 默认用户

创建 Redis Standalone 集群时，默认创建一个 **default** 用户帐号。

- **default** 用户帐号默认密码为空，可通过修改 **requirepass** 参数设置密码。
- **default** 用户帐号具备 `+@all` 访问和操作权限。
- **default** 用户帐号为默认帐户，不支持删除。
- **default** 用户帐号不支持在**用户管理ACL**页面管理。

## ACL 用户

ACL 即访问控制列表（Access Control List），包含了对一个对象或一条记录可进行何种操作的权限定义。

**ACL 用户**即具备一定 ACL 规则的用户帐号。该用户帐号 ACL 权限是通过配置用户帐号允许获禁用 ACL 规则划定。

ACL 规则即权限控制字符串，用于给用户设置命令权限及数据权限，避免用户的误操作导致数据丢失或避免数据泄露的安全风险。

> **注意**
>
> Redis 6.* 及以上版本，支持控制台管理 ACL 用户。
> 
> 开启**控制台管理 ACL** 参数后，不再支持命令行管理用户帐号。

通常应用于如下场景：

- 为限制用户访问命令和键以提高安全性，可配置**不受信任的用户**没有权限访问，**受信任的用户**仅有最小访问权限，**高级用户**有更多访问权限。例如，限制用户只能执行只读命令。

- 为提高运营安全，以防止由于软件错误或人为错误而导致进程或人员访问 Redis，导致数据或配置异常。例如，禁止工作人员从 Redis 调用 `FLUSHALL` 命令。

## ACL 规则

ACL 规则是使用 DSL（Domain specific language）定义的，DSL 描述了用户能够执行以及不能执行的操作。规则始终按照从从左到右，从第一个到最后一个的顺序进行应用。多条规则之间使用空格分隔。

### 允许/禁止命令

- **+<command\>**
  
  将命令添加到用户可以调用的命令列表中。

- **-\<command\>**
  
  将命令从用户可以调用的命令列表中移除。

- **+@\<category\>**
  
  允许用户调用 `\<category\>` 类别中的所有命令，有效类别为 `@admin`、`@set`、`@read` 等。
  
  特殊类别 `@all` 表示所有命令，包括当前和未来版本中存在的所有命令。

  > **说明**
  >
  > 可通过调用 `ACL CAT` 命令查看完整有效类别列表。

- **-@\<category\>**
  
  禁止用户调用 \<category\> 类别中的所有命令。

- **allcommands**
  
  `+@all` 的别名，允许调用所有命令，包括当前存在的命令以及将来通过模块加载的所有命令。

- **nocommands**
  
  `-@all` 的别名，禁止调用所有命令。

- **+\<command\>|subcommand**
  
  允许使用已禁用命令的特定子命令。

  > **注意**
  >
  > 不可使用`-<command>|subcommand`写法，只能以“+”开头。

### 允许/禁止某些 Key

-  **~\<pattern\>**

  添加可以在命令中提及的键模式。

- **allkey**
  
  `~*` 的别名，表示允许全部 Key。其中 * 为通配符。

- **resetkeys**
  
  使用当前模式覆盖所有允许的模式。例如：`~int:* ~sor:* resetkeys ~new:*` ，最终客户端只允许访问匹配 `~new:*` 模式的 Key。

### ACL 用户规则示例

**示例1：** 允许用户调用 GET 命令。

```text
+get ~*
```

**示例2：** 允许用户调用除 GET 命令之外的所有命令。

```text
+@all -get ~*
```

**示例3：**允许用户调用 READ 与 ADMIN 类别下的命令。

```text
+@read  +@admin ~*
```

**示例4：**允许读以 **cloud:** 或 **redis:** 开头的 Key。

```text
+@read ~cloud:* ~redis:*
```

**示例5：**允许用户使用 "cluster info"、"cluster nodes" 查看集群相关信息。

```text
+cluster|info +cluster|nodes
```
