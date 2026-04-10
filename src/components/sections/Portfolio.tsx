"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { ExternalLink } from "lucide-react"

const partners = [
  { name: "La Creola", slug: "la-creola" },
  { name: "Bel Ombre", slug: "bel-ombre" },
  { name: "Indochine", slug: "indochine" },
  { name: "Azuurii", slug: "azuurii" }
]

export function Portfolio() {
  return (
    <Section id="portfolio" className="bg-white">
      <SectionHeader
        centered
        subtitle="Our Reach"
        title="Partners We've Propelled"
        description="We partner with visionaries across industries to create lasting market presence and growth."
        className="mb-16"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center justify-center transition-all duration-500"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              <img 
                src={`/partners/${partner.slug}.png`}
                alt={partner.name}
                className="max-h-16 md:max-h-20 w-auto object-contain transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden">
                <span className="text-xl font-black text-primary/30 uppercase tracking-tighter">
                  {partner.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
