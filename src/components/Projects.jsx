import React from 'react'
import { projectsData } from '../data/projectsData'
import { ArrowUpRight, Scale, ShieldCheck, MapPin, Briefcase } from 'lucide-react'
import { GithubIcon } from './ui/Icons'

// Polished, realistic UI Product Previews designed with Swiss Editorial Precision

function NyayaSahayakPreview() {
  return (
    <div className="w-full h-full rounded-xl bg-[#FFFFFF] border border-[#E6E4DE] p-5 sm:p-6 flex flex-col justify-between font-sans text-xs select-none shadow-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E6E4DE] pb-3">
        <div className="flex items-center gap-2 text-[#3458D4]">
          <Scale className="w-4 h-4" />
          <span className="font-semibold text-[#171717] text-xs font-display">
            NyayaSahayak &bull; Legal AI Console
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#3458D4]/10 text-[#3458D4] border border-[#3458D4]/20 font-medium">
          FAISS Vector RAG
        </span>
      </div>

      {/* Query & Retrieval Interface */}
      <div className="my-3 space-y-2.5">
        <div className="p-3 rounded-lg bg-[#F7F6F2] border border-[#E6E4DE]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#777777] mb-1">
            <span>CITIZEN INQUIRY</span>
            <span className="text-[#3458D4]">Constitutional / Property Law</span>
          </div>
          <p className="text-[#171717] text-xs font-medium">
            &ldquo;What are the legal remedies for delayed possession under RERA Act?&rdquo;
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#3458D4]/30 shadow-xs">
          <div className="flex items-center justify-between mb-1.5 text-[11px]">
            <span className="font-semibold text-[#171717] font-tech flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3458D4]" />
              FAISS Semantic Match (0.94 Similarity)
            </span>
            <span className="text-[10px] font-mono text-[#3458D4] bg-[#3458D4]/10 px-1.5 py-0.5 rounded">
              Verified Statute
            </span>
          </div>
          <p className="text-xs text-[#555555] leading-relaxed">
            Section 18, Real Estate (Regulation and Development) Act: Right to full refund with prescribed interest or monthly delayed compensation.
          </p>
          <div className="mt-2 pt-2 border-t border-[#E6E4DE] flex flex-wrap gap-2 text-[10px] font-mono text-[#666666]">
            <span className="px-1.5 py-0.5 rounded bg-[#F7F6F2]">&bull; RTI Drafting Ready</span>
            <span className="px-1.5 py-0.5 rounded bg-[#F7F6F2]">&bull; Case Vault Stored</span>
            <span className="px-1.5 py-0.5 rounded bg-[#F7F6F2]">&bull; Legal Aid Routed</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="pt-2.5 border-t border-[#E6E4DE] flex items-center justify-between text-[11px] text-[#777777] font-mono">
        <span>Bilingual RAG Pipeline</span>
        <span className="text-[#3458D4] font-medium">IPC / BNS Statute Linked</span>
      </div>
    </div>
  )
}

function GraminUdyamPreview() {
  return (
    <div className="w-full h-full rounded-xl bg-[#FFFFFF] border border-[#E6E4DE] p-5 sm:p-6 flex flex-col justify-between font-sans text-xs select-none shadow-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E6E4DE] pb-3">
        <div className="flex items-center gap-2 text-[#10b981]">
          <ShieldCheck className="w-4 h-4 text-[#10b981]" />
          <span className="font-semibold text-[#171717] text-xs font-display">
            ग्रामीण उद्यम सहायक &bull; Advisory Portal
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/25 font-medium">
          pgvector HNSW RAG
        </span>
      </div>

      {/* Voice Auto-fill & Financial Routing Box */}
      <div className="my-3 space-y-2.5">
        <div className="p-3 rounded-lg bg-[#F7F6F2] border border-[#E6E4DE]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#777777] mb-1">
            <span>VERNACULAR VOICE AUTO-FILL</span>
            <span className="text-[#10b981] font-medium">Whisper / Gemini</span>
          </div>
          <p className="text-[#171717] text-xs italic">
            &ldquo;Main Rampur mein dairy kholna chahta hoon, mere paas pandrah hazar rupaye hain...&rdquo;
          </p>
          <div className="mt-1.5 flex gap-2 text-[10px] font-mono">
            <span className="px-1.5 py-0.5 rounded bg-[#10b981]/10 text-[#0d9488] font-medium">&check; Sector: Dairy</span>
            <span className="px-1.5 py-0.5 rounded bg-[#3458D4]/10 text-[#3458D4] font-medium">&check; Equity: ₹15,000</span>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#10b981]/30 text-[#171717] shadow-xs">
          <div className="flex items-center justify-between mb-1 text-[11px]">
            <span className="font-semibold text-[#171717] font-tech">
              Micro Finance Scheme (≤₹1,40,000)
            </span>
            <span className="text-[10px] font-mono text-[#10b981] font-medium">6.5% &bull; 36 Mo</span>
          </div>
          <p className="text-xs text-[#555555] leading-snug">
            Borrower Equity: 10% (₹15,000) &bull; Subsidized Credit: 90% (₹1,35,000)
          </p>
          <div className="mt-2 pt-2 border-t border-[#E6E4DE] flex justify-between text-[10px] font-mono text-[#666666]">
            <span>CapEx (70%): ₹1,05,000</span>
            <span>OpEx (30%): ₹45,000</span>
            <span className="text-[#10b981] font-semibold">Reducing EMI: ₹4,136/mo</span>
          </div>
        </div>
      </div>

      {/* Bottom Tool Bar */}
      <div className="pt-2.5 border-t border-[#E6E4DE] flex items-center justify-between text-[11px] text-[#777777] font-mono">
        <span>45+ Official DPRs Indexed</span>
        <span className="text-[#10b981] font-medium">Bilingual PDF Export Ready</span>
      </div>
    </div>
  )
}

function PlacementSaaSPreview() {
  return (
    <div className="w-full h-full rounded-xl bg-[#FFFFFF] border border-[#E6E4DE] p-5 sm:p-6 flex flex-col justify-between font-sans text-xs select-none shadow-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E6E4DE] pb-3">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-[#8b5cf6]" />
          <span className="font-semibold text-[#171717] text-xs font-display">
            CareerFlow &bull; Recruiter Portal
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/25 font-medium">
          Drive #2025-CS
        </span>
      </div>

      {/* Candidate Pipeline Summary */}
      <div className="my-3 space-y-3">
        <div className="flex items-center justify-between p-3 rounded-lg bg-[#F7F6F2] border border-[#E6E4DE]">
          <div>
            <span className="text-[10px] font-mono text-[#777777] uppercase block">Candidate Qualification</span>
            <span className="text-xs font-bold text-[#171717]">Full-Stack Engineering Profile</span>
          </div>
          <span className="px-2 py-1 rounded bg-[#8b5cf6]/15 text-[#8b5cf6] font-mono text-xs font-bold">
            ATS Match 92%
          </span>
        </div>

        {/* Recruitment Stages */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
          <div className="p-2 rounded bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] font-medium">
            &check; Shortlisted
          </div>
          <div className="p-2 rounded bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 text-[#8b5cf6] font-medium">
            &bull; Technical Round
          </div>
          <div className="p-2 rounded bg-[#F7F6F2] border border-[#E6E4DE] text-[#999999]">
            &omicron; HR Interview
          </div>
        </div>
      </div>

      {/* Bottom Tool Bar */}
      <div className="pt-2.5 border-t border-[#E6E4DE] flex items-center justify-between text-[11px] text-[#777777] font-mono">
        <span>RBAC: Placement Coordinator</span>
        <span className="text-[#8b5cf6] font-medium">PostgreSQL Relational Sync</span>
      </div>
    </div>
  )
}

function MobilityTransitPreview() {
  return (
    <div className="w-full h-full rounded-xl bg-[#FFFFFF] border border-[#E6E4DE] p-5 sm:p-6 flex flex-col justify-between font-sans text-xs select-none shadow-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E6E4DE] pb-3">
        <div className="flex items-center gap-2 text-[#0ea5e9]">
          <MapPin className="w-4 h-4" />
          <span className="font-semibold text-[#171717] text-xs font-display">
            CABGO &bull; Transit Dispatch Telemetry
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/25 font-medium">
          2dsphere Spatial Index
        </span>
      </div>

      {/* Active Route Telemetry */}
      <div className="my-3 space-y-3">
        <div className="p-3 rounded-lg bg-[#F7F6F2] border border-[#E6E4DE]">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-[#171717] font-semibold">Active Transit #CB-104</span>
            <span className="text-[#10b981] font-mono text-[11px] font-medium">&bull; En Route</span>
          </div>

          <div className="space-y-1.5 text-[11px] text-[#555555] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
              <span>Pickup: Tech Innovation Campus</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span>Destination: Central Railway Terminal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tool Bar */}
      <div className="pt-2.5 border-t border-[#E6E4DE] flex items-center justify-between text-[11px] text-[#777777] font-mono">
        <span>Proximity Query: &lt;1.2km</span>
        <span className="text-[#0ea5e9] font-medium">Atomic Booking States</span>
      </div>
    </div>
  )
}

export default function Projects({ onOpenModal }) {
  const renderPreview = (type) => {
    switch (type) {
      case 'legal':
        return <NyayaSahayakPreview />
      case 'gramin':
        return <GraminUdyamPreview />
      case 'placement':
        return <PlacementSaaSPreview />
      case 'mobility':
        return <MobilityTransitPreview />
      default:
        return null
    }
  }

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E6E4DE] bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#3458D4] uppercase">
              01 / SELECTED WORK
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171717] tracking-tight leading-tight">
            Selected Case Studies &amp; Engineering Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed font-light">
            Comprehensive case studies demonstrating my capability to architect, develop, and deploy reliable digital products and applied AI systems.
          </p>
        </div>

        {/* Case Studies List - Alternating Layout */}
        <div className="space-y-12 sm:space-y-16">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 !== 0

            return (
              <div
                key={project.id}
                className="swiss-card rounded-2xl p-5 sm:p-8 lg:p-10 transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Column 1: Project Details */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3">
                      <span className="swiss-tag">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded font-semibold bg-[#3458D4]/10 text-[#3458D4] border border-[#3458D4]/20">
                          {project.badge}
                        </span>
                      )}
                      <span className="text-xs font-mono text-[#777777]">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#171717] break-words">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-tech text-[#3458D4] mt-1 mb-4 font-medium">
                      {project.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light mb-6">
                      {project.summary}
                    </p>

                    {/* Problem & Role Box */}
                    <div className="space-y-3 mb-6 p-4 rounded-lg bg-[#F7F6F2] border border-[#E6E4DE] text-xs">
                      <div>
                        <span className="text-[#171717] font-semibold block mb-0.5">The Problem:</span>
                        <p className="text-[#666666] leading-relaxed font-light">{project.problem}</p>
                      </div>
                      <div className="pt-2 border-t border-[#E6E4DE]">
                        <span className="text-[#171717] font-semibold block mb-0.5">My Contribution:</span>
                        <p className="text-[#666666] leading-relaxed font-light">{project.role}</p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-[11px] sm:text-xs font-mono text-[#555555] bg-[#FFFFFF] border border-[#E6E4DE]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => onOpenModal(project)}
                        className="w-full sm:w-auto px-5 py-3 rounded-md font-mono text-xs font-semibold text-white bg-[#3458D4] hover:bg-[#2648BD] active:scale-[0.99] transition-all cursor-pointer shadow-xs inline-flex items-center justify-center gap-1.5"
                      >
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-4 py-3 rounded-md font-mono text-xs font-medium text-[#171717] bg-[#FFFFFF] hover:bg-[#EFECE6] border border-[#E6E4DE] transition-all inline-flex items-center justify-center gap-2 text-center"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-[#171717]" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Column 2: Architectural Interactive Preview */}
                  <div className={`lg:col-span-5 w-full min-h-[320px] sm:min-h-[360px] h-full ${isReversed ? 'lg:order-1' : ''}`}>
                    {renderPreview(project.previewType)}
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
