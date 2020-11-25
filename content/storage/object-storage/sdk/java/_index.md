---
title: "Java SDK"
---

# Java SDK

QingStor Java SDK 已在 GitHub 开源，下文为简要使用文档。更多详细信息请参见 [GitHub 项目页面](https://github.com/yunify/qingstor-sdk-java)，
和[Java SDK API 文档](https://qingstor.github.io/qingstor-sdk-java/)。Java SDK 使用 [Snips](https://github.com/yunify/snips) 工具生成，
各个调用的均与具体的 [Qingstor Restful API](https://docs.qingcloud.com/qingstor/api/) 对应，
返回码、请求头、错误码等规定请参照具体 API 文档的描述。

SDK 示例请参见 [SDK Example](https://github.com/qingstor/qingstor-sdk-java/blob/master/docs/more-examples.md) 

## 安装

可以下载源码:

```bash
> git clone git@github.com:yunify/qingstor-sdk-java.git
```

也可以访问 GitHub 的 [release 页面](https://github.com/yunify/qingstor-sdk-java/releases) 下载压缩包

## 快速开始

使用 SDK 之前请先在 [青云控制台](https://console.qingcloud.com/access_keys/) 申请 access key 。

### 初始化服务

发起请求前首先建立需要初始化服务:

```java
import com.qingstor.sdk.config.EvnContext;
import com.qingstor.sdk.service.*;

EvnContext evn = new EvnContext("ACCESS_KEY_ID", "SECRET_ACCESS_KEY");
QingStor storService = new QingStor(evn);
```

上面代码初始化了一个 QingStor Service

### 获取账户下的 Bucket 列表

```java
ListBucketsOutput listOutput = storService.listBuckets(null);
```

### 创建 Bucket

初始化并创建 Bucket, 需要指定 Bucket 名称和所在 Zone:

```java
Bucket bucket = storService.getBucket("test-bucket", "pek3a");
Bucket.PutBucketOutput putBucketOutput = bucket.put();
```

### 获取 Bucket 中存储的 Object 列表

```java
Bucket.ListjavaObjectsOutput listObjectsOutput = Bucket.listObjects(null);
```

### 创建一个 Object

例如一个文件:

```java
Bucket.PutObjectInput input = new Bucket.PutObjectInput();
File f = new File("test_file");
input.setBodyInputFile(f);
input.setContentType("text/plain");
input.setContentLength((int) f.length());
Bucket.PutObjectOutput putObjectOutput = bucket.putObject(test_object, input);
```

### 删除一个 Object

```java
Bucket.DeleteObjectOutput deleteObjectOutput = bucket.deleteObject("test_file");
```

### 本地时间和网络时间不同步
如果用户本地时间与网络时间不同步会因签名原因造成请求失败。您还需要从服务端获取网络时间。

下面是一个关于**服务端**如何返回正确时间到客户端的示例。

```java
Calendar instance = Calendar.getInstance(TimeZone.getTimeZone("Asia/Beijing"));
String gmtTime = QSSignatureUtil.formatGmtDate(instance.getTime());
return gmtTime;
```

在您从服务端获取到正确时间后，您需要在调用 ``` reqHandler.sendAsync(); ``` 方法前将时间设置到 SDK 中。

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


