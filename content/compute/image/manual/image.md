---
title: "捕获镜像"
date: 2020-01-30T00:39:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 镜像, QingCloud
---


## 通过云服务器备份捕获的镜像
用户在 "计算" - "云服务器" 先将自己的某个云服务器关机，右键选择"创建备份"，创建可以制作为镜像的备份。 

![](/compute/vm/intro/_images/create_instance_snapshot.png)

待备份完成之后，在控制台上选择 "存储" - "备份"，找到之前的备份，并右键选择"制作新镜像"。 

![](/compute/vm/intro/_images/capture-instance-from-snapshot.png)

待完成之后，可以在 "计算" - "镜像" - "自有" 中看到刚才创建的镜像。

![](/compute/vm/intro/_images/user_defined_image.png)


## 通过数据盘备份捕获的镜像

用户也可以将自定义镜像上传到云服务器挂载的硬盘中，使用硬盘的快照制作成用户自定义的镜像。

### 限制条件
您需要注意以下的限制条件:
1. 用户自定义的镜像创建的云服务器不能重置密码；
2. 某些监控信息可能采集不到；
3. 不支持使用lvm分区的镜像；
4. 根据自定义的镜像文件创建的云服务器在挂载硬盘后硬盘的映射关系无法显示(即 vol-XXX 和 /dev/sdX 之间的映射关系)；
5. 自定义的镜像的大小不能超过设置的值，公有云中不能超过 100G 不能小于 20G。 

### 注意事项
1. 在使用自定义的系统盘创建自定义镜像时，务必保证 /etc/fstab 的信息和系统盘内分区一致；
2. 确保 /boot/grub/grub.cfg，/boot/grub/menu.list (不同操作系统对应文件不一样)等文件可以正确引导启动；
3. 确保网口配置为 dhcp 能够自动获取 ip 地址。 


### 操作步骤
示例 1: 将本地的 20G 系统盘的镜像上传到青云环境上。 务必确保本地系统盘上的 /etc/fstab，/etc/network/ 等文件信息正确。

1. 云服务器创建新的硬盘，大小也为 20G (和本地系统盘的大小一致；如果系统盘的大小小于 20G，也需要创建 20G 的云硬盘)；

2. 挂载新创建的硬盘到某台云服务器上；

3. 拷贝本地的 test2.img 镜像文件到云服务器上；

    ```scp -i $KEY_PATH test2.img root@eip:~/```

4. 云服务器安装 qemu 软件支持使用 qemu-img 转换格式，或者在本地转换也可以(如果用户本地转换格式，此步骤可省略)

    ```sudo apt-get install qemu kernel-package linux-source build-essential```

5. 将 test2.img（假定是 qcow2 格式的镜像），转化为 raw 格式，并放到云硬盘中；也可以直接转化成 raw 格式后拷贝到云服务器；

    ```qemu-img convert -f qcow2 test2.img -p -O raw test_raw.img```

6. 如果镜像的大小小于所创建的云硬盘，使用如下指令修改镜像的大小 (当镜像的大小和云盘一致时，忽略此步骤)；
必须保证raw格式的镜像大小和云硬盘大小一致，之后才能使用dd拷贝镜像到硬盘

    例如：镜像的大小只有 128M ，此时将镜像的大小调整为云硬盘的大小 20G 。 

    ```qemu-img resize test.img +19G```

    ```qemu-img resize test.img +896M```

7. 将 raw 格式的镜像文件拷贝到硬盘中；

    ```dd if=test_raw.img of=/dev/vdc```

    完成之后， lsblk 如果没有显示 vdc 的分区信息，可以使用:

    ```partprobe /dev/vdc```

    更新下硬盘的分区信息；

8. 将云硬盘制作备份；

9. 根据云硬盘备份创建用户自定义镜像。 

![](/compute/vm/intro/_images/capture-image-from-vol-snapshot.png)

创建镜像完成之后，可以在 "计算" - "镜像" - "自有" 中看到刚才创建的镜像。 选择镜像， 并点击 "基于镜像创建云服务器"　可以创建新的云服务器。 


用户也可以自己制作云硬盘中的分区， 并将已有的镜像的分区逐个上传到云硬盘中；之后再安装好grub和引导文件。

