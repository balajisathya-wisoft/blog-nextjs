import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      monthly: [10, 20, 30, 40, 50, 60, 70],
      yearly: [100, 200, 300, 400, 500, 600, 700],
    },
    { status: 200 }
  );
}
