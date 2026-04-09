"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic Plan",
    description: "Essential tools for startups and small ventures.",
    features: [
      "Brand Consultation",
      "Standard Logo Design",
      "Social Media Kit",
      "Responsive UI",
      "Cloud Hosting"
    ],
    is_popular: false
  },
  {
    name: "Standard Plan",
    description: "Enhanced capabilities for growing businesses.",
    features: [
      "Advanced Strategy",
      "Full Identity Suite",
      "Social Management",
      "Dynamic Website",
      "Monthly Analytics"
    ],
    is_popular: true
  },
  {
    name: "Premium Plan",
    description: "Full-service solution for market leaders.",
    features: [
      "VIP Consulting",
      "Omnichannel Experience",
      "Paid Ads Mastery",
      "AI-Powered Insights",
      "24/7 Priority Support"
    ],
    is_popular: false
  }
]

export function Pricing() {
  return (
    <Section id="packages" className="bg-white">
      <SectionHeader
        centered
        subtitle="Investment"
        title="Our Packages"
        description="Choose a plan that fits your current needs and scale as your brand grows."
        className="mb-20"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto items-center">
        {plans.map((plan, index) => {
          const isStandard = plan.name === "Standard Plan"
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[3rem] transition-all duration-500 relative flex flex-col z-10 ${
                isStandard 
                ? 'bg-primary text-white shadow-2xl scale-110 h-[580px] z-20' 
                : 'bg-white text-primary border border-slate-100 hover:shadow-xl h-[520px]'
              }`}
            >
              <div className="mb-8 text-center">
                <h3 className={`text-lg font-black uppercase tracking-widest mb-4 ${isStandard ? 'text-secondary' : 'text-primary'}`}>{plan.name}</h3>
                <p className={`text-[13px] leading-relaxed max-w-[240px] mx-auto ${isStandard ? 'text-white/70' : 'text-muted-foreground'}`}>{plan.description}</p>
              </div>
              
              <div className="w-12 h-1 bg-secondary mx-auto mb-10 opacity-30" />
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[13px] font-medium">
                    <Check size={14} className={isStandard ? 'text-secondary' : 'text-secondary'} strokeWidth={3} />
                    <span className={isStandard ? 'text-white/80' : 'text-muted-foreground'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={isStandard ? "secondary" : "outline"} 
                className={`w-full rounded-2xl h-14 font-bold text-sm transition-transform hover:scale-105 ${
                  isStandard 
                  ? 'bg-white text-primary hover:bg-slate-50 border-none' 
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Join Now
              </Button>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
