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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 max-w-xs sm:max-w-sm"
        >
          <div className="bg-gradient-to-r from-gray-800/95 to-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl p-3 md:p-4 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-1 md:top-2 right-1 md:right-2 text-gray-400 hover:text-white transition-colors p-1"
            >
              <X size={14} />
            </button>

            {/* Content */}
            <div className="flex items-start gap-2 md:gap-3">
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-1.5 md:p-2 rounded-lg flex-shrink-0">
                <Gift className="text-white" size={16} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-xs md:text-sm mb-1">
                  Consultoria Gratuita
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed mb-2 md:mb-3">
                  Converse com nossos especialistas e descubra como podemos ajudar seu negócio.
                </p>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={12} />
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