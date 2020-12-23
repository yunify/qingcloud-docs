---
title: "自定义监控上报数据规范"
description: test
draft: false
---

目前上报自定义监控数据通过cloudsat中UploadMonitorData接口进行上报，需遵循自定义监控上报url构造规范和接口数据规范。用户可以通过UploadMonitorData接口上报自定义的数据，然后进行监控数据分析和告警。


### UploadMonitorData接口url构造规范

上传数据UploadMonitorData接口说明，接口采用post方法发送请求，请求url需要构造，构造方法如下：

**构造url方法**：构造前url + "?" + 构造验证请求串

**构造前url**:
```
http://cloudsat.qingcloud.com/api/:zone/v1/custom/UploadMonitorData
```
注：构造完成之后请求url即最终UploadMonitorData接口请求url，url里面:zone，请根据具体分区信息填写，如上海1区sh1，文中其他地方类似。

**构造验证请求串示例**：构造验证请求串方法详见下面说明(下方为示例，请自行参照后文构造验证请求串方法进行构造)
```
access_key_id=CCDJRDKCCKZYTEXANZJD&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-12-23T13%3A32%3A34Z&version=1&zone=sh1&signature=sOdokWwvYJ80mM%2FxYbBTsgTgQl3iu%2F2WDXWjgKFPNNs%3D

```
注：这部分请根据实际参数进行构造

由于上面构造前url上传监控数据需要对请求进行验证，这里采用类似[青云API 请求中签名 ( signature )]( /development_docs/api/signature/) 的生成方法，构造验证请求串，拼接在上面构造前url后面。由于需要去iaas对用户信息进行确认，所以这里选择DescribeUsers这个action去构造签名信息。

**最终构造完成之后请求url示例为**：
```
http://cloudsat.qingcloud.com/api/:zone/v1/custom/UploadMonitorData?access_key_id=CCDJRDKCCKZYTEXANZJD&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-12-23T13%3A32%3A34Z&version=1&zone=sh1&signature=sOdokWwvYJ80mM%2FxYbBTsgTgQl3iu%2F2WDXWjgKFPNNs%3D

```


下面为在上海1区，完成构建验证请求串之后拼接生成的一个最终api请求url实例，请根据实际分区信息和构造的验证串拼接构造相应的最终api请求url

```
http://cloudsat.qingcloud.com/api/sh1/v1/custom/UploadMonitorData?access_key_id=CCDJRDKCCKZYTEXANZJD&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-12-23T13%3A32%3A34Z&version=1&zone=sh1&signature=sOdokWwvYJ80mM%2FxYbBTsgTgQl3iu%2F2WDXWjgKFPNNs%3D
```

### UploadMonitorData接口数据规范

**描述**：上传监控数据

**请求类型**：POST

**请求url**：
```
http://cloudsat.qingcloud.com/api/:zone/v1/custom/UploadMonitorData?access_key_id=QEJMCFROGCAPHUOAJMRN&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-10-13T10%3A28%3A33Z&version=1&zone=test&signature=SO9ZufFb69Om21bK%2BH7Gs6f%2FuuDljHh41STgIX%3D
```

请求body格式例如：
```
{
    "user_id": "usr-123456",
    "namespace": "namespace-1",
    "data": [
      {
          "source": "test",
          "user_id": "usr-KJ8DrfQT",
          "tags": "role=master,interface=eth10",
          "group_id": "group10",
          "resource_id": "i-instance-10" ,
          "resource_name": "name10",
          "resource_type": "instance",
          "root_user_id": "usr-KJ8DrfQ",
          "meter": "disk_ri'",
          "region": "sh1",
          "value": 99,
          "value_type": "percent",
           "time_stamp":"2020-11-03T09:58:44Z"
         },{
          "source": "test",
          "user_id": "usr-KJ8DrfQT",
          "tags": "role=master,interface=eth10",
          "group_id": "group10" ,
          "resource_id": "i-instance-10",
          "resource_name": "name10" ,
          "resource_type": "instance",
          "root_user_id": "usr-KJ8DrfQ",
           "meter": "diskio",
          "region": "sh1",
          "value": 88,
          "value_type": "percent",
          "time_stamp":"2020-11-03T09:58:44Z"
         }
  ]
}
```

**字段说明** 

<style>
table th:first-of-type {
    width: 3cm;
}
table th:nth-of-type(2) {
    width: 150pt;
}
table th:nth-of-type(3) {
    width: 8em;
}
</style>
|字段	|类型	|举例| 必填 | 说明|
| :-: | :-: | :-: | :-: | :-:|
|namespace|	string	|namespace-1|	是|	命名空间|
|region	|string|	sh1|	是	|region id|
|source|	string|	custom|	是|	监控数据的来源|
|group_id|	string|	group_1|	否|	监控数据的group，或者分组标记|
|resource_id|	string|	i-12345678|	是|	监控数据关联的资源id|
|resource_name|	string|	roger-test|	否|	监控数据关联的资源名称|
|resource_type|	string|	instance|	是|	资源类型|
|user_id|	string|	usr-123456|	是|	监控资源资源对应用户的id|
|root_user_id|	string|	usr-123456|	否|	主账户id|
|meter|	string|	cpu|	是|	监控指标|
|value_type|	string|	raw|	是|	指标值的类型，例如raw(原格式)percent(百分比)|
|value|	int|	80|	是|	监控的数据，整型的数据|
|time_stamp	|string|	2019-12-16T11:14:32Z|	是|	监控数据时间(UTC)|
|tags|	string|	role=master,cln-node=node-1,interface=eth0|	否|	数据的tags，用于归类,都是key，value的形式，用于like查询，理论上存储的key都是按层级往后排，比如资源的下一级是role，role的下一级是节点，节点下有网卡。|


返回结果

```
{
    "data": {
        "upload_count": 2
    },
    "ret_code": 0
}
```

数据格式例如：
```
{
    "user_id": "usr-12345678",
    "namespace": "ns1",
    "data": [
     {
        "region": "sh1",
        "source": "custom",
        "user_id": "testuser",
        "group_id": "group_1",
        "resource_id": "resource_id1",
        "resource_name": "resource_name2",
        "resource_type": "instance",
        "root_user_id": "root_user",
        "meter": "cpu",
        "value": "100",
        "value_type": "raw",
        "tags":"role=master,interface=eth0",
        "time_stamp": "2019-12-16T11:14:32Z"
    },
    {
        "region": "sh1",
        "source": "custom",
        "user_id": "testuser",
        "group_id": "group_2",
        "resource_id": "resource_id1",
        "resource_name": "resource_name2",
        "resource_type": "instance",
        "root_user_id": "root_user",
        "meter": "memory",
        "value": "90",
        "value_type": "raw",
        "tags":"role=master,interface=eth0",
        "time_stamp": "2019-12-16T11:14:32Z"
    }
  ]
}
```

### 构造请求串方法

您需要先在控制台创建 API密钥 ，获得 accesss_key_id 和 secret_access_key，这里我们假设，

```
access_key_id = 'QYACCESSKEYIDEXAMPLE'
secret_access_key = 'SECRETACCESSKEY'
```

例如我们的请求参数如下:
```
{
  "zone":"sh1",
  "signature_version":1,
  "signature_method":"HmacSHA256",
  "version":1,
  "access_key_id":"QYACCESSKEYIDEXAMPLE",
  "action":"DescribeUsers",
  "time_stamp":"2013-08-27T14:30:10Z"
}
```
注解

你可以使用上述的 AccessKey 和 Request 调试你的代码， 当得到跟后面一致的签名结果后(即表示你的代码是正确的)， 可再换为你自己的 AccessKey 和其他 API 请求。

签名步骤

(1) **按参数名进行升序排列**

排序后的参数为:
```
{
  "access_key_id":"QYACCESSKEYIDEXAMPLE",
  "action":"DescribeUsers",
  "signature_method":"HmacSHA256",
  "signature_version":1,
  "time_stamp":"2013-08-27T14:30:10Z",
  "version":1,
  "zone":"sh1"
}
```
(2) **对参数名称和参数值进行URL编码**

编码后的请求串为:

```
{
  "access_key_id":"QYACCESSKEYIDEXAMPLE",
  "action":"DescribeUsers",
  "signature_method":"HmacSHA256",
  "signature_version":1,
  "time_stamp":"2013-08-27T14%3A30%3A10Z",
  "version":1,
  "zone":"sh1"
}
```
警告
编码时空格要转换成 “%20” , 而不是 “+”警告

警告

转码部分的字符要用大写，如 ”:” 应转成 “%3A”，而不是 “%3a”

(3) **构造URL请求**

参数名和参数值之间用 “=” 号连接，参数和参数之间用 “＆” 号连接，构造后的URL请求为
```
access_key_id=QYACCESSKEYIDEXAMPLE&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2013-08-27T14%3A30%3A10Z&version=1&zone=sh1
```
(4) **构造被签名串**

被签名串的构造规则为: 被签名串 = HTTP请求方式 + “\n” + uri + “\n” + url 请求串

警告

“\n” 是换行符，不要将 “\” 转义。也就是说，不要用 “\n” ，有些语言，比如 php 和 ruby ，请用 “\n” , 而不是 ‘\n’

假设 HTTP 请求方法为 GET 请求的uri路径为 “/iaas/” , 则被签名串为
```
GET\n/iaas/\naccess_key_id=QYACCESSKEYIDEXAMPLE&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2013-08-27T14%3A30%3A10Z&version=1&zone=sh1
```

(5) **计算签名**

计算被签名串的签名 signature。

将API密钥的私钥 ( secret_access_key ) 作为key，生成被签名串的 HMAC-SHA256 或者 HMAC-SHA1 签名，更多信息可参见 RFC2104
将签名进行 Base64 编码
将 Base64 编码后的结果进行 URL 编码

警告

当 Base64 编码后存在空格时，不要对空格进行 URL 编码，而要直接将空格转为 “+”
以 Python (版本 2.7) 代码为例 (其他语言类似，需要使用 sha256 + base64 编码，最后需要再进行 URL 编码，URL 编码时需要将原有的空格 ” ” 转为 “+”)

```
import base64
import hmac
import urllib
from hashlib import sha256
  
  
# 前面生成的被签名串
string_to_sign = 'GET\n/iaas/\naccess_key_id=QYACCESSKEYIDEXAMPLE&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2013-08-27T14%3A30%3A10Z&version=1&zone=sh1'
h = hmac.new(secret_access_key, digestmod=sha256)
h.update(string_to_sign)
sign = base64.b64encode(h.digest()).strip()
signature = urllib.quote_plus(sign)
```

(6) **添加签名**

将签名参数附在原有请求串的最后面。 最终的HTTP请求串为(为了查看方便，我们人为地将参数之间用回车分隔开)

```
access_key_id=QYACCESSKEYIDEXAMPLE
&action=DescribeUsers
&signature_method=HmacSHA256
&signature_version=1
&time_stamp=2013-08-27T14%3A30%3A10Z
&version=1
&zone=sh1
&signature=bOQMI8wJ4ikFnadNXc%2BpnVMcUyf83C7b9JO5%2FAvkGyk%3D
```

完整的请求串为(为了查看方便，我们人为地将参数之间用回车分隔开)

```
access_key_id=QYACCESSKEYIDEXAMPLE
&action=DescribeUsers
&signature_method=HmacSHA256
&signature_version=1
&time_stamp=2013-08-27T14%3A30%3A10Z
&version=1
&zone=sh1
&signature=bOQMI8wJ4ikFnadNXc%2BpnVMcUyf83C7b9JO5%2FAvkGyk%3D
```

### 示例代码

**构造验证请求串代码示例（以golang语言为例，其他语言类似）**

请根据实际数据替换AccessKeyID、SecretAccessKey、Zone等信息

```
package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/url"
	"sort"
	"strconv"
	"strings"
	"time"
)

type verifyInfo struct {
	httpMothod      string
	path            string
	secretAccessKey string
	describeUsers          *describeUsers
}

type describeUsers struct {
	AccessKeyID      string `json:"access_key_id"`
	Action           string `json:"action"`
	SignatureMethod  string `json:"signature_method"`
	SignatureVersion int    `json:"signature_version"`
	Version          int    `json:"version"`
	Zone             string `json:"zone"`
	TimeStamp        string `json:"time_stamp"`
}

func hmacSha256(data string, secret string) []byte {
	h := hmac.New(sha256.New, []byte(secret))
	h.Write([]byte(data))
	return h.Sum(nil)
}

func formatParams(v interface{}) (map[string]interface{}, error) {
	paramMap := make(map[string]interface{})
	jsonBuf, err := json.Marshal(v)
	if err != nil {
		return nil, err
	}
	err = json.Unmarshal(jsonBuf, &paramMap)
	if err != nil {
		return nil, err
	}
	return paramMap, nil
}

func sortParams(params map[string]interface{}) string {
	var keys []string
	for k := range params {
		keys = append(keys, k)
	}
	sort.Strings(keys)
	var parts []string
	for _, key := range keys {
		value := url.QueryEscape(strVal(params[key]))
		value = strings.Replace(strings.Replace(value, ":", "%3A", -1), " ", "%20", -1)
		parts = append(parts, key+"="+value)
	}
	return strings.Join(parts, "&")
}

func constructSignature(httpMothod, reqUrl, requestStr, key string) string {
	signaturePre := httpMothod + "\n" + reqUrl + "\n" + requestStr
	hmacShaStr := hmacSha256(signaturePre, key)
	base64Str := base64.StdEncoding.EncodeToString(hmacShaStr)
	signature := strings.TrimSpace(base64Str)
	signature = strings.Replace(signature, " ", "+", -1)
	signature = url.QueryEscape(signature)
	return signature
}

func strVal(value interface{}) string {
	var key string
	if value == nil {
		return key
	}
	switch value.(type) {
	case int:
		it := value.(int)
		key = strconv.Itoa(it)
	case string:
		key = value.(string)
	default:
		newValue, _ := json.Marshal(value)
		key = string(newValue)
	}
	return key
}

func (v *verifyInfo) buildVerifyStr() (string, error) {
	params, err := formatParams(v.describeUsers)
	if err != nil {
		return "", err
	}
	sortParams := sortParams(params)
	signature := constructSignature(v.httpMothod, v.path, sortParams, v.secretAccessKey)
	rsqParams := sortParams + "&signature=" + signature
	return rsqParams, nil
}


func main() {
	vi := &verifyInfo{
		httpMothod:      "GET",
		path:            "/iaas/",
		secretAccessKey: "SECRETACCESSKEY",
		describeUsers: &describeUsers{
			AccessKeyID:      "QYACCESSKEYIDEXAMPLE",
			Action:           "DescribeUsers",
			SignatureMethod:  "HmacSHA256",
			SignatureVersion: 1,
			Version:          1,
			Zone:             "sh1",
			TimeStamp:        time.Now().Format("2006-01-02T15:04:05Z"),
		},
	}

	result, _ := vi.buildVerifyStr()
	fmt.Println(result)
}

```

**验证所构造的验证请求串是否正确**

使用自己构造的验证请求串替换下面代码中代码中result，执行下面代码。打印结果为1,验证请求串构造错误；打印结果为0，验证请求串构造正确。

```
type successRespJson struct {
	Message interface{} `json:"message,required"`
	RetCode int         `json:"ret_code,required"`
}

func Verify(url string) int {
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return 1
	}
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true, Renegotiation: tls.RenegotiateOnceAsClient},
	}
	cli := http.Client{
		Transport:     tr,
		CheckRedirect: nil,
		Jar:           nil,
		Timeout:       0,
	}
	response, _:= cli.Do(req)
	defer response.Body.Close()
	body, _:= ioutil.ReadAll(response.Body)
	var vr successRespJson
	if response.StatusCode == http.StatusOK {
		if err := json.Unmarshal(body, &vr); err != nil {
			return 1
		}
	}
	return vr.RetCode
}

func main() {
	result := "access_key_id=CCDJRDKCCKZYTEXANZJD&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-12-23T14%3A03%3A44Z&version=1&zone=sh1&signature=d6eMFDgO3E6wBqbbn2AydX%2BxQws7iD%2BtSgfGF6Lq7Uo%3D"
	url := "https://api.qingcloud.com/iaas/" + "?" + result
	fmt.Println(Verify(url))
}
```

**上传自定义数据代码示例**

上传自定义数据需要预先在cloudsat自定义监控中创建命名空间和监控配置，并根据实际情况替换下面代码中一些数据如UserId、Namespace、Namespace、Region等。

```
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"strconv"
	"time"
)

type monitorData struct {
	UserId    string  `json:"user_id"`
	Namespace string  `json:"namespace"`
	Data      []meters `json:"data"`
}

type meters struct {
	Source       string `json:"source"`
	UserId       string `json:"user_id"`
	Tags         string `json:"tags"`
	GroupId      string `json:"group_id"`
	ResourceId   string `json:"resource_id"`
	ResourceName string `json:"resource_name"`
	ResourceType string `json:"resource_type"`
	RootUserId   string `json:"root_user_id"`
	Meter        string `json:"meter"`
	Region       string `json:"region"`
	Value        int    `json:"value"`
	ValueType    string `json:"value_type"`
	TimeStamp    string `json:"time_stamp"`
}

type date struct {
	UploadCount int `json:"upload_count"`
}

type ret struct {
	Data date `json:"data"`
	RetCode int `json:"ret_code"`
}


var client = http.Client{
	Timeout: 10 * time.Second,
}

func HttpPostJson(url string, data interface{}, result interface{}) error {
	buf := bytes.NewBuffer(nil)
	encoder := json.NewEncoder(buf)
	if err := encoder.Encode(data); err != nil {
		return err
	}

	request, err := http.NewRequest(http.MethodPost, url, buf)
	if err != nil {
		return err
	}

	request.Header.Add("Content-Type", "application/json")
	request.Header.Add("Content-Type", "charset=UTF-8")
	response, err := client.Do(request)
	if err != nil {
		return err
	}
	defer response.Body.Close()

	decoder := json.NewDecoder(response.Body)
	if err = decoder.Decode(&result); err != nil {
		return err
	}
	fmt.Println(result)
	return nil
}


func main() {

    for {
	    timeStamp := time.Now().UTC().Format("2006-01-02T15:04:05Z")
		rand.Seed(time.Now().UnixNano())
		flag := strconv.Itoa(rand.Intn(16))
		p := monitorData{
			UserId: "usr-12345678",
			Namespace: "cloudsat-test",
			Data: []meters{
				{
					Source: "dylan-test",
					UserId: "usr-12345678",
					Tags: "role=master,interface=eth10",
					GroupId: "group1",
					ResourceId: "i-instance-"+flag ,
					ResourceName: "name"+flag,
					ResourceType: "instance",
					RootUserId: "usr-12345678",
					Meter: "cpu",
					Region: "sh1",
					Value: rand.Intn(100),
					ValueType: "percent",
					TimeStamp:timeStamp,
				},{
					Source: "dylan-test",
					UserId: "usr-12345678",
					Tags: "role=master,interface=eth10",
					GroupId: "group1" ,
					ResourceId: "i-instance-"+flag ,
					ResourceName: "name"+flag,
					ResourceType: "instance",
					RootUserId: "usr-12345678",
					Meter: "memory",
					Region: "sh1",
					Value: rand.Intn(100),
					ValueType: "percent",
					TimeStamp:timeStamp,
				},
			},
		}
		var r ret

		url := `http://cloudsat.qingcloud.com/api/sh1/v1/custom/UploadMonitorData?access_key_id=CCDJRDKCCKZYTEXANZJD&action=DescribeUsers&signature_method=HmacSHA256&signature_version=1&time_stamp=2020-12-23T09%3A52%3A10Z&version=1&zone=sh1&signature=vorfODyQzKD0v4En7y5mdwkvUe4OZGQcDdQU5xBSjio%3D`
		err := HttpPostJson(url,p,r)
		if err != nil {
			fmt.Println(err)
		}
		time.Sleep(time.Duration(1)*time.Second)
	}

}

```
