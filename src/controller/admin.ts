/*
 * @Descripttion:
 * @version:
 * @Author: MiKin
 * @Date: 2022-03-22 20:23:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-23 19:01:41
 * @FilePath: \midway-test\src\controller\admin.ts
 */
import { ApiProperty, ApiHeader } from "@midwayjs/swagger";
import { Context } from "@midwayjs/web";
import { Controller, Post, Inject, Body } from "@midwayjs/decorator";
import { AdminService } from "../service/admin";
import { AdminLoginResponse } from "../interface";

@Controller("/admin")
export class HomeController {
  @Inject()
  ctx: Context;

  @Inject()
  adminService: AdminService;

  @ApiProperty({
    type: "integer",
    format: "int32",
    example: "1",
    description: "The name of the Catage",
  })
  age: number;
  @Post("/login")
  async login(@Body() Body: AdminLoginResponse) {
    try {
      const result = await this.adminService.login(Body)
      return {
        code: result ? 200 : 500,
        message: result ? "登录成功" : "登录失败",
        data: result,
      };
    } catch (e) {
      return e;
    }
  }
}
