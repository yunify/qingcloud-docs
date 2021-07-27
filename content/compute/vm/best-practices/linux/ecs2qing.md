---
title: "将ECS迁移到青云QingCloud"
date: 2021-03-09T10:08:56+09:00
description: test
draft: false

---

### 从阿里云ECS导出镜像

第1步：开通OSS

1、登录阿里云控制台，点击左上角选择对象存储OSS，初次使用同意OSS服务条款，进入管理控制台。

![img](../../_images/ecs2qing.assets/clip_image002.png)

2、左侧点击创建Bucket，选择与保存镜像同一地域的Bucket。切记要选择标准存储，读写权限设置为公共读，并记住Bucket的名字。

![img](../../_images/ecs2qing.assets/clip_image004.png)



### 第2步：创建镜像

1、控制台页面，点击左上角选择云服务器 ECS，进入云服务器 ECS界面，选择相应的实例，进入实例详情页面。

![img](../../_images/ecs2qing.assets/clip_image006.png)



2、选择 **创建自定义镜像** 选项，为镜像命名后点击创建按钮，创建自定义镜像。

![img](../../_images/ecs2qing.assets/clip_image008.png)



![img](../../_images/ecs2qing.assets/clip_image010.png)



3、镜像创建完成后，可以在镜像列表上看到我们创建的镜像。

![img](../../_images/ecs2qing.assets/clip_image012.png)



### 第3步： 导出镜像


1、选择导出镜像选项（如没有该选项，可通过工单申请开通）。

![img](../../_images/ecs2qing.assets/clip_image020.png)


2、选择我们之前创建的bucket，并输入object前缀，点击确定。

![img](../../_images/ecs2qing.assets/clip_image022.png)


3、控制台页面，点击左上角选择对象存储，进入对象存储界面，在我们之前创建的bucket里面可以看到导出的镜像，并选择 复制文件url，获得镜像下载链接。

![img](../../_images/ecs2qing.assets/clip_image026.png)



## 镜像导入到QingCloud

### 第1步：下载镜像

1、我们在青云的虚机里下载该镜像。没有wget需要先下载安装wget工具，并且注意下面命令里面的两个单引号。

`wget ‘下载链接’`

![img](../../_images/ecs2qing.assets/clip_image029.jpg)

2、下载完成后，文件重命名成raw.tar.gz后缀。

![img](../../_images/ecs2qing.assets/clip_image031.jpg)

3、镜像压缩包进行解压。

`tar -zxvf test_m-uf66lzx8rzvh3ht5tbz1_system.raw.tar.gz`

![img](../../_images/ecs2qing.assets/clip_image033.jpg)

![img](../../_images/ecs2qing.assets/clip_image035.jpg)

![img](../../_images/ecs2qing.assets/clip_image037.jpg)

### 第2步：制作QingCloud自定义镜像

1、在[QingCloud 管理控制台](https://console.qingcloud.com/login)上创建一个硬盘并挂载到下载镜像的云服务器上，注意硬盘的大小需要和原云服务器的系统盘大小一致。

`fdisk -l`

![img](../../_images/ecs2qing.assets/clip_image039.jpg)

2、将 raw 格式的镜像文件拷贝到硬盘中。

`dd if=test_m-uf66lzx8rzvh3ht5tbz1_system.raw of=/dev/vdc`

![img](../../_images/ecs2qing.assets/clip_image041.jpg)

3、可以新开一个shell界面，输入下面命令，查看dd命令的执行进度；

`watch -n 5 pkill -USR1 ^dd$`

![img](../../_images/ecs2qing.assets/clip_image043.jpg)

4、完成之后，更新下硬盘的分区信息；

`partprobe /dev/vdc`

![img](../../_images/ecs2qing.assets/clip_image045.jpg)

5、按照下图步骤，将云硬盘制作备份；

![img](../../_images/ecs2qing.assets/clip_image047.png)

![img](../../_images/ecs2qing.assets/clip_image049.png)

6、备份界面，鼠标右键点击我们刚才得到的备份，选择制作新镜像，如下图所示：

![img](../../_images/ecs2qing.assets/clip_image051.png)

![img](../../_images/ecs2qing.assets/clip_image053.png)

>  注意，需要选择一个系统镜像，我需要导入的镜像是centos7.5版本，所以选择QingCloud对应的centos7.5即可，然后提交。

![img](../../_images/ecs2qing.assets/clip_image055.png)

![img](../../_images/ecs2qing.assets/clip_image057.png)


7、镜像创建完成，我们便可以在镜像 - - 自有 界面看到我们刚才创建的镜像，然后基于该镜像在QingCloud上创建虚机即可。

![img](../../_images/ecs2qing.assets/clip_image059.png)


![img](../../_images/ecs2qing.assets/clip_image061.png)