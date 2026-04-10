"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function WhatsAppButton() {
  // Placeholder number - replace with the user's actual number
  const phoneNumber = "250780000000" 
  const message = "Hello! I'm interested in your services."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none" />
        
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 fill-white relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.734 3.42h-.006c-1.316 0-2.612-.354-3.746-1.025l-.268-.159-2.787.73.744-2.717-.175-.278c-.737-1.173-1.127-2.531-1.127-3.928 0-4.007 3.262-7.27 7.272-7.27 1.94 0 3.766.757 5.137 2.13 1.371 1.372 2.127 3.198 2.127 5.138 0 4.007-3.262 7.27-7.271 7.27zm0-15.682h-.001C6.208 2.12 1.832 6.496 1.832 11.888a9.71 9.71 0 0 0 1.29 4.84l-1.372 5.012 5.129-1.345a9.713 9.713 0 0 0 4.88 1.309h.004c5.361 0 9.736-4.376 9.736-9.768a9.713 9.713 0 0 0-2.85-6.904A9.713 9.713 0 0 0 12.738 2.12z" />
        </svg>
      </Link>
    </motion.div>
  )
}
