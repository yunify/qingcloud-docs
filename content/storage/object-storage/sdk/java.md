---
title: "Java SDK"
---


QingStor 对象存储的 Java SDK 已在 GitHub 开源，本文为简要使用文档。更多详细信息请参见 [GitHub 项目](https://github.com/yunify/qingstor-sdk-java) 和 [Java SDK API 文档](https://github.com/qingstor/qingstor-sdk-java/blob/master/README_zh-CN.md)。

Java SDK 使用 [Snips](https://github.com/yunify/snips) 工具生成，各接口调用的均与 QingStor 对象存储的 API 相对应。其返回码、请求头、错误码等规定请参照具体的 [Qingstor Restful API 文档](/storage/object-storage/api/)。

SDK 示例请参见 [SDK Example](https://github.com/qingstor/qingstor-sdk-java/blob/master/docs/examples_zh-CN.md)。

使用 SDK 之前请先在 [管理控制台](https://console.qingcloud.com/access_keys/) 申请 Access key。

## 安装

1. 可以直接访问 GitHub 的 [Release 页面](https://github.com/qingstor/qingstor-sdk-java/releases) 下载压缩包，也可以执行如下命令行下载源码:

```bash
> git clone git@github.com:qingstor/qingstor-sdk-java.git
```

2. 在 gradle/maven 中将版本替换为您需要的版本，QingStor 对象存储推荐使用最新的版本。

Gradle:

```gradle
dependencies {
  implementation 'com.yunify:qingstor.sdk.java:2.5.1'
}
```

Maven:

```xml
<dependency>
  <groupId>com.yunify</groupId>
  <artifactId>qingstor.sdk.java</artifactId>
  <version>2.5.1</version>
</dependency>
```

## 初始化服务

发起请求前需要初始化服务。以下代码初始化了一个 QingStor Service。

```java
import com.qingstor.sdk.config.EnvContext;
import com.qingstor.sdk.service.*;

EvnContext env = new EnvContext("ACCESS_KEY_ID", "SECRET_ACCESS_KEY");
QingStor stor = new QingStor(env);
```

**说明：**
- 代码行中的 `env` 承载了用户的认证信息及 SDK 配置；
- 代码行中的 `stor` 用于操作 QingStor 对象存储服务，如调用 Service 级别的 API 或创建指定的 Bucket 对象来调用 Bucket 和 Object 级别的 API。

## 代码示例

### 获取账户下的 Bucket 列表

```java
ListBucketsOutput listOutput = stor.listBuckets(null);
```

### 创建 Bucket

初始化并创建 Bucket，需要指定 Bucket 名称和所在 Zone:

```java
// 您要在哪个 zone 创建/操作 bucket.
String zoneName = "pek3b";
Bucket bucket = stor.getBucket("您的 bucket 名字", zoneName);
Bucket.PutBucketOutput output = bucket.put();
if (output.getStatueCode() == 201) {
    // Created
    System.out.println("Put Bucket: Created.");
}
```


### 获取 Bucket 中存储的 Object 列表

```java
Bucket.ListjavaObjectsOutput listObjectsOutput = Bucket.listObjects(null);
List<KeyModel> objectKeys = listObjectsOutput.getKeys();
```

### 创建一个 Object


```java
String objKey = "object_name";
Bucket.PutObjectInput input = new Bucket.PutObjectInput();
// input 可以设置 File, Stream 等作为要上传的内容.
File f = new File("test_file.txt");
input.setBodyInputFile(f);
// 可选设置.
input.setContentType("text/plain");
input.setContentLength(f.length());
Bucket.PutObjectOutput putObjectOutput = bucket.putObject(objKey, input);
```

### 删除一个 Object

```java
Bucket.DeleteObjectOutput deleteObjectOutput = bucket.deleteObject("test_file");
```

### 本地时间和网络时间不同步
如果用户本地时间与网络时间不同步会因签名原因造成请求失败。用户还需要从服务端获取网络时间。

1. 获取服务端时间：

```java
Calendar instance = Calendar.getInstance(TimeZone.getTimeZone("Asia/Beijing"));
String gmtTime = QSSignatureUtil.formatGmtDate(instance.getTime());
return gmtTime;
```

2. 将获取到的服务端时间设置到 SDK 中：

```java
reqHandler.getBuilder().setHeader(QSConstant.HEADER_PARAM_KEY_DATE, gmtTime);
reqHandler.sendAsync();
```

### 使用服务端签名


以上传文件为例：

```java
public static void javaSdkSendDemo() {
    try {
        //引入jar包后先把相关导入按照IDE提示一一导入
        //创建EvnContext
        EnvContext env = new EnvContext("your_access_key", "your_secret_key");

        //你的bucket所在的zone,比如pek3a
        String zoneName = "pek3a";

        //bucket名称，如果没有创建先从控制台或者api创建bucket
        String bucketName = "demo_bucket";
        Bucket bucket = new Bucket(env, zoneName, bucketName);

        //最终上传到对象存储的文件显示的文件名称
        String objectKey = "myfile";
        Bucket.PutObjectInput input = new Bucket.PutObjectInput();

        //要上传的本地文件的路径
        File f = new File("/your_file_path.txt");
        input.setBodyInputFile(f);
        input.setContentLength(f.length());
        RequestHandler reqHandler = bucket.putObjectAsyncRequest(objectKey, input,
                new ResponseCallBack<Bucket.PutObjectOutput>() {
                    public void onAPIResponse(Bucket.PutObjectOutput output) {
                        if (output.getStatueCode() != 201) {
                            System.out.println("Message = " + output.getMessage());
                            System.out.println("RequestId = " + output.getRequestId());
                            System.out.println("Code = " + output.getCode());
                            System.out.println("StatueCode = " + output.getStatueCode());
                            System.out.println("Url = " + output.getUrl());
                        }
                        System.exit(0);
                    }
                });
        Calendar instance = Calendar.getInstance(TimeZone.getTimeZone("Asia/Shanghai"));
        String gmtTime = QSSignatureUtil.formatGmtDate(instance.getTime());

        //验证需要这个Date header
        reqHandler.getBuilder().setHeader(QSConstant.HEADER_PARAM_KEY_DATE, gmtTime);
        String strToSignature = reqHandler.getStringToSignature();
        String serverAuthorization = QSSignatureUtil.generateSignature(env.getAccessSecret(),
                strToSignature);
        reqHandler.setSignature(env.getAccessKey(), serverAuthorization);
        //异步发送
        reqHandler.sendAsync();

    }catch (QSException e) {
        e.printStackTrace();
    }
}
```


