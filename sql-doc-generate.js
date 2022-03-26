const child = require("child_process");
const path = require("path");
const os = require("os");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const {
  PORT = 3306,
  HOST = "127.0.0.1",
  DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
} = process.env;

const platform = os.platform();
let filePath = (name) => path.join(__dirname, "./scripts", name);
let fileName = "";

switch (platform) {
  case "win32":
    fileName = "mysql_markdown_win.exe";
    filePath = filePath(fileName);
    break;
  case "linux":
    fileName = "mysql_markdown_unix";
    filePath = filePath(fileName);
    break;
  case "mac":
    fileName = "mysql_markdown_mac";
    filePath = filePath(fileName);
    break;
  default:
    console.log("Unsupported platform");
    break;
}

const magicEggFile = path.join(__dirname, "./magic-egg.md");
const magicEggFileExists = fs.existsSync(magicEggFile);
if (!magicEggFileExists) {
  fs.writeFileSync(magicEggFile, "");
}else{
  fs.unlinkSync(magicEggFile);
  fs.writeFileSync(magicEggFile, "");
}

child.exec(
  `${filePath} -u ${DB_USERNAME} -p ${DB_PASSWORD} -d ${DATABASE} -P ${PORT} -h ${HOST} -o ${magicEggFile}`,
  (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
  }
);
