"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { Button } from "@/components/ui/Button"
import { Plus, Trash2, Edit, Loader2, Image as ImageIcon } from "lucide-react"
import { Project } from "@/types"

export default function PortfolioAdmin() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    setLoading(true)
    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (!error && data) setProjects(data)
    setLoading(false)
  }

  async function deleteProject(id: string) {
    if (!confirm("Are you sure?")) return
    const { error } = await supabase.from("portfolio").delete().eq("id", id)
    if (!error) fetchProjects()
  }

  return (
    <div className="space-y-6">
      <AdminHeader 
        title="Portfolio Management" 
        description="Add, edit or remove projects from your showcase."
      >
        <Button className="rounded-xl flex gap-2">
          <Plus size={18} />
          Add Project
        </Button>
      </AdminHeader>

      {loading ? (
        <div className="flex justify-center p-20">
          <Loader2 className="w-10 h-10 animate-spin text-secondary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group">
              <div className="aspect-video bg-slate-100 relative">
                {project.image_url ? (
                  <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-300">
                    <ImageIcon size={48} />
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-primary truncate pr-4">{project.title}</h3>
                  <div className="flex gap-2">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => deleteProject(project.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-2">{project.category}</p>
                <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}

          {projects.length === 0 && !loading && (
            <div className="col-span-full bg-white p-20 rounded-[2rem] border border-dashed text-center text-slate-400 italic">
              No projects found. Use the "Add Project" button to create your first one.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
