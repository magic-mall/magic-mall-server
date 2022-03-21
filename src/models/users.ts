
import { BaseTable } from "@midwayjs/sequelize";
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface usersAttributes {
    uId: number;
    uName: string;
    uPhone: string;
    uPassword: string;
    uGender: number;
    uAge: number;
    uAvatar: string;
    status: number;
}

@BaseTable({
	tableName: "users",
	timestamps: false 
})
export class users extends Model<usersAttributes, usersAttributes> implements usersAttributes {

    @Column({
    	field: "u_id",
    	primaryKey: true,
    	type: DataType.BIGINT,
    	comment: "用户编号" 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	uId!: number;

    @Column({
    	field: "u_name",
    	type: DataType.STRING(50),
    	comment: "用户名" 
    })
    	uName!: string;

    @Column({
    	field: "u_phone",
    	type: DataType.STRING(11),
    	comment: "电话号码" 
    })
    	uPhone!: string;

    @Column({
    	field: "u_password",
    	type: DataType.STRING(50),
    	comment: "登录密码" 
    })
    	uPassword!: string;

    @Column({
    	field: "u_gender",
    	type: DataType.INTEGER,
    	comment: "性别" 
    })
    	uGender!: number;

    @Column({
    	field: "u_age",
    	type: DataType.INTEGER,
    	comment: "年龄" 
    })
    	uAge!: number;

    @Column({
    	field: "u_avatar",
    	type: DataType.STRING(255),
    	comment: "头像" 
    })
    	uAvatar!: string;

    @Column({
    	type: DataType.INTEGER,
    	comment: "状态" 
    })
    	status!: number;

}
