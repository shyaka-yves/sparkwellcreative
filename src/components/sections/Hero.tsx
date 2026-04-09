"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 skew-x-12 translate-x-1/4" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block"
          >
            Creative Digital Agency
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-primary leading-[0.9] mb-8">
            Propelling <br /> 
            <span className="text-secondary italic">Business</span> toward <br />
            Success.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            We're your dedicated partners in growth. With a blend of expertise and innovation, we offer 
            comprehensive solutions tailored to meet the specific needs of each venture.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group">
              View Our Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 w-4 h-4 fill-primary" />
              Watch Reel
            </Button>
          </div>
          
          <div className="mt-16 flex items-center gap-8 grayscale opacity-40">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Trusted by</span>
            <div className="flex gap-6 items-center font-bold text-xl tracking-tighter">
              <span>FORBES</span>
              <span>TECH</span>
              <span>WIRED</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-6 translate-y-6 -z-10" />
            <div className="absolute inset-0 border-2 border-secondary/20 rounded-2xl transform -translate-x-6 -translate-y-6 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Sparkwell Agency Team" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Decorative Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                <span className="font-bold">98%</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Client Retention</p>
                <p className="text-sm font-bold text-primary italic">"Exceptional Growth"</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
