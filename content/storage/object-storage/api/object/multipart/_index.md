---
title: "Multipart 分段"
---

- [Initiate Multipart Upload 初始化分段上传](initiate/)
- [Upload Multipart Part 上传对象分段](upload/)
- [Copy Multipart Part 复制对象分段](copy/)
- [List Multipart Parts 列取对象分段](list/)
- [Abort Multipart Upload 取消对象分段](abort/)
- [Complete Multipart Upload 合并对象分段](complete/)

## 功能概述

QingStor 对象存储的 Multipart 接口，提供了多个 API 来实现 Object 分段上传。除了支持客户端上传超过 5G 的大文件以外，还能实现客户端的断点续传，分段并发上传等高级特性。

完整的分段上传过程为:

1. 客户端调用 [Initiate Multipart Upload](initiate/) 来初始化一个 Object 分段上传。QingStor 对象存储返回该 Object 分段上传的唯一 Upload Id。
2. 客户端根据 Object 内容偏移依次读取文件数据，并为每个分段标上大于等于 0 的整数标识后，调用 [Upload Multipart Part](upload/) 对每个分段进行上传。
3. 客户端使用 [List Multipart Parts](list/) 来查看指定 Upload Id 对应的已经上传的分段，以便实现断点续传。
4. 在所有分段上传完毕后，客户端调用 [Complete Multipart Upload](complete/) 将指定 Upload Id 对应的分段进行合并并得到完整 Object。

## 注意事项
- 在上传分段过程中未完成的分段会增加 Bucket 的空间使用量，所以如果要取消上传过程，需要调用 [Abort Multipart Upload](abort/) 来清除没用的分段数据。
- 在 Bucket 中所有未完成的分段上传过程，可以通过 [List Multipart Uploads](/storage/object-storage/api/bucket/basic_opt/list_multipart_uploads/) 进行查看。
- 若指定 Upload Id 的同一分段多次上传，则最后一次调用会覆盖之前的上传数据。
- 若指定的 Bucket 中已存在同名的 Object，QingStor 对象存储会在该 Object 完整上传完成后，替换已有 Object。

## 并发操作

- Multipart API 均为原子调用，能够支持并发。
- 对同一个 Object 多次调用 [Initiate Multipart Upload](initiate/) 得到的 Upload Id 均不同。
- 对同一个 Object 的不同 Upload Id 的内容，调用 [Upload Multipart Part](upload/)、[Complete Multipart Upload](complete/) 以及 [Abort Multipart Upload](abort/) 均为独立过程，不会相互影响。
- 客户端可以对同一个 Upload Id 的各个分段使用多线程来上传，提高网络带宽的利用率。
- 若有多个请求对同一个 Upload Id 的同一个分段序号进行上传，以后传输完成的作为最终结果。


## 大文件的拷贝

大于 5G 的 Object，QingStor 对象存储不支持直接拷贝。客户端需要为目标位置 Object 调用 [Initiate Upload](initiate/)，然后参照 [Copy Object Part](copy/) 并附带 `x-qs-copy-range` 请求头逐段拷贝数据，最后使用 [Complete Multipart Upload](complete/) 合并得到目标位置 Object。

## 分段上传限制

使用 Multipart 上传方式有如下几个限制：

- 每个分段最大为 5GB。
- 由 Upload Id 唯一标识的一个分段上传过程，最多可以支持的分段数量为 10000。
- 除最后一个分段不限最小长度以外，其它分段最小为 4MB。
- 一个 Object 的各个分片长度不要求一样。

因此，在使用 5GB 大小进行分段的时候，10000 个分段能支持上传最大为 50TB 的 Object；在使用最小分段 4MB 进行分段的时候，10000 个分段能支持上传最大 40GB 的 Object。

客户端可以根据实际需求选择分段大小。比如在外网环境，由于公网传输速度是由多种因素决定，其大小可能受到限制，考虑到保证服务端和客户端的交互，QingStor 对象存储建议，此时，客户端可以采用较小的长度来进行分段。

目前 [管理控制台](https://console.qingcloud.com/) 上传大文件是采用 64MB 来作为分段大小。
