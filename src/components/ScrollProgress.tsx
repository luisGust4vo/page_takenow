import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      try {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
        setScrollProgress(Math.min(100, Math.max(0, progress)))
        setIsVisible(window.scrollY > 300)
      } catch (error) {
        console.error('Scroll error:', error)
      }
    }

    handleScroll() // Chamada inicial
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Barra de progresso */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50 origin-left"
        style={{ 
          scaleX: Math.min(1, Math.max(0, scrollProgress / 100)),
          transformOrigin: 'left'
        }}
        initial={{ scaleX: 0 }}
      />

      {/* Botão de voltar ao topo */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="text-white" size={20} />
      </motion.button>
    </>
  )
}

export default ScrollProgress