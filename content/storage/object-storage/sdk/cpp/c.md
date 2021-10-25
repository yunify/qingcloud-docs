---
title: "C SDK 快速指南"
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
    qs_init_sdk("/tmp/", LogLevel::Debug, 1);
```

2. 调用 SDK 接口前，需要先指定访问的 Bucket 和 Zone 信息，创建访问句柄。QingStor 对象存储提供两种创建访问句柄的方式:

 **方式一：** 通过指定配置文件地址，来创建访问句柄。

``` c
      qs_context_handle context_hdl;
      context_hdl = qs_create_service_with_configfile("/etc/qingstor/config.yaml", "yourbucketname", "yourzone");
```

 **方式二：** 可以通过指定 config 结构，设置具体 config 参数，来创建访问句柄。

``` c
      qs_config_t config;

      // 你可以指定协议类型，请求重试的次数, 以及每次请求超时时间等配置
      config.access_key_id = "ACCESS_KEY_ID";
      config.secret_access_key = "SECRET_ACCESS_KEY";
      config.protocol = "https";
      config.conn_retries = 3;
      config.timeout_period = 10;

      // 在私有云环境中,你可以指定实际配置的 host 地址和服务端口号
      // 访问 QingStor 公有云服务,您通常无需更改 host 地址和服务端口号.
      config.host = "api.private.com";
      config.port = 4433;

      qs_context_handle context_hdl = qs_create_service(config, "yourbucketname", "yourzone");
```

### 获取账户下的 Bucket 列表

``` c
    qs_list_buckets_output_t output;
    qs_list_buckets_input_t input;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_list_buckets_input(&input);

    QsError err = qs_list_buckets(&input,&output,context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("%d\n",output.response_code);
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 当不再使用output结构时，调用相应release方法释放output结构相关的资源
    release_list_buckets_output(&output);
```

### 上传一个 Object

``` c
    // Put object
    qs_put_object_input_t input;
    qs_put_object_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_put_object_input(&input);

    // 在堆空间上分配一个 buffer ，并指定通过 input.bufLength 参数指明 buffer 的大小
    // qs_put_object 接口中会根据读取传入 buffer 结构中大小为 bufLength 的内容
    // 当然，这个 buffer 地址可以来自您已经构造好的资源，或从文件中读取的数据
    long length = strlen("this is a test");
    input.bodybuf = (char*)malloc( length );
    memcpy(input.bodybuf,"this is a test",length);
    input.content_length = &length;
    input.bufLength = &length;

    QsError err = qs_put_object("objectkey", &input, &output, context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("%d\n",output.response_code);
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_put_object_output(&output);
```

### 列出 Bucket 中的 Objects

``` c
    qs_list_objects_input_t input;
    qs_list_objects_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_list_objects_input(&input);

    // 设置你想要指定的 input 参数
    int limit = 200;
    input->limit =&limit;

    QsError err = qs_list_objects(&input, &output, context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("%d\n",output.GetKeys());
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_list_buckets_output(&output);
```

### 删除一个 Object

``` c
    qs_delete_object_input_t input;
    qs_delete_object_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_delete_object_input(&input);

    QsError err = qs_delete_object("objectkey", &input, &output, context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("%d\n",output.response_code);
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_delete_object_output(&output);
```

### 查看一个 Object 的状态

``` c
    qs_head_object_input_t input;
    qs_head_object_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_head_object_input (&input);

    QsError err = qs_head_object("objectkey", &input, &output, context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("%d\n",output.response_code);
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_head_object_output(&output);
```

### 初始化一个分段上传

``` c
    qs_initiate_multipart_upload_input_t input;
    qs_initiate_multipart_upload_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_initiate_multipart_upload_input (&input);

    QsError err = qs_initiate_multipart_upload("objectkey", &input, & output, context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        // 假设此处为 "9d37dd6ccee643075ca4e597ad65655c"
        printf("%s\n",output.upload_id);
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_initiate_multipart_upload_output(&output);
```

### 上传一个分段

``` c
    qs_upload_multipart_input_t input;
    qs_upload_multipart_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_upload_multipart_input (&input);

    long length = 5 * 1024 * 1024; //fiveMbSize
    int part_number = 1;
    input.bodybuf = (char *)malloc (length);
    memset(input.bodybuf, 0 , length);
    input.bufLength = &length;
    input.content_length = &length;
    input.part_number = &part_number;

    // 这里设置的 upload id ，来自于之前 qs_initiate_multipart_upload 得到的 output 中的 upload_id 数据
    input.upload_id = "9d37dd6ccee643075ca4e597ad65655c";

    QsError err = qs_upload_multipart("objectkey", &input, &output, context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("%d\n",output.response_code);
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_upload_multipart_output(&output);
```

### 列出已经上传的分段

``` c
    qs_list_multipart_input_t input;
    qs_list_multipart_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_list_multipart_input (&input);

    // 这里设置的 upload id ，来自于之前 qs_initiate_multipart_upload 得到的 output 中的 upload_id 数据
    input.upload_id = "9d37dd6ccee643075ca4e597ad65655c";

    QsError err = qs_list_multipart("objectkey", &input, &output);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        if (contextOutput->count)
        {
            printf("%d\n",output->count);
        }
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_list_multipart_output(&output);
```

### 完成一个分段上传

``` c
    qs_complete_multipart_upload_input_t input;
    qs_complete_multipart_upload_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_complete_multipart_upload_input (&input);

    // input 结构中的任何非基本类型，都需要使用相应的初始化方法进行初始化。
    qs_list_t object_parts_list;
    qs_list_init (&object_parts_list);
    qs_object_part_item_t object_parts_item_1, object_parts_item_2, object_parts_item_3;
    qs_object_part_t object_parts_1, object_parts_2, object_parts_3;

    // 初始化 qs_object_part_t 结构变量
    init_object_part (&object_parts_1);
    init_object_part (&object_parts_2);
    init_object_part (&object_parts_3);
    int part_number_1 = 1;
    int part_number_2 = 2;
    int part_number_3 = 3;
    object_parts_1.part_number = &part_number_1;
    object_parts_2.part_number = &part_number_2;
    object_parts_3.part_number = &part_number_3;
    object_parts_item_1.content = &object_parts_1;
    object_parts_item_2.content = &object_parts_2;
    object_parts_item_3.content = &object_parts_3;

    // 将节点插入链表结构
    qs_list_append (&object_parts_item_1.node, &object_parts_list);
    qs_list_append (&object_parts_item_2.node, &object_parts_list);
    qs_list_append (&object_parts_item_3.node, &object_parts_list);

    input.object_parts = &object_parts_list;

    // 这里设置的 upload id，来自于之前 qs_initiate_multipart_upload 得到的 output 中的 upload_id 数据
    input.upload_id = "9d37dd6ccee643075ca4e597ad65655c";

    QsError err = qs_complete_multipart_upload ("objectkey", &input, &output, context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("%d\n",output->response_code);
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_complete_multipart_upload_output(&output);
```

### 取消一个分段上传

``` c
    qs_abort_multipart_upload_input_t input;
    qs_abort_multipart_upload_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_abort_multipart_upload_input (&input);

    // 这里设置的 upload id，来自于之前 qs_initiate_multipart_upload 得到的 output中的upload_id 数据
    input.upload_id = "9d37dd6ccee643075ca4e597ad65655c";

    QsError err = qs_abort_multipart_upload ("objectkey", &input, & (*contextOutput), context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("%d\n",output->response_code);
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_abort_multipart_upload_output(&output);
```

### 获取 Bucket 的访问控制列表

QingStor 对象存储支持 Bucket ACL，是 Bucket 级别的访问控制，用户可将 Bucket 的读、写、或读写权限开放给单个或多个青云 QingCloud 用户。下面我们将演示如何通过 API 接口来获取和设置 Bucket ACL。

``` c
    qs_get_bucket_acl_input_t input;
    s_get_bucket_acl_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_get_bucket_acl_input(&input);

    QsError err = qs_get_bucket_acl(&input, &output, context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        qs_acl_item_t *item;
        qs_list_t acl;
        qs_list_init(&acl);

        // 遍历 acl 链表结构，获取每个 content 的信息
        qs_list_for_each_entry(qs_acl_item_t, item, contextOutput->acl)
        {
            if (item->content && item->content->grantee && item->content->grantee->name)
            {
                printf("%s\n",item->content->grantee->name);
            }
        }
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_get_bucket_acl_output(&output)
```

### 设置 Bucket 的访问控制列表

``` c
    qs_put_bucket_acl_input_t input;
    qs_put_bucket_acl_output_t output;

    // 调用 API 方法之前，请先调用相应的 init 方法，初始化 input 变量
    init_put_bucket_acl_input (&input);

    // 定义 qs_acl_t 结构变量，并调用 qs_acl_t 结构初始化函数进行初始化
    qs_acl_t acl;
    init_acl (&acl);

    // 定义 qs_grantee_t 结构变量，并调用 qs_grantee_t 结构初始化函数进行初始化
    qs_grantee_t grantee;
    init_grantee (&grantee);

    // 填充 qs_grantee_t 结构
    grantee.type = "group";
    grantee.name = "QS_ALL_USERS";

    // 填充 qs_acl_t 结构
    acl.grantee = &grantee;
    acl.permission = "FULL_CONTROL";

    // acl 链表的节点结构为 qs_acl_item_t，qs_acl_item_t 的 node 成员用于链表的操作，content 字段为的链表节点存储的有效内容
    qs_acl_item_t acl_item;
    // 把构造好的qs_acl_t变量填充到 acl_item 的 content 字段
    acl_item.content = &acl;

    // 通过 qs_list_init 将链表结构初始化
    qs_list_t acllist;
    input.acl = &acllist;
    qs_list_init (input.acl);

    // 将 acl_item 节点变量追加到链表变量中
    qs_list_append (&acl_item.node, input.acl);


    QsError err = qs_put_bucket_acl(&input, &output, context_hdl);
    if (QS_ERR_NO_ERROR == err)
    {
        // 当返回值为 QS_ERR_NO_ERROR 时，代表得到了符合预期的 response ，可以使用 output 中的信息完成你需要的业务逻辑
        printf("%d\n",output->response_code);
    }

    if (QS_ERR_UNEXCEPTED_RESPONSE == err)
    {
        // 当返回值为 QS_ERR_UNEXCEPTED_RESPONSE 时，代表得到了不符合预期的 response，可以进一步判定错误描述细节
        printf("request_id = %s , %s\n" , output.error_info.request_id, output.error_info.messag);
    }

    // 确定不再使用 output 变量之后，需要调用相应的 release 方法释放对应资源
    release_put_bucket_acl_output(output);
```

### 更多操作

所有的 API 调用接口均与上面的示例相似，用户可以查看 [QingStor 对象存储API 文档](/storage/object-storage/api/) 来了解更多信息。
