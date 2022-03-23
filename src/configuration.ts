import { App, Configuration } from "@midwayjs/decorator";
import { ILifeCycle } from "@midwayjs/core";
import { Application } from "egg";
import { join } from "path";
import * as egg from "@midwayjs/web";
import * as sequlize from "@midwayjs/sequelize";
import * as swagger from "@midwayjs/swagger";
import * as jwt from "@midwayjs/jwt";
import * as passport from '@midwayjs/passport';
@Configuration({
  imports: [egg, sequlize, swagger, jwt, passport],
  importConfigs: [join(__dirname, "./config")],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
