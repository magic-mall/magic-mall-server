
import { BaseTable } from "@midwayjs/sequelize";
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface adminAttributes {
    adminId?: number;
    adminName: string;
    telephone: string;
    password: string;
    age: number;
    sex: string;
    createTime: number;
    status: string;
    headImg: string;
}

@BaseTable({
	tableName: "admin",
	timestamps: false 
})
export class admin extends Model<adminAttributes, adminAttributes> implements adminAttributes {

    @Column({
    	field: "admin_id",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	comment: "管理员编号" 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	adminId?: number;

    @Column({
    	field: "admin_name",
    	type: DataType.STRING(50),
    	comment: "管理员昵称" 
    })
    	adminName!: string;

    @Column({
    	type: DataType.STRING(11),
    	comment: "电话号码" 
    })
    	telephone!: string;

    @Column({
    	type: DataType.STRING(50),
    	comment: "登录密码" 
    })
    	password!: string;

    @Column({
    	type: DataType.INTEGER,
    	comment: "年龄" 
    })
    	age!: number;

    @Column({
    	type: DataType.STRING(5),
    	comment: "性别" 
    })
    	sex!: string;

    @Column({
    	field: "create_time",
    	type: DataType.BIGINT,
    	comment: "创建时间" 
    })
    	createTime!: number;

    @Column({
    	type: DataType.STRING(10),
    	comment: "账号状态" 
    })
    	status!: string;

    @Column({
    	field: "head_img",
    	type: DataType.STRING(100),
    	comment: "头像" 
    })
    	headImg!: string;

}
