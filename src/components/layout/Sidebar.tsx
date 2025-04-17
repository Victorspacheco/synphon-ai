 "use client"
 
 import { Home, MessageCircle, Settings, Users } from "lucide-react"
 
 const sidebarItems = [
   { icon: Home, label: "Início" },
   { icon: Users, label: "Grupos" },
   { icon: MessageCircle, label: "Mensagens" },
   { icon: Settings, label: "Configurações" },
 ]
 
 export default function Sidebar() {
   return (
     <aside className="w-16 bg-[#7A5B3E] text-white flex flex-col justify-between py-4 items-center rounded-none">
       <div className="flex flex-col gap-6">
         {sidebarItems.map((item, index) => (
           <button key={index} className="hover:opacity-80 transition-opacity">
             <item.icon className="w-6 h-6" />
           </button>
         ))}
       </div>
       <div className="w-10 h-10 bg-white text-[#7A5B3E] font-bold flex items-center justify-center rounded-md">
         DR
       </div>
     </aside>
   )
 }