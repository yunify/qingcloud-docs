---
title: "C/C++ SDK"
---

# C/C++ SDK

QingStor 对象存储的 C and C++ SDK 项目为 qingstor-sdk-cpp , 已在 GitHub 开源，本 SDK 使用 SDK 生成工具 [Snips](https://github.com/yunify/snips) 生成和维护，详细信息请参考其相关文档。

下文为简要使用文档。更多详细信息请参见 [https://github.com/yunify/qingstor-sdk-cpp](https://github.com/yunify/qingstor-sdk-cpp)。

## 安装

这个部分的文档介绍 qingstor-sdk 的安装。使用任何软件的第一步是正确的安装它。

本SDK目前仅支持源码编译安装方式:

### 安装需要的依赖

Visual Studio 2013 或更高版本
或者 GCC 编译器 4.1.2 或更高版本

如果你使用 Linux 平台进行编译，你需要安装 SDK 依赖的第三方库的： libcurl 和 libopenssl 。
可以参照以下方法，在你所使用的 Linux 发行版本对应的 package manager 中找到这两个依赖库:

在 Debian/Ubuntu 系列系统请使用一下命令安装

```bash
> sudo apt-get install libcurl4-openssl-dev libssl-dev
```

在 Redhat/Fedora 系列系统请使用一下命令安装

```bash
> sudo yum install libcurl-devel openssl-devel
```

### 从源码安装

qingstor-sdk 目前正在 GitHub 上活跃开发中，代码开源在
[此处](https://github.com/yunify/qingstor-sdk-cpp)

你也可以 clone 这个公开的仓库:

```bash
> git clone https://github.com/yunify/qingstor-sdk-cpp.git
```

### 编译步骤

1.安装 CMake 工具, 如果你使用的 CMake 工具版本低于 2.8 ,请参照 [CMake 的官方安装指导](https://cmake.org/install/)下载安装最新版本, 或通过源码编译安装.

2.建立 build 目录：

```bash
> cd BUILD_DIR
> cmake <path-to-root-of-this-source-code>
```

如果想编译 Release 版本，请按照以下命令执行 CMake 命令：

```bash
> cmake -DCMAKE_BUILD_TYPE=Release  <path-to-root-of-this-source-code>
> make
> sudo make install
```

### 编译标准C接口

SDK 默认编译不生成标准 C 接口，如果你希望编译包含标准 C 接口的 SDK ，请按照以下命令执行 CMake 命令：

```bash
> cmake -DBUILD_C_STYLE_INTERFACE=ON  <path-to-root-of-this-source-code>
```

本SDK提供了 C 和 C++ 两套接口，这两套接口在使用上方式上有所差别，请您阅读相应的使用说明文档，了解具体细节。

## 快速开始
- [qingstor-sdk 标准 C 接口使用快速指南](c/)
- [qingstor-sdk 标准 C++ 接口使用快速指南](cpp/)
