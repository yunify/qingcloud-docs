---
title: "用户计费API"
description: 
draft: false
---

## NBCreatePrdOrder

### 说明：

【创建Package订单】-Package订单支持打包购买多种产品的多个实例.

### 具体业务逻辑：

1. 接入系统的客户传入要订购的产品信息，包括要订购的产品ID，使用的定价的方案，以及对应的产品的订购参数信息。 
2. 创建Package订单。prd_order
3. 创建产品实例。 prod_instance
4. 创建产品实例订阅。subscription
5. 创建产品实例的计费项的订阅。subs_component
6. 对于计费模式不同的计费项，按不同的逻辑处理bill和billingjob
	- 如果是时间包的计费项，按时间包 不走qingjob， 生成该计费项的未支付的bill。
	- 如果是时间量的计费项，按时间量是预扣费，则生成第一个小时的预扣金额的未支付状态的bill，然后生成billing_job.
	- 如果是资源量的计费项，按资源量是后扣费，不生成账单，生成billing_job. 
7. 根据bills生成对应的每次合并支付的子订单（消费订单）。
	- 新购订单时，该笔Package订单下的按不同的产品类型（product）下的所有的【1.按时间包的计费项生成的bills】以及【2.按时间量的第一个小时生成的第一笔bill】合并成一笔子订单（消费订单）类型为新购，注意该子订单包括了多个产品类型的多个产品实例的多个计费项的总和，子订单的具体费用需要查看bills信息。
	- 产品实例被续订（自动续订或者手动续订）时，该产品实例下所有的【1.按时间包的计费项生成的bills】合并成一笔子订单（消费订单），注意该子订单包括了一个产品类型的多个计费项的费用总和，子订单的具体费用需要查看bills信息。
	- 按时间量的续订账单并不合并生成子订单，直接查看bils信息获取续订账单明细。
	- 按资源量的新购和续订账单也不合并生成子订单，直接查看bils信息获取账单明细。
创建Package订单时产生的账单并未支付，bills状态为未支付状态。

### 接口参数

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| app_id | string   | 应用ID | Yes |
| order_user_id | string   | 订单用户ID | Yes |
| order_user_name | string | 订单用户名 | Yes |
| description | string | 描述 | Yes |
| extra_info | string | 额外信息 | Yes |
| order_product_set | array | 订单配置 | Yes |

**order_product_set**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| prod_id | string | 产品ID |
| prod_name | string | 产品名称 |
| prod_instance_ext_array | array | 产品实例附加信息, 详见 prod_instance_ext |
| plan | object | 计划, 详见 plan |

**prod_instance_ext**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| id | string | ID |
| is_auto_renew | integer | 是否自动续约, 0为否, 1为是 |

**plan**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| plan_id | string | 计划ID |
| attrs_id_value | array | 计划属性, 详见 attrs_id_value |

**attrs_id_value**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| attr_id | string | 属性ID |
| attr_value | object | 属性值 |

**Response Parameters**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| order_id | string | 订单ID |
| order_status | string | 订单状态 |
| cost | integer | 订单花费 |
| amount_payable | string | 可支付数量 |

## NBCancelPrdOrder

### 说明：

如果订单未支付，订单可以取消。

### 具体业务逻辑：

1. 检查PackageOrder是否可以取消
2. 更新PackageOrder状态为canceled，其他create时候创建的数据（实例，订阅，计费项订阅，订单，billing-job，消费订单）都更新为canceled状态。

### 接口参数

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| order_id          | string   | 订单ID | Yes |

**Response Parameters**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| order_id | string | 订单ID |

## NBChargePrdOrder

### 说明：

【支付Package订单】-Package订单下单之后，可以通过统一的一个支付接口为该Package订单下打包购买的产品实例产生的各个计费项的未支付账单进行统一的支付.

### 具体业务逻辑：

1. 加上redis分布式锁，防止重复支付。
2. 检查主订单状态是否正常可支付，不存在或者已取消则无法支付，报错返回。
3. 根据订单ID拿到所有待支付账单。
4. 得到账单总额，判断余额是否够支付
5. 合并账单调用支付- clientCharging.Charge
6. 发送消息【charge_order_success  ： order.charge.success】  -  支付成功的订单的后续处理  
	- 处理消息【charge_order_success ： order.charge.success】- handler.HandleChargeSuccessOrder
		a. 根据订单ID拿到所有待支付账单
		b. 更新实例状态为run
		c. 更新账单的状态和支付时间，起止时间，帐期，
		d. 更新消费订单的支付状态和支付时间
		e. 更新主订单的支付状态和支付时间
		f. 更新产品实例订阅状态为billing
		g. 发送消息【start_billing_jobs ：billingjob.start】  - 发送启动qingjob任务的消息，启动支付成功后订单下全部计费任务
	- 处理消息【start_billing_jobs ： billingjob.start】
		a. 根据Package订单ID查询获取所有的产品实例订阅。
		b. 根据产品实例订阅ID查询获取到所有的产品实例订阅的计费项订阅产生的billingJob。
		c. 根据计费模式-按时间量和按资源量 更新billingjob的状态和开始时间结束时间，区别在于时间量是预扣费，资源量是后扣费。
		d. 对每一个billingJob创建相应的qingjob任务，并更新billingjob状态为running。- clientScheduler.CreateBillSchedulerJob
7. qingjob创建好定时任务后，根据job的配置会定时回调NB的接口，执行具体的按周期计费的任务。-  PerformBillingJob
	- 发送消息【run_billing_job ：billingjob.run】
		+ 处理消息【run_billing_job ：billingjob.run】
			a. 根据billingjobID获取获取Job信息后，检查时间决定是否需要本次任务
			b. 获取产品实例计费项的订阅信息
			c. 如果订阅为停止状态，或者任务的结束时间等于订阅过期时间，则删掉qingjob调度任务，直接返回
			d. 如果订阅为暂停状态，则直接返回
			e. 根据计费模式-按时间量和按资源量 处理相应的CreateBillAndPay逻辑，2者区别在于处理用量的逻辑不一样。
			f. 处理CreateBillAndPay逻辑 - 注意这里只处理按量的业务，无需处理consumeorder逻辑。
				* 根据用量信息获取bill的具体费用值
				* 创建Bill账单
				* 更新billingJob的起始时间
				* 调用Charge扣费 clientCharging.Charge
				* 更新bills状态和chargeID，chargeTime之类信息。

### 接口参数

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| order_id         | string   | 订单ID | Yes |

**Response Parameters**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| order_id | string | 订单ID |

## NBRenewProdInstance

整个产品实例的按时间包的续订周期是一致的。

续订只处理按时间包

多个计费项 统一调一次支付

按时间包和按时间量混合场景 

充值后如何处理欠费账单


### 接口参数

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| prod_inst_id_ext | true   | 产品实例ID | Yes |
| charge_channel | string   | 充值通道 | Yes |
| duration | string | 持续时间 | Yes |

**Response Parameters**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| prod_inst_id_ext | string | 产品实例ID |
| order_id | string | 订单编号 |

## NBStopProdInstance

### 说明：

1. 客户打包下单PackageOrder购买了多个产品实例之后，可以对单个产品实例进行业务操作，包括暂停，恢复，停止，改配等。
2. 当产品端的客户删除相应的产品实例的时候，可以停止单个产品实例的计费。


### 具体业务逻辑：

1. 获取到产品实例的具体信息
2. 根据产品实例ID获取到产品实例的订阅 - todo  可能会有多个订阅，需要取正在billing状态的订阅
3. 更新产品实例订阅的状态为stopped
4. 获取该产品实例订阅下的计费项对应的所有billingjobs，发送消息【billingjob-stop ：billingjob.stop】
	- 处理消息【billingjob-stop ：billingjob.stop】 
		a. 如果计费任务已经处于暂停状态则不继续处理
		b. 停止qingjob调度任务，删除qingjob的job - clientScheduler.DeleteCronJob
		c. 获取该产品实例订阅的每个计费项，处理计费项的最后一个周期的账单和支付信息，以及用量信息和时间信息处理CreateBillAndPay。
			* 对于按时间量 最后不满一小时生成一个为负数的bill进行退费 todo
			* 对于按资源量的最后一个周期的费用

### 接口参数

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| prod_inst_id_ext | string   | 产品实例ID | Yes |

**Response Parameters**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| prod_inst_id_ext | string | 产品实例ID |

## NBChangeProdInstanceConfig

### 说明：

1. 客户打包下单PackageOrder购买了多个产品实例之后，可以对单个产品实例进行业务操作，包括暂停，恢复，停止，改配等。
2. 当产品端的客户删除相应的产品实例的时候，可以修改单个产品实例的产品属性的具体的属性值。
3. 传入参数只有指定的产品实例ID和一堆的产品属性值，如果根据这一堆参数能匹配满足条件的计费策略，则可以生成新的价格。


### 具体业务逻辑：

1. 根据产品实例ID得到产品ID。
2. 根据产品ID和新的属性键值对，调用getcost得到计算出来的新的价格。
3. 用改配前的参数键值对调用getcost拿到改配前的价格。
4. 计算价格差，处理退费或者补差价，生成相应的bills和consumeorder，并且调用支付修改相关状态。
5. 定价的getcost接口，如果返回不了价格或者返回多个价格，在改配接口做报错处理。

主要逻辑在于定价的getcost接口，定价服务的getcost接口 传入prod_id 和产品属性键值对，只允许返回一个满足的plan的价格。

### 接口参数

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| prod_inst_id_ext | string | 产品实例ID | Yes |
| plan_id | string   | 授权码 | Yes |
| component_infos | array | 重定向的URI | Yes |

**component_info**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| component_id | string | 组件ID |
| attrs_id_value | array | 数组元素详见attrs_id_value |

**attrs_id_value**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| attr_id | string | 属性ID |
| attr_value | object | 属性值 |

**Response Parameters**

| **Parameter name** | **Type** | **Description**     |
| ------------------ | -------- | ------------------- |
| order_id | string | 订单ID |
| order_status | int | 订单状态 |
| cost | integer | 花费金额 |
| amount_payable | integer | 可支付数量 |
