'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Premium */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WORKING SITE FINAL TEST
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:flex items-center space-x-8"
            >
              <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">About</Link>
              <Link 
                href="/contact"
                className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section Ultra Premium */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
                WORKING SITE FINAL TEST
                <span className="block text-primary font-medium mt-2">Tech Test</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed font-light"
            >
              Site test avec structure de dossiers correcte
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Découvrir nos solutions
              </Link>
              
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Footer Premium */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light mb-4">WORKING SITE FINAL TEST</h2>
            <p className="text-gray-400 mb-8">Tech Test</p>
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-500">&copy; 2025 WORKING SITE FINAL TEST. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}