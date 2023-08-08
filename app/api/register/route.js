import { prisma } from "@/server/client/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { firstName, secondName, password, email } = await req.json();

  const isUnique = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (isUnique) {
    return NextResponse.json(
      { error: "Email should be unique" },
      { status: 400 }
    );
  } else {
    try {
      await prisma.user.create({
        data: {
          first_name: firstName,
          second_name: secondName,
          password,
          email,
        },
      });
    } catch (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({
      status: 200,
    });
  }
}
