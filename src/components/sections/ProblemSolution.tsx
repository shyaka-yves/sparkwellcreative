"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react"

const challenges = [
  {
    icon: <AlertCircle className="w-8 h-8 text-red-500" />,
    title: "Market Noise",
    description: "In an overcrowded digital landscape, standing out is harder than ever before."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
    title: "The Solution",
    description: "We craft unique brand identities that cut through the noise and resonate instantly."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Continuous Growth",
    description: "Our strategies are built for longevity, ensuring your brand evolves with the market."
  }
]

export function ProblemSolution() {
  return (
    <Section className="bg-white">
      <SectionHeader
        centered
        subtitle="The Challenge"
        title="Why brands struggle in the digital age."
        description="The digital landscape is evolving at breakneck speed. Many brands fail to keep up, leading to lost relevance and missed opportunities."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {challenges.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-24 p-12 bg-primary text-white rounded-[2rem] relative overflow-hidden text-center lg:text-left"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="lg:flex items-center justify-between gap-12">
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 italic">We don't just solve problems, <span className="text-secondary">we architect success.</span></h3>
            <p className="text-white/70 mb-8 lg:mb-0 text-lg">
              Our approach is holistic, combining deep technical expertise with creative intuition to deliver 
              unparalleled results.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl font-extrabold tracking-tighter">85%</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-secondary text-center">Average ROI Increase</div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
