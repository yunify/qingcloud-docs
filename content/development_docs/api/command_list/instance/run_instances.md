---
title: "RunInstances"
description: 
draft: false
weight: 3
---

创建指定配置，指定数量的云服务器。

当你创建云服务器时，云服务器会先进入 pending 状态，直到创建完成后，变为 running 状态。 你可以使用 [_DescribeInstances_](../describe_instances/) 检查云服务器状态。

创建云服务器时，一旦参数 vxnets.n 包含基础网络（即： vxnet-0 ），则需要指定防火墙 security_group，如果没有指定，青云会自动使用缺省防火墙。

青云给云服务器定义了几种经典配置，可通过参数 instance_type 指定，配置列表请参考 [_Instance Types_](../../../common/instance_type/) 。 如果经典配置不能满足你的需求，可通过参数 cpu, memory 自定义云服务器配置。

如果参数中既指定 instance_type ，又指定了 cpu 和 memory ， 则以指定的 cpu 和 memory 为准。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| image_id | String | 镜像ID，此镜像将作为云服务器的模板。可传青云提供的镜像ID，或自己创建的镜像ID | Yes |
| instance_type | String | 云服务器类型，有效值请参考 [_Instance Types_](../../../common/instance_type/)<br/>如果使用弹性裸金属服务器, 该参数必填。<br/>如果请求中指定了 instance_type，cpu 和 memory 参数可略过。<br/>如果请求中没有 instance_type，则 cpu 和 memory 参数必须指定。<br/>如果请求参数中既有 instance_type，又有 cpu 和 memory，则以 cpu, memory 的值为准。 | No |
| cpu | Integer | CPU core，有效值为: 1, 2, 4, 8, 16 | No |
| memory | Integer | 内存，有效值为: 1024, 2048, 4096, 6144, 8192, 12288, 16384, 24576, 32768 | No |
| os_disk_size | Integer | 系统盘大小，单位GB。<br>Linux操作系统的有效值为：20-100，默认值为：20<br>Windows操作系统的有效值为：50-100，默认值为：50 | No |
| count | Integer | 创建云服务器的数量，默认是1<br/>注解<br/>当同时创建多台云服务器时，这些云服务器的基本信息和配置都是相同的 | No |
| instance_name | String | 云服务器名称 | No |
| login_mode | String | 指定登录方式。当为 linux 云服务器时，有效值为 keypair 和 passwd; 当为 windows 云服务器时，只能选用 passwd 登录方式。<br/>当登录方式为 keypair 时，需要指定 login_keypair 参数；<br/>当登录方式为 passwd 时，需要指定 login_passwd 参数。 | Yes |
| login_keypair | String | 登录密钥ID。 | No |
| login_passwd | String | 登录密码。 | No |
| vxnets.n | String | 云服务器要加入的私有网络ID，如果不传此参数，则表示不加入到任何网络。<br/>如果是自建的受管私有网络（不包括基础网络 vxnet-0 ），则可以在创建云服务器时指定内网IP， 这时参数值要改为 ``` vxnet-id|ip-address ``` ，如 ```vxnet-abcd123|192.168.1.2``` 。 | No |
| security_group | String | 云服务器加载的防火墙ID，只有在 vxnets.n 包含基础网络（即：vxnet-0）时才需要提供。 若未提供，则默认加载缺省防火墙 | No |
| volumes.n | String | 云服务器创建后自动加载的硬盘ID，如果传此参数，则参数 count 必须为1 。 | No |
| hostname | String | 可指定云服务器的 hostname 。 | No |
| need_newsid | Integer | 1: 生成新的SID，0: 不生成新的SID, 默认为0；只对Windows类型云服务器有效。 | No |
| instance_class | Integer | 云服务器性能类型: 性能型:0, 超高性能型:1, 基础型:101, 企业型:201 | No |
| cpu_model | String | CPU 指令集, 有效值: Westmere, SandyBridge, IvyBridge, Haswell, Broadwell | No |
| cpu_topology | String | CPU 拓扑结构: 插槽数, 核心数, 线程数; 插槽数 * 核心数 * 线程数 应等于您应选择的CPU数量。 | No |
| gpu | Integer | GPU 个数 | No |
| gpu_class | Integer | GPU 类型，有效值有 0 和 1 。0 对应的是 NVIDIA P100，1 对应的是 AMD S7150 | No |
| nic_mqueue | Integer | 网卡多对列: 关闭(默认)：0，开启：1 | No |
| need_userdata | Integer | 1: 使用 User Data 功能；0: 不使用 User Data 功能；默认为 0 。 | No |
| userdata_type | String | User Data 类型，有效值：’plain’, ‘exec’ 或 ‘tar’。为 ‘plain’或’exec’ 时，使用一个 Base64 编码后的字符串；为 ‘tar’ 时，使用一个压缩包（种类为 zip，tar，tgz，tbz）。 | No |
| userdata_value | String | User Data 值。当类型为 ‘plain’ 时，为字符串的 Base64 编码值，长度限制 4K；当类型为 ‘tar’，为调用 [_UploadUserDataAttachment_](../../userdata/upload_userdata_attachment/) 返回的 attachment_id。 | No |
| userdata_path | String | User Data 和 MetaData 生成文件的存放路径。不输入或输入不合法时，为默认目录 /etc/qingcloud/userdata | No |
| userdata_file | String | userdata_type 为 ‘exec’ 时，指定生成可执行文件的路径，默认为/etc/rc.local | No |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |
| dedicated_host_group_id | String | 虚机创建到指定的专属宿云服务器组中 | No |
| dedicated_host_id | String | 虚机创建到某专属宿云服务器组中指定的宿云服务器上 | No |
| instance_group | String | 虚机创建加入到指定的云服务器组中 | No |
| hypervisor | String | hypervisor 类型，当前支持 kvm 和 bm, 默认是 kvm | No |
| os_disk_encryption | Boolean | 创建加密云服务器 | No |
| cipher_alg | String | 加密使用的算法类型:<br/>目前仅支持 aes256，默认 aes256 | No |
| months | Integer | 如果购买合约模式的云服务器，需要传此参数，数值为购买的月份数。 | No |
| auto_renew | Integer | 如果购买合约模式的云服务器，可传此参数，数值为合约到期后自动续约的月份数。如果购买合约时不传此参数，合约到期则不会自动续约。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| instances | Array | 创建的云服务器ID列表 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=RunInstances
&vxnets.1=vxnet-0
&instance_type=small_a
&image_id=centos63x64
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"RunInstancesResponse",
  "instances":[
    "i-rtyv0968"
  ],
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
