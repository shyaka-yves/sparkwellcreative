"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Instagram, Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Alex Sterling",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    bio: "Visionary leader with 15+ years in global brand strategy."
  },
  {
    name: "Sarah Chen",
    role: "Head of Digital Strategy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Data wizard specializing in exponential growth marketing."
  },
  {
    name: "Marcus Thorne",
    role: "Lead Tech Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "Building robust digital infrastructures for the modern web."
  },
  {
    name: "Elena Rodriguez",
    role: "Content Strategy Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Master storyteller crafting narratives that resonate."
  }
]

export function Team() {
  return (
    <Section id="team" className="bg-slate-50">
      <SectionHeader
        centered
        subtitle="The Experts"
        title="Meet the minds behind Sparkwell."
        description="Our team is a blend of creative rebels and technical masters dedicated to your brand's success."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-xl">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-4 bottom-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary hover:bg-secondary hover:text-white cursor-pointer transition-colors">
                  <Linkedin size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary hover:bg-secondary hover:text-white cursor-pointer transition-colors">
                  <Twitter size={18} />
                </div>
              </div>
            </div>
            <div className="text-center px-4">
              <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
              <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm line-clamp-2">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
