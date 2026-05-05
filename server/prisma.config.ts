import { defineConfig } from "prisma/config";
import { config } from "dotenv";

// Load .env before defining the config
config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  //@ts-ignore
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL || "",
  },
});