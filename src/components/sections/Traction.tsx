"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { useEffect, useState, useRef } from "react"

function Counter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (nodeRef.current) observer.observe(nodeRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = value
    if (start === end) return

    let totalMiliseconds = duration * 1000
    let incrementTime = (totalMiliseconds / end)

    let timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isVisible, value, duration])

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { label: "Annual Revenue Growth", value: 20, suffix: "%" },
  { label: "Customer Satisfaction", value: 90, suffix: "%" },
  { label: "Market Share", value: 15, suffix: "%" },
  { label: "Industry Expertise", value: 10, suffix: "+" }
]

export function Traction() {
  return (
    <Section id="stats" className="bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-secondary">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-24 text-center max-w-2xl mx-auto"
      >
        <p className="text-xl md:text-2xl font-light italic text-white/70">
          "Numbers speak louder than words, but our results speak for themselves."
        </p>
      </motion.div>
    </Section>
  )
}
