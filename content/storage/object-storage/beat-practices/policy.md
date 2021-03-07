title: "存储空间策略(Policy)白名单和黑名单使用实例"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 2



### 因为policy优先级大于ACL，以下是policy规则分别使用白名单和黑名单实现相同结果的两个案例，从案例中熟悉黑白名单的使用。

最终实现的效果都是一样的，即header里的referer必须匹配 *.[baidu.com](http://baidu.com/) ，才能允许访问

**案例一**： ACL无任何规则，policy白名单（允许） referer 匹配 *.[baidu.com](http://baidu.com/) 访问，如图

![](../../_images/policy1.png)

![](../../_images/policy2.png)

测试结果，如下:

![](../../_images/policy3.png)

直接curl访问提示无权限， --referer指定[www.baidu.com](http://www.baidu.com/)之后可以正常访问

可见，ACL不做任何规则限制（默认都无权访问），由于policy优先级更高，可以直接越过ACL的限制



案例二：ACL限制所有人可读，policy黑名单 （拒绝） referer 不匹配 *.[baidu.com](http://baidu.com/) ，如图:

![](../../_images/policy4.png)

![](../../_images/policy5.png)

测试结果，如下:

![](../../_images/policy6.png)

直接curl访问提示无权限， --referer指定[www.baidu.com](http://www.baidu.com/)之后可以正常访问

可见要实现的结果和 案例一 是一致的

