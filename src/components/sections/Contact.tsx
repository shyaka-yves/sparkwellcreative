"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      if (!supabase) throw new Error("Supabase not initialized. Please add your keys to .env.local")
      const { error: submitError } = await supabase.from("contacts").insert([data])
      if (submitError) throw submitError
      
      setSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact" className="bg-slate-50/30">
      <SectionHeader
        centered
        subtitle="Contact"
        title="Let's Build Something"
        description="Your brand is just one step away from achieving its full potential. Let's start the conversation."
        className="mb-20"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-6">Connect With Us</h4>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Email us</p>
                    <p className="text-xl font-bold text-primary italic">Sparkwell@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Call us</p>
                    <p className="text-xl font-bold text-primary italic">+250 783663138</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Our HQ</p>
                    <p className="text-xl font-bold text-primary italic">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-[2rem] bg-primary text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl flex-shrink-0" />
              <p className="text-sm font-medium leading-relaxed relative z-10">
                "Our collaborative approach ensures that we're not just service providers but invested advocates for your growth."
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-secondary relative z-10">- SPARKWELL CORE VALUE</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Your Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="e.g. John Doe" 
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="e.g. john@example.com" 
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Subject</label>
              <input 
                required
                name="subject"
                type="text" 
                placeholder="How can we help?" 
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Message</label>
              <textarea 
                required
                name="message"
                rows={5}
                placeholder="Tell us about your project..." 
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-secondary/20 focus:outline-none resize-none transition-all"
              ></textarea>
            </div>
            
            <Button 
              disabled={loading}
              type="submit" 
              className="w-full rounded-2xl h-16 text-base font-black tracking-widest uppercase group bg-primary hover:bg-primary/90 text-white"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Send Message
                  <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </Button>
            
            {success && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-xs font-bold text-center"
              >
                Message sent successfully! We'll be in touch soon.
              </motion.p>
            )}
            
            {error && (
              <p className="text-red-500 text-xs font-bold text-center">{error}</p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
