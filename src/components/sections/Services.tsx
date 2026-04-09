"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { 
  Palette, 
  Megaphone, 
  Globe, 
  BarChart3,
  ArrowRight
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
    <Section id="services" className="bg-slate-50/50">
      <SectionHeader
        centered
        subtitle="Expertise"
        title="Our Services"
        description="Comprehensive solutions tailored for the next generation of business success."
        className="mb-20"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex gap-8 items-start p-6 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 flex-shrink-0">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6 max-w-sm">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight size={12} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
