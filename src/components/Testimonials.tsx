import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Silva & Associados Advocacia",
      text: "A TakeNow transformou completamente nosso escritório! O sistema que desenvolveram aumentou nossa produtividade em 300%. Recomendo de olhos fechados!",
      rating: 5,
      result: "300% mais produtividade"
    },
    {
      name: "Dr. Ana Costa",
      company: "Clínica Vida Saudável",
      text: "Incrível! O app que criaram para nossa clínica facilitou muito o agendamento dos pacientes. Tivemos 150% de aumento nas consultas!",
      rating: 5,
      result: "150% mais consultas"
    },
    {
      name: "João Mendes",
      company: "Loja Fashion Style",
      text: "Meu e-commerce estava parado há meses. Em 2 semanas a TakeNow entregou uma loja completa que já faturou R$ 50mil no primeiro mês!",
      rating: 5,
      result: "R$ 50k no 1º mês"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              🏆 Nossos Clientes Falam
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja os resultados reais que nossos clientes alcançaram com nossas soluções
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="text-green-400 mb-4" size={32} />
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Result Badge */}
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                <div className="text-green-400 font-bold text-center">
                  📈 {testimonial.result}
                </div>
              </div>

              {/* Author */}
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 Garantia de Resultados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-gray-300">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">7 dias</div>
                <div className="text-gray-300">Prazo Médio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">30 dias</div>
                <div className="text-gray-300">Garantia Total</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials