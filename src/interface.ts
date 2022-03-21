/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-03-21 20:27:38
 * @LastEditors: MiKin
 * @LastEditTime: 2022-03-21 22:32:57
 * @FilePath: \midway-test\src\interface.ts
 */
/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}
