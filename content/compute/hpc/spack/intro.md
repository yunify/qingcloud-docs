---
title: "公共软件管理"
linkTitle: "公共软件管理"
date: 2021-11-26T10:08:56+09:00
description: spack 的公共软件管理
keyword: 云计算, 青云, QingCloud, HPC，spack，公共软件管理
draft: false
weight: 1
---

### 查看公共软件列表

```
spack find
```

![img](../_images/spack-find.png)

### 查看指定软件

```
spack find software
```

![img](../_images/spack-find-name.png)

### 加载软件(须加载该软件的编译器)

```
spack load software@version
```

![img](../_images/spack-load.png)
