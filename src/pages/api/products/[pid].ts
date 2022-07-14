import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { Product } from "../../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | { message: string }>
) {
  const { pid } = req.query;
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = fs.readFileSync(jsonDirectory + "/data.json");
  const data = JSON.parse(fileContents.toString()) as Product[];

  if (!pid) {
    return res.status(400).json({ message: "Product id is required" });
  }

  const product = data.find((p) => p.id === pid);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(200).json(product);
}
