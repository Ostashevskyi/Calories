import { prisma } from "@/server/client/client";
import { NextResponse } from "next/server";

export async function DELETE() {
  const deleteRes = await prisma.diary.deleteMany({
    where: {
      userId: 1,
    },
  });

  return NextResponse.json({ deleteRes });
}
