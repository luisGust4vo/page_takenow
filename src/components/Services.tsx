
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Code, Smartphone, Globe, Database, Shield, Zap, Cloud, Users} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: <Code size={40} />,
      title: 'Desenvolvimento Web',
      description: 'Criamos aplicações web modernas e responsivas usando as melhores tecnologias do mercado.',
      features: ['React & Next.js', 'Node.js & Express', 'APIs RESTful', 'Progressive Web Apps']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Apps Mobile',
      description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android com performance excepcional.',
      features: ['React Native', 'Flutter', 'Apps Nativos', 'Cross-platform']
    },
    {
      icon: <Database size={40} />,
      title: 'Sistemas Personalizados',
      description: 'Soluções sob medida para automatizar processos e otimizar a gestão do seu negócio.',
      features: ['ERPs Customizados', 'CRMs Integrados', 'Automação', 'Business Intelligence']
    },
    {
      icon: <Cloud size={40} />,
      title: 'Soluções em Nuvem',
      description: 'Infraestrutura escalável e segura na nuvem para garantir alta disponibilidade.',
      features: ['AWS & Azure', 'DevOps', 'Microserviços', 'Containerização']
    },
    {
      icon: <Shield size={40} />,
      title: 'Segurança Digital',
      description: 'Implementamos as melhores práticas de segurança para proteger seus dados e sistemas.',
      features: ['Criptografia', 'Autenticação', 'Compliance', 'Auditoria']
    },
    {
      icon: <Users size={40} />,
      title: 'Consultoria Tech',
      description: 'Orientação estratégica para transformação digital e otimização de processos tecnológicos.',
      features: ['Arquitetura de Software', 'Code Review', 'Mentoria', 'Roadmap Técnico']
    }
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio ao próximo nível
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="text-primary-400 mb-6 group-hover:text-secondary-400 transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <Zap size={16} className="text-primary-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-primary-400 font-semibold hover:text-secondary-400 transition-colors duration-300"
                >
                  Saiba Mais →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
