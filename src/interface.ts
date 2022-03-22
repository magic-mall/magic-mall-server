/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-03-21 20:27:38
 * @LastEditors: MiKin
 * @LastEditTime: 2022-03-22 20:36:44
 * @FilePath: \midway-test\src\interface.ts
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

export interface LoginOptions{
  adminName: string;
  password: string;
}