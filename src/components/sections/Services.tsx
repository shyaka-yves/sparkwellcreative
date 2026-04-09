"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { 
  Palette, 
  Megaphone, 
  PenTool, 
  Globe, 
  BarChart3, 
  Cpu
} from "lucide-react"

const services = [
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Brand Building",
    description: "We create a strong brand identity, including logos and design elements, to help startups stand out and gain trust."
  },
  {
    icon: <Megaphone className="w-10 h-10" />,
    title: "Digital Marketing",
    description: "We develop effective online marketing strategies using channels like social media, email, and ads to reach potential customers."
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Marketing Analytics",
    description: "We provide deep insights and detailed reports on marketing performance to help businesses make informed decisions."
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "PR Support",
    description: "We help businesses get media coverage and build relationships with relevant journalists and influencers."
  }
]

export function Services() {
  return (
    <Section id="services" className="bg-slate-50">
      <SectionHeader
        centered
        subtitle="Our Services"
        title="Solutions tailored for the next generation of business."
        description="We offer a comprehensive suite of creative and technical services designed to elevate your brand."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-10 rounded-3xl bg-white border border-slate-100 hover:border-secondary/50 hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 mb-8">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
            
            <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">Learn More</span>
              <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center text-secondary">
                <Globe size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
