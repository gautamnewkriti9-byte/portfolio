'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

const skillCategories = [
  {
    category: 'Finance',
    icon: '📈',
    color: 'gold',
    skills: [
      { name: 'Financial Modelling', level: 85 },
      { name: 'Ratio Analysis', level: 90 },
      { name: 'Audit & Compliance', level: 87 },
      { name: 'MIS Reporting', level: 88 },
      { name: 'Tally & Zoho Books', level: 80 },
    ],
  },
  {
    category: 'Analytics & BI',
    icon: '📊',
    color: 'teal',
    skills: [
      { name: 'Excel (Advanced)', level: 92 },
      { name: 'Tableau', level: 88 },
      { name: 'Power BI', level: 78 },
      { name: 'Google Data Studio', label: 80 },
      { name: 'SPSS / R', level: 72 },
    ],
  },
  {
    category: 'Business & Strategy',
    icon: '🎯',
    color: 'gold',
    skills: [
      { name: 'Client Management', level: 92 },
      { name: 'CRM (AirTable, Zoho)', level: 85 },
      { name: 'Business Strategy', level: 80 },
      { name: 'Stakeholder Communication', level: 88 },
      { name: 'Risk Management', level: 78 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠',
    color: 'teal',
    skills: [
      { name: 'Microsoft Office Suite', level: 92 },
      { name: 'Tableau Public', level: 85 },
      { name: 'Zoho Books', level: 82 },
      { name: 'AirTable', level: 85 },
      { name: 'Python (basic)', level: 60 },
    ],
  },
]

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs text-subtle">{name}</span>
        <span className={`font-mono text-xs ${color === 'teal' ? 'text-teal' : 'text-gold'}`}>{level}%</span>
      </div>
      <div className="h-1 bg-surface-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`h-full rounded-full ${color === 'teal' ? 'bg-teal' : 'bg-gold'}`}
          style={{ boxShadow: color === 'teal' ? '0 0 8px rgba(15,244,198,0.4)' : '0 0 8px rgba(201,168,76,0.4)' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-teal/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-20">
          <SectionLabel label="Capabilities" className="justify-center" />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-display text-5xl md:text-6xl font-light text-bright"
          >
            Skills I can{' '}
            <span className="text-gradient-gold italic">speak to confidently</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 text-subtle max-w-lg mx-auto font-light"
          >
            Built through real work experience — not just coursework.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              variants={fadeUp}
              className="glass rounded-sm border border-border p-8 group border-gradient"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className={`font-display text-xl font-light ${cat.color === 'teal' ? 'text-teal' : 'text-gold-light'}`}>
                  {cat.category}
                </h3>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level ?? 75}
                  color={cat.color}
                  delay={i * 0.1 + catIdx * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
