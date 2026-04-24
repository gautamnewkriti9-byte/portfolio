'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce, slideLeft, slideRight } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

const journey = [
  {
    period: '2018',
    location: 'Kathmandu, Nepal',
    icon: '🏔',
    title: 'The Foundation',
    description: 'Began BBA at Prime College, Tribhuvan University. Graduated as Batch Topper with 3.87/4.0 GPA and Student of the Batch Award — setting the standard early.',
  },
  {
    period: '2023',
    location: 'Kathmandu → UK',
    icon: '📊',
    title: 'Real-World Finance',
    description: 'Conducted financial recovery analysis for large retail clients in an audit partnership spanning Kathmandu and the UK. Discovered a passion for finding patterns where others see noise.',
  },
  {
    period: '2024',
    location: 'Lalitpur, Nepal',
    icon: '🚀',
    title: 'Building & Scaling',
    description: "Led client lifecycle management at CoPenned, achieving 90%+ retention. Realized that the most powerful skill isn't knowing finance — it's automating it.",
  },
  {
    period: '2024',
    location: 'India (National)',
    icon: '🏆',
    title: 'Scholarship & MBA',
    description: 'Won the Sushma Swaraj Silver Jubilee Scholarship — a merit-based competitive national selection by the Government of India (EdCIL). Enrolled in MBA at Amity Business School.',
  },
  {
    period: '2025',
    location: 'Amity University, India',
    icon: '🤖',
    title: 'AI + Finance Builder',
    description: 'Shipped 3 live AI tools, led International Student Club as President, and completed a finance internship. CGPA 9.13. Now targeting the intersection of AI, finance, and strategy at scale.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — story text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionLabel label="My Story" />

            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-light text-bright leading-tight mb-8"
            >
              From the Himalayas<br />
              to the <span className="text-gradient-gold italic">frontier of AI</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-subtle text-lg leading-relaxed mb-6 font-light">
              I grew up in Nepal — a country where resilience isn't a buzzword, it's a survival skill.
              My journey through finance wasn't just academic. I've recovered lost revenue for real businesses,
              managed client relationships worth months of trust, and supported banking operations serving over a million customers.
            </motion.p>

            <motion.p variants={fadeUp} className="text-subtle text-lg leading-relaxed mb-6 font-light">
              But what changed everything was asking: <span className="text-text italic">"What if I could automate what I just spent weeks doing manually?"</span>
              That question led me to Python, AI APIs, and eventually — three live products used by real people.
            </motion.p>

            <motion.p variants={fadeUp} className="text-subtle text-lg leading-relaxed mb-10 font-light">
              Today, I hold a national government scholarship in India, lead international student communities,
              and build tools that turn complex financial data into decisions anyone can act on.
              I'm not chasing a career. I'm building a body of work.
            </motion.p>

            {/* Key values */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { label: 'AI Product Builder', icon: '⚡' },
                { label: 'Finance Analyst', icon: '📈' },
                { label: 'Strategy Thinker', icon: '🎯' },
                { label: 'Client Leader', icon: '🤝' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 glass rounded-sm border-gradient">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-mono text-xs text-subtle tracking-wide uppercase">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-teal/30 to-transparent" />

            <div className="space-y-8">
              {journey.map((item, i) => (
                <motion.div
                  key={item.period}
                  variants={fadeUp}
                  className="relative pl-16"
                >
                  {/* Node */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-xl z-10">
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className="glass rounded-sm p-5 hover:border-gold/30 transition-all duration-300 group border-gradient">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-gold tracking-widest">{item.period}</span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="font-mono text-xs text-muted">{item.location}</span>
                    </div>
                    <h3 className="font-display text-xl text-bright mb-2 group-hover:text-gold-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-subtle text-sm leading-relaxed font-light">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
