import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Foguete */}
        <motion.div
          className="relative mb-8"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="/img/logoT.png" 
            alt="TakeNow Logo" 
            className="w-20 h-20 mx-auto"
          />
          
          {/* Partículas do foguete */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: '45%',
                top: '90%',
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#60a5fa' : '#a78bfa'} 0%, transparent 70%)`,
                boxShadow: `0 0 8px ${i % 2 === 0 ? '#60a5fa' : '#a78bfa'}`
              }}
              animate={{
                y: [0, 25, 40],
                x: [0, (i - 2.5) * 8, (i - 2.5) * 12],
                opacity: [0.9, 0.5, 0],
                scale: [1, 0.8, 0.2]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>

        {/* Texto */}
        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          TakeNow
        </motion.h2>
        
        <motion.p
          className="text-gray-300"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Preparando para decolar...
        </motion.p>

        {/* Barra de progresso */}
        <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto mt-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Loading