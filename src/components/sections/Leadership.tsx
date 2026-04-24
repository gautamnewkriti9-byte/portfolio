'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

const achievements = [
  {
    icon: '🏛',
    title: 'President',
    subtitle: 'International Student Club',
    org: 'Amity University',
    description: 'Leading multicultural engagement and international collaborations across 15+ nationalities. Driving community, cultural exchange, and global student initiatives.',
    color: 'gold',
    stat: '15+',
    statLabel: 'Nationalities',
  },
  {
    icon: '🏆',
    title: 'National Scholar',
    subtitle: 'Sushma Swaraj Silver Jubilee Scholarship',
    org: 'Govt. of India / EdCIL',
    description: 'Merit-based competitive national selection — one of the most prestigious scholarships for international students pursuing higher education in India.',
    color: 'teal',
    stat: '#1',
    statLabel: 'Competitive Select',
  },
  {
    icon: '🥇',
    title: '1st Place',
    subtitle: 'Infinity Business Competition',
    org: 'Amity Business School',
    description: 'Won the flagship business strategy competition at Amity Business School, demonstrating real-world problem-solving, financial acumen, and strategic thinking under pressure.',
    color: 'gold',
    stat: '1st',
    statLabel: 'Place',
  },
  {
    icon: '📣',
    title: 'PR Head',
    subtitle: 'Debate Club',
    org: 'Amity University',
    description: 'Overseeing communications, event promotion, and brand presence for one of campus\'s most competitive intellectual forums.',
    color: 'teal',
    stat: '∞',
    statLabel: 'Debates Won',
  },
  {
    icon: '⚽',
    title: 'Best Futsal Player (Girls)',
    subtitle: 'Multi-Sport Medalist',
    org: 'Inter-College Competitions',
    description: 'Recognized as best futsal player and multi-sport medalist. Led sports marketing campaigns with measurable sponsorship growth as Marketing Director of Prime Sports Club.',
    color: 'gold',
    stat: '🥇',
    statLabel: 'Multiple Medals',
  },
  {
    icon: '🤝',
    title: 'Member',
    subtitle: 'LEO Club Alka',
    org: 'Community Service',
    description: 'Active member driving community service and social initiatives — extending impact beyond the classroom into meaningful change.',
    color: 'teal',
    stat: '↑',
    statLabel: 'Community Impact',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-gold/4 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-20">
          <SectionLabel label="Leadership" className="justify-center" />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-display text-5xl md:text-6xl font-light text-bright"
          >
            Beyond the{' '}
            <span className="text-gradient-gold italic">spreadsheet</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 text-subtle max-w-lg mx-auto font-light"
          >
            Leadership, recognition, and community — because great professionals are built in many rooms.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group glass rounded-sm border border-border hover:border-${item.color}/40 transition-all duration-400 p-7 border-gradient relative overflow-hidden`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${item.color === 'gold' ? 'from-transparent via-gold/60 to-transparent' : 'from-transparent via-teal/60 to-transparent'}`} />

              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{item.icon}</span>
                <div className="text-right">
                  <div className={`font-display text-2xl font-light ${item.color === 'gold' ? 'text-gold-light' : 'text-teal'}`}>
                    {item.stat}
                  </div>
                  <div className="font-mono text-xs text-muted">{item.statLabel}</div>
                </div>
              </div>

              <h3 className="font-display text-xl text-bright font-light mb-1 group-hover:text-gold-light transition-colors">
                {item.title}
              </h3>
              <p className={`font-mono text-xs mb-1 ${item.color === 'gold' ? 'text-gold' : 'text-teal'}`}>
                {item.subtitle}
              </p>
              <p className="font-mono text-xs text-muted mb-4">{item.org}</p>
              <p className="text-subtle text-sm leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 glass rounded-sm border border-border p-8 md:p-12 border-gradient relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-teal/40" />
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                degree: 'MBA — General Management',
                school: 'Amity Business School, Amity University',
                period: '2024 - Present',
                gpa: '9.13 / 10',
                note: 'Sushma Swaraj Silver Jubilee Scholar · President, International Student Club',
                color: 'gold',
              },
              {
                degree: 'BBA',
                school: 'Prime College, Tribhuvan University',
                period: '2018 - 2023',
                gpa: '3.87 / 4.0',
                note: 'Batch Topper · Merit Scholarship · Student of the Batch Award 2023',
                color: 'teal',
              },
            ].map((edu) => (
              <div key={edu.degree}>
                <p className="font-mono text-xs text-muted mb-2 tracking-widest uppercase">{edu.period}</p>
                <h3 className="font-display text-2xl text-bright font-light mb-1">{edu.degree}</h3>
                <p className="text-subtle text-sm mb-3">{edu.school}</p>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm ${edu.color === 'gold' ? 'bg-gold/10 border border-gold/30' : 'bg-teal/10 border border-teal/30'}`}>
                  <span className={`font-display text-xl ${edu.color === 'gold' ? 'text-gold-light' : 'text-teal'}`}>{edu.gpa}</span>
                  <span className="font-mono text-xs text-muted">CGPA</span>
                </div>
                <p className="mt-3 font-mono text-xs text-muted leading-relaxed">{edu.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
