"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Coffee, Briefcase, ShoppingBag, Heart } from "lucide-react"

const clients = [
  {
    icon: <Coffee className="w-10 h-10" />,
    title: "Hospitality",
    description: "Restaurants, Hotels, Bars & Lounges."
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Professional",
    description: "Agencies, Clinics, Lawyers & Finance."
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "E-commerce",
    description: "Retail, Fashion & Online Stores."
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Lifestyle",
    description: "Fitness, Wellness & Personal Brands."
  }
]

export function ClientTypes() {
  return (
    <Section id="clients" className="bg-white">
      <SectionHeader
        centered
        subtitle="Our Reach"
        title="We Serve Diverse Client Types"
        description="Our mission is to empower businesses across various industries by providing innovative solutions that resonate with their target audience."
        className="mb-20"
      />
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
              {client.icon}
            </div>
            <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{client.title}</h3>
            <p className="text-muted-foreground text-xs font-medium leading-relaxed max-w-[160px]">
              {client.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
