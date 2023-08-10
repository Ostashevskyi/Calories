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

  // function formatAMPM(date) {
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var seconds = date.getSeconds();
  //   var ampm = hours >= 12 ? "pm" : "am";
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   var strTime = hours + "-" + minutes + "-" + seconds;
  //   return strTime;
  // }

  await prisma.diary.create({
    data: {
      product: meal,
      amount: +quantity,
      proteins: protein,
      fats,
      carbs,
      calories,
      time: date,
      date: date,
      userId: +id,
    },
  });

  return NextResponse.json({
    status: 200,
  });
}
