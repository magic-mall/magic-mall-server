import { Provide } from "@midwayjs/decorator";
import { admin as admins, adminAttributes } from "../models";
import { AdminLoginResponse } from "../interface";

@Provide()
export class AdminService {
  async login(Body: AdminLoginResponse): Promise<adminAttributes> {
    const result = await admins.findOne({
      where: {
        ...Body,
      },
      attributes: {
        exclude: ["password"],
      },
    });
    return result;
  }
}
