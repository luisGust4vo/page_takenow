
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {ArrowRight, Code, Zap, Users} from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  const words = [
    'Aplicações Web Modernas',
    'Sistemas Personalizados',
    'Apps Mobile Nativos',
    'Soluções em Nuvem',
    'E-commerce Completos'
  ]

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    if (currentIndex < currentWord.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentIndex(0)
        setDisplayText('')
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, currentWordIndex, words])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="./src/video/backgroudvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-primary-900/85"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-500/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary-400/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent">
              Transformamos
            </span>
            <br />
            <span className="text-white">Suas Ideias em</span>
            <br />
            <span className="text-primary-400 min-h-[80px] block">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Na <span className="text-primary-400 font-semibold">TakeNow</span>, somos especialistas em 
            criar soluções digitais que impulsionam seu negócio para o próximo nível.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-2xl transition-all duration-300 text-white"
            >
              Começar Meu Projeto
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-500 text-primary-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              Ver Portfolio
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Code className="text-primary-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-gray-200">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="text-secondary-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-gray-200">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="text-primary-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-gray-200">Anos de Experiência</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
