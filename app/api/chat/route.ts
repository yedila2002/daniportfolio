import { NextResponse } from "next/server";
import { getChatResponse } from "@/lib/claude";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const response = await getChatResponse(messages);
    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Chat API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
