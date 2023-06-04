import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const filter = database.find((post) => post.id === Number(id));

  res.status(200).json(filter);
}
