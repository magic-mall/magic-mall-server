import { Context } from "egg";
import { Controller, Get, Inject, Query } from "@midwayjs/decorator";
import { UserService } from "../service/user";

@Controller("/")
export class HomeController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get("/")
  async home() {
    this.ctx.redirect("/docs/index.html");
  }

  @Get("/getUser")
  async getUser(@Query("uId") uId: string) {
    try {
      const result = await this.userService.getUser(uId);
      return {
        code: 200,
        data: result,
      };
    } catch (e) {
      return e;
    }
  }
}
