
import { BaseTable } from "@midwayjs/sequelize";
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface cartAttributes {
    cartId: number;
    uId: number;
    goodsId: number;
    total: number;
    goodsAvatar: string;
    categoryId: number;
    number: number;
    createTime: number;
}

@BaseTable({
	tableName: "cart",
	timestamps: false 
})
export class cart extends Model<cartAttributes, cartAttributes> implements cartAttributes {

    @Column({
    	field: "cart_id",
    	primaryKey: true,
    	type: DataType.BIGINT,
    	comment: "购物车编号" 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	cartId!: number;

    @Column({
    	field: "u_id",
    	type: DataType.BIGINT,
    	comment: "用户编号" 
    })
    	uId!: number;

    @Column({
    	field: "goods_id",
    	type: DataType.BIGINT,
    	comment: "商品编号" 
    })
    	goodsId!: number;

    @Column({
    	type: DataType.BIGINT,
    	comment: "小计" 
    })
    	total!: number;

    @Column({
    	field: "goods_avatar",
    	type: DataType.STRING,
    	comment: "商品快照" 
    })
    	goodsAvatar!: string;

    @Column({
    	field: "category_id",
    	type: DataType.BIGINT,
    	comment: "商品分类编号" 
    })
    	categoryId!: number;

    @Column({
    	type: DataType.INTEGER,
    	comment: "购买数量" 
    })
    	number!: number;

    @Column({
    	field: "create_time",
    	type: DataType.BIGINT,
    	comment: "创建时间" 
    })
    	createTime!: number;

}
