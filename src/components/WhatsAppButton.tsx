
import React from 'react'
import { motion } from 'framer-motion'
import {MessageCircleDashed as MessageCircle} from 'lucide-react'

const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999" // Substitua pelo seu número
  const message = "Olá! Gostaria de saber mais sobre os serviços da TakeNow."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4)'
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }}
    >
      <MessageCircle size={24} />
      
      {/* Pulse effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
      </div>
    </motion.button>
  )
}

export default WhatsAppButton
