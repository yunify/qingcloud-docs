---
title: "自定义监控上报数据规范"
description: test
draft: false
---

目前上报自定义监控数据通过cloudsat api接口上报，需遵循自定义监控上报数据规范。

### **通过 cloudsat api接口上报**

用户可以通过cloudsat接口上报自定义的数据，然后进行监控数据分析和告警


### 字段说明 

<style>
table th:first-of-type {
    width: 3cm;
}
table th:nth-of-type(2) {
    width: 150pt;
}
table th:nth-of-type(3) {
    width: 8em;
}
</style>
|字段	|类型	|举例| 必填 | 说明|
| :-: | :-: | :-: | :-: | :-:|
|namespace|	string	|namespace-1|	是|	命名空间|
|region	|string|	pek3|	是	|region id|
|source|	string|	custom|	是|	监控数据的来源|
|group_id|	string|	group_1|	否|	监控数据的group，或者分组标记|
|resource_id|	string|	i-12345678|	是|	监控数据关联的资源id|
|resource_name|	string|	roger-test|	否|	监控数据关联的资源名称|
|resource_type|	string|	instance|	是|	资源类型|
|user_id|	string|	usr-123456|	是|	监控资源资源对应用户的id|
|root_user_id|	string|	usr-123456|	否|	主账户id|
|meter|	string|	cpu|	是|	监控指标|
|value_type|	string|	raw|	是|	指标值的类型，例如raw(原格式)percent(百分比)|
|value|	int|	80|	是|	监控的数据，整型的数据|
|time_stamp	|string|	2019-12-16T11:14:32Z|	是|	监控数据时间(UTC)|
|tags|	string|	role=master,cln-node=node-1,interface=eth0|	否|	数据的tags，用于归类,都是key，value的形式，用于like查询，理论上存储的key都是按层级往后排，比如资源的下一级是role，role的下一级是节点，节点下有网卡。|


### 上报接口

post接口url示例：

```
http://clousatserver:8052/api/:zone/v1/custom/UploadMonitorData?access_key_id=QEJMCFROGCAPHUOAJMRN&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-10-13T10%3A28%3A33Z&version=1&zone=test&signature=SO9ZufFb69Om21bK%2BH7Gs6f%2FuuDljHh41STgIX%3D
```

注：url里面:zone，请根据具体分区信息填写，如北京3区pek3，其他地方类似；clousatserver 为对应分区clousatserver服务地址或域名，请根据实际替换

```
http://clousatserver:8052/api/pek3/v1/custom/UploadMonitorData?access_key_id=QEJMCFROGCAPHUOAJMRN&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-10-13T10%3A28%3A33Z&version=1&zone=test&signature=SO9ZufFb69Om21bK%2BH7Gs6f%2FuuDljHh41STgIX%3D
```

**UploadMonitorData接口数据规范**

由于/api/:zone/v1/custom/UploadMonitorData接口上传监控数据需要对请求进行验证，这里采用类似[青云API 请求中签名 ( signature )](https://docs.qingcloud.com/product/api/common/signature) 的生成方法，构造验证请求串，拼接在相应请求API中如

**请求api** http://xxx.xxx.xxx/api/:zone/v1/custom/UploadMonitorData

**构造验证请求串**：构造验证请求串方法详见下面说明
```
access_key_id=QEJMCFROGCAPHUOAJMRN&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-10-13T10%3A28%3A33Z&version=1&zone=test&signature=SO9ZufFb69Om21bK%2BH7Gs6f%2FuuDljHh41STgIX%3D

```
**则最终请求url为**：请求api + "?" + 构造验证请求串
```
http://xxx.xxx.xxx/api/:zone/v1/custom/UploadMonitorData?access_key_id=QEJMCFROGCAPHUOAJMRN&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-10-13T10%3A28%3A33Z&version=1&zone=test&signature=SO9ZufFb69Om21bK%2BH7Gs6f%2FuuDljHh41STgIX%3D

```
**UploadMonitorData接口数据规范**

**描述**：上传监控数据

**请求类型**：POST

**请求url**：
```
http://xxx.xxx.xxx/api/:zone/v1/custom/UploadMonitorData?access_key_id=QEJMCFROGCAPHUOAJMRN&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-10-13T10%3A28%3A33Z&version=1&zone=test&signature=SO9ZufFb69Om21bK%2BH7Gs6f%2FuuDljHh41STgIX%3D

```

请求body格式例如：
```
{
    "user_id": "usr-123456",
    "namespace": "namespace-1",
    "data": [
      {
          "source": "test",
          "user_id": "usr-KJ8DrfQT",
          "tags": "role=master,interface=eth10",
          "group_id": "group10",
          "resource_id": "i-instance-10" ,
          "resource_name": "name10",
          "resource_type": "instance",
          "root_user_id": "usr-KJ8DrfQ",
          "meter": "disk_ri'",
          "region": "test",
          "value": 99,
          "value_type": "percent",
           "time_stamp":"2020-11-03T09:58:44Z"
         },{
          "source": "test",
          "user_id": "usr-KJ8DrfQT",
          "tags": "role=master,interface=eth10",
          "group_id": "group10" ,
          "resource_id": "i-instance-10",
          "resource_name": "name10" ,
          "resource_type": "instance",
          "root_user_id": "usr-KJ8DrfQ",
           "meter": "diskio",
          "region": "test",
          "value": 88,
          "value_type": "percent",
          "time_stamp":"2020-11-03T09:58:44Z"
         }
  ]
}
```

返回结果

```
{
    "data": {
        "upload_count": 2
    },
    "ret_code": 0
}
```

数据格式例如：
```
{
    "user_id": "usr-12345678",
    "namespace": "ns1",
    "data": [
     {
        "region": "pek3",
        "source": "custom",
        "user_id": "testuser",
        "group_id": "group_1",
        "resource_id": "resource_id1",
        "resource_name": "resource_name2",
        "resource_type": "instance",
        "root_user_id": "root_user",
        "meter": "cpu",
        "value": "100",
        "value_type": "raw",
        "tags":"role=master,interface=eth0",
        "time_stamp": "2019-12-16T11:14:32Z"
    },
    {
        "region": "pek3",
        "source": "custom",
        "user_id": "testuser",
        "group_id": "group_2",
        "resource_id": "resource_id1",
        "resource_name": "resource_name2",
        "resource_type": "instance",
        "root_user_id": "root_user",
        "meter": "memory",
        "value": "90",
        "value_type": "raw",
        "tags":"role=master,interface=eth0",
        "time_stamp": "2019-12-16T11:14:32Z"
    }
  ]
}
```

###**构造请求串方法**

您需要先在控制台创建 API密钥 ，获得 accesss_key_id 和 secret_access_key，这里我们假设

```

access_key_id = 'QYACCESSKEYIDEXAMPLE'
secret_access_key = 'SECRETACCESSKEY'
```

例如我们的请求参数如下:
```
{
  "count":1,
  "vxnets.1":"vxnet-0",
  "zone":"pek3a",
  "instance_type":"small_b",
  "signature_version":1,
  "signature_method":"HmacSHA256",
  "instance_name":"demo",
  "image_id":"centos64x86a",
  "login_mode":"passwd",
  "login_passwd":"QingCloud20130712",
  "version":1,
  "access_key_id":"QYACCESSKEYIDEXAMPLE",
  "action":"RunInstances",
  "time_stamp":"2013-08-27T14:30:10Z"
}
```
注解

你可以使用上述的 AccessKey 和 Request 调试你的代码， 当得到跟后面一致的签名结果后(即表示你的代码是正确的)， 可再换为你自己的 AccessKey 和其他 API 请求。

签名步骤

(1) **按参数名进行升序排列**

排序后的参数为:
```
{
  "access_key_id":"QYACCESSKEYIDEXAMPLE",
  "action":"RunInstances",
  "count":1,
  "image_id":"centos64x86a",
  "instance_name":"demo",
  "instance_type":"small_b",
  "login_mode":"passwd",
  "login_passwd":"QingCloud20130712",
  "signature_method":"HmacSHA256",
  "signature_version":1,
  "time_stamp":"2013-08-27T14:30:10Z",
  "version":1,
  "vxnets.1":"vxnet-0",
  "zone":"pek3a"
}
```
(2) **对参数名称和参数值进行URL编码**

编码后的请求串为:

```
{
  "access_key_id":"QYACCESSKEYIDEXAMPLE",
  "action":"RunInstances",
  "count":1,
  "image_id":"centos64x86a",
  "instance_name":"demo",
  "instance_type":"small_b",
  "login_mode":"passwd",
  "login_passwd":"QingCloud20130712",
  "signature_method":"HmacSHA256",
  "signature_version":1,
  "time_stamp":"2013-08-27T14%3A30%3A10Z",
  "version":1,
  "vxnets.1":"vxnet-0",
  "zone":"pek3a"
}
```
警告
编码时空格要转换成 “%20” , 而不是 “+”警告

警告

转码部分的字符要用大写，如 ”:” 应转成 “%3A”，而不是 “%3a”

(3) **构造URL请求**

参数名和参数值之间用 “=” 号连接，参数和参数之间用 “＆” 号连接，构造后的URL请求为
```
access_key_id=QYACCESSKEYIDEXAMPLE&action=RunInstances&count=1&image_id=centos64x86a&instance_name=demo&instance_type=small_b&login_mode=passwd&login_passwd=QingCloud20130712&signature_method=HmacSHA256&signature_version=1&time_stamp=2013-08-27T14%3A30%3A10Z&version=1&vxnets.1=vxnet-0&zone=pek3a

```
(4) **构造被签名串**

被签名串的构造规则为: 被签名串 = HTTP请求方式 + “\n” + uri + “\n” + url 请求串

警告

“\n” 是换行符，不要将 “\” 转义。也就是说，不要用 “\n” ，有些语言，比如 php 和 ruby ，请用 “\n” , 而不是 ‘\n’

假设 HTTP 请求方法为 GET 请求的uri路径为 “/iaas/” , 则被签名串为
```
GET\n/iaas/\naccess_key_id=QYACCESSKEYIDEXAMPLE&action=RunInstances&count=1&image_id=centos64x86a&instance_name=demo&instance_type=small_b&login_mode=passwd&login_passwd=QingCloud20130712&signature_method=HmacSHA256&signature_version=1&time_stamp=2013-08-27T14%3A30%3A10Z&version=1&vxnets.1=vxnet-0&zone=pek3a

```

(5) **计算签名**

计算被签名串的签名 signature。

将API密钥的私钥 ( secret_access_key ) 作为key，生成被签名串的 HMAC-SHA256 或者 HMAC-SHA1 签名，更多信息可参见 RFC2104
将签名进行 Base64 编码
将 Base64 编码后的结果进行 URL 编码

警告

当 Base64 编码后存在空格时，不要对空格进行 URL 编码，而要直接将空格转为 “+”
以 Python (版本 2.7) 代码为例 (其他语言类似，需要使用 sha256 + base64 编码，最后需要再进行 URL 编码，URL 编码时需要将原有的空格 ” ” 转为 “+”)

```
import base64
import hmac
import urllib
from hashlib import sha256
  
  
# 前面生成的被签名串
string_to_sign = 'GET\n/iaas/\naccess_key_id=QYACCESSKEYIDEXAMPLE&action=RunInstances&count=1&image_id=centos64x86a&instance_name=demo&instance_type=small_b&login_mode=passwd&login_passwd=QingCloud20130712&signature_method=HmacSHA256&signature_version=1&time_stamp=2013-08-27T14%3A30%3A10Z&version=1&vxnets.1=vxnet-0&zone=pek3a'
h = hmac.new(secret_access_key, digestmod=sha256)
h.update(string_to_sign)
sign = base64.b64encode(h.digest()).strip()
signature = urllib.quote_plus(sign)
```

(6) **添加签名**

将签名参数附在原有请求串的最后面。 最终的HTTP请求串为(为了查看方便，我们人为地将参数之间用回车分隔开)

```
access_key_id=QYACCESSKEYIDEXAMPLE
&action=RunInstances
&count=1
&image_id=centos64x86a
&instance_name=demo
&instance_type=small_b
&login_mode=passwd
&login_passwd=QingCloud20130712
&signature_method=HmacSHA256
&signature_version=1
&time_stamp=2013-08-27T14%3A30%3A10Z
&version=1
&vxnets.1=vxnet-0
&zone=pek3a
&signature=byjccvWIvAftaq%2BoublemagH3bYAlDWxxLFAzAsyslw%3D
```

完整的请求串为(为了查看方便，我们人为地将参数之间用回车分隔开)

```
access_key_id=QYACCESSKEYIDEXAMPLE
&action=RunInstances
&count=1
&image_id=centos64x86a
&instance_name=demo
&instance_type=small_b
&login_mode=passwd
&login_passwd=QingCloud20130712
&signature_method=HmacSHA256
&signature_version=1
&time_stamp=2013-08-27T14%3A30%3A10Z
&version=1
&vxnets.1=vxnet-0
&zone=pek3a
&signature=byjccvWIvAftaq%2BoublemagH3bYAlDWxxLFAzAsyslw%3D
```

