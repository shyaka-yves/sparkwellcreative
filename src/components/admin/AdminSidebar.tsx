"use client"

import { useState } from "react"
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
  Settings,
  Menu,
  X
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
  const [isOpen, setIsOpen] = useState(false)

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <>
      {/* Mobile Header overlay */}
      <div className="lg:hidden bg-white border-b border-slate-100 p-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Sparkwell Creative" className="h-8 w-auto" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-primary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Content */}
      <aside className={cn(
        "w-64 bg-white border-r border-slate-100 flex flex-col h-screen fixed top-0 left-0 z-40 transition-transform duration-300",
        "lg:translate-x-0 lg:block", // always visible on desktop
        isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full" // toggle on mobile
      )}>
        <div className="p-8 border-b border-slate-50 hidden lg:block">
          <Link href="/" className="group inline-block transition-transform hover:scale-105">
            <img 
              src="/logo.png" 
              alt="Sparkwell Creative" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden">
              <span className="text-xl font-bold text-primary tracking-tighter block">
                SPARKWELL<span className="text-secondary">.</span>
              </span>
            </div>
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-3 font-bold">Admin Panel</p>
        </div>

        <nav className="flex-grow p-4 space-y-2 mt-4 lg:mt-0 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
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

        <div className="p-4 border-t border-slate-50 bg-white">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 w-full text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all rounded-xl text-sm font-semibold"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      
      {/* Mobile Overlay Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
