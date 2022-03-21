
import { BaseTable } from "@midwayjs/sequelize";
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface orderAttributes {
    orderId: number;
    uId: number;
    itemCount: number;
    goodsAmountTatol: string;
    orderAmountTatal: string;
    orderStatus: number;
    payChannel: string;
    address: string;
    zipcode: string;
    telephone: string;
    consignee: string;
    note: string;
    payTime: number;
    deliveryTime: number;
    createTime: number;
}

@BaseTable({
	tableName: "order",
	timestamps: false 
})
export class order extends Model<orderAttributes, orderAttributes> implements orderAttributes {

    @Column({
    	field: "order_id",
    	primaryKey: true,
    	type: DataType.BIGINT,
    	comment: "订单编号" 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	orderId!: number;

    @Column({
    	field: "u_id",
    	type: DataType.BIGINT,
    	comment: "用户编号" 
    })
    	uId!: number;

    @Column({
    	field: "item_count",
    	type: DataType.INTEGER,
    	comment: "商品数量" 
    })
    	itemCount!: number;

    @Column({
    	field: "goods_amount_tatol",
    	type: DataType.DECIMAL(65),
    	comment: "订单总价" 
    })
    	goodsAmountTatol!: string;

    @Column({
    	field: "order_amount_tatal",
    	type: DataType.DECIMAL(65),
    	comment: "实际付款" 
    })
    	orderAmountTatal!: string;

    @Column({
    	field: "order_status",
    	type: DataType.INTEGER,
    	comment: "订单状态" 
    })
    	orderStatus!: number;

    @Column({
    	field: "pay_channel",
    	type: DataType.STRING(50),
    	comment: "支付方式" 
    })
    	payChannel!: string;

    @Column({
    	type: DataType.STRING(100),
    	comment: "送货地址" 
    })
    	address!: string;

    @Column({
    	type: DataType.STRING(6),
    	comment: "邮政编码" 
    })
    	zipcode!: string;

    @Column({
    	type: DataType.STRING(11),
    	comment: "收货电话" 
    })
    	telephone!: string;

    @Column({
    	type: DataType.STRING(50),
    	comment: "收货人名字" 
    })
    	consignee!: string;

    @Column({
    	type: DataType.STRING,
    	comment: "用户备注" 
    })
    	note!: string;

    @Column({
    	field: "pay_time",
    	type: DataType.BIGINT,
    	comment: "付款时间" 
    })
    	payTime!: number;

    @Column({
    	field: "delivery_time",
    	type: DataType.BIGINT,
    	comment: "发货时间" 
    })
    	deliveryTime!: number;

    @Column({
    	field: "create_time",
    	type: DataType.BIGINT,
    	comment: "创建时间" 
    })
    	createTime!: number;

}
