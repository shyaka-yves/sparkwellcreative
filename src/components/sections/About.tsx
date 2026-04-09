"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { ArrowUpRight } from "lucide-react"

export function About() {
  return (
    <Section id="about" className="bg-slate-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Agency Culture" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          
          {/* Floating stat */}
          <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
            <p className="text-4xl font-bold text-primary tracking-tighter">10+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Years Excellence</p>
          </div>
        </motion.div>

        <div>
          <SectionHeader
            subtitle="The Agency"
            title="We shape the world's most ambitious brands."
            className="mb-8"
          />
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              At Sparkwell, we believe that great design is not just about aesthetics—it's about results. 
              Our multidisciplinary team combines strategy, creativity, and technology to help 
              forward-thinking companies achieve their full potential.
            </p>
            <p>
              We don't just follow trends; we set them. By deeply understanding your business goals and 
              audience needs, we craft bespoke solutions that drive growth and build lasting connections.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-primary mb-2">Creative</h4>
              <p className="text-sm text-muted-foreground">Bold visions translated into stunning reality.</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary mb-2">Strategic</h4>
              <p className="text-sm text-muted-foreground">Data-driven insights that power every decision.</p>
            </div>
          </div>
          
          <Button variant="link" className="mt-12 px-0 text-secondary group">
            Our Mission & Approach
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Section>
  )
}
