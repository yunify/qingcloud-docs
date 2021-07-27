---
title: "重置Windows云服务器密码"
description: test
draft: false

---



## 项目背景

用户在使用过程中，忘记了云服务器密码导致无法登录。

## 方案一

云服务器关机以后，右键云服务器的资源id---更多操作---重置登录密码，重设新的密码即可，这种办法能解决大部分问题。



## 方案二

如果云服务器安装了360安全卫士等软件，可能会将qingcloud-agent进程删除，这样子会导致以上重置密码的方法无效，可以尝试用以下方法。

### 1.进入救援云服务器模式，挂载源云服务器系统盘，进入E盘的Windows\System32目录

###  2.找到osk.exe，如图所示

<img src="../../_images/homer/window reset password_01.png" width="60%" height="60%">

 ![0_1529737241980_12.png](https://community.qingcloud.com/assets/uploads/files/1529737242254-12.png)

###  3.这个文件由于属主不是administrator而是Trustedintaller，所以无法修改，需要把这个文件的属主更改为administrator,更改的步骤如下:

1.  **右键文件—属性—高级—更改—高级—立即查找—administrator—应用—确定**

2.  **此时administrator用户对此文件只有读取和执行的权限，需要添加修改的权限**

3.  **右键文件—属性—高级—添加—选择主体—高级—立即查找—administrator—添加权限—应用—确定**

4.  **这个时候就可以重命名或者删除，然后在这个目录里找到cmd.exe复制一份，并重命名为osk，如截图所示**

   <img src="../../_images/homer/window reset password_02.png" width="60%" height="60%">

   <img src="../../_images/homer/window reset password_03.png" width="60%" height="60%">

   <img src="../../_images/homer/window reset password_04.png" width="60%" height="60%">

   ### 4.以管理员身份运行cmd命令，并输入以下三行代码

   ```
   bcdedit /store d:\boot\bcd /set {bootmgr} device partition=e:
   bcdedit /store d:\boot\bcd /set {default} device partition=e:
   bcdedit /store d:\boot\bcd /set {default} osdevice partition=e:
   ```

   ###  5.取消救援模式，并开机

   ###  6.点击开机界面的屏幕键盘，此时会弹出cmd命令行的界面，可以通过cmd命令来修改密码

   修改密码命令

   ```
    net user administrator Lh888888 （Lh888888是密码）
   ```

   <img src="../../_images/homer/window reset password_05.png" width="60%" height="60%">

   <img src="../../_images/homer/window reset password_06.png" width="60%" height="60%">

