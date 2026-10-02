import React from 'react'
import { Search, Compass, Code, CheckCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand requirements and goals',
      icon: <Search className="w-5 h-5 text-[#3458D4]" />,
      description:
        'Deep-dive into your product vision, target audience, core technical requirements, and business constraints to ensure we are building the right solution.'
    },
    {
      number: '02',
      title: 'Plan',
      tagline: 'Define features, architecture, and priorities',
      icon: <Compass className="w-5 h-5 text-[#3458D4]" />,
      description:
        'Map database schemas, select the optimal tech stack, structure API endpoints, and establish a clear development roadmap with transparent milestones.'
    },
    {
      number: '03',
      title: 'Develop',
      tagline: 'Build and refine the product',
      icon: <Code className="w-5 h-5 text-[#3458D4]" />,
      description:
        'Implement the application with clean, modular code, responsive interfaces, robust authentication, and rigorous error handling across each component.'
    },
    {
      number: '04',
      title: 'Deliver',
      tagline: 'Test, polish, and prepare for deployment',
      icon: <CheckCircle className="w-5 h-5 text-[#3458D4]" />,
      description:
        'Conduct cross-browser quality assurance, optimize database queries and bundle size, and execute seamless deployment with complete code handoff.'
    }
  ]

  return (
    <section id="process" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E6E4DE] bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#3458D4] uppercase">
              03 / PROCESS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171717] tracking-tight leading-tight">
            How I Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed font-light">
            A disciplined, transparent engineering methodology designed to respect timelines, maintain open communication, and produce predictable results.
          </p>
        </div>

        {/* Horizontal Process on Desktop / Vertical on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="swiss-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative hover:border-[#3458D4] transition-all duration-200 group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E6E4DE] mb-5">
                  <span className="font-mono text-sm font-bold text-[#3458D4] tracking-widest">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-md bg-[#F7F6F2] border border-[#E6E4DE] text-[#3458D4]">
                    {step.icon}
                  </div>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="font-display font-bold text-xl text-[#171717] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-[#3458D4] font-medium mb-3">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Step indicator bar */}
              <div className="mt-8 pt-4 border-t border-[#E6E4DE] flex items-center justify-between text-[11px] font-mono text-[#777777]">
                <span>Phase {step.number}</span>
                <span className="text-[#3458D4] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
