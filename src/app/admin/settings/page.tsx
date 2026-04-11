"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { Button } from "@/components/ui/Button"
import { User, Shield, Plus, Loader2, Save } from "lucide-react"

export default function SettingsPage() {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<any>(null)
  const [admins, setAdmins] = useState<any[]>([])
  const [newAdminEmail, setNewAdminEmail] = useState("")
  const [inviting, setInviting] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    setProfile(user)
    
    // In a real app, you'd fetch from a 'profiles' table with 'is_admin' field
    // For now we'll just show the current user as the main admin
    setAdmins([
      { email: user?.email, role: "Super Admin", status: "active" }
    ])
    setLoading(false)
  }

  async function handleInviteAdmin(e: React.FormEvent) {
    e.preventDefault()
    if (!newAdminEmail) return
    
    setInviting(true)
    // In a real app, you'd use a server action with service role key to invite
    // For now we'll simulate adding to a list
    setTimeout(() => {
      setAdmins(prev => [...prev, { email: newAdminEmail, role: "Admin", status: "pending" }])
      setNewAdminEmail("")
      setInviting(false)
      alert("Invitation sent to " + newAdminEmail)
    }, 1000)
  }

  return (
    <div className="space-y-8">
      <AdminHeader 
        title="Settings" 
        description="Manage your profile and administrator access."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Section */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <User size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">My Profile</h3>
              <p className="text-sm text-slate-500">Update your account information</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 block">Email Address</label>
              <input 
                type="email" 
                value={profile?.email || ""} 
                disabled 
                className="w-full bg-slate-50 border-transparent border rounded-2xl px-6 py-4 text-sm focus:outline-none opacity-60"
              />
            </div>
            <Button variant="outline" className="rounded-xl w-full">
              Change Password
            </Button>
          </div>
        </div>

        {/* Admins Section */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Administrators</h3>
              <p className="text-sm text-slate-500">Manage who can access this panel</p>
            </div>
          </div>

          <div className="space-y-4">
            <form onSubmit={handleInviteAdmin} className="flex gap-2">
              <input 
                type="email" 
                placeholder="New admin email..." 
                value={newAdminEmail}
                onChange={(e) => setNewAdminEmail(e.target.value)}
                className="flex-grow bg-slate-50 border-transparent border focus:border-secondary rounded-2xl px-6 py-4 text-sm focus:outline-none transition-all shadow-sm"
              />
              <Button type="submit" disabled={inviting} className="rounded-2xl px-4">
                {inviting ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
              </Button>
            </form>

            <div className="space-y-2">
              {admins.map((admin, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div>
                    <p className="text-sm font-bold">{admin.email}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{admin.role}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest ${
                    admin.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {admin.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
