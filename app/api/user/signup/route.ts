
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    return NextResponse.json({
      msg: "User created successfully",
      user,
    });

  } catch (e) {
    console.error("Error creating user:", e);
    return NextResponse.json({
      msg: "Something went wrong",
      error:"Unknown error",
    }, { status: 500 });

  } finally {
    await prisma.$disconnect();
  }
}
