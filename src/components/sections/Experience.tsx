'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

const experiences = [
  {
    period: 'May - Jul 2025',
    role: 'Finance Intern',
    company: 'Sriram & Associates, Chartered Accountants',
    location: 'Bangalore, India',
    color: 'gold',
    headline: 'Streamlined audit cycles across 5+ enterprise accounts',
    impacts: [
      'Executed end-to-end audit processes, reducing review cycle time through streamlined financial statement preparation',
      'Rebuilt MIS reporting structure delivering monthly financial performance dashboards to improve management visibility',
      'Improved compliance reporting workflows across multiple client accounts simultaneously',
    ],
    tags: ['Audit', 'MIS Reporting', 'Tax Compliance', 'Financial Statements'],
  },
  {
    period: 'Aug - Oct 2024',
    role: 'Financial Analyst',
    company: 'Audit Partnership',
    location: 'Kathmandu / UK',
    color: 'teal',
    headline: 'Recovered lost revenue through forensic reconciliation',
    impacts: [
      'Conducted financial recovery analysis for a large-scale retail client, identifying billing discrepancies in complex account structures',
      'Recovered outstanding amounts through systematic reconciliation — turning ambiguous data into actionable recovery plans',
      'Built structured performance reports tracking recovery progress, improving visibility for cross-border audit team',
    ],
    tags: ['Financial Recovery', 'Reconciliation', 'Performance Reporting', 'Audit'],
  },
  {
    period: 'Jan - Aug 2024',
    role: 'Client Manager',
    company: 'CoPenned',
    location: 'Lalitpur, Nepal',
    color: 'gold',
    headline: '90%+ client retention through full-lifecycle ownership',
    impacts: [
      'Owned complete client lifecycle from prospecting through delivery using AirTable & Zoho Books CRM',
      'Partnered with marketing and product teams to execute growth strategy, contributing to measurable revenue increase in Q2-Q3 2024',
      'Maintained 90%+ client retention over the entire tenure — a metric of relationship quality, not just delivery',
    ],
    tags: ['CRM', 'Client Retention', 'Growth Strategy', 'AirTable', 'Zoho Books'],
  },
  {
    period: 'Mar - Jun 2023',
    role: 'Academic Intern',
    company: 'Agricultural Development Bank Ltd.',
    location: 'Kathmandu, Nepal',
    color: 'teal',
    headline: 'Zero compliance discrepancies across 1M+ customer bank',
    impacts: [
      'Supported credit processing and Demat/C-ASBA operations for a bank serving over 1 million customers',
      'Ensured zero compliance discrepancies across all assigned accounts — a standard that tolerates no errors',
      'Built foundational understanding of regulatory compliance in large-scale banking operations',
    ],
    tags: ['Credit Processing', 'Demat Operations', 'C-ASBA', 'Banking Compliance'],
  },
]

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative grid lg:grid-cols-[200px_1fr] gap-6 group"
    >
      {/* Period */}
      <div className="lg:text-right pt-1">
        <span className={`font-mono text-xs tracking-widest ${exp.color === 'gold' ? 'text-gold' : 'text-teal'}`}>
          {exp.period}
        </span>
        <div className="font-mono text-xs text-muted mt-1">{exp.location}</div>
      </div>

      {/* Connector dot (desktop) */}
      <div className="hidden lg:block absolute left-[204px] top-2 w-3 h-3 rounded-full border-2 border-current bg-bg z-10"
        style={{ color: exp.color === 'gold' ? '#C9A84C' : '#0FF4C6' }} />

      {/* Card */}
      <div className={`glass rounded-sm border border-border ${exp.color === 'gold' ? 'hover:border-gold/40' : 'hover:border-teal/40'} transition-all duration-400 p-7 border-gradient`}>
        <div className="mb-4">
          <h3 className="font-display text-2xl text-bright font-light mb-1 group-hover:text-gold-light transition-colors">
            {exp.role}
          </h3>
          <p className="font-mono text-sm text-muted">{exp.company}</p>
        </div>

        <p className={`font-medium text-sm mb-5 ${exp.color === 'gold' ? 'text-gold-light' : 'text-teal'}`}>
          → {exp.headline}
        </p>

        <ul className="space-y-3 mb-6">
          {exp.impacts.map((item, i) => (
            <li key={i} className="flex gap-3 text-subtle text-sm leading-relaxed font-light">
              <span className={`mt-1.5 shrink-0 w-1 h-1 rounded-full ${exp.color === 'gold' ? 'bg-gold/60' : 'bg-teal/60'}`} />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 font-mono text-xs bg-surface-2 border border-border text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <SectionLabel label="Experience" className="justify-center" />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-display text-5xl md:text-6xl font-light text-bright"
          >
            Impact,{' '}
            <span className="text-gradient-gold italic">not responsibilities</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-[215px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-teal/20 to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-12"
          >
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.role} exp={exp} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
