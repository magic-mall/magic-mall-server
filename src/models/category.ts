
import { BaseTable } from "@midwayjs/sequelize";
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface categoryAttributes {
    categoryId: number;
    categoryName: string;
    createTime: number;
}

@BaseTable({
	tableName: "category",
	timestamps: false 
})
export class category extends Model<categoryAttributes, categoryAttributes> implements categoryAttributes {

    @Column({
    	field: "category_id",
    	primaryKey: true,
    	type: DataType.BIGINT,
    	comment: "商品分类编号" 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	categoryId!: number;

    @Column({
    	field: "category_name",
    	type: DataType.STRING(100),
    	comment: "分类名称" 
    })
    	categoryName!: string;

    @Column({
    	field: "create_time",
    	type: DataType.BIGINT,
    	comment: "创建时间" 
    })
    	createTime!: number;

}
