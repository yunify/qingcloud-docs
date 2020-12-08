---
title: "移动 App 接入方案"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 3
---

# 移动 App 接入方案

伴随着移动互联网的浪潮，移动应用 App 的开发需求越来越多样化，无论何种功能都离不开文件存储。在以前，应用开发者需要自行开发构建文件服务器，用于保存数据文件，并面向互联网提供访问，例如社交网络中的用户照片，视频网站中的影音内容，电商平台中的商品图片。

然而这些数据通常由终端用户直接生产和消费，伴随着用户增长，服务器的压力也会日益增大，开发者很难构建一个兼具高可用性、高扩展性和低成本的文件服务器。QingStor 刚好填补了这方面的需求，可为移动开发者提供一站式的文件存储解决方案。

QingStor 提供 HTTP RESTful 风格的访问接口，并辅助与编程语言相关的 SDK 工具，帮助开发者用极少的开发成本，将移动应用 App 对接到 QingStor。本文将介绍三种在不同使用场景下，与 QingStor 对接的方案：

1. 使用 QingStor SDK
1. 开发者实现签名服务器
1. 表单 POST 上传

最后再介绍一种特殊的签名认证方式：请求参数签名，用于当存储空间为私有权限时，在用户之间分享存储空间中的文件链接

## 准备工作

### 创建 Bucket 存储空间

1. 打开 Console 控制台，进入存储 -> 对象存储页面（对象存储已在 北京3区-A 和 上海1区-A 开放）
1. 选择创建 Bucket
1. 在对话框中输入 Bucket 名称，点击创建

![](create_bucket1.png)

### 创建 Access Key

1. 打开 Console 控制台，进入 API 密钥页面
1. 点击创建 -> 提交

![](create_access_key.png)

1. 在随后的对话框中下载密钥文件，并用文本打开查看

## 使用 QingStor SDK

QingStor 目前已提供多种语言 SDK，包括开发 iPhone App 使用的 Swift 语言，以及开发 Android App 使用的 Java 语言。App 开发者将 SDK 嵌入到客户端程序中，通过调用 SDK 通过的方法和接口与 QingStor 服务端通信

接下来我们将演示开发一个上传照片的 iPhone App，讲解如何使用 QingStor SDK for Swift 将 App 接入到 QingStor。

### 配置 CocoaPods

使用 CocoaPods 来集成 SDK，如果你还没有安装 CocoaPods，可以执行以下命令来安装

```bash
> gem install cocoapods
```

注解

需要使用 CocoaPods 1.1.0+ 来编译 SDK

在项目工程根目录下，输入以下命令来初始化 CocoaPods

```bash
> pod init
```

打开 Podfile，增加 pod ‘QingStorSDK’ 到你对应的 Target，内容参考如下

```bash
target '' do
  use_frameworks!
  pod 'QingStorSDK'
end
```

最后，输入以下命令来安装SDK的依赖包

```bash
> pod install
```

### 正式开始

首先创建一个 Config.plist，并添加到工程。在 plist 文件里面填写申请的API密钥信息，内容参考如下

```plist

    access_key_id
    ACCESS_KEY_ID
    secret_access_key
    SECRET_ACCESS_KEY

```

要使用 SDK 的话，首先需要导入它，打开工程的 AppDelegate.swift 文件，在文件的顶部添加如下代码

```swift
import QingStorSDK
```

在程序的启动入口，需要先做个全局的注册操作，代码如下

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    // Register QingStorSDK
    let url = URL(fileURLWithPath: Bundle.main.path(forResource: "Config", ofType: "plist")!)
    try! Registry.registerFrom(plist: url)

    return true
}
```

为了让大家能集中精力学习 QingStor SDK，而不是花费时间来研究 UI，关于例子中用到的页面大概讲解一下。

Main.storyboard UI结构图：

![_images/main_storyboard.png](_images/main_storyboard.png)

例子并不复杂，使用一个 BucketListController 显示当前的 Bucket 列表，一个 ObjectListController 显示 Bucket 下面的对象列表。

打开 BucketListController，在 viewDidLoad 方法里面初始化我们的 QingStor 服务

```swift
fileprivate var qsService: QingStor!

override func viewDidLoad() {
    super.viewDidLoad()

    qsService = QingStor()

    setupView()
}
```

为了灵活使用，除了上述那种初始化 QingStor 服务的方法之外，SDK 也支持在服务初始化的时候传入配置信息，首先修改 Config.plist 内容如下

```plist

    access_key_id
    ACCESS_KEY_ID
    secret_access_key
    SECRET_ACCESS_KEY
    protocol
    https
    host
    qingstor.com
    port
    443

```

修改 qsService 的初始化方式

```swift
let url = URL(fileURLWithPath: Bundle.main.path(forResource: "Config", ofType: "plist")!)
let context = try! APIContext(plist: url)
qsService = QingStor(context: context)
```

有了 qsService 实例，我们可以用它来获取 Bucket 列表，请求操作代码如下

```swift
private func requestBucketList() {
    qsService.listBuckets(input: ListBucketsInput()) { response, error in
        if let response = response {
            if response.output.errMessage == nil {
                self.listBucketsOutput = response.output
                self.tableView.reloadData()
            } else {
                print("error: \(response.output.errMessage)")
            }
        } else {
            print("error: \(error)")
        }

        self.refreshControl?.endRefreshing()
    }
}
```

我们把得到的响应数据存储到 listBucketsOutput，在刷新 TableView 的时候根据输出显示对应的内容，最终效果如下图所示：

![_images/bucket_list.png](_images/bucket_list.png)

`mobile-bucket-test` 是我之前为了测试创建的 `bucket` ，点击该列表项，会跳转到 `ObjectListController` 页面，并把当前列表项的 `bucket` 数据传递过去。

打开 `ObjectListController` 文件，在监听 `bucketModel` 的事件里，初始化我们的 `bucket` 服务

```swift
fileprivate var bucketService: Bucket!
var bucketModel: BucketModel! {
    didSet {
        title = bucketModel.name
        bucketService = QingStor().bucket(bucketName: bucketModel.name!, zone: bucketModel.location!)
    }
}
```

增加 requestObjectList 方法来请求我们的对象列表

```swift
private func requestObjectList() {
    bucketService.listObjects(input: ListObjectsInput()) { response, error in
        if let response = response {
            if response.output.errMessage == nil {
                self.listObjectsOutput = response.output
                self.tableView.reloadData()
            } else {
                print("error: \(response.output.errMessage)")
            }
        } else {
            print("error: \(error)")
        }

        self.refreshControl?.endRefreshing()
    }
}
```

类似在 BucketListController 里面做的处理，我们把得到的响应数据存储到 listObjectsOutput，在刷新 TableView 的时候根据输出显示对应的内容，最终效果如下图所示：

![_images/object_list.png](_images/object_list.png)

可以看到，右上角有个 + 符号，点击会触发选择图片事件，这里使用 UIImagePickerController 来做图片选择器，UI 的问题就不多说了，当你选择完图片时会触发 UIImagePickerController 的回调方法，我们可以在该方法做一些图片上传的处理，代码如下

```swift
func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
    dismiss(animated: true, completion: nil)

    var contentType: String? = nil
    if let UTI = info[UIImagePickerControllerMediaType], let type = UTTypeCopyPreferredTagWithClass(UTI as! CFString, kUTTagClassMIMEType)?.takeRetainedValue() {
        contentType = type as String
    } else {
        contentType = "image/jpeg"
    }

    var pathExtension = "jpg"
    if let url = info[UIImagePickerControllerReferenceURL] as? URL {
        pathExtension = url.pathExtension.lowercased()
    }

    if let image = info[UIImagePickerControllerEditedImage] as? UIImage {
        let originRightBarButtonItem = navigationItem.rightBarButtonItem

        spinner.startAnimating()
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: spinner)

        let data = UIImageJPEGRepresentation(image, 0.8)!
        let input = PutObjectInput(contentLength: data.count, contentType: contentType, bodyInputStream: InputStream(data: data))
        let key = "\(Int(Date().timeIntervalSince1970)).\(pathExtension)"
        bucketService.putObject(objectKey: key, input: input) { response, error in
            if let response = response {
                if response.output.errMessage == nil {
                    self.beginRefresh()
                } else {
                    print("error: \(response.output.errMessage)")
                }
            } else {
                print("error: \(error)")
            }

            self.navigationItem.rightBarButtonItem = originRightBarButtonItem
        }
    }
}
```

代码有点长，不过我们应该关注的地方只有下面这一段代码

```swift
let data = UIImageJPEGRepresentation(image, 0.8)!
let input = PutObjectInput(contentLength: data.count, contentType: contentType, bodyInputStream: InputStream(data: data))
let key = "\(Int(Date().timeIntervalSince1970)).\(pathExtension)"
bucketService.putObject(objectKey: key, input: input) { response, error in
    if let response = response {
        if response.output.errMessage == nil {
            self.beginRefresh()
        } else {
            print("error: \(response.output.errMessage)")
        }
    } else {
        print("error: \(error)")
    }

    self.navigationItem.rightBarButtonItem = originRightBarButtonItem
}
```

首先把图片信息转换成 Data，方便后面转成 InputStream，你也可以把 Image 存到本地文件，再转成 InputStream。然后把文件的一些信息传给 Input 对象，比如 ContentLength 和 ContentType。

key 值是存储的文件名，以后对应的删除下载操作，都需要传递这个 key 值，这里只是简单的获取了一下时间戳当做文件名。

最后用 bucketService 来把文件上传到 QingStor，通过调用 putObject 方法来实现。

这个简单的教程到这里就告一段落了，例子里面还加了一个侧滑删除的操作，大家有兴趣可以 [下载源码](https://github.com/qychrisyang/qingstor-sdk-swift-demo) 看看。

## 开发者实现签名服务器

上文中介绍的使用 SDK 调用 QingStor，适用于 bucket 被个人用户所拥有的情况。如果 bucket 为 App 开发者所拥有，由于需要将签名密钥内置到客户端程序中，会带来安全方面的隐患。为了保证签名密钥的安全，开发者可以根据 QingStor 签名方法，自己搭建并实现一个签名服务器。用于签名的密钥只需要在服务端保存，客户端不需要拿到，从而避免了认证信息泄漏的隐患。

QingStor 官方提供了一个签名服务器的 [样例](https://github.com/yunify/qingstor-demo-auth-server) 供 App 开发者参考。网页端使用 JavaScript SDK 配合签名服务器进行上传可以参考官方提供的 [Demo 项目](https://github.com/yunify/qingstor-sdk-js-demo)

如果要自己开发签名服务，需要注意：

1) 签名服务需要考虑 [JavaScript 客户端的特例](../api/common//signature.html#针对-javascript-客户端的特殊考虑)

2) 签名服务需要把计算签名时所有的时间戳，返回给客户端，客户端根据这个时间戳设置 ```Date``` 头字段（一般的客户端）或 ```x-qs-date``` 头字段（JavaScript客户端）

注解

由于没有权限验证，该样例不适合直接运行在生产环境，若暴露在公网上，任何人都可以访问并进行签名认证。

样例的使用步骤如下：

### 安装签名服务器

```bash
git clone https://github.com/yunify/qingstor-demo-auth-server.git
cd qingstor-demo-auth-server
pip install -r requirements
```

### 配置认证信息

```bash
export ACCESS_KEY_ID="ACCESS_KEY_ID_EXAMPLE"
export SECRET_ACCESS_KEY="SECRET_ACCESS_KEY_EXAMPLE"
export ZONE="pek3a"
```

其中 ZONE 可以在服务器端进行配置，也可以在每一次请求中指定。如果都没有的话，服务器将会抛出异常。

### 运行认证服务器

```bash
python demo.py
```

### 获得请求签名

从客户端发送签名请求

```bash
curl -H "Content-Type: application/json" -d '{"method":"GET", "url":"/", "headers":{"Date":"Wed, 10 Dec 2014 17:20:31 GMT"}}' 127.0.0.1:5000
```

客户端将会获得如下的返回结果

```bash
QS PLLZOBTTZXGBNOWUFHZZ:vIWg/qAxvXlcFRb9uzYmdIM9tiF6EuM6SC3i13yLzH8=
```

将该结果附加到请求头中，作为最终发送给 QingStor 的请求

```http
GET /mybucket/music.mp3 HTTP/1.1
Authorization: QS PLLZOBTTZXGBNOWUFHZZ:vIWg/qAxvXlcFRb9uzYmdIM9tiF6EuM6SC3i13yLzH8=
Host: pek3a.qingstor.com
Date: Mon, 14 Nov 2016 14:05:00 GMT
```

SDK 参考例子:

[Java 使用服务端签名](../sdk/java/index.html#使用服务端签名)

[Swift 应用服务端签名](../sdk/swift/index.html#使用服务端签名)


## 表单 POST 上传

表单上传是专门为浏览器设计的一种文件上传方式，表单上传分为以下几步：

1. 用户通过浏览器请求开发者的 Web Server
1. Web Server 生成包含 signature 字段的表单返回给浏览器，例如

```html

    Upload
    .pek3a.qingstor.com" method="POST" enctype="multipart/form-data">

```

1. 用户通过表单上传文件以及 Signature 给 QingStor 表单上传的具体方法，请见 [官方文档](https://docs.qingcloud.com/qingstor/api/object/post.html)

## 请求参数签名

最后我们介绍一种不同于请求头签名的认证方式，该方法适用于 bucket 为私有权限，但是需要分享文件下载链接给其它用户，或者其它设置请求头签名不方便的客户端：

如果开发者想要生成一个 QingStor 访问链接，将链接分享给其他用户，可以该签名方式，即请求参数签名。下面是一个请求示例

```http
GET /music.mp3?access_key_id=PLLZOBTTZXGBNOWUFHZZ&expires=1479107162&signature=tuXu/KcggHWPAfEmraUHDwEUdiIPSXVRsO%2BT2rxomBQ%3D HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Mon, 14 Nov 2016 14:05:00 GMT
```

参数签名使用的场合较为广泛，它所能达成的效果跟请求头签名完全一样，只是让附带签名的过程更加方便和易于使用。具体方法请见 [官网文档](https://docs.qingcloud.com/qingstor/api/common/signature.html#id3)


