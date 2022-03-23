import { Context } from "egg";
import { Controller, Get, Inject, Query, Post } from "@midwayjs/decorator";
import { UserService } from "../service/user";
import { JwtService } from "@midwayjs/jwt";
import { JwtPassportMiddleware } from "../middleware/jwt.middleware";
@Controller("/")
export class HomeController {
  @Inject()
  ctx: Context;

  @Inject()
  jwt: JwtService;

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

  @Post("/passport", { middleware: [JwtPassportMiddleware] })
  async jwtPassport() {
    return {
      text: "Hello Midway",
    };
  }

  @Post("/jwt")
  async genJwt() {
    return {
      t: await this.jwt.sign({ msg: "Hello Midway" }),
    };
  }
}
