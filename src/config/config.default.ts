import { MidwayConfig, MidwayAppInfo } from "@midwayjs/core";
import * as dotenv from "dotenv";
dotenv.config();

const { DATABASE, DB_USERNAME, DB_PASSWORD, JWT_SECRET } = process.env;

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + "_1647865658205_2146",
    egg: {
      port: 7001,
    },
    sequelize: {
      options: {
        database: DATABASE,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        host: "127.0.0.1", // 此处支持idb上面vipserver key的那种方式，也支持aliyun的地址。
        port: 3306,
        encrypt: false,
        dialect: "mysql",
        define: { charset: "utf8" },
        timezone: "+08:00",
        logging: console.log,
      },
      sync: false, // 本地的时候，可以通过sync: true直接createTable
    },
    swagger: {
      title: "magic-api-docs",
      description: "swagger-ui for midway api",
      version: "1.0.0",
      termsOfService: "",
      contact: {
        name: "API Support",
        url: "http://www.example.com/support",
        email: "support@example.com",
      },
      license: {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0.html",
      },
      swaggerPath: "/docs",
    },
    jwt: {
      secret: 'songdaochuanshu', // fs.readFileSync('xxxxx.key')
      expiresIn: '2d'   // https://github.com/vercel/ms
    },
    passport: {
      session: false,
    }
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
