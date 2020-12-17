---
title: "签名验证"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 1
---

# 签名验证

## 概述

对象存储具备多种访问方式，根据场景的不同，我们提供了相应的方案来进行请求的身份认证。
由于实现签名需要考虑的细节较多（语言编码、特殊字符处理、新 API 的支持等），所以建议开发者直接使用我们提供的 SDK 或客户端工具，减少开发和维护工作。
如果您的 Bucket 设为私有权限，需要通过请求进行签名；如果您的 Bucket 已经配置为公开只读或公开读写权限，不需要对请求进行签名。

* **请求头签名**

适用于大部分的场景，如运行在服务器端的应用程序向对象程序发起访问请求。应用程序需要配置 access key。
为了防止签名请求被恶意用户拦截重放，保证用户数据安全，所以我们设置了
15分钟之后签名串失效的机制。所以您需要将系统时间需要通过 NTP 校准到网络时间。
如果您是运行在青云 IAAS 平台上的虚拟机，系统会自动同步标准时间。

* **请求参数签名**

请求参数签名支持所有类型的 API 请求, 适合在客户端无法设置请求头时使用。

其中典型的场景包括：由服务端程序调用 SDK 生成带一定过期时间的参数签名的URL, 显示在网页上作为下载链接。

* **表单签名**

适用于浏览器直接通过 HTML 表单方式 上传小文件。请参考 [Post Object API](../object/post/)

* **签名服务**

由于移动端应用的特点，将 access key 随 APP 分发会带来安全问题。所以我们提供了签名服务解决方案，具体请参考 [移动 App 接入方案](../../beat-practices/app_integration/)。

移动客户端每次上传下载文件之前，由服务端验证了用户身份之后，签名服务根据特定的 Qingstor API 调用参数，生成头签名或参数签名，返回给客户端；
客户端使用该签名来直接跟Qingstor进行交互。
[Javascript SDK](../../sdk/javascript/) (适用于Ajax类型的应用)、[Java SDK](../../sdk/java/) (适用 Android 平台) 均支持构造 API 请求时应用服务端计算的签名串。

由于移动客户端经常会遇到系统时间不准确的问题，并且签名计算结果跟时间密切相关，需要签名服务在计算签名时把所用的标准时间一并返回给客户端，设置正确的 `Date` header。


## 获取 Access Key

对象存储通过使用对称加密的方法来验证请求者的身份。如果用户以个人身份请求对象存储服务，首先需要拥有一对密钥 (Access key)，密钥包括 `Access Key ID` 和 `Secret Access Key` ，其中 Secret Access Key 在签名的过程中需要用到。

> 得到密钥的用户，可以以密钥拥有者的身份访问 QingStor，所以密钥中的 Secret Access Key 部分需要对外保密
>
> 申请 Access Key 请在 QingCloud 控制台左侧导航栏，依次找到 GLOBAL -> API 密钥 -> 创建

## 请求头签名

### 构建签名串

签名串 (String To Sign) 的总体构成有如下几个部分：

```plain_text
string_to_sign = Verb + "\n"
              + Content-MD5 + "\n"
              + Content-Type + "\n"
              + Date + "\n"
              (+ Canonicalized Headers + "\n")
              + Canonicalized Resource
```

- Verb 是 HTTP Method，包括 HEAD, GET, PUT, DELETE, OPTIONS
- Content-MD5 表示请求内容数据的 MD5 值，和请求头里的字段值保持一致，如果请求头没有这个参数，保留空白行
- Content-Type 表示请求内容的类型，和请求头里的字段值保持一致，如果请求头没有这个参数，保留空白行
- Date 表示此次请求的时间，需要符合 HTTP 规定的 GMT 格式
- Canonicalized Headers 代表请求头中以 x-qs- 开头的字段。如果该值为空，不保留空白行
- Canonicalized Resource 代表请求访问的资源

签名串示例 (注意每行结尾的 `\n` 并不真正以字符形式出现，仅代表一个回行符)：

```plain_text
PUT\n
4gJE4saaMU4BqNR0kLY+lw==\n
image/jpeg\n
Wed, 10 Dec 2014 17:20:31 GMT\n
/mybucket/%28%27this%20is%20test%27%2C%29
```

下面介绍签名串中 `Canonicalized Headers` 和 `Canonicalized Resource` 的拼接方法

### 构建 Canonicalized Headers

1. 将所有以 `x-qs-` (不区分大小写) 为前缀的 HTTP 请求头的名字转换成小写字母。例如 `X-QS-Date: Wed, 10 Dec 2014 17:20:31 GMT` 转换成 `x-qs-date: Wed, 10 Dec 2014 17:20:31 GMT`。如果某些请求头的值在发出的时候被 URL encode, 那么计算签名时也应当是 URL encode 之后的值。
1. 将上一步得到的所有 HTTP 请求头按照请求头名字部分的字典升序排列。
1. 删除请求头和内容之间分隔符两端出现的任何空格。例如 `x-qs-date: Wed, 10 Dec 2014 17:20:31 GMT` 转换成 `x-qs-date:Wed, 10 Dec 2014 17:20:31 GMT`
1. 将所有的头和内容用 `\n` 分隔符分隔拼成最后的 Canonicalized Headers 。

包含了 Canonicalized Headers 的签名串示例：

```plain_text
PUT\n
4gJE4saaMU4BqNR0kLY+lw==\n
image/jpeg\n
\n
x-qs-copy-source:/mybucket/%E4%B8%AD%E6%96%87\n
x-qs-copy-source-if-match:%22199389a12492266114933fc428e8cfdc%22\n
x-qs-date:Wed, 10 Dec 2014 17:20:31 GMT\n
/mybucket/%28%27this%20is%20test%27%2C%29
```

### 构建 Canonicalized Resource

1. 如果请求 URL 为 `Virtual-host 风格` 则设置初始字符串为 `/<bucket-name>` 。而如果 URL 为 `Path 风格` 则设置初始字符串为空
1. 在第1步得到的字符串后追加 URI path (与请求头中的请求 path 一致，即 URI 编码后的值)
1. 如果请求包括子资源，例如 acl 等，那么将所有的子资源按照字典序从小到大排列，以 & 拼接生成子资源字符串，并以 ? 开头追加到字符串结尾
1. 除了上述子资源以外，形如 `response-*` 的参数 (见 [GET Object](../object/get/#object-storage-api-get-object) 的文档) 也需要按照上述规则拼接到 Canonicalized Resource

> 全部的子资源包括：
>
> - acl
> - append
> - cors
> - cname
> - delete
> - image
> - logging
> - lifecycle
> - mirror
> - notification
> - policy
> - position
> - part_number
> - replication
> - stats
> - uploads
> - upload_id

经过上面步骤得到的 Canonicalized Resource，应该类似于：

- /mybucket/ (List Objects)
- /mybucket/photo.jpg (不含子资源的请求)
- /mybucket/movie.mov?uploads (包含子资源的请求)
- /mybucket/movie.mov?part_number=3&upload_id=dbb3d762975711e6b457525441715ab4 (包含多个子资源的请求)

无论 URL 为 `Virtual-host 风格` 或是 `Path 风格`，最终得到的签名字符串是一致的 。

## 计算签名 Signature

假设经过上面步骤得到的签名串为 `string_to_sign` ，接下来的步骤是对签名串进行签名

1. 将API密钥的私钥 (`secret_access_key`) 作为 key，使用 `Hmac sha256` 算法给签名串生成签名：

   ```python
   import hmac
   from hashlib import sha256

   h = hmac.new(secret_access_key, digestmod=sha256)
   h.update(string_to_sign)
   ```

1. 将签名进行 Base64 编码：

   ```python
   import base64

   signature = base64.b64encode(h.digest()).strip()
   ```

### 添加签名 Authorization

添加 HTTP 请求头:

```
Authorization: QS <access_key_id>:<signature>
```

请求头示例:

```
Authorization: QS PLLZOBTTZXGBNOWUFHZZ:tuXu/KcggHWPAfEmraUHDwEUdiIPSXVRsO+T2rxomBQ=
```

### 针对 JavaScript 客户端的特殊考虑


由于在浏览器环境中， ```Date``` 字段是被保护的不能设置，所以 JavaScript SDK 在签名时需要将 Date 头字段留空，并且设置 x-qs-date 头字段。
以下是一个 JavaScript 客户端的例子：

请求为

```
GET /
HOST: js-sdk-test.pek3a.qingstor.com
x-qs-date:  Fri, 04 May 2018 16:37:00 GMT
```

签名串 (string_to_sign) 为
```
GET\n
\n
application/octet-stream\n
\n
x-qs-date:Fri, 04 May 2018 16:37:00 GMT\n
/js-sdk-test\n
```

## 请求参数签名

在一些使用场景中可能不便于设置请求头，比如使用浏览器重定向请求，或者给其它用户分享下载链接。QingStor 允许使用请求参数签名的方法，替代请求头签名。

> 该方法需要设定请求过期时间 expires，QingStor 将拒绝处理超过该时间的请求

请求示例：

```
GET /music.mp3?access_key_id=PLLZOBTTZXGBNOWUFHZZ&expires=1479107162&signature=tuXu/KcggHWPAfEmraUHDwEUdiIPSXVRsO%2BT2rxomBQ%3D
Host: mybucket.pek3a.qingstor.com
Date: Mon, 14 Nov 2016 14:05:00 GMT
```

请求参数签名的方式不需要在 HTTP 请求头中附加任何内容，只需要在请求参数中添加以下三项必要参数：

| Parameter | Description | Example |
| --- | --- | --- |
| access_key_id | 在 QingCloud 控制台申请的 Access Key ID | PLLZOBTTZXGBNOWUFHZZ |
| expires | 签名过期时间，该时间为 Unix Time (也称为 Epoch Time), 表示方法是自历元(1970-01-01 00:00, The Epoch) 之后的秒数, 类型为整数。在过期时间之后到达的请求将被 QingStor 拒绝 | 1479107162 |
| signature | 对签名串 string_to_sign 经过 HMAC-SHA256 加密后，再使用 Base64 编码，最后使用 URI 编码后的结果 | tuXu/KcggHWPAfEmraUHDwEUdiIPSXVRsO%2BT2rxomBQ%3D |

相比于请求头签名方法，签名串 string_to_sign 的生成过程只有一点不同，即把 Date 替换为 Expires：

```plain_text
string_to_sign = Verb + "\n"
              + Content-MD5 + "\n"
              + Content-Type + "\n"
              + Expires + "\n"
              (+ Canonicalized Headers + "\n")
              + Canonicalized Resource
```

通过上述方法得到签名串 string_to_sign 以后计算 signature：

```python
import hmac
import base64
import urllib
from hashlib import sha256

h = hmac.new(secret_access_key, digestmod=sha256)
h.update(string_to_sign)
signature = urllib.quote(base64.b64encode(h.digest()).strip())
```

> signature 必须进行 URI 编码，比如加号(+)要被编码成 %2B

最后拼接成请求参数，追加到请求地址的后面：

```plain_text
access_key_id=PLLZOBTTZXGBNOWUFHZZ&expires=1479107162&signature=tuXu/KcggHWPAfEmraUHDwEUdiIPSXVRsO%2BT2rxomBQ%3D
```


