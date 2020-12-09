---
title: "数据迁移"
description: test
draft: false
---

「QingCloud MySQL Plus」的MySQL版本为8.0.19 & 5.7.29 & 5.6.42，且开启了 GTID 复制模式，因此从其他MySQL迁移数据时，需要通过导数据或者 QingCloud MySQL Plus 支持的数据导入服务的方式来进行。

## 在线数据迁移


## 数据导出


## 数据导入


## 从阿里云ECS导出镜像

### 第1步：开通OSS

1、登录阿里云控制台，单击左上角选择对象存储OSS，初次使用同意OSS服务条款，进入管理控制台。

![img](../ecs2qing.assets/clip_image002.jpg)

2、左侧单击创建Bucket，选择与保存镜像同一地域的Bucket。切记要选择标准存储，读写权限设置为公共读，并记住Bucket的名字。

![img](../ecs2qing.assets/clip_image004.jpg)



### 第2步：创建镜像

1、控制台页面，单击左上角选择云服务器 ECS，进入云服务器 ECS界面，选择相应的实例，进入实例详情页面。

![img](../ecs2qing.assets/clip_image006.jpg)



2、选择 **创建自定义镜像** 选项，为镜像命名后点击创建按钮，创建自定义镜像。

![img](../ecs2qing.assets/clip_image008.jpg)



![img](../ecs2qing.assets/clip_image010.jpg)



3、镜像创建完成后，可以在镜像列表上看到我们创建的镜像。

![img](../ecs2qing.assets/clip_image012.jpg)



### 第3步： 提交工单，开通镜像导出权限

1、点击上方工单选项卡，左侧提交工单，选择ECS提问。


![img](../ecs2qing.assets/clip_image014.jpg)

2、下一个界面选择镜像，创建工单。


![img](../ecs2qing.assets/clip_image016.jpg)

3、随后需要输入工单信息，可参照下面这个格式：
   * 导出镜像的原因 ：
   * 需要导出镜像的ID：
   * 需要导出白名单的有效期（若不写明，默认提供一周）

![img](../ecs2qing.assets/clip_image018.jpg)


4、开通导出权限后工程师会提示,随后在ECS镜像页对应镜像部分会出现 **导出镜像** 的选项，选择导出镜像。

![img](../ecs2qing.assets/clip_image020.jpg)


5、选择我们之前创建的bucket，并输入object前缀，点击确定。

![img](../ecs2qing.assets/clip_image022.jpg)



6、页面我们看到刚才导出的镜像。

![img](../ecs2qing.assets/clip_image024.jpg)



7、控制台页面，单击左上角选择对象存储，进入对象存储界面，在我们之前创建的bucket里面可以看到导出的镜像，并选择 复制文件url，获得镜像下载链接。

![img](../ecs2qing.assets/clip_image026.jpg)



![img](../ecs2qing.assets/clip_image027.png)

## 镜像导入到QingCloud

### 第1步：下载镜像

1、我们在青云的虚机里下载该镜像。没有wget需要先下载安装wget工具，并且注意下面命令里面的两个单引号。

`wget ‘下载链接’`

![img](../ecs2qing.assets/clip_image029.jpg)

2、下载完成后，文件重命名成raw.tar.gz后缀。

![img](../ecs2qing.assets/clip_image031.jpg)

3、镜像压缩包进行解压。

`tar -zxvf test_m-uf66lzx8rzvh3ht5tbz1_system.raw.tar.gz`

![img](../ecs2qing.assets/clip_image033.jpg)

![img](../ecs2qing.assets/clip_image035.jpg)

![img](../ecs2qing.assets/clip_image037.jpg)

### 第2步：制作QingCloud自定义镜像

1、在QingCloud控制台上创建一个硬盘并挂载到下载镜像的主机上，注意硬盘的大小需要和原主机的系统盘大小一致。

`fdisk -l`

![img](../ecs2qing.assets/clip_image039.jpg)

2、将 raw 格式的镜像文件拷贝到硬盘中。

`dd if=test_m-uf66lzx8rzvh3ht5tbz1_system.raw of=/dev/vdc`

![img](../ecs2qing.assets/clip_image041.jpg)

3、可以新开一个shell界面，输入下面命令，查看dd命令的执行进度；

`watch -n 5 pkill -USR1 ^dd$`

![img](../ecs2qing.assets/clip_image043.jpg)

4、完成之后，更新下硬盘的分区信息；

`partprobe /dev/vdc`

![img](../ecs2qing.assets/clip_image045.jpg)

5、按照下图步骤，将云硬盘制作备份；

![img](../ecs2qing.assets/clip_image047.jpg)

![img](../ecs2qing.assets/clip_image049.jpg)

6、备份界面，鼠标右键点击我们刚才得到的备份，选择制作新映像，如下图所示：

![img](../ecs2qing.assets/clip_image051.jpg)

![img](../ecs2qing.assets/clip_image053.jpg)

>  注意，需要选择一个系统映像，我需要导入的镜像是centos7.5版本，所以选择QingCloud对应的centos7.5即可，然后提交。

![img](../ecs2qing.assets/clip_image055.jpg)

![img](../ecs2qing.assets/clip_image057.jpg)


7、镜像创建完成，我们便可以在映像 - - 自有 界面看到我们刚才创建的映像，然后基于该映像在QingCloud上创建虚机即可。

![img](../ecs2qing.assets/clip_image059.jpg)


![img](../ecs2qing.assets/clip_image061.jpg)
