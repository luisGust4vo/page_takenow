
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {Menu, X} from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-1 ${!isScrolled ? 'md:flex hidden' : 'flex'} relative`}
          >
            <div className="relative">
              <motion.img 
                src="/img/logoT.png" 
                alt="TakeNow Logo" 
                className="w-10 h-10 object-contain relative z-10" 
                animate={{
                  y: [0, -3, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  rotate: -15,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              />
              {/* Partículas */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: '30%',
                    top: '80%',
                  }}
                  animate={{
                    y: [0, 15, 25],
                    x: [0, (i - 1) * 8, (i - 1) * 12],
                    opacity: [0.5, 0.4, 0],
                    scale: [1, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">
              TakeNow
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Começar Projeto
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-gray-800/95 backdrop-blur-md rounded-lg p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-2 rounded-full font-semibold">
              Começar Projeto
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header
