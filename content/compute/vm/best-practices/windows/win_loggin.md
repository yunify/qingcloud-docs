---

title: "Windows云服务器配置多用户同时登录"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

## Windows云服务器配置多用户同时登录

一、在键盘上按Win+R键(也可以在开始菜单右键然后选择运行)，在运行的输入框里输入"gpedit.msc"命令，然后点击确定

![cmd_gpedit.msc](../../_images/cmd_gpedit.msc.jpg)

二、在“计算机组策略“中依次展开 计算机配置 ---> 管理模板  ---> Windows组件 ---> 然后在右边的菜单中选择远程桌面服务，双击打开

![mstsc_service](../../_images/mstsc_service.jpg)

三、在远程桌面服务界面双击打开 “远程桌面会话云服务器”

![mstsc_socket](../../_images/mstsc_socket.jpg)

四、在“远程桌面会话云服务器”界面中双击打开“连接”

![mstsc_connection](../../_images/mstsc_connection.jpg)

五、在“连接”界面中双击打开“将远程桌面服务用户限制到单独的远程桌面服务会话”

![mstsc_limit](../../_images/mstsc_limit.jpg)

六、在“将远程桌面服务用户限制到单独的远程桌面服务会话”界面中选择“已禁用”然后点击确定

![mstsc_disabled](../../_images/mstsc_disabled.jpg)

七、然后返回”连接“界面，在“连接”界面中双击打开“限制连接的数量”

![mstsc_connection_num](../../_images/mstsc_connection_num.jpg)

八、在“限制连接的数量”界面中；选择“已启用” ---> 然后在选项里面“允许的RD最大连接数”里面选择你能接受的最大的同时远程的用户数，我这里选择的是3，也就是能支持同时3个远程桌面管理，然后点击确定即可

![mstsc_addcnnum](../../_images/mstsc_addcnnum.jpg)

九、用多台云服务器同时远程该云服务器，验证配置是否成功