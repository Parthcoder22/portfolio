import React, { useEffect } from 'react'
import { X, CheckCircle2, Layers, AlertCircle, Users, ExternalLink } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl bg-[#FFFFFF] border border-[#E6E4DE] p-4 sm:p-8 md:p-10 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[#E6E4DE]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="swiss-tag">
              {project.category}
            </span>
            {project.isLive ? (
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-[#10b981]/10 text-[#059669] border border-[#10b981]/25 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                Live Deployed
              </span>
            ) : (
              <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-[#777777]/10 text-[#777777] border border-[#E6E4DE] inline-flex items-center gap-1">
                Open Source / Non-Deployed
              </span>
            )}
            {project.badge && (
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-[#3458D4]/10 text-[#3458D4] border border-[#3458D4]/20">
                {project.badge}
              </span>
            )}
            <span className="text-xs font-mono text-[#777777]">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md bg-[#F7F6F2] hover:bg-[#EFECE6] text-[#171717] transition-colors cursor-pointer border border-[#E6E4DE]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header Title & Subtitle */}
        <div className="mt-4 sm:mt-6">
          <h2 className="font-display font-bold text-xl sm:text-3xl md:text-4xl text-[#171717] break-words">
            {project.title}
          </h2>
          <p className="mt-1 text-sm sm:text-base md:text-lg text-[#3458D4] font-tech font-medium">
            {project.subtitle}
          </p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed font-light">
            {project.summary}
          </p>
        </div>

        {/* Section 1: Problem & Intended Users */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-[#F7F6F2] border border-[#E6E4DE]">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#171717] font-semibold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-[#3458D4]" />
              <span>The Problem &amp; Opportunity</span>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F7F6F2] border border-[#E6E4DE]">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#171717] font-semibold uppercase tracking-wider">
              <Users className="w-4 h-4 text-[#3458D4]" />
              <span>Target Stakeholders</span>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
              {project.intendedUsers}
            </p>
          </div>
        </div>

        {/* Section 2: Role & Architectural Solution */}
        <div className="mt-6 p-6 rounded-xl bg-[#F7F6F2] border border-[#E6E4DE]">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#171717] font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#3458D4]" />
            <span>Role &amp; Architectural Implementation</span>
          </div>
          <p className="text-xs sm:text-sm text-[#171717] leading-relaxed mb-3">
            <strong className="font-semibold">My Contribution:</strong> {project.role}
          </p>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
            <strong className="text-[#171717] font-semibold">Solution:</strong> {project.solution}
          </p>
        </div>

        {/* Section 3: Key Features */}
        <div className="mt-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-4 font-semibold">
            Key Architecture Modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E6E4DE]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#3458D4] shrink-0 mt-0.5" />
                <span className="text-xs text-[#555555] leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Technical Challenges & Engineering Solutions */}
        {project.challenges && (
          <div className="mt-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-4 font-semibold">
              Technical Challenges Solved
            </h3>
            <div className="space-y-4">
              {project.challenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#F7F6F2] border border-[#E6E4DE]"
                >
                  <h4 className="text-sm font-bold text-[#171717] mb-2 font-display">
                    {item.challenge}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 5: Tech Stack & Verification Links */}
        <div className="mt-8 pt-6 border-t border-[#E6E4DE] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#777777] block mb-2 font-semibold">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono text-[#555555] bg-[#F7F6F2] border border-[#E6E4DE]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {project.demo && project.demo !== project.github && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md font-mono text-xs font-semibold text-white bg-[#3458D4] hover:bg-[#2648BD] transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md font-mono text-xs font-medium text-[#171717] bg-[#FFFFFF] hover:bg-[#F7F6F2] border border-[#E6E4DE] transition-colors inline-flex items-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#171717]" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
