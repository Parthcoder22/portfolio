import React from 'react'
import { GraduationCap, Code2, BrainCircuit, Trophy } from 'lucide-react'

export default function About() {
  const milestones = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#3458D4]" />,
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'The Maharaja Sayajirao University of Baroda (MSU)',
      period: '2023 — Present',
      details: 'Deep grounding in Data Structures, Algorithms, Operating Systems, Database Management Systems, and Software Engineering.'
    },
    {
      icon: <Trophy className="w-5 h-5 text-[#f59e0b]" />,
      title: '200+ Algorithmic Problems Solved',
      organization: 'LeetCode & Competitive Coding',
      period: 'Continuous Practice',
      details: 'Extensive problem solving across Trees, Graphs, Dynamic Programming, and Arrays in Java & Python, building strong intuition for complexity optimization.'
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-[#10b981]" />,
      title: 'Applied AI & RAG Engineering',
      organization: 'Independent Systems & Builds',
      period: '2024 — Present',
      details: 'Hands-on implementation of Retrieval-Augmented Generation, FAISS vector embeddings, Supabase pgvector HNSW indexing, and FastAPI microservices.'
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#6366f1]" />,
      title: 'Full-Stack Software Development',
      organization: 'Production-ready Web Applications',
      period: '2024 — Present',
      details: 'Architecting end-to-end web applications with React, Next.js, Node.js, Express, PostgreSQL, MongoDB, and secure authentication systems.'
    }
  ]

  const technicalInterests = [
    'Applied AI & Retrieval-Augmented Generation (RAG)',
    'Modern Full-Stack Web Architectures',
    'Relational (PostgreSQL) & Document (MongoDB) Schema Design',
    'High-Performance Algorithmic Problem Solving',
    'Responsive, Accessible User Interface Engineering'
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E6E4DE] bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#3458D4] uppercase">
                05 / ABOUT
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171717] tracking-tight leading-tight">
              Curious by Nature. Driven by Building.
            </h2>

            <div className="mt-8 space-y-5 text-[#555555] font-light text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a Computer Science and Engineering student interested in software engineering, artificial intelligence, and digital product development.
              </p>
              <p>
                I enjoy exploring technologies, solving challenging problems, and transforming ideas into functional applications.
              </p>
              <p>
                My goal is to create software that combines strong engineering with a thoughtful user experience.
              </p>
            </div>

            {/* Core Technical Interests */}
            <div className="mt-10 pt-8 border-t border-[#E6E4DE]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-4 font-semibold">
                Technical Focus Areas
              </h3>
              <ul className="space-y-2.5">
                {technicalInterests.map((interest, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#555555]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3458D4] shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Editorial Monogram Spec Card */}
            <div className="mt-8 p-5 rounded-xl bg-[#FFFFFF] border border-[#E6E4DE] flex items-center gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#171717] text-[#F7F6F2] flex items-center justify-center font-display font-black text-lg shrink-0">
                PG
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#171717] block font-display">PARTH GOHEL</span>
                <span className="text-[#777777] font-mono">Computer Science &amp; Engineering &bull; MSU Baroda</span>
              </div>
            </div>
          </div>

          {/* Right Column: Genuine Milestones & Foundation */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-6 font-semibold">
              Academic &amp; Technical Foundation
            </h3>

            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="swiss-card rounded-2xl p-5 sm:p-6 hover:border-[#3458D4] transition-all duration-200"
              >
                <div className="flex flex-col xs:flex-row items-start gap-4">
                  <div className="p-2.5 rounded-md bg-[#F7F6F2] border border-[#E6E4DE] shrink-0">
                    {milestone.icon}
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-bold text-base text-[#171717]">
                        {milestone.title}
                      </h4>
                      <span className="text-[11px] font-mono text-[#777777] bg-[#F7F6F2] px-2 py-0.5 rounded border border-[#E6E4DE]">
                        {milestone.period}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#3458D4] font-medium block mt-0.5 mb-2">
                      {milestone.organization}
                    </span>
                    <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                      {milestone.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
