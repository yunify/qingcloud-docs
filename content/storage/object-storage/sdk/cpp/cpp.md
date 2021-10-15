---
title: "Cpp SDK 快速指南"
---


在开始使用 SDK 之前，请确认您已经了解 [QingStor 对象存储基本概念](/storage/object-storage/intro/object-storage/#基本概念)，如 Zone，Service，Bucket，Object 等。

使用 SDK 之前请先在 [管理控制台](https://console.qingcloud.com/access_keys/) 申请 access key 。

## 配置文件

在使用 SDK 之前，我们需要创建一个本地的配置文件。也可以在初始化 SDK 时通过调用 `load_config_from_filepath()` 方法来指定具体的配置文件路径。配置文件内可配置项如下所示:

```yaml
    access_key_id: 'ACCESS_KEY_ID_EXAMPLE'
    secret_access_key: 'SECRET_ACCESS_KEY_EXAMPLE'
    host: 'qingstor.com'
    port: 443
    protocol: 'https'
    connection_retries: 3
    timeOutPeriod: 3
```

## 代码片段

### 初始化 SDK

1. 在使用 SDK 之前，需要先初始化全局资源，同时通过一些全局配置参数，指定 SDK 相关的设置:

``` c
    // 由入参分别指定 SDK 输出日志的路径、日志级别、 SDK 的 init 过程和 shutdown 过程是否自动初始化和清理 curl 库的全局资源。
    // 其中，有效的日志级别为 None, Fatal, Error, Warning, Info, Debug, Verbose ，默认日志级别为 None ，即不输出日志。
    // 如果在程序中的另外的模块使用了 curl 库，QingStor SDK 自动初始化和清理 curl 库的全局资源，可能会引起这些模块功能产生异常。
    // 这种情况下如果你希望统一管理 curl 全局资源的初始化及清理工作，请将参数设置为 0 ,否则请设置成 1 .
    QingStor::SDKOptions sdkOptions;
    sdkOptions.logLevel = LogLevel::Verbose;
    sdkOptions.logPath = "/tmp/";
    sdkOptions.initAndCleanupCurl = true;

    QingStor::InitializeSDK(sdkOptions);
```

2. 调用 SDK 接口前，需要先指定访问的 Bucket 和 Zone 信息，创建访问句柄。QingStor 对象存储提供两种创建访问句柄的方式:

 **方式一：** 通过指定配置文件地址，来创建访问句柄。

``` c
    QingStor::QsConfig qsConfig;
    qsConfig.LoadConfigFile("/etc/qingstor/config.yaml");

    context->pQsService = new QingStorService(qsConfig);
    context->pQsBucket = new Bucket(qsConfig, "yourbucketname", "yourzone");
```

 **方式二：** 可以通过指定 config 结构，设置具体 config 参数，来创建访问句柄。

``` c
    QingStor::QsConfig qsConfig;

    // 你可以指定协议类型，请求重试的次数, 以及每次请求超时时间 等配置
    qsConfig.access_key_id = "ACCESS_KEY_ID";
    qsConfig.secret_access_key = "SECRET_ACCESS_KEY";
    qsConfig.protocol = "https";
    qsConfig.conn_retries = 3;
    qsConfig.timeout_period = 10;

    // 在私有云环境中,你可以指定实际配置的 host 地址 和服务端口
    // 访问 QingStor 公有云服务, 通常无需更改 host 地址 和服务端口.
    qsConfig.host = "api.private.com";
    qsConfig.port = 4433;

    context->pQsService = new QingStorService(qsConfig);
    context->pQsBucket = new Bucket(qsConfig, strBucketName, strZone);
```

### 获取账户下的 Bucket 列表

``` c
    ListBucketsInput input;
    ListBucketsOutput output;

    QsError err = qsBucket.ListObjects(input, output);
    if (QsError::QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());
    }

    if (QsError::QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 上传一个 Object

``` c
    PutObjectInput input;
    PutObjectOutput output;

    // object 的内容可以来自于文件 (filestream),可以来自于其他形式的 stream ，只需要保证其为 iostream 的子类.
    std::iostream * objectStream = new std::fstream("/tmp/Screenshot.jpg", std::ios::binary | std::ios::in);
    objectStream->seekg(0, objectStream->end);
    auto streamSize = objectStream->tellg();
    objectStream->seekg(0, objectStream->beg);
    input.SetBody(objectStream);
    input.SetContentLength(streamSize);

    QsError err = qsBucket.PutObject(objectKey, input, output);
    if (QsError::QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());
    }

    if (QsError::QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        ResponseErrorInfo  errorInfo = output.GetResponseErrInfo();
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }

    // 释放资源
    if(objectStream)
        delete objectStream;
```

### 列出 Bucket 中的 Objects

``` c
    ListObjectsInput input;
    ListObjectsOutput output;

    // 设置 response 中返回 object 的数量限制
    input.SetLimit(200);

    QsError err = qsBucket.ListObjects(input, output);
    if (QsError::QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        std::vector<KeyType> keys = output.GetKeys();
        printf("Got %d objects\n" ,keys.size());
    }

    if (QsError::QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        ResponseErrorInfo  errorInfo = output.GetResponseErrInfo();
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 删除一个 Object

``` c
    DeleteObjectInput input;
    DeleteObjectOutput output;

    QsError err = qsBucket.DeleteObject(objectkey, input, output);
    if (QsError::QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());
    }

    if (QsError::QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        ResponseErrorInfo  errorInfo = output.GetResponseErrInfo();
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 查看一个 Object 的状态

``` c
    HeadObjectInput input;
    HeadObjectOutput output;

    QsError err = qsBucket.HeadObject(objectkey, input, output);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        ResponseErrorInfo  errorInfo = output.GetResponseErrInfo();
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 初始化一个分段上传

``` c
    initiateMultipartUpload input;
    initiateMultipartUpload output;

    QsError err = qsBucket.InitiateMultipartUpload(objectkey, input, output);
    if (QsError::QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());

        // 获取 Upload ID , 假设此处为 "9d37dd6ccee643075ca4e597ad65655c"
        printf("The upload id is : %s",output.GetUploadID());
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 上传一个分段

``` c
    // 上传第1个分段
    UploadMultipartInput inputPart1;
    UploadMultipartOutput outputPart1;

    // object 的内容可以是任何形式的 stream，只需要保证其为 iostream 的子类, 分段最小为 4MB，每个分段最大为 5GB
    std::iostream* objectStream1 = new std::fstream(filePath1));
    objectStream1->seekg(0, objectStream1->end);
    size_t streamSize1 = objectStream1->tellg();
    objectStream1->seekg(0, objectStream1->beg);
    inputPart1.SetBody(objectStream1);
    inputPart1.SetContentLength(streamSize1);
    inputPart1.SetPartNumber(1);
    inputPart1.SetUploadID("9d37dd6ccee643075ca4e597ad65655c");
    QsError err1 = qsBucket.UploadMultipart(objectkey, inputPart1, outputPart1);
    if (QsError::QS_ERR_NO_ERROR == err1)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());
    }

    if (QsError::QS_ERR_UNEXCEPTED_RESPONSE == err1)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }

    // 释放资源
    if(objectStream1)
        delete objectStream1;

    // 上传第2个分段
    UploadMultipartInput inputPart2;
    UploadMultipartOutput outputPart2;

    // object 的内容可以是任何形式的 stream，只需要保证其为 iostream 的子类, 分段最小为 4MB，每个分段最大为 5GB
    std::iostream* objectStream2 = new std::fstream(filePath2));
    objectStream2->seekg(0, objectStream2->end);
    size_t streamSize2 = objectStream2->tellg();
    objectStream2->seekg(0, objectStream2->beg);
    inputPart2.SetBody(objectStream2);
    inputPart2.SetContentLength(streamSize2);
    inputPart2.SetPartNumber(2);
    inputPart2.SetUploadID("9d37dd6ccee643075ca4e597ad65655c");

    QsError err2 = qsBucket.UploadMultipart(objectkey, inputPart2, outputPart2);
    if (QsError::QS_ERR_NO_ERROR == err2)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());
    }

    if (QsError::QS_ERR_UNEXCEPTED_RESPONSE == err2)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }

    // 释放资源
    if(objectStream2)
        delete objectStream2;
```

### 列出已经上传的分段

``` c
    ListMultipartInput input;
    ListMultipartOutput output;

    input.SetUploadID("9d37dd6ccee643075ca4e597ad65655c");
    std::vector < ObjectPartType > objectParts;

    QsError err = qsBucket.ListMultipart (objectkey, input, output);
    if (QS_ERR_NO_ERROR == err)
    {
        objectParts = output.GetObjectParts();
        printf(Got "%d object parts\n",objectParts.size());
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 完成一个分段上传

``` c
    CompleteMultipartUploadInput input;
    CompleteMultipartUploadOutput output;

    // 设置确认完成合并的 part 列表
    std::vector<ObjectPartType> objectParts;
    ObjectPartType part1,part2;
    part1.SetPartNumber(1);
    part2.SetPartNumber(2);
    objectParts.push_back(part1);
    objectParts.push_back(part2);

    input.SetUploadID ("9d37dd6ccee643075ca4e597ad65655c");
    input.SetObjectParts(objectParts);

    QsError err = qsBucket.CompleteMultipartUpload (objectkey, input, output);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 取消一个分段上传

``` c
    AbortMultipartUploadInput input;
    AbortMultipartUploadOutput output;

    // 设置要取消的 Upload ID，对应的所有已上传分段会被删除
    input.SetUploadID("9d37dd6ccee643075ca4e597ad65655c");

    QsError err = qsBucket.abortMultipartUpload(objectkey, input, output);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 获取 Bucket 的访问控制列表

QingStor 对象存储支持 Bucket ACL，是 Bucket 级别的访问控制，用户可将 Bucket 的读、写、或读写权限开放给单个或多个青云 QingCloud 用户。下面我们将演示如何通过 API 接口来获取和设置 Bucket ACL。

``` c
    GetBucketACLInput input;
    GetBucketACLOutput output;

    QsError err = qsBucket.GetBucketACL(input, output);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        if (contextOutput->GetACL().size())
        {
            std::string granteeName = contextOutput->GetACL().at(1).GetGrantee().GetName();
            printf("The first ACL Grantee Name is : %s",granteeName.c_str());
        }
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 设置 Bucket 的访问控制列表

``` c
    PutBucketACLInput input;
    PutBucketACLOutput output;

    // 设置 ACL 列表
    std::vector<ACLType> aclList;
    ACLType acl;
    GranteeType grantee;
    grantee.SetType("group");
    grantee.SetName("QS_ALL_USERS");
    acl.SetGrantee(grantee);
    acl.SetPermission("FULL_CONTROL");
    aclList.push_back(acl);
    input.SetACL(aclList);

    QsError err = qsBucket.PutBucketACL(input, output);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("Got response code : %s",output.GetResponseCode());
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , errorInfo.requestID.c_str(), errorInfo.message.c_str());
    }
```

### 更多操作

所有的 API 调用接口均与上面的示例相似，用户可以查看 [QingStor 对象存储API 文档](/storage/object-storage/api/) 来了解更多信息。
