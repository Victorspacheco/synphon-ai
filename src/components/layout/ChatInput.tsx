"use client"

import { Paperclip, Plus, SendHorizonal } from "lucide-react"

export default function ChatInput() {
  return (
    <div className="w-full px-8 pb-6">
      <div className="w-full bg-[#F3F3F3] rounded-xl shadow-md flex flex-col justify-between gap-4 p-6">
        {/* Campo de input */}
        <input
          type="text"
          placeholder="Digite sua mensagem para o Symphon AI"
          className="w-full bg-transparent focus:outline-none text-xl text-gray-700 placeholder:text-gray-400"
        />

        {/* Ações */}
        <div className="flex items-center justify-between">
          {/* Ícones à esquerda */}
          <div className="flex items-center gap-3 text-gray-500">
            <Plus className="w-5 h-5" />
            <Paperclip className="w-5 h-5" />
          </div>

          {/* Botão de envio */}
          <button className="bg-[#7A5B3E] p-2 rounded-md shadow-md">
            <SendHorizonal className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}