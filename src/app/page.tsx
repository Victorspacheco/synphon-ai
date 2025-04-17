"use client"

import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import ChatInput from "@/components/layout/ChatInput"

export default function Home() {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar ao lado */}
      <Sidebar />

      {/* Conteúdo principal com Header + Chat */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Conteúdo do chat e input */}
        <div className="flex-1 bg-white dark:bg-zinc-900 flex flex-col justify-between">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {/* Conteúdo do chat */}
          </div>

          <ChatInput />
        </div>
      </div>
    </div>
  )
}
