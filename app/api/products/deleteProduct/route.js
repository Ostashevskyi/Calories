import { prisma } from "@/server/client/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function DELETE(req) {
  const session = await getServerSession(options);
  const { productID } = await req.json();

  const { user } = session;
  const { id: userId } = user;

  const deleteRes = await prisma.diary.delete({
    where: {
      userId: +userId,
      id: productID,
    },
  });

  return NextResponse.json({ deleteRes });
}
