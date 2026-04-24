'use client'
import { motion } from 'framer-motion'
import { BarChart3, Brain, TrendingUp, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

const projects = [
  {
    id: '01',
    icon: Brain,
    tag: 'Data Tool',
    title: 'Business Intelligence Dashboard',
    tagline: 'Upload a dataset, get instant charts and analysis.',
    problem: 'Analysing business data manually in spreadsheets takes time and often misses key patterns.',
    solution: 'A web tool where you upload any CSV file and it automatically generates charts, summaries, and a plain-English report.',
    impact: 'Built and deployed publicly. Anyone can use it without any technical setup.',
    tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    url: 'https://bi-agents.streamlit.app',
    color: 'gold',
    gradient: 'from-gold/10 to-transparent',
    borderHover: 'hover:border-gold/50',
    borderBase: 'border-gold/20',
    glowColor: 'rgba(201,168,76,0.12)',
    metrics: [
      { label: 'Input', value: 'CSV' },
      { label: 'Output', value: 'Charts' },
      { label: 'Setup', value: 'None' },
    ],
    mockupLines: [
      '> Uploading sales_q3.csv...',
      '> Reading 2,847 rows...',
      'Revenue peaked in Week 11',
      '3 accounts flagged for review',
      'Summary report generated',
    ],
  },
  {
    id: '02',
    icon: TrendingUp,
    tag: 'Finance Tool',
    title: 'Company Financial Health Checker',
    tagline: 'Enter a company name, get a financial health summary.',
    problem: 'Reading a company financial report takes hours and requires knowing what to look for.',
    solution: 'A web app that pulls live financial data for any listed company and scores it across 6 key metrics like liquidity, debt, and profitability.',
    impact: 'Free to use, no login needed. Useful for analysts, students, and investors who want a quick read on any company.',
    tech: ['Python', 'Streamlit', 'yFinance', 'Pandas'],
    url: 'https://financial-scorecard.streamlit.app',
    color: 'teal',
    gradient: 'from-teal/10 to-transparent',
    borderHover: 'hover:border-teal/50',
    borderBase: 'border-teal/20',
    glowColor: 'rgba(15,244,198,0.12)',
    metrics: [
      { label: 'Metrics', value: '6' },
      { label: 'Data', value: 'Live' },
      { label: 'Cost', value: 'Free' },
    ],
    mockupLines: [
      '> Fetching AAPL data...',
      '> Calculating ratios...',
      'Liquidity: Strong',
      'Debt level: Manageable',
      'Overall score: 8.4 / 10',
    ],
  },
  {
    id: '03',
    icon: BarChart3,
    tag: 'Financial Analysis',
    title: 'Apple Inc. 4-Year Financial Analysis',
    tagline: 'A full financial performance review of Apple from 2020 to 2024.',
    problem: "Apple's shift from hardware to services changes its financial profile significantly, but this is hard to see from raw data alone.",
    solution: 'Built a data pipeline to calculate 5 key financial ratios across 4 years, then visualised them in an interactive Tableau dashboard.',
    impact: 'The analysis clearly shows how Apple has grown its profit margins as services revenue increased — a concrete strategic insight.',
    tech: ['Python', 'Tableau', 'Pandas', 'yFinance'],
    url: 'https://public.tableau.com/app/profile/newkriti.gautam/viz/AppleInc_FinancialPerformanceAnalysis/AppleInc_FinancialPerformanceAnalysis20222025',
    color: 'gold',
    gradient: 'from-gold/8 to-teal/5',
    borderHover: 'hover:border-gold/40',
    borderBase: 'border-border',
    glowColor: 'rgba(201,168,76,0.08)',
    metrics: [
      { label: 'Years', value: '4' },
      { label: 'Ratios', value: '5' },
      { label: 'Tool', value: 'Tableau' },
    ],
    mockupLines: [
      '> Loading 4 years of data...',
      '> Calculating 5 ratios...',
      'Gross Margin: up from 44% to 46%',
      'Services Revenue: growing fast',
      'Dashboard ready to view',
    ],
  },
]

function MockupTerminal({ lines, color }: { lines: string[]; color: string }) {
  return (
    <div className="glass rounded-sm border border-border p-4 font-mono text-xs">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
      </div>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
          className={`mb-1 ${line.startsWith('>') ? 'text-muted' : color === 'teal' ? 'text-teal' : 'text-gold-light'}`}
        >
          {line.startsWith('>') ? line : `\u2726 ${line}`}
        </motion.div>
      ))}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <SectionLabel label="Projects" className="justify-center" />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-display text-5xl md:text-6xl font-light text-bright leading-tight"
          >
            Work I have{' '}
            <span className="text-gradient-teal italic">built</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 text-subtle max-w-xl mx-auto font-light text-lg"
          >
            Three projects I built myself, all publicly available online.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-12"
        >
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.article
                key={project.id}
                variants={scaleIn}
                className={`group relative glass rounded-sm border ${project.borderBase} ${project.borderHover} transition-all duration-500 overflow-hidden`}
                whileHover={{ boxShadow: `0 0 60px ${project.glowColor}` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2 rounded-sm border ${project.color === 'teal' ? 'border-teal/30 bg-teal/10' : 'border-gold/30 bg-gold/10'}`}>
                          <Icon size={18} className={project.color === 'teal' ? 'text-teal' : 'text-gold'} />
                        </div>
                        <span className="font-mono text-xs text-muted tracking-widest uppercase">{project.tag}</span>
                        <span className="ml-auto font-mono text-xs text-border">{project.id}</span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl text-bright font-light mb-3 group-hover:text-gold-light transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className={`font-mono text-sm mb-6 ${project.color === 'teal' ? 'text-teal' : 'text-gold'}`}>
                        {project.tagline}
                      </p>
                      <div className="space-y-4 mb-8">
                        {[
                          { label: 'Problem', text: project.problem },
                          { label: 'Solution', text: project.solution },
                          { label: 'Outcome', text: project.impact },
                        ].map((item) => (
                          <div key={item.label} className="flex gap-4">
                            <span className={`font-mono text-xs mt-0.5 shrink-0 ${project.color === 'teal' ? 'text-teal' : 'text-gold'}`}>
                              {item.label}
                            </span>
                            <p className="text-subtle text-sm leading-relaxed font-light">{item.text}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1 font-mono text-xs bg-surface-2 border border-border text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-6 mb-8">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className={`font-display text-2xl font-light ${project.color === 'teal' ? 'text-teal' : 'text-gold-light'}`}>
                              {m.value}
                            </div>
                            <div className="font-mono text-xs text-muted mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-mono text-sm tracking-wide transition-all duration-300 group/link ${
                          project.color === 'teal' ? 'text-teal hover:text-teal-dim' : 'text-gold hover:text-gold-light'
                        }`}
                      >
                        View Project
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                    <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                      <MockupTerminal lines={project.mockupLines} color={project.color} />
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
