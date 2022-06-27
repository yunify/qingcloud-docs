---
title: "基础操作"
date: 2021-07-14T10:08:56+09:00
description: 本小节主要介绍 Bucket 基础操作。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
draft: false
weight: 1
---

Bucket 的文件和文件夹按字母序混合排列。控制台可查看文件的名称、类型、大小等信息，并按文件类型展示对应的图标。与 Bucket 列表页相同，文件也可以选择列表视图或文件视图。

在 Bucket 列表页面，点击 Bucket 名，进入 Bucket 文件标签页：
![](/storage/object-storage/_images/object_main.png)


在 Bucket 文件标签页可以查看、创建和删除文件夹，上传、下载、删除文件，也可以将公开读权限的 Bucket 内文件的 URL 分享供其他用户下载。详细操作如下：

## 创建文件夹

便于文件管理，QingStor 对象存储支持用户在 Bucket 下自行创建文件夹。具体操作如下：

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件 > +新文件夹**：

 ![](/storage/object-storage/_images/object_create_dir1.png)

3. 弹出对话框，根据提示信息，输入新建文件夹名称，点击 **提交**：

 ![](/storage/object-storage/_images/object_create_dir2.png)

4. 成功创建的文件夹，列表显示：

 ![](/storage/object-storage/_images/object_create_dir3.png)


## 上传文件

用户可以在控制台上传文件至 Bucket 的根目录或其他文件夹。上传文件时可以单选或多选文件，每次选择文件限制在 10 个以内。若待上传的文件名已经存在，上传行为仍然继续，并覆盖已存在的文件。

上传文件操作如下：

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件 > 上传文件**：

 ![](/storage/object-storage/_images/object_upload_file1.png)

3. 弹出对话框内，根据提示信息，上传文件，上传完成后，点击右上角，关闭对话框：

 ![](/storage/object-storage/_images/object_upload_file2.png)

 **说明：**
   - 控制台限制了上传单个文件的大小，超过 1GB 的文件，建议使用 API 或 SDK 进行上传。
   - 上传中的文件显示上传的速度、进度等信息。
   - 在上传完成之前，用户可随时取消一个上传中的文件。
   - 文件上传完成之后，上传记录在列表中保持一段时间后自动删除。
   - 文件上传的过程中，可以关闭上传窗口，再次点击 **上传文件** 时，可查看当前文件上传的进度。


4. 成功上传的文件，列表显示：

 ![](/storage/object-storage/_images/object_upload_file3.png)


## 下载文件

用户可以在控制台下载文件。

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件**，选择待下载的文件后，点击 **更多操作 > 下载**，或点击下载图标：

 ![](/storage/object-storage/_images/object_down_file1.png)

3. 下载后的文件，默认保存在浏览器设置的下载保存目录。

## 检索文件

QingStor 对象存储的控制台，支持用户根据文件名对文件进行检索。用户可在检索框内，输入文件全名或文件前缀，满足条件的文件将列表显示。详细操作如下：

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，在检索框内，输入待检索的对象名前缀后，点击回车：

 ![](/storage/object-storage/_images/object_search1.png)

3. 满足条件的检索结果，列表显示：

 ![](/storage/object-storage/_images/object_search2.png)

4. 也可在检索框内，输入待检索的对象名全名后，点击回车：

 ![](/storage/object-storage/_images/object_search3.png)


## 查看文件详情

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件后，击查看详情图标：

 ![](/storage/object-storage/_images/object_file_info1.png)

3. 弹出对话框，详细内容如下图：

 ![](/storage/object-storage/_images/object_file_info2.png)

## 获取文件 URL 链接

若 Bucket 公开了读权限，用户可从控制台获取相应文件的 URL，并将其分享给其他人。详细操作如下：

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件后，点击 **查看文件地址** 图标：

 ![](/storage/object-storage/_images/object_file_url1.png)

3. 在弹出的对话框内，根据需求，可以选择该 URL 的过期时间，并点击 **复制链接** 按钮：

 ![](/storage/object-storage/_images/object_file_url2.png)

 **说明：**
   - 过期时长，是指该链接的有效时长。
   - 过期时长默认为 5 分钟，用户可根据需求进行修改，最长为 1 周。

4. 用户可根据需求，将已复制的 URL 链接分享给其他人。


## 更多操作

QingStor 对象存储，支持的文件操作包括：另存为，复制剪切，重命名等，详细内容可通过点击文件右键查看。

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件后，点击 **右键** 查看相关操作：

 ![](/storage/object-storage/_images/object_file_opt1.png)

3. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件后，也可点击 **更多操作** 来查看支持的相关操作：

 ![](/storage/object-storage/_images/object_file_opt2.png)

 **说明：**
   - 复制剪切操作，支持单个文件，也支持同时操作多个文件。
   - 选中待操作的文件后，可将其移动或复制至目标 Bucket 或者文件夹下。目标 Bucket 也可以是当前 Bucket。
   - 重命名操作，新的文件名由字母、数字或中文等字符组成，且不能以斜杠 `/` 开头，URL 编码后字符串长度须在 1 ～ 1023 之间。


## 删除文件

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件后，点击 **右键 > 删除** ：

 ![](/storage/object-storage/_images/object_file_del1.png)

3. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件后，也可点击 **更多操作 > 删除** 来删除文件：

 ![](/storage/object-storage/_images/object_file_del2.png)

4. 弹出对话框，确认操作无误后，点击 **删除** 按钮：

 ![](/storage/object-storage/_images/object_file_del3.png)

 **说明：**
   - 删除文件后无法恢复，因此需要谨慎执行该操作。
   - 支持批量删除文件，选择待删除待文件时，可一次选择多个文件，点击删除操作。

## 删除文件夹

删除文件夹时，系统会将该文件夹内文件一同删除。

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件夹后，点击 **右键 > 删除** ：

 ![](/storage/object-storage/_images/object_dir_del1.png)

3. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件夹后，也可点击 **更多操作 > 删除** 来删除文件：

 ![](/storage/object-storage/_images/object_dir_del2.png)

4. 弹出对话框，确认操作无误后，点击 **删除** 按钮：

 ![](/storage/object-storage/_images/object_dir_del3.png)

 **说明：**
   - 删除文件后无法恢复，因此需要谨慎执行该操作。
   - 支持批量删除文件，选择待删除待文件时，可一次选择多个文件，点击删除操作。
   - 删除文件对话框内，有提示信息告知用户待删除的文件数量，确认无误后，点击删除操作。
