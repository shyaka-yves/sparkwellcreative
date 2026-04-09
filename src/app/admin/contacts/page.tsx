"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { ContactSubmission } from "@/types"
import { formatDate } from "@/lib/utils"
import { Loader2, Mail, User, Clock } from "lucide-react"

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchContacts()
  }, [])

  async function fetchContacts() {
    setLoading(true)
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (!error && data) setContacts(data)
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <AdminHeader 
        title="Form Submissions" 
        description="View and manage messages from your potential clients."
      />

      {loading ? (
        <div className="flex justify-center p-20">
          <Loader2 className="w-10 h-10 animate-spin text-secondary" />
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-4 flex-grow">
                  <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2 text-primary bg-primary/5 px-3 py-1.5 rounded-lg">
                      <User size={14} />
                      {contact.name}
                    </div>
                    <div className="flex items-center gap-2 text-secondary bg-secondary/5 px-3 py-1.5 rounded-lg">
                      <Mail size={14} />
                      {contact.email}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg ml-auto">
                      <Clock size={14} />
                      {formatDate(contact.created_at)}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-primary mb-2 italic">Subject: {contact.subject}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-6 rounded-2xl italic">
                      "{contact.message}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {contacts.length === 0 && !loading && (
            <div className="bg-white p-20 rounded-[2rem] border border-dashed text-center text-slate-400 italic">
              No submissions yet. Stay tuned!
            </div>
          )}
        </div>
      )}
    </div>
  )
}
