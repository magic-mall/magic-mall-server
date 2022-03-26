const {
  ModelBuilder,
  DialectMySQL,
} = require("sequelize-typescript-generator");

const dotenv = require("dotenv");

const fs = require("fs");
const path = require("path");

dotenv.config();

const { DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

(async () => {
  const config = {
    connection: {
      dialect: "mysql",
      database: DATABASE,
      username: DB_USERNAME,
      password: DB_PASSWORD,
    },
    metadata: {
      indices: true,
      case: "CAMEL",
    },
    output: {
      clean: true,
      outDir: "./src/models",
    },
    clean: true,
    strict: true,
  };

  const dialect = new DialectMySQL();

  const builder = new ModelBuilder(config, dialect);

  try {
    await builder.build();
    const modelFilePath = path.join(__dirname, "./src/models");
    const modelFiles = fs.readdirSync(modelFilePath);

    modelFiles.forEach((file) => {
      const filePath = path.join(modelFilePath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const newFileContent = fileContent.replace(/@Table/, "@BaseTable");
      if (file !== "index.ts") {
        fs.writeFileSync(
          filePath,
          `
import { BaseTable } from "@midwayjs/sequelize";
${newFileContent}
`
        );
      }
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
