import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Gift } from 'lucide-react'

const DiscreteBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Verifica se já foi dispensado
    const dismissed = localStorage.getItem('bannerDismissed')
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Mostra o banner após 30 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const encodedNumber = 'NTUzNzk4ODQxOTExOA=='
    const whatsappNumber = atob(encodedNumber)
    const whatsappMessage = "Olá! Vi o banner no site e gostaria de saber mais sobre a consultoria gratuita!"
    
    const timestamp = new Date().toISOString()
    const finalMessage = `${whatsappMessage} [${timestamp.slice(0, 16)}]`
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`
    window.open(url, '_blank')
    
    handleDismiss()
  }

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('bannerDismissed', 'true')
    setIsDismissed(true)
  }

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-r from-gray-800/95 to-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            {/* Content */}
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-lg">
                <Gift className="text-white" size={20} />
              </div>
              
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm mb-1">
                  Consultoria Gratuita
                </h4>
                <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                  Converse com nossos especialistas e descubra como podemos ajudar seu negócio.
                </p>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle size={14} />
                  Falar Agora
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DiscreteBanner