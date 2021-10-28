---
title: "PHP SDK"
---


QingStor 对象存储的 PHP SDK 已在 GitHub 开源，本文为简要使用文档。更多详细信息请参见 [GitHub 项目](https://github.com/yunify/qingstor-sdk-php)。

使用 SDK 之前请先在 [管理控制台](https://console.qingcloud.com/access_keys/) 申请 Access key。

## 安装

使用 Composer 安装:

```bash
> composer require yunify/qingstor-sdk
```


## 初始化服务

发起请求前需要初始化服务。以下代码初始化了一个 QingStor Service。

```php
use QingStor\SDK\Service\QingStor;
use QingStor\SDK\Config;

$config = new Config("ACCESS_KEY_ID", "SECRET_ACCESS_KEY");
$service = new QingStor($config);
```

## 代码示例

### 获取账户下的 Bucket 列表

```php
$response = $test_service->listBuckets();

// Print the response statusCode.
echo $response->statusCode;

// Print the buckets.
var_dump($response->buckets);
```

### 创建 Bucket

初始化并创建 Bucket, 需要指定 Bucket 名称和所在 Zone:

```php
$test_bucket = $test_service->Bucket("test-bucket", "pek3a")
$response = $test_bucket.put()
```

### 获取 Bucket 中存储的 Object 列表

```php
$response = bucket.listObjects()

// Print the response statusCode.
echo $response->statusCode;

// Print the objects keys.
var_dump($response->keys);
```

### 创建一个 Object

上传一个文件:

```php
// Put object
$response = $test_bucket->putObject(
    "test_file",
    array(
        'body' => file_get_contents('/tmp/test_file'),
    )
)

// Print the response statusCode.
echo $response->statusCode;
```

### 删除一个 Object

```php
// Delete object
$response = $test_bucket->deleteObject("test_object");

// Print the response statusCode.
echo $response->statusCode;
```

### 设置 Bucket ACL

```php
$response = $test_bucket->putACL(
    array(
        "acl => array(
            "grantee" => array(
                "type" => "user",
                "ID" => "usr-xxxxxxxx"
            ),
            "permission" => "FULL_CONTROL"
        )
    )
);

// Print the response statusCode.
echo $response->statusCode;
```
