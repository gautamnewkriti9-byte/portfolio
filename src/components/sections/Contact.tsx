'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { Mail, Linkedin, ArrowRight, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Large ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-gold/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative text-center">
        <SectionLabel label="Contact" className="justify-center" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display text-5xl md:text-7xl font-light text-bright leading-tight mb-6"
        >
          Let's build something{' '}
          <span className="text-gradient-gold italic">impactful</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-subtle text-xl font-light max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Whether you're hiring, collaborating, or just want to talk AI + finance —
          my inbox is always open.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 gap-5 mb-14 max-w-xl mx-auto"
        >
          {[
            {
              icon: Mail,
              label: 'Email',
              value: 'gautamnewkriti9@gmail.com',
              href: 'mailto:gautamnewkriti9@gmail.com',
              color: 'gold',
            },
            {
              icon: Linkedin,
              label: 'LinkedIn',
              value: 'linkedin.com/in/newkritigautam',
              href: 'https://linkedin.com/in/newkritigautam',
              color: 'teal',
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                variants={fadeUp}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                className={`group glass rounded-sm border border-border hover:border-${item.color}/50 transition-all duration-400 p-7 text-left border-gradient`}
              >
                <div className={`inline-flex p-2.5 rounded-sm mb-4 ${item.color === 'teal' ? 'bg-teal/10 border border-teal/30' : 'bg-gold/10 border border-gold/30'}`}>
                  <Icon size={18} className={item.color === 'teal' ? 'text-teal' : 'text-gold'} />
                </div>
                <p className="font-mono text-xs text-muted mb-1 tracking-widest uppercase">{item.label}</p>
                <p className={`font-body text-sm ${item.color === 'teal' ? 'text-teal' : 'text-gold-light'} group-hover:underline break-all`}>
                  {item.value}
                </p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center justify-center gap-2 mb-12 text-muted"
        >
          <MapPin size={12} />
          <span className="font-mono text-xs tracking-widest uppercase">Amity University, Noida, India · Open to Remote & Relocation</span>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <a
            href="mailto:gautamnewkriti9@gmail.com"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-bg font-body font-medium text-base tracking-wide hover:shadow-[0_0_60px_rgba(201,168,76,0.5)] transition-all duration-400 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Send me a message
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gold-light translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
