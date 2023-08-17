import { prisma } from "@/server/client/client";
import { options } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { date } = await req.json();
  console.log("GET PRODUCT DATE:", { date });

  const session = await getServerSession(options);

  const { user } = session;
  const { id } = user;

  const res = await prisma.diary.findMany({
    where: {
      userId: +id,
      date,
    },
  });

  return NextResponse.json({ res });
}
