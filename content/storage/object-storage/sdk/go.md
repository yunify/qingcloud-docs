---
title: "Go SDK"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---


QingStor 对象存储的 Go SDK 已在 GitHub 开源，本文为简要使用文档。更多详细信息请参见 [GitHub 项目](https://github.com/qingstor/qingstor-sdk-go)  和 [Godoc](https://godoc.org/github.com/qingstor/qingstor-sdk-go)。

使用 SDK 之前请先在 [管理控制台](https://console.qingcloud.com/access_keys/) 申请 Access key。

## 安装

可以直接访问 GitHub 的 [release 页面](https://github.com/qingstor/qingstor-sdk-go/releases) 下载压缩包进行安装，也可通过如下步骤进行安装：

1. 执行如下命令行，使用 `go get` 安装:

```bash
> go get -u github.com/qingstor/qingstor-sdk-go
```

2. 安装完成后，可执行如下命令行查看相关文档

```bash
> godoc github.com/qingstor/qingstor-sdk-go
```

**备注：**

- 要求使用 Go 1.5 或以上的 Go 版本。
- 若版本为 1.5 还需设置 `GO15VENDOREXPERIMENT=1`。
- 从 Go SDK v3.0 版本起，Go SDK 也支持 go module 引入，可以在项目中的 `go.mod` 文件中引入指定版本的 SDK 即可。

## 初始化服务

发起请求前需要初始化服务。以下代码初始化了一个 QingStor Service。

```go
import (
    "github.com/qingstor/qingstor-sdk-go/config"
    qs "github.com/qingstor/qingstor-sdk-go/service"
    qsErrors "github.com/qingstor/qingstor-sdk-go/request/errors"
)

configuration, _ := config.New("ACCESS_KEY_ID", "SECRET_ACCESS_KEY")
qsService, _ := qs.Init(configuration)
```

## 代码示例
### 获取账户下的 Bucket 列表

```go
qsOutput, _ := qsService.ListBuckets(nil)

// Print the HTTP status code.
// Example: 200
fmt.Println(qs.IntValue(qsOutput.StatusCode))

// Print the bucket count.
// Example: 5
fmt.Println(qs.IntValue(qsOutput.Count))
```

### 创建 Bucket

初始化并创建 Bucket, 需要指定 Bucket 名称和所在 Zone:

```go
bucket, _ := qsService.Bucket("test-bucket", "pek3a")
putBucketOutput, _ := bucket.Put()
```

### 取 Bucket 中存储的 Object 列表

```go
bOutput, err := bucket.ListObjects(nil)

// Print the HTTP status code.
// Example: 200
fmt.Println(qs.IntValue(bOutput.StatusCode))

// Print the key count.
// Example: 0
fmt.Println(len(bOutput.Keys))
```

### 创建一个 Object

例如上传一张屏幕截图:

```go
// Open file
if file, err := os.Open("/tmp/Screenshot.jpg"); err != nil {
    panic(err)
}
defer file.Close()

// Put object
oOutput, err := bucket.PutObject("Screenshot.jpg", &service.PutObjectInput{Body: file})

// 所有 >= 400 的 HTTP 返回码都被视作错误
if err != nil {
    // Example: QingStor Error: StatusCode 403, Code "permission_denied"...
    fmt.Println(err)
} else {
    // Print the HTTP status code.
    // Example: 201
    fmt.Println(qs.IntValue(oOutput.StatusCode))
}
```

### 下载一个文件

``` go
getOutput, err := bucket.GetObject(
        "Screenshot.jpg",
        &service.GetObjectInput{},
)

if err != nil {
        // Example: QingStor Error: StatusCode 404, Code "object_not_exists"...
        fmt.Println(err)
        if qsErr, ok := err.(*qsErrors.QingStorError); ok {
                println(qsErr.StatusCode, qsErr.Code)
        }
} else {
        defer getOutput.Close() // 一定记得关闭GetObjectOutput, 否则容易造成链接泄漏
        f, err := os.OpenFile("download_screenshot.jpg", os.O_CREATE|os.O_WRONLY, 0600)
        if err != nil {
            panic(err)
        }
        defer f.Close()
        // Download with 32k temporary buffer
        err = io.CopyBuffer(f, getOutput.Body, make([]byte, 32*1024))
        if err != nil {
            panic(err)
        }
}
```


### 删除一个 Object

```go
oOutput, _ := bucket.DeleteObject("Screenshot.jpg")

// Print the HTTP status code.
// Example: 204
fmt.Println(qs.IntValue(oOutput.StatusCode))
```

### 设置 Bucket ACL

```go
bACLOutput, _ := bucket.PutACL(&service.PutBucketACLInput{
    ACL: []*service.ACLType{
        {
            Grantee: &service.GranteeType{
                Type: qs.String("user"),
                ID:   qs.String("usr-xxxxxxxx"),
            },
            Permission: qs.String("FULL_CONTROL"),
        },
    },
})

// Print the HTTP status code.
// Example: 200
fmt.Println(qs.IntValue(bACLOutput.StatusCode))
```

### 分段上传

#### 初始化分段上传

``` go
initOutput, err := bucket.InitiateMultipartUpload(
    "QingCloudInsight.mov",
    &service.InitiateMultipartUploadInput{
        ContentType: qs.String("video/quicktime"),
    },
)

// Print the HTTP status code.
// Example: 200
fmt.Println(qs.IntValue(initOutput.StatusCode))

// Print the upload ID.
// Example: "9d37dd6ccee643075ca4e597ad65655c"
fmt.Println(qs.StringValue(initOutput.UploadID))
```

#### 上传两个分段

``` go
uploadOutput, err := bucket.UploadMultipart(
    "QingCloudInsight.mov",
    &service.UploadMultipartInput{
        UploadID:   qs.String(initOutput.UploadID),
        PartNumber: qs.Int(0),
        ContentMD5: qs.String(md5String0),
        Body:       file0,
    },
)

// Print the HTTP status code.
// Example: 201
fmt.Println(qs.IntValue(uploadOutput.StatusCode))

uploadOutput, err = bucket.UploadMultipart(
    "QingCloudInsight.mov",
    &service.UploadMultipartInput{
        UploadID:   qs.String(initOutput.UploadID),
        PartNumber: qs.Int(1),
        ContentMD5: qs.String(md5String1),
        Body:        file1,
    },
)
```


#### 完成分段上传

``` go
completeOutput, err := bucket.CompleteMultipartUpload(
    "QingCloudInsight.mov",
    &service.CompleteMultipartUploadInput{
        UploadID:    qs.String(initOutput.UploadID),
        ObjectParts: []*service.ObjectPart{
            {PartNumber: qs.Int(0)},
            {PartNumber: qs.Int(1)},
        },
    },
)

// Print the HTTP status code.
// Example: 200
fmt.Println(qs.IntValue(completeOutput.StatusCode))
```

#### 取消分段上传

``` go
abrtOutput, err := bucket.AbortMultipartUpload(
    "QingCloudInsight.mov"
    &service.AbortMultipartUploadInput{
        UploadID:  qs.String(initOutput.UploadID),
    },
)

// Print the error message.
// Example: QingStor Error: StatusCode 400, Code...
fmt.Println(err)
```
