import { App, Configuration } from "@midwayjs/decorator";
import { ILifeCycle } from "@midwayjs/core";
import { Application } from "egg";
import { join } from "path";
import * as egg from "@midwayjs/web";
import * as sequlize from "@midwayjs/sequelize";
import * as swagger from "@midwayjs/swagger";
@Configuration({
  imports: [egg, sequlize, swagger],
  importConfigs: [join(__dirname, "./config")],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {
  }
}
