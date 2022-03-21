import { Provide } from "@midwayjs/decorator";
import { usersAttributes, users } from "../models";

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
}
