import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/system-prompt";

// ============================================================
// POST /api/chat
// Receives { messages: [{ role, content }] } from the client,
// prepends the system prompt, calls Qwen-Plus, and returns
// the assistant's response.
// ============================================================

const QWEN_API_URL =
  "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.DASHSCOPE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured. Set DASHSCOPE_API_KEY in .env.local" },
        { status: 500 },
      );
    }

    const { messages } = (await req.json()) as {
      messages: { role: string; content: string }[];
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 },
      );
    }

    const systemPrompt = buildSystemPrompt();

    const response = await fetch(QWEN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "qwen-plus",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.slice(-10),
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Qwen API error:", response.status, errBody);
      return NextResponse.json(
        { error: "AI service temporarily unavailable" },
        { status: 502 },
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
