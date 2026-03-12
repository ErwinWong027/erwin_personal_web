"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect, useCallback } from "react";
import { Send, Bot, User, Loader2, AlertCircle, Sparkles, Copy, Volume2, VolumeX, RotateCcw, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function AIChat() {
  const t = useTranslations("aiChat");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const fullText = t("welcome");
  const staticPart = "你好！";
  const typeWriterPart = fullText.replace(staticPart, "");

  const suggestedQuestions = [
    t("q1"),
    t("q2"),
    t("q3"),
    t("q4"),
  ];

  const MAX_TURNS = 5;
  const userMessageCount = messages.filter((m) => m.role === "user").length;

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let isPaused = false;
    setDisplayedText("");
    
    const type = () => {
      if (isPaused) {
        timer = setTimeout(() => {
          isPaused = false;
          isDeleting = true;
          type();
        }, 3000);
        return;
      }

      if (!isDeleting) {
        if (index < typeWriterPart.length) {
          setDisplayedText(typeWriterPart.substring(0, index + 1));
          index++;
          timer = setTimeout(type, 100);
        } else {
          isPaused = true;
          timer = setTimeout(type, 100);
        }
      } else {
        if (index > 0) {
          setDisplayedText(typeWriterPart.substring(0, index - 1));
          index--;
          timer = setTimeout(type, 50);
        } else {
          isDeleting = false;
          timer = setTimeout(type, 500);
        }
      }
    };

    let timer: NodeJS.Timeout;
    type();

    return () => clearTimeout(timer);
  }, [typeWriterPart]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const apiMessages = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${res.status})`);
      }

      const data = await res.json();

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("error_generic"));
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (q: string) => {
    sendMessage(q);
  };

  const handleCopy = async (id: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleSpeak = (id: string, content: string) => {
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = "zh-CN";
    utterance.rate = 1;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setSpeakingId(id);
  };

  const handleRegenerate = () => {
    if (loading) return;
    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
    if (lastUserMsg) {
      sendMessage(lastUserMsg.content);
    }
  };

  const showSuggestions = messages.length === 0 && !loading;

  return (
    <section id="ai-chat" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-[1100px] px-10">
        <AnimateOnScroll>
          <div className="mx-auto max-w-[1100px]">
            {showSuggestions ? (
              <div className="flex flex-col items-center pt-20">
                <div className="mb-16 flex flex-row items-start justify-center gap-2">
                  <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-3xl bg-slate-50 shadow-inner ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
                    <Bot className="h-10 w-10 text-primary-500/80 dark:text-primary-400/80" />
                  </div>
                  <h2 className="max-w-[479px] text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                      <span>{staticPart}</span>
                      <span>{displayedText}</span>
                      <span className={`border-r-2 border-primary-500 ${displayedText.length === typeWriterPart.length ? 'animate-pulse' : 'animate-bounce'}`}></span>
                    </h2>
                </div>

                <div className="mb-12 w-full max-w-[1100px]">
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-6 rounded-[20px] bg-white px-6 py-[21px] shadow-[0_2px_16px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800"
                  >
                    <Sparkles className="h-5 w-5 shrink-0 text-slate-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={t("placeholder")}
                      disabled={loading}
                      className="flex-1 border-none bg-transparent text-base font-light text-slate-900 outline-none placeholder:text-slate-400 disabled:opacity-50 dark:text-white dark:placeholder:text-slate-500"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || loading}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all hover:bg-primary-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-800"
                      aria-label="Send"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>

                <div className="mb-24 flex flex-wrap justify-center gap-3.5">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestion(q)}
                      className="rounded-[40px] border border-slate-200/80 bg-white px-[23px] py-[11px] text-base font-light text-slate-900 transition-all hover:border-primary-300 hover:shadow-[0_0_8px_rgba(0,176,194,0.5)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
                  <p className="text-base font-light">{t("disclaimer")}</p>
                  <svg 
                    className="h-6 w-6 animate-bounce" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl dark:border-slate-800/80 dark:bg-slate-900">
                <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 dark:bg-primary-950/30">
                    <Bot className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      {t("assistant_name")}
                    </p>
                    <p className="text-sm text-slate-500">
                      {t("assistant_desc")}
                    </p>
                  </div>
                </div>

                <div
                  ref={scrollRef}
                  className="h-[550px] overflow-y-auto scroll-smooth px-6 py-8"
                >
                  <AnimatePresence mode="popLayout">
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`mb-6 flex gap-4 group ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            msg.role === "user"
                              ? "bg-primary-600 text-white"
                              : "bg-slate-100 dark:bg-slate-800"
                          }`}
                        >
                          {msg.role === "user" ? (
                            <User className="h-5 w-5" />
                          ) : (
                            <Bot className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                          )}
                        </div>

                        <div className="flex max-w-[80%] flex-col">
                          <div
                            className={`rounded-2xl px-5 py-4 text-base leading-relaxed ${
                              msg.role === "user"
                                ? "rounded-tr-md bg-primary-600 text-white shadow-md shadow-primary-500/20"
                                : "rounded-tl-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                            }`}
                          >
                            {msg.content.split("\n").map((line, i) => (
                              <p key={i} className={i > 0 ? "mt-2" : ""}>
                                {line}
                              </p>
                            ))}
                          </div>
                          
                          {msg.role === "assistant" && (
                            <div className="mt-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                              <button
                                onClick={() => handleCopy(msg.id, msg.content)}
                                className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
                                title={copiedId === msg.id ? "已复制" : "复制"}
                              >
                                {copiedId === msg.id ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </button>
                              <button
                                onClick={() => handleSpeak(msg.id, msg.content)}
                                className={`flex h-8 w-8 items-center justify-center rounded-md transition-all hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300 ${
                                  speakingId === msg.id ? "bg-primary-100 text-primary-600 dark:bg-primary-900/30" : "text-slate-400"
                                }`}
                                title={speakingId === msg.id ? "停止朗读" : "朗读"}
                              >
                                {speakingId === msg.id ? (
                                  <VolumeX className="h-4 w-4" />
                                ) : (
                                  <Volume2 className="h-4 w-4" />
                                )}
                              </button>
                              <button
                                onClick={handleRegenerate}
                                className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
                                title="重新生成"
                              >
                                <RotateCcw className="h-4 w-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {loading && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 flex gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                        <Bot className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex items-center gap-2 rounded-2xl rounded-tl-md bg-slate-100 px-5 py-4 dark:bg-slate-800">
                        <Loader2 className="h-5 w-5 animate-spin text-primary-500" />
                        <span className="text-base text-slate-500 dark:text-slate-400">
                          {t("thinking")}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 flex items-center gap-3 rounded-2xl bg-red-50 px-5 py-4 text-base text-red-600 dark:bg-red-950/30 dark:text-red-400"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}
                </div>

                <div className="border-t border-slate-100 p-6 dark:border-slate-800">
                  <form
                    onSubmit={handleSubmit}
                    className="relative flex items-center"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={t("placeholder")}
                      disabled={loading}
                      className="w-full rounded-2xl border-none bg-slate-50 py-4 pl-6 pr-16 text-base outline-none ring-1 ring-slate-200 transition-all focus:bg-white focus:ring-2 focus:ring-primary-500 disabled:opacity-50 dark:bg-slate-800 dark:ring-slate-700 dark:placeholder:text-slate-500 dark:focus:ring-primary-400"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || loading}
                      className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg transition-all hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Send"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
