---
title: "配置 GPU 云服务器（Linux）"
description: 
draft: false
weight: 30
keyword: 云计算, 青云, QingCloud, 云服务器，GPU云服务器
---

本章节介绍 Linux 系统如何安装 NVIDIA 驱动和 CUDA。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建 GPU 云服务器。

## 操作步骤

### 安装 NVIDIA 驱动

1. 访问 [NVIDIA 驱动下载地址](https://www.nvidia.com/Download/Find.aspx?spm=a2c4g.11186623.0.0.2d45bf6azaWqum&lang=cn)，搜索适用的驱动版本。选择使用的版本，点击**下载**进入下载页面，右键点击**同意并开始下载**，选择**复制链接地址**。

   ![](../../_images/configure_gpu_1.png)

2. 参考[连接 Linux 云服务器](/compute/vm/manual/vm/20_connect_instance/10_third_party/)，连接 GPU 云服务器。

3. 使用步骤 1 中复制的链接地址，执行如下命令下载安装包。

   ```
   wget https://cn.download.nvidia.com/tesla/515.65.01/NVIDIA-Linux-x86_64-515.65.01.run
   ```
4. 执行如下命令安装 gcc，make。
   ```
   sudo apt-get install gcc g++ make linux-headers-$(uname -r)
   ```

5. 执行如下命令，并重启云服务器后生效。
   ```
   sudo systemctl set-default multi-user.target
   ```
6. 执行如下命令，查看 nouveau 驱动。
   ```
   lsmod | grep nouveau 
   ```
   - 若结果为空，则无需处理。
   - 若结果不为空，根据以下步骤进行处理：
     1. 编辑 blacklist.conf 文件。
        ```
        vim /etc/modprobe.d/blacklist.conf 
        ```

     2. 在 blacklist.conf 文件最后加入以下内容，保存并退出。
        ```
        blacklist nouveau
        options nouveau modeset=0
        ```
     3. 重启云服务器。
    
7. 执行如下命令，卸载系统中存在的驱动。
   ```
   sudo apt-get remove nvidia-*
   ```
   > **说明**
   >
   > 若未安装其他驱动可忽略此步骤。

8. 执行如下命令，安装驱动。
   ```
   chmod +x NVIDIA-Linux-x86_64-515.65.01.run 

   ./NVIDIA-Linux-x86_64-515.65.01.run 
   ```
   > **说明**
   >
   > 命令行中，`NVIDIA-Linux-x86_64-515.65.01.run`为下载的驱动。

9. 安装完成后，执行如下命令，查看是否安装成功。
   ```
   nvidia-smi
   ```

### 安装 CUDA

1. 访问 [CUDA 下载地址](https://developer.nvidia.com/cuda-toolkit-archive)，点击对应的版本，选择对应信息，复制安装命令进行下载。

   ![](../../_images/configure_gpu_2.png)

2. 参考[连接 Linux 云服务器](/compute/vm/manual/vm/20_connect_instance/10_third_party/)，连接 GPU 云服务器。

3. 执行步骤 1 中的安装命令。
   ```
   wget https://developer.download.nvidia.com/compute/cuda/11.3.0/local_installers/cuda_11.3.0_465.19.01_linux.run
   ```

4. 执行如下命令配置环境变量。
   ```
   step 1：编辑 ～/.bashrc 文件。
   vim ～/.bashrc

   step 2：在 ～/.bashrc 文件中加入以下内容。
   export PATH=$PATH:/usr/local/cuda/bin
   export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda/lib64
   export LIBRARY_PATH=$LIBRARY_PATH:/usr/local/cuda/lib64

   step 3：执行以下命令使环境变量生效。
   source ～/.bashrc 
   ```

5. 执行如下命令，查看是否安装成功。
   ```
   nvcc -V
   ```