"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic Plan",
    content: {
      features: ["Limited features", "Basic support", "No customization"],
      usageLimits: ["Limited usage", "Limited storage"],
      additionalServices: ["No additional services included"]
    },
    is_standard: false
  },
  {
    name: "Standard Plan",
    content: {
      features: ["More features", "Standard support", "Some customization"],
      usageLimits: ["Increased usage", "More storage"],
      additionalServices: ["Optional add-ons available"]
    },
    is_standard: true
  },
  {
    name: "Premium Plan",
    content: {
      features: ["Full features", "Priority support", "Full customization"],
      usageLimits: ["Unlimited usage", "Unlimited storage"],
      additionalServices: ["Premium support and consulting included"]
    },
    is_standard: false
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch px-4">
        {plans.map((plan, index) => {
          const isStandard = plan.is_standard
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 md:p-8 rounded-[2.5rem] transition-all duration-500 relative flex flex-col border-2 ${
                isStandard 
                ? 'bg-primary text-white border-primary shadow-2xl scale-105 z-10' 
                : 'bg-white text-primary border-primary hover:shadow-xl'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
              
              <div className="space-y-6 flex-grow mb-8">
                <div>
                  <h4 className="font-semibold mb-3 text-base">Features:</h4>
                  <ul className="space-y-1.5">
                    {plan.content.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-base">Usage Limits:</h4>
                  <ul className="space-y-1.5">
                    {plan.content.usageLimits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-base">Additional Services:</h4>
                  <ul className="space-y-1.5">
                    {plan.content.additionalServices.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button 
                variant={isStandard ? "secondary" : "default"} 
                className={`w-full rounded-full h-12 font-bold text-lg transition-all shadow-md ${
                  isStandard 
                  ? 'bg-white text-primary hover:bg-slate-100' 
                  : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

