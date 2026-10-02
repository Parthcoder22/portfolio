import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Selected Work', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'py-3.5 bg-[#F7F6F2]/92 backdrop-blur-md border-b border-[#E6E4DE] shadow-[0_2px_12px_rgba(23,23,23,0.03)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-7 h-7 rounded-md bg-[#171717] text-[#F7F6F2] flex items-center justify-center font-display font-bold text-xs">
              PG
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-[#171717] group-hover:text-[#3458D4] transition-colors">
                PARTH GOHEL
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#777777]">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#E6E4DE] shadow-xs"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1 rounded-sm text-xs font-mono transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'text-[#171717] bg-[#F7F6F2] font-semibold border-b-2 border-[#3458D4]'
                      : 'text-[#666666] hover:text-[#171717] hover:bg-[#F7F6F2]/60'
                  }`}
                >
                  {link.name}
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-4 py-2 rounded-md font-mono text-xs font-semibold text-white bg-[#3458D4] hover:bg-[#2648BD] transition-all duration-150 cursor-pointer shadow-xs inline-flex items-center gap-1.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-white border border-[#E6E4DE] text-[#171717] hover:bg-[#F0EFE9] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-16 left-4 right-4 bg-[#FFFFFF] border border-[#E6E4DE] rounded-xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-3 font-mono text-sm">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 px-3 rounded-md text-[#171717] hover:bg-[#F7F6F2] hover:text-[#3458D4] font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-3 border-t border-[#E6E4DE]">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full py-2.5 rounded-md font-mono text-xs font-semibold text-white bg-[#3458D4] hover:bg-[#2648BD] transition-colors text-center inline-flex items-center justify-center gap-1.5"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
