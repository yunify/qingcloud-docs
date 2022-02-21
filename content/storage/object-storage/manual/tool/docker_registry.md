---
title: "Docker Registry 后端对接 S3 存储"
date: 2021-08-12T10:08:56+09:00
description: 本小节主要介绍 Docker Registry 相关内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
draft: false
collapsible: false
weight: 18
---

## 概述

官方的 Docker hub 是一个用于管理公共镜像的地方，用户可以从这里获取相应的镜像，也可以将自己的镜像推送上去。当用户的使用场景需要拥有一个私有的镜像仓库用于管理自己的镜像。这个时候，可以通过开源软件 Registry 来达成目的。

Docker Registry 是一个无状态，高度可扩展的服务器端应用程序，它存储并允许用户分发 Docker 映像。

## 环境搭建

用户在客户端服务器上，参考如下步骤可完成 Docker Registry 环境的搭建。详细操作步骤如下：

1. CentOS 可执行如下命令，使用官方安装脚本自动安装 `docker`：

```bash
# curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
**备注：** 也可使用国内 `daocloud` 一键安装命令：`curl -sSL https://get.daocloud.io/docker | sh` 进行安装。

2. 启动 `docker`：

```bash
step 1: 启动 docket
# systemctl start docker

step 2: 查看 docker 是否安装成功
# docker version

step 3: 测试
# docker run hello-world
```
**备注：** 输出 `Hello from Docker!` 即为正常。



3. 执行如下命令行，安装 `docker-compose`
```bash
# curl -L https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```

4. 修改 `docker-compose` 的权限
```bash
# chmod +x /usr/local/bin/docker-compose
```

5. 新建工作目录 `my_registry` 并进入该目录：
```bash
# mkdir my_registry && cd my_registry
```
   **说明：** 用户可根据实际情况，修改相应参数，创建工作目录。

6. 在工作目录 `my_registry` 下创建配置文件 `docker-compose.yml`，内容如下：
```bash
# vi docker-compose.yml
registry:
  restart: always
  image: "registry:2"
  ports:
    - 127.0.0.1:5000:5000
  volumes:
    - ./auth:/auth
 
  environment:
    - REGISTRY_STORAGE=s3
    - REGISTRY_STORAGE_S3_ACCESSKEY=YOUR_ACCESSKEY
    - REGISTRY_STORAGE_S3_SECRETKEY=YOUR_SECRETKEY 
    - REGISTRY_STORAGE_S3_BUCKET=YOUR_BUCKET_NAME  
    - REGISTRY_STORAGE_S3_REGION=YOUR_REGION_NAME   //pek3b
    - REGISTRY_STORAGE_S3_REGIONENDPOINT=s3.YOUR_REGION_NAME.qingstor.com    //example:s3.pek3b.qingstor.com
    - REGISTRY_STORAGE_S3_chunksize=67108864
```
   **说明：**
   - `REGISTRY_STORAGE_S3_ACCESSKEY` 填写用户的 access_key。
   - `REGISTRY_STORAGE_S3_SECRETKEY` 填写用户的 secret_key。
   - `REGISTRY_STORAGE_S3_BUCKET` 填写用户的 Bucket 名。
   - `REGISTRY_STORAGE_S3_REGION` 填写 Bucket 所在的 Zone ID。可参考[QingStor 对象存储 Zone 列表](/storage/object-storage/intro/object-storage/#zone)。
   - `REGISTRY_STORAGE_S3_REGIONENDPOINT` 填写 Bucket 域名。根据示例填写。
   - `REGISTRY_STORAGE_S3_chunksize` 建议尽量往大设置，以避免上传分段数为 200 的超大镜像失败。如设置为 67108864，即 64M，则可以成功上传 12G 以内文件。

7. 启动 `registry` 服务：

```bash
# docker-compose up -d
```

## 环境验证

Docker Registry 环境搭建完成后，用户可对该环境进行测试验证，以确认能正常上传镜像。

1. 创建新镜像

```bash
step 1: 创建一个 1G 的文件
# dd if=/dev/urandom of=test count=1024 bs=1M

step 2: 编写 Dockerfile
# vim Dockerfile
FROM centos:7
ADD test test
CMD /bin/bash

step 3: 创建镜像
# docker build -t 1g
# docker tag 1g 127.0.0.1:5000/1g
```

2. 执行如下命令，上传该镜像

```bash
# docker push 127.0.0.1:5000/1g
```

## 常见问题

### 不断重传

**问题描述：**

当上传大镜像时，会出现不断重传的现象。Console 界面显示结果如下：

![](/storage/object-storage/_images/docker_registry_1.png)

**原因分析：**

Registry 默认分段大小为 10M，当发现最后一段大小异常时，终端显示如下内容：

![](/storage/object-storage/_images/docker_registry_2.png)

查看相关日志信息，错误日志如下所示：

![](/storage/object-storage/_images/docker_registry_3.png)

由上可知，当前错误信息如下：

```bash
upload resumed at wrong offest: 1048576000 != 1074069675
```

当分段数大于 200 均会发生上传失败，报 `upload resumed at wrong offest: 2157152000 != 2175259408`。

**解决方法：**

修改配置文件 `docker-compose.yml` 中如下字段内容，尽量往大了设置，使得上传分段数在 200 以内的超大镜像能成功上传：

```bash
    - REGISTRY_STORAGE_S3_chunksize=67108864
```

**说明：**
- 设置为：33554432，即 32M，可以成功上传大小为 6G 以内的文件。
- 设置为：67108864，即 64M，可以成功上传大小为 12G 以内文件。
- 根据带宽尽量填写较大的值。