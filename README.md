# 文档项目说明

QingCloud 官方文档使用了 [gohugo](https://gohugo.io/getting-started/installing/) 来构建网站，Hugo 是一个静态博客网站生成器，可将 Markdown 格式的文本构建为可发布的静态网站。因此需要在本地安装 Hugo。

# 第一步 安装前置工具 

- Git
- Hugo (至少 `v0.70`) [gohugo版本](https://github.com/gohugoio/hugo/releases)
- Node [NodeJS官网](https://nodejs.org/zh-cn/)


## 本地预览调试

1. 进入项目根目录，执行下面的指令：

```
hugo server
```

> 提示：如果无法启动，并得到 "too many open files" 的错误代码，请运行 `sysctl -w kern.maxfiles=20480` 指令。

2.通过浏览器输入 URL :  `http://127.0.0.1:1313/` 预览文档，可以看到与线上文档相同的效果。


## 目录结构说明

`/content/zh/category.json` 内编写目录,可用 `json` 编辑器编辑后保存于文件中。
