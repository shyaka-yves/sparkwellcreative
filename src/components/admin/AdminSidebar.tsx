"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Tag, 
  MessageSquare, 
  LogOut,
  ChevronRight,
  Settings
} from "lucide-react"
import { supabase } from "@/lib/supabase"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "Overview", href: "/admin", icon: <LayoutDashboard size={20} /> },
  { name: "Content", href: "/admin/content", icon: <Settings size={20} /> },
  { name: "Portfolio", href: "/admin/portfolio", icon: <Briefcase size={20} /> },
  { name: "Team", href: "/admin/team", icon: <Users size={20} /> },
  { name: "Pricing", href: "/admin/pricing", icon: <Tag size={20} /> },
  { name: "Contacts", href: "/admin/contacts", icon: <MessageSquare size={20} /> },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col h-screen fixed top-0 left-0 z-40">
      <div className="p-8 border-bottom border-slate-50">
        <Link href="/" className="text-xl font-bold text-primary tracking-tighter">
          SPARKWELL<span className="text-secondary">.</span>
        </Link>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 font-bold">Admin Panel</p>
      </div>

      <nav className="flex-grow p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between p-3 rounded-xl transition-all group",
                isActive 
                  ? "bg-primary text-white shadow-lg" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-primary"
              )}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
              {isActive && <ChevronRight size={16} />}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-50">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 w-full text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all rounded-xl text-sm font-semibold"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
