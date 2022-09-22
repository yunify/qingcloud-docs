---
title: "参数介绍"
description: 本小节主要介绍 harbor 集群参数配置项。 
keyword: Harbor,镜像仓库,参数配置,修改参数
weight: 10
collapsible: false
draft: false
---

配置参数在部署集群时需要填写，成为集群配置项的变量。集群创建后，您也可以通过修改某些参数来更新您的集群配置。本文主要介绍集群配置参数的含义。

## 参数介绍

| <span style="display:inline-block;width:80px">参数</span> | <span style="display:inline-block;width:400px">参数说明</span> | 取值示例              |
| :-------------------------------------------------------- | :----------------------------------------------------------- | :-------------------- |
| Harbor 地址                                               | Harbor 服务地址，与负载均衡器前端 IP 地址及协议保持一致，用于访问 Harbor Web 界面，可以是 IP 地址或 Domain 域名。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><ul><li>后端端口非 80 端口时，地址需要加上端口号，如：https://192.168.2.2:8080。</li><li>地址不要以“/”结尾。</li></ul></div> | http://192.168.2.2    |
| Access_Key_ID                                             | 使用对象存储时需要配置，使用本地存储请忽略。<br/>云平台 API 密钥 ID，用于访问对象存储。 | ZBDSGXUL****GPOPXXD   |
| Secret_Access_Key                                         | 使用对象存储时需要配置，使用本地存储请忽略。<br/>云平台 API 密钥 Key，用于访问对象存储。 | ZT6GaWwgm****hELsQIru |
| 对象存储区（Region）                                      | 使用对象存储时需要配置，使用本地存储请忽略。<br/>对象存储空间的所在区域 ID。 | pek3a                 |
| 对象存储桶（Bucket）                                      | 使用对象存储时需要配置，使用本地存储请忽略。<br/>对象存储桶（Bucket）名称。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>仅支持在创建集群时设置，集群创建后无法修改。</div> | harbor                |
| 对象存储区 (ChunkSize)                                    | 使用对象存储时需要配置，使用本地存储请忽略。<br/>S3 标准存储，分段上传的片大小，更多信息参考 [StorageDriver配置](https://github.com/docker/docker.github.io/blob/master/registry/storage-drivers/s3.md)。<br/>默认值 67108864，可上传最大 12G 的镜像，值越大可上传的镜像越大。 | 67108864              |
| 存储根目录                                                | 使用对象存储时需要配置，使用本地存储请忽略。<br/>对象存储桶里用于存储镜像的根目录名称，默认为空，表示使用整个桶。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>仅支持在创建集群时设置，集群创建后无法修改。</div> | -                     |
| 对象存储 URL                                              | 使用对象存储时需要配置，使用本地存储请忽略。<br/>对象存储的 URL 地址，如`https://qingstor.com`，默认会自动转换成兼容 S3 的地址`qingstor.com`。 | https://qingstor.com  |
| 使用 S3 地址                                              | 使用对象存储时需要配置，使用本地存储请忽略。<br/>对象存储 URL 是否为 QingStor 兼容 S3 的地址。<ul><li>`true` 表示对象存储 URL 是兼容 S3 的地址，则不会把上面填的**对象存储 URL** 转换成 QingStor 兼容 S3 的地址。</li><li>`false` 表示对象存储 URL 不是 S3 兼容 URL， 格式为：`http(s)://your.domain`，后台会自动转换成兼容 S3 格式的 URL： `http(s)://s3.<region>.your.domain`。例如 “https://qingstor.com” 转换后为 “https://s3.gd2.qingstor.com”。</li></ul><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>如果使用的非青云部署的标准对象存储，请设置为`true`，直接使用上述填写的地址而非转换后的地址。</div> | false                 |
| 加载 trivy plugin                                         | 是否加载 trivy plugin 来支持漏洞扫描。<br/>默认为 `true` 表示开启加载，`false` 表示不开启。 | true                  |
| 开启文件查看器                                            | 是否允许通过浏览器查看或者下载日志等文件，默认为 `true` 表示开启（允许）。 | true                  |
| 文件查看器用户名                                          | 登录文件查看器的用户名。                                     | admin                 |
| 文件查看器密码                                            | 登录文件查看器的密码。                                       | admin@123             |

