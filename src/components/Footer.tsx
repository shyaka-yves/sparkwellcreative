import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-bold tracking-tighter">
            SPARKWELL<span className="text-secondary">.</span>
          </Link>
          <p className="text-white/70 leading-relaxed text-sm">
            Empowering brands through digital innovation and creative excellence. 
            We build the future of marketing with human-centered design.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
              <Twitter size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link href="#services" className="hover:text-secondary transition-colors">Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-secondary transition-colors">Our Work</Link></li>
            <li><Link href="#team" className="hover:text-secondary transition-colors">Expert Team</Link></li>
            <li><Link href="#pricing" className="hover:text-secondary transition-colors">Pricing</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-secondary" />
              <span>hello@sparkwell.agency</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-secondary" />
              <span>+1 (555) 000-1234</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-secondary" />
              <span>San Francisco, CA 94103</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-6">Stay Inspired</h4>
          <p className="text-sm text-white/70 mb-4">
            Subscribe to our newsletter for the latest insights.
          </p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/10 border-white/20 border rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <button className="bg-secondary p-2 rounded-full hover:opacity-90 transition-opacity">
              <Mail size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© {currentYear} Sparkwell Creative Agency. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
