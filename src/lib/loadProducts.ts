import fs from "fs";
import path from "path";
import { Product } from "../types";

export async function loadProducts() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = fs.readFileSync(jsonDirectory + "/data.json");
  const data = JSON.parse(fileContents.toString()) as Product[];

  return data;
}
