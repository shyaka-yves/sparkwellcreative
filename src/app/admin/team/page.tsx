"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { Button } from "@/components/ui/Button"
import { Plus, Trash2, Edit, Loader2, User } from "lucide-react"
import { TeamMember } from "@/types"

export default function TeamAdmin() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMembers()
  }, [])

  async function fetchMembers() {
    setLoading(true)
    const { data, error } = await supabase
      .from("team")
      .select("*")
      .order("order", { ascending: true })
    
    if (!error && data) setMembers(data)
    setLoading(false)
  }

  async function deleteMember(id: string) {
    if (!confirm("Are you sure?")) return
    const { error } = await supabase.from("team").delete().eq("id", id)
    if (!error) fetchMembers()
  }

  return (
    <div className="space-y-6">
      <AdminHeader 
        title="Team Management" 
        description="Manage the experts behind Sparkwell."
      >
        <Button className="rounded-xl flex gap-2">
          <Plus size={18} />
          Add Member
        </Button>
      </AdminHeader>

      {loading ? (
        <div className="flex justify-center p-20">
          <Loader2 className="w-10 h-10 animate-spin text-secondary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group">
              <div className="aspect-[3/4] bg-slate-100 relative">
                {member.image_url ? (
                  <img src={member.image_url} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-300">
                    <User size={48} />
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-primary truncate pr-4">{member.name}</h3>
                  <div className="flex gap-2">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => deleteMember(member.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs line-clamp-2 italic">"{member.bio}"</p>
              </div>
            </div>
          ))}

          {members.length === 0 && !loading && (
            <div className="col-span-full bg-white p-20 rounded-[2rem] border border-dashed text-center text-slate-400 italic">
              No team members found. Start by adding your first teammate.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
