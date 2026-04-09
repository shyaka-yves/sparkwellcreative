"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Target, TrendingUp, Users, Building2 } from "lucide-react"

const accomplishments = [
  {
    year: "2022",
    title: "The Launch",
    description: "Successfully launched our core services, forming key industry partnerships and receiving stellar user feedback."
  },
  {
    year: "2023",
    title: "Expansion",
    description: "Expanded into new markets, improved operational efficiency, and saw a significant jump in customer satisfaction."
  },
  {
    year: "2024",
    title: "Growth Funding",
    description: "Secured strategic funding for growth and refined our offerings based on deep customer insights."
  },
  {
    year: "Present",
    title: "Market Leader",
    description: "Achieved profitability and solidified our brand reputation as a reliable partner for business success."
  }
]

export function MarketImpact() {
  return (
    <Section id="impact" className="bg-slate-50 overflow-hidden">
      <div className="flex flex-col gap-24">
        {/* Market Size Section */}
        <div>
          <SectionHeader
            subtitle="Market Opportunity"
            title="Empowering the Business Ecosystem in Rwanda."
            description="With over 269,000 businesses in Rwanda, Sparkwell is strategically positioned to drive digital transformation for thousands of ventures."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                <Building2 size={24} />
              </div>
              <p className="text-4xl font-extrabold text-primary mb-2">269K+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total Businesses</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/5 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Target size={24} />
              </div>
              <p className="text-4xl font-extrabold text-secondary mb-2">81.5%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Addressable Sectors</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                <Users size={24} />
              </div>
              <p className="text-4xl font-extrabold text-primary mb-2">40K+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Potential Clients</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-secondary/20 shadow-lg bg-gradient-to-br from-white to-secondary/5">
              <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <p className="text-4xl font-extrabold text-secondary mb-2">28K+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-primary font-black">Our Growth Goal</p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <SectionHeader
            subtitle="Our Journey"
            title="From Vision to Reality."
            className="mb-16"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 md:top-1/2 left-8 md:left-0 w-1 md:w-full h-full md:h-1 bg-slate-200 -translate-y-0 md:-translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {accomplishments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 md:pl-0 md:pt-12"
                >
                  {/* Dot */}
                  <div className="absolute top-0 md:top-1/2 left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-secondary rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
                  
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-secondary/50 transition-colors">
                    <span className="text-secondary font-black text-2xl md:text-3xl mb-4 block italic">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
