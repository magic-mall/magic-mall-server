/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-03-21 20:27:38
 * @LastEditors: MiKin
 * @LastEditTime: 2022-03-22 20:10:47
 * @FilePath: \midway-test\src\service\user.ts
 */
import { Provide } from "@midwayjs/decorator";
import { usersAttributes, users } from "../models";

@Provide()
export class UserService {
  async getUser(uId: string): Promise<usersAttributes> {
    const result = await users.findOne({
      where: {
        uId: uId,
      },
    });
    return result;
  }
}
