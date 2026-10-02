import React, { useState } from 'react'
import { skillCategories, skillsData } from '../data/skillsData'
import { Layers, Server, BrainCircuit, Database, Wrench, Code2 } from 'lucide-react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState(null)

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory)

  const categoryIcons = {
    frontend: <Layers className="w-4 h-4 text-[#3458D4]" />,
    backend: <Server className="w-4 h-4 text-[#10b981]" />,
    ai: <BrainCircuit className="w-4 h-4 text-[#6366f1]" />,
    databases: <Database className="w-4 h-4 text-[#0ea5e9]" />,
    tools: <Wrench className="w-4 h-4 text-[#f59e0b]" />
  }

  const categorizedGroups = [
    { id: 'frontend', name: 'Frontend Development', skills: skillsData.filter((s) => s.category === 'frontend') },
    { id: 'backend', name: 'Backend Development', skills: skillsData.filter((s) => s.category === 'backend') },
    { id: 'ai', name: 'AI & Machine Learning', skills: skillsData.filter((s) => s.category === 'ai') },
    { id: 'databases', name: 'Databases', skills: skillsData.filter((s) => s.category === 'databases') },
    { id: 'tools', name: 'Programming & Tools', skills: skillsData.filter((s) => s.category === 'tools') }
  ]

  const architectureHighlights = [
    {
      title: 'Full-Stack Web Architectures',
      desc: 'End-to-end applications built with React 19, TypeScript, Node.js, Express, and secure JWT authentication.',
      icon: <Layers className="w-4 h-4 text-[#3458D4]" />
    },
    {
      title: 'Applied AI & RAG Retrieval',
      desc: 'Dense vector search with Supabase pgvector HNSW indexing, FAISS similarity clustering, and prompt synthesis.',
      icon: <BrainCircuit className="w-4 h-4 text-[#6366f1]" />
    },
    {
      title: 'Database Schema Modeling',
      desc: 'Relational data modeling in PostgreSQL with Row-Level Security (RLS) and geospatial indexing in MongoDB 2dsphere.',
      icon: <Database className="w-4 h-4 text-[#0ea5e9]" />
    },
    {
      title: 'Algorithmic Problem Solving',
      desc: '200+ LeetCode problems solved across Trees, Graphs, DP, and Arrays in Java & Python with time-space optimization.',
      icon: <Code2 className="w-4 h-4 text-[#f59e0b]" />
    }
  ]

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E6E4DE] bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#3458D4] uppercase">
              04 / SKILLS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171717] tracking-tight leading-tight">
            Technical Stack &amp; Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed font-light">
            Tools, frameworks, and engineering competencies I use to build reliable, high-performance software. Prioritizing clarity and genuine production utility over arbitrary percentages.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-md text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#171717] text-white font-semibold shadow-xs'
                  : 'bg-[#FFFFFF] text-[#666666] hover:text-[#171717] border border-[#E6E4DE] hover:border-[#D0CDC4]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Skill Detail Banner */}
        {selectedSkill && (
          <div className="mb-8 p-4 rounded-xl bg-[#FFFFFF] border border-[#3458D4]/30 flex flex-wrap items-center justify-between gap-4 shadow-xs animate-fade-in">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: selectedSkill.color }} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#171717] text-sm font-display">{selectedSkill.name}</span>
                  <span className="text-xs text-[#3458D4] font-mono">({selectedSkill.categoryName})</span>
                </div>
                <p className="text-xs text-[#555555] mt-0.5">{selectedSkill.description}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs font-mono text-[#777777] hover:text-[#171717] px-3 py-1.5 rounded-md bg-[#F7F6F2] hover:bg-[#EFECE6] border border-[#E6E4DE] cursor-pointer transition-colors"
            >
              Dismiss ✕
            </button>
          </div>
        )}

        {/* Structured Grid: All Categories or Filtered View */}
        {activeCategory === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedGroups.map((group) => (
              <div
                key={group.id}
                className="swiss-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#3458D4] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-4 border-b border-[#E6E4DE] mb-5">
                    {categoryIcons[group.id]}
                    <h3 className="font-display font-bold text-base text-[#171717]">
                      {group.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        onClick={() => setSelectedSkill(skill)}
                        className="group p-2 -mx-2 rounded-lg hover:bg-[#F7F6F2] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-tech font-semibold text-[#171717] group-hover:text-[#3458D4] transition-colors">
                            {skill.name}
                          </span>
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                        <p className="text-xs text-[#555555] mt-1 leading-relaxed font-light">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSkill(skill)}
                className="swiss-card rounded-2xl p-6 hover:border-[#3458D4] transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-base text-[#171717]">
                    {skill.name}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <span className="text-[11px] font-mono text-[#777777] uppercase tracking-wider block mb-2 font-medium">
                  {skill.categoryName}
                </span>
                <p className="text-xs text-[#555555] leading-relaxed font-light">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Engineering Highlights Banner */}
        <div className="mt-16 pt-12 border-t border-[#E6E4DE]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-6 font-semibold">
            Core Architectural Capabilities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {architectureHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E6E4DE] flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="p-2 rounded-md bg-[#F7F6F2] border border-[#E6E4DE] w-fit mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#171717] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
