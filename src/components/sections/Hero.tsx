"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Play } from "lucide-react"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export function Hero() {
  const [bgImage, setBgImage] = useState("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")

  useEffect(() => {
    async function fetchBg() {
      const { data } = await supabase
        .from("site_content")
        .select("value")
        .eq("key", "hero_bg")
        .single()
      if (data?.value) setBgImage(data.value)
    }
    fetchBg()
  }, [])

  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          className="w-full h-full object-cover"
          alt="Team collaboration"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/40 -z-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-20 md:pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 md:mb-8 block"
          >
            Creative Digital Agency
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1] md:leading-[1] mb-8 md:mb-10"
          >
            We Drive Growth <br className="hidden sm:block" /> 
            Through <span className="text-secondary italic">Design.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base lg:text-lg text-white/80 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We're your dedicated partners in propelling business toward success. 
            With a blend of expertise and innovation, we offer comprehensive solutions 
            tailored to your venture.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-center justify-center gap-4 md:gap-6"
          >
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 md:px-12 h-14 md:h-16 text-sm md:text-base font-bold group">
              Tell Me More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 translate-y-6 md:translate-y-12 mb-12">
          {[
            {
              title: "Strategic Growth",
              description: "Drive your business forward with data-driven insights and market-leading strategies.",
              icon: <ArrowRight className="w-5 h-5" />
            },
            {
              title: "Creative Identity",
              description: "Beautifully crafted visual identities that capture your essence and build trust.",
              icon: <ArrowRight className="w-5 h-5" />
            },
            {
              title: "Market Excellence",
              description: "Staying ahead of trends with innovative marketing and agile adaptation.",
              icon: <ArrowRight className="w-5 h-5" />
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-secondary mb-4 md:mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                {card.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-primary mb-3 md:mb-4">{card.title}</h3>
              <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed mb-6">
                {card.description}
              </p>
              <div className="text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:underline">Learn More</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
