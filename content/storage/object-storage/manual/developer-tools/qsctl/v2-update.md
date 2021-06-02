---
title: "qsctl v2.0 升级文档"
linkTitle: "qsctl"
date: 2020-11-27T10:08:56+09:00
description:
draft: false
weight: 2
---



## 安装

您可以直接[点击此处](https://releases.qingstor.dev/#qsctl)，根据您的操作系统下载，解压并运行我们提供的可执行文件。

> 如果您需要删除 qsctl v1.x 的话，可以运行 `sudo pip uninstall qsctl` 命令进行删除操作。

## 兼容性变更

1. 取消对旧版的 `qs_access_key_id`，`qs_secret_access_key` 参数的兼容，需要在配置文件中改为 `access_key_id`，`secret_access_key`。
2. 不会再从 `~/.qingcloud/config.yaml` 路径读取配置文件。
3. 对于 `cp`，`mv`，`rm` 和 `sync` 命令，暂时取消对 `include`， `exclude`，`--rate-limit` 和 `workers` 选项的支持，预计会在后续版本中进行补充。
4. 对于 `sync` 命令，暂未添加对 `--delete` 选项的支持；并且默认修改为非递归操作，如果需要递归同步子目录，请添加 `-r` 选项。
5. 对于 `ls` 命令，默认修改为只显示文件名的操作；如果需要显示详细信息，请添加 `-l` 选项，详情请查看 [ls 命令](../v1/#ls)。
6. 对于 `cp` 和 `mv` 命令，对本地文件夹的操作在路径结尾是否添加 `/` 时行为有所不同，详情请查看 [cp 命令](../v1/#cp)。