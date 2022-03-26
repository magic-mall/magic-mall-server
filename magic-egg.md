## magic-egg tables message
#### 1、 address

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `address_id` | 收货地址编号 | bigint(20) | PRI | NO |  |  |
| 2 | `u_id` | 用户编号 | bigint(20) |  | NO |  |  |
| 3 | `consignee` | 收货人名 | varchar(50) |  | NO |  |  |
| 4 | `province` | 省份/直辖市 | varchar(100) |  | NO |  |  |
| 5 | `city` | 市 | varchar(100) |  | NO |  |  |
| 6 | `district` | 区 | varchar(100) |  | NO |  |  |
| 7 | `street` | 街道 | varchar(255) |  | NO |  |  |
| 8 | `zipcode` | 邮政编码 | varchar(6) |  | NO |  |  |
| 9 | `telephone` | 电话号码 | varchar(11) |  | NO |  |  |
| 10 | `detail` | 详细地址 | varchar(255) |  | NO |  |  |
| 11 | `create_time` | 创建时间 | bigint(20) |  | NO |  |  |


#### 2、 admin

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `admin_id` | 管理员编号 | bigint(20) | PRI | NO | auto_increment |  |
| 2 | `admin_name` | 管理员昵称 | varchar(50) |  | NO |  |  |
| 3 | `telephone` | 电话号码 | varchar(11) |  | NO |  |  |
| 4 | `password` | 登录密码 | varchar(50) |  | NO |  |  |
| 5 | `age` | 年龄 | int(11) |  | NO |  |  |
| 6 | `sex` | 性别 | varchar(5) |  | NO |  |  |
| 7 | `create_time` | 创建时间 | bigint(20) |  | NO |  |  |
| 8 | `status` | 账号状态 | varchar(10) |  | NO |  |  |
| 9 | `head_img` | 头像 | varchar(100) |  | NO |  |  |


#### 3、 cart

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `cart_id` | 购物车编号 | bigint(20) | PRI | NO |  |  |
| 2 | `u_id` | 用户编号 | bigint(20) |  | NO |  |  |
| 3 | `goods_id` | 商品编号 | bigint(20) |  | NO |  |  |
| 4 | `total` | 小计 | bigint(20) |  | NO |  |  |
| 5 | `goods_avatar` | 商品快照 | text |  | NO |  |  |
| 6 | `category_id` | 商品分类编号 | bigint(20) |  | NO |  |  |
| 7 | `number` | 购买数量 | int(11) |  | NO |  |  |
| 8 | `create_time` | 创建时间 | bigint(20) |  | NO |  |  |


#### 4、 category

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `category_id` | 商品分类编号 | bigint(20) | PRI | NO |  |  |
| 2 | `category_name` | 分类名称 | varchar(100) |  | NO |  |  |
| 3 | `create_time` | 创建时间 | bigint(20) |  | NO |  |  |


#### 5、 goods

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `goods_id` | 商品编号 | bigint(20) | PRI | NO |  |  |
| 2 | `category_id` | 分类编号 | bigint(20) |  | NO |  |  |
| 3 | `goods_name` | 商品名称 | varchar(100) |  | NO |  |  |
| 4 | `goods_pic` | 商品价格 | bigint(20) |  | NO |  |  |
| 5 | `infor` | 商品简介 | text |  | NO |  |  |
| 6 | `create_time` | 创建时间 | bigint(20) |  | NO |  |  |
| 7 | `goods_carousel` | 商品轮播图 | text |  | NO |  |  |
| 8 | `goods_details` | 商品详情图 | text |  | NO |  |  |
| 9 | `goods_avatar` | 商品快照 | varchar(100) |  | NO |  |  |
| 10 | `status` | 状态 | int(11) |  | NO |  |  |


#### 6、 order

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `order_id` | 订单编号 | bigint(20) | PRI | NO |  |  |
| 2 | `u_id` | 用户编号 | bigint(20) |  | NO |  |  |
| 3 | `item_count` | 商品数量 | int(11) |  | NO |  |  |
| 4 | `goods_amount_tatol` | 订单总价 | decimal(65,0) |  | NO |  |  |
| 5 | `order_amount_tatal` | 实际付款 | decimal(65,0) |  | NO |  |  |
| 6 | `order_status` | 订单状态 | int(11) |  | NO |  |  |
| 7 | `pay_channel` | 支付方式 | varchar(50) |  | NO |  |  |
| 8 | `address` | 送货地址 | varchar(100) |  | NO |  |  |
| 9 | `zipcode` | 邮政编码 | varchar(6) |  | NO |  |  |
| 10 | `telephone` | 收货电话 | varchar(11) |  | NO |  |  |
| 11 | `consignee` | 收货人名字 | varchar(50) |  | NO |  |  |
| 12 | `note` | 用户备注 | text |  | NO |  |  |
| 13 | `pay_time` | 付款时间 | bigint(20) |  | NO |  |  |
| 14 | `delivery_time` | 发货时间 | bigint(20) |  | NO |  |  |
| 15 | `create_time` | 创建时间 | bigint(20) |  | NO |  |  |


#### 7、 users

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | `u_id` | 用户编号 | bigint(20) | PRI | NO |  |  |
| 2 | `u_name` | 用户名 | varchar(50) |  | NO |  |  |
| 3 | `u_phone` | 电话号码 | varchar(11) |  | NO |  |  |
| 4 | `u_password` | 登录密码 | varchar(50) |  | NO |  |  |
| 5 | `u_gender` | 性别 | int(11) |  | NO |  |  |
| 6 | `u_age` | 年龄 | int(11) |  | NO |  |  |
| 7 | `u_avatar` | 头像 | varchar(255) |  | NO |  |  |
| 8 | `status` | 状态 | int(11) |  | NO |  |  |


