import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const { name, email, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  console.log("Contact Form Submission:", data);

  return NextResponse.json({ success: "Message received." }, { status: 200 });
}
