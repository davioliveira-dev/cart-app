import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { Product } from "../../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = fs.readFileSync(jsonDirectory + "/data.json");
  const data = JSON.parse(fileContents.toString()) as Product[];

  res.status(200).json(data);
}
