/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-03-21 20:27:38
 * @LastEditors: MiKin
 * @LastEditTime: 2022-03-22 01:12:21
 * @FilePath: \midway-test\src\controller\api.ts
 */
import { Inject, Controller, Post, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Query('uid') uid: string): Promise<string> {
    return 'hello world';
  }
}
