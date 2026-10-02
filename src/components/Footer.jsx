import React from 'react'
import { ArrowUp } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-[#E6E4DE] bg-[#F7F6F2] py-14 px-4 sm:px-6 lg:px-8 text-xs font-mono text-[#777777]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-sm bg-[#171717] text-white flex items-center justify-center font-display font-black text-[10px]">
              PG
            </span>
            <span className="font-display font-bold text-sm text-[#171717] tracking-wider">
              PARTH GOHEL
            </span>
          </div>
          <p className="text-[#666666] max-w-sm text-xs font-light leading-relaxed">
            Building digital products that move ideas forward. Full-stack applications, AI solutions, and thoughtful digital experiences.
          </p>
        </div>

        {/* Center: Location & Status */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-md bg-[#FFFFFF] border border-[#E6E4DE] text-[#555555] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-sans text-xs">Based in Gujarat, India &bull; Working Worldwide</span>
        </div>

        {/* Right: Back to Top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FFFFFF] hover:bg-[#EFECE6] border border-[#E6E4DE] text-[#171717] transition-all cursor-pointer group shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#777777]" />
          </button>

          <p className="text-[#888888] text-center md:text-right text-[11px]">
            &copy; {CURRENT_YEAR} Parth Gohel. Crafted with Swiss Editorial precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
