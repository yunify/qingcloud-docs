---
title: "qsctl"
date: 2020-11-27T10:08:56+09:00
description:
draft: false
weight: 2
---

qsctl 是青云对象存储服务的高级命令行工具。它提供了更强大的类 UNIX 命令，使管理对象存储的资源变得像管理本地资源一样方便。这些命令包括：cat，cp，ls，mb，mv，presign，rb，rm，stat，sync 和 tee。所有 qsctl 的命令都支持批量操作。

## 升级说明

qsctl 已升级至 v2.4.3 版本，如果您需要查看 qsctl v1.x 版本的文档，请点击 [qsctl v1 文档](v1)；建议您升级至 qsctl v2.4.3 版本，如果您担心兼容性问题，请查看 [qsctl 升级指南](v2-update) 来确认兼容性问题后使用。
如果您在使用过程中遇到任何问题，请通过工单联系我们。

## 变更日志

详见 [qsctl changelog](https://github.com/qingstor/qsctl/blob/master/CHANGELOG.md)。

## 安装

您可以直接[点击此处](https://releases.qingstor.dev/#qsctl)，根据您的操作系统下载，解压并运行我们提供的可执行文件。

## 快速开始

使用 qsctl 必需有一个配置文件，用来配置你自己的 `access_key_id` 和 `secret_access_key` 。比如:

```yaml
access_key_id: 'ACCESS_KEY_ID_EXAMPLE'
secret_access_key: 'SECRET_ACCESS_KEY_EXAMPLE'
```

access key 可在 [青云控制台](https://console.qingcloud.com/access_keys/) 申请。

配置文件可在每次执行命令时以参数 `-c /path/to/config` 方式来指定，例如:

```bash
> qsctl ls qs://mybucket -c '/root/qingstor_config.yaml'
```

配置文件同时支持 `host` ， `port` 等参数的配置，只需要添加对应配置项即可，全部的可配置项如下:

```yaml
access_key_id: 'ACCESS_KEY_ID_EXAMPLE'
secret_access_key: 'SECRET_ACCESS_KEY_EXAMPLE'

host: 'qingstor.com'
port: 443
protocol: 'https'
```

> 在载入配置文件时 `qsctl` 会按照如下顺序进行尝试，一旦读取成功便不再尝试下一个。

- 用户通过 `-c` 参数指定的路径
- \~/.qingstor/config.yaml
- \~/.config/qingstor/config.yaml


> qsctl v2.2.0 中移除了之前添加的交互式的配置程序。如果您仍需要进行交互式配置，建议使用 v2.1.2 版本。该版本中，在您首次使用 qsctl 且未在默认目录下检索到配置文件时，便会启动该交互配置。您只需要根据命令行的提示输入/选择配置内容即可，完成后配置程序会根据您输入的信息，在系统中生成配置文件 `{主目录}/.qingstor/config.yaml`。 
> 具体的配置文件的位置会根据您的系统而有所不同，通常来说，在类 Unix 操作系统下，配置文件会生成在 `~/.qingstor/config.yaml`，而在 Windows 操作系统下，配置文件会生成在 `C:\User\{\%USERPROFILE\%}\.qingstor\config.yaml`

## qsctl shell

自 qsctl v2.2.0 版本以来，我们新加入了交互式的 shell 界面，包含更多的引导和提示信息，推荐新用户使用。您可以执行 `qsctl shell` 命令进入命令行界面，根据提示进行操作即可。
在命令行中，我们新增了对历史命令和自动补全的支持。其中
- 在行开头可以自动提示补全可用命令；
- 输入 `qs://` 可以自动提示补全用户的 bucket 信息；
- 空格后可以自动提示补全本地文件信息；
- 输入 `-` 可以自动提示补全当前命令可用 flag 信息。

> 另外，我们将所有命令执行中的交互都移动到了 shell 中，包括进度条，删除 bucket 时的确认输入，删除 object 时的确认等。并在命令行直接执行时移除了这些交互效果，以更好的支持您使用脚本进行操作，除此之外，您在命令行中与 `qsctl shell` 中输入同样指令的结果是没有区别的。
如果您使用 qsctl 开发脚本的话可以直接用命令行模式，如 `qsctl cp local_file qs://mybucket/remote_folder/`。

## 命令列表

qsctl 支持的操作命令

| 命令 | 描述 |
|-|-|
| cat | 输出远程对象内容到标准输出。|
| [cp](#cp) | 复制本地文件到 QingStor 存储空间，或复制 QingStor 对象到本地。|
| [ls](#ls) | 所有的存储空间，或给定存储空间给定前缀下的所有对象。|
| mb | 创建一个新的存储空间。|
| [mv](#mv) | 移动本地文件到 QingStor 存储空间，或移动 QingStor 对象到本地。|
| presign | 生成指定对象的临时下载链接。|
| rb | 删除一个空的存储空间，或强制删除一个非空的存储空间。|
| rm | 删除一个 QingStor 对象或给定前缀下的所有对象。|
| [stat](#stat) | 查看一个指定对象的信息。|
| [sync](#sync) | 同步本地目录和 QingStor 目录。|
| [tee](#tee) | 从标准输入读取内容并上传。|

## 查看帮助文件

查看 qsctl 的命令列表和简易教程，可以通过 -h 参数打印出来:

```bash
> qsctl -h
```

查看 qsctl 的某个命令的详细说明和示例，请运行:

```bash
> qsctl <command> --help
```

## 示例

### cp

复制本地文件到 QingStor:
```bash
$ qsctl cp /path/to/file qs://mybucket/filename
File </path/to/file> copied to </filename>.
```

> filename 可忽略，会自动根据源文件名创建同名文件。

复制本地文件夹到 QingStor:
```bash
$ qsctl cp /path/to/folder qs://mybucket/parent/ -r
Dir </path/to/folder> copied to </parent/folder>.
```

复制本地文件夹下的所有文件到 QingStor:
```bash
$ qsctl cp /path/to/folder/ qs://mybucket/parent/ -r
Dir </path/to/folder> copied to </parent>.
```

> 添加 `-r` 标志是用于递归地复制文件夹及其子文件夹，所以源路径与目标路径必须都是目录: 其中 QingStor 没有目录概念，所以必须以 `/` 结尾。
如果源/目标路径中，本地文件夹不以 `/` 结尾(这里是指 Unix-like 系统，Windows 系统请替换为 `\`)，则会将整个目录 `cp` 到目标/源路径下；而如果本地文件夹以 `/` 结尾，则会将文件夹下的所有文件 `cp` 到目标/源路径下。

### ls

列出该用户的所有 bucket:
```bash
$ qsctl ls
mybucket
mybucket2
```

列出存储空间 <mybucket> 下的所有对象:
```bash
$ qsctl ls qs://mybucket -R
test/
test/test2.txt
test1.txt
```

以长模式列出存储空间 <mybucket> 下所有对象(文件大小可读转换):
```bash
$ qsctl ls qs://mybucket -lRh
drwxr-xr-x    0B  Jan 01 00:00  test/
-rwxr-xr-x  1.3K  Apr 07 19:09  test/test2.txt
-rwxr-xr-x  1.2K  Apr 07 19:09  test1.txt
```

> ls 的结果不能保证有序，请勿依赖遍历显示顺序。

### mv

> `mv` 操作与 `cp` 操作对文件夹/文件夹中的文件的处理逻辑相同， 请参考 [cp](#cp)。

### stat

查看 QingStor 对象信息:
```bash
$ qsctl stat qs://mybucket/dir/to/test
         Key: dir/to/test
        Size: 1000B
        Type: application/octet-stream
StorageClass: hot
        ETag: "someEtagInfo"
   UpdatedAt: 2020-04-01 03:58:58 +0000 UTC
```

查看 QingStor 对象信息，自定义格式输出:
```bash
$ qsctl stat qs://mybucket/dir/to/test --format="name:%n, size:%s"
name:dir1/cmd/qsctl/cat.go, size:1000
```

> `format` 标志可以传入格式化输出字符串，其中可用的有: `%F` (文件类型)，`%h` (文件内容的 etag 信息)，`%n` (文件名)，`%s` (文件大小，单位为字节)，`%y` (最后一次数据修改的时间，显示为可读模式)，`%Y` (最后一次数据修改的时间，显示为 Unix 时间戳) 。                          

### sync

同步 QingStor 目录到本地文件夹:
```bash
$ qsctl sync qs://mybucket/test/ /path/to/dir/ -r
Dir </test/> and </path/to/dir/> synced.
```

> `sync` 操作的源路径与目标路径必须都是目录: 其中 QingStor 没有目录概念，所以必须以 `/` 结尾。
本地文件夹也必须以 `/` 结尾(这里是指 Unix-like 系统，Windows 系统请替换为 `\`)，否则会针对本地文件夹的父目录进行同步操作。

仅同步本地文件夹中更新的文件(不同步目标路径中不存在的文件):
```bash
$ qsctl sync . qs://mybucket/test/ -r --update --existing
Dir </path/to/pwd/> and </test/> synced.
```

> 添加 `--update` 标志可以仅同步源路径中(比目标路径)更新的文件，添加 `--existing` 标志表示并不在目标目录中创建新的文件，仅复制那些目标目录中存在的文件。
另外可以利用 `--dry-run` 标志显示哪些文件将会被同步(但并不真正执行同步操作)，用于确认。

### tee

从标准输入上传文件到 QingStor:
```bash
$ cat /path/to/file | qsctl tee qs://mybucket/filename
Stdin copied to </filename>.
```

> qsctl 将不会像 Linux tee 命令那样将内容绑定到标准输出。
