import { prisma } from "@/server/client/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";

export async function POST(req) {
  const session = await getServerSession(options);

  const { user } = session;
  const { id } = user;

  const { meal, quantity, protein, fats, carbs, calories } = await req.json();

  const date = new Date();

  const res = await prisma.diary.create({
    data: {
      product: meal,
      amount: +quantity,
      proteins: protein,
      fats,
      carbs,
      calories,
      date: date,
      time: date,
      userId: +id,
    },
  });

  return NextResponse.json({ res }, { status: 200 });
}
