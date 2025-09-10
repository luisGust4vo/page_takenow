
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {ExternalLink, Github, ArrowRight, Award, Star, Sparkles, Eye, Calendar, Code, Users} from 'lucide-react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [projectCount, setProjectCount] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Contador animado de projetos
  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setProjectCount(prev => {
          if (prev < 50) return prev + 1
          clearInterval(timer)
          return 50
        })
      }, 30)
      return () => clearInterval(timer)
    }
  }, [inView])

  const projects = [
    {
      title: 'NeoMed',
      category: 'Produto Próprio',
      description: 'Sistema completo para assinatura digital de laudos médicos e sistema de lembretes. Solução inovadora que otimiza o fluxo de trabalho em clínicas e hospitais.',
      image: './src/img/image-medico.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Digital Signature', 'Push Notifications'],
      link: '#',
      featured: true,
      badge: 'Nosso Produto',
      stats: { views: '15k+', users: '500+', rating: '4.9' }
    },
    {
      title: 'Landing Pages Personalizadas',
      category: 'Marketing Digital',
      description: 'Criamos landing pages sob medida para clínicas, escritórios de advocacia, consultórios odontológicos e outros segmentos. Design responsivo e otimizado para conversão.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Tailwind CSS', 'SEO', 'Conversion Optimization'],
      link: '#',
      badge: 'Sob Demanda',
      stats: { conversions: '85%', clients: '30+', projects: '50+' }
    },
    {
      title: 'E-commerce Fashion',
      category: 'E-commerce',
      description: 'Plataforma completa de vendas online com gestão de estoque, pagamentos integrados e dashboard administrativo.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      stats: { sales: 'R$ 2M+', orders: '10k+', growth: '+150%' }
    },
    {
      title: 'App Delivery',
      category: 'Mobile App',
      description: 'Aplicativo de delivery com rastreamento em tempo real, sistema de pagamento e avaliações.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Firebase', 'Maps API', 'Push Notifications'],
      link: '#',
      stats: { downloads: '25k+', restaurants: '200+', deliveries: '50k+' }
    },
    {
      title: 'Plataforma Educacional',
      category: 'EdTech',
      description: 'Ambiente virtual de aprendizagem com videoaulas, exercícios interativos e acompanhamento de progresso.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'WebRTC'],
      link: '#',
      stats: { students: '5k+', courses: '100+', completion: '92%' }
    }
  ]

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background com efeito parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header com contador animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="text-primary-400 animate-spin" size={24} />
            <span className="text-primary-400 font-semibold">Portfolio</span>
            <Sparkles className="text-primary-400 animate-spin" size={24} />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 via-blue-400 to-secondary-400 bg-clip-text text-transparent">
              Nossos Projetos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Conheça alguns dos projetos que desenvolvemos e como transformamos ideias em soluções digitais de sucesso
          </p>

          {/* Contador de projetos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center gap-8 text-center"
          >
            <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold text-primary-400">{projectCount}+</div>
              <div className="text-sm text-gray-400">Projetos Entregues</div>
            </div>
            <div className="bg-gradient-to-br from-secondary-500/20 to-primary-500/20 backdrop-blur-sm border border-secondary-500/30 rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold text-secondary-400">100%</div>
              <div className="text-sm text-gray-400">Satisfação</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projeto Destacado - NeoMed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
          onHoverStart={() => setHoveredProject(0)}
          onHoverEnd={() => setHoveredProject(null)}
        >
          <div className="group relative bg-gradient-to-br from-primary-500/20 via-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden backdrop-blur-sm border-2 border-primary-500/50 hover:border-primary-400/70 transition-all duration-500 shadow-2xl hover:shadow-primary-500/20">
            {/* Efeito de brilho animado */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </div>

            <div className="absolute top-6 left-6 z-20">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <Star size={16} className="animate-pulse" />
                Nosso Produto
              </div>
            </div>

            <div className="absolute top-6 right-6 z-20">
              <motion.div
                animate={{ rotate: hoveredProject === 0 ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="text-primary-400" size={28} />
              </motion.div>
            </div>

            <div className="relative overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              
              {/* Stats overlay */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <Eye size={12} />
                    {projects[0].stats.views}
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <Users size={12} />
                    {projects[0].stats.users}
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <Star size={12} />
                    {projects[0].stats.rating}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex space-x-3">
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary-500 p-3 rounded-full hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary-500/50"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-700/80 backdrop-blur-sm p-3 rounded-full hover:bg-gray-600/80 transition-all duration-300 shadow-lg"
                  >
                    <Github size={20} className="text-white" />
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-primary-400 bg-primary-400/20 px-4 py-2 rounded-full border border-primary-400/30">
                  {projects[0].category}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar size={12} />
                  2024
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {projects[0].title}
              </h3>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {projects[0].description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {projects[0].tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm text-gray-300 bg-gray-700/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-600/50 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 text-primary-400 font-bold text-lg hover:text-primary-300 transition-colors duration-300 group/btn"
              >
                Saiba Mais sobre o NeoMed
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="group-hover/btn:text-primary-300"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Outros Projetos - Grid Padronizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 1) * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(index + 1)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/40 transition-all duration-400 shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 h-full"
            >
              {/* Efeito de brilho */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/5 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>

              {project.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <motion.div
                    animate={{ scale: hoveredProject === index + 1 ? 1.1 : 1 }}
                    className="bg-gradient-to-r from-secondary-500 to-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md"
                  >
                    <Sparkles size={12} className="animate-pulse" />
                    {project.badge}
                  </motion.div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Stats mini */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col gap-1">
                    {Object.entries(project.stats).slice(0, 2).map(([key, value], statIndex) => (
                      <div key={statIndex} className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Code size={10} />
                        {value}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <motion.button 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-primary-500/90 backdrop-blur-sm p-2 rounded-full hover:bg-primary-600 transition-colors duration-300 shadow-lg"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-700/90 backdrop-blur-sm p-2 rounded-full hover:bg-gray-600 transition-colors duration-300 shadow-lg"
                    >
                      <Github size={16} className="text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-secondary-400 bg-secondary-400/20 px-3 py-1 rounded-full border border-secondary-400/30">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={10} />
                    2024
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded border border-gray-600/30 hover:border-primary-500/30 transition-colors duration-300 cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, x: 3 }}
                  className="flex items-center gap-2 text-secondary-400 font-semibold hover:text-primary-400 transition-colors duration-300 mt-auto"
                >
                  Ver Projeto
                  <motion.div
                    animate={{ x: hoveredProject === index + 1 ? [0, 5, 0] : 0 }}
                    transition={{ repeat: hoveredProject === index + 1 ? Infinity : 0, duration: 1.8 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final com animação especial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              background: "linear-gradient(45deg, #3B82F6, #8B5CF6, #06B6D4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 via-blue-500 to-secondary-500 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-400 text-white border border-primary-400/30 hover:border-primary-300/50 relative overflow-hidden group"
          >
            <span className="relative z-10">Ver Todos os Projetos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-blue-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}

export default Portfolio
