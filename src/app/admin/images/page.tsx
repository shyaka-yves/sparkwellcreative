"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { uploadImage } from "@/lib/storage"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { Button } from "@/components/ui/Button"
import { Image as ImageIcon, Upload, Loader2, Save, Trash2 } from "lucide-react"

interface SiteImage {
  id: string
  key: string
  label: string
  url: string
  section: string
}

const INITIAL_IMAGES = [
  { key: "site_logo", label: "Site Logo", section: "General", url: "/logo.png" },
  { key: "hero_bg", label: "Hero Background", section: "Hero", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" },
  { key: "about_image", label: "About Section Image", section: "About", url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" },
  { key: "contact_bg", label: "Contact Section Background", section: "Contact", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" },
]

export default function ImagesAdmin() {
  const [images, setImages] = useState<SiteImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploadingKey, setUploadingKey] = useState<string | null>(null)

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    setLoading(true)
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .in("key", INITIAL_IMAGES.map(img => img.key))

    const dbImages = data || []
    const combined = INITIAL_IMAGES.map(initial => {
      const found = dbImages.find((db: any) => db.key === initial.key)
      return {
        id: found?.id || initial.key,
        key: initial.key,
        label: initial.label,
        section: initial.section,
        url: found?.value || initial.url
      }
    })

    setImages(combined)
    setLoading(false)
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingKey(key)
    try {
      const publicUrl = await uploadImage(file, "site-images")
      
      // Update or Insert into site_content
      const { data: existing } = await supabase
        .from("site_content")
        .select("id")
        .eq("key", key)
        .single()

      if (existing) {
        await supabase
          .from("site_content")
          .update({ value: publicUrl })
          .eq("key", key)
      } else {
        const img = INITIAL_IMAGES.find(i => i.key === key)
        await supabase
          .from("site_content")
          .insert({
            key,
            value: publicUrl,
            section: img?.section || "General"
          })
      }

      setImages(prev => prev.map(img => img.key === key ? { ...img, url: publicUrl } : img))
      alert(`${key} updated successfully!`)
    } catch (error: any) {
      alert("Error uploading image: " + error.message)
    } finally {
      setUploadingKey(null)
    }
  }

  return (
    <div className="space-y-8">
      <AdminHeader 
        title="Site Images" 
        description="Global image management. Change logos, backgrounds, and key section images."
      />

      {loading ? (
        <div className="flex justify-center p-20">
          <Loader2 className="w-10 h-10 animate-spin text-secondary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image) => (
            <div key={image.key} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary italic">{image.section}</span>
                  <h3 className="font-bold text-lg">{image.label}</h3>
                </div>
                <ImageIcon className="text-slate-300" size={20} />
              </div>

              <div className="relative group aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-50">
                <img 
                  src={image.url} 
                  alt={image.label}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <label className="cursor-pointer bg-white text-primary p-3 rounded-xl hover:scale-110 transition-transform shadow-lg">
                    <Upload size={20} />
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, image.key)}
                      disabled={uploadingKey === image.key}
                    />
                  </label>
                </div>
                {uploadingKey === image.key && (
                  <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center">
                    <Loader2 className="animate-spin text-primary mb-2" />
                    <span className="text-[10px] font-bold uppercase">Uploading...</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={image.url} 
                  disabled 
                  className="flex-grow bg-slate-50 border-transparent border rounded-xl px-4 py-2 text-[10px] text-slate-400 focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
