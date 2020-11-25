---
title: "Multipart"
---

# Multipart 分段上传过程
- [Initiate Multipart Upload 初始化分段上传](initiate/)
- [Upload Object Part 上传对象分段](upload/)
- [Copy Object Part 复制对象分段](copy/)
- [List Object Parts 列取对象分段](list/)
- [Abort Multipart Upload 取消对象分段](abort/)
- [Complete Multipart Upload 合并对象分段](complete/)

Multipart API 提供了多个API实现一种将对象分段上传的方式。使客户端支持大于5G的大文件上传。并且能够让客户端
实现断点续传，分段并发上传等高级特性。

一个完整的上传过程为:

1. 调用 [Initiate Upload API](initiate/) 返回该对象唯一的 Upload Id。

2. 根据对象内容偏移读取文件数据，为每个分段调用 [Upload Object Part API](upload/)。分段序号使用大于等于 0 的整数标识。
   若该 Upload Id 同一分段多次上传，后边的调用会覆盖前边的上传的数据。

3. 客户端可以使用 [List Multipart API](list/) 来查看特定 Upload Id 下边已经上传的分段，以便实现断点续传。

4. 在所有分段上传完毕后，调用 [Complete Multipart Upload API](complete/) 并传递 Upload Id 合并得到完整对象。
   若对象在此前已存在，会覆盖旧版本数据。


在上传分段过程中未完成的分段会增加 Bucket 的空间使用，所以如果要取消上传过程，需要调用 [Abort Multipart Upload API](abort/)
并传递 Upload Id 来清除没用的分段数据。

在 Bucket 中所有未完成的分段上传过程，可以通过 [List Multipart Uploads API](../../bucket/list_multipart_uploads.html)来列出。


# 并发的考虑

- Multipart API 均为原子调用，能够支持并发。为一个对象多次调用 [Initiate Upload API](initiate/)  得到的 Upload Id 均不同。

- 对同一个对象不同 Upload Id 的内容的 [Upload Object Part](upload/)、[Complete Upload](complete/) 和 [Abort Upload](abort/) 调用均为独立过程，不会相互影响。

- 客户端可以对同一个 Upload Id 的各个分段使用多线程来上传，提高网络带宽的利用率。

- 如果有多于一个请求对同一个对象同一个分片序号进行上传，以后传输完成的作为最终结果。（但一个实现较好的客户端应该避免这种情况的并发）


# 分段对象的拷贝

大于5G的分段对象，不支持直接拷贝，客户端需要为目标位置对象调用 [Initiate Upload](initiate/)，然后参照 [Copy Object Part](copy/)并附带 x-qs-copy-range 请求头
逐段拷贝数据，最后使用 [Complete Multipart Upload API](complete/) 合并得到目标位置对象。

# 分段上传限制

Multipart 上传方式有如下几个限制：

- 每个分段最大为 5GB。

- 单一的 Upload 过程 (由Upload Id唯一标识), 最多可以支持的分段数量为10000。

- 除最后一个分段不限最小长度以外，其它分段最小为 4MB。

因此在使用 5GB 大小分段的时候, 10000 个分段的能支持上传最大 50TB 的对象。在使用最小分段 4MB的时候, 10000 个分段能支持上传最大 40GB 的对象。
客户端可以根据实际需求选择分段大小。比如在外网环境，由于公网传输速度是由多种因素决定可能受到限制，考虑到保证服务端和客户端的交互，客户端可以采用较小的长度来分段。

目前 Web 控制台上传大文件是采用 64MB 来作为分段大小。

Note: 一个对象的各个分片长度不要求一样。
