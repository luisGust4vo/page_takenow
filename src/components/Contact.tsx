
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Mail, Phone, MapPin, Send, MessageSquare} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      info: 'contato@takenow.com.br',
      link: 'mailto:contato@takenow.com.br'
    },
    {
      icon: <Phone size={24} />,
      title: 'Telefone',
      info: '+55 (11) 9999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      info: 'Belo Horizonte, BH - Brasil',
      link: '#'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-primary-400" size={32} />
              <h3 className="text-2xl font-bold text-white">Envie uma Mensagem</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                Enviar Mensagem
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
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

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-gray-300">{item.info}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 p-6 rounded-xl border border-primary-500/30"
            >
              <h4 className="text-xl font-bold text-white mb-3">
                Pronto para começar?
              </h4>
              <p className="text-gray-300 mb-4">
                Agende uma conversa gratuita e vamos discutir como podemos ajudar seu negócio a crescer.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Agendar Conversa
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
