import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/ui/CustomCursor'
import ProjectModal from './components/ui/ProjectModal'
import Toast from './components/ui/Toast'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [activeProjectModal, setActiveProjectModal] = useState(null)
  const [toast, setToast] = useState(null)

  // Intersection Observer to track active section smoothly
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'projects', 'process', 'skills', 'contact']

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -40% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleShowToast = (newToast) => {
    setToast(newToast)
    setTimeout(() => {
      setToast((curr) => (curr === newToast ? null : curr))
    }, 4500)
  }

  return (
    <div className="relative min-h-screen bg-[#F7F6F2] text-[#171717] selection:bg-[#3458D4] selection:text-white antialiased font-body">
      {/* Precision Swiss Cursor */}
      <CustomCursor />

      {/* Swiss Brand Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <Projects onOpenModal={(proj) => setActiveProjectModal(proj)} />
        <Services />
        <Process />
        <Skills />
        <About />
        <Contact onShowToast={handleShowToast} />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}

      {/* Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}
