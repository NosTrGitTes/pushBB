// pages/api/bets/create.ts
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const bet = await prisma.bet.create({
        data: {
          ...req.body,
          // Certifique-se de que os campos e tipos correspondam aos do seu modelo Prisma.
        },
      });
      res.status(201).json(bet);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
