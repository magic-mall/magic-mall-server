import { Provide } from "@midwayjs/decorator";
import { usersAttributes, users } from "../models";
import { userLoginResponse } from "../interface";
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

  async login(Body: userLoginResponse): Promise<usersAttributes> {
    const result = await users.findOne({
      where: {
        uName: Body.uName,
        uPassword: Body.uPassword,
      },
    });
    return result;
  }
}
