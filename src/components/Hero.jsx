import React from 'react'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import HeroStudioComposition from './HeroStudioComposition'

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] overflow-hidden"
    >
      {/* Subtle Swiss Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-grid-swiss pointer-events-none opacity-60" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Professional Categories Label */}
            <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-[#777777] uppercase">
              <span className="text-[#3458D4] font-semibold">FULL-STACK DEVELOPMENT</span>
              <span className="text-[#CCCCCC] hidden xs:inline">&bull;</span>
              <span className="text-[#171717] font-semibold">AI-POWERED SOLUTIONS</span>
              <span className="text-[#CCCCCC] hidden xs:inline">&bull;</span>
              <span className="text-[#555555]">CREATIVE TECHNOLOGY</span>
            </div>

            {/* Primary Editorial Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] tracking-tight leading-[1.12] text-[#171717] break-words">
              Building Digital Products That Move Ideas Forward.
            </h1>

            {/* Supporting Introduction */}
            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              I&apos;m Parth Gohel, a developer focused on full-stack applications, AI-powered solutions, and thoughtful digital experiences.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-md font-mono text-xs font-semibold text-white bg-[#3458D4] hover:bg-[#2648BD] active:scale-[0.99] transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => handleScrollTo('#projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-md font-mono text-xs font-semibold text-[#171717] bg-[#FFFFFF] hover:bg-[#EFECE6] border border-[#E6E4DE] hover:border-[#D0CDC4] active:scale-[0.99] transition-all cursor-pointer text-center inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#555555]" />
              </button>
            </div>

            {/* Swiss Precision Milestones Footer Strip */}
            <div className="mt-10 sm:mt-14 pt-6 border-t border-[#E6E4DE] w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <span className="font-display font-bold text-xl sm:text-2xl text-[#171717] block">
                  200+
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#777777] uppercase tracking-wider block mt-0.5">
                  LeetCode Problems
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-xl sm:text-2xl text-[#171717] block">
                  B.Tech
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#777777] uppercase tracking-wider block mt-0.5">
                  MSU Baroda (CSE)
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E6E4DE]/60">
                <span className="font-display font-bold text-xl sm:text-2xl text-[#3458D4] block">
                  Production
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#777777] uppercase tracking-wider block mt-0.5">
                  AI &amp; Web Systems
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Centerpiece Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <HeroStudioComposition />
          </div>

        </div>
      </div>
    </section>
  )
}
