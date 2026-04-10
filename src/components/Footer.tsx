"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 text-primary pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand */}
        <div className="space-y-8">
          <Link href="/" className="group inline-block transition-transform hover:scale-105">
            <img 
              src="/logo.png" 
              alt="Sparkwell Creative" 
              className="h-20 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden">
              <span className="text-2xl font-black tracking-tighter block text-primary">
                SPARKWELL <span className="text-secondary">CREATIVE</span>
              </span>
            </div>
          </Link>
          <p className="text-muted-foreground leading-relaxed text-[13px] max-w-sm">
            We're your dedicated partners in propelling business toward success. With a blend 
            of expertise and innovation, we offer comprehensive solutions tailored to your needs.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
              <Twitter size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-secondary mb-8">Quick Links</h4>
          <ul className="space-y-4 text-sm font-bold text-primary/70">
            <li><Link href="#" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-secondary transition-colors">About</Link></li>
            <li><Link href="#services" className="hover:text-secondary transition-colors">Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
            <li><Link href="#why-us" className="hover:text-secondary transition-colors">Why Choose Us</Link></li>
            <li><Link href="#packages" className="hover:text-secondary transition-colors">Packages</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-secondary mb-8">Get In Touch</h4>
          <ul className="space-y-6 text-sm font-bold text-primary/70">
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <Mail size={16} />
              </div>
              <span className="italic">Sparkwell@outlook.com</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <Phone size={16} />
              </div>
              <span>+250 783663138</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <MapPin size={16} />
              </div>
              <span>Kigali, Rwanda</span>
            </li>
          </ul>
        </div>

        {/* Mission Quote */}
        <div className="bg-primary p-10 rounded-[2.5rem] relative overflow-hidden text-white flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-0" />
          <p className="text-sm italic italic leading-relaxed relative z-10">
            "We're committed to empowering businesses to thrive in competitive markets."
          </p>
          <div className="mt-8 relative z-10">
            <div className="h-1 w-12 bg-secondary rounded-full mb-2" />
            <p className="text-[10px] font-black uppercase tracking-widest">Growth Mission</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-slate-200 flex justify-center items-center text-sm font-bold uppercase tracking-widest text-primary/30 text-center">
        <p>© {currentYear} Sparkwell Creative Agency. All rights reserved.</p>
      </div>
    </footer>
  )
}
