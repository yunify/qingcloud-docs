# QingCloud 新版文档项目说明

QingCloud 官方文档使用了 [Hugo](https://gohugo.io/getting-started/installing/) 来构建网站，Hugo 是一个静态博客网站生成器，可将 Markdown 格式的文本构建为可发布的静态网站。因此需要在本地安装 Hugo。

## 第一步：安装前置工具 

- [Git](https://www.git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)（请熟悉 Git 常用的几条基本命令）
- Hugo (至少 `v0.70` 以上) [请安装 hugo_extended 版本](https://github.com/gohugoio/hugo/releases)
- Windows下需要配置环境变量，打开编辑环境变量-->高级-->环境变量，在“系统变量”下双击“Path”这个变量，点击新建
将你的Git地址和Hugo安装地址黏贴到编辑区域，例如“C:\Users\jobding\Downloads\hugo_extended_0.76.2_Windows-64bit”，点击“确定”保存。

## 第二步：Fork 与 Clone 仓库

请点击右上角 **Fork** 将 qingcloud-docs 仓库 Fork 至自己的　GitHub，然后将自己账号下的 Git 仓库地址 Clone 到本地，如：

```
git clone https://github.com/<YOUR-GITHUB-ID>/qingcloud-docs.git
```


## 第三步：本地调试

1. 进入上一步克隆到本地的 `qingcloud-docs` 文件目录，然后执行下面的命令在本地编译。

```
hugo server -w
```

2. 通过浏览器输入 `http://127.0.0.1:1313/` 预览文档，可以看到与线上文档相同的效果。

> 说明：接下来只需要在 [qingcloud/content/](https://github.com/yunify/qingcloud-docs/tree/master/content) 目录下在本地编辑内容，可参考该目录下 3 个示例目录结构。编辑完成后，在本地使用 git 命令提交，最后提交一个 Pull Request 到上游的 [qingcloud-docs 仓库](https://github.com/yunify/qingcloud-docs)。

## FAQ

如果无法启动，并得到 "too many open files" 的错误代码，请运行 `sysctl -w kern.maxfiles=20480` 命令。


