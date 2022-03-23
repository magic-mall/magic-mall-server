
import { ApiProperty } from "@midwayjs/swagger";
export class AdminLoginResponse {
  @ApiProperty({ example: "admin" })
  adminName: string;

  @ApiProperty({ example: "123456" })
  password: string;
}

export class userLoginResponse {
  @ApiProperty({ example: "yuzusama" })
  uName: string;

  @ApiProperty({ example: "123456" })
  uPassword: string;
}