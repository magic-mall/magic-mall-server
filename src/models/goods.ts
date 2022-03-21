
import { BaseTable } from "@midwayjs/sequelize";
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface goodsAttributes {
    goodsId: number;
    categoryId: number;
    goodsName: string;
    goodsPic: number;
    infor: string;
    createTime: number;
    goodsCarousel: string;
    goodsDetails: string;
    goodsAvatar: string;
    status: number;
}

@BaseTable({
	tableName: "goods",
	timestamps: false 
})
export class goods extends Model<goodsAttributes, goodsAttributes> implements goodsAttributes {

    @Column({
    	field: "goods_id",
    	primaryKey: true,
    	type: DataType.BIGINT,
    	comment: "商品编号" 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	goodsId!: number;

    @Column({
    	field: "category_id",
    	type: DataType.BIGINT,
    	comment: "分类编号" 
    })
    	categoryId!: number;

    @Column({
    	field: "goods_name",
    	type: DataType.STRING(100),
    	comment: "商品名称" 
    })
    	goodsName!: string;

    @Column({
    	field: "goods_pic",
    	type: DataType.BIGINT,
    	comment: "商品价格" 
    })
    	goodsPic!: number;

    @Column({
    	type: DataType.STRING,
    	comment: "商品简介" 
    })
    	infor!: string;

    @Column({
    	field: "create_time",
    	type: DataType.BIGINT,
    	comment: "创建时间" 
    })
    	createTime!: number;

    @Column({
    	field: "goods_carousel",
    	type: DataType.STRING,
    	comment: "商品轮播图" 
    })
    	goodsCarousel!: string;

    @Column({
    	field: "goods_details",
    	type: DataType.STRING,
    	comment: "商品详情图" 
    })
    	goodsDetails!: string;

    @Column({
    	field: "goods_avatar",
    	type: DataType.STRING(100),
    	comment: "商品快照" 
    })
    	goodsAvatar!: string;

    @Column({
    	type: DataType.INTEGER,
    	comment: "状态" 
    })
    	status!: number;

}
