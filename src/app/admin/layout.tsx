"use client"

import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { usePathname } from "next/navigation"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/admin/login"

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {!isLoginPage && <AdminSidebar />}
      <main className={`flex-grow p-6 lg:p-10 ${!isLoginPage ? "lg:ml-64" : ""}`}>
        {children}
      </main>
    </div>
  )
}
