"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work across a diverse range of industries including Hospitality, Professional Services, E-commerce, and Lifestyle. Our adaptive strategy allows us to provide unique value regardless of the sector."
  },
  {
    question: "How long does a typical branding project take?",
    answer: "A complete brand identity project typically takes 4-8 weeks, depending on the complexity and the number of deliverables. We follow an agile process to ensure timely results without compromising quality."
  },
  {
    question: "Do you offer full-service marketing management?",
    answer: "Yes, our Standard and Premium plans are designed for ongoing marketing management, including social media, SEO, advertising, and analytics reporting."
  },
  {
    question: "How do we get started with Sparkwell?",
    answer: "Simply use our contact form or call us to schedule an initial consultation. We'll discuss your goals, analyze your needs, and recommend the best plan to propel your business forward."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" className="bg-white">
      <SectionHeader
        centered
        subtitle="Help Center"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services and process."
        className="mb-20"
      />
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-slate-100 last:border-none"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-6 group text-left"
            >
              <h4 className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-secondary' : 'text-primary group-hover:text-secondary'}`}>
                {faq.question}
              </h4>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-secondary text-white' : 'bg-slate-50 text-primary'}`}>
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground text-sm leading-relaxed pb-8 max-w-2xl">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  )
}
