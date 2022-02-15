// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../data/comments";
import { CommentType } from "../../utils/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommentType>
) {
  const { id } = req.query

  const data = comments.find((comment) => comment.id === id);
  const result = data || { id: "na", comments: [] };
  res.status(200).json(result);
}
