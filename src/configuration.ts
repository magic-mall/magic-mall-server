/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-03-21 20:27:38
 * @LastEditors: MiKin
 * @LastEditTime: 2022-03-22 03:55:29
 * @FilePath: \midway-test\src\configuration.ts
 */
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

  async onReady() {}
}
