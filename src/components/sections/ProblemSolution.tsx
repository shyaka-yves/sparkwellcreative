"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { AlertCircle, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

const challenges = [
  {
    icon: <AlertCircle className="w-8 h-8 text-red-500" />,
    title: "Brand Differentiation",
    description: "Businesses often find it hard to make their brand unique. Without a clear way to stand out, they catch less attention and lose out to bigger competitors."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
    title: "Brand Messaging",
    description: "Inconsistency across marketing channels confuses customers and dilutes brand perception. We help maintain a cohesive, resonant message."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Keeping Up with Trends",
    description: "The market changes fast. Without a dedicated team, it's tough to stay on top of the latest trends and adapt marketing strategies accordingly."
  }
]

export function ProblemSolution() {
  return (
    <Section id="challenges" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            subtitle="The Challenge"
            title="Why Many Brands Fail"
            description="The digital landscape is evolving at breakneck speed. Many brands fail to keep up, leading to lost relevance and missed opportunities."
            className="mb-12"
          />
          
          <div className="space-y-10">
            {challenges.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="mt-12 group rounded-full px-8 border-secondary text-secondary hover:bg-secondary hover:text-white">
            Discover Our Method
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Strategic Planning" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-60" />
            
            {/* Overlay Graph Element Concept */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 border-l-2 border-b-2 border-white/40 flex items-end p-8">
                <motion.div 
                  initial={{ width: 0, height: 0 }}
                  whileInView={{ width: "100%", height: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-gradient-to-tr from-secondary/40 to-white/10 rounded-tr-[100px] border-t-4 border-r-4 border-secondary shadow-lg backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
          
          {/* Floating result card */}
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <TrendingUp size={20} />
              </div>
              <span className="font-bold text-primary italic">Success Blueprint</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our <span className="text-secondary font-bold">Innovative Solutions</span> ensure your venture stays ahead of the curve through agile adaptation.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
