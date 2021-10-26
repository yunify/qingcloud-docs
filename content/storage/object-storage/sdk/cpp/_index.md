---
title: "C/C++ SDK"
---


QingStor 对象存储的 C/C++ SDK 已在 GitHub 开源，本文为简要使用文档。更多详细信息请参见 [GitHub 项目](https://github.com/yunify/qingstor-sdk-cpp)。

本 SDK 使用 [Snips](https://github.com/yunify/snips) 工具生成，各接口的调用均与 QingStor 对象存储的 API 相对应。其返回码、请求头、错误码等规定请参照具体的 [Qingstor Restful API 文档](/storage/object-storage/api/)。


本SDK提供了 C 和 C++ 两套接口，这两套接口在使用上方式上有所差别，请您阅读相应的使用说明文档，了解具体细节。

## 安装

本 SDK 目前仅支持源码编译安装方式，详细操作如下：

### 安装依赖

- 需在本地安装 Visual Studio 2013 或更高版本，或者 GCC 编译器 4.1.2 或更高版本。
- 若用户使用 Linux 平台进行编译，还需安装 SDK 依赖的第三方库：libcurl 和 libopenssl。可以参照以下操作步骤：

    在 Debian/Ubuntu 系列系统请使用一下命令安装

    ```bash
    > sudo apt-get install libcurl4-openssl-dev libssl-dev
    ```

    在 Redhat/Fedora 系列系统请使用一下命令安装

    ```bash
    > sudo yum install libcurl-devel openssl-devel
    ```

### 获取源码

qingstor-sdk 目前正在 GitHub 上活跃开发中，代码开源在 [此处](https://github.com/yunify/qingstor-sdk-cpp)。您也可以 Clone 这个公开的仓库:

```bash
> git clone https://github.com/yunify/qingstor-sdk-cpp.git
```

### 编译步骤

1. 安装 CMake 工具。若您当前使用的 CMake 工具版本低于 2.8，请参照 [CMake 的官方安装指导](https://cmake.org/install/) 下载安装最新版本, 或通过源码编译安装。

2. 创建 build 目录：

```bash
> cd BUILD_DIR
> cmake <path-to-root-of-this-source-code>
```

3. 若用户需要编译 Release 版本，请执行以下 CMake 命令：

```bash
> cmake -DCMAKE_BUILD_TYPE=Release  <path-to-root-of-this-source-code>
> make
> sudo make install
```

### 编译标准C接口

SDK 默认编译不生成标准 C 接口，若用户希望编译包含标准 C 接口的 SDK，请执行以下 CMake 命令：

```bash
> cmake -DBUILD_C_STYLE_INTERFACE=ON  <path-to-root-of-this-source-code>
```

## 快速开始
- [qingstor-sdk 标准 C 接口使用快速指南](c/)
- [qingstor-sdk 标准 C++ 接口使用快速指南](cpp/)
