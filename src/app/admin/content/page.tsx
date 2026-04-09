"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { Button } from "@/components/ui/Button"
import { Save, Loader2, RefreshCw } from "lucide-react"
import { SiteContent } from "@/types"

export default function ContentAdmin() {
  const [content, setContent] = useState<SiteContent[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchContent()
  }, [])

  async function fetchContent() {
    setLoading(true)
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
    
    if (!error && data) setContent(data)
    setLoading(false)
  }

  async function handleUpdate(id: string, value: string) {
    setContent(prev => prev.map(item => item.id === id ? { ...item, value } : item))
  }

  async function saveChanges() {
    setSaving(true)
    const { error } = await supabase.from("site_content").upsert(content)
    if (!error) alert("Content updated successfully!")
    setSaving(false)
  }

  return (
    <div className="space-y-6">
      <AdminHeader 
        title="Content Management" 
        description="Edit headlines, subheadings, and general text across the site."
      >
        <Button onClick={saveChanges} disabled={saving} className="rounded-xl flex gap-2">
          {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save All Changes
        </Button>
      </AdminHeader>

      {loading ? (
        <div className="flex justify-center p-20">
          <Loader2 className="w-10 h-10 animate-spin text-secondary" />
        </div>
      ) : (
        <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm space-y-8">
          {content.length === 0 && (
            <div className="text-center py-10">
              <p className="text-slate-400 italic mb-4">No dynamic content found in `site_content` table.</p>
              <Button variant="outline" onClick={fetchContent} className="rounded-xl">
                <RefreshCw size={16} className="mr-2" />
                Retry Fetch
              </Button>
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-8">
            {content.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary italic">{item.section}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">/</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{item.key}</span>
                </div>
                <textarea
                  value={item.value}
                  onChange={(e) => handleUpdate(item.id, e.target.value)}
                  className="w-full bg-slate-50 border-transparent border focus:border-secondary rounded-2xl px-6 py-4 text-sm focus:outline-none resize-none transition-all shadow-sm min-h-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
