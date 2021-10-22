---
title: "qscamel"
date: 2021-08-10T10:08:56+09:00
description:
draft: false
collapsible: false
weight: 6
---

## 功能概述

qscamel 是一个用于在不同的端点 (Endpoint) 间高效迁移数据的工具。作为端点间数据迁移的工具，qscamel 有着如下特性：

- 简单，便于使用的任务管理
- 支持从任务中断处续传，从而节省用户的时间
- 提供完全自动化的重试机制，无须人工介入
- 基于 Goroutine 池实现的并发机制，提高迁移效率
- 支持 copy，fetch，delete 等迁移机制
- 支持数据校验


## 安装

用户可在 [releases](https://github.com/qingstor/qscamel/releases) 页面分别获取适用于 Linux，macOS 以及 Windows 操作系统的最新版本的 qscamel，并进行安装。

## 配置

qscamel 默认从 `~/.qscamel/qscamel.yaml` 读取配置文件，用户也可以通过 `-c` 或者 `--config` 参数来指定配置文件的位置。由于各配置项均有默认值，故，无特殊需求，用户无需对其进行修改。qscamel 的配置文件内容详细说明如下：

**qscamel 配置示例：**

```yaml
concurrency: 0
log_level: info
pid_file: ~/.qscamel/qscamel.pid
log_file: ~/.qscamel/qscamel.log
database_file: ~/.qscamel/db
```

**说明**
- `concurrency` 用于控制同时启用的任务并发数量。若没有设置，或者设置为 0， qscamle 将会使用 `逻辑 CPU 数量 * 100` 作为该项的值。
- `log_level` 用于控制日志的级别。日志内容显示从多到少依次可设置为：debug，info，warn，error，fatal，panic。
- `pid_file` 用于控制在何处创建 PID 文件。
- `log_file` 用于控制在何处创建日志文件。
- `database_file` 用于控制在何处创建数据库。
- 以上配置字段均有默认值，默认值如示例文件所示。用户可根据需求，修改相应参数。


## 任务

用户可通过任务文件来定义一个数据迁移任务。每个任务文件都有着如下共同的配置内容：

**配置示例：**
```yaml
type: copy

source:
  type: fs
  path: "/path/to/source"

destination:
  type: qingstor
  path: /aaa
  
  options:
    bucket_name: example_bucket
    access_key_id: example_access_key_id
    secret_access_key: example_secret_access_key

ignore_existing: last_modified
```

**说明**
- `type` 用于定义该任务的类型。可选值: copy，fetch，delete。<br>copy 将会从 `source` 指定的端点读取文件，并写入到 `destination` 指定的端点；<br>fetch 将会从 `source` 指定的端点获取文件的下载链接，并使用 `destination` 指定的端点的 fetch 功能对其进行拉取；<br>delete 将会从 `source` 指定的端点获取文件的信息，并在 `destination` 指定的端点将其删除。
- `source：` 标识后续字段为任务的源端点，即：source 端点信息。
- `destination` 标识后续字段为任务的目标端点，即 destination 端点信息。
- `type` 当前端点的类型。可选值: aliyun，azblob，cos，fs，filelist，gcs，hdfs，qingstor，qiniu，s3，upyun。
- `path` 当前端点的路径。须为目录名。
- `options` 标识后续字段为可选字段。不同端点的可选字段，会有区别，详情可参考 [端点信息](#端点信息)
- `ignore_existing` 用于控制是否跳过已经存在的文件，为空或未配置时将会禁用该配置，即总是覆盖。可选值为：last_modified 与 md5sum。<br>last_modified 将会检查目标的 LastModified 是否比源站要大；<br>md5sum 将会对文件做完整的 MD5 计算，当 MD5 相同时会跳过。


## 使用

### Run

qscamel 最主要的命令。用户可通过该命令来创建或者恢复一个迁移任务。

当使用该命令，创建或恢复一个任务时，qscamel 会根据任务名查询数据库，检查任务文件内容是否有更新。若任务文件内容有更新，qscamel 会报错并退出；若无同名任务，qscamel 会对任务内容的 sha256 校验和进行计算，并将结果保存于数据库中；若有同名任务，且任务文件没有更新，qscamel 将恢复该任务，继续执行。

换句话说，数据迁移任务在创建成功后就不能修改。若用户需修改一个任务内容，请先 [删除](#delete) 该任务后，再创建一个新任务，或直接创建一个新任务。创建后的任务，无论执行完成或执行失败，均不会自动从数据库中删除，须人为执行 [删除](#delete) 或 [Clean](#clean) 操作。

详细操作步骤如下：

1. 用户可执行如下命令行，查看 `run` 的使用教程：
```bash
qscamel run -h
```

**命令行回显：**
```bash
Create or resume a task

Usage:
  qscamel run [task name or task path] [flags]

Flags:
  -h, --help          help for run
  -t, --task string   task path

Global Flags:
  -c, --config string   config path (default "~/.qscamel/qscamel.yaml")
```

2. 用户如需创建一个新的数据迁移任务，可执行如下命令行：

```bash
qscamel run task-name -t /path/to/task/file
```
**说明：**
   - `task-name` 为新建数据迁移任务名，须唯一。
   - `-t` 参数用于指定任务文件。
   - `/path/to/task/file` 任务文件，可参考前文相关内容 [任务](#任务) 创建。


3. 在任务文件没有更新的前提下，若用户需要恢复一个数据迁移任务，可执行如下命令行：

```bash
qscamel run task-name
```

**说明：**
   - 由于该操作用于恢复一个历史任务，故 `task-name` 须为原任务名。
   - 由于任务文件没有更新，故命令行中省略了任务文件，qscamel 会自动调用历史任务文件。
   - 命令行中也可添加原任务文件 `-t /path/to/task/file`，若添加该参数，则须确保任务文件没有变更，否则该操作会报错。

4. 更新任务文件后，再次创建该任务时，可执行如下操作：
```bash
# step 1：删除任务
qscamel delete task-name

# step 2：创建任务
qscamel run task-name -t /path/to/task/file
```

### Delete

用户可使用该命令删除一个已经创建的任务。

```bash
qscamel delete task-name
```

### Status

该命令用于查询展示所有任务的状态。

```bash
qscamel status
```

### Clean

用户可通过该命令删除所有已经完成的任务。

```bash
qscamel clean
```

### Version

Version 命令用于查询当前 qscamel 的版本信息。

```bash
qscamel version
```


## 快速入门

1. [安装](#安装) qscamel 工具。

2. 更新 qscamel [配置](#配置)。

3. 根据如下内容创建任务文件，并保存为 `example-task.yaml`：
```yaml
type: copy

source:
  type: fs
  path: /path/to/source

destination:
  type: qingstor
  path: /path/to/destination
  options:
    bucket_name: example_bucket
    access_key_id: example_access_key_id
    secret_access_key: example_secret_access_key
```

**说明**
- 该任务即为：将本地目录 `/path/to/source` 下的文件 copy 至 QingStor 对象存储的 `example_bucket` 下的 `/path/to/destination` 目录。
- `access_key_id` 与 `secret_access_key` 可参考 [获取 Access Key](/storage/object-storage/api/practices/signature/#获取-access-key)。


4. 执行如下命令，创建数据迁移任务：

```bash
qscamel run example-task -t example-task.yaml -c /path/to/config/file
```

5. 执行如下命令，查看数据迁移任务的状态：

```bash
qscamel status
```

## 端点信息

### Endpoint aliyun

Aliyun 是 [阿里云](https://www.aliyun.com/product/oss) 提供的对象存储服务。可作为 qscamel 数据迁移任务中的 **source** 端点。

Aliyun 作为 **source** 端点时，须添加如下配置内容：

```yaml
options:
  endpoint: example_endpoint
  bucket_name: example_bucket
  access_key_id: example_access_key_id
  access_key_secret: example_access_key_secret
```

**说明**
- `endpoint` 用于标识访问的接口端点地址。无默认值，须手动配置。
- `bucket_name` 标识操作的 Aliyun 的 Bucket 名称。无默认值，须手动配置。
- `access_key_id` Aliyun 的 access_key_id。无默认值，须手动配置。
- `secret_access_key` Aliyun 的 secret_access_key。无默认值，须手动配置。


### Endpoint azblob

Azure Blob 是 [Microsoft](https://azure.microsoft.com/zh-cn/services/storage/) 提供的存储服务。可作为 qscamel 数据迁移任务中的 **source** 端点。

azblob 作为 **source** 端点时，须添加如下配置内容：

```yaml
options:
  account_name: example_account_name
  account_key: example_account_key
  bucket_name: example_bucket
  endpoint: example_endpoint
```

**说明**
- `account_name` 访问 Azure Blob 的账号。无默认值，须手动配置。
- `account_key` 访问 Azure Blob 的密码。无默认值，须手动配置。
- `bucket_name` 标识操作的 Azure Blob 的 Bucket 名称。无默认值，须手动配置。
- `endpoint` 用于标识访问的接口端点地址。无默认值，须手动配置。

### Endpoint cos

Tencent COS 是 [Tencent](https://cloud.tencent.com/product/cos) 提供的对象存储服务。可作为 qscamel 数据迁移任务中的 **source** 端点。

COS 作为 **source** 端点时，须添加如下配置内容：

```yaml
options:
  bucket_url: example_bucket_url
  secret_id: example_secret_id
  secret_key: example_secret_key
```

**说明**
- `bucket_url` Tencent COS 的 Bucket URL 地址。无默认值，须手动配置。
- `secret_id` 访问 Tencent COS 的 secret_id。无默认值，须手动配置。
- `secret_key` 访问 Tencent COS 的 secret_key。无默认值，须手动配置。


### Endpoint fs

fs 是指符合 POSIX 标准的文件系统 (local fs, nfs, s3fs 等)。可作为 qscamel 数据迁移任务中的 **source** 端点与 **destination** 端点。

fs 作为端点有着如下配置内容，用于控制遇到软连接时，是否上传指向的文件。默认值为 false:

```yaml
options:
  enable_link_follow: false
```

### Endpoint filelist

filelist 是本地文件列表。可作为 qscamel 数据迁移任务中的 **source** 端点。

filelist 作为 **source** 端点时，须添加如下配置项，用于指定待迁移的文件列表，qscamel 将会逐行来读取该列表。

```yaml
options:
  list_path: /path/to/list
```

### Endpoint gcs

GCS(Google Cloud Storage) 是 [Google](https://cloud.google.com/storage/) 提供的对象存储服务。可作为 qscamel 数据迁移任务中的 **source** 端点。

使用 gcs 作为 **source** 端点时，须添加如下配置项，

```yaml
options:
  api_key: example_api_key
  bucket_name: exmaple_bukcet
```

**说明**
- `api_key` 访问 GCS 的 api_key。无默认值，须手动配置。
- `bucket_name` GCS 的 bucket 名。无默认值，须手动配置。


### Endpoint hdfs

能够用做 **source** 端点。

hdfs 是 [Hadoop](http://hadoop.apache.org/) 的分布式文件系统，可作为 qscamel 数据迁移任务中的 **source** 端点。

使用 hdfs 作为 **source** 端点时，须添加如下配置项，

```yaml
options:
  address: example_address
```

### Endpoint qingstor

QingStor 是[青云](https://www.qingcloud.com/products/qingstor)提供的对象存储服务。能够用做 qscamel 数据迁移任务中的 **source** 与 **destination** 端点。

使用 qingstor 作为端点时，可添加如下配置内容:

```yaml
options:
  protocol: https
  host: qingstor.com
  port: 443
  zone: pek3b
  bucket_name: example_bucket
  access_key_id: example_access_key_id
  secret_access_key: example_secret_access_key
  storage_class: STANDARD
  multipart_boundary_size: 2147483648
```

**说明**
- `protocol` 用于控制访问 QingStor 对象存储的协议类型。可选值: https, http；默认值: https。
- `host` 标识访问 QingStor 对象存储的云服务器名。默认值: qingstor.com。
- `port` 标识访问 QingStor 对象存储的端口号。默认值: 443。
- `zone` 标识访问 QingStor 对象存储的区域.自动检测，无需手动配置。
- `bucket_name` 标识操作的 QingStor 对象存储的 Bucket 名称。无默认值，须手动配置。
- `access_key_id` QingStor 对象存储的 access_key_id。无默认值，须手动配置。
- `secret_access_key` QingStor 对象存储的 secret_access_key。无默认值，须手动配置。
- `storage_class` 标识 QingStor 对象存储所使用的存储级别。可选值: STANDARD, STANDARD_IA；默认值: STANDARD。
- `multipart_boundary_size` 用于控制 QingStor 对象存储何时使用分段上传，单位为 Byte，当文件大于该数值时，将会使用分段上传。可选值: 1 ~ 5368709120 (5G)。默认值: 2147483648 (2G)。
- 综上，除 `bucket_name`，`access_key_id` 与 `secret_access_key` 以外，均有默认值，故除此三个参数外，其他参数均为可选参数。


### Endpoint qiniu

Qiniu 是 [Qiniu](https://www.qiniu.com/) 提供的对象存储服务。可用作 qscamel 数据迁移任务中的 **source** 端点。

使用 qiniu 作为 **source** 端点，须添加如下配置内容:

```yaml
options:
  bucket_name: example_bucket
  access_key: example_access_key
  secret_key: example_secret_key
  domain: example_domain
  use_https: false
  use_cdn_domains: false
```

**说明**
- `bucket_name` 标识 qiniu 的 bucket 名称。
- `access_key` 标识 qiniu 的 access_key。
- `secret_key` 标识 qiniu 的 secret_key。
- `domain` 标识用于访问 qiniu bucket 的域名。
- `use_https` 控制是否使用 https 来访问 qiniu。默认值： false。
- `use_cdn_domains` 控制是否使用 CDN 加速域名来访问 qiniu。默认值： false。

### Endpoint s3

S3 是 [AWS](https://amazonaws-china.com/cn/s3) 提供的对象存储服务。可作为 qscamel 数据迁移任务中的 **source** 和 **destination** 端点。

使用 s3 作为端点，可添加如下配置内容:

```yaml
options:
  bucket_name: example_bucket
  endpoint: example_endpoint
  region: example_region
  access_key_id: example_access_key_id
  secret_access_key: example_secret_access_key
  disable_ssl: false
  use_accelerate: false
```

**说明**
- `bucket_name` S3 的 Bucket 名称。
- `endpoint` S3 的接口端点地址。
- `region` S3 bucket 所在的区域。
- `access_key_id` 访问 S3 的 access_key_id。
- `secret_access_key` 访问 S3 的 secret_access_key。
- `disable_ssl` 是否禁用 SSL。
- `use_accelerate` 是否启用加速。


### Endpoint upyun

upyun 是 [Upyun](https://www.upyun.com/) 提供的对象存储服务。可作为 qscamel 数据迁移任务中的 **source** 端点。

使用 upyun 作为 **source** 端点，须配置如下内容：

```yaml
options:
  bucket_name: example_bucket
  operator: example_operator
  password: example_password
```

**说明**
- `bucket_name` upyun 的 bucket 名称。
- `operator` upyun 的 operator。
- `password` upyun 的 password。
