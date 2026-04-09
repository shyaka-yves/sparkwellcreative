"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Check } from "lucide-react"

const advantages = [
  {
    title: "Expert Team",
    description: "Our multidisciplinary experts bring decades of experience in design, tech, and marketing."
  },
  {
    title: "Cutting-edge Tech",
    description: "We leverage the latest tools and frameworks to build scalable, high-performance solutions."
  },
  {
    title: "Result Oriented",
    description: "Every decision we make is backed by data and focused on your specific business goals."
  },
  {
    title: "Client-First Support",
    description: "We work as an extension of your team, providing proactive support and clear communication."
  }
]

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
          <SectionHeader
            subtitle="The Advantage"
            title="We build bridges between brands and people."
            description="Our unique mix of creativity and technical prowess allows us to deliver solutions that are not only beautiful but also functional and scalable."
            className="mb-10"
          />
          
          <div className="space-y-8">
            {advantages.map((adv, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">{adv.title}</h4>
                  <p className="text-muted-foreground text-sm">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="space-y-6 pt-12">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Meeting" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-secondary p-8 flex flex-col justify-end text-white">
              <p className="text-4xl font-bold tracking-tighter">98%</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mt-2">Satisfaction Rate</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-primary p-8 flex flex-col justify-end text-white">
              <p className="text-4xl font-bold tracking-tighter">200+</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mt-2">Projects Delivered</p>
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Office" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
