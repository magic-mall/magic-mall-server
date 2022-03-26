const dotenv = require("dotenv");
const { MySQLMarkdown } = require("mysql-markdown");

dotenv.config();

const {
  PORT = 3306,
  HOST = "127.0.0.1",
  DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
} = process.env;

let mySQLMarkdown = new MySQLMarkdown({
  host: HOST,
  port: PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DATABASE,
  output: "./",
  fileName: "sql-doc",
});

mySQLMarkdown.build();