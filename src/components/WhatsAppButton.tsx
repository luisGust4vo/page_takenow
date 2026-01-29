
import React from 'react'
import { motion } from 'framer-motion'
import {MessageCircleDashed as MessageCircle} from 'lucide-react'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Rate limiting mais flexível
    const lastClick = localStorage.getItem('lastWhatsAppFloatingClick')
    const clickCount = localStorage.getItem('floatingClickCount') || '0'
    const now = Date.now()
    
    if (lastClick) {
      const timeDiff = now - parseInt(lastClick)
      
      // Reset contador se passou mais de 1 minuto
      if (timeDiff > 60000) {
        localStorage.setItem('floatingClickCount', '1')
      } else {
        const currentCount = parseInt(clickCount) + 1
        
        // Máximo 3 cliques por minuto (silencioso para botão flutuante)
        if (currentCount > 3) {
          return
        }
        
        localStorage.setItem('floatingClickCount', currentCount.toString())
      }
    } else {
      localStorage.setItem('floatingClickCount', '1')
    }
    
    localStorage.setItem('lastWhatsAppFloatingClick', now.toString())
    
    // Número codificado
    const encodedNumber = 'NTUzNzk4ODQxOTExOA==' // 5537988419118 em base64
    const whatsappNumber = atob(encodedNumber)
    const message = "Olá! Vim através do botão flutuante do site da TakeNow."
    
    // Adicionar timestamp
    const timestamp = new Date().toISOString()
    const finalMessage = `${message} [${timestamp.slice(0, 16)}]`
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`
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
