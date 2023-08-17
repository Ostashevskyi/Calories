import { prisma } from "@/server/client/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "./auth/[...nextauth]/options";

export async function DELETE() {
  const session = await getServerSession(options);

  const { user } = session;
  const { id } = user;

  const deleteRes = await prisma.diary.deleteMany({
    where: {
      userId: +id,
    },
  });

  return NextResponse.json({ deleteRes });
}
