import React from 'react'
import { journeyData } from '../data/journeyData'
import { soundFx } from '../utils/audio'
import { GraduationCap, Milestone, Code2, Trophy, GitBranch } from 'lucide-react'

export default function Journey() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />
      case 'Technical Milestone':
        return <Milestone className="w-4 h-4 text-purple-400" />
      case 'Engineering Journey':
        return <Code2 className="w-4 h-4 text-blue-400" />
      case 'Competitive Programming':
        return <Trophy className="w-4 h-4 text-amber-400" />
      case 'Innovation & Community':
        return <GitBranch className="w-4 h-4 text-emerald-400" />
      default:
        return <Milestone className="w-4 h-4 text-cyan-400" />
    }
  }

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08080c]">
      {/* Background Lighting */}
      <div className="glow-spot-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              04 // Timeline &amp; Milestones
            </span>
            <span className="w-6 h-[1px] bg-cyan-400" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            THE EVOLUTION
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-light">
            Academic foundation, autonomous engineering deep dives, and algorithmic milestones shaping my technical perspective.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12">
          {journeyData.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#08080c] border-2 border-cyan-400 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Date tag for larger screens */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 text-xs font-mono text-cyan-400/80 font-medium">
                {item.period}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl glass-card border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-white/5 border border-white/10">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  <span className="sm:hidden text-xs font-mono text-cyan-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-tech font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                  {item.institution} • <span className="text-slate-300">{item.status}</span>
                </p>

                <p className="mt-4 text-sm text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Key Points */}
                <ul className="mt-4 space-y-1.5">
                  {item.keyPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
