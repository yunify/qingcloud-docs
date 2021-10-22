---
title: "JavaScript SDK"
---


QingStor 对象存储的 JavaScript SDK 已在 GitHub 开源，本文为简要使用文档。更多详细信息请参见 [GitHub 项目](https://github.com/yunify/qingstor-sdk-js)。


## 安装

QingStor 对象存储提供若干安装方式，用户可根据需求进行选用。

**方式一：** 使用 npm 安装 SDK：

```bash
npm install qingstor-sdk
```

**方式二：** 使用 [yarn](https://yarnpkg.com) 安装 SDK：

```bash
yarn add qingstor-sdk
```

**方式三：** 也可以请前往 [Release](https://github.com/yunify/qingstor-sdk-js/releases) 页面下载打包好的 SDK 文件，然后在 HTML 中加上如下格式的 Script 标签引入 SDK，QingStor 对象存储建议用户在开发时使用未压缩的版本，方便调试，在生产环境中使用 `qingstor-sdk.min.js` 版本。

```html
<script src="https://example.com/path/to/qingstor-sdk.js"></script>
<script>
  // reference sdk by a global variable: qingstor_sdk
  console.log(qingstor_sdk.version);
  console.log(qingstor_sdk.QingStor);
  console.log(qingstor_sdk.Config);
</script>
```


## 快速开始

QingStor SDK 使用 ES6 的语法编写，所以使用前请确保你配置了合适的构建环境。

### 浏览器环境

如果您是在浏览器中使用 SDK，推荐使用 [Babel](https://babeljs.io) 对代码进行编译，使用 [Webpack](https://webpack.js.org) 打包代码。详细操作步骤如下：

1. 安装 Babel:

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

2. 安装完成之后，在项目的根目录下新建 `babel.config.js` 文件，其内容如下:

```javascript
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

3. 安装 webpack:

```bash
npm install --save-dev webpack webpack-cli
```

4. 安装完成之后，在项目的根目录下新建 `webpack.config.js` 文件，其内容如下:

```javascript
module.exports = {
  mode: 'development',

  // 项目的启动文件, 你可以在这里 import { QingStor } from 'qingstor-sdk'
  entry: './index.js',

  output: {
    filename: 'dist.js',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```

5. 在 终端输入如下命令行进行开发，关于 Babel 和 Webpack 配置与使用的更多细节，请参考其官方文档。

```javascript
./node_module/.bin/webpack -w
```


### Node 环境

如果您是在 Node 环境中使用 SDK，推荐使用 [esm](https://github.com/standard-things/esm) 来作为 module loader。操作步骤如下：

1. 安装 esm:

```bash
npm install esm
```

2. 使用 esm:

```bash
node -r esm index.js
```

### 请求签名

发往 QingStor 对象存储的请求需要使用 Access Key 和 Secret Key 对请求签名，请前往 [青云控制台](https://console.qingcloud.com/access_keys/) 创建和下载。下载到的密钥文件格式如下，请妥善保存你的密钥:

``` plain_text
access_key_id: 'ACCESS_KEY_ID_EXAMPLE'
secret_access_key: 'SECRET_ACCESS_KEY_EXAMPLE'
```

如果在 Node.js 环境中使用 SDK，在初始化配置 Config 对象时，可以直接采用如下方式:

```javascript
import { Config } from 'qingstor-sdk';

const config = new Config({
  access_key_id: 'ACCESS_KEY_ID_EXAMPLE',
  secret_access_key: 'SECRET_ACCESS_KEY_EXAMPLE',
});
```

如果在浏览器 Browser 环境中使用 SDK，QingStor 对象存储强烈建议用户部署一个签名服务器，专门用来对请求做签名，这样的好处是不会将 `access_key_id` 和 `secret_access_key` 暴露在客户端。

签名服务器的代码非常简单，请参考 [Express 示例](https://github.com/yunify/qingstor-sdk-js/blob/master/docs/examples/signaure_server.js)。签名服务器部署好之后，请采用如下方式初始化 Config 对象:

```javascript
import { Config } from 'qingstor-sdk';

const config = new Config({
  signature_server: 'https://your.signserver.com/some_path',
});
```

**备注：**
如果签名服务器的域名和用户当前所在域名不同，需要配置相应的 [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 规则。

### 获取 Bucket 列表

在项目中根目录下新建一个 `index.js` 文件，复制以下内容到文件中:

```javascript
// index.js

import { QingStor, Config } from 'qingstor-sdk';

// 修改这里的 ACCESS_KEY_ID_EXAMPLE 和 SECRET_ACCESS_KEY_EXAMPLE 为前
// 一步中得到的 access_key_id 和 secret_access_key
const config = new Config({
  access_key_id: 'ACCESS_KEY_ID_EXAMPLE',
  secret_access_key: 'SECRET_ACCESS_KEY_EXAMPLE',
});
// or
const config = new Config({
  signature_server: 'https://your.signserver.com/some_path',
});

const qingstor = new QingStor(config);

function listBuckets() {
  qingstor.listBuckets().then((response) => {
    console.log(response.data);
    // 得到如下格式的结果
    // {
    //   "count": 2,
    //   "buckets": [
    //     {
    //       "name": "mybucket",
    //       "location": "pek3a",
    //       "url": "https://mybucket.pek3a.qingstor.com",
    //       "created": "2015-07-11T04:45:57Z"
    //     },
    //     {
    //       "name": "myphotos",
    //       "location": "pek3a",
    //       "url": "https://myphotos.pek3a.qingstor.com",
    //       "created": "2015-07-12T09:40:32Z"
    //     }
    //   ]
    // }
  });
}

listBuckets();

```

### 新建 Bucket

```javascript

import { QingStor, Config } from 'qingstor-sdk';

// 修改这里的 ACCESS_KEY_ID_EXAMPLE 和 SECRET_ACCESS_KEY_EXAMPLE 为前
// 一步中得到的 access_key_id 和 secret_access_key
const config = new Config({
  access_key_id: 'ACCESS_KEY_ID_EXAMPLE',
  secret_access_key: 'SECRET_ACCESS_KEY_EXAMPLE',
});
// or
const config = new Config({
  signature_server: 'https://your.signserver.com/some_path',
});

const qingstor = new QingStor(config);

function createBucket() {
  qingstor.Bucket('example-bucket', 'sh1a').put().then(({ status }) => {
    // bucket 创建成功，status 应该为 201
    console.log(status);
  }).catch((error) => {
    // bucket 创建失败，打印返回结果
    console.log(error.response.data);
  });
}

createBucket();

```

### 获取 Bucket 中的文件列表

```javascript

import { QingStor, Config } from 'qingstor-sdk';

// 修改这里的 ACCESS_KEY_ID_EXAMPLE 和 SECRET_ACCESS_KEY_EXAMPLE 为前
// 一步中得到的 access_key_id 和 secret_access_key
const config = new Config({
  access_key_id: 'ACCESS_KEY_ID_EXAMPLE',
  secret_access_key: 'SECRET_ACCESS_KEY_EXAMPLE',
});
// or
const config = new Config({
  signature_server: 'https://your.signserver.com/some_path',
});

const bucket = new QingStor(config).Bucket('example-bucket', 'sh1a');

function listObjects() {
  // list objects under perfix '/images'
  bucket.listObjects({
    limit: 10,
    prefix: '/images',
  }).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log(error.response.data);
  });
}

listObjects();

```

## 请求返回格式说明

QingStor 对象存储的 SDK 使用 [axios](https://github.com/axios/axios) 作为 HTTP 客户端，所有请求的返回都是一个 Promise。axios 的 Response 结构如下:

```javascript
// copied from https://github.com/axios/axios/blob/master/README.md
{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the headers that the server responded with
  // All header names are lower cased
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  request: {}
}
```
