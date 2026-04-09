"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/Button"

const advantages = [
  {
    title: "Expert Team",
    description: "Our skilled team brings specialized knowledge and experience to provide top-notch solutions tailored to our clients' needs."
  },
  {
    title: "Cutting-Edge Technology",
    description: "We use the latest tools and technology to stay ahead, ensuring efficient and effective services for every project."
  },
  {
    title: "Customer Focus",
    description: "We prioritize building strong relationships and understanding our clients' needs, leading to long-term partnerships."
  },
  {
    title: "Proven Success",
    description: "With a track record of successful projects, we've earned a reputation for reliability and excellence in the market."
  }
]

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-slate-50/50 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            subtitle="Efficiency"
            title="Key Competitive Advantages"
            description="We combine deep technical expertise with creative intuition to deliver unparalleled results for our clients."
            className="mb-12"
          />
          
          <div className="space-y-10">
            {advantages.map((adv, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Check size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{adv.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button className="mt-12 rounded-full px-10 h-14 bg-primary hover:bg-primary/90 text-white font-bold group">
            Work With Us
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Check className="ml-2 w-5 h-5" />
            </motion.span>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Elite Business Environment" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-primary/80 to-transparent">
              <p className="text-white text-3xl font-bold italic mb-2">Proven Success</p>
              <p className="text-white/70 text-sm italic italic">"Leading brands trust us to navigate the complexities of digital evolution."</p>
            </div>
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </Section>
  )
}
