import { Context } from "@midwayjs/web";
import { Controller, Post, Inject, Body } from "@midwayjs/decorator";
import { UserService } from "../service/user";
import { userLoginResponse } from "../interface";

@Controller("/user")
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post("/login")
  async login(@Body() Body: userLoginResponse) {
    try {
      const result = await this.userService.login(Body);
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
