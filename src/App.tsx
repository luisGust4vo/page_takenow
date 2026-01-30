
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import InteractiveParticles from './components/InteractiveParticles'
import WhatsAppButton from './components/WhatsAppButton'
import DiscreteBanner from './components/DiscreteBanner'
import ScrollProgress from './components/ScrollProgress'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500) // Delay mínimo para mostrar a animação
    }

    const handleError = (error: ErrorEvent) => {
      console.error('App Error:', error)
      setHasError(true)
      setIsLoading(false)
    }

    window.addEventListener('error', handleError)

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('error', handleError)
    }
  }, [])

  if (hasError) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">TakeNow</h1>
          <p className="text-gray-300 mb-6">Algo deu errado. Recarregue a página.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Recarregar
          </button>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ScrollProgress />
      <ParticleBackground />
      <InteractiveParticles />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <DiscreteBanner />
    </div>
  )
}

export default App
