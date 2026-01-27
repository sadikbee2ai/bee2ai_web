"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Loader2, User } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function AiChatWidget() {
  const t = useTranslations('ChatWidget');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "welcome_placeholder", // Will be replaced by effect
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update welcome message when language changes
  useEffect(() => {
    setMessages((prev) => 
      prev.map(msg => 
        msg.id === "welcome" 
          ? { ...msg, content: t('welcomeMessage') } 
          : msg
      )
    );
  }, [t]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("prompt", userMessage.content);
      
      const response = await fetch("/api/ai-services", {
        method: "POST",
        headers: {
            // Frontend ve Backend arasındaki basit güvenlik anahtarı
            "X-Api-Key": process.env.NEXT_PUBLIC_CUSTOM_API_KEY || "",
        },
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `API Error: ${response.status}`);
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content || t('errorGeneral'),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: t('errorConnection'),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[600px] max-w-[calc(100vw-48px)] max-h-[calc(100vh-120px)] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center overflow-hidden p-1">
                   <Image 
                    src="/bot-avatar.svg" 
                    alt="BeeAI" 
                    width={32} 
                    height={32} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{t('title')}</h3>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {t('status')}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50/50 dark:bg-black/20 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-zinc-200 dark:border-zinc-700 overflow-hidden p-1",
                      msg.role === "user"
                        ? "bg-zinc-900 dark:bg-zinc-100"
                        : "bg-white dark:bg-zinc-800"
                    )}
                  >
                    {msg.role === "user" ? (
                      <User className={cn("w-5 h-5", msg.role === "user" ? "text-white dark:text-black" : "text-white")} />
                    ) : (
                      <Image 
                        src="/bot-avatar.svg" 
                        alt="BeeAI" 
                        width={32} 
                        height={32} 
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div
                    className={cn(
                      "p-3 rounded-2xl text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-tr-sm"
                        : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-tl-sm shadow-sm"
                    )}
                  >
                    {msg.content}
                    <div className={cn("text-[10px] mt-1 opacity-50", msg.role === "user" ? "text-right" : "")}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                   <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                     <Image 
                        src="/bot-avatar.svg" 
                        alt="BeeAI" 
                        width={32} 
                        height={32} 
                        className="w-full h-full object-contain"
                      />
                  </div>
                  <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t('inputPlaceholder')}
                  className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-0 rounded-xl px-4 text-sm focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-colors shadow-sm shadow-blue-600/20"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 bg-white dark:bg-zinc-900 shadow-2xl flex items-center gap-3 px-6 rounded-full border border-zinc-200 dark:border-zinc-800 transition-all duration-300 group",
          isOpen ? "pr-4" : ""
        )}
      >
        <span className={cn(
            "font-medium text-zinc-900 dark:text-zinc-100 whitespace-nowrap",
            isOpen ? "hidden" : "block"
        )}>
          {t('buttonText')}
        </span>
        <div className={cn(
          "w-8 h-8 relative transition-transform duration-300",
           isOpen ? "rotate-90" : ""
        )}>
            {isOpen ? (
                <X className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />
            ) : (
                <Image 
                    src="/bot-avatar.svg" 
                    alt="BeeAI" 
                    width={32} 
                    height={32} 
                    className="w-full h-full object-contain"
                />
            )}
        </div>
      </motion.button>
    </>
  );
}
