# 文档项目说明
QingCloud 官方文档使用了 [gohugo](https://gohugo.io/getting-started/installing/) 来构建网站，Hugo 是一个静态博客网站生成器，可将 Markdown 格式的文本构建为可发布的静态网站。因此需要在本地安装 Hugo。

# 第一步 安装前置工具 
Git


Hugo(至少 `0.70` ) [gohugo版本](https://github.com/gohugoio/hugo/releases)

## 第二步 安装Node
1.官网下载并本地安装 Node https://nodejs.org/zh-cn/

2.安装项目依赖(项目根路径下)
更新站点 CSS文件需要安装PostCSS，请按照下面命令本地安装PostCSS。
请于站点根目录下运行，windows 在cmd中执行
npm install -D --save autoprefixer
npm install -D --save postcss-cli
```


## 本地调试
1. 执行下面的指令
```
hugo server -w
```
如果无法启动，并得到 "too many open files" 的错误代码，请运行sysctl -w kern.maxfiles=20480指令。
```
hugo -D
```
此命令可以生成项目静态网站，用于发布至服务器

2.通过浏览器输入 url:  http://127.0.0.1:1313/ 预览文档，可以看到与线上文档相同的效果。


## 目录结构说明

/content/zh/category.json内编写目录,可用json编辑器编辑后保存于文件中