
import { BaseTable } from "@midwayjs/sequelize";
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface addressAttributes {
    addressId: number;
    uId: number;
    consignee: string;
    province: string;
    city: string;
    district: string;
    street: string;
    zipcode: string;
    telephone: string;
    detail: string;
    createTime: number;
}

@BaseTable({
	tableName: "address",
	timestamps: false 
})
export class address extends Model<addressAttributes, addressAttributes> implements addressAttributes {

    @Column({
    	field: "address_id",
    	primaryKey: true,
    	type: DataType.BIGINT,
    	comment: "收货地址编号" 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	addressId!: number;

    @Column({
    	field: "u_id",
    	type: DataType.BIGINT,
    	comment: "用户编号" 
    })
    	uId!: number;

    @Column({
    	type: DataType.STRING(50),
    	comment: "收货人名" 
    })
    	consignee!: string;

    @Column({
    	type: DataType.STRING(100),
    	comment: "省份/直辖市" 
    })
    	province!: string;

    @Column({
    	type: DataType.STRING(100),
    	comment: "市" 
    })
    	city!: string;

    @Column({
    	type: DataType.STRING(100),
    	comment: "区" 
    })
    	district!: string;

    @Column({
    	type: DataType.STRING(255),
    	comment: "街道" 
    })
    	street!: string;

    @Column({
    	type: DataType.STRING(6),
    	comment: "邮政编码" 
    })
    	zipcode!: string;

    @Column({
    	type: DataType.STRING(11),
    	comment: "电话号码" 
    })
    	telephone!: string;

    @Column({
    	type: DataType.STRING(255),
    	comment: "详细地址" 
    })
    	detail!: string;

    @Column({
    	field: "create_time",
    	type: DataType.BIGINT,
    	comment: "创建时间" 
    })
    	createTime!: number;

}
