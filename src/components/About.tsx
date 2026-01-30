
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Target, Eye, Award, Users, Lightbulb, Rocket} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // WhatsApp contact function
  const handleWhatsAppClick = () => {
    // Rate limiting
    const lastClick = localStorage.getItem('lastAboutClick')
    const now = Date.now()
    
    if (lastClick && (now - parseInt(lastClick)) < 10000) {
      return
    }
    
    localStorage.setItem('lastAboutClick', now.toString())
    
    // Número codificado
    const encodedNumber = 'NTUzNzk4ODQxOTExOA==' // 5537988419118 em base64
    const whatsappNumber = atob(encodedNumber)
    const whatsappMessage = "Olá! Gostaria de conhecer melhor a equipe da TakeNow e saber como vocês podem ajudar meu negócio."
    
    // Adicionar timestamp
    const timestamp = new Date().toISOString()
    const finalMessage = `${whatsappMessage} [${timestamp.slice(0, 16)}]`
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`
    window.open(url, '_blank')
  }

  const values = [
    {
      icon: <Target size={32} />,
      title: 'Missão',
      description: 'Transformar ideias em soluções digitais inovadoras que impulsionam o crescimento dos nossos clientes.'
    },
    {
      icon: <Eye size={32} />,
      title: 'Visão',
      description: 'Ser referência em desenvolvimento de software, reconhecida pela excelência e inovação tecnológica.'
    },
    {
      icon: <Award size={32} />,
      title: 'Valores',
      description: 'Qualidade, transparência, inovação e comprometimento com o sucesso dos nossos parceiros.'
    }
  ]

  const stats = [
    { icon: <Users size={24} />, number: '800+', label: 'Clientes Atendidos' },
    { icon: <Rocket size={24} />, number: '500+', label: 'Projetos Entregues' },
    { icon: <Lightbulb size={24} />, number: '5+', label: 'Anos de Mercado' },
    { icon: <Award size={24} />, number: '99%', label: 'Satisfação Cliente' }
  ]
  

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Sobre a TakeNow
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos uma fábrica de software apaixonada por tecnologia e inovação, 
            dedicada a criar soluções digitais que fazem a diferença.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Nossa História
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fundada com o propósito de democratizar a tecnologia, a <span className="text-primary-400 font-semibold">TakeNow</span> nasceu 
              da visão de que toda empresa, independente do tamanho, merece ter acesso às melhores 
              soluções digitais do mercado.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nossa equipe é formada por desenvolvedores experientes, designers criativos e 
              estrategistas digitais que trabalham juntos para entregar resultados excepcionais.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Utilizamos as tecnologias mais modernas e metodologias ágeis para garantir que 
              cada projeto seja entregue com a máxima qualidade e no prazo estabelecido.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Conheça Nossa Equipe
            </motion.button>
          </motion.div>

          {/* Right Side - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary-400 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 md:p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30"
            >
              <div className="text-primary-400 flex justify-center mb-2 md:mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
