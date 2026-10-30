
import dotenv from "dotenv";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(
  dirname(fileURLToPath(import.meta.url)),
  ".."
);

dotenv.config({
  path: resolve(projectRoot, ".env")
});

export const config = {
  baseUrl: process.env.BASE_URL ?? "https://www.saucedemo.com"
};
