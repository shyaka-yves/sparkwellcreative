"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "Sparkwell Creative is a creative powerhouse. The team understood our vision and delivered beyond expectations. Our rebrand has re-energized our market presence.",
    author: "Jane Doe",
    role: "Marketing Director, La Creola",
    logo: "/partners/la-creola.png"
  },
  {
    text: "Working with Sparkwell was a game-changer for Bel Ombre. Their strategic approach to social media helped us reach a much wider audience and drive bookings.",
    author: "John Smith",
    role: "General Manager, Bel Ombre Hotel",
    logo: "/partners/bel-ombre.png"
  },
  {
    text: "The analytics and insights provided by Sparkwell allowed us to make better marketing decisions. We've seen a measurable increase in ROI within the first 6 months.",
    author: "Alice Brown",
    role: "CEO, Indochine Ventures",
    logo: "/partners/indochine.png"
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <Section id="testimonials" className="bg-slate-50/30 overflow-hidden">
      <SectionHeader
        centered
        subtitle="Voices"
        title="Stories From Happy Customers and Partners"
        description="We take pride in our collaborations. Here's what our partners have to say about working with Sparkwell Creative."
        className="mb-16"
      />
      
      <div className="max-w-4xl mx-auto relative px-6">
        <div className="absolute top-1/2 -left-4 md:-left-20 -translate-y-1/2 z-10">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        
        <div className="absolute top-1/2 -right-4 md:-right-20 -translate-y-1/2 z-10">
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 relative">
          <div className="absolute top-10 right-10 text-secondary/10">
            <Quote size={80} fill="currentColor" />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic mb-8 max-w-2xl">
                "{testimonials[current].text}"
              </p>
              
              <div className="w-12 h-1 bg-secondary rounded-full mb-6" />
              
              <h4 className="text-lg font-bold text-primary">{testimonials[current].author}</h4>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mt-1">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${current === i ? 'w-8 bg-secondary' : 'w-2 bg-slate-200'}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
