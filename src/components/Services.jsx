import React from 'react'
import { Layers, Bot, LayoutDashboard, Rocket, ArrowUpRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      number: '01',
      id: 'web-dev',
      icon: <Layers className="w-5 h-5 text-[#3458D4]" />,
      title: 'Web Application Development',
      explanation:
        'Responsive, modern applications with clean frontend architecture and reliable backend functionality.',
      businessValue:
        'Eliminate performance bottlenecks and technical debt with scalable React & Node.js architectures designed for long-term maintainability.',
      skills: ['React', 'TypeScript', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL'],
      projectTypeLabel: 'Full-Stack Web Application'
    },
    {
      number: '02',
      id: 'ai-integration',
      icon: <Bot className="w-5 h-5 text-[#3458D4]" />,
      title: 'AI Integration',
      explanation:
        'AI-powered features, RAG applications, conversational interfaces, and intelligent workflows.',
      businessValue:
        'Ground LLMs on your proprietary data using FAISS and Supabase pgvector HNSW search, eliminating hallucinations and manual document workflows.',
      skills: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Gemini API', 'pgvector'],
      projectTypeLabel: 'AI-Powered Solution'
    },
    {
      number: '03',
      id: 'dashboards',
      icon: <LayoutDashboard className="w-5 h-5 text-[#3458D4]" />,
      title: 'Business Websites and Dashboards',
      explanation:
        'Professional websites, administrative interfaces, dashboards, and custom business solutions.',
      businessValue:
        'Consolidate internal operations and spreadsheet chaos into unified, role-based portals with real-time operational visibility.',
      skills: ['React', 'Tailwind CSS', 'PostgreSQL', 'RBAC Security', 'Analytics'],
      projectTypeLabel: 'Business Dashboard'
    },
    {
      number: '04',
      id: 'mvp-dev',
      icon: <Rocket className="w-5 h-5 text-[#3458D4]" />,
      title: 'MVP Development',
      explanation:
        'Turning early product ideas into working applications through practical planning, development, and refinement.',
      businessValue:
        'Help founders test hypothesis and gain traction rapidly with pragmatic architecture and zero bloated over-engineering.',
      skills: ['Rapid Prototyping', 'Modular Design', 'API Integrations', 'Clean Handoff'],
      projectTypeLabel: 'MVP & Startup Prototype'
    }
  ]

  const handleDiscussService = (projectTypeLabel) => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      const select = document.getElementById('project-type-select')
      if (select) {
        select.value = projectTypeLabel
        select.dispatchEvent(new Event('change', { bubbles: true }))
        select.focus()
      }
    }
  }

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E6E4DE] bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#3458D4] uppercase">
              02 / SERVICES
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171717] tracking-tight leading-tight">
            Services I Offer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed font-light">
            Engineered software solutions tailored for founders, startups, and established teams who value clean code, strong system design, and dependable delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="swiss-card rounded-2xl p-7 flex flex-col justify-between hover:border-[#3458D4] transition-all duration-200 group"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E6E4DE] mb-5">
                  <span className="font-mono text-xs font-bold text-[#3458D4] tracking-widest">
                    {service.number}
                  </span>
                  <div className="p-2 rounded-md bg-[#F7F6F2] border border-[#E6E4DE] text-[#3458D4]">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-[#171717] mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Short Explanation */}
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light mb-4">
                  {service.explanation}
                </p>

                {/* Business Value */}
                <p className="text-xs text-[#777777] leading-relaxed font-light mb-6 pb-5 border-b border-[#E6E4DE]">
                  {service.businessValue}
                </p>
              </div>

              <div>
                {/* Technical Skills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-[#666666] bg-[#F7F6F2] border border-[#E6E4DE]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Discuss CTA */}
                <button
                  onClick={() => handleDiscussService(service.projectTypeLabel)}
                  className="w-full py-2 px-3 rounded-md font-mono text-xs font-semibold text-[#171717] group-hover:text-white bg-[#FFFFFF] group-hover:bg-[#3458D4] border border-[#E6E4DE] group-hover:border-[#3458D4] transition-all duration-150 cursor-pointer inline-flex items-center justify-between"
                >
                  <span>Discuss Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
