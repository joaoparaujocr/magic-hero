import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([...database]);
}
