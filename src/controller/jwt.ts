/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-03-22 15:56:47
 * @LastEditors: MiKin
 * @LastEditTime: 2022-03-22 16:03:19
 * @FilePath: \midway-test\src\controller\jwt.ts
 */
import { Post, Inject, Controller } from "@midwayjs/decorator";
import { Context } from "@midwayjs/web";
import { JwtService } from "@midwayjs/jwt";
import { JwtPassportMiddleware } from "../middleware/jwt.middleware";

@Controller("/jwt")
export class JwtController {
  @Inject()
  jwt: JwtService;

  @Inject()
  ctx: Context;

  @Post("/passport", { middleware: [JwtPassportMiddleware] })
  async jwtPassport() {
    console.log("jwt user: ", this.ctx.state.user);
    return this.ctx.state.user;
  }

  @Post("/getToken")
  async genJwt() {
    return {
      t: await this.jwt.sign({ msg: "Hello Midway" }),
    };
  }
}
