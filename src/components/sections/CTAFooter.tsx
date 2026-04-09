"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function CTAFooter() {
  return (
    <Section className="py-0">
      <div className="bg-primary rounded-[3rem] overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent -z-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto text-center py-20 md:py-32 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter"
          >
            Ready To Spark Your Brand into <br />
            <span className="text-secondary italic">Action & Growth?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join the ranks of leading brands that have redefined their digital presence 
            and market impact with Sparkwell Creative.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-white text-primary hover:bg-slate-50 rounded-full px-12 h-16 text-lg font-black tracking-widest uppercase group">
              Start Project
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
