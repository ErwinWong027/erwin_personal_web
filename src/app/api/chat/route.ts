import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/system-prompt";

// ============================================================
// POST /api/chat
// Receives { messages: [{ role, content }] } from the client,
// prepends the system prompt, calls Qwen-Plus with streaming,
// and returns SSE stream.
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
        stream: true,
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

    // Create SSE stream
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        const decoder = new TextDecoder();

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n");

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6);
                if (data === "[DONE]") {
                  controller.close();
                  return;
                }

                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices?.[0]?.delta?.content;
                  if (content) {
                    controller.enqueue(encoder.encode(content));
                  }
                } catch {
                  // Ignore parse errors for incomplete chunks
                }
              }
            }
          }
        } catch (err) {
          console.error("Stream error:", err);
        } finally {
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
