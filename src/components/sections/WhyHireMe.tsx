'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { CheckCircle, TrendingUp, Users, Award } from 'lucide-react'

const pillars = [
  {
    icon: TrendingUp,
    color: 'gold',
    title: 'Real finance experience, not just theory',
    description:
      'I have worked on actual audits, managed MIS reporting for multiple clients, and handled compliance for a bank serving over a million customers. I know how financial work operates in practice.',
    proof: '5+ client audits · Bank operations · MIS dashboards',
  },
  {
    icon: Users,
    color: 'teal',
    title: 'I retain clients and manage relationships',
    description:
      'At CoPenned I owned the full client journey from first contact through to delivery. I maintained over 90% client retention across my tenure by staying on top of communication and delivery.',
    proof: '90%+ retention · Full lifecycle ownership · CRM tools',
  },
  {
    icon: Award,
    color: 'gold',
    title: 'I perform at a high level academically',
    description:
      'I graduated as batch topper from my undergraduate degree and currently hold a 9.13 GPA in my MBA. I also won a competitive national scholarship from the Government of India.',
    proof: 'Sushma Swaraj Scholar · 9.13 CGPA · Batch Topper',
  },
  {
    icon: CheckCircle,
    color: 'teal',
    title: 'I take initiative beyond what is asked',
    description:
      'I built three data and finance tools that are live on the internet and available to anyone. I am not waiting for someone to give me a project — I find problems worth solving and work on them.',
    proof: '3 live projects · Deployed publicly · Self-initiated',
  },
]

const comparisons = [
  { typical: 'Studies financial models in class', mine: 'Applied them across 5+ real client accounts' },
  { typical: 'Lists Excel as a skill', mine: 'Builds MIS dashboards and financial reports in Excel' },
  { typical: 'Has a portfolio of case studies', mine: 'Has live projects anyone can open in a browser' },
  { typical: 'Talks about client management', mine: 'Maintained 90%+ retention over an 8-month tenure' },
]

export default function WhyHireMe() {
  return (
    <section id="why" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-teal/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-gold/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-20">
          <SectionLabel label="Why Me" className="justify-center" />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-display text-5xl md:text-6xl font-light text-bright"
          >
            What sets me{' '}
            <span className="text-gradient-teal italic">apart</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 text-subtle max-w-xl mx-auto font-light text-lg"
          >
            Four honest reasons — backed by specific examples from my work.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="glass rounded-sm border border-border p-8 group border-gradient transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-sm mb-5 ${p.color === 'teal' ? 'bg-teal/10 border border-teal/30' : 'bg-gold/10 border border-gold/30'}`}>
                  <Icon size={20} className={p.color === 'teal' ? 'text-teal' : 'text-gold'} />
                </div>
                <h3 className="font-display text-2xl text-bright font-light mb-3 group-hover:text-gold-light transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-subtle text-sm leading-relaxed mb-5 font-light">{p.description}</p>
                <div className={`px-3 py-1.5 rounded-sm inline-block font-mono text-xs ${p.color === 'teal' ? 'text-teal bg-teal/5 border border-teal/20' : 'text-gold bg-gold/5 border border-gold/20'}`}>
                  &#10003; {p.proof}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Comparison table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass rounded-sm border border-border overflow-hidden border-gradient"
        >
          <div className="grid grid-cols-2 border-b border-border">
            <div className="p-5 border-r border-border">
              <span className="font-mono text-xs text-muted tracking-widest uppercase">Typical Candidate</span>
            </div>
            <div className="p-5">
              <span className="font-mono text-xs text-gold tracking-widest uppercase">Newkriti Gautam</span>
            </div>
          </div>
          {comparisons.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 ${i < comparisons.length - 1 ? 'border-b border-border' : ''}`}>
              <div className="p-5 border-r border-border">
                <p className="text-muted text-sm font-light line-through decoration-muted/40">{row.typical}</p>
              </div>
              <div className="p-5">
                <p className="text-text text-sm font-light flex items-start gap-2">
                  <span className="text-teal mt-0.5 shrink-0">&#8594;</span>
                  {row.mine}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 text-center"
        >
          <blockquote className="font-display text-3xl md:text-4xl text-bright font-light leading-relaxed max-w-3xl mx-auto">
            &ldquo;I bring{' '}
            <span className="text-gradient-gold italic">financial discipline,</span>
            {' '}strong client skills, and the drive to{' '}
            <span className="text-gradient-teal italic">go beyond the brief.</span>&rdquo;
          </blockquote>
          <p className="mt-6 font-mono text-sm text-muted">— Newkriti Gautam, MBA Candidate</p>
        </motion.div>
      </div>
    </section>
  )
}
