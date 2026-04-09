"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Eco-Luxe Resorts",
    category: "Branding & Web Design",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    client: "EcoResorts Intl"
  },
  {
    title: "Urban Gastronomy",
    category: "Social Media & Content",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    client: "Urban Bistro Group"
  },
  {
    title: "Velvet Lounge",
    category: "Brand Activation",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    client: "Sovereign Clubs"
  },
  {
    title: "Lumiere Fashion",
    category: "E-commerce Strategy",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    client: "Lumiere Paris"
  },
  {
    title: "Zenith Tech",
    category: "B2B Lead Gen",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    client: "Zenith Solutions"
  },
  {
    title: "Origins Coffee",
    category: "Package Design",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    client: "Origins Collective"
  }
]

export function Portfolio() {
  return (
    <Section id="portfolio" className="bg-white">
      <SectionHeader
        subtitle="Our Work"
        title="Impactful stories told through design."
        description="We partner with visionaries to build brands that matter. Here are some of our recent collaborations."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-secondary transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/60 text-sm tracking-wide">{project.client}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
