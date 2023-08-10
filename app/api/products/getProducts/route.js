import { prisma } from "@/server/client/client";
import { options } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(options);
  const { user } = session;
  const { id } = user;

  const res = await prisma.diary.findMany({
    where: {
      userId: +id,
    },
  });

  return NextResponse.json({ res });
}
