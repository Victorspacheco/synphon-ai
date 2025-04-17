"use client"

import { Bell } from "lucide-react"
import { Avatar } from "@/components/ui/Avatar"

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-zinc-200 bg-white px-4 text-zinc-900">
      {/* Botão esquerdo */}
      <button className="flex items-center gap-2 px-2 py-2 rounded bg-[#F0F0F0] text-[#8D8D8D] text-sm font-semibold shadow-[0_0_0_1px_rgba(0,0,0,0.12)] border border-white">
        » Abrir histórico
      </button>

      {/* Título centralizado */}
      <div className="text-lg font-semibold mx-auto">
        Symphon AI
      </div>

      {/* Botão + ícone + avatar à direita */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-2 py-2 rounded bg-[#F0F0F0] text-[#8D8D8D] text-sm font-semibold shadow-[0_0_0_1px_rgba(0,0,0,0.12)] border border-white">
          Novo chat
        </button>

        <button
          className="relative p-2 rounded-full hover:bg-zinc-100 transition-colors"
          aria-label="Notificações"
        >
          <Bell className="h-5 w-5" />  
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <Avatar fallback="VP" />
      </div>
    </header>
  )
}