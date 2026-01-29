
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, MapPin, Shield, Clock } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [isVerified, setIsVerified] = useState(false)
  const [lastClick, setLastClick] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaQuestion, setCaptchaQuestion] = useState({ question: '', answer: 0 })

  // Gerar captcha simples
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operations = ['+', '-']
    const operation = operations[Math.floor(Math.random() * operations.length)]
    const answer = operation === '+' ? num1 + num2 : num1 - num2
    
    setCaptchaQuestion({
      question: `${num1} ${operation} ${num2} = ?`,
      answer: answer
    })
  }

  // Rate limiting e verificação anti-bot
  const handleWhatsAppClick = () => {
    const now = Date.now()
    const timeDiff = now - lastClick
    
    // Rate limiting: máximo 3 cliques em 10 segundos
    if (timeDiff < 10000) {
      setClickCount(prev => prev + 1)
      if (clickCount >= 3) {
        alert('Muitos cliques seguidos. Aguarde 10 segundos.')
        return
      }
    } else {
      setClickCount(1)
    }
    
    // Se muitos cliques em pouco tempo (mais de 5 em 5 minutos), mostrar captcha
    if (clickCount >= 5 && !isVerified) {
      setShowCaptcha(true)
      generateCaptcha()
      return
    }
    
    setLastClick(now)
    openWhatsApp()
  }

  const openWhatsApp = () => {
    // Número codificado em base64 para dificultar scraping
    const encodedNumber = 'NTUzNzk4ODQxOTExOA==' // 5537988419118 em base64
    const whatsappNumber = atob(encodedNumber)
    const whatsappMessage = "Olá! Vim através do site da TakeNow e gostaria de saber mais sobre os serviços."
    
    // Adicionar timestamp para rastreamento
    const timestamp = new Date().toISOString()
    const finalMessage = `${whatsappMessage} [${timestamp.slice(0, 16)}]`
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`
    window.open(url, '_blank')
  }

  const handleCaptchaSubmit = () => {
    if (parseInt(captchaAnswer) === captchaQuestion.answer) {
      setIsVerified(true)
      setShowCaptcha(false)
      setCaptchaAnswer('')
      openWhatsApp()
    } else {
      alert('Resposta incorreta. Tente novamente.')
      generateCaptcha()
      setCaptchaAnswer('')
    }
  }

  const contactInfo = [
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp Business',
      info: 'Clique para conversar',
      action: handleWhatsAppClick
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      info: 'Minas Gerais, Brasil',
      action: null
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Vamos Conversar?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos criar algo incrível juntos!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Entre em Contato
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Estamos sempre prontos para ouvir suas ideias e transformá-las em soluções digitais incríveis. 
                Nossa equipe está à disposição para discutir seu próximo projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={item.action}
                  className={`flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-700/50 transition-all duration-300 group ${
                    item.action ? 'cursor-pointer hover:border-green-500/50 hover:bg-green-500/10' : 'hover:border-primary-500/50'
                  }`}
                >
                  <div className={`transition-colors duration-300 ${
                    item.action ? 'text-green-400 group-hover:text-green-300' : 'text-primary-400 group-hover:text-primary-300'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-gray-300">{item.info}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-green-500/20 to-green-600/20 p-8 rounded-xl border border-green-500/30 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageCircle className="text-green-400" size={48} />
                <Shield className="text-blue-400" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Fale Conosco no WhatsApp
              </h4>
              <p className="text-gray-300 mb-6">
                Entre em contato diretamente pelo WhatsApp. Conexão segura e verificada.
              </p>
              
              {/* Captcha Modal */}
              {showCaptcha && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg border border-gray-600 mb-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="text-blue-400" size={20} />
                    <span className="text-white font-semibold">Verificação de Segurança</span>
                  </div>
                  <p className="text-gray-300 mb-4">Resolva esta operação para continuar:</p>
                  <div className="text-2xl font-bold text-white mb-4">{captchaQuestion.question}</div>
                  <input
                    type="number"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    className="w-20 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-center mb-4"
                    placeholder="?"
                  />
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleCaptchaSubmit}
                      className="bg-green-500 px-4 py-2 rounded text-white font-semibold hover:bg-green-600 transition-colors"
                    >
                      Verificar
                    </button>
                    <button
                      onClick={() => setShowCaptcha(false)}
                      className="bg-gray-600 px-4 py-2 rounded text-white font-semibold hover:bg-gray-700 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </motion.div>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                disabled={showCaptcha}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto ${
                  showCaptcha 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg'
                }`}
              >
                <MessageCircle size={20} />
                {isVerified ? 'Conversar no WhatsApp ✓' : 'Conversar no WhatsApp'}
              </motion.button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                <Clock size={12} />
                <span>Resposta em até 2 horas • Conexão segura</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
