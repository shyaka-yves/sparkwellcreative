"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/Button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "What we offer", href: "#offer" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Packages", href: "#pricing" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white shadow-sm py-3" : "bg-white py-4 shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start leading-none group">
          <div className="flex items-center gap-1">
            <span className="text-xl md:text-2xl font-black tracking-widest text-[#024975]">
              SPARKWELL
            </span>
            <div className="w-6 h-6 rounded-sm bg-gradient-to-tr from-[#024975] to-[#0b97dc] flex items-center justify-center p-1">
              <div className="w-full h-full border-t-2 border-r-2 border-white rounded-tr-sm" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-widest text-[#024975]">
              REATIVE
            </span>
          </div>
          <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-[#0b97dc] uppercase mt-1">
            Your Partner in Growth
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-all duration-200 font-semibold"
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant="default" 
            className="bg-[#024975] hover:bg-[#024975]/90 rounded-full px-8 py-6 h-auto flex items-center gap-2 font-bold group"
          >
            Contact
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-3 h-3 text-white"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Button>
        </nav>


        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-6 shadow-xl md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="w-full bg-[#024975] hover:bg-[#024975]/90 rounded-full py-6 flex items-center justify-center gap-2 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-3 h-3 text-white"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
