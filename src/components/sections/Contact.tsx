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
    <Section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            subtitle="Get in Touch"
            title="Let's build something legendary together."
            description="Have a project in mind? Or just want to say hello? Drop us a message and our team will get back to you within 24 hours."
            className="mb-12"
          />
          
          <div className="space-y-10">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h5 className="font-bold text-primary mb-1 italic">Email us</h5>
                <p className="text-muted-foreground">hello@sparkwell.agency</p>
                <p className="text-muted-foreground">partnerships@sparkwell.agency</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h5 className="font-bold text-primary mb-1 italic">Call us</h5>
                <p className="text-muted-foreground">+1 (555) 000-1234</p>
                <p className="text-muted-foreground">Mon-Fri, 9am - 6pm PST</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h5 className="font-bold text-primary mb-1 italic">Our HQ</h5>
                <p className="text-muted-foreground">123 Creative Way, Suite 400</p>
                <p className="text-muted-foreground">San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Your Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white border-transparent border focus:border-secondary rounded-2xl px-6 py-4 text-sm focus:outline-none transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white border-transparent border focus:border-secondary rounded-2xl px-6 py-4 text-sm focus:outline-none transition-all shadow-sm"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Subject</label>
              <input 
                required
                name="subject"
                type="text" 
                placeholder="How can we help?" 
                className="w-full bg-white border-transparent border focus:border-secondary rounded-2xl px-6 py-4 text-sm focus:outline-none transition-all shadow-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Message</label>
              <textarea 
                required
                name="message"
                rows={5}
                placeholder="Tell us about your project..." 
                className="w-full bg-white border-transparent border focus:border-secondary rounded-2xl px-6 py-4 text-sm focus:outline-none resize-none transition-all shadow-sm"
              ></textarea>
            </div>
            
            <Button 
              disabled={loading}
              type="submit" 
              className="w-full rounded-2xl h-16 text-lg group"
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
                className="text-green-600 text-sm font-bold text-center mt-4"
              >
                Message sent successfully! We'll be in touch soon.
              </motion.p>
            )}
            
            {error && (
              <p className="text-red-500 text-sm font-bold text-center mt-4">{error}</p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
