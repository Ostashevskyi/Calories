import { prisma } from "@/server/client/client";
import { options } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { zonedTimeToUtc } from "date-fns-tz";

export async function POST(req) {
  const { date } = await req.json();
  const timeZone = "Atlantic/Azores";
  const utcDate = zonedTimeToUtc(date, timeZone);

  const session = await getServerSession(options);

  const { user } = session;
  const { id } = user;

  const res = await prisma.diary.findMany({
    where: {
      userId: +id,
      date: utcDate,
    },
  });

  return NextResponse.json({ res });
}
