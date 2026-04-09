"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic Plan",
    price: "500k",
    description: "Essential tools for startups and small ventures.",
    features: [
      "Limited features",
      "Basic support",
      "No customization",
      "Limited usage",
      "Limited storage"
    ],
    is_popular: false
  },
  {
    name: "Standard Plan",
    price: "650k",
    description: "Enhanced capabilities for growing businesses.",
    features: [
      "More features",
      "Standard support",
      "Some customization",
      "Increased usage",
      "More storage"
    ],
    is_popular: true
  },
  {
    name: "Premium Plan",
    price: "800k",
    description: "Full-service solution for market leaders.",
    features: [
      "Full features",
      "Priority support",
      "Full customization",
      "Unlimited usage",
      "Premium support & consulting"
    ],
    is_popular: false
  }
]

export function Pricing() {
  return (
    <Section id="pricing" className="bg-slate-50">
      <SectionHeader
        centered
        subtitle="Investment"
        title="Ready to take your brand to the next level?"
        description="Choose a plan that fits your current needs and scale as your brand grows."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-10 rounded-[2rem] bg-white border ${plan.is_popular ? 'border-secondary ring-4 ring-secondary/5' : 'border-slate-100'} hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full`}
          >
            {plan.is_popular && (
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-extrabold tracking-tighter text-primary">{plan.price}</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="text-secondary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant={plan.is_popular ? "secondary" : "outline"} 
              className="w-full rounded-2xl"
              size="lg"
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
